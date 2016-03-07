import styles from './index.scss'
import Star from 'components/Star/index'
import Sharers from 'components/Sharers/index'

export default class Post extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    index: React.PropTypes.number.isRequired,
    history: React.PropTypes.object.isRequired,
  }

  constructor() {
    super()
    this.state = {
      isSharerShow: false,
    }
  }

  _isItemTypeStar() {
    return this.props.item.hasOwnProperty('post_id')
  }

  _linkToPost() {
    if (this._isItemTypeStar()) {
      this.props.history.pushState(null, `/post/${this.props.item.post_id}`)
    } else {
      this.props.history.pushState(null, `/post/${this.props.item['.key']}`)
    }
  }

  toggleSharerShow() {
    this.setState({ ...this.state, isSharerShow: !this.state.isSharerShow })
  }

  render() {
    // 0.1 + (4 * x) = 0.5 くらいになるようにつくった
    // 本番だと 0.1 + (49 * x) = 0.5 くらいになるように
    // 式は (0.5-0.1)/x
      // xは半分のopacityにしたいindex
    const styleOpacity = {
      opacity: 0.1 + (this.props.index * 0.1),
      zIndex: this.state.isSharerShow ? 1 : 0,
    }
    const { item } = this.props
    return (
      <div className={styles.Post} onClick={::this._linkToPost} style={styleOpacity}>
        <div className={styles.Post__container}>
          <div>{item.content}</div>
          <Star {...this.props} />
          <Sharers {...this.props}
            isShow={this.state.isSharerShow}
            toggleShow={::this.toggleSharerShow} />
        </div>
      </div>
    )
  }
}
