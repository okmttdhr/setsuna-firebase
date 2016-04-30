import styles from './index.scss'
import classNames from 'classnames'

export default class NavigationLogo extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    const canvas = document.getElementById('logo__setsuna')
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.lineJoin = 'miter'
      ctx.arc(120, 88, 35, 5.74, 3.66, false)
      ctx.bezierCurveTo(100, 55, 122, 27.5, 120, 20)
      ctx.bezierCurveTo(122, 27.5, 121, 31.5, 150, 70)
      ctx.closePath()
      ctx.fillStyle = 'rgb(63,81,181)'
      ctx.fill()
    }
  }

  _linkTo() {
    this.props.history.pushState(null, '/')
  }

  render() {
    return (
      <li className={classNames({
        [styles.NavigationLogo]: true,
      })} onClick={::this._linkTo}>
        <canvas id='logo__setsuna' height='55' width='55'></canvas>
        <div className={styles.NavigationLogo__text}>Logo</div>
      </li>
    )
  }
}
