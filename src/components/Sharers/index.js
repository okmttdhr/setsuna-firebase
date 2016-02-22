import styles from './index.scss'
import SharerTwitter from 'components/Sharers/Twitter/index'
import SharerFacebook from 'components/Sharers/Facebook/index'
import SharerLine from 'components/Sharers/Line/index'
import SharerHatebu from 'components/Sharers/Hatebu/index'

export default class Sharers extends React.Component {
  static propTypes = {
  }

  handleclick(e) {
    e.stopPropagation()
    console.log('modalとか開く')
  }

  render() {
    return (
      <div className={styles.Sharers} onClick={::this.handleclick}>
        <SharerFacebook />
        <SharerTwitter />
        <SharerHatebu />
        <SharerLine />
      </div>
    )
  }
}
