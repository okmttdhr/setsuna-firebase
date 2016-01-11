import { connect } from 'react-redux'
import { Link } from 'react-router'
import counterActions from 'actions/counter'
import styles from './index.scss'
import utils from 'utils/index'

// #TODO remove
import config from 'utils/config'
import Firebase from 'firebase'
const firebaseRef = new Firebase(config.firebase.demoRef)

const mapStateToProps = (state) => ({
  counter: state.counter
})

export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.state = {
      taskName: {
        value: '',
        valid: true
      }
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  _createTaskMaster (e) {
    console.log(this.state)
    e.preventDefault()
    if (!this._isInputValid()) return

    firebaseRef.child('tasks').push({
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
      <div className='container text-center'>
        <hr />
        <div>
          <p>
            Counter:&nbsp;
            <span className={styles['counter--green']}>{this.props.counter}</span>
          </p>
          <button
            className='btn btn-default'
            onClick={() => this.props.increment(1)}>
            Increment
          </button>
          <button
            className='btn btn-default'
            onClick={this.props.doubleAsync}>
            Double (Async)
          </button>
        </div>
        <hr />
        <div>
          <form onSubmit={::this._createTaskMaster}>
            <input type='text' value={this.state.taskName.value} onChange={::this._changeTaskName} />
          </form>
        </div>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...counterActions
})(HomeView)
