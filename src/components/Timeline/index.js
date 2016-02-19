import styles from './index.scss'
import Post from 'components/Timeline/Item/index'

export default class Timeline extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
  }

  _renderItems() {
    const items = []
    this.props.items.map((item, index) => (
      items.unshift(<Post key={index} index={index} item={item} {...this.props} />)
    ))
    return items
  }

  render() {
    return (
      <div className={styles.Timeline}>
        {this._renderItems()}
      </div>
    )
  }
}
