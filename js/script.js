AOS.init({
  duration: 1200,
})

nav = document.getElementById("nav");

  var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
        nav.className = "navbar hide"
    } else {
        nav.className = "navbar show"
    }
  };

  window.addEventListener("scroll", myScrollFunc);

// Change y>=200 value to affect the distance trigger for when the Nav bar is revealed. The lower the value, the earlier in the page it wil show. The script will also hide the nav when you scroll back up
