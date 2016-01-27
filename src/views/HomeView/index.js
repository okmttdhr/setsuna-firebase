import { connect } from 'react-redux'
import { Link } from 'react-router'
import Firebase from 'firebase'
import config from 'utils/config'
import counterActions from 'actions/counter'
import taskMastersActions from 'actions/taskMasters'
import Board from 'components/Board/index'
import styles from './index.scss'

const mapStateToProps = (state) => ({
  counter: state.counter,
  taskMasters: state.taskMasters
})

export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired,
    taskMasters: React.PropTypes.object.isRequired,
    setQuery: React.PropTypes.func.isRequired,

    userFirebase: React.PropTypes.object
  }

  constructor () {
    super()
  }

  componentDidMount () {
    const refTaskMasters = new Firebase(config.firebase.demoRef + 'taskMasters')
    this.bindAsArray(refTaskMasters, 'taskMastersFirebase')
  }

  render () {
    console.log('これで開発進められる')
    console.log(this.props.userFirebase)
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
        <Board {...this.props} {...this.state} />
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...counterActions,
  ...taskMastersActions
})(HomeView)
