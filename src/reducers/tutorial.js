import { handleActions } from 'redux-actions'
import { tutorial as initialState } from 'reducers/initialState'
import * as constants from 'constants'

const hasDoneLocalStorage = JSON.parse(localStorage.getItem('tutorialHasDone'))
const initialStateObject = hasDoneLocalStorage ? {
  ...initialState,
  hasDone: {
    in: {
      ...initialState.hasDone.in,
      ...hasDoneLocalStorage.in,
    },
    action: {
      ...initialState.hasDone.action,
      ...hasDoneLocalStorage.action,
    },
  },
} : initialState

export default handleActions({
  [constants.TOGGLE_TUTORIAL_HAS_DONE]: (state, action) => {
    const tutorialType = action.payload.type
    const tutorialName = action.payload.name
    let hasDone
    hasDone = {
      ...state.hasDone,
      [tutorialType]: {
        ...state.hasDone[tutorialType],
        [tutorialName]: !state.hasDone[tutorialName],
      },
    }
    localStorage.setItem('tutorialHasDone', JSON.stringify(hasDone))
    return {
      ...state,
      hasDone,
    }
  },
}, initialStateObject)
