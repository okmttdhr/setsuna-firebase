import styles from './index.scss'
import classNames from 'classnames'

export default class NavigationPost extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
    toggleModalLogin: React.PropTypes.func.isRequired,
    toggleModalPost: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
  }

  _toggleModalPost(e) {
    e.stopPropagation()
    if (!this.props.userFirebase) {
      return this.props.toggleModalLogin()
    }
    this.props.toggleModalPost()
  }

  render() {
    return (
      <li className={styles.NavigationPost} onClick={::this._toggleModalPost}>
        <i className={classNames({
          [styles.NavigationPost__icon]: true,
          'material-icons': true,
        })}>edit</i>
        <div className={styles.NavigationPost__text}>Post</div>
      </li>
    )
  }
}
