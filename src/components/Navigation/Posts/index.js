import styles from './index.scss'

export default class NavigationPosts extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
  }

  _linkTo() {
    this.props.history.pushState(null, '/timeline')
  }

  render() {
    return (
      <li className={styles.NavigationPosts} onClick={::this._linkTo}>
        <i className='material-icons'>home</i>
      </li>
    )
  }
}
