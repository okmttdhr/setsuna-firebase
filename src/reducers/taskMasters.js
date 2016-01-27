import { handleActions } from 'redux-actions'
import { taskMasters as initialState } from 'reducers/initialState'
import * as constants from 'constants'

export default handleActions({
  [constants.REQUEST_TASK_MASTERS]: (state) => ({
    ...state,
    isFetching: true,
    errorMessage: ''
  }),

  [constants.SET_QUERY_TASK_MASTERS]: (state, action) => {
    const query = {
      ...state.query,
      ...action.payload
    }
    return {
      ...state,
      query
    }
  }
}, initialState)
