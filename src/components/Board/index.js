import PanelFuture from 'components/Board/PanelFuture/index'
import styles from './index.scss'

export default class Board extends React.Component {
  render () {
    return (
      <div className={styles['Board']}>
        <PanelFuture />
      </div>
    )
  }
}
