import styles from './index.scss'
import Sharer from 'sharer.npm.js'

export default class SharerHatebu extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired,
  }

  _share(e) {
    e.stopPropagation()
    const sharer = new Sharer(e.target)
    sharer.share()
  }

  render() {
    const { url } = this.props
    return (
      <div
        className={styles.SharerHatebu}
        onClick={::this._share}
        data-sharer='hatenabookmark'
        data-url={`http://localhost:3000/#${url}`}>
        B!
      </div>
    )
  }
}
