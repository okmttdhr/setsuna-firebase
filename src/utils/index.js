import Firebase from 'firebase'
import config from 'utils/config'
const firebaseRef = new Firebase(config.firebase.demoRef)

export function getAuth() {
  const authData = firebaseRef.getAuth() || null
  if (authData) {
    console.log(`User is logged in: ${authData.uid}`)
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
export function isVaild(items) {
  return items.every((item) => item.valid)
}

/**
 * 単純なテキストの値を更新する
 *
 * @param {Object} state - ex. this.state.taskName
 * @param {String} value
 * @return {Object}
 */
export function changedValue(state, value) {
  let valid
  if (value) {
    valid = true
  } else {
    valid = false
  }
  return { ...state, value, valid }
}

export default {
  isVaild,
  getAuth,
  changedValue,
}
