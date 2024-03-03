// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`Circle with radius: ${_radius.get(this)}`); // 访问私有属性
  }
}

// module.exports.Circle = Circle
// module.exports.Square = Square
module.exports = Circle;
