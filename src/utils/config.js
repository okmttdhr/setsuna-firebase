export const SCREEN_SM = 768
export const WAIT_TIME = 5000

export function firebaseRef() {
  let host = ''

  switch (process.env.NODE_ENV) {
    case 'development':
      host = `https://${process.env.FIREBASE_APP_STAGING}.firebaseio.com/`
      break
    case 'staging':
      host = `https://${process.env.FIREBASE_APP_STAGING}.firebaseio.com/`
      break
    case 'production':
      host = 'https://setsuna.firebaseio.com/'
      break
    default:
      host = `https://${process.env.FIREBASE_APP_STAGING}.firebaseio.com/`
  }

  return host
}

export default {
  SCREEN_SM,
  WAIT_TIME,
  firebaseRef,
}
