import styles from './index.scss'

export default class NavigationStars extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
  }

  _linkTo() {
    this.props.history.pushState(null, '/stars')
  }

  render() {
    return (
      <li className={styles.NavigationStars} onClick={::this._linkTo}>
        <i className='material-icons'>star</i>
      </li>
    )
  }
}
