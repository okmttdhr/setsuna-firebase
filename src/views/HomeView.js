import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from 'actions/counter'
import config from 'utils/config'
import styles from './HomeView.scss'
import Firebase from 'firebase'

const mapStateToProps = (state) => ({
  counter: state.counter
})

const ref = new Firebase(config.firebase.demoRef);

export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  componentDidMount() {
    // Create a callback which logs the current auth state
    // function authDataCallback(authData) {
    //   if (authData) {
    //     console.log("User " + authData.uid + " is logged in with " + authData.provider);
    //   } else {
    //     console.log("User is logged out");
    //   }
    // }
    // ref.onAuth(authDataCallback);
    // ref.offAuth(authDataCallback);
  }

  firebaseTest () {
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        if (authData) {
          // save the user's profile into the database so we can list users,
          // use them in Security and Firebase Rules, and show profiles
          console.log('save');
          ref.child("users").child(authData.uid).set({
            provider: authData.provider,
            name: authData.google.displayName,
          });
        }

        // // find a suitable name based on the meta info given by each provider
        // function getName(authData) {
        //   switch(authData.provider) {
        //      case 'password':
        //        return authData.password.email.replace(/@.*/, '');
        //      case 'twitter':
        //        return authData.twitter.displayName;
        //      case 'facebook':
        //        return authData.facebook.displayName;
        //   }
        // }
      }
    });
  }

  getAuth() {
    var authData = ref.getAuth();

    if (authData) {
      console.log("User " + authData.uid + " is logged in with " + authData.provider);
    } else {
      console.log("User is logged out");
    }
  }

  unAuth() {
    ref.unauth();
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:&nbsp;
          <span className={styles['counter--green']}>{this.props.counter}</span>
        </h2>
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
        <button
          className='btn btn-default'
          onClick={::this.firebaseTest}>
          Login
        </button>
        <button
          className='btn btn-default'
          onClick={::this.unAuth}>
          Logout
        </button>
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

export default connect(mapStateToProps, counterActions)(HomeView)
