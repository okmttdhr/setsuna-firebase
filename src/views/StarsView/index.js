import styles from './index.scss'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import { connect } from 'react-redux'
import i18next from 'i18next'

import config from 'utils/config'
import starsActions from 'actions/stars'
import { WAIT_TIME } from 'utils/config'

import Timeline from 'components/Timeline/index'
import Loading from 'components/Loading/index'
import ModalTutorialStars from 'components/Modal/Tutorial/Stars/index'

const mapStateToProps = (state) => ({
  stars: state.stars,
})

export class StarsView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,

    stars: React.PropTypes.object.isRequired,
    requestStars: React.PropTypes.func.isRequired,
    requestStarsDone: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      starsFirebase: [],
    }
  }

  componentDidMount() {
    this._getStars(this.props.userFirebase)
    this.props.requestStars()
    setTimeout(() => this.props.requestStarsDone(), WAIT_TIME)
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
    const refStars = new Firebase(`${config.firebaseRef()}stars/${userFirebase.auth.uid}`)
    this.bindAsArray(
      refStars.orderByChild('created_at').limitToLast(10),
      'starsFirebase'
    )
  }

  _renderTimeline() {
    if (this.props.stars.isLoading && this.state.starsFirebase.length === 0) {
      return <Loading />
    }
    if (this.state.starsFirebase.length === 0) {
      return i18next.t('error__404__stars')
    }
    return <Timeline items={this.state.starsFirebase} {...this.state} {...this.props} />
  }

  render() {
    return (
      <div className={styles.StarsView}>
        <ModalTutorialStars {...this.props} />
        <div className={styles.StarsView__container}>
          {this._renderTimeline()}
        </div>
      </div>
    )
  }
}

const StarsViewWithMixin = reactMixin.decorate(ReactFireMixin)(StarsView)
export default connect(mapStateToProps, {
  ...starsActions,
})(StarsViewWithMixin)
