import Promise from 'bluebird'
import config from 'utils/config'
import Firebase from 'firebase'
const firebaseRef = new Firebase(config.firebase.demoRef)

export function create (authData) {
  return new Promise((resolve, reject) => {
    firebaseRef.child('users').child(authData.uid).set({
      ...authData
    }, (err) => {
      if (err) {
        return reject()
      }
      return resolve()
    })
  })
}

/**
 * 指定されたプロバイダーでポップアップログイン
 *
 * @param {String} provider - ex. google, facebookなど
 * @return {Object}
 */
export function loginWithOAuthPopup (provider) {
  return new Promise((resolve, reject) => {
    firebaseRef.authWithOAuthPopup(provider, (err, authData) => {
      if (err || !authData) {
        return reject()
      }
      return resolve(authData)
    }, {scope: 'email'})
  })
}

/**
 * ログアウトを実行する。
 */
export function logout () {
  firebaseRef.unauth()
}

export default {
  create,
  loginWithOAuthPopup,
  logout
}
