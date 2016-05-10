import './index.scss'
import i18next from 'i18next'
import Alert from 'react-s-alert'

import firebaseUtils from 'utils/firebase/index'

export default class Star extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    userFirebase: React.PropTypes.object,
    starsFirebase: React.PropTypes.array,
    toggleModalLogin: React.PropTypes.func,
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
      return this.props.toggleModalLogin()
    }
    if (isStarred) {
      if (this._isItemTypeStar()) {
        if (!confirm(i18next.t('Star__delete__confirm'))) return false
      }
      firebaseUtils.stars.destroy(userFirebase.auth.uid, starKey)
        .then()
        .catch(() => Alert.error(i18next.t('error__stars__destroy') + i18next.t('tryAgainLater')))
    } else {
      firebaseUtils.stars.create(userFirebase.auth.uid, item)
        .then(() => Alert.info(i18next.t('success__stars__create')))
        .catch(() => Alert.error(i18next.t('error__stars__create') + i18next.t('tryAgainLater')))
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
      <div className='Star' onClick={(e) => this._toggleStar(e, isStarred, starKey)}>
        <i className='Star__icon material-icons'>
          {isStarred
            ? 'star' : 'star_border'}
        </i>
      </div>
    )
  }
}
