import styles from './index.scss'
import classNames from 'classnames'

export default class NavigationUser extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    userFirebase: React.PropTypes.object,
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  _linkTo() {
    if (!this.props.userFirebase) {
      return this.props.toggleModalLogin()
    }
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
      </li>
    )
  }
}
