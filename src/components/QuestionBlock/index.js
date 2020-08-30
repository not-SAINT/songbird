import { connect } from 'react-redux';

import QuestionBlock from './QuestionBlock';

const mapStateToProps = ({ appState: { isNextRoundReady } }) => ({
  isNextRoundReady,
});

export default connect(mapStateToProps)(QuestionBlock);
