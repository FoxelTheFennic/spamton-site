  function hellblink() {
     var blinks = document.getElementsByTagName('hellblink');
     for (var i = blinks.length - 1; i >= 0; i--) {
        var s = blinks[i];
        s.style.color = (s.style.color === 'orange') ? 'red' : 'orange';
     }
     window.setTimeout(hellblink, 500);
  }
  if (document.addEventListener) document.addEventListener("DOMContentLoaded", hellblink, false);
  else if (window.addEventListener) window.addEventListener("load", hellblink, false);
  else if (window.attachEvent) window.attachEvent("onload", hellblink);
  else window.onload = hellblink;