import styles from './index.scss'
import classNames from 'classnames'
import Modal from 'components/Modal/index'
import ModalLogin from 'components/Modal/Login/index'

export default class NavigationUser extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,

    userFirebase: React.PropTypes.object,

    application: React.PropTypes.object.isRequired,
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  _linkTo() {
    if (!this.props.userFirebase) {
      return this.props.toggleModalLogin()
    }
    this.props.history.pushState(null, '/user')
  }

  _toggleModalLogin(e) {
    e.stopPropagation()
    this.props.toggleModalLogin()
  }

  render() {
    const { location, application } = this.props
    return (
      <li className={classNames({
        [styles.NavigationUser]: true,
        [styles.isActive]: location.pathname === '/user',
      })} onClick={::this._linkTo}>
        <i className={classNames({
          [styles.NavigationUser__icon]: true,
          'material-icons': true,
        })}>person</i>
        <div className={styles.NavigationUser__text}>You</div>
        <Modal isShow={application.isModalLoginShow} toggleShow={::this._toggleModalLogin}>
          <ModalLogin />
        </Modal>
      </li>
    )
  }
}
