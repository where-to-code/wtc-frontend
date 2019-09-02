import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { setActive, clearLocations } from '../redux/actionCreators'
import { StyledCard } from './componentStyles/LocationCardStyles';

const LocationCard = props => {
  const { location, active, setActive, clearLocations } = props;

  return (
    <StyledCard
      active={active}
      onMouseEnter={() => setActive(location)}
      onClick={() => {
        clearLocations()
      }}
    >
      <Link to={`/location/${location.id}`}>
        <img src={location.image_url} alt={location.name} />
        <div className="desc">
          <h4>{location.name}</h4>
          <div>{location.address}</div>
        </div>
      </Link>
    </StyledCard>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setActive,
      clearLocations
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(LocationCard);
