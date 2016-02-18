import styles from './index.scss'
import { connect } from 'react-redux'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'

import config from 'utils/config'
import postsActions from 'actions/posts'
import Posts from 'components/Posts/index'

const mapStateToProps = (state) => ({
  posts: state.posts,
})

export class PostsView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      postsFirebase: [],
      starsFirebase: [],
    }
  }

  componentDidMount() {
    this._getPosts()
    this._getStars(this.props.userFirebase)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userFirebase && nextProps.userFirebase !== this.props.userFirebase) {
      this._getStars(nextProps.userFirebase)
    }
  }

  _isBinded(bindVar) {
    return typeof this.firebaseRefs[bindVar] !== 'undefined'
  }

  _getPosts() {
    const refPosts = new Firebase(`${config.firebase.demoRef}posts`)
    this.bindAsArray(
      refPosts.orderByChild('created_at').limitToLast(10),
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
      <div className={styles.PostsView}>
        <div className={styles.PostsView__container}>
          {this.state.postsFirebase.length > 0
            ? <Posts {...this.props} {...this.state} /> : 'loading'}
        </div>
      </div>
    )
  }
}

const PostsViewWithMixin = reactMixin.decorate(ReactFireMixin)(PostsView)
export default connect(mapStateToProps, { ...postsActions })(PostsViewWithMixin)
