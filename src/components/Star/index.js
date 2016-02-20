import styles from './index.scss'
import classNames from 'classnames'
import firebaseUtils from 'utils/firebase/index'
import i18next from 'i18next'

export default class Star extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    userFirebase: React.PropTypes.object,
    starsFirebase: React.PropTypes.array,
  }

  constructor() {
    super()
  }

  _isItemTypeStar() {
    return this.props.item.hasOwnProperty('post_id')
  }

  _toggleStar(e, isStarred, starKey) {
    e.stopPropagation()
    const { userFirebase, item } = this.props
    if (!userFirebase) {
      return alert('ログインしてください')
    }
    if (isStarred) {
      if (this._isItemTypeStar()) {
        if (!confirm(i18next.t('Star__delete__confirm'))) return false
      }
      firebaseUtils.stars.destroy(userFirebase.auth.uid, starKey)
        .then()
        .catch(() => {
          alert('starが削除できませんでした。時間が経ってから再度お試しください。')
        })
    } else {
      firebaseUtils.stars.create(userFirebase.auth.uid, item)
        .then()
        .catch(() => {
          alert('starが保存できませんでした。時間が経ってから再度お試しください。')
        })
    }
  }

  _isStarred() {
    let starKey = null
    let isStarred = null
    const { item, starsFirebase } = this.props
    if (this._isItemTypeStar()) {
      isStarred = true
      starKey = item['.key']
    } else {
      isStarred = starsFirebase.some((star) => {
        if (star.post_id === item['.key']) {
          starKey = star['.key']
          return true
        }
        return false
      })
    }
    return {
      starKey,
      isStarred,
    }
  }

  render() {
    const { isStarred, starKey } = this._isStarred()
    return (
      <div className={styles.Star} onClick={(e) => this._toggleStar(e, isStarred, starKey)}>
        <i className={classNames({
          [styles.Star__icon]: true,
          'material-icons': true,
        })}>
          {isStarred
            ? 'star' : 'star_border'}
        </i>
      </div>
    )
  }
}
