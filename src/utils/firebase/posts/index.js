import Promise from 'bluebird'
import config from 'utils/config'
import Firebase from 'firebase'
const firebaseRef = new Firebase(config.firebaseRef())

export function create(userId, content) {
  return new Promise((resolve, reject) => {
    firebaseRef.child('posts').push({
      user_id: userId,
      content,
      created_at: Firebase.ServerValue.TIMESTAMP,
    }, (err) => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

export default {
  create,
}
