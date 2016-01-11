import { connect } from 'react-redux'
import { Link } from 'react-router'
import counterActions from 'actions/counter'
import styles from './index.scss'

// #TODO remove
import config from 'utils/config'
import Firebase from 'firebase'
const firebaseRef = new Firebase(config.firebase.demoRef)

const mapStateToProps = (state) => ({
  counter: state.counter
})

export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  componentDidMount () {
    console.log('componentDidMount');

    // console.log(config.firebase.demoRef + 'posts/-K75R4TcfPkesf8J_qiy');
    const ref = new Firebase(config.firebase.demoRef + 'posts')
    // const ref = new Firebase(config.firebase.demoRef + 'posts/-K75R4TcfPkesf8J_qiy')
    // // firebaseRef.child('posts').on('value', function(snapshot) {
    ref.on('value', function(snapshot) {
      snapshot.forEach(function(data) {
        console.log(data.key());
        console.log(data.val());
      });
    });

    // var scoresRef = new Firebase("https://dinosaur-facts.firebaseio.com/scores");
    // scoresRef.orderByValue().on("value", function(snapshot) {
    //   snapshot.forEach(function(data) {
    //     console.log("The " + data.key() + " dinosaur's score is " + data.val());
    //   });
    // });
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
        <div>
          <input type='text' />
        </div>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...counterActions
})(HomeView)
