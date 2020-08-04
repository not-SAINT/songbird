import {
  SCORE_INCREASE,
  SCORE_RESET,
  APP_TAB_SET_ACTIVE,
  GO_NEXT_LEVEL,
  ROUND_END,
  SELECTED_ANSWERS_RESET,
  SELECTED_ANSWERS_SET,
} from '../actions/types/action-types';

const initialAppState = {
  score: 0,
  activeTabId: 0,
  isNextRoundReady: false,
  currentLevel: 0,
  isResetSelectedAnswers: false,
};

const appStateReducer = (state = initialAppState, { type, payload }) => {
  const oldScore = state.score;
  const oldLevel = state.currentLevel;

  switch (type) {
    case SCORE_INCREASE:
      return {
        ...state,
        score: oldScore + payload,
      };
    case SCORE_RESET:
      return {
        ...state,
        score: 0,
      };
    case APP_TAB_SET_ACTIVE:
      return {
        ...state,
        activeTabId: payload,
      };

    case GO_NEXT_LEVEL:
      return {
        ...state,
        currentLevel: oldLevel + 1,
      };
    case ROUND_END:
      return {
        ...state,
        isNextRoundReady: payload,
      };
    case SELECTED_ANSWERS_RESET:
      return {
        ...state,
        isResetSelectedAnswers: true,
      };
    case SELECTED_ANSWERS_SET:
      return {
        ...state,
        isResetSelectedAnswers: false,
      };

    default:
      return state;
  }
};

export default appStateReducer;
