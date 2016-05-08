import styles from './index.scss'
import { connect } from 'react-redux'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import i18next from 'i18next'

import config from 'utils/config'
import postsActions from 'actions/posts'
import applicationActions from 'actions/application'
import { WAIT_TIME } from 'utils/config'

import Timeline from 'components/Timeline/index'
import Loading from 'components/Loading/index'
import ModalTutorialPosts from 'components/Modal/Tutorial/Posts/index'

const mapStateToProps = (state) => ({
  posts: state.posts,
})

export class PostsView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,

    posts: React.PropTypes.object.isRequired,
    requestPosts: React.PropTypes.func.isRequired,
    requestPostsDone: React.PropTypes.func.isRequired,
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
    this.props.requestPosts()
    setTimeout(() => this.props.requestPostsDone(), WAIT_TIME)
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
    const refPosts = new Firebase(`${config.firebaseRef()}posts`)
    this.bindAsArray(
      refPosts.orderByChild('created_at').limitToLast(10),
      'postsFirebase'
    )
  }

  _getStars(userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refStars = new Firebase(`${config.firebaseRef()}stars/${userFirebase.auth.uid}`)
    this.bindAsArray(
      refStars.orderByChild('created_at').limitToLast(10),
      'starsFirebase'
    )
  }

  _renderTimeline() {
    if (this.props.posts.isLoading && this.state.postsFirebase.length === 0) {
      return <Loading />
    }
    if (this.state.postsFirebase.length === 0) {
      return i18next.t('error__404__posts') + i18next.t('tryAgainLater')
    }
    return <Timeline items={this.state.postsFirebase} {...this.props} {...this.state} />
  }

  render() {
    return (
      <div className={styles.PostsView}>
        <ModalTutorialPosts {...this.props} />
        <div className={styles.PostsView__container}>
          {this._renderTimeline()}
        </div>
      </div>
    )
  }
}

const PostsViewWithMixin = reactMixin.decorate(ReactFireMixin)(PostsView)
export default connect(mapStateToProps, {
  ...postsActions,
  ...applicationActions,
})(PostsViewWithMixin)
