import PanelFuture from 'components/Board/PanelFuture/index'
import styles from './index.scss'

export default class Board extends React.Component {
  static propTypes = {
    taskMastersFirebase: React.PropTypes.array
  }

  render () {
    return (
      <div className={styles['Board']}>
        {/* mapする */}
        <PanelFuture {...this.props} />
      </div>
    )
  }
}
