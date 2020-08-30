import { connect } from 'react-redux';

import AnswerBird from './AnswerBird';

import {
  setRoundEnd,
  increaseScore,
  increaseCountErrors,
  setCurrentBirdInfo,
} from '../../redux/actions/creators/app-state';

const mapStateToProps = ({
  appState: { isNextRoundReady, currentLevel, isResetSelectedAnswers, countErrors },
}) => ({
  isNextRoundReady,
  currentLevel,
  isResetSelectedAnswers,
  countErrors,
});

const actionCreators = {
  setRoundEnd,
  increaseScore,
  increaseCountErrors,
  setCurrentBirdInfo,
};

export default connect(mapStateToProps, actionCreators)(AnswerBird);
