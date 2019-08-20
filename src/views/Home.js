import React from 'react';
import { connect } from 'react-redux';
import { loadMapApi } from '../redux/actionCreators';
function Home() {
  return (
    <div onClick={loadMapApi()} className="App">
      Hello world!
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  { loadMapApi }
)(Home);
