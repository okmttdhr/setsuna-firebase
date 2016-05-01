import './index.scss'
import { connect } from 'react-redux'
import i18next from 'i18next'

import applicationActions from 'actions/application'

const mapStateToProps = (state) => ({
  application: state.posts,
})

export class HomeView extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
    toggleModalLogin: React.PropTypes.func.isRequired,
    history: React.PropTypes.object.isRequired,
  }

  constructor() {
    super()
  }

  _getStarted() {
    if (!this.props.userFirebase) {
      this.props.toggleModalLogin()
      return
    }
    this.props.history.pushState(null, '/timeline')
  }

  render() {
    return (
      <div className='HomeView'>
        <div className='HomeView__firstView'>
          <div className='HomeView__firstView__text'>
            {i18next.t('HomeView__firstView__text')}
          </div>
          <div className='HomeView__startBtn' onClick={::this._getStarted}>
            {i18next.t('getStarted')}
          </div>
        </div>
        <div className='HomeView__explain'>
          <div className='HomeView__explain__content'>
            <div className='HomeView__explain__text'>
              <i className='material-icons HomeView__explain__text__icon'>beach_access</i>
              {i18next.t('ModalTutorial__PostsView')}
            </div>
          </div>
        </div>
        <div className='HomeView__posts'>
          <a href='/#/timeline' className='HomeView__posts__link'>
            <div className='HomeView__posts__link__btn'>
              {i18next.t('seePosts')}
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...applicationActions,
})(HomeView)
