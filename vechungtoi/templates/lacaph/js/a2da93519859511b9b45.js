(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    64: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.width =
          e.value =
          e.val =
          e.trigger =
          e.transitionEnd =
          e.transition =
          e.transform =
          e.touchstart =
          e.touchmove =
          e.touchend =
          e.toggleClass =
          e.text =
          e.submit =
          e.styles =
          e.stop =
          e.siblings =
          e.show =
          e.scrollTop =
          e.scrollTo =
          e.scrollLeft =
          e.scroll =
          e.resize =
          e.removeData =
          e.removeClass =
          e.removeAttr =
          e.remove =
          e.prop =
          e.prevAll =
          e.prev =
          e.prependTo =
          e.prepend =
          e.parents =
          e.parent =
          e.outerWidth =
          e.outerHeight =
          e.once =
          e.on =
          e.offset =
          e.off =
          e.nextAll =
          e.next =
          e.mouseup =
          e.mouseover =
          e.mouseout =
          e.mousemove =
          e.mouseleave =
          e.mouseenter =
          e.mousedown =
          e.keyup =
          e.keypress =
          e.keydown =
          e.is =
          e.insertBefore =
          e.insertAfter =
          e.index =
          e.html =
          e.hide =
          e.height =
          e.hasClass =
          e.focusout =
          e.focusin =
          e.focus =
          e.find =
          e.filter =
          e.eq =
          e.empty =
          e.each =
          e.detach =
          e.dataset =
          e.data =
          e.css =
          e.closest =
          e.click =
          e.children =
          e.change =
          e.blur =
          e.attr =
          e.appendTo =
          e.append =
          e.animationEnd =
          e.animate =
          e.addClass =
          e.add =
          e.$ =
            void 0);
      var h = n(7);
      function i(t) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s(t, e, n) {
        return (s = (function () {
          if (
            "undefined" != typeof Reflect &&
            Reflect.construct &&
            !Reflect.construct.sham
          ) {
            if ("function" == typeof Proxy) return 1;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                1
              );
            } catch (t) {
              return;
            }
          }
        })()
          ? Reflect.construct
          : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var i = new (Function.bind.apply(t, r))();
              return n && o(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function a(t) {
        var r = "function" == typeof Map ? new Map() : void 0;
        return (a = function (t) {
          if (
            null === t ||
            ((e = t), -1 === Function.toString.call(e).indexOf("[native code]"))
          )
            return t;
          var e;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== r) {
            if (r.has(t)) return r.get(t);
            r.set(t, n);
          }
          function n() {
            return s(t, arguments, i(this).constructor);
          }
          return (
            (n.prototype = Object.create(t.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            o(n, t)
          );
        })(t);
      }
      var u = (function (i) {
        var t, e;
        function n(t) {
          var e,
            n,
            r = i.call.apply(i, [this].concat(t)) || this;
          return (
            (e = (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(r)),
            (n = e.__proto__),
            Object.defineProperty(e, "__proto__", {
              get: function () {
                return n;
              },
              set: function (t) {
                n.__proto__ = t;
              },
            }),
            r
          );
        }
        return (
          (e = i),
          ((t = n).prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e),
          n
        );
      })(a(Array));
      function l(t) {
        void 0 === t && (t = []);
        var e = [];
        return (
          t.forEach(function (t) {
            Array.isArray(t) ? e.push.apply(e, l(t)) : e.push(t);
          }),
          e
        );
      }
      function f(t, e) {
        return Array.prototype.filter.call(t, e);
      }
      function v(t, e) {
        var n = (0, h.getWindow)(),
          r = (0, h.getDocument)(),
          i = [];
        if (!e && t instanceof u) return t;
        if (!t) return new u(i);
        if ("string" == typeof t) {
          var o = t.trim();
          if (0 <= o.indexOf("<") && 0 <= o.indexOf(">")) {
            var s = "div";
            0 === o.indexOf("<li") && (s = "ul"),
              0 === o.indexOf("<tr") && (s = "tbody"),
              (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (s = "tr"),
              0 === o.indexOf("<tbody") && (s = "table"),
              0 === o.indexOf("<option") && (s = "select");
            var a = r.createElement(s);
            a.innerHTML = o;
            for (var l = 0; l < a.childNodes.length; l += 1)
              i.push(a.childNodes[l]);
          } else
            i = (function (t, e) {
              if ("string" != typeof t) return [t];
              for (
                var n = [], r = e.querySelectorAll(t), i = 0;
                i < r.length;
                i += 1
              )
                n.push(r[i]);
              return n;
            })(t.trim(), e || r);
        } else if (t.nodeType || t === n || t === r) i.push(t);
        else if (Array.isArray(t)) {
          if (t instanceof u) return t;
          i = t;
        }
        return new u(
          (function (t) {
            for (var e = [], n = 0; n < t.length; n += 1)
              -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e;
          })(i)
        );
      }
      v.fn = u.prototype;
      var c = "resize scroll".split(" ");
      function r(i) {
        return function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          if (void 0 !== e[0]) return this.on.apply(this, [i].concat(e));
          for (var r = 0; r < this.length; r += 1)
            c.indexOf(i) < 0 &&
              (i in this[r] ? this[r][i]() : v(this[r]).trigger(i));
          return this;
        };
      }
      var d = r("click"),
        p = r("blur"),
        g = r("focus"),
        m = r("focusin"),
        y = r("focusout"),
        b = r("keyup"),
        w = r("keydown"),
        A = r("keypress"),
        E = r("submit"),
        x = r("change"),
        L = r("mousedown"),
        S = r("mousemove"),
        O = r("mouseup"),
        T = r("mouseenter"),
        C = r("mouseleave"),
        N = r("mouseout"),
        D = r("mouseover"),
        M = r("touchstart"),
        _ = r("touchend"),
        k = r("touchmove"),
        F = r("resize"),
        P = r("scroll");
      (e.default = v),
        (e.$ = v),
        (e.add = function () {
          for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          for (t = 0; t < n.length; t += 1)
            for (var i = v(n[t]), o = 0; o < i.length; o += 1) this.push(i[o]);
          return this;
        }),
        (e.addClass = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = l(
            e.map(function (t) {
              return t.split(" ");
            })
          );
          return (
            this.forEach(function (t) {
              var e;
              (e = t.classList).add.apply(e, r);
            }),
            this
          );
        }),
        (e.animate = function (t, e) {
          var n,
            m = (0, h.getWindow)(),
            r = this,
            y = {
              props: Object.assign({}, t),
              params: Object.assign({ duration: 300, easing: "swing" }, e),
              elements: r,
              animating: !1,
              que: [],
              easingProgress: function (t, e) {
                return "swing" === t
                  ? 0.5 - Math.cos(e * Math.PI) / 2
                  : "function" == typeof t
                  ? t(e)
                  : e;
              },
              stop: function () {
                y.frameId && m.cancelAnimationFrame(y.frameId),
                  (y.animating = !1),
                  y.elements.each(function (t) {
                    delete t.dom7AnimateInstance;
                  }),
                  (y.que = []);
              },
              done: function (t) {
                var e;
                (y.animating = !1),
                  y.elements.each(function (t) {
                    delete t.dom7AnimateInstance;
                  }),
                  t && t(r),
                  0 < y.que.length &&
                    ((e = y.que.shift()), y.animate(e[0], e[1]));
              },
              animate: function (u, f) {
                if (y.animating) return y.que.push([u, f]), y;
                var h = [];
                y.elements.each(function (e, n) {
                  var r, i, o, s, a;
                  e.dom7AnimateInstance ||
                    (y.elements[n].dom7AnimateInstance = y),
                    (h[n] = { container: e }),
                    Object.keys(u).forEach(function (t) {
                      (r = m
                        .getComputedStyle(e, null)
                        .getPropertyValue(t)
                        .replace(",", ".")),
                        (i = parseFloat(r)),
                        (o = r.replace(i, "")),
                        (s = parseFloat(u[t])),
                        (a = u[t] + o),
                        (h[n][t] = {
                          initialFullValue: r,
                          initialValue: i,
                          unit: o,
                          finalValue: s,
                          finalFullValue: a,
                          currentValue: i,
                        });
                    });
                });
                var c,
                  d,
                  p = null,
                  v = 0,
                  g = 0,
                  e = !1;
                return (
                  (y.animating = !0),
                  (y.frameId = m.requestAnimationFrame(function t() {
                    var a, l;
                    (c = new Date().getTime()),
                      e || ((e = !0), f.begin && f.begin(r)),
                      null === p && (p = c),
                      f.progress &&
                        f.progress(
                          r,
                          Math.max(Math.min((c - p) / f.duration, 1), 0),
                          p + f.duration - c < 0 ? 0 : p + f.duration - c,
                          p
                        ),
                      h.forEach(function (t) {
                        var s = t;
                        d ||
                          s.done ||
                          Object.keys(u).forEach(function (t) {
                            var e, n, r, i, o;
                            d ||
                              s.done ||
                              ((a = Math.max(
                                Math.min((c - p) / f.duration, 1),
                                0
                              )),
                              (l = y.easingProgress(f.easing, a)),
                              (n = (e = s[t]).initialValue),
                              (r = e.finalValue),
                              (i = e.unit),
                              (s[t].currentValue = n + l * (r - n)),
                              (o = s[t].currentValue),
                              ((n < r && r <= o) || (r < n && o <= r)) &&
                                ((s.container.style[t] = r + i),
                                (g += 1) === Object.keys(u).length &&
                                  ((s.done = !0), (v += 1)),
                                v === h.length && (d = !0)),
                              d
                                ? y.done(f.complete)
                                : (s.container.style[t] = o + i));
                          });
                      }),
                      d || (y.frameId = m.requestAnimationFrame(t));
                  })),
                  y
                );
              },
            };
          if (0 === y.elements.length) return r;
          for (var i = 0; i < y.elements.length; i += 1)
            y.elements[i].dom7AnimateInstance
              ? (n = y.elements[i].dom7AnimateInstance)
              : (y.elements[i].dom7AnimateInstance = y);
          return (
            (n = n || y),
            "stop" === t ? n.stop() : n.animate(y.props, y.params),
            r
          );
        }),
        (e.animationEnd = function (n) {
          var r = this;
          return (
            n &&
              r.on("animationend", function t(e) {
                e.target === this &&
                  (n.call(this, e), r.off("animationend", t));
              }),
            this
          );
        }),
        (e.append = function () {
          for (
            var t, e = (0, h.getDocument)(), n = 0;
            n < arguments.length;
            n += 1
          ) {
            t = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var r = 0; r < this.length; r += 1)
              if ("string" == typeof t) {
                var i = e.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[r].appendChild(i.firstChild);
              } else if (t instanceof u)
                for (var o = 0; o < t.length; o += 1) this[r].appendChild(t[o]);
              else this[r].appendChild(t);
          }
          return this;
        }),
        (e.appendTo = function (t) {
          return v(t).append(this), this;
        }),
        (e.attr = function (t, e) {
          if (1 === arguments.length && "string" == typeof t)
            return this[0] ? this[0].getAttribute(t) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(t, e);
            else
              for (var r in t)
                (this[n][r] = t[r]), this[n].setAttribute(r, t[r]);
          return this;
        }),
        (e.blur = p),
        (e.change = x),
        (e.children = function (t) {
          for (var e = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].children, i = 0; i < r.length; i += 1)
              (t && !v(r[i]).is(t)) || e.push(r[i]);
          return v(e);
        }),
        (e.click = d),
        (e.closest = function (t) {
          var e = this;
          return void 0 === t
            ? v([])
            : (e.is(t) || (e = e.parents(t).eq(0)), e);
        }),
        (e.css = function (t, e) {
          var n,
            r = (0, h.getWindow)();
          if (1 === arguments.length) {
            if ("string" != typeof t) {
              for (n = 0; n < this.length; n += 1)
                for (var i in t) this[n].style[i] = t[i];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(t);
          }
          if (2 !== arguments.length || "string" != typeof t) return this;
          for (n = 0; n < this.length; n += 1) this[n].style[t] = e;
          return this;
        }),
        (e.data = function (t, e) {
          var n;
          if (void 0 === e) {
            if (!(n = this[0])) return;
            if (n.dom7ElementDataStorage && t in n.dom7ElementDataStorage)
              return n.dom7ElementDataStorage[t];
            var r = n.getAttribute("data-" + t);
            return r ? r : void 0;
          }
          for (var i = 0; i < this.length; i += 1)
            (n = this[i]).dom7ElementDataStorage ||
              (n.dom7ElementDataStorage = {}),
              (n.dom7ElementDataStorage[t] = e);
          return this;
        }),
        (e.dataset = function () {
          var t = this[0];
          if (t) {
            var e,
              n = {};
            if (t.dataset) for (var r in t.dataset) n[r] = t.dataset[r];
            else
              for (var i = 0; i < t.attributes.length; i += 1) {
                var o = t.attributes[i];
                0 <= o.name.indexOf("data-") &&
                  (n[
                    o.name
                      .split("data-")[1]
                      .toLowerCase()
                      .replace(/-(.)/g, function (t, e) {
                        return e.toUpperCase();
                      })
                  ] = o.value);
              }
            for (e in n)
              "false" === n[e]
                ? (n[e] = !1)
                : "true" === n[e]
                ? (n[e] = !0)
                : parseFloat(n[e]) === +n[e] && (n[e] *= 1);
            return n;
          }
        }),
        (e.detach = function () {
          return this.remove();
        }),
        (e.each = function (n) {
          return (
            n &&
              this.forEach(function (t, e) {
                n.apply(t, [t, e]);
              }),
            this
          );
        }),
        (e.empty = function () {
          for (var t = 0; t < this.length; t += 1) {
            var e = this[t];
            if (1 === e.nodeType) {
              for (var n = 0; n < e.childNodes.length; n += 1)
                e.childNodes[n].parentNode &&
                  e.childNodes[n].parentNode.removeChild(e.childNodes[n]);
              e.textContent = "";
            }
          }
          return this;
        }),
        (e.eq = function (t) {
          if (void 0 === t) return this;
          var e = this.length;
          if (e - 1 < t) return v([]);
          if (t < 0) {
            var n = e + t;
            return n < 0 ? v([]) : v([this[n]]);
          }
          return v([this[t]]);
        }),
        (e.filter = function (t) {
          return v(f(this, t));
        }),
        (e.find = function (t) {
          for (var e = [], n = 0; n < this.length; n += 1)
            for (
              var r = this[n].querySelectorAll(t), i = 0;
              i < r.length;
              i += 1
            )
              e.push(r[i]);
          return v(e);
        }),
        (e.focus = g),
        (e.focusin = m),
        (e.focusout = y),
        (e.hasClass = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = l(
            e.map(function (t) {
              return t.split(" ");
            })
          );
          return (
            0 <
            f(this, function (e) {
              return (
                0 <
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length
              );
            }).length
          );
        }),
        (e.height = function () {
          var t = (0, h.getWindow)();
          return this[0] === t
            ? t.innerHeight
            : 0 < this.length
            ? parseFloat(this.css("height"))
            : null;
        }),
        (e.hide = function () {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.display = "none";
          return this;
        }),
        (e.html = function (t) {
          if (void 0 === t) return this[0] ? this[0].innerHTML : null;
          for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
          return this;
        }),
        (e.index = function () {
          var t,
            e = this[0];
          if (e) {
            for (t = 0; null !== (e = e.previousSibling); )
              1 === e.nodeType && (t += 1);
            return t;
          }
        }),
        (e.insertAfter = function (t) {
          for (var e = v(t), n = 0; n < this.length; n += 1)
            if (1 === e.length)
              e[0].parentNode.insertBefore(this[n], e[0].nextSibling);
            else if (1 < e.length)
              for (var r = 0; r < e.length; r += 1)
                e[r].parentNode.insertBefore(
                  this[n].cloneNode(!0),
                  e[r].nextSibling
                );
        }),
        (e.insertBefore = function (t) {
          for (var e = v(t), n = 0; n < this.length; n += 1)
            if (1 === e.length) e[0].parentNode.insertBefore(this[n], e[0]);
            else if (1 < e.length)
              for (var r = 0; r < e.length; r += 1)
                e[r].parentNode.insertBefore(this[n].cloneNode(!0), e[r]);
        }),
        (e.is = function (t) {
          var e,
            n,
            r = (0, h.getWindow)(),
            i = (0, h.getDocument)(),
            o = this[0];
          if (!o || void 0 === t) return !1;
          if ("string" == typeof t) {
            if (o.matches) return o.matches(t);
            if (o.webkitMatchesSelector) return o.webkitMatchesSelector(t);
            if (o.msMatchesSelector) return o.msMatchesSelector(t);
            for (e = v(t), n = 0; n < e.length; n += 1)
              if (e[n] === o) return !0;
            return !1;
          }
          if (t === i) return o === i;
          if (t === r) return o === r;
          if (t.nodeType || t instanceof u) {
            for (e = t.nodeType ? [t] : t, n = 0; n < e.length; n += 1)
              if (e[n] === o) return !0;
            return !1;
          }
          return !1;
        }),
        (e.keydown = w),
        (e.keypress = A),
        (e.keyup = b),
        (e.mousedown = L),
        (e.mouseenter = T),
        (e.mouseleave = C),
        (e.mousemove = S),
        (e.mouseout = N),
        (e.mouseover = D),
        (e.mouseup = O),
        (e.next = function (t) {
          return 0 < this.length
            ? t
              ? this[0].nextElementSibling &&
                v(this[0].nextElementSibling).is(t)
                ? v([this[0].nextElementSibling])
                : v([])
              : this[0].nextElementSibling
              ? v([this[0].nextElementSibling])
              : v([])
            : v([]);
        }),
        (e.nextAll = function (t) {
          var e = [],
            n = this[0];
          if (!n) return v([]);
          for (; n.nextElementSibling; ) {
            var r = n.nextElementSibling;
            (!t || v(r).is(t)) && e.push(r), (n = r);
          }
          return v(e);
        }),
        (e.off = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0],
            i = e[1],
            o = e[2],
            s = e[3];
          "function" == typeof e[1] &&
            ((r = e[0]), (o = e[1]), (s = e[2]), (i = void 0)),
            (s = s || !1);
          for (var a = r.split(" "), l = 0; l < a.length; l += 1)
            for (var u = a[l], f = 0; f < this.length; f += 1) {
              var h = this[f],
                c = void 0;
              if (
                (!i && h.dom7Listeners
                  ? (c = h.dom7Listeners[u])
                  : i && h.dom7LiveListeners && (c = h.dom7LiveListeners[u]),
                c && c.length)
              )
                for (var d = c.length - 1; 0 <= d; --d) {
                  var p = c[d];
                  ((!o || p.listener !== o) &&
                    !(
                      o &&
                      p.listener &&
                      p.listener.dom7proxy &&
                      p.listener.dom7proxy === o
                    ) &&
                    o) ||
                    (h.removeEventListener(u, p.proxyListener, s),
                    c.splice(d, 1));
                }
            }
          return this;
        }),
        (e.offset = function () {
          if (0 < this.length) {
            var t = (0, h.getWindow)(),
              e = (0, h.getDocument)(),
              n = this[0],
              r = n.getBoundingClientRect(),
              i = e.body,
              o = n.clientTop || i.clientTop || 0,
              s = n.clientLeft || i.clientLeft || 0,
              a = n === t ? t.scrollY : n.scrollTop,
              l = n === t ? t.scrollX : n.scrollLeft;
            return { top: r.top + a - o, left: r.left + l - s };
          }
          return null;
        }),
        (e.on = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0],
            o = e[1],
            s = e[2],
            i = e[3];
          function a(t) {
            var e = t.target;
            if (e) {
              var n = t.target.dom7EventData || [];
              if ((n.indexOf(t) < 0 && n.unshift(t), v(e).is(o))) s.apply(e, n);
              else
                for (var r = v(e).parents(), i = 0; i < r.length; i += 1)
                  v(r[i]).is(o) && s.apply(r[i], n);
            }
          }
          function l(t) {
            var e = (t && t.target && t.target.dom7EventData) || [];
            e.indexOf(t) < 0 && e.unshift(t), s.apply(this, e);
          }
          "function" == typeof e[1] &&
            ((r = e[0]), (s = e[1]), (i = e[2]), (o = void 0)),
            (i = i || !1);
          for (var u, f = r.split(" "), h = 0; h < this.length; h += 1) {
            var c = this[h];
            if (o)
              for (u = 0; u < f.length; u += 1) {
                var d = f[u];
                c.dom7LiveListeners || (c.dom7LiveListeners = {}),
                  c.dom7LiveListeners[d] || (c.dom7LiveListeners[d] = []),
                  c.dom7LiveListeners[d].push({
                    listener: s,
                    proxyListener: a,
                  }),
                  c.addEventListener(d, a, i);
              }
            else
              for (u = 0; u < f.length; u += 1) {
                var p = f[u];
                c.dom7Listeners || (c.dom7Listeners = {}),
                  c.dom7Listeners[p] || (c.dom7Listeners[p] = []),
                  c.dom7Listeners[p].push({ listener: s, proxyListener: l }),
                  c.addEventListener(p, l, i);
              }
          }
          return this;
        }),
        (e.once = function () {
          for (
            var r = this, t = arguments.length, e = new Array(t), n = 0;
            n < t;
            n++
          )
            e[n] = arguments[n];
          var i = e[0],
            o = e[1],
            s = e[2],
            a = e[3];
          function l() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            s.apply(this, e),
              r.off(i, o, l, a),
              l.dom7proxy && delete l.dom7proxy;
          }
          return (
            "function" == typeof e[1] &&
              ((i = e[0]), (s = e[1]), (a = e[2]), (o = void 0)),
            (l.dom7proxy = s),
            r.on(i, o, l, a)
          );
        }),
        (e.outerHeight = function (t) {
          if (0 < this.length) {
            if (t) {
              var e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        }),
        (e.outerWidth = function (t) {
          if (0 < this.length) {
            if (t) {
              var e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        }),
        (e.parent = function (t) {
          for (var e = [], n = 0; n < this.length; n += 1)
            null === this[n].parentNode ||
              (t && !v(this[n].parentNode).is(t)) ||
              e.push(this[n].parentNode);
          return v(e);
        }),
        (e.parents = function (t) {
          for (var e = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].parentNode; r; )
              (t && !v(r).is(t)) || e.push(r), (r = r.parentNode);
          return v(e);
        }),
        (e.prepend = function (t) {
          for (var e, n = (0, h.getDocument)(), r = 0; r < this.length; r += 1)
            if ("string" == typeof t) {
              var i = n.createElement("div");
              for (i.innerHTML = t, e = i.childNodes.length - 1; 0 <= e; --e)
                this[r].insertBefore(i.childNodes[e], this[r].childNodes[0]);
            } else if (t instanceof u)
              for (e = 0; e < t.length; e += 1)
                this[r].insertBefore(t[e], this[r].childNodes[0]);
            else this[r].insertBefore(t, this[r].childNodes[0]);
          return this;
        }),
        (e.prependTo = function (t) {
          return v(t).prepend(this), this;
        }),
        (e.prev = function (t) {
          if (0 < this.length) {
            var e = this[0];
            return t
              ? e.previousElementSibling && v(e.previousElementSibling).is(t)
                ? v([e.previousElementSibling])
                : v([])
              : e.previousElementSibling
              ? v([e.previousElementSibling])
              : v([]);
          }
          return v([]);
        }),
        (e.prevAll = function (t) {
          var e = [],
            n = this[0];
          if (!n) return v([]);
          for (; n.previousElementSibling; ) {
            var r = n.previousElementSibling;
            (!t || v(r).is(t)) && e.push(r), (n = r);
          }
          return v(e);
        }),
        (e.prop = function (t, e) {
          if (1 === arguments.length && "string" == typeof t)
            return this[0] ? this[0][t] : this;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n][t] = e;
            else for (var r in t) this[n][r] = t[r];
          return this;
        }),
        (e.remove = function () {
          for (var t = 0; t < this.length; t += 1)
            this[t].parentNode && this[t].parentNode.removeChild(this[t]);
          return this;
        }),
        (e.removeAttr = function (t) {
          for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
          return this;
        }),
        (e.removeClass = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = l(
            e.map(function (t) {
              return t.split(" ");
            })
          );
          return (
            this.forEach(function (t) {
              var e;
              (e = t.classList).remove.apply(e, r);
            }),
            this
          );
        }),
        (e.removeData = function (t) {
          for (var e = 0; e < this.length; e += 1) {
            var n = this[e];
            n.dom7ElementDataStorage &&
              n.dom7ElementDataStorage[t] &&
              ((n.dom7ElementDataStorage[t] = null),
              delete n.dom7ElementDataStorage[t]);
          }
        }),
        (e.resize = F),
        (e.scroll = P),
        (e.scrollLeft = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0],
            i = e[1],
            o = e[2],
            s = e[3];
          return (
            3 === e.length &&
              "function" == typeof o &&
              ((r = e[0]), (i = e[1]), (s = e[2]), (o = e[3])),
            void 0 === r
              ? 0 < this.length
                ? this[0].scrollLeft
                : null
              : this.scrollTo(r, void 0, i, o, s)
          );
        }),
        (e.scrollTo = function () {
          for (
            var v = (0, h.getWindow)(),
              t = arguments.length,
              e = new Array(t),
              n = 0;
            n < t;
            n++
          )
            e[n] = arguments[n];
          var r = e[0],
            i = e[1],
            g = e[2],
            m = e[3],
            y = e[4];
          return (
            4 === e.length &&
              "function" == typeof m &&
              ((y = m),
              (r = e[0]),
              (i = e[1]),
              (g = e[2]),
              (y = e[3]),
              (m = e[4])),
            void 0 === m && (m = "swing"),
            this.each(function () {
              var o,
                s,
                t,
                e,
                a,
                l,
                u,
                f,
                h,
                c = this,
                d = 0 < i || 0 === i,
                p = 0 < r || 0 === r;
              void 0 === m && (m = "swing"),
                d && ((o = c.scrollTop), g || (c.scrollTop = i)),
                p && ((s = c.scrollLeft), g || (c.scrollLeft = r)),
                g &&
                  (d &&
                    ((t = c.scrollHeight - c.offsetHeight),
                    (a = Math.max(Math.min(i, t), 0))),
                  p &&
                    ((e = c.scrollWidth - c.offsetWidth),
                    (l = Math.max(Math.min(r, e), 0))),
                  (h = null),
                  d && a === o && (d = !1),
                  p && l === s && (p = !1),
                  v.requestAnimationFrame(function t(e) {
                    void 0 === e && (e = new Date().getTime()),
                      null === h && (h = e);
                    var n,
                      r = Math.max(Math.min((e - h) / g, 1), 0),
                      i = "linear" === m ? r : 0.5 - Math.cos(r * Math.PI) / 2;
                    d && (u = o + i * (a - o)),
                      p && (f = s + i * (l - s)),
                      d && o < a && a <= u && ((c.scrollTop = a), (n = !0)),
                      d && a < o && u <= a && ((c.scrollTop = a), (n = !0)),
                      p && s < l && l <= f && ((c.scrollLeft = l), (n = !0)),
                      p && l < s && f <= l && ((c.scrollLeft = l), (n = !0)),
                      n
                        ? y && y()
                        : (d && (c.scrollTop = u),
                          p && (c.scrollLeft = f),
                          v.requestAnimationFrame(t));
                  }));
            })
          );
        }),
        (e.scrollTop = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0],
            i = e[1],
            o = e[2],
            s = e[3];
          return (
            3 === e.length &&
              "function" == typeof o &&
              ((r = e[0]), (i = e[1]), (s = e[2]), (o = e[3])),
            void 0 === r
              ? 0 < this.length
                ? this[0].scrollTop
                : null
              : this.scrollTo(void 0, r, i, o, s)
          );
        }),
        (e.show = function () {
          for (var t = (0, h.getWindow)(), e = 0; e < this.length; e += 1) {
            var n = this[e];
            "none" === n.style.display && (n.style.display = ""),
              "none" ===
                t.getComputedStyle(n, null).getPropertyValue("display") &&
                (n.style.display = "block");
          }
          return this;
        }),
        (e.siblings = function (t) {
          return this.nextAll(t).add(this.prevAll(t));
        }),
        (e.stop = function () {
          for (var t = 0; t < this.length; t += 1)
            this[t].dom7AnimateInstance && this[t].dom7AnimateInstance.stop();
        }),
        (e.styles = function () {
          var t = (0, h.getWindow)();
          return this[0] ? t.getComputedStyle(this[0], null) : {};
        }),
        (e.submit = E),
        (e.text = function (t) {
          if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
          for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
          return this;
        }),
        (e.toggleClass = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = l(
            e.map(function (t) {
              return t.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        }),
        (e.touchend = _),
        (e.touchmove = k),
        (e.touchstart = M),
        (e.transform = function (t) {
          for (var e = 0; e < this.length; e += 1) this[e].style.transform = t;
          return this;
        }),
        (e.transition = function (t) {
          for (var e = 0; e < this.length; e += 1)
            this[e].style.transition = "string" != typeof t ? t + "ms" : t;
          return this;
        }),
        (e.transitionEnd = function (n) {
          var r = this;
          return (
            n &&
              r.on("transitionend", function t(e) {
                e.target === this &&
                  (n.call(this, e), r.off("transitionend", t));
              }),
            this
          );
        }),
        (e.trigger = function () {
          for (
            var t = (0, h.getWindow)(),
              e = arguments.length,
              n = new Array(e),
              r = 0;
            r < e;
            r++
          )
            n[r] = arguments[r];
          for (var i = n[0].split(" "), o = n[1], s = 0; s < i.length; s += 1)
            for (var a = i[s], l = 0; l < this.length; l += 1) {
              var u,
                f = this[l];
              t.CustomEvent &&
                ((u = new t.CustomEvent(a, {
                  detail: o,
                  bubbles: !0,
                  cancelable: !0,
                })),
                (f.dom7EventData = n.filter(function (t, e) {
                  return 0 < e;
                })),
                f.dispatchEvent(u),
                (f.dom7EventData = []),
                delete f.dom7EventData);
            }
          return this;
        }),
        (e.val = function (t) {
          if (void 0 === t) {
            var e = this[0];
            if (!e) return;
            if (e.multiple && "select" === e.nodeName.toLowerCase()) {
              for (var n = [], r = 0; r < e.selectedOptions.length; r += 1)
                n.push(e.selectedOptions[r].value);
              return n;
            }
            return e.value;
          }
          for (var i = 0; i < this.length; i += 1) {
            var o = this[i];
            if (
              Array.isArray(t) &&
              o.multiple &&
              "select" === o.nodeName.toLowerCase()
            )
              for (var s = 0; s < o.options.length; s += 1)
                o.options[s].selected = 0 <= t.indexOf(o.options[s].value);
            else o.value = t;
          }
          return this;
        }),
        (e.value = function (t) {
          return this.val(t);
        }),
        (e.width = function () {
          var t = (0, h.getWindow)();
          return this[0] === t
            ? t.innerWidth
            : 0 < this.length
            ? parseFloat(this.css("width"))
            : null;
        });
    },
  },
]);
