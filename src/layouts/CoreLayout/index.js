import 'styles/core.scss'
// import 'material-design-lite/src/material-design-lite.scss'
// import 'material-design-lite/dist/material.css'
// import 'material-design-lite/dist/material.js'
import styles from './index.scss'

import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Firebase from 'firebase'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import Header from 'components/Header/index'
import config from 'utils/config'

const firebaseRef = new Firebase(config.firebase.demoRef)

export class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
  }

  constructor () {
    super()
    this.state = {
      userFirebase: undefined
    }
  }

  componentDidMount () {
    this._onAuth()
    const options = {
      init: {
        fallbackLng: 'en',
        resources: {
          en: require('utils/i18n/resources/en'),
          ja: require('utils/i18n/resources/ja')
        }
      }
    }

    i18next
      .use(LanguageDetector)
      .init(options.init)
  }

  _isBinded (bindVar) {
    return typeof this.firebaseRefs[bindVar] !== 'undefined'
  }

  _onAuth () {
    firebaseRef.onAuth((authData) => {
      if (!authData) {
        if (this._isBinded('userFirebase')) {
          this.unbind('userFirebase')
          this.props.history.pushState(null, '/')
        }
        return
      }
      const uid = authData.auth.uid
      const firebaseRefUsers = new Firebase(config.firebase.demoRef + 'users/' + uid)
      this.bindAsObject(firebaseRefUsers, 'userFirebase')
      if (this.props.location.pathname === '/') {
        this.props.history.pushState(null, '/timeline')
      }
    })
  }

  render () {
    const children = React.cloneElement(this.props.children, {userFirebase: this.state.userFirebase})
    return (
      <div className='page-container'>
        <Header userFirebase={this.state.userFirebase} />
        <div className={styles['CoreLayout__viewContainer']}>
          {children}
        </div>
      </div>
    )
  }
}

export default reactMixin.decorate(ReactFireMixin)(CoreLayout)
