import styles from './index.scss'
import classNames from 'classnames'
import Modal from 'components/Modal/index'

export default class NavigationPost extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      isModalShow: false,
    }
  }

  toggleModalShow() {
    if (!this.props.userFirebase) {
      return this.props.toggleModalLogin()
    }
    this.setState({ isModalShow: !this.state.isModalShow })
  }

  render() {
    return (
      <li className={styles.NavigationPost} onClick={::this.toggleModalShow}>
        <i className={classNames({
          [styles.NavigationPost__icon]: true,
          'material-icons': true,
        })}>edit</i>
        <div className={styles.NavigationPost__text}>Post</div>
        <Modal isShow={this.state.isModalShow} toggleShow={::this.toggleModalShow}>
          <div>
            <input type='text'/>
          </div>
        </Modal>
      </li>
    )
  }
}
