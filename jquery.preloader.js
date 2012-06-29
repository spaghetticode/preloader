(function($) {
  var Preloader = function(images, options) {
    this.images = images;
    this.count  = images.length;
    this.each   = options.each || function() {};
    this.all    = options.all  || function() {};
  };

  Preloader.prototype.init = function() {
    var src,
      preloader = this;

    $.each(this.images, function(i, img) {
      setTimeout(function() {
        src = img.src;
        img.src = '';
        img.src = src;
        preloader.each.call(img);
        if (i === preloader.count-1) {
          preloader.all.call(preloader.images);
        }
      }, 1);
    });
  };

  $.fn.preload = function(options) {
    new Preloader($(this), options).init();
  };
})(jQuery);
