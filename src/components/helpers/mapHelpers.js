import {locationLoads,setGeolocationFalse, setGeolocationTrue} from '../../redux/actionCreators'

export const setMapCenter = (map, mapsObj, icon) => {
    new mapsObj.Marker({
        map: map,
        icon: icon,
        position: map.getCenter()
    });
};

export const modalInit = (mapsObj, location) => {
    // InfoWindow accept only strings as content
    const content = 
        `<h1 style="font-size: 2rem; text-align: center">${location.name}</h1>` +
        `<p style="text-align: center">${location.description}</p>` +
        `<p style="text-align: center">${location.address}</p>` ;

    return new mapsObj.InfoWindow({
        content: content,
        maxWidth: 200
    });
}

export const markerInit = (map, mapsObj, location, icon) => {
    return new mapsObj.Marker({
        map: map,
        icon: icon,
        position: {
            lat: parseFloat(location.latitude),
            lng: parseFloat(location.longitude)
        }
    });
}

export const mapInit = (mapsObj, defaultPos, icon) => {
    // We initialize a map
    const map = new mapsObj.Map(document.getElementById('map'), {
        zoom: 12,
        center: defaultPos
      });
  
      // We get locations based the geolocation
      if (map.geolocation) {
        map.geolocation.getCurrentPosition(position => {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          locationLoads(pos);
          setGeolocationTrue()
        });
      } else { // or we use the default position for it
        locationLoads(defaultPos)
        setGeolocationFalse();
      }
  
      // We set the center
      setMapCenter(map, mapsObj, icon)
      
      //we return the map
      return map;
}