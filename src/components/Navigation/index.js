import styles from './index.scss'

import { connect } from 'react-redux'

import userActions from 'actions/user'
import applicationActions from 'actions/application'
import Modal from 'components/Modal/index'
import ModalLogin from 'components/Modal/Login/index'
import NavigationPost from 'components/Navigation/Post/index'
import NavigationPosts from 'components/Navigation/Posts/index'
import NavigationStars from 'components/Navigation/Stars/index'
import NavigationUser from 'components/Navigation/User/index'
import NavigationLogo from 'components/Navigation/Logo/index'

const mapStateToProps = (state) => ({
  user: state.user,
  application: state.application,
})

export class Navigation extends React.Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired,
    application: React.PropTypes.object.isRequired,
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  _toggleModalLogin(e) {
    e.stopPropagation()
    this.props.toggleModalLogin()
  }

  _renderNavigation() {
    if (this.props.location.pathname === '/') {
      return (
        <ul className={styles.Navigation__list}>
          <NavigationLogo {...this.props} />
        </ul>
      )
    }
    return (
      <ul className={styles.Navigation__list}>
        <NavigationPost {...this.props} />
        <NavigationPosts {...this.props} />
        <NavigationStars {...this.props} />
        <NavigationUser {...this.props} />
      </ul>
    )
  }

  render() {
    const { application } = this.props
    return (
      <div className={styles.Navigation}>
        <Modal isShow={application.isModalLoginShow} toggleShow={::this._toggleModalLogin}>
          <ModalLogin {...this.props} />
        </Modal>
        {this._renderNavigation()}
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...userActions,
  ...applicationActions,
})(Navigation)
