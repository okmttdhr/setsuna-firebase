import utils from 'utils/index'
import config from 'utils/config'
import Firebase from 'firebase'
import uuid from 'uuid'
import styles from './index.scss'
import moment from 'moment'

const firebaseRef = new Firebase(config.firebase.demoRef)

export default class PanelFuture extends React.Component {
  static propTypes = {
    taskMasters: React.PropTypes.object.isRequired,
    taskMastersFirebase: React.PropTypes.array,
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
    const now = moment().format('YYYY-MM-DD')

    firebaseRef.child('taskMasters').push({
      recursive_id: uuid.v1(),
      user_id: this.props.userFirebase.auth.uid,
      sort_id: 1,
      name: this.state.taskName.value,
      completed: false,
      started_at: now,
      expired_at: '',
      created_at: now,
      updated_at: now
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
      <div className={styles['PanelFuture']}>
        PanelFuture
        <div>
          <form onSubmit={::this._createTaskMaster}>
            <input type='text' value={this.state.taskName.value} onChange={::this._changeTaskName} />
          </form>
        </div>
      </div>
    )
  }
}
