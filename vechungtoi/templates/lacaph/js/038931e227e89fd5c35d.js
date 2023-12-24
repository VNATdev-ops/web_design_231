(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    32: function (o, e, t) {
      "use strict";
      e.a = t.p + "fonts/d05e6ea0465b5a6cacddd5fcaa2ae61f.woff2";
    },
    33: function (o, e, t) {
      "use strict";
      e.a = t.p + "fonts/c07e2e6c2f46a2257e7855b3708045db.woff2";
    },
    34: function (o, e, t) {
      "use strict";
      e.a = t.p + "fonts/6cc135a112d9409f1e23b64eb4626238.woff2";
    },
    35: function (o, e, t) {
      "use strict";
      e.a = t.p + "fonts/b9eb6d08b8cedf23ec7ec13c8d595eb4.woff2";
    },
    42: function (o, e, t) {
      "use strict";
      t(43), t(45);
      var n = t(8),
        a = t(52),
        r = t(25),
        c = t(53),
        d = t(54),
        s = t(24),
        u = t(28),
        l = t(55);
      t(56),
        document.body.contains(document.querySelector(".loading-first")) &&
          window.addEventListener("DOMContentLoaded", function (o) {
            (document.querySelector(".loading-first").style.opacity = 0),
              (document.querySelector(".loading-first").style.visibility =
                "hidden");
          }),
        (0, n.fontAwesomeLoad)("footer .youtube", a.faYoutube),
        (0, n.fontAwesomeLoad)("footer .facebook", r.faFacebookSquare),
        (0, n.fontAwesomeLoad)("footer .insta", c.faInstagram),
        (0, n.fontAwesomeLoad)("footer .linkedin", d.faLinkedin),
        (0, n.fontAwesomeLoad)("footer .search", s.faSearch),
        (0, n.fontAwesomeLoad)("footer .contact", u.faAddressBook),
        (0, n.fontAwesomeLoad)("footer .cart", l.faShoppingCart);
      document.querySelectorAll(".moduletable.brand ul li");
      var i = 0;
      window.addEventListener(
        "scroll",
        function () {
          var o = window.pageYOffset || document.documentElement.scrollTop;
          i < o
            ? document.querySelector("body").classList.add("menu-hidden")
            : document.querySelector("body").classList.remove("menu-hidden"),
            (i = o <= 0 ? 0 : o);
        },
        !1
      ),
        window.addEventListener("DOMContentLoaded", function (o) {
          document
            .querySelectorAll(".product-list .mod_redshop_product")
            .forEach(function (o) {
              o.addEventListener("click", function () {
                (document.getElementById("product-popup-wrap").innerHTML =
                  this.querySelector(".product-popup-content").innerHTML),
                  document
                    .getElementById("product-popup")
                    .classList.add("open");
              });
            });
        });
      var p = document.getElementById("close-product-pop-up");
      null != p &&
        p.addEventListener("click", function () {
          document.getElementById("product-popup").classList.remove("open");
        });
      window.addEventListener("click", function (o) {
        document.querySelector(".mod-languages").contains(o.target)
          ? document.querySelector(".lang-block").classList.add("open")
          : document.querySelector(".lang-block").classList.remove("open");
      });
      try {
        redSHOP.onAfterSubmitAjaxCartdetail.push(function (o, e, t, n) {
          (n.show_final_cart_box = !1),
            document.getElementById("product-popup").classList.remove("open");
          var a = document.querySelector("#productImageWrapID_" + e + " img");
          null != a &&
            document
              .querySelector(".moduletable.cart")
              .appendChild(a.cloneNode())
              .classList.add("floating"),
            setTimeout(function () {
              var o = document.querySelector(".moduletable.cart img.floating");
              null != o && o.remove();
            }, 2e3);
        });
      } catch (o) {}
      try {
        redSHOP.onAfterUpdateCartAjax.push(function (o) {
          var e = document.createElement("html");
          (e.innerHTML = o),
            (document.getElementById("mod_cart_total_quantity").innerHTML =
              e.querySelector("#mod_cart_total_quantity").innerHTML),
            (document.querySelector(".cart_page_button .p01 button").className =
              "readmore-link"),
            (document.querySelector(".cart_page_button .p02 input").className =
              "link");
        });
      } catch (o) {}
    },
    43: function (o, e, t) {
      var n = t(2),
        a = t(44);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[o.i, a, ""]]);
      var r = { insert: "head", singleton: !1 };
      n(a, r);
      o.exports = a.locals || {};
    },
    44: function (o, e, t) {
      "use strict";
      t.r(e);
      var n = t(0),
        a = t.n(n)()(!1);
      a.push([
        o.i,
        "@-webkit-keyframes loader4Animation{0%{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}17%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 #000,30px 0 0 0 rgba(0,0,0,.67)}33%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 #000}50%{background-color:transparent;box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 rgba(24,28,34,.67)}67%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 transparent,30px 0 0 0 rgba(0,0,0,.33)}83%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 transparent}to{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}}@keyframes loader4Animation{0%{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}17%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 #000,30px 0 0 0 rgba(0,0,0,.67)}33%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 #000}50%{background-color:transparent;box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 rgba(24,28,34,.67)}67%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 transparent,30px 0 0 0 rgba(0,0,0,.33)}83%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 transparent}to{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}}",
        "",
      ]),
        (e.default = a);
    },
    45: function (o, e, t) {
      "use strict";
      t(46);
      var n = t(8),
        a = t(24);
      document.body.contains(document.getElementById("menu-btn")) &&
        (document
          .getElementById("menu-btn")
          .addEventListener("click", function (o) {
            document.querySelector("body").classList.toggle("menu-open");
          }),
        document
          .getElementById("close-btn")
          .addEventListener("click", function (o) {
            document.querySelector("body").classList.remove("menu-open");
          })),
        document.body.contains(document.getElementById("search-btn")) &&
          document
            .getElementById("search-btn")
            .addEventListener("click", function (o) {
              document.querySelector("body").classList.add("menu-open");
            }),
        (0, n.fontAwesomeLoad)("#header-search-btn", a.faSearch),
        document.body.contains(document.getElementById("header-search-btn")) &&
          document
            .getElementById("header-search-btn")
            .addEventListener("click", function (o) {
              document.querySelector("body").classList.toggle("search-open"),
                992 < window.innerWidth &&
                  document
                    .querySelector(
                      ".moduletable.search input[name='searchword']"
                    )
                    .focus();
            });
    },
    46: function (o, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadStyle = function (o) {
          {
            var e, t;
            joomlaOptions[o + "-" + a + ".css"] &&
              ((e = document.querySelector("body")),
              ((t = document.createElement("link")).href =
                joomlaOptions[o + "-" + a + ".css"]),
              (t.type = "text/css"),
              (t.rel = "stylesheet"),
              e.append(t));
          }
        });
      var n = e(47),
        a = (t.viewport = "mobile");
      Object.keys(n).map(function (e) {
        Object.keys(n[e]).map(function (o) {
          window.innerWidth > parseInt(n[e][o]) && (t.viewport = a = e);
        });
      });
    },
    47: function (o, e, t) {
      "use strict";
      o.exports = {
        mobile: { xs: 0 },
        tablet: { sm: "576px", md: "768px" },
        desktop: { lg: "992px", xl: "1200px", xxl: "1400px" },
      };
    },
    56: function (o, e, t) {
      var n = t(2),
        a = t(57);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[o.i, a, ""]]);
      var r = { insert: "head", singleton: !1 };
      n(a, r);
      o.exports = a.locals || {};
    },
    57: function (o, e, t) {
      "use strict";
      t.r(e);
      var n = t(0),
        a = t.n(n),
        r = t(1),
        c = t.n(r),
        d = t(32),
        s = t(33),
        u = t(34),
        l = t(35),
        i = a()(!1);
      i.push([
        o.i,
        "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap);",
      ]);
      var p = c()(d.a),
        b = c()(s.a),
        f = c()(u.a),
        g = c()(l.a);
      i.push([
        o.i,
        "@-webkit-keyframes loader4Animation{0%{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}17%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 #000,30px 0 0 0 rgba(0,0,0,.67)}33%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 #000}50%{background-color:transparent;box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 rgba(24,28,34,.67)}67%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 transparent,30px 0 0 0 rgba(0,0,0,.33)}83%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 transparent}to{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}}@keyframes loader4Animation{0%{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}17%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 #000,30px 0 0 0 rgba(0,0,0,.67)}33%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 #000}50%{background-color:transparent;box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 rgba(24,28,34,.67)}67%{background-color:rgba(0,0,0,.33);box-shadow:15px 0 0 0 transparent,30px 0 0 0 rgba(0,0,0,.33)}83%{background-color:rgba(0,0,0,.67);box-shadow:15px 0 0 0 rgba(0,0,0,.33),30px 0 0 0 transparent}to{background-color:#000;box-shadow:15px 0 0 0 rgba(0,0,0,.67),30px 0 0 0 rgba(0,0,0,.33)}}@font-face{font-family:Open Sans;src:url(" +
          p +
          ') format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Open Sans;src:url(' +
          b +
          ') format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Open Sans;src:url(' +
          f +
          ') format("woff2");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:Gotu;src:url(' +
          g +
          ') format("woff2");font-weight:400;font-style:normal;font-display:swap}',
        "",
      ]),
        (e.default = i);
    },
  },
  [[42, 0, 2, 1, 6, 8, 7, 9, 10, 5]],
]);
