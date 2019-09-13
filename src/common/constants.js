import camelCaseKeys from "camelcase-keys";

export let spotifyScopes =
  "user-top-read user-library-read " +
  "playlist-modify-public playlist-read-private playlist-read-collaborative " +
  "user-read-email playlist-modify-private streaming";

export let redirectURI = "http://localhost:3000";
export let clientID = "90a54f792a9e4fff94eec8d0c0075bd0";

export function setCookie(cname, cvalue, expirationHours) {
  var d = new Date();
  d.setTime(d.getTime() + expirationHours * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function deepCamelCaseKeys(variable) {
  if (variable === null) {
    return null;
  } else if (variable instanceof Array) {
    variable.forEach((object, index) => {
      variable[index] = deepCamelCaseKeys(object);
    });

    return variable;
  } else if (variable instanceof Object) {
    Object.keys(variable).forEach(key => {
      variable[key] = deepCamelCaseKeys(variable[key]);
    });

    return camelCaseKeys(variable);
  } else {
    return variable;
  }
}

export function isBelowLargeBreakpoint() {
  return window.innerWidth < 1200;
}

export function isBelowMediumBreakpoint() {
  return window.innerWidth < 992;
}

export function isBelowSmallBreakpoint() {
  return window.innerWidth < 768;
}

export function isBelowExtraSmallBreakpoint() {
  return window.innerWidth < 576;
}

export function msToHM(ms) {
  let seconds = ms / 1000;

  let hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;

  let minutes = Math.floor(seconds / 60);

  return {
    hours,
    minutes
  };
}
