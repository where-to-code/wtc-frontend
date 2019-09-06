// We use a promise to get a maps object from the the Google Maps API here
export const mapPromise = new Promise((resolve, reject) => {
  window.initGoogleMapPromise = () => {
    resolve(window.google);
    delete window.initGoogleMapPromise;
  };
  const script = document.createElement('script');
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  script.async = true;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=initGoogleMapPromise`;
  document.body.appendChild(script);
});
