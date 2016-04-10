// doing cors problem
  // editting Firebase's rule setting
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

import config from 'utils/config'
import Navigation from 'components/Navigation/index'
import Modals from 'components/Modals/index'
import CustomAlert from 'components/CustomAlert/index'

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
      const uid = authData.auth.uid
      const firebaseRefUsers = new Firebase(`${config.firebaseRef()}users/${uid}`)
      this.bindAsObject(firebaseRefUsers, 'userFirebase')
      if (this.props.location.pathname === '/') {
        this.props.history.pushState(null, '/timeline')
      }
    })
  }

  render() {
    const children = React.cloneElement(
      this.props.children,
      { userFirebase: this.state.userFirebase }
    )
    return (
      <div className='CoreLayout'>
        <Alert
          position='top-right'
          effect='slide'
          offset={100}
          timeout={3000}
          contentTemplate={CustomAlert} />
        <Modals {...this.state} {...this.props} />
        <Navigation {...this.state} {...this.props} />
        <div className='CoreLayout__viewContainer'>
          {children}
        </div>
      </div>
    )
  }
}

export default reactMixin.decorate(ReactFireMixin)(CoreLayout)
