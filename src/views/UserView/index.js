import styles from './index.scss'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Firebase from 'firebase'
import config from 'utils/config'

import UserSettings from 'components/User/Settings/index'
import Timeline from 'components/Timeline/index'
import Loading from 'components/Loading/index'

export class UserView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      postsFirebase: [],
    }
  }

  componentDidMount() {
    this._getUserPosts(this.props.userFirebase)
    this._getStars(this.props.userFirebase)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userFirebase && nextProps.userFirebase !== this.props.userFirebase) {
      this._getUserPosts(nextProps.userFirebase)
      this._getStars(nextProps.userFirebase)
    }
  }

  _isBinded(bindVar) {
    return typeof this.firebaseRefs[bindVar] !== 'undefined'
  }

  _getUserPosts(userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refPosts = new Firebase(`${config.firebase.demoRef}posts`)
    this.bindAsArray(
      refPosts.orderByChild('user_id').equalTo(userFirebase.auth.uid).limitToLast(10),
      'postsFirebase'
    )
  }

  _getStars(userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refStars = new Firebase(`${config.firebase.demoRef}stars/${userFirebase.auth.uid}`)
    this.bindAsArray(
      refStars.orderByChild('created_at').limitToLast(10),
      'starsFirebase'
    )
  }

  render() {
    return (
      <div className={styles.UserView}>
        <div className={styles.UserView__container}>
          <UserSettings {...this.props} />
          {this.state.postsFirebase.length === 0
            ? <Loading />
            : <Timeline items={this.state.postsFirebase} {...this.props} {...this.state} />}
        </div>
      </div>
    )
  }
}

export default reactMixin.decorate(ReactFireMixin)(UserView)
