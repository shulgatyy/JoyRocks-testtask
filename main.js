cc.game.onStart = function () {
  const resources = [
    "res/Background.png",
  ];

  cc.LoaderScene.preload(resources, () => cc.director.runScene(new MyScene()), this);
};
cc.game.run("gameCanvas");
