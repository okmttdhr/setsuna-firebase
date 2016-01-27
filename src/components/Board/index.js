import PanelFuture from 'components/Board/PanelFuture/index'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import config from 'utils/config'
import styles from './index.scss'

export class Board extends React.Component {
  static propTypes = {
  }

  componentDidMount () {
    const refTaskMasters = new Firebase(config.firebase.demoRef + 'taskMasters')
    this.bindAsArray(refTaskMasters, 'items')
  }

  render () {
    return (
      <div className={styles['Board']}>
        {/* mapする */}
        <PanelFuture {...this.props} {...this.state} />
      </div>
    )
  }
}

export default reactMixin.decorate(ReactFireMixin)(Board)
