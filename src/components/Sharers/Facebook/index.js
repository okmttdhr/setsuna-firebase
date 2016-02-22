import styles from './index.scss'
import Sharer from 'sharer.npm.js'

export default class SharerFacebook extends React.Component {
  _share(e) {
    e.stopPropagation()
    const sharer = new Sharer(e.target)
    sharer.share()
  }

  render() {
    return (
      <div className={styles.SharerFacebook} onClick={::this._share}>
        <button
          className='sharer button'
          data-sharer='facebook'
          data-url='https://ellisonleao.github.io/sharer.js/'>Share on Facebook</button>
      </div>
    )
  }
}
