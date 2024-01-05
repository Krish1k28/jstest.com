function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
  function myFunction() {
    alert("I am an alert box!");
  }
  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }
function newDoc() {
   window.location.assign("http://127.0.0.1:5501/jstest.html")
  }
  setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("Time").innerHTML = d.toLocaleTimeString();
}
function goBack() {
  window.history.back()
}
const y = new Date();
document.getElementById("Year").innerHTML = y.getFullYear();

const m = new Date();
document.getElementById("Month").innerHTML = m.getMonth() + 1;

const d = new Date();
document.getElementById("Date").innerHTML = d.getDate();

const a = new Date();
document.getElementById("Hour").innerHTML = a.getHours();

const w = new Date();
document.getElementById("Seconds").innerHTML = w.getSeconds();