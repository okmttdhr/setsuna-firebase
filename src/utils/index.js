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

export default {
  getAuth
}
