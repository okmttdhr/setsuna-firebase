import styles from './index.scss'
import config from 'utils/config'
import Firebase from 'firebase'
import firebaseUtils from 'utils/firebase/index'

const firebaseRef = new Firebase(config.firebase.demoRef)

export default class Star extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    userFirebase: React.PropTypes.object,
    starsFirebase: React.PropTypes.array
  }

  _addStar (e, isStarred, key) {
    e.stopPropagation()
    const {userFirebase, item} = this.props
    if (!userFirebase) {
      return alert('ログインしてください')
    }
    if (isStarred) {
      firebaseRef.child('stars').child(userFirebase.auth.uid).child(key).remove((err) => {
        if (err) alert('starが削除できませんでした。時間を経ってから再度お試しください。')
      })
    } else {
      firebaseUtils.stars.create(userFirebase.auth.uid, item)
        .then(() => {})
        .catch(() => {
          alert('starが保存できませんでした。時間を経ってから再度お試しください。')
        })
    }
  }

  render () {
    let key = null
    const {item, starsFirebase} = this.props
    const isStarred = starsFirebase.some((star) => {
      if (star.post_id === item['.key']) {
        key = star['.key']
        return true
      }
      return false
    })
    return (
      <div className={styles['Star']} onClick={(e) => this._addStar(e, isStarred, key)}>
        <i className='material-icons'>
          {isStarred
            ? 'star' : 'star_border'}
        </i>
      </div>
    )
  }
}
