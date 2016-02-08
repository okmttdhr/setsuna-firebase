import { createAction } from 'redux-actions'
import * as constants from 'constants'

const requestCreateAuth = createAction(constants.REQUEST_CREATE_AUTH)
const requestCreateAuthSuccess = createAction(constants.REQUEST_CREATE_AUTH_SUCCESS)
const requestCreateAuthFailure = createAction(constants.REQUEST_CREATE_AUTH_FAILURE, 'エラーメッセージ')
const requestDeleteAuthSuccess = createAction(constants.REQUEST_DELETE_AUTH_SUCCESS)

export default {
  requestCreateAuth,
  requestCreateAuthSuccess,
  requestCreateAuthFailure,
  requestDeleteAuthSuccess
}
