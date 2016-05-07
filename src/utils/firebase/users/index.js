import Promise from 'bluebird'
import config from 'utils/config'
import Firebase from 'firebase'
const firebaseRef = new Firebase(config.firebaseRef())

export function create(authData) {
  return new Promise((resolve, reject) => {
    const data = { ...authData }
    data.auth.token.firebase = null
    firebaseRef.child('users').child(data.uid).set({
      ...data,
    }, (err) => {
      if (err) {
        return reject()
      }
      return resolve()
    })
  })
}

/**
 * 指定されたプロバイダーでログイン
 *
 * @param {String} provider - ex. google, facebookなど
 * @return {Object}
 */
export function loginWithOAuthRedirect(provider) {
  return new Promise((resolve, reject) => {
    firebaseRef.authWithOAuthRedirect(provider, (err, authData) => {
      if (err || !authData) {
        return reject()
      }
    }, { scope: 'email' })
  })
}

/**
 * ログアウトを実行する。
 */
export function logout() {
  firebaseRef.unauth()
}

export default {
  create,
  loginWithOAuthRedirect,
  logout,
}
