import styles from './index.scss'
import config from 'utils/config'
import Firebase from 'firebase'

const firebaseRef = new Firebase(config.firebase.demoRef)

export default class Star extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    userFirebase: React.PropTypes.object
  }

  handleClick (e) {
    console.log('log!')
    e.stopPropagation()

    // firebaseRef.child('stars').child(this.props.userFirebase.auth.uid).on('child_added', (ss) => {
    //   console.log('val!-----------------------------')
    //   console.log(ss.val())
    // })

    firebaseRef.child('stars').child(this.props.userFirebase.auth.uid).push({
      user_id: this.props.item.user_id,
      content: this.props.item.content,
      created_at: Firebase.ServerValue.TIMESTAMP
    }, (err) => {
      if (err) alert('starが保存できませんでした。時間を経ってから再度お試しください。')
    })
  }

  render () {
    return (
      <div className={styles['Star']} onClick={::this.handleClick}>
        star
      </div>
    )
  }
}
