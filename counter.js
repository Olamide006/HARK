 
  var count = document.getElementsByClassName("count");
  var inc = [];
  function interval() {
    for (let i = 0; i < count.length; i++) {
      inc.push(1);
      if (inc[i] != count[i].getAttribute("max-data")) {
        inc[i]++;
      }
      count[i].innerHTML = inc[i] +  "<span class='plus-sign'>+</span>" ;
    }
  }
  var main = document.getElementById("main");
  window.onscroll = function () {
    setInterval(() => {
      var topElem = main.offsetTop;
      var btmElem = main.offsetTop + main.clientHeight;
      var topScreen = window.scrollY;
      var btmScreen = window.scrollY + window.innerHeight;
      if (btmScreen > topElem && topScreen < btmElem) {
        interval();
      } else {
          // clearInterval(timer);
          for(let i = 0; i<count.length; i++){
              count[i].innerHTML = 1;
              inc = [];
          }
      }
    }, 100);
  };