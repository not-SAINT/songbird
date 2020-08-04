import {
  SCORE_INCREASE,
  SCORE_RESET,
  APP_TAB_SET_ACTIVE,
  GO_NEXT_LEVEL,
  ROUND_END,
  SELECTED_ANSWERS_RESET,
  SELECTED_ANSWERS_SET,
} from '../types/action-types';

export const resetScore = () => ({
  type: SCORE_RESET,
});

export const increaseScore = (value) => ({
  type: SCORE_INCREASE,
  payload: value,
});

export const setAppTabActive = (value) => ({
  type: APP_TAB_SET_ACTIVE,
  payload: value,
});

export const goToNextLevel = () => ({
  type: GO_NEXT_LEVEL,
});

export const setRoundEnd = (value) => ({
  type: ROUND_END,
  payload: value,
});

export const resetSelectedAnswers = () => ({
  type: SELECTED_ANSWERS_RESET,
});

export const setSelectedAnswers = () => ({
  type: SELECTED_ANSWERS_SET,
});
