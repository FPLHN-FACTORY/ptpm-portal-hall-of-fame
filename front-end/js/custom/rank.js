let RankCustom = {};

RankCustom.randomBackground = () => {
  let backgrounds = [
    "background1.jpg",
    "background2.jpg",
    "background3.png",
    "background4.png",
    "background5.jpg",
    "background6.jpg",
  ];

  const randomImage =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  $("#rank").css(
    "background-image",
    `url('../assets/img/background/${randomImage}')`
  );
};

RankCustom.randomAvatar = () => {
  let avatar = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
    "avatar5.png",
    "avatar6.png",
    "avatar7.png",
    "avatar8.png",
    "avatar9.png",
    "avatar10.png",
    "avatar11.png",
    "avatar12.png",
    "avatar13.png",
    "avatar14.png",
    "avatar15.png",
    "avatar16.png",
  ];

  const randomImage = avatar[Math.floor(Math.random() * avatar.length)];
  return `${randomImage}`;
};
