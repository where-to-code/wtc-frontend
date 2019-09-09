export const modalInit = (mapsObj, location) => {
  // InfoWindow accept only strings as content
  const content =
    `<h1 style="font-size: 2rem; text-align: center">${location.name}</h1>` +
    `<p style="text-align: center">${location.description}</p>` +
    `<p style="text-align: center">${location.address}</p>`;

  return new mapsObj.InfoWindow({
    content: content,
    maxWidth: 200,
  });
};

export const markerInit = (map, mapsObj, location, icon) => {
  return new mapsObj.Marker({
    map: map,
    icon: icon,
    position: {
      lat: parseFloat(location.latitude),
      lng: parseFloat(location.longitude),
    },
  });
};

export const mapInit = (mapsObj, geolocation) => {
  try {
    return new mapsObj.Map(document.getElementById('map'), {
      zoom: 11,
      center: geolocation,
    });
  } catch (err) {
    // console.error(err);
  }
};

export const positionPromise = () => {
  const geolocationExists = navigator.geolocation;
  if (geolocationExists) {
    return new Promise((res, rej) => {
      geolocationExists.getCurrentPosition(res, rej);
    });
  }
};

export const position = async defaultPos => {
  try {
    const posObj = await positionPromise();
    return {
      lat: posObj.coords.latitude,
      lng: posObj.coords.longitude,
    };
  } catch {
    return {
      lat: defaultPos.lat,
      lng: defaultPos.lng,
    };
  }
};
