import styles from './index.scss'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import { connect } from 'react-redux'
import i18next from 'i18next'

import config from 'utils/config'
import starsActions from 'actions/stars'
import tutorialActions from 'actions/tutorial'
import { WAIT_TIME } from 'constants'

import Timeline from 'components/Timeline/index'
import Loading from 'components/Loading/index'
import Modal from 'components/Modal/index'
import ModalTutorial from 'components/Modal/Tutorial/index'

const mapStateToProps = (state) => ({
  stars: state.stars,
  tutorial: state.tutorial,
})

export class StarsView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,

    tutorial: React.PropTypes.object.isRequired,
    toggleTutorialHasDone: React.PropTypes.func.isRequired,

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

  _toggleTutorialHasDone() {
    this.props.toggleTutorialHasDone({
      type: 'in',
      name: 'StarsView',
    })
  }

  _renderStar() {
    if (this.state.starsFirebase.length === 0) {
      return 'loading'
    }
    return this.state.starsFirebase.map((item, index) => (<div key={index}>{item.content}</div>))
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
    const contentStyleMd = {
      height: '150px',
    }
    return (
      <div className={styles.StarsView}>
        <Modal
          isShow={!this.props.tutorial.hasDone.in.StarsView}
          toggleShow={::this._toggleTutorialHasDone}
          contentStyleMd={contentStyleMd}>
          <ModalTutorial {...this.props}>
            <div>
              ここはスターが表示されるページです。
            </div>
          </ModalTutorial>
        </Modal>
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
  ...tutorialActions,
})(StarsViewWithMixin)
