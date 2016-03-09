import styles from './index.scss'
import utils from 'utils/index'
import firebaseUtils from 'utils/firebase/index'

export default class PostsCreate extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    postsFirebase: React.PropTypes.array,
    userFirebase: React.PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      postContent: {
        value: null,
        valid: true,
      },
    }
  }

  _createPost(e) {
    e.preventDefault()
    if (!this._isInputValid()) return
    firebaseUtils.posts.create(this.props.userFirebase.auth.uid, this.state.postContent.value)
      .then(() => {
        this.setState({ postContent: utils.changedValue(this.state.postContent, null) })
      })
      .catch(() => {
        alert('保存できませんでした。時間が経ってから再度お試しください。')
      })
  }

  _changepostContent(e) {
    this.setState({
      postContent: utils.changedValue(this.state.postContent, e.target.value),
    })
  }

  _isInputValid() {
    const { postContent } = this.state
    const items = [postContent]
    return utils.isVaild(items)
  }

  render() {
    return (
      <div className={styles.PostsCreate}>
        {children}
      </div>
    )
  }
}
