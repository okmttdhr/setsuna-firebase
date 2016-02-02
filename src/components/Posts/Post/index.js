import styles from './index.scss'
import Star from 'components/Star/index'

export default class Post extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    history: React.PropTypes.object.isRequired
  }

  handleClick () {
    this.props.history.pushState(null, '/post/' + this.props.item['.key'])
  }

  render () {
    const {item} = this.props
    return (
      <div className={styles['Post']} onClick={::this.handleClick}>
        <div>{item.content}</div>
        <Star {...this.props} />
      </div>
    )
  }
}
