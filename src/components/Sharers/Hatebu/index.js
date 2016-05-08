import styles from './index.scss'
import Sharer from 'sharer.npm.js'

export default class SharerHatebu extends React.Component {
  static propTypes = {}

  _share(e) {
    e.stopPropagation()
    const sharer = new Sharer(e.target)
    sharer.share()
  }

  render() {
    return (
      <div
        className={styles.SharerHatebu}
        onClick={::this._share}
        data-sharer='hatenabookmark'
        data-url={`https://${location.host}`}>
        B!
      </div>
    )
  }
}
