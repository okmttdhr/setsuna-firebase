import './index.scss'
import classNames from 'classnames'
import i18next from 'i18next'
import { connect } from 'react-redux'

import tutorialActions from 'actions/tutorial'
import Modal from 'components/Modal/index'

const mapStateToProps = (state) => ({
  tutorial: state.tutorial,
})

export class ModalTutorialPosts extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,

    tutorial: React.PropTypes.object.isRequired,
    toggleTutorialHasDone: React.PropTypes.func.isRequired,
    toggleModalPost: React.PropTypes.func.isRequired,
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  constructor() {
    super()
  }

  _toggleTutorialHasDone() {
    this.props.toggleTutorialHasDone({
      type: 'in',
      name: 'PostsView',
    })
  }

  _showModalPost(e) {
    e.stopPropagation()
    this._toggleTutorialHasDone()
    if (!this.props.userFirebase) {
      return this.props.toggleModalLogin()
    }
    this.props.toggleModalPost()
  }

  render() {
    const contentStyleMd = {
      height: '194px',
    }
    return (
      <Modal
        isShow={!this.props.tutorial.hasDone.in.PostsView}
        toggleShow={::this._toggleTutorialHasDone}
        contentStyleMd={contentStyleMd}>
        <div
          className={classNames({
            ModalTutorialPosts: true,
          })}>
          <div>
            {i18next.t('welcome')}
            <br/><br/>
            {i18next.t('ModalTutorial__PostsView')}
          </div>
          <div className='ModalPost__submit' onClick={::this._showModalPost}>
            {i18next.t('post')}
          </div>
        </div>
      </Modal>
    )
  }
}

export default ModalTutorialPosts
export default connect(mapStateToProps, {
  ...tutorialActions,
})(ModalTutorialPosts)
