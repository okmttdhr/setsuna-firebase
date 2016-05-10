import './index.scss'
import classNames from 'classnames'
import i18next from 'i18next'
import Alert from 'react-s-alert'

import utils from 'utils/index'
import firebaseUtils from 'utils/firebase/index'

export class ModalPost extends React.Component {
  static propTypes = {
    postsFirebase: React.PropTypes.array,
    userFirebase: React.PropTypes.object,
    toggleModalPost: React.PropTypes.func.isRequired,
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
    const userId = this.props.userFirebase ? this.props.userFirebase.auth.uid : null
    firebaseUtils.posts.create(userId, this.state.postContent.value)
      .then(() => {
        this.setState({ postContent: utils.changedValue(this.state.postContent, '') })
        this.props.toggleModalPost()
        setTimeout(() => Alert.info(i18next.t('success__posts__create')), 500)
      })
      .catch(() => {
        Alert.error(i18next.t('error__posts__create'))
      })
  }

  _changepostContent(e) {
    this.setState({ postContent: utils.changedValue(this.state.postContent, e.target.value) })
  }

  _isInputValid() {
    const { postContent } = this.state
    const items = [postContent]
    return utils.isVaild(items)
  }

  render() {
    return (
      <div
        className={classNames({
          ModalPost: true,
        })}>
        <form className='ModalPost__form' onSubmit={::this._createPost}>
          <input
            className={classNames({
              ModalPost__input: true,
            })}
            placeholder={i18next.t('TimelineHeader__placeholder')}
            value={this.state.postContent.value}
            onChange={::this._changepostContent}/>
          <div className={classNames({
            ModalPost__submit: true,
          })} onClick={::this._createPost}>{i18next.t('post')}</div>
        </form>
      </div>
    )
  }
}

export default ModalPost
