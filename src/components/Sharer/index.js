import styles from './index.scss'
import SharerTest from './sharer.js'

export default class Sharer extends React.Component {
  static propTypes = {
  }

  handleclick(e) {
    e.stopPropagation()
    // const popParams = 'scrollbars=no'
    // var width = 600,
    //     height = 480,
    //     // left = window.innerWidth / 2 - width / 2 + window.screenX,
    //     // top = window.innerHeight / 2 - height / 2 + window.screenY;
    //     left = (window.innerWidth / 2) - (width / 2),
    //     top = (window.innerHeight / 2) - (height / 2);
    // // const popParams = 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', scrollbars=no'
    // const popParams = 'width=' + width + ', height=' + height
    // // const popParams = 'scrollbars=no'
    // // window.open('https://www.twitter.com/', '', popParams);
    // window.open('https://www.twitter.com/intent/tweet/', '', popParams);
    const sharer = new SharerTest(e.target)
    sharer.share()
  }

  render() {
    const aaa = 'aaaaaaaaaaaa'
    return (
      <div className={styles.Sharer} onClick={::this.handleclick}>
        <button className='sharer button' data-sharer='twitter' data-title='Checkout Sharer.js!' data-via='' data-hashtags='setsuna' data-url={`https://ellisonleao.github.io/sharer.js/${aaa}`}>Share on Twitter</button>
      </div>
    )
  }
}
