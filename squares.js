
function Square(top, left, size) {
  this.top = top;
  this.left = left;
  this.size = size;
  this.padding = 4;
  this.color = '#ffffff';
  this.lineWidth = 1;
}

Square.prototype.draw = function(context) {
  context.save();

  context.lineWidth = this.lineWidth;
  context.strokeStyle = this.color;
  var wh = this.size - (this.padding * 2);
  context.strokeRect(this.left + this.padding, this.top + this.padding, wh, wh);

  context.restore();
};

window.onload = function() {
  var canvas = document.getElementById('squares');
  var ctx = canvas.getContext('2d');

  var width = canvas.width;
  var height = canvas.height;

  var square = new Square(100,100,100);
  var xs, ys;

  ctx.fillRect(0, 0, width, height);

  square.size = 312;
  square.left = 86;
  square.top = 86;
  square.color = '#03F528';
  square.lineWidth = 6;
  square.draw(ctx);


  square.color = '#f503d0';
  square.size = width / 10;
  square.lineWidth = 1;

  for (xs = 0; xs <= 10; xs = xs + 1) {
    for (ys = 0; ys <= 10; ys = ys + 1) {
      square.left = xs * square.size;
      square.top = ys * square.size;
      square.draw(ctx);
    }
  }

};
