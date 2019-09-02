
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
    `<p style="text-align: center">${location.address}</p>`;

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

export const mapInit = async (mapsObj, defaultPos, icon) => {
  const pos = await position(defaultPos)
  const map = new mapsObj.Map(document.getElementById('map'), {
    zoom: 11,
    center: pos
  });
  setMapCenter(map, mapsObj, icon)
  return map;
}

export const positionPromise = () => {
  const geolocationExists = navigator.geolocation
  if (geolocationExists) {
    return new Promise((res, rej) => {
      geolocationExists.getCurrentPosition(res, rej);
    })
  }
}

export const position = async defaultPos => {
  try {
    const posObj = await positionPromise();
    // I we can access geolocation we use that to assign a center position
    return {
      lat: posObj.coords.latitude,
      lng: posObj.coords.longitude
    }
  }
  catch {
    // otherwise we use the default one
    return {
      lat: defaultPos.lat,
      lng: defaultPos.lng
    }
  }
}
