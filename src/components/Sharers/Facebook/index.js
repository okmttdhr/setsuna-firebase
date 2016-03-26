import styles from './index.scss'
import classNames from 'classnames'
import Sharer from 'sharer.npm.js'

export default class SharerFacebook extends React.Component {
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
        className={classNames({
          [styles.SharerFacebook]: true,
        })}
        onClick={::this._share}
        data-sharer='facebook'
        data-url={`http://localhost:3000/#${url}`}>
        f
      </div>
    )
  }
}
