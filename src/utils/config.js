import * as secret from './secret'

const SCREEN_SM = 768

export function firebaseRef() {
  let host = ''

  switch (process.env.NODE_ENV) {
    case 'development':
      host = 'https://setsuna-staging.firebaseio.com/'
      break
    case 'staging':
      host = 'https://setsuna-staging.firebaseio.com/'
      break
    case 'production':
      host = 'https://setsuna.firebaseio.com/'
      break
    default:
      host = 'https://setsuna-staging.firebaseio.com/'
  }

  return host
}

export default {
  SCREEN_SM,
  firebaseRef,
  ...secret,
}
