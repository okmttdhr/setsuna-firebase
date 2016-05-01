import './index.scss'
import i18next from 'i18next'
import { connect } from 'react-redux'

import tutorialActions from 'actions/tutorial'
import Modal from 'components/Modal/index'

const mapStateToProps = (state) => ({
  tutorial: state.tutorial,
})

export class ModalTutorialUser extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,

    tutorial: React.PropTypes.object.isRequired,
    toggleTutorialHasDone: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
  }

  _toggleTutorialHasDone() {
    this.props.toggleTutorialHasDone({
      type: 'in',
      name: 'UserView',
    })
  }

  render() {
    const contentStyleMd = {
      height: '75px',
    }
    return (
      <Modal
        isShow={!this.props.tutorial.hasDone.in.UserView}
        toggleShow={::this._toggleTutorialHasDone}
        contentStyleMd={contentStyleMd}>
        <div>
          {i18next.t('ModalTutorial__UserView')}
        </div>
      </Modal>
    )
  }
}

export default ModalTutorialUser
export default connect(mapStateToProps, {
  ...tutorialActions,
})(ModalTutorialUser)
