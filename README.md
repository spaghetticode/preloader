## jquery Preloader

The simplest image preloader for jquery I could imagine. It also seems to work.


#### Usage

Add jquery and jquery.preloader to your html source:
  ```html
    <script src="../lib/jquery.min.js"></script>
    <script src="../jquery.preloader.js"></script>
  ```

When document is ready, call `preload` on the wrapper you want to preload:

  ```javascript
    $(function() {
      $('img').preload({
        each: function() {
          $(this).fadeIn();
        },
        all: function() {
          console.log('preloaded', this.length, 'images');
        }
      });
    })
  ```

You can pass an option object which accepts `each` and `all` callbacks.

`each` is executed for every image after its loading is completed. In the
callback context`this` is the image element.

`all` is executed only once all images have been successfully loaded. In the
callback context `this` is the jquery wrapper.

See sample folder for a demo.
