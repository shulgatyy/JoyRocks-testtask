cc.game.onStart = function () {
  const resources = [
    "res/Background.png",
    "res/Coin.png",
    "res/Seed01_01.png",
    "res/Seed01_02.png",
    "res/Seed02_01.png",
    "res/Seed02_02.png",
    "res/Seed03_01.png",
    "res/Seed03_02.png",
    "res/Seed04_01.png",
    "res/Seed04_02.png",
  ];

  cc.LoaderScene.preload(resources, () => cc.director.runScene(new MyScene()), this);
};
cc.game.run("gameCanvas");
