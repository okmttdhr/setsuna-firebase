import styles from './index.scss'

export default class NavigationUser extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
  }

  _linkTo() {
    this.props.history.pushState(null, '/user')
  }

  render() {
    return (
      <li className={styles.NavigationUser} onClick={::this._linkTo}>
        <i className='material-icons'>person</i>
      </li>
    )
  }
}
