
/* Get the Google Maps Link */
/* The longitude and latitude are passed as a comma separated string */
function getGoogleMapsLink(longLat) {
    return "https://maps.google.com/maps?q="+longLat;
  }
  
  /* Get the Postal Address from geo location */
  function getStreetAddress(longLat) {
    var longLat = longLat.split(',');
    var response = Maps.newGeocoder().reverseGeocode(longLat[0], longLat[1]);
    if(response.status === "OK") {
      return response.results[0].formatted_address;
    }
    return null;
  }
  
  /* Get the latitude, longitude from the postal address */
  function geocode(address) {
      var response = Maps.newGeocoder().setRegion('com').geocode(address);
      var longLat = {};
      var l;
      Logger.log("address: " + address);
      if (response.status === "OK") {
        Logger.log("response " + JSON.stringify(response));
        if((l = response.results[0].geometry.location)) {
          longLat.lng = l.lng;
          longLat.lat = l.lat;
          return longLat;
        }
      }
      else {
        return "error";
      }
  }
  
  // The cache key for "New York" and "new york  " should be same
  const md5 = (key = '') => {
    const code = key.toLowerCase().replace(/\s/g, '');
    return Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, key)
      .map((char) => (char + 256).toString(16).slice(-2))
      .join('');
  };
  
  const getCache = (key) => {
    return CacheService.getDocumentCache().get(md5(key));
  };
  
  // Store the results for 6 hours
  const setCache = (key, value) => {
    const expirationInSeconds = 6 * 60 * 60;
    CacheService.getDocumentCache().put(md5(key), value, expirationInSeconds);
  };
  
  /**
   * Calculate the travel time between two locations
   * on Google Maps.
   *
   * =GOOGLEMAPS_DURATION("NY 10005", "Hoboken NJ", "walking")
   *
   * @param {String} origin The address of starting point
   * @param {String} destination The address of destination
   * @param {String} mode The mode of travel (driving, walking, bicycling or transit)
   * @return {String} The time in minutes
   * @customFunction
   */
  const GOOGLEMAPS_DURATION = (origin, destination, mode = 'driving') => {
    const key = ['duration', origin, destination, mode].join(',');
    // Is result in the internal cache?
    const value = getCache(key);
    // If yes, serve the cached result
    if (value !== null) return value;
    const { routes: [data] = [] } = Maps.newDirectionFinder()
      .setOrigin(origin)
      .setDestination(destination)
      .setMode(mode)
      .getDirections();
    if (!data) {
      throw new Error('No route found!');
    }
    const { legs: [{ duration: { text: time } } = {}] = [] } = data;
    // Store the result in internal cache for future
    setCache(key, time);
    return time;
  };