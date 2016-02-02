import styles from './index.scss'
import utils from 'utils/index'
import config from 'utils/config'
import Firebase from 'firebase'

const firebaseRef = new Firebase(config.firebase.demoRef)

export default class PostsHeader extends React.Component {
  static propTypes = {
    postsFirebase: React.PropTypes.array,
    userFirebase: React.PropTypes.object
  }

  constructor () {
    super()
    this.state = {
      postContent: {
        value: null,
        valid: true
      }
    }
  }

  _createTaskMaster (e) {
    e.preventDefault()
    if (!this._isInputValid()) return
    firebaseRef.child('posts').push({
      user_id: this.props.userFirebase.auth.uid,
      content: this.state.postContent.value,
      created_at: Firebase.ServerValue.TIMESTAMP
    }, (err) => {
      if (err) alert('保存できませんでした。時間を経ってから再度お試しください。')
      this.setState({postContent: utils.changedValue(this.state.postContent, null)})
    })
  }

  _changepostContent (e) {
    this.setState({
      postContent: utils.changedValue(this.state.postContent, e.target.value)
    })
  }

  _isInputValid () {
    const {postContent} = this.state
    const items = [postContent]
    return utils.isVaild(items)
  }

  render () {
    return (
      <div className={styles['PostsHeader']}>
        <div>
          <form onSubmit={::this._createTaskMaster}>
            <input type='text' value={this.state.postContent.value} onChange={::this._changepostContent} />
          </form>
        </div>
      </div>
    )
  }
}
