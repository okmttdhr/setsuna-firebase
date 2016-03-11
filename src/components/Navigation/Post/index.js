import styles from './index.scss'
import classNames from 'classnames'

import Modal from 'components/Modal/index'
import ModalPost from 'components/Modal/Post/index'

export default class NavigationPost extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
    toggleModalLogin: React.PropTypes.func.isRequired,
    application: React.PropTypes.object.isRequired,
    toggleModalPost: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
  }

  toggleModalShow(e) {
    e.stopPropagation()
    if (!this.props.userFirebase) {
      return this.props.toggleModalLogin()
    }
    this.props.toggleModalPost()
  }

  render() {
    const contentStyleMd = {
      backgroundColor: '#ECEDF8',
      height: '185px',
    }
    return (
      <li className={styles.NavigationPost} onClick={::this.toggleModalShow}>
        <i className={classNames({
          [styles.NavigationPost__icon]: true,
          'material-icons': true,
        })}>edit</i>
        <div className={styles.NavigationPost__text}>Post</div>
        <Modal
          isShow={this.props.application.isModalPostShow}
          toggleShow={::this.toggleModalShow}
          contentStyleMd={contentStyleMd}>
          <ModalPost {...this.props} />
        </Modal>
      </li>
    )
  }
}
