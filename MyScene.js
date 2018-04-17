const MyScene = cc.Scene.extend({
  onEnter() {
    this._super();
    const size = cc.director.getWinSize();
    const midX = size.width / 2;

    const bg = cc.Sprite.create("res/Background.png");
    bg.setPosition(midX, size.height / 2);
    bg.texture.setTexParameters(cc.LINEAR, cc.LINEAR, cc.REPEAT, cc.REPEAT);
    bg.setTextureRect(cc.rect(0, 0, this.width, this.height));
    this.addChild(bg, 0);

    const addSeed = (spriteNum, interval, quarterX, quarterY) => {
      const seed = new Seed(spriteNum, interval);
      seed.setPosition(size.width / 4 * quarterX, size.height / 4 * quarterY);
      this.addChild(seed);
    };
    addSeed(1, 2, 1, 3);
    addSeed(2, 8, 3, 3);
    addSeed(3, 16, 1, 1);
    addSeed(4, 32, 3, 1);

    const label = cc.LabelTTF.create("scores: 0", "Arial", 40);
    label.setPosition(midX, size.height - 40);
    this.addChild(label, 1);
    this.label = label;
    this.score = 0;
  },
  scoreUp(count) {
    this.score += count;
    this.label.setString(`scores: ${this.score}`);
  },
});
