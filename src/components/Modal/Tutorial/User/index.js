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

  _getStyleMd() {
    if (i18next.language === 'ja') {
      return {
        height: '100px',
      }
    }
    return {
      height: '75px',
    }
  }

  render() {
    const styleMdContent = this._getStyleMd()
    return (
      <Modal
        isShow={!this.props.tutorial.hasDone.in.UserView}
        toggleShow={::this._toggleTutorialHasDone}
        styleMdContent={styleMdContent}>
        <div className='ModalTutorialUser'>
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
