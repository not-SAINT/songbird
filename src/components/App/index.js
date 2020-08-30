import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = ({ appState: { currentLevel } }) => ({
  currentLevel,
});

export default connect(mapStateToProps)(App);
