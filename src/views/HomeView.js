import { connect } from 'react-redux'
import { Link } from 'react-router'
import counterActions from 'actions/counter'
import accountActions from 'actions/account'
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
    requestCreateAuthSuccess: React.PropTypes.func.isRequired
  }

  authWithOAuthPopup () {
    if (this.getAuth()) return
    firebaseRef.authWithOAuthPopup('google', (error, authData) => {
      if (error || !authData) console.log('Login Failed!', error)
      console.log('Authenticated successfully with payload:', authData)
      firebaseRef.child('users').child(authData.uid).set({
        provider: authData.provider,
        name: authData.google.displayName
      })
      this.props.requestCreateAuthSuccess(authData)
    })
  }

  getAuth () {
    const authData = firebaseRef.getAuth() || null
    if (authData) {
      console.log('User ' + authData.uid + ' is logged in with ' + authData.provider)
    } else {
      console.log('User is logged out')
    }
    return authData
  }

  unAuth () {
    firebaseRef.unauth()
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
        {!this.props.account.token
          ? <button
            className='btn btn-default'
            onClick={::this.authWithOAuthPopup}>
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
          onClick={::this.getAuth}>
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
