import { handleActions } from 'redux-actions'
import { tutorial as initialState } from 'reducers/initialState'
import * as constants from 'constants'

export default handleActions({
  [constants.TOGGLE_TUTORIAL_HAS_DONE]: (state, action) => {
    const tutorialType = action.payload.type
    const tutorialName = action.payload.name
    let hasDone
    if (tutorialType === 'in') {
      hasDone = {
        in: {
          ...state.hasDone.in,
          [tutorialName]: !state.hasDone[tutorialName],
        }
      }
    } else if (tutorialType === 'action') {
      hasDone = {
        action: {
          ...state.hasDone.action,
        }
      }
    }
    return {
      ...state,
      hasDone,
    }
  },
}, initialState)
