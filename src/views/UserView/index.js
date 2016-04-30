import styles from './index.scss'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import Firebase from 'firebase'
import { connect } from 'react-redux'

import config from 'utils/config'
import tutorialActions from 'actions/tutorial'

import UserSettings from 'components/User/Settings/index'
import Timeline from 'components/Timeline/index'
import Loading from 'components/Loading/index'
import Modal from 'components/Modal/index'
import ModalTutorial from 'components/Modal/Tutorial/index'

const mapStateToProps = (state) => ({
  tutorial: state.tutorial,
})

export class UserView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
    tutorial: React.PropTypes.object.isRequired,
    toggleTutorialHasDone: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      postsFirebase: [],
    }
  }

  componentDidMount() {
    this._getUserPosts(this.props.userFirebase)
    this._getStars(this.props.userFirebase)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userFirebase && nextProps.userFirebase !== this.props.userFirebase) {
      this._getUserPosts(nextProps.userFirebase)
      this._getStars(nextProps.userFirebase)
    }
  }

  _isBinded(bindVar) {
    return typeof this.firebaseRefs[bindVar] !== 'undefined'
  }

  _getUserPosts(userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refPosts = new Firebase(`${config.firebaseRef()}posts`)
    this.bindAsArray(
      refPosts.orderByChild('user_id').equalTo(userFirebase.auth.uid).limitToLast(10),
      'postsFirebase'
    )
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
      name: 'UserView',
    })
  }

  render() {
    const contentStyleMd = {
      height: '150px',
    }
    return (
      <div className={styles.UserView}>
        <Modal
          isShow={!this.props.tutorial.hasDone.in.UserView}
          toggleShow={::this._toggleTutorialHasDone}
          contentStyleMd={contentStyleMd}>
          <ModalTutorial {...this.props}>
            <div>
              ここはあなたの情報が表示される非公開のページです。あなた以外の人がアクセスすることはできません。
            </div>
          </ModalTutorial>
        </Modal>
        <div className={styles.UserView__container}>
          <UserSettings {...this.props} />
          {this.state.postsFirebase.length === 0
            ? <Loading />
            : <Timeline items={this.state.postsFirebase} {...this.props} {...this.state} />}
        </div>
      </div>
    )
  }
}

const UserViewWithMixin = reactMixin.decorate(ReactFireMixin)(UserView)
export default connect(mapStateToProps, {
  ...tutorialActions,
})(UserViewWithMixin)
