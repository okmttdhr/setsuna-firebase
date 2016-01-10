import { createAction } from 'redux-actions'
import constants from 'constants'

const requestCreateAuth = createAction(constants.REQUEST_CREATE_AUTH)
const requestCreateAuthSuccess = createAction(constants.REQUEST_CREATE_AUTH_SUCCESS, (authData = {}) => authData)
const requestCreateAuthFailure = createAction(constants.REQUEST_CREATE_AUTH_FAILURE, 'エラーメッセージ')

export default {
  requestCreateAuth,
  requestCreateAuthSuccess,
  requestCreateAuthFailure
}
