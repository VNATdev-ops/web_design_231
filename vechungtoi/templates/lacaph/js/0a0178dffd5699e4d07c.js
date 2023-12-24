(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    243: function (a, o, e) {
      "use strict";
      e(244), e(246);
      var r = e(8),
        t = e(12);
      document
        .querySelectorAll(".faq .category-module-item")
        .forEach(function (e) {
          var r,
            t,
            d = e.querySelector(".readmore-wrap");
          d.addEventListener("click", function () {
            var a = this.querySelector(".readmore-link").dataset.hideanswer,
              o = this.querySelector(".readmore-link").dataset.answer;
            (r = e.querySelector(".category-module-item-desc")),
              (t = r.querySelector(".desc-wrap").offsetHeight + 30),
              e.querySelector(".readmore-wrap").classList.toggle("open"),
              d.querySelector(".readmore-link").innerHTML === o
                ? ((d.querySelector(".readmore-link").innerHTML = a),
                  (r.style.height = t + "px"),
                  (r.style.padding = "30px 0 0"))
                : ((d.querySelector(".readmore-link").innerHTML = o),
                  (r.style.height = "0"),
                  (r.style.padding = "0")),
              window.addEventListener("resize", function () {
                d.innerHTML !== o && (r.style.height = "auto");
              });
          });
        }),
        (0, r.fontAwesomeLoad)(".down-arr", t.faChevronDown);
    },
    244: function (a, o, e) {
      var r = e(2),
        t = e(245);
      "string" == typeof (t = t.__esModule ? t.default : t) &&
        (t = [[a.i, t, ""]]);
      var d = { insert: "head", singleton: !1 };
      r(t, d);
      a.exports = t.locals || {};
    },
    245: function (a, o, e) {
      "use strict";
      e.r(o);
      var r = e(0),
        t = e.n(r),
        d = e(1),
        n = e.n(d),
        l = e(9),
        i = t()(!1),
        b = n()(l.a);
      i.push([
        a.i,
        '@-webkit-keyframes loader4Animation{0%{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}17%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 #000,30px 0 0 0 rgba(0,0,0,.67)}33%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 #000}50%{background-color:transparent;box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 rgba(24,28,34,.67)}67%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 transparent,30px 0 0 0 rgba(0,0,0,.33)}83%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 transparent}to{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}}@keyframes loader4Animation{0%{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}17%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 #000,30px 0 0 0 rgba(0,0,0,.67)}33%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 #000}50%{background-color:transparent;box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 rgba(24,28,34,.67)}67%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 transparent,30px 0 0 0 rgba(0,0,0,.33)}83%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 transparent}to{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}}.moduletable.faq h2{font-family:Josefin Sans,sans-serif;font-size:2rem;color:#4e358a;text-transform:uppercase;font-weight:700;line-height:2.75rem;text-align:center;margin-bottom:30px}.moduletable.faq .title-wrap{width:100vw;margin-left:calc(50% - 50vw)}.moduletable.faq .title-wrap h3{font-size:1rem;margin-bottom:15px}.moduletable.faq .title-wrap:before{content:"";display:block;height:31px;background-image:url(' +
          b +
          ');z-index:9}.moduletable.faq .title-wrap:before{margin-top:-1px}.moduletable.faq .title-wrap:after{margin-bottom:-1px;background-position:0 1px}.moduletable.faq .title-wrap .title-wrap-inner{position:relative;padding:30px 60px}.moduletable.faq .title-wrap .title-wrap-inner:before{content:"";position:absolute;display:block;top:-1px;left:0;width:31px;height:100%;background-image:url(' +
          b +
          ');z-index:9}.moduletable.faq .title-wrap .title-wrap-inner:after{content:"";position:absolute;display:block;top:-1px;right:0;width:31px;height:100%;background-image:url(' +
          b +
          ");z-index:-9;background-position:1px 0}.moduletable.faq .category-module-item-desc{height:0;padding:0;overflow:hidden;transition:all .4s ease}.moduletable.faq .category-module-item-desc p:last-child{margin-bottom:0}.moduletable.faq .readmore-wrap{color:#4e358a;position:relative;width:150px}.moduletable.faq .readmore-wrap .readmore-link{width:100%}.moduletable.faq .readmore-wrap svg{position:absolute;right:0;top:3px}.moduletable.faq .readmore-wrap.open svg{transform:rotate(180deg)}",
        "",
      ]),
        (o.default = i);
    },
    246: function (a, o, e) {
      var r = e(2),
        t = e(247);
      "string" == typeof (t = t.__esModule ? t.default : t) &&
        (t = [[a.i, t, ""]]);
      var d = { insert: "head", singleton: !1 };
      r(t, d);
      a.exports = t.locals || {};
    },
    247: function (a, o, e) {
      "use strict";
      e.r(o);
      var r = e(0),
        t = e.n(r)()(!1);
      t.push([
        a.i,
        "@-webkit-keyframes loader4Animation{0%{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}17%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 #000,30px 0 0 0 rgba(0,0,0,.67)}33%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 #000}50%{background-color:transparent;box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 rgba(24,28,34,.67)}67%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 transparent,30px 0 0 0 rgba(0,0,0,.33)}83%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 transparent}to{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}}@keyframes loader4Animation{0%{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}17%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 #000,30px 0 0 0 rgba(0,0,0,.67)}33%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 #000}50%{background-color:transparent;box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 rgba(24,28,34,.67)}67%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 transparent,30px 0 0 0 rgba(0,0,0,.33)}83%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 transparent}to{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}}@media(min-width:992px){.moduletable.faq{width:100%;padding-right:.9375rem;padding-left:.9375rem;margin-right:auto;margin-left:auto}}@media(min-width:992px)and (min-width:576px){.moduletable.faq,.moduletable.faq-sm{max-width:540px}}@media(min-width:992px)and (min-width:768px){.moduletable.faq,.moduletable.faq-md,.moduletable.faq-sm{max-width:720px}}@media(min-width:992px)and (min-width:992px){.moduletable.faq,.moduletable.faq-lg,.moduletable.faq-md,.moduletable.faq-sm{max-width:960px}}@media(min-width:992px)and (min-width:1200px){.moduletable.faq,.moduletable.faq-lg,.moduletable.faq-md,.moduletable.faq-sm,.moduletable.faq-xl{max-width:1140px}}@media(min-width:992px){.moduletable.faq{margin-top:30px}.moduletable.faq .title-wrap{width:100%;margin-left:0}}",
        "",
      ]),
        (o.default = t);
    },
  },
  [[243, 0, 2, 1, 6, 8, 7, 9, 10, 5, 11]],
]);
