import styles from './index.scss'
import Sharer from 'sharer.npm.js'

export default class SharerTwitter extends React.Component {
  static propTypes = {
  }

  handleclick(e) {
    e.stopPropagation()
    const sharer = new Sharer(e.target)
    sharer.share()
  }

  render() {
    const aaa = 'aaaaaaaaaaaa'
    return (
      <div className={styles.SharerTwitter} onClick={::this.handleclick}>
        <button
          className='sharer button'
          data-sharer='twitter'
          data-title='Checkout Sharer.js!'
          data-via=''
          data-hashtags='setsuna'
          data-url={`https://ellisonleao.github.io/sharer.js/${aaa}`}>Share on Twitter</button>
      </div>
    )
  }
}
