import 'styles/core.scss'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import './index.scss'

import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Firebase from 'firebase'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Alert from 'react-s-alert'

import { WAIT_TIME } from 'constants'
import config from 'utils/config'
import firebaseUtils from 'utils/firebase/index'
import Loading from 'components/Loading/index'
import Navigation from 'components/Navigation/index'
import Modals from 'components/Modals/index'
import CustomAlert from 'components/CustomAlert/index'
import Footer from 'components/Footer/index'

const firebaseRef = new Firebase(config.firebaseRef())

export class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  constructor() {
    super()
    this.state = {
      userFirebase: undefined,
    }
  }

  componentDidMount() {
    this._onAuth()
    setTimeout(() => {
      this._watchConnected()
      document.querySelector('.CoreLayout__overlay').classList.add('CoreLayout__overlay--hide')
    }, WAIT_TIME)
  }

  _isBinded(bindVar) {
    return typeof this.firebaseRefs[bindVar] !== 'undefined'
  }

  _onAuth() {
    firebaseRef.onAuth((authData) => {
      if (!authData) {
        if (this._isBinded('userFirebase')) {
          this.unbind('userFirebase')
          this.props.history.pushState(null, '/')
        }
        return
      }
      firebaseUtils.users.create(authData)
        .then(() => {
          const uid = authData.auth.uid
          const firebaseRefUsers = new Firebase(`${config.firebaseRef()}users/${uid}`)
          this.bindAsObject(firebaseRefUsers, 'userFirebase')
          if (this.props.location.pathname === '/') {
            this.props.history.pushState(null, '/timeline')
          }
        })
    })
  }

  _setLang() {
    const options = {
      init: {
        fallbackLng: 'en',
        resources: {
          en: require('utils/i18n/resources/en'),
          ja: require('utils/i18n/resources/ja'),
        },
      },
    }

    i18next
      .use(LanguageDetector)
      .init(options.init)
  }

  _watchConnected() {
    const firebaseRefConnected = new Firebase(`${config.firebaseRef()}.info/connected`)
    firebaseRefConnected.on('value', (snap) => {
      if (!snap.val()) {
        Alert.error(i18next.t('connected__false'), {
          timeout: 'none',
        })
        return
      }
      Alert.closeAll()
    })
  }

  render() {
    this._setLang()
    const children = React.cloneElement(
      this.props.children,
      { userFirebase: this.state.userFirebase }
    )
    return (
      <div className='CoreLayout'>
        <Alert
          position='top-right'
          effect='slide'
          timeout={3000}
          contentTemplate={CustomAlert} />
        <Modals {...this.state} {...this.props} />
        <Navigation {...this.state} {...this.props} />
        <div className='CoreLayout__overlay'>
          <Loading />
        </div>
        <div className='CoreLayout__viewContainer'>
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default reactMixin.decorate(ReactFireMixin)(CoreLayout)
