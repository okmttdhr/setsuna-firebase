import { connect } from 'react-redux'
import { Link } from 'react-router'
import counterActions from 'actions/counter'
import styles from './HomeView.scss'

const mapStateToProps = (state) => ({
  counter: state.counter
})

export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='container text-center'>
        <h3>
          Counter:&nbsp;
          <span className={styles['counter--green']}>{this.props.counter}</span>
        </h3>
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
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...counterActions
})(HomeView)
