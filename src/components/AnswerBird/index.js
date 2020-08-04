import { connect } from 'react-redux';

import AnswerBird from './AnswerBird';

import { setRoundEnd } from '../../redux/actions/creators/app-state';

const mapStateToProps = ({
  appState: { isNextRoundReady, currentLevel, isResetSelectedAnswers },
}) => ({
  isNextRoundReady,
  currentLevel,
  isResetSelectedAnswers,
});

const actionCreators = {
  setRoundEnd,
};

export default connect(mapStateToProps, actionCreators)(AnswerBird);
