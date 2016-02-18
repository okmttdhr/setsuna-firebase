import styles from './index.scss'
import i18next from 'i18next'
import utils from 'utils/index'
import firebaseUtils from 'utils/firebase/index'

export default class PostsHeader extends React.Component {
  static propTypes = {
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
      <div className={styles.PostsHeader}>
        <div className={styles.PostsHeader__container}>
          <form onSubmit={::this._createPost}>
            <input
              className={styles.PostsHeader__input}
              type='text'
              placeholder={i18next.t('PostsHeader__placeholder')}
              value={this.state.postContent.value}
              onChange={::this._changepostContent}/>
          </form>
        </div>
      </div>
    )
  }
}
