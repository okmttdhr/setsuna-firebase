import 'styles/core.scss'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Firebase from 'firebase'
import styles from './index.scss'
import Header from 'components/Header/index'
import config from 'utils/config'

const firebaseRef = new Firebase(config.firebase.demoRef)

export class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  constructor () {
    super()
    this.state = {
      userFirebase: undefined
    }
  }

  componentDidMount () {
    this._onAuth()
  }

  _onAuth () {
    firebaseRef.onAuth((authData) => {
      const hasUserFirebaseState = this.state.userFirebase
      if (!authData) {
        // 初回など、bindAsObjectがそもそもされていないときは、unbindを実行しない。
        if (!hasUserFirebaseState) return
        this.unbind('userFirebase')
        this.props.history.pushState(null, '/');
        return
      }
      const uid = authData.auth.uid
      const firebaseRefUsers = new Firebase(config.firebase.demoRef + 'users/' + uid)
      this.bindAsObject(firebaseRefUsers, 'userFirebase')
      this.props.history.pushState(null, '/timeline');
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
