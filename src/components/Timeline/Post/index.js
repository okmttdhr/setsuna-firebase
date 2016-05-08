import './index.scss'
import Star from 'components/Star/index'
import Sharers from 'components/Sharers/index'

export default class TimelinePost extends React.Component {
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

  _getPostPath() {
    if (this._isItemTypeStar()) {
      return `/post/${this.props.item.post_id}`
    }
    return `/post/${this.props.item['.key']}`
  }

  _linkToPost() {
    this.props.history.pushState(null, this._getPostPath())
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
      <div className='TimelinePost' onClick={::this._linkToPost} style={styleOpacity}>
        <div className='TimelinePost__container'>
          <div className='TimelinePost__content'>{item.content}</div>
          <span className='TimelinePost__star'>
            <Star {...this.props} />
          </span>
          <span className='TimelinePost__sharers'>
            <Sharers {...this.props}
              isShow={this.state.isSharerShow}
              toggleShow={::this.toggleSharerShow}
              url={`https://${location.host}/#${this._getPostPath()}`}
              title={item.content} />
          </span>
        </div>
      </div>
    )
  }
}
