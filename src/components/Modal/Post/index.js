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

  _showAlert() {
    Alert.info(i18next.t('post__success'))
  }

  _createPost(e) {
    e.preventDefault()
    if (!this._isInputValid()) return
    firebaseUtils.posts.create(this.props.userFirebase.auth.uid, this.state.postContent.value)
      .then(() => {
        this.setState({ postContent: utils.changedValue(this.state.postContent, '') })
        this.props.toggleModalPost()
        setTimeout(() => this._showAlert(), 500)
      })
      .catch(() => {
        Alert.info(i18next.t('error__post__create'))
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
          })} onClick={::this._createPost}>投稿する</div>
        </form>
      </div>
    )
  }
}

export default ModalPost
