import { connect } from 'react-redux'
import { Link } from 'react-router'
import counterActions from 'actions/counter'
import accountActions from 'actions/account'
import utils from 'utils/index'
import config from 'utils/config'
import styles from './HomeView.scss'
import Firebase from 'firebase'

const mapStateToProps = (state) => ({
  counter: state.counter,
  account: state.account
})

const firebaseRef = new Firebase(config.firebase.demoRef)

export class HomeView extends React.Component {
  static propTypes = {
    account: React.PropTypes.object.isRequired,
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired,
    createAuth: React.PropTypes.func.isRequired
  }

  // #TODO ロジックを上のレイヤー?に移動。要検討
  componentDidMount () {
    const authData = utils.getAuth()
    if (authData) {
      // this.props.requestCreateAuthSuccess(authData)
    }
  }

  unAuth () {
    firebaseRef.unauth()
    // #TODO stateを更新
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
        {this.props.account.isFetching
          ? <p>ログインしています</p> : null}
        {!this.props.account.token
          ? <button
            className='btn btn-default'
            onClick={::this.props.createAuth()}>
            Login
          </button> : null}
        {this.props.account.token
          ? <button
            className='btn btn-default'
            onClick={::this.unAuth}>
            Logout
          </button> : null}
        <button
          className='btn btn-default'
          onClick={::utils.getAuth}>
          getAuth
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...counterActions,
  ...accountActions
})(HomeView)
