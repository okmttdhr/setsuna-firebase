import utils from 'utils/index'
import config from 'utils/config'
import Firebase from 'firebase'
import styles from './index.scss'

const firebaseRef = new Firebase(config.firebase.demoRef)

export default class Post extends React.Component {
  static propTypes = {
    taskMasters: React.PropTypes.object.isRequired,
    postsFirebase: React.PropTypes.array,
    setQuery: React.PropTypes.func.isRequired,

    userFirebase: React.PropTypes.object
  }

  constructor () {
    super()
    this.state = {
      taskName: {
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
      content: this.state.taskName.value,
      created_at: Firebase.ServerValue.TIMESTAMP
    }, (err) => {
      if (err) alert('保存できませんでした。時間を経ってから再度お試しください。')
      this.setState({taskName: utils.changedValue(this.state.taskName, null)})
    })
  }

  _changeTaskName (e) {
    this.setState({
      taskName: utils.changedValue(this.state.taskName, e.target.value)
    })
  }

  _isInputValid () {
    const {taskName} = this.state
    const items = [taskName]
    return utils.isVaild(items)
  }

  render () {
    return (
      <div className={styles['Post']}>
        Post
        <div>
          <form onSubmit={::this._createTaskMaster}>
            <input type='text' value={this.state.taskName.value} onChange={::this._changeTaskName} />
          </form>
        </div>
      </div>
    )
  }
}
