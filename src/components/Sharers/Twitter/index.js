import styles from './index.scss'
import Sharer from 'sharer.npm.js'

export default class SharerTwitter extends React.Component {
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
    const { title, url } = this.props
    return (
      <div
        className={styles.SharerTwitter}
        onClick={::this._share}
        data-sharer='twitter'
        data-title={title}
        data-via=''
        data-hashtags='setsuna'
        data-url={url}>
        t
      </div>
    )
  }
}
