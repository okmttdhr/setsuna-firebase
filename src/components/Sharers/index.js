import styles from './index.scss'
import classNames from 'classnames'
import SharerTwitter from 'components/Sharers/Twitter/index'
import SharerFacebook from 'components/Sharers/Facebook/index'
import SharerLine from 'components/Sharers/Line/index'
import SharerHatebu from 'components/Sharers/Hatebu/index'

export default class Sharers extends React.Component {
  static propTypes = {
    isShow: React.PropTypes.bool.isRequired,
  }

  constructor() {
    super()
    this.state = {
      isShow: false,
    }
  }

  toggleShow(e) {
    e.stopPropagation()
    this.setState({ ...this.state, isShow: !this.state.isShow })
  }

  render() {
    return (
      <div
        className={classNames({
          [styles.Sharers]: true,
          [styles.isShow]: this.state.isShow,
        })}
        onClick={::this.toggleShow}>
        <i className={classNames({
          'material-icons': true,
          [styles.Sharers__icon]: true,
        })}>share</i>
        <div className={styles.Sharers__overlay} onClick={::this.toggleShow}></div>
        <div
          className={classNames({
            [styles.Sharers__content]: true,
          })}>
          <SharerFacebook />
          <SharerTwitter />
          <SharerHatebu />
          <SharerLine />
        </div>
      </div>
    )
  }
}
