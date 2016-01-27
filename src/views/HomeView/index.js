import { connect } from 'react-redux'
import { Link } from 'react-router'
import counterActions from 'actions/counter'
import taskMastersActions from 'actions/taskMasters'
import styles from './index.scss'
import Board from 'components/Board/index'

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
    setQuery: React.PropTypes.func.isRequired
  }

  constructor () {
    super()
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
        <Board {...this.props} />
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
