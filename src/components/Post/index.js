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

  toggleSharerShow() {
    this.setState({ ...this.state, isSharerShow: !this.state.isSharerShow })
  }

  render() {
    const { item } = this.props
    return (
      <div className={styles.Post}>
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
