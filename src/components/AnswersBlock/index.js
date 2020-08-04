import { connect } from 'react-redux';

import AnswersBlock from './AnswersBlock';
import { setSelectedAnswers } from '../../redux/actions/creators/app-state';

const mapStateToProps = ({ appState: { isNextRoundReady, currentLevel } }) => ({
  isNextRoundReady,
  currentLevel,
});

const actionCreators = {
  setSelectedAnswers,
};

export default connect(mapStateToProps, actionCreators)(AnswersBlock);
