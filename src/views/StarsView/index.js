import styles from './index.scss'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import config from 'utils/config'

export class StarsView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      starsFirebase: [],
    }
  }

  componentDidMount() {
    this._getStars(this.props.userFirebase)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userFirebase && nextProps.userFirebase !== this.props.userFirebase) {
      this._getStars(nextProps.userFirebase)
    }
  }

  _isBinded(bindVar) {
    return typeof this.firebaseRefs[bindVar] !== 'undefined'
  }

  _getStars(userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refStars = new Firebase(`${config.firebase.demoRef}stars/${userFirebase.auth.uid}`)
    this.bindAsArray(
      refStars.orderByChild('created_at').limitToLast(10),
      'starsFirebase'
    )
  }

  _renderStar() {
    return this.state.starsFirebase.map((item, index) => (<div key={index}>{item.content}</div>))
  }

  render() {
    return (
      <div className={styles.StarsView}>
        {this._renderStar()}
      </div>
    )
  }
}

export default reactMixin.decorate(ReactFireMixin)(StarsView)
