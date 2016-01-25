import PanelFuture from 'components/Board/PanelFuture/index'
// import utils from 'utils/index'
import config from 'utils/config'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import styles from './index.scss'

// const firebaseRef = new Firebase(config.firebase.demoRef)

export class Board extends React.Component {
  static propTypes = {
  }

  componentDidMount () {
    // firebaseRef.child('taskMasters').on('child_added', (childSnapshot) => {
    //   console.log(childSnapshot.val())
    //   this.props.setQuery({taskName: null})
    // })

    const reftest = new Firebase(config.firebase.demoRef + 'taskMasters')
    this.bindAsArray(reftest, 'items')
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
