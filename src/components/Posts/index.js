import PanelFuture from 'components/Posts/PanelFuture/index'
import styles from './index.scss'

export default class Posts extends React.Component {
  static propTypes = {
    taskMastersFirebase: React.PropTypes.array
  }

  render () {
    return (
      <div className={styles['Posts']}>
        {/* mapする */}
        <PanelFuture {...this.props} />
      </div>
    )
  }
}
