import Post from 'components/Posts/Post/index'
import styles from './index.scss'

export default class Posts extends React.Component {
  static propTypes = {
    taskMastersFirebase: React.PropTypes.array
  }

  render () {
    return (
      <div className={styles['Posts']}>
        {/* mapする */}
        <Post {...this.props} />
      </div>
    )
  }
}
