import styles from './index.scss'

export default class Post extends React.Component {
  static propTypes = {
    item: React.PropTypes.object
  }

  render () {
    const {item} = this.props
    return (
      <div className={styles['Post']}>
        <div>{item[".key"]}</div>
        <div>{item.user_id}</div>
        <div>{item.content}</div>
        <div>{item.created_at}</div>
      </div>
    )
  }
}
