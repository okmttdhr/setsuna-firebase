import './index.scss'
import { connect } from 'react-redux'

import applicationActions from 'actions/application'
import Modal from 'components/Modal/index'
import ModalLogin from 'components/Modal/Login/index'
import ModalPost from 'components/Modal/Post/index'

const mapStateToProps = (state) => ({
  application: state.application,
})

export class Modals extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
    application: React.PropTypes.object.isRequired,
    toggleModalLogin: React.PropTypes.func.isRequired,
    toggleModalPost: React.PropTypes.func.isRequired,
  }

  _toggleModalLogin(e) {
    e.stopPropagation()
    this.props.toggleModalLogin()
  }

  _toggleModalPost(e) {
    e.stopPropagation()
    this.props.toggleModalPost()
  }

  render() {
    const { application } = this.props
    const styleMdContent = {
      height: '125px',
    }
    return (
      <div className='Modals'>
        <Modal isShow={application.isModalLoginShow} toggleShow={::this._toggleModalLogin}>
          <ModalLogin {...this.props} />
        </Modal>
        <Modal
          isShow={application.isModalPostShow}
          toggleShow={::this._toggleModalPost}
          styleMdContent={styleMdContent}>
          <ModalPost {...this.props} />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...applicationActions,
})(Modals)
