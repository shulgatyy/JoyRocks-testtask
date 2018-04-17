const onTouchBegan = (touch, event) => {
  const target = event.getCurrentTarget();
  if (cc.rectContainsPoint(target.getBoundingBox(), touch.getLocation())) {
    target.harvest();
  }
  return true;
};

const Seed = cc.Sprite.extend({
  ctor(num, interval) {
    this._super(`res/Seed0${num}_01.png`);
    this.num = num;
    this.score = 10 ** (num - 1);
    this.growthAction = new cc.Sequence(
      new cc.DelayTime(interval),
      new cc.CallFunc(this.ready.bind(this))
    );
    this.start();

    const onTouch = {
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: false,
      onTouchBegan
    };
    cc.eventManager.addListener(onTouch, this);
  },
  start() {
    this.ready = false;
    this.runAction(this.growthAction);
  },
  ready() {
    this.ready = true;
    this.setTexture(`res/Seed0${this.num}_02.png`);
  },
  harvest() {
    if (!this.ready) return;
    this.setTexture(`res/Seed0${this.num}_01.png`);
    this.getParent().spawnCoin(this.getPosition(), this.score);
    this.start();
  }
});
