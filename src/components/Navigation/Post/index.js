import styles from './index.scss'
import classNames from 'classnames'
import Modal from 'components/Modal/index'

export default class NavigationPost extends React.Component {
  static propTypes = {
  }

  constructor() {
    super()
    this.state = {
      isModalShow: false,
    }
  }

  toggleModalShow() {
    this.setState({ isModalShow: !this.state.isModalShow })
  }

  render() {
    return (
      <li className={styles.NavigationPost} onClick={::this.toggleModalShow}>
        <i className={classNames({
          [styles.NavigationPost__icon]: true,
          'material-icons': true,
        })}>edit</i>
        <Modal isShow={this.state.isModalShow} toggleShow={::this.toggleModalShow}>
          <div>
            <input type='text'/>
          </div>
        </Modal>
      </li>
    )
  }
}
