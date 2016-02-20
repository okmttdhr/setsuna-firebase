import styles from './index.scss'
import Star from 'components/Star/index'
import Sharer from 'components/Sharer/index'

export default class Post extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    index: React.PropTypes.number.isRequired,
    history: React.PropTypes.object.isRequired,
  }

  _linkToPost() {
    this.props.history.pushState(null, `/post/${this.props.item['.key']}`)
  }

  render() {
    // 0.1 + (4 * x) = 0.5 くらいになるようにつくった
    // 本番だと 0.1 + (49 * x) = 0.5 くらいになるように
    // 式は (0.5-0.1)/x
      // xは半分のopacityにしたいindex
    const styletest = { opacity: 0.1 + (this.props.index * 0.1) }
    const { item } = this.props
    return (
      <div className={styles.Post} onClick={::this._linkToPost} style={styletest}>
        <div className={styles.Post__container}>
          <div>{item.content}</div>
          <Star {...this.props} />
          <Sharer />
        </div>
      </div>
    )
  }
}
