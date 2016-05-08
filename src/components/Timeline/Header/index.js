import styles from './index.scss'
import i18next from 'i18next'
import Alert from 'react-s-alert'
import utils from 'utils/index'
import firebaseUtils from 'utils/firebase/index'

export default class TimelineHeader extends React.Component {
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
        setTimeout(() => Alert.info(i18next.t('success__posts__create')), 500)
      })
      .catch(() => {
        Alert.error(i18next.t('error__posts__create'))
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
      <div className={styles.TimelineHeader}>
        <div className={styles.TimelineHeader__container}>
          <form onSubmit={::this._createPost}>
            <input
              className={styles.TimelineHeader__input}
              type='text'
              placeholder={i18next.t('TimelineHeader__placeholder')}
              value={this.state.postContent.value}
              onChange={::this._changepostContent}/>
          </form>
        </div>
      </div>
    )
  }
}
