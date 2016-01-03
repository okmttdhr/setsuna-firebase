import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../redux/modules/counter'
// import { firebase } from '../redux/utils/secret'
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

    // const ref = new Firebase('https://dinosaur-facts.firebaseio.com/dinosaurs')
    // ref.orderByChild('height').on('child_added', function (snapshot) {
    //   console.log(snapshot.key() + ' was ' + snapshot.val().height + ' meters tall')
    // })

    // const scoresRef = new Firebase("https://dinosaur-facts.firebaseio.com/scores");
    // scoresRef.orderByValue().limitToLast(3).on("value", function(snapshot) {
    //   snapshot.forEach(function(data) {
    //     console.log(data);
    //     console.log("The " + data.key() + " dinosaur's score is " + data.val());
    //   });
    // });

    var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
    ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
      console.log(snapshot.val());
      console.log(snapshot.key());
    });
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
