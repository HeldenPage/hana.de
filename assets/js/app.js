// Template Name: drax
// Template URL: https://techpedia.com/template/drax
// Description: Drax HTML5 Template
// Version: 1.0.0

(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.hidepreloader();
      Init.textAnimition();
      Init.salActivation();
      Init.intializeSlick();
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    hidepreloader: function () {
      $("#preloader").hide();
    },
    textAnimition: function () {
      // Auto typewrite text on hero_1
      var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 200;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      };

      window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
      };
    },
    salActivation: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },
    
    intializeSlick: function (e) {
      if ($(".slider").length) {
        $(".slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
          cssEase: 'linear',
          pauseOnHover: false,
          pauseOnFocus: false,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 1500,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 492,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".slider-2").length) {
        $(".slider-2").slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          centerPadding: '0px',
          autoplay: true,
          cssEase: 'linear',
          autoplaySpeed: 1500,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 492,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }

    },

  }
  Init.i();
})(window, document, jQuery);

