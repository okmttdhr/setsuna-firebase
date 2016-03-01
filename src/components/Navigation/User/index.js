import styles from './index.scss'
import classNames from 'classnames'
import Modal from 'components/Modal/index'
import ModalLogin from 'components/Modal/Login/index'

export default class NavigationUser extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  _linkTo() {
    this.props.history.pushState(null, '/user')
  }

  render() {
    const { location } = this.props
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
        <Modal isShow={false} toggleShow={::this._linkTo}>
          <ModalLogin />
        </Modal>
      </li>
    )
  }
}
