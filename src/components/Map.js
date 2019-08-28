import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledMap } from './componentStyles/SearchPageStyles';
import { mapsLoading, locationLoads, setActive } from '../redux/actionCreators';

import markerBlue from '../assets/icons8-marker-40.png'
import markerMan from '../assets/icons8-street-view-40.png'


function Map(props) {
  const { maps, mapsLoading, locations, locationLoads, selectedLocation, setActive, activeLocation } = props;
  let newMap;
  let defaultPos = { lat: 1, lng: 1 };
  // if we received a location selected and passed from single location view
  // we set the default center to the selected location
  if (selectedLocation) {
    defaultPos = selectedLocation;
  }

  const mapDefaultView = () => {
    newMap = new maps.mapsObj.Map(document.getElementById('map'), {
      zoom: 12,
      center: defaultPos
    });
    if (!selectedLocation) {
      // we set center to user location only if we have not received
      // a selected location already (from single location view)
      if (navigator.geolocation) {
      
        navigator.geolocation.getCurrentPosition(position => {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          newMap.setCenter(pos);
          setCenterToUserLocation(true, newMap);
          locationLoads(pos);
        });
        
      } else {
        // Browser doesn't support Geolocation
        setCenterToUserLocation(false, newMap);
        locationLoads(defaultPos)
      }
    } else {
      setCenterToUserLocation(null, newMap);
    }
  };

  const setCenterToUserLocation = (browserHasGeolocation, newMap) => {
    // add the marker to the center
    new maps.mapsObj.Marker({
      map: newMap,
      icon: markerMan,
      position: newMap.getCenter()
    });
    if (!browserHasGeolocation && !selectedLocation) {
      console.log("this browser doesn't support geolocation or you didn't allow it. Map is centered to default position");
    }
  };

  
  useEffect(() => {
   
    // Then we build the map
    if (maps.mapsObj) {
      mapDefaultView();
    } else { //Or we fetch it from google maps Api, before building it
      if (maps.geolocation) {
        mapsLoading(maps.geolocation);
      } else {
        mapsLoading(defaultPos);
      }
    }
    // Finally we add the markers of the locations on the map
    if (maps.mapsObj && locations.locations.length > 0) {
      locations.locations.map(
        location => {
          let marker


          if (activeLocation && activeLocation.latitude === location.latitude && activeLocation.longitude === location.longitude) {
            const contentString = `<div>`+
            `<h1 style="font-size: 2rem; text-align: center">${location.name}</h1>`+
            `<p style="text-align: center">${location.description}</p>`+
            `<p style="text-align: center">${location.address}</p>`

            const modal = new maps.mapsObj.InfoWindow({
              content: contentString,
              maxWidth: 200,
            })

            marker = new maps.mapsObj.Marker({
              map: newMap,
              position: {
                lat: parseFloat(location.latitude),
                lng: parseFloat(location.longitude)
              }
            })
            modal.open(newMap, marker)
          } else {
            marker = new maps.mapsObj.Marker({
              map: newMap,
              icon: markerBlue,
              position: {
                lat: parseFloat(location.latitude),
                lng: parseFloat(location.longitude)
              }
            })
          }
          marker.addListener('click', () => {
            setActive(location)
          });
        }

      );
    } 
    if (locations.error && locations.error === "Request failed with status code 404") {
      console.log(
        locations.error
      );
    }
  }, [maps.mapsObj, locations.locations.length, locations.geolocation]);
  return <StyledMap id="map" />;
}

function mapStateToProps(state) {
  return {
    maps: state.maps,
    locations: state.locations,
    activeLocation: state.activeLocation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      mapsLoading,
      locationLoads,
      setActive
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
