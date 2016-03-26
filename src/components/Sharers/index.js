import styles from './index.scss'
import classNames from 'classnames'
import SharerTwitter from 'components/Sharers/Twitter/index'
import SharerFacebook from 'components/Sharers/Facebook/index'
import SharerLine from 'components/Sharers/Line/index'
import SharerHatebu from 'components/Sharers/Hatebu/index'

export default class Sharers extends React.Component {
  static propTypes = {
    isShow: React.PropTypes.bool.isRequired,
    toggleShow: React.PropTypes.func.isRequired,

    url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  }

  constructor() {
    super()
  }

  toggleShow(e) {
    e.stopPropagation()
    this.props.toggleShow()
  }

  render() {
    return (
      <div
        className={classNames({
          [styles.Sharers]: true,
          [styles.isShow]: this.props.isShow,
        })}
        onClick={::this.toggleShow}>
        <i className={classNames({
          'material-icons': true,
          [styles.Sharers__icon]: true,
        })}>share</i>
        <div className={styles.Sharers__overlay} onClick={::this.toggleShow}></div>
        <div className={styles.Sharers__contentWp} onClick={(e) => { e.stopPropagation() }}>
          <div className={styles.Sharers__content}>
            <SharerFacebook />
            <SharerTwitter {...this.props} />
            <SharerHatebu />
            <SharerLine />
          </div>
        </div>
      </div>
    )
  }
}
