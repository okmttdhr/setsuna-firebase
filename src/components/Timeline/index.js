import styles from './index.scss'
import Post from 'components/Timeline/Post/index'
import Header from 'components/Timeline/Header/index'

export default class Timeline extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
  }

  _renderPosts() {
    const items = []
    this.props.items.map((item, index) => (
      items.unshift(<Post key={index} index={index} item={item} {...this.props} />)
    ))
    return items
  }

  render() {
    return (
      <div className={styles.Timeline}>
        <Header {...this.props} />
        {this._renderPosts()}
      </div>
    )
  }
}
