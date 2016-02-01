import styles from './index.scss'
import { Link } from 'react-router'

export default class Post extends React.Component {
  static propTypes = {
    item: React.PropTypes.object
  }

  render () {
    const {item} = this.props
    return (
      <Link to={'/posts/' + item['.key']} className={styles['Posts']}>
        <div className={styles['Post']}>
          <div>{item.user_id}</div>
          <div>{item.content}</div>
          <div>{item.created_at}</div>
        </div>
      </Link>
    )
  }
}
