setCookie("email", "example@gnail.com",365)
setCookie("firstName", "john",365)


console.log(document.cookie)

function setCookie(name,value,dataToLive){
  const date = new Date();
  date.setTime(date.getTime()+(dataToLive * 24 * 60 * 60 * 1000 ));
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/;`;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("=");
    if (parts[0] === name) return parts[1];
  }
  return "";
}
setCookie("email", "example@gmail.com", 365);
setCookie("firstName", "John", 365);


console.log("Cookies:", document.cookie);

console.log("Email Cookie:", getCookie("email"));
