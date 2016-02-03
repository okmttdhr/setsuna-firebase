import styles from './index.scss'
import { connect } from 'react-redux'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'

import config from 'utils/config'
import counterActions from 'actions/counter'
import taskMastersActions from 'actions/taskMasters'
import Posts from 'components/Posts/index'

const mapStateToProps = (state) => ({
  counter: state.counter,
  taskMasters: state.taskMasters
})

export class PostsView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired,
    userFirebase: React.PropTypes.object
  }

  constructor () {
    super()
    this.state = {
      postsFirebase: [],
      starsFirebase: []
    }
  }

  componentDidMount () {
    this._getPosts()
    this._getStars(this.props.userFirebase)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.userFirebase && nextProps.userFirebase !== this.props.userFirebase) {
      this._getStars(nextProps.userFirebase)
    }
  }

  _isBinded (bindVar) {
    return typeof this.firebaseRefs[bindVar] !== 'undefined'
  }

  _getPosts () {
    const refPosts = new Firebase(config.firebase.demoRef + 'posts')
    this.bindAsArray(
      refPosts.orderByChild('created_at').limitToLast(10),
      'postsFirebase'
    )
  }

  _getStars (userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refStars = new Firebase(config.firebase.demoRef + 'stars/' + userFirebase.auth.uid)
    this.bindAsArray(
      refStars.orderByChild('created_at').limitToLast(10),
      'starsFirebase'
    )
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
        <Posts {...this.props} {...this.state} />
      </div>
    )
  }
}

const PostsViewWithMixin = reactMixin.decorate(ReactFireMixin)(PostsView)
export default connect(mapStateToProps, {
  ...counterActions,
  ...taskMastersActions
})(PostsViewWithMixin)
