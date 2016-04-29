import styles from './index.scss'
import { connect } from 'react-redux'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import i18next from 'i18next'

import config from 'utils/config'
import postsActions from 'actions/posts'
import tutorialActions from 'actions/tutorial'
import applicationActions from 'actions/application'

import Timeline from 'components/Timeline/index'
import Loading from 'components/Loading/index'
import Modal from 'components/Modal/index'
import ModalTutorial from 'components/Modal/Tutorial/index'

const mapStateToProps = (state) => ({
  posts: state.posts,
  tutorial: state.tutorial,
})

export class PostsView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
    tutorial: React.PropTypes.object.isRequired,
    toggleTutorialHasDone: React.PropTypes.func.isRequired,
    toggleModalPost: React.PropTypes.func.isRequired,
    toggleModalLogin: React.PropTypes.func.isRequired,
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

  _toggleTutorialHasDone() {
    this.props.toggleTutorialHasDone({
      type: 'in',
      name: 'PostsView',
    })
  }

  _showModalPost(e) {
    e.stopPropagation()
    this._toggleTutorialHasDone()
    if (!this.props.userFirebase) {
      return this.props.toggleModalLogin()
    }
    this.props.toggleModalPost()
  }

  render() {
    const contentStyleMd = {
      height: '150px',
    }
    return (
      <div className={styles.PostsView}>
        <Modal
          isShow={!this.props.tutorial.hasDone.in.PostsView}
          toggleShow={::this._toggleTutorialHasDone}
          contentStyleMd={contentStyleMd}>
          <ModalTutorial {...this.props}>
            <div>
              {i18next.t('ModalTutorial')}
              <div className='ModalPost__submit' onClick={::this._showModalPost}>投稿する</div>
            </div>
          </ModalTutorial>
        </Modal>
        <div className={styles.PostsView__container}>
          {this.state.postsFirebase.length === 0
            ? <Loading />
            : <Timeline items={this.state.postsFirebase} {...this.props} {...this.state} />}
        </div>
      </div>
    )
  }
}

const PostsViewWithMixin = reactMixin.decorate(ReactFireMixin)(PostsView)
export default connect(mapStateToProps, {
  ...postsActions,
  ...tutorialActions,
  ...applicationActions,
})(PostsViewWithMixin)
