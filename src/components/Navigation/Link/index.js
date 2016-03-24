import styles from './index.scss'
import classNames from 'classnames'

export default class NavigationLink extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    textIcon: React.PropTypes.string.isRequired,
    pathname: React.PropTypes.string.isRequired,
    requireAuth: React.PropTypes.bool.isRequired,

    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    userFirebase: React.PropTypes.object,
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  _linkTo() {
    const { pathname, requireAuth, userFirebase, toggleModalLogin, history } = this.props
    if (requireAuth && !userFirebase) {
      return toggleModalLogin()
    }
    history.pushState(null, pathname)
  }

  render() {
    const { location, pathname, text, textIcon } = this.props
    return (
      <li className={classNames({
        [styles.NavigationLink]: true,
        [styles.isActive]: location.pathname === pathname,
      })} onClick={::this._linkTo}>
        <i className={classNames({
          [styles.NavigationLink__icon]: true,
          'material-icons': true,
        })}>{textIcon}</i>
        <div className={styles.NavigationLink__text}>{text}</div>
      </li>
    )
  }
}
