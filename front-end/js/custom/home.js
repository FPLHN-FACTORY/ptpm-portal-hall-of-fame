let HomeCustom = {};

HomeCustom.scrollTopAnimation = () => {
  let items = document.querySelectorAll(".item__home");

  document.addEventListener("scroll", (event) => {
    items.forEach((item) => {
      if (item.offsetTop - window.scrollY < 350) {
        item.classList.add("active");
      }
    });
  });
};

HomeCustom.scrollToElement = function (id) {
  var element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};
