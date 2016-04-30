import styles from './index.scss'
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

  componentDidMount() {
    const canvas = document.getElementById('canvas')
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      // const lineargradient = ctx.createRadialGradient(135, 95, 1, 135, 95, 10)
      // lineargradient.addColorStop(0, 'white')
      // lineargradient.addColorStop(1, '#77CCEE')
      ctx.beginPath()
      ctx.lineJoin = 'miter'
      ctx.arc(120, 88, 35, 5.74, 3.66, false)
      ctx.bezierCurveTo(100, 55, 122, 27.5, 120, 20)
      ctx.bezierCurveTo(122, 27.5, 121, 31.5, 150, 70)
      ctx.closePath()
      // ctx.strokeStyle = 'rgb(63,81,181)'
      // ctx.lineWidth = 1
      ctx.fillStyle = 'rgb(63,81,181)'
      // ctx.shadowOffsetX = 2
      // ctx.shadowOffsetY = 2
      // ctx.shadowBlur = 2
      // ctx.shadowColor = 'rgba(50, 50, 50, 0.5)'
      // ctx.stroke()
      ctx.fill()
    }
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
      <div className={styles.HomeView}>
        <div className={styles.HomeView__firstView}>
          <div className={styles.HomeView__firstView__text}>
            {i18next.t('HomeView__firstView__text')}
          </div>
          <div className={styles.HomeView__startBtn} onClick={::this._getStarted}>
            {i18next.t('get_started')}
          </div>
        </div>
        <canvas id='canvas' height='300' width='300'></canvas>
        <div className={styles.HomeView__explain}>
          <div className={styles.HomeView__explain__content}>
            {i18next.t('ModalTutorial__PostsView')}
            <div className={styles.HomeView__explain__picture}>
              写真
            </div>
            <div className={styles.HomeView__explain__text}>
              テキスト
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...applicationActions,
})(HomeView)
