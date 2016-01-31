import { connect } from 'react-redux'
import { Link } from 'react-router'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'

import config from 'utils/config'
import counterActions from 'actions/counter'
import taskMastersActions from 'actions/taskMasters'
import Posts from 'components/Posts/index'
import styles from './index.scss'

const mapStateToProps = (state) => ({
  counter: state.counter,
  taskMasters: state.taskMasters
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
      postsFirebase: []
    }
  }

  componentDidMount () {
    this._getPosts()
  }

  _getPosts () {
    const refPosts = new Firebase(config.firebase.demoRef + 'posts')
    this.bindAsArray(
      refPosts.orderByChild('created_at').limitToLast(10),
      'postsFirebase'
    )
  }

  render () {
    console.log(this.state)
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
        <Posts {...this.props} {...this.state} />
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

const HomeViewWithMixin = reactMixin.decorate(ReactFireMixin)(HomeView)
export default connect(mapStateToProps, {
  ...counterActions,
  ...taskMastersActions
})(HomeViewWithMixin)
