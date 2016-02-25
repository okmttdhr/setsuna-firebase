import styles from './index.scss'
import Sharer from 'sharer.npm.js'

export default class SharerLine extends React.Component {
  _share(e) {
    e.stopPropagation()
    const sharer = new Sharer(e.target)
    sharer.share()
  }

  render() {
    return (
      <div
        className={styles.SharerLine}
        onClick={::this._share}
        data-sharer='line'
        data-title='Sharer.js is the ultimate sharer js lib'
        data-url='https://ellisonleao.github.io/sharer.js/'>
        L
      </div>
    )
  }
}
