import Header from 'components/Posts/Header/index'
import styles from './index.scss'

export default class Posts extends React.Component {
  static propTypes = {
    taskMastersFirebase: React.PropTypes.array
  }

  render () {
    return (
      <div className={styles['Posts']}>
        <Header {...this.props} />
        {/* postsをmapする */}
      </div>
    )
  }
}
