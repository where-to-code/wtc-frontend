import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActive } from '../redux/actionCreators'
import { StyledCard } from './componentStyles/SearchPageStyles';

const LocationCard = props => {
  const { location, active, setActive } = props;

  return (
    <StyledCard active={active} onClick={() => setActive(location)}>
      <img src={location.image_url} alt={location.name} />
      <div className="desc">
        <h4>{location.name}</h4>
        <div>{location.address}</div>
      </div>
    </StyledCard>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setActive
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(LocationCard);
