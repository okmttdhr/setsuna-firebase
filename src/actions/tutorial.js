import { createAction } from 'redux-actions'
import * as constants from 'constants'

export const toggleTutorialHasDone = createAction(
  constants.TOGGLE_TUTORIAL_HAS_DONE,
  (tutorialTypeName) => tutorialTypeName
)

export default {
  toggleTutorialHasDone,
}
