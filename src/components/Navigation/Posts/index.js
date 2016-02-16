import styles from './index.scss'
import classNames from 'classnames'

export default class NavigationPosts extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  _linkTo() {
    this.props.history.pushState(null, '/timeline')
  }

  render() {
    const { location } = this.props
    return (
      <li className={classNames({
        [styles.NavigationPosts]: true,
        [styles.isActive]: location.pathname === '/timeline',
      })} onClick={::this._linkTo}>
        <i className={classNames({
          [styles.NavigationPosts__icon]: true,
          'material-icons': true,
        })}>home</i>
      </li>
    )
  }
}
