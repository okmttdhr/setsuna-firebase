import config from 'utils/config'
import Firebase from 'firebase'
const firebaseRef = new Firebase(config.firebase.demoRef)

function getAuth () {
  const authData = firebaseRef.getAuth() || null
  if (authData) {
    console.log('User ' + authData.uid + ' is logged in with ' + authData.provider)
  } else {
    console.log('User is logged out')
  }
  return authData
}

/**
 * 複数のフォームが有効がどうかを判別する。
 * すべての要素で valid が true であることをチェックする。
 *
 * @param {Array} items - valid をプロパティに持つ Object の配列
 * @return {Boolean}
 */
export function isVaild (items) {
  return items.every((item) => {
    return item.valid
  })
}

/**
 * 単純なテキストの値を更新する
 *
 * @param {Object} state - ex. this.state.taskName
 * @param {String} value
 * @return {Object}
 */
function changedValue (state, value) {
  let valid
  if (value) {
    valid = true
  } else {
    valid = false
  }
  return {...state, value, valid}
}

export default {
  isVaild,
  getAuth,
  changedValue
}
