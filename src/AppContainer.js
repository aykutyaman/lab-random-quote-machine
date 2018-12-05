import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetch } from './actions';
import App from './App';

const mapStateToProps = ({ author, text }) => ({ author, text })

export default compose(
  connect(mapStateToProps, { fetch }),
  lifecycle({
    componentDidMount() {
      this.props.fetch();
    }
  })
)(App)
