import 'styles/core.scss'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Firebase from 'firebase'
import styles from './index.scss'
import Header from 'components/Header/index'
import config from 'utils/config'
import { user as initialStateUsers } from 'reducers/initialState'

const firebaseRef = new Firebase(config.firebase.demoRef)

export class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  constructor () {
    super()
    this.state = {
      userFirebase: initialStateUsers
    }
  }

  componentDidMount () {
    let uid = null
    firebaseRef.onAuth(function (authData) {
      if (!authData) return
      uid = authData.auth.uid
    })
    const refUsers = new Firebase(config.firebase.demoRef + 'users/' + uid)
    this.bindAsObject(refUsers, 'users')
  }

  render () {
    // console.log('this.state')
    // console.log(this.state)
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
