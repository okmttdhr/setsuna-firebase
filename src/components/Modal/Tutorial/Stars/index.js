import './index.scss'
import i18next from 'i18next'
import { connect } from 'react-redux'

import tutorialActions from 'actions/tutorial'
import Modal from 'components/Modal/index'

const mapStateToProps = (state) => ({
  tutorial: state.tutorial,
})

export class ModalTutorialStars extends React.Component {
  static propTypes = {
    tutorial: React.PropTypes.object.isRequired,
    toggleTutorialHasDone: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
  }

  _toggleTutorialHasDone() {
    this.props.toggleTutorialHasDone({
      type: 'in',
      name: 'StarsView',
    })
  }

  render() {
    const styleMdContent = {
      height: '75px',
    }
    return (
      <Modal
        isShow={!this.props.tutorial.hasDone.in.StarsView}
        toggleShow={::this._toggleTutorialHasDone}
        styleMdContent={styleMdContent}>
        <div className='ModalTutorialStars'>
          {i18next.t('ModalTutorial__StarsView')}
        </div>
      </Modal>
    )
  }
}

export default ModalTutorialStars
export default connect(mapStateToProps, {
  ...tutorialActions,
})(ModalTutorialStars)
