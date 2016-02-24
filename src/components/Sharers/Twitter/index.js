import styles from './index.scss'
import Sharer from 'sharer.npm.js'

export default class SharerTwitter extends React.Component {
  _share(e) {
    e.stopPropagation()
    const sharer = new Sharer(e.target)
    sharer.share()
  }

  render() {
    return (
      <div
        className={styles.SharerTwitter}
        onClick={::this._share}
        data-sharer='twitter'
        data-title='Checkout Sharer.js!'
        data-via=''
        data-hashtags='setsuna'
        data-url={`https://ellisonleao.github.io/sharer.js/`}>
        t
      </div>
    )
  }
}
