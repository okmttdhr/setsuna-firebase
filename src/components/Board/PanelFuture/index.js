import utils from 'utils/index'
import config from 'utils/config'
import Firebase from 'firebase'
import styles from './index.scss'

const firebaseRef = new Firebase(config.firebase.demoRef)

export default class PanelFuture extends React.Component {
  constructor () {
    super()
    this.state = {
      taskName: {
        value: null,
        valid: true
      }
    }
  }

  componentDidMount () {
    firebaseRef.child('taskMasters').on('child_added', (childSnapshot) => {
      console.log(childSnapshot.val())
      this.setState({
        taskName: utils.changedValue(this.state.taskName, null)
      })
    })
  }

  _createTaskMaster (e) {
    console.log(this.state)
    e.preventDefault()
    if (!this._isInputValid()) return

    firebaseRef.child('taskMasters').push({
      taskName: this.state.taskName.value
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
