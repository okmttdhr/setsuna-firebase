import styles from './index.scss'
import Sharer from 'sharer.npm.js'

export default class SharerLine extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  }

  _share(e) {
    e.stopPropagation()
    const sharer = new Sharer(e.target)
    sharer.share()
  }

  render() {
    const { url, title } = this.props
    return (
      <div
        className={styles.SharerLine}
        onClick={::this._share}
        data-sharer='line'
        data-title={title}
        data-url={url}>
        L
      </div>
    )
  }
}
