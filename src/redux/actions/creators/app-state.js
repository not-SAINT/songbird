import * as aTypes from '../types/action-types';

export const resetScore = () => ({
  type: aTypes.SCORE_RESET,
});

export const increaseScore = (value) => ({
  type: aTypes.SCORE_INCREASE,
  payload: value,
});

export const setAppTabActive = (value) => ({
  type: aTypes.APP_TAB_SET_ACTIVE,
  payload: value,
});

export const goToNextLevel = () => ({
  type: aTypes.GO_NEXT_LEVEL,
});

export const setRoundEnd = (value) => ({
  type: aTypes.ROUND_END,
  payload: value,
});

export const resetSelectedAnswers = () => ({
  type: aTypes.SELECTED_ANSWERS_RESET,
});

export const setSelectedAnswers = () => ({
  type: aTypes.SELECTED_ANSWERS_SET,
});

export const increaseCountErrors = () => ({
  type: aTypes.ERRORS_COUNT_INCREASE,
});

export const resetCountErrors = () => ({
  type: aTypes.ERRORS_COUNT_RESET,
});

export const setCurrentBirdInfo = (value) => ({
  type: aTypes.CURRENT_BIRD_INFO_SET,
  payload: value,
});

export const resetCurrentBirdInfo = () => ({
  type: aTypes.CURRENT_BIRD_INFO_RESET,
});
