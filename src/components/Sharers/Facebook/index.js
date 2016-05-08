import styles from './index.scss'
import classNames from 'classnames'
import Sharer from 'sharer.npm.js'

export default class SharerFacebook extends React.Component {
  static propTypes = {}

  _share(e) {
    e.stopPropagation()
    const sharer = new Sharer(e.target)
    sharer.share()
  }

  render() {
    return (
      <div
        className={classNames({
          [styles.SharerFacebook]: true,
        })}
        onClick={::this._share}
        data-sharer='facebook'
        data-url={`https://${location.host}`}>
        f
      </div>
    )
  }
}
