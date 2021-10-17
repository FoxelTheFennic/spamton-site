  function redgreenblink() {
     var blinks = document.getElementsByTagName('redgreenblink');
     for (var i = blinks.length - 1; i >= 0; i--) {
        var s = blinks[i];
        s.style.color = (s.style.color === 'green') ? 'red' : 'green';
     }
     window.setTimeout(redgreenblink, 500);
  }
  if (document.addEventListener) document.addEventListener("DOMContentLoaded", redgreenblink, false);
  else if (window.addEventListener) window.addEventListener("load", redgreenblink, false);
  else if (window.attachEvent) window.attachEvent("onload", redgreenblink);
  else window.onload = redgreenblink;