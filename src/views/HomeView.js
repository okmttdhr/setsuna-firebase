import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from 'redux/modules/counter'
// import { firebase } from 'redux/utils/secret'
import styles from './HomeView.scss'
import Firebase from 'firebase'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  firebaseTest () {
    // const ref = new Firebase(firebase.demoRef)
    // const usersRef = ref.child('users')
    // usersRef.set({
    //   alanisawesome: {
    //     date_of_birth: 'June 23, 1912',
    //     full_name: 'Alan Turing'
    //   },
    //   gracehop: {
    //     date_of_birth: 'December 9, 1906',
    //     full_name: 'Grace Hopper'
    //   }
    // })
    //
    // const postsRef = ref.child('posts')
    // postsRef.push().set({
    //   author: 'alanisawesomeaaa',
    //   title: 'The Turing Machine'
    // })

    // // see if Mary is in the 'alpha' group
    // var ref = new Firebase("https://docs-examples.firebaseio.com/web/org/users/mchen/groups/alpha");
    // ref.once('value', function(snap) {
    //   console.log(snap.val());
    //   var result = snap.val() === null ? 'is not' : 'is';
    //   console.log('Mary ' + result + ' a member of alpha group');
    // });

    // we would probably save a profile when we register new users on our site
    // we could also read the profile to see if it's null
    // here we will just simulate this with an isNewUser boolean
    // var isNewUser = true;
    //
    // var ref = new Firebase(firebase.demoRef);
    // ref.onAuth(function(authData) {
    //   if (authData && isNewUser) {
    //     // save the user's profile into the database so we can list users,
    //     // use them in Security and Firebase Rules, and show profiles
    //     ref.child("users").child(authData.uid).set({
    //       provider: authData.provider,
    //       name: getName(authData)
    //     });
    //   }
    // });
    //
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
          Firebase
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
