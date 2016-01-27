import PanelFuture from 'components/Board/PanelFuture/index'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import styles from './index.scss'

export class Board extends React.Component {
  static propTypes = {
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

export default reactMixin.decorate(ReactFireMixin)(Board)
