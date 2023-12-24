(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    7: function (n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (n) {
              return typeof n;
            }
          : function (n) {
              return n &&
                "function" == typeof Symbol &&
                n.constructor === Symbol &&
                n !== Symbol.prototype
                ? "symbol"
                : typeof n;
            };
      function u(n) {
        return (
          null !== n &&
          "object" === (void 0 === n ? "undefined" : o(n)) &&
          "constructor" in n &&
          n.constructor === Object
        );
      }
      function r(t, e) {
        void 0 === t && (t = {}),
          void 0 === e && (e = {}),
          Object.keys(e).forEach(function (n) {
            void 0 === t[n]
              ? (t[n] = e[n])
              : u(e[n]) &&
                u(t[n]) &&
                0 < Object.keys(e[n]).length &&
                r(t[n], e[n]);
          });
      }
      var i = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      var c = {
        document: i,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (n) {
          return "undefined" == typeof setTimeout
            ? (n(), null)
            : setTimeout(n, 0);
        },
        cancelAnimationFrame: function (n) {
          "undefined" != typeof setTimeout && clearTimeout(n);
        },
      };
      (t.extend = r),
        (t.getDocument = function () {
          var n = "undefined" != typeof document ? document : {};
          return r(n, i), n;
        }),
        (t.getWindow = function () {
          var n = "undefined" != typeof window ? window : {};
          return r(n, c), n;
        }),
        (t.ssrDocument = i),
        (t.ssrWindow = c);
    },
  },
]);
