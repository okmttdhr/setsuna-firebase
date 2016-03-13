import styles from './index.scss'
import { connect } from 'react-redux'
import applicationActions from 'actions/application'

const mapStateToProps = (state) => ({
  application: state.posts,
})

export class HomeView extends React.Component {
  static propTypes = {
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
  }

  componentDidMount() {
  }

  _getStarted() {
    this.props.toggleModalLogin()
  }

  render() {
    return (
      <div className={styles.HomeView}>
        <div className={styles.HomeView__firstView}>
          <div className={styles.HomeView__firstView__text}>
            Let bygones be bygones
          </div>
          <div className={styles.HomeView__startBtn} onClick={::this._getStarted}>Get Started</div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...applicationActions,
})(HomeView)
