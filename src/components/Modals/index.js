import styles from './index.scss'
import { connect } from 'react-redux'

import applicationActions from 'actions/application'
import Modal from 'components/Modal/index'
import ModalLogin from 'components/Modal/Login/index'

const mapStateToProps = (state) => ({
  application: state.application,
})

export class Modals extends React.Component {
  static propTypes = {
    application: React.PropTypes.object.isRequired,
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  _toggleModalLogin(e) {
    e.stopPropagation()
    this.props.toggleModalLogin()
  }

  render() {
    const { application } = this.props
    return (
      <div className={styles.Modals}>
        <Modal isShow={application.isModalLoginShow} toggleShow={::this._toggleModalLogin}>
          <ModalLogin {...this.props} />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...applicationActions,
})(Modals)
