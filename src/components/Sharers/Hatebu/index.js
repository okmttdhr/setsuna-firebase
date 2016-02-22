import styles from './index.scss'
import Sharer from 'sharer.npm.js'

export default class SharerHatebu extends React.Component {
  _share(e) {
    e.stopPropagation()
    const sharer = new Sharer(e.target)
    sharer.share()
  }

  render() {
    return (
      <div className={styles.SharerHatebu} onClick={::this._share}>
        <button
          data-sharer='hatenabookmark'
          data-url='ellisonleao.github.io/sharer.js/'>Share on Hatebu</button>
      </div>
    )
  }
}
