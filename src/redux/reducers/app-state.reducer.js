import * as aTypes from '../actions/types/action-types';

const initialAppState = {
  score: 0,
  activeTabId: 0,
  isNextRoundReady: false,
  currentLevel: 0,
  isResetSelectedAnswers: false,
  countErrors: 0,
  currentBirdInfo: null,
};

const appStateReducer = (state = initialAppState, { type, payload }) => {
  const oldScore = state.score;
  const oldLevel = state.currentLevel;
  const oldCountErrors = state.countErrors;

  switch (type) {
    case aTypes.SCORE_INCREASE:
      return {
        ...state,
        score: oldScore + payload,
      };
    case aTypes.SCORE_RESET:
      return {
        ...state,
        score: 0,
      };
    case aTypes.APP_TAB_SET_ACTIVE:
      return {
        ...state,
        activeTabId: payload,
      };
    case aTypes.GO_NEXT_LEVEL:
      return {
        ...state,
        currentLevel: oldLevel + 1,
      };
    case aTypes.ROUND_END:
      return {
        ...state,
        isNextRoundReady: payload,
      };
    case aTypes.SELECTED_ANSWERS_RESET:
      return {
        ...state,
        isResetSelectedAnswers: true,
      };
    case aTypes.SELECTED_ANSWERS_SET:
      return {
        ...state,
        isResetSelectedAnswers: false,
      };
    case aTypes.ERRORS_COUNT_INCREASE:
      return {
        ...state,
        countErrors: oldCountErrors + 1,
      };
    case aTypes.ERRORS_COUNT_RESET:
      return {
        ...state,
        countErrors: 0,
      };
    case aTypes.CURRENT_BIRD_INFO_SET:
      return {
        ...state,
        currentBirdInfo: payload,
      };
    case aTypes.CURRENT_BIRD_INFO_RESET:
      return {
        ...state,
        currentBirdInfo: null,
      };

    default:
      return state;
  }
};

export default appStateReducer;
