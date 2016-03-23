import styles from './index.scss'
import classNames from 'classnames'

export default class NavigationLogo extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
  }

  _linkTo() {
    this.props.history.pushState(null, '/')
  }

  render() {
    return (
      <li className={classNames({
        [styles.NavigationLogo]: true,
      })} onClick={::this._linkTo}>
        <div className={styles.NavigationLogo__text}>Logo</div>
      </li>
    )
  }
}
