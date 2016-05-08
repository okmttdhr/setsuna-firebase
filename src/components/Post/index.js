import './index.scss'
import Star from 'components/Star/index'
import Sharers from 'components/Sharers/index'

export default class Post extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,
  }

  constructor() {
    super()
    this.state = {
      isSharerShow: false,
    }
  }

  toggleSharerShow() {
    this.setState({ ...this.state, isSharerShow: !this.state.isSharerShow })
  }

  render() {
    const { item } = this.props
    return (
      <div className='Post'>
        <div className='Post__container'>
          <div className='Post__content'>{item.content}</div>
          <span className='Post__star'>
            <Star {...this.props} />
          </span>
          <span className='Post__sharers'>
            <Sharers {...this.props}
              isShow={this.state.isSharerShow}
              toggleShow={::this.toggleSharerShow}
              url={location.href}
              title={item.content} />
          </span>
        </div>
      </div>
    )
  }
}
