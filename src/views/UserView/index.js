import styles from './index.scss'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Posts from 'components/Posts/index'

import Firebase from 'firebase'
import config from 'utils/config'
import firebaseUtils, {mixintest} from 'utils/firebase/index'

export class UserView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object
  }

  constructor () {
    super()
    this.state = {
      postsFirebase: []
    }
  }

  componentDidMount () {
    this._getUserPosts(this.props.userFirebase)
    this._getStars(this.props.userFirebase)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.userFirebase && nextProps.userFirebase !== this.props.userFirebase) {
      this._getUserPosts(nextProps.userFirebase)
      this._getStars(nextProps.userFirebase)
    }
  }

  _getUserPosts (userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refPosts = new Firebase(config.firebase.demoRef + 'posts')
    this.bindAsArray(
      refPosts.orderByChild('user_id').equalTo(userFirebase.auth.uid).limitToLast(10),
      'postsFirebase'
    )
  }

  _getStars (userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refStars = new Firebase(config.firebase.demoRef + 'stars/' + userFirebase.auth.uid)
    this.bindAsArray(
      refStars.orderByChild('created_at').limitToLast(10),
      'starsFirebase'
    )
  }

  render () {
    return (
      <div className={styles['UserView']}>
        {this.state.postsFirebase.length > 0
          ? <Posts {...this.props} {...this.state} /> : 'loading'}
      </div>
    )
  }
}

export default reactMixin.decorate({
  // ...ReactFireMixin,
  // ...firebaseUtils.mixins.base
  ...mixintest.base
})(UserView)
