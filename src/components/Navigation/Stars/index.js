import styles from './index.scss'
import classNames from 'classnames'

export default class NavigationStars extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
  }

  _linkTo() {
    this.props.history.pushState(null, '/stars')
  }

  render() {
    const { location } = this.props
    return (
      <li className={classNames({
        [styles.NavigationStars]: true,
        [styles.isActive]: location.pathname === '/stars',
      })} onClick={::this._linkTo}>
        <i className={classNames({
          [styles.NavigationStars__icon]: true,
          'material-icons': true,
        })}>star</i>
        <div className={styles.NavigationStars__text}>Star</div>
      </li>
    )
  }
}
