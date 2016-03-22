import styles from './index.scss'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import config from 'utils/config'

import Loading from 'components/Loading/index'
import Post from 'components/Post/index'

export class PostView extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    userFirebase: React.PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      postFirebase: null,
      starsFirebase: [],
    }
  }

  componentDidMount() {
    this._getPost()
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

  _getPost() {
    const refPost = new Firebase(`${config.firebaseRef()}posts/${this.props.params.id}`)
    this.bindAsObject(refPost, 'postFirebase')
  }

  _getStars(userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refStars = new Firebase(`${config.firebaseRef()}stars/${userFirebase.auth.uid}`)
    this.bindAsArray(
      refStars.orderByChild('created_at').limitToLast(10),
      'starsFirebase'
    )
  }

  _renderPost() {
    const { postFirebase } = this.state
    if (!postFirebase) return <Loading />
    return <Post item={postFirebase} {...this.state} {...this.props} />
  }

  render() {
    return (
      <div className={styles.PostView}>
        {this._renderPost()}
      </div>
    )
  }
}

export default reactMixin.decorate(ReactFireMixin)(PostView)
