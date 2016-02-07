import Promise from 'bluebird'
import config from 'utils/config'
import Firebase from 'firebase'
const firebaseRef = new Firebase(config.firebase.demoRef)

export function create (uId, item) {
  return new Promise((resolve, reject) => {
    firebaseRef.child('stars').child(uId).push({
      post_id: item['.key'],
      user_id: item.user_id,
      content: item.content,
      created_at: Firebase.ServerValue.TIMESTAMP
    }, (err) => {
      if (err) {
        return reject()
      }
      return resolve()
    })
  })
}

export function destroy (uId, key) {
  return new Promise((resolve, reject) => {
    firebaseRef.child('stars').child(uId).child(key).remove((err) => {
      if (err) {
        return reject()
      }
      return resolve()
    })
  })
}

export default {
  create,
  destroy
}
