(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Sparkline = factory();
  }
}(window, function () {

  function extend(specific, general) {
    var obj = {};
    for (var key in general) {
      obj[key] = key in specific ? specific[key] : general[key];
    }
    return obj;
  }

  function Sparkline(element, options) {
    this.element = element;
    this.options = extend(options || {}, Sparkline.options);

    // Ensure this.element is not undefined
    if (!this.element) {
      this.element = document.createElement('div');
    }

    // Set innerHTML after ensuring this.element is defined
    this.element.innerHTML = "<canvas></canvas>";

    this.canvas = this.element.firstChild;
    this.context = this.canvas.getContext("2d");
    this.ratio = window.devicePixelRatio || 1;

    if (this.options.tooltip) {
      this.canvas.style.position = "relative";
      this.canvas.onmousemove = showTooltip.bind(this);
    }
  }

  Sparkline.options = {
    // ... (your existing options)
  };

  Sparkline.init = function (element, options) {
    return new Sparkline(element, options);
  };

  Sparkline.draw = function (element, points, options) {
    var sparkline = new Sparkline(element, options);
    sparkline.draw(points);
    return sparkline;
  };

  // ... (your existing functions, getY, drawDot, drawLine, showTooltip, etc.)

  Sparkline.prototype.draw = function (points) {
    // ... (your existing draw logic)
  };

  // ... (other functions if any)

  return Sparkline;
}));
