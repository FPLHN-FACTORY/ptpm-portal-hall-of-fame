let HomeCustom = {};

HomeCustom.scrollTopAnimation = () => {
  let items = document.querySelectorAll(".item__home");

  document.addEventListener("scroll", (event) => {
    items.forEach((item) => {
      if (item.offsetTop - window.scrollY < 300) {
        item.classList.add("active");
      }
    });
  });
};

HomeCustom.scrollToElement = function (id) {
  var element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

HomeCustom.scrollShowHeader = function () {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top =
        -document.getElementById("header").offsetHeight + "px";
    }
    prevScrollpos = currentScrollPos;
  };
};
