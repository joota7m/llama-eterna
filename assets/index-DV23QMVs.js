const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Admin-938vDmNA.js",
      "assets/label-DRSCnJnG.js",
      "assets/SetPassword-B1sxEUVz.js",
    ]),
) => i.map((i) => d[i]);
var If = (e) => {
  throw TypeError(e);
};
var Ic = (e, t, n) => t.has(e) || If("Cannot " + n);
var k = (e, t, n) => (
    Ic(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  Q = (e, t, n) =>
    t.has(e)
      ? If("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  U = (e, t, n, r) => (
    Ic(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  ie = (e, t, n) => (Ic(e, t, "access private method"), n);
var wa = (e, t, n, r) => ({
  set _(s) {
    U(e, t, s, n);
  },
  get _() {
    return k(e, t, r);
  },
});
function Hb(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function Cg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rg = { exports: {} },
  Ql = {},
  Pg = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ta = Symbol.for("react.element"),
  Vb = Symbol.for("react.portal"),
  Wb = Symbol.for("react.fragment"),
  qb = Symbol.for("react.strict_mode"),
  Kb = Symbol.for("react.profiler"),
  Gb = Symbol.for("react.provider"),
  Qb = Symbol.for("react.context"),
  Jb = Symbol.for("react.forward_ref"),
  Yb = Symbol.for("react.suspense"),
  Xb = Symbol.for("react.memo"),
  Zb = Symbol.for("react.lazy"),
  Lf = Symbol.iterator;
function ex(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lf && e[Lf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ag = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Og = Object.assign,
  jg = {};
function xi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = jg),
    (this.updater = n || Ag));
}
xi.prototype.isReactComponent = {};
xi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ng() {}
Ng.prototype = xi.prototype;
function Zd(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = jg),
    (this.updater = n || Ag));
}
var eh = (Zd.prototype = new Ng());
eh.constructor = Zd;
Og(eh, xi.prototype);
eh.isPureReactComponent = !0;
var Df = Array.isArray,
  Ig = Object.prototype.hasOwnProperty,
  th = { current: null },
  Lg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dg(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ig.call(t, r) && !Lg.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: ta,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: th.current,
  };
}
function tx(e, t) {
  return {
    $$typeof: ta,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function nh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ta;
}
function nx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var $f = /\/+/g;
function Lc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? nx("" + e.key)
    : t.toString(36);
}
function Ja(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ta:
          case Vb:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + Lc(o, 0) : r),
      Df(s)
        ? ((n = ""),
          e != null && (n = e.replace($f, "$&/") + "/"),
          Ja(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (nh(s) &&
            (s = tx(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace($f, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Df(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Lc(i, a);
      o += Ja(i, t, n, l, s);
    }
  else if (((l = ex(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + Lc(i, a++)), (o += Ja(i, t, n, l, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function ba(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Ja(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function rx(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var at = { current: null },
  Ya = { transition: null },
  sx = {
    ReactCurrentDispatcher: at,
    ReactCurrentBatchConfig: Ya,
    ReactCurrentOwner: th,
  };
function $g() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = {
  map: ba,
  forEach: function (e, t, n) {
    ba(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ba(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ba(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!nh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
re.Component = xi;
re.Fragment = Wb;
re.Profiler = Kb;
re.PureComponent = Zd;
re.StrictMode = qb;
re.Suspense = Yb;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sx;
re.act = $g;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Og({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = th.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Ig.call(t, l) &&
        !Lg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ta, type: e.type, key: s, ref: i, props: r, _owner: o };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qb,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gb, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = Dg;
re.createFactory = function (e) {
  var t = Dg.bind(null, e);
  return ((t.type = e), t);
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: Jb, render: e };
};
re.isValidElement = nh;
re.lazy = function (e) {
  return { $$typeof: Zb, _payload: { _status: -1, _result: e }, _init: rx };
};
re.memo = function (e, t) {
  return { $$typeof: Xb, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = Ya.transition;
  Ya.transition = {};
  try {
    e();
  } finally {
    Ya.transition = t;
  }
};
re.unstable_act = $g;
re.useCallback = function (e, t) {
  return at.current.useCallback(e, t);
};
re.useContext = function (e) {
  return at.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return at.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return at.current.useEffect(e, t);
};
re.useId = function () {
  return at.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return at.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return at.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return at.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return at.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return at.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return at.current.useRef(e);
};
re.useState = function (e) {
  return at.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return at.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return at.current.useTransition();
};
re.version = "18.3.1";
Pg.exports = re;
var x = Pg.exports;
const I = Cg(x),
  rh = Hb({ __proto__: null, default: I }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ix = x,
  ox = Symbol.for("react.element"),
  ax = Symbol.for("react.fragment"),
  lx = Object.prototype.hasOwnProperty,
  cx = ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ux = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mg(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) lx.call(t, r) && !ux.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: ox,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: cx.current,
  };
}
Ql.Fragment = ax;
Ql.jsx = Mg;
Ql.jsxs = Mg;
Rg.exports = Ql;
var b = Rg.exports,
  Ug = { exports: {} },
  At = {},
  Fg = { exports: {} },
  zg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, A) {
    var $ = R.length;
    R.push(A);
    e: for (; 0 < $; ) {
      var q = ($ - 1) >>> 1,
        B = R[q];
      if (0 < s(B, A)) ((R[q] = A), (R[$] = B), ($ = q));
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var A = R[0],
      $ = R.pop();
    if ($ !== A) {
      R[0] = $;
      e: for (var q = 0, B = R.length, Z = B >>> 1; q < Z; ) {
        var Y = 2 * (q + 1) - 1,
          he = R[Y],
          ke = Y + 1,
          ee = R[ke];
        if (0 > s(he, $))
          ke < B && 0 > s(ee, he)
            ? ((R[q] = ee), (R[ke] = $), (q = ke))
            : ((R[q] = he), (R[Y] = $), (q = Y));
        else if (ke < B && 0 > s(ee, $)) ((R[q] = ee), (R[ke] = $), (q = ke));
        else break e;
      }
    }
    return A;
  }
  function s(R, A) {
    var $ = R.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : R.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    d = 1,
    u = null,
    f = 3,
    h = !1,
    v = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c);
      else if (A.startTime <= R)
        (r(c), (A.sortIndex = A.expirationTime), t(l, A));
      else break;
      A = n(c);
    }
  }
  function _(R) {
    if (((g = !1), y(R), !v))
      if (n(l) !== null) ((v = !0), W(S));
      else {
        var A = n(c);
        A !== null && G(_, A.startTime - R);
      }
  }
  function S(R, A) {
    ((v = !1), g && ((g = !1), p(C), (C = -1)), (h = !0));
    var $ = f;
    try {
      for (
        y(A), u = n(l);
        u !== null && (!(u.expirationTime > A) || (R && !D()));
      ) {
        var q = u.callback;
        if (typeof q == "function") {
          ((u.callback = null), (f = u.priorityLevel));
          var B = q(u.expirationTime <= A);
          ((A = e.unstable_now()),
            typeof B == "function" ? (u.callback = B) : u === n(l) && r(l),
            y(A));
        } else r(l);
        u = n(l);
      }
      if (u !== null) var Z = !0;
      else {
        var Y = n(c);
        (Y !== null && G(_, Y.startTime - A), (Z = !1));
      }
      return Z;
    } finally {
      ((u = null), (f = $), (h = !1));
    }
  }
  var E = !1,
    T = null,
    C = -1,
    P = 5,
    O = -1;
  function D() {
    return !(e.unstable_now() - O < P);
  }
  function N() {
    if (T !== null) {
      var R = e.unstable_now();
      O = R;
      var A = !0;
      try {
        A = T(!0, R);
      } finally {
        A ? V() : ((E = !1), (T = null));
      }
    } else E = !1;
  }
  var V;
  if (typeof m == "function")
    V = function () {
      m(N);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      J = L.port2;
    ((L.port1.onmessage = N),
      (V = function () {
        J.postMessage(null);
      }));
  } else
    V = function () {
      w(N, 0);
    };
  function W(R) {
    ((T = R), E || ((E = !0), V()));
  }
  function G(R, A) {
    C = w(function () {
      R(e.unstable_now());
    }, A);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), W(S));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (P = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var $ = f;
      f = A;
      try {
        return R();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, A) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var $ = f;
      f = R;
      try {
        return A();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (R, A, $) {
      var q = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? q + $ : q))
          : ($ = q),
        R)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = $ + B),
        (R = {
          id: d++,
          callback: A,
          priorityLevel: R,
          startTime: $,
          expirationTime: B,
          sortIndex: -1,
        }),
        $ > q
          ? ((R.sortIndex = $),
            t(c, R),
            n(l) === null &&
              R === n(c) &&
              (g ? (p(C), (C = -1)) : (g = !0), G(_, $ - q)))
          : ((R.sortIndex = B), t(l, R), v || h || ((v = !0), W(S))),
        R
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (R) {
      var A = f;
      return function () {
        var $ = f;
        f = A;
        try {
          return R.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    }));
})(zg);
Fg.exports = zg;
var dx = Fg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hx = x,
  Pt = dx;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Bg = new Set(),
  vo = {};
function fs(e, t) {
  (di(e, t), di(e + "Capture", t));
}
function di(e, t) {
  for (vo[e] = t, e = 0; e < t.length; e++) Bg.add(t[e]);
}
var Mn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bu = Object.prototype.hasOwnProperty,
  fx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mf = {},
  Uf = {};
function px(e) {
  return bu.call(Uf, e)
    ? !0
    : bu.call(Mf, e)
      ? !1
      : fx.test(e)
        ? (Uf[e] = !0)
        : ((Mf[e] = !0), !1);
}
function mx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gx(e, t, n, r) {
  if (t === null || typeof t > "u" || mx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function lt(e, t, n, r, s, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var Ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ge[e] = new lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ge[t] = new lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ge[e] = new lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ge[e] = new lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ge[e] = new lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ge[e] = new lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ge[e] = new lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ge[e] = new lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ge[e] = new lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var sh = /[\-:]([a-z])/g;
function ih(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sh, ih);
    Ge[t] = new lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sh, ih);
    Ge[t] = new lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(sh, ih);
  Ge[t] = new lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ge[e] = new lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ge[e] = new lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oh(e, t, n, r) {
  var s = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (gx(t, n, s, r) && (n = null),
    r || s === null
      ? px(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wn = hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xa = Symbol.for("react.element"),
  As = Symbol.for("react.portal"),
  Os = Symbol.for("react.fragment"),
  ah = Symbol.for("react.strict_mode"),
  xu = Symbol.for("react.profiler"),
  Hg = Symbol.for("react.provider"),
  Vg = Symbol.for("react.context"),
  lh = Symbol.for("react.forward_ref"),
  _u = Symbol.for("react.suspense"),
  Su = Symbol.for("react.suspense_list"),
  ch = Symbol.for("react.memo"),
  nr = Symbol.for("react.lazy"),
  Wg = Symbol.for("react.offscreen"),
  Ff = Symbol.iterator;
function Di(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ff && e[Ff]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ee = Object.assign,
  Dc;
function Ki(e) {
  if (Dc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Dc = (t && t[1]) || "";
    }
  return (
    `
` +
    Dc +
    e
  );
}
var $c = !1;
function Mc(e, t) {
  if (!e || $c) return "";
  $c = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (($c = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Ki(e) : "";
}
function vx(e) {
  switch (e.tag) {
    case 5:
      return Ki(e.type);
    case 16:
      return Ki("Lazy");
    case 13:
      return Ki("Suspense");
    case 19:
      return Ki("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Mc(e.type, !1)), e);
    case 11:
      return ((e = Mc(e.type.render, !1)), e);
    case 1:
      return ((e = Mc(e.type, !0)), e);
    default:
      return "";
  }
}
function Eu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Os:
      return "Fragment";
    case As:
      return "Portal";
    case xu:
      return "Profiler";
    case ah:
      return "StrictMode";
    case _u:
      return "Suspense";
    case Su:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vg:
        return (e.displayName || "Context") + ".Consumer";
      case Hg:
        return (e._context.displayName || "Context") + ".Provider";
      case lh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ch:
        return (
          (t = e.displayName || null),
          t !== null ? t : Eu(e.type) || "Memo"
        );
      case nr:
        ((t = e._payload), (e = e._init));
        try {
          return Eu(e(t));
        } catch {}
    }
  return null;
}
function yx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Eu(t);
    case 8:
      return t === ah ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function wx(e) {
  var t = qg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function _a(e) {
  e._valueTracker || (e._valueTracker = wx(e));
}
function Kg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function hl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ku(e, t) {
  var n = t.checked;
  return Ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Rr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Gg(e, t) {
  ((t = t.checked), t != null && oh(e, "checked", t, !1));
}
function Tu(e, t) {
  Gg(e, t);
  var n = Rr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Cu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Cu(e, t.type, Rr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Bf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Cu(e, t, n) {
  (t !== "number" || hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gi = Array.isArray;
function Vs(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Rr(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ru(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return Ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Hf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (Gi(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Rr(n) };
}
function Qg(e, t) {
  var n = Rr(t.value),
    r = Rr(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Vf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Jg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Sa,
  Yg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Sa = Sa || document.createElement("div"),
          Sa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Sa.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function yo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var to = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  bx = ["Webkit", "ms", "Moz", "O"];
Object.keys(to).forEach(function (e) {
  bx.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (to[t] = to[e]));
  });
});
function Xg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (to.hasOwnProperty(e) && to[e])
      ? ("" + t).trim()
      : t + "px";
}
function Zg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Xg(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var xx = Ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Au(e, t) {
  if (t) {
    if (xx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Ou(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ju = null;
function uh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nu = null,
  Ws = null,
  qs = null;
function Wf(e) {
  if ((e = sa(e))) {
    if (typeof Nu != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = ec(t)), Nu(e.stateNode, e.type, t));
  }
}
function ev(e) {
  Ws ? (qs ? qs.push(e) : (qs = [e])) : (Ws = e);
}
function tv() {
  if (Ws) {
    var e = Ws,
      t = qs;
    if (((qs = Ws = null), Wf(e), t)) for (e = 0; e < t.length; e++) Wf(t[e]);
  }
}
function nv(e, t) {
  return e(t);
}
function rv() {}
var Uc = !1;
function sv(e, t, n) {
  if (Uc) return e(t, n);
  Uc = !0;
  try {
    return nv(e, t, n);
  } finally {
    ((Uc = !1), (Ws !== null || qs !== null) && (rv(), tv()));
  }
}
function wo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ec(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Iu = !1;
if (Mn)
  try {
    var $i = {};
    (Object.defineProperty($i, "passive", {
      get: function () {
        Iu = !0;
      },
    }),
      window.addEventListener("test", $i, $i),
      window.removeEventListener("test", $i, $i));
  } catch {
    Iu = !1;
  }
function _x(e, t, n, r, s, i, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var no = !1,
  fl = null,
  pl = !1,
  Lu = null,
  Sx = {
    onError: function (e) {
      ((no = !0), (fl = e));
    },
  };
function Ex(e, t, n, r, s, i, o, a, l) {
  ((no = !1), (fl = null), _x.apply(Sx, arguments));
}
function kx(e, t, n, r, s, i, o, a, l) {
  if ((Ex.apply(this, arguments), no)) {
    if (no) {
      var c = fl;
      ((no = !1), (fl = null));
    } else throw Error(j(198));
    pl || ((pl = !0), (Lu = c));
  }
}
function ps(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function iv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qf(e) {
  if (ps(e) !== e) throw Error(j(188));
}
function Tx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ps(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (qf(s), e);
        if (i === r) return (qf(s), t);
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          ((o = !0), (n = s), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = s), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function ov(e) {
  return ((e = Tx(e)), e !== null ? av(e) : null);
}
function av(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = av(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lv = Pt.unstable_scheduleCallback,
  Kf = Pt.unstable_cancelCallback,
  Cx = Pt.unstable_shouldYield,
  Rx = Pt.unstable_requestPaint,
  Ae = Pt.unstable_now,
  Px = Pt.unstable_getCurrentPriorityLevel,
  dh = Pt.unstable_ImmediatePriority,
  cv = Pt.unstable_UserBlockingPriority,
  ml = Pt.unstable_NormalPriority,
  Ax = Pt.unstable_LowPriority,
  uv = Pt.unstable_IdlePriority,
  Jl = null,
  _n = null;
function Ox(e) {
  if (_n && typeof _n.onCommitFiberRoot == "function")
    try {
      _n.onCommitFiberRoot(Jl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nn = Math.clz32 ? Math.clz32 : Ix,
  jx = Math.log,
  Nx = Math.LN2;
function Ix(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((jx(e) / Nx) | 0)) | 0);
}
var Ea = 64,
  ka = 4194304;
function Qi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function gl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = Qi(a)) : ((i &= o), i !== 0 && (r = Qi(i)));
  } else ((o = n & ~s), o !== 0 ? (r = Qi(o)) : i !== 0 && (r = Qi(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - nn(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function Lx(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Dx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - nn(i),
      a = 1 << o,
      l = s[o];
    (l === -1
      ? (!(a & n) || a & r) && (s[o] = Lx(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function Du(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function dv() {
  var e = Ea;
  return ((Ea <<= 1), !(Ea & 4194240) && (Ea = 64), e);
}
function Fc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function na(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nn(t)),
    (e[t] = n));
}
function $x(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - nn(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function hh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nn(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var de = 0;
function hv(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var fv,
  fh,
  pv,
  mv,
  gv,
  $u = !1,
  Ta = [],
  wr = null,
  br = null,
  xr = null,
  bo = new Map(),
  xo = new Map(),
  sr = [],
  Mx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Gf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      wr = null;
      break;
    case "dragenter":
    case "dragleave":
      br = null;
      break;
    case "mouseover":
    case "mouseout":
      xr = null;
      break;
    case "pointerover":
    case "pointerout":
      bo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xo.delete(t.pointerId);
  }
}
function Mi(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = sa(t)), t !== null && fh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Ux(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((wr = Mi(wr, e, t, n, r, s)), !0);
    case "dragenter":
      return ((br = Mi(br, e, t, n, r, s)), !0);
    case "mouseover":
      return ((xr = Mi(xr, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (bo.set(i, Mi(bo.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        xo.set(i, Mi(xo.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function vv(e) {
  var t = Hr(e.target);
  if (t !== null) {
    var n = ps(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = iv(n)), t !== null)) {
          ((e.blockedOn = t),
            gv(e.priority, function () {
              pv(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ju = r), n.target.dispatchEvent(r), (ju = null));
    } else return ((t = sa(n)), t !== null && fh(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Qf(e, t, n) {
  Xa(e) && n.delete(t);
}
function Fx() {
  (($u = !1),
    wr !== null && Xa(wr) && (wr = null),
    br !== null && Xa(br) && (br = null),
    xr !== null && Xa(xr) && (xr = null),
    bo.forEach(Qf),
    xo.forEach(Qf));
}
function Ui(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $u ||
      (($u = !0),
      Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, Fx)));
}
function _o(e) {
  function t(s) {
    return Ui(s, e);
  }
  if (0 < Ta.length) {
    Ui(Ta[0], e);
    for (var n = 1; n < Ta.length; n++) {
      var r = Ta[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    wr !== null && Ui(wr, e),
      br !== null && Ui(br, e),
      xr !== null && Ui(xr, e),
      bo.forEach(t),
      xo.forEach(t),
      n = 0;
    n < sr.length;
    n++
  )
    ((r = sr[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < sr.length && ((n = sr[0]), n.blockedOn === null); )
    (vv(n), n.blockedOn === null && sr.shift());
}
var Ks = Wn.ReactCurrentBatchConfig,
  vl = !0;
function zx(e, t, n, r) {
  var s = de,
    i = Ks.transition;
  Ks.transition = null;
  try {
    ((de = 1), ph(e, t, n, r));
  } finally {
    ((de = s), (Ks.transition = i));
  }
}
function Bx(e, t, n, r) {
  var s = de,
    i = Ks.transition;
  Ks.transition = null;
  try {
    ((de = 4), ph(e, t, n, r));
  } finally {
    ((de = s), (Ks.transition = i));
  }
}
function ph(e, t, n, r) {
  if (vl) {
    var s = Mu(e, t, n, r);
    if (s === null) (Jc(e, t, r, yl, n), Gf(e, r));
    else if (Ux(s, e, t, n, r)) r.stopPropagation();
    else if ((Gf(e, r), t & 4 && -1 < Mx.indexOf(e))) {
      for (; s !== null; ) {
        var i = sa(s);
        if (
          (i !== null && fv(i),
          (i = Mu(e, t, n, r)),
          i === null && Jc(e, t, r, yl, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Jc(e, t, r, null, n);
  }
}
var yl = null;
function Mu(e, t, n, r) {
  if (((yl = null), (e = uh(r)), (e = Hr(e)), e !== null))
    if (((t = ps(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = iv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((yl = e), null);
}
function yv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Px()) {
        case dh:
          return 1;
        case cv:
          return 4;
        case ml:
        case Ax:
          return 16;
        case uv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gr = null,
  mh = null,
  Za = null;
function wv() {
  if (Za) return Za;
  var e,
    t = mh,
    n = t.length,
    r,
    s = "value" in gr ? gr.value : gr.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (Za = s.slice(e, 1 < r ? 1 - r : void 0));
}
function el(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ca() {
  return !0;
}
function Jf() {
  return !1;
}
function Ot(e) {
  function t(n, r, s, i, o) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ca
        : Jf),
      (this.isPropagationStopped = Jf),
      this
    );
  }
  return (
    Ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ca));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ca));
      },
      persist: function () {},
      isPersistent: Ca,
    }),
    t
  );
}
var _i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  gh = Ot(_i),
  ra = Ee({}, _i, { view: 0, detail: 0 }),
  Hx = Ot(ra),
  zc,
  Bc,
  Fi,
  Yl = Ee({}, ra, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fi &&
            (Fi && e.type === "mousemove"
              ? ((zc = e.screenX - Fi.screenX), (Bc = e.screenY - Fi.screenY))
              : (Bc = zc = 0),
            (Fi = e)),
          zc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bc;
    },
  }),
  Yf = Ot(Yl),
  Vx = Ee({}, Yl, { dataTransfer: 0 }),
  Wx = Ot(Vx),
  qx = Ee({}, ra, { relatedTarget: 0 }),
  Hc = Ot(qx),
  Kx = Ee({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gx = Ot(Kx),
  Qx = Ee({}, _i, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jx = Ot(Qx),
  Yx = Ee({}, _i, { data: 0 }),
  Xf = Ot(Yx),
  Xx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Zx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  e_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function t_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = e_[e]) ? !!t[e] : !1;
}
function vh() {
  return t_;
}
var n_ = Ee({}, ra, {
    key: function (e) {
      if (e.key) {
        var t = Xx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = el(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Zx[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vh,
    charCode: function (e) {
      return e.type === "keypress" ? el(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? el(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  r_ = Ot(n_),
  s_ = Ee({}, Yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zf = Ot(s_),
  i_ = Ee({}, ra, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vh,
  }),
  o_ = Ot(i_),
  a_ = Ee({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  l_ = Ot(a_),
  c_ = Ee({}, Yl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  u_ = Ot(c_),
  d_ = [9, 13, 27, 32],
  yh = Mn && "CompositionEvent" in window,
  ro = null;
Mn && "documentMode" in document && (ro = document.documentMode);
var h_ = Mn && "TextEvent" in window && !ro,
  bv = Mn && (!yh || (ro && 8 < ro && 11 >= ro)),
  ep = " ",
  tp = !1;
function xv(e, t) {
  switch (e) {
    case "keyup":
      return d_.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _v(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var js = !1;
function f_(e, t) {
  switch (e) {
    case "compositionend":
      return _v(t);
    case "keypress":
      return t.which !== 32 ? null : ((tp = !0), ep);
    case "textInput":
      return ((e = t.data), e === ep && tp ? null : e);
    default:
      return null;
  }
}
function p_(e, t) {
  if (js)
    return e === "compositionend" || (!yh && xv(e, t))
      ? ((e = wv()), (Za = mh = gr = null), (js = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var m_ = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function np(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!m_[e.type] : t === "textarea";
}
function Sv(e, t, n, r) {
  (ev(r),
    (t = wl(t, "onChange")),
    0 < t.length &&
      ((n = new gh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var so = null,
  So = null;
function g_(e) {
  Iv(e, 0);
}
function Xl(e) {
  var t = Ls(e);
  if (Kg(t)) return e;
}
function v_(e, t) {
  if (e === "change") return t;
}
var Ev = !1;
if (Mn) {
  var Vc;
  if (Mn) {
    var Wc = "oninput" in document;
    if (!Wc) {
      var rp = document.createElement("div");
      (rp.setAttribute("oninput", "return;"),
        (Wc = typeof rp.oninput == "function"));
    }
    Vc = Wc;
  } else Vc = !1;
  Ev = Vc && (!document.documentMode || 9 < document.documentMode);
}
function sp() {
  so && (so.detachEvent("onpropertychange", kv), (So = so = null));
}
function kv(e) {
  if (e.propertyName === "value" && Xl(So)) {
    var t = [];
    (Sv(t, So, e, uh(e)), sv(g_, t));
  }
}
function y_(e, t, n) {
  e === "focusin"
    ? (sp(), (so = t), (So = n), so.attachEvent("onpropertychange", kv))
    : e === "focusout" && sp();
}
function w_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xl(So);
}
function b_(e, t) {
  if (e === "click") return Xl(t);
}
function x_(e, t) {
  if (e === "input" || e === "change") return Xl(t);
}
function __(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var on = typeof Object.is == "function" ? Object.is : __;
function Eo(e, t) {
  if (on(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!bu.call(t, s) || !on(e[s], t[s])) return !1;
  }
  return !0;
}
function ip(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function op(e, t) {
  var n = ip(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ip(n);
  }
}
function Tv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Tv(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Cv() {
  for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hl(e.document);
  }
  return t;
}
function wh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function S_(e) {
  var t = Cv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = op(n, i)));
        var o = op(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var E_ = Mn && "documentMode" in document && 11 >= document.documentMode,
  Ns = null,
  Uu = null,
  io = null,
  Fu = !1;
function ap(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fu ||
    Ns == null ||
    Ns !== hl(r) ||
    ((r = Ns),
    "selectionStart" in r && wh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (io && Eo(io, r)) ||
      ((io = r),
      (r = wl(Uu, "onSelect")),
      0 < r.length &&
        ((t = new gh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ns))));
}
function Ra(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Is = {
    animationend: Ra("Animation", "AnimationEnd"),
    animationiteration: Ra("Animation", "AnimationIteration"),
    animationstart: Ra("Animation", "AnimationStart"),
    transitionend: Ra("Transition", "TransitionEnd"),
  },
  qc = {},
  Rv = {};
Mn &&
  ((Rv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Is.animationend.animation,
    delete Is.animationiteration.animation,
    delete Is.animationstart.animation),
  "TransitionEvent" in window || delete Is.transitionend.transition);
function Zl(e) {
  if (qc[e]) return qc[e];
  if (!Is[e]) return e;
  var t = Is[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rv) return (qc[e] = t[n]);
  return e;
}
var Pv = Zl("animationend"),
  Av = Zl("animationiteration"),
  Ov = Zl("animationstart"),
  jv = Zl("transitionend"),
  Nv = new Map(),
  lp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Nr(e, t) {
  (Nv.set(e, t), fs(t, [e]));
}
for (var Kc = 0; Kc < lp.length; Kc++) {
  var Gc = lp[Kc],
    k_ = Gc.toLowerCase(),
    T_ = Gc[0].toUpperCase() + Gc.slice(1);
  Nr(k_, "on" + T_);
}
Nr(Pv, "onAnimationEnd");
Nr(Av, "onAnimationIteration");
Nr(Ov, "onAnimationStart");
Nr("dblclick", "onDoubleClick");
Nr("focusin", "onFocus");
Nr("focusout", "onBlur");
Nr(jv, "onTransitionEnd");
di("onMouseEnter", ["mouseout", "mouseover"]);
di("onMouseLeave", ["mouseout", "mouseover"]);
di("onPointerEnter", ["pointerout", "pointerover"]);
di("onPointerLeave", ["pointerout", "pointerover"]);
fs(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
fs(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
fs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fs(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
fs(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
fs(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ji =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  C_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));
function cp(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), kx(r, t, void 0, e), (e.currentTarget = null));
}
function Iv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          (cp(s, a, c), (i = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          (cp(s, a, c), (i = l));
        }
    }
  }
  if (pl) throw ((e = Lu), (pl = !1), (Lu = null), e);
}
function ye(e, t) {
  var n = t[Wu];
  n === void 0 && (n = t[Wu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Lv(t, e, 2, !1), n.add(r));
}
function Qc(e, t, n) {
  var r = 0;
  (t && (r |= 4), Lv(n, e, r, t));
}
var Pa = "_reactListening" + Math.random().toString(36).slice(2);
function ko(e) {
  if (!e[Pa]) {
    ((e[Pa] = !0),
      Bg.forEach(function (n) {
        n !== "selectionchange" && (C_.has(n) || Qc(n, !1, e), Qc(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pa] || ((t[Pa] = !0), Qc("selectionchange", !1, t));
  }
}
function Lv(e, t, n, r) {
  switch (yv(t)) {
    case 1:
      var s = zx;
      break;
    case 4:
      s = Bx;
      break;
    default:
      s = ph;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !Iu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function Jc(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Hr(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sv(function () {
    var c = i,
      d = uh(n),
      u = [];
    e: {
      var f = Nv.get(e);
      if (f !== void 0) {
        var h = gh,
          v = e;
        switch (e) {
          case "keypress":
            if (el(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = r_;
            break;
          case "focusin":
            ((v = "focus"), (h = Hc));
            break;
          case "focusout":
            ((v = "blur"), (h = Hc));
            break;
          case "beforeblur":
          case "afterblur":
            h = Hc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Yf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Wx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = o_;
            break;
          case Pv:
          case Av:
          case Ov:
            h = Gx;
            break;
          case jv:
            h = l_;
            break;
          case "scroll":
            h = Hx;
            break;
          case "wheel":
            h = u_;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Jx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Zf;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          p = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var m = c, y; m !== null; ) {
          y = m;
          var _ = y.stateNode;
          if (
            (y.tag === 5 &&
              _ !== null &&
              ((y = _),
              p !== null && ((_ = wo(m, p)), _ != null && g.push(To(m, _, y)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((f = new h(f, v, null, n, d)), u.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ju &&
            (v = n.relatedTarget || n.fromElement) &&
            (Hr(v) || v[Un]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = c),
              (v = v ? Hr(v) : null),
              v !== null &&
                ((w = ps(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = c)),
          h !== v)
        ) {
          if (
            ((g = Yf),
            (_ = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Zf),
              (_ = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (w = h == null ? f : Ls(h)),
            (y = v == null ? f : Ls(v)),
            (f = new g(_, m + "leave", h, n, d)),
            (f.target = w),
            (f.relatedTarget = y),
            (_ = null),
            Hr(d) === c &&
              ((g = new g(p, m + "enter", v, n, d)),
              (g.target = y),
              (g.relatedTarget = w),
              (_ = g)),
            (w = _),
            h && v)
          )
            t: {
              for (g = h, p = v, m = 0, y = g; y; y = ys(y)) m++;
              for (y = 0, _ = p; _; _ = ys(_)) y++;
              for (; 0 < m - y; ) ((g = ys(g)), m--);
              for (; 0 < y - m; ) ((p = ys(p)), y--);
              for (; m--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                ((g = ys(g)), (p = ys(p)));
              }
              g = null;
            }
          else g = null;
          (h !== null && up(u, f, h, g, !1),
            v !== null && w !== null && up(u, w, v, g, !0));
        }
      }
      e: {
        if (
          ((f = c ? Ls(c) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var S = v_;
        else if (np(f))
          if (Ev) S = x_;
          else {
            S = w_;
            var E = y_;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = b_);
        if (S && (S = S(e, c))) {
          Sv(u, S, n, d);
          break e;
        }
        (E && E(e, f, c),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Cu(f, "number", f.value));
      }
      switch (((E = c ? Ls(c) : window), e)) {
        case "focusin":
          (np(E) || E.contentEditable === "true") &&
            ((Ns = E), (Uu = c), (io = null));
          break;
        case "focusout":
          io = Uu = Ns = null;
          break;
        case "mousedown":
          Fu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Fu = !1), ap(u, n, d));
          break;
        case "selectionchange":
          if (E_) break;
        case "keydown":
        case "keyup":
          ap(u, n, d);
      }
      var T;
      if (yh)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        js
          ? xv(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      (C &&
        (bv &&
          n.locale !== "ko" &&
          (js || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && js && (T = wv())
            : ((gr = d),
              (mh = "value" in gr ? gr.value : gr.textContent),
              (js = !0))),
        (E = wl(c, C)),
        0 < E.length &&
          ((C = new Xf(C, e, null, n, d)),
          u.push({ event: C, listeners: E }),
          T ? (C.data = T) : ((T = _v(n)), T !== null && (C.data = T)))),
        (T = h_ ? f_(e, n) : p_(e, n)) &&
          ((c = wl(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Xf("onBeforeInput", "beforeinput", null, n, d)),
            u.push({ event: d, listeners: c }),
            (d.data = T))));
    }
    Iv(u, t);
  });
}
function To(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = wo(e, n)),
      i != null && r.unshift(To(e, i, s)),
      (i = wo(e, t)),
      i != null && r.push(To(e, i, s))),
      (e = e.return));
  }
  return r;
}
function ys(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function up(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((l = wo(n, i)), l != null && o.unshift(To(n, l, a)))
        : s || ((l = wo(n, i)), l != null && o.push(To(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var R_ = /\r\n?/g,
  P_ = /\u0000|\uFFFD/g;
function dp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      R_,
      `
`,
    )
    .replace(P_, "");
}
function Aa(e, t, n) {
  if (((t = dp(t)), dp(e) !== t && n)) throw Error(j(425));
}
function bl() {}
var zu = null,
  Bu = null;
function Hu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vu = typeof setTimeout == "function" ? setTimeout : void 0,
  A_ = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hp = typeof Promise == "function" ? Promise : void 0,
  O_ =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hp < "u"
        ? function (e) {
            return hp.resolve(null).then(e).catch(j_);
          }
        : Vu;
function j_(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yc(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), _o(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  _o(t);
}
function _r(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Si = Math.random().toString(36).slice(2),
  bn = "__reactFiber$" + Si,
  Co = "__reactProps$" + Si,
  Un = "__reactContainer$" + Si,
  Wu = "__reactEvents$" + Si,
  N_ = "__reactListeners$" + Si,
  I_ = "__reactHandles$" + Si;
function Hr(e) {
  var t = e[bn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Un] || n[bn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fp(e); e !== null; ) {
          if ((n = e[bn])) return n;
          e = fp(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function sa(e) {
  return (
    (e = e[bn] || e[Un]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ls(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function ec(e) {
  return e[Co] || null;
}
var qu = [],
  Ds = -1;
function Ir(e) {
  return { current: e };
}
function we(e) {
  0 > Ds || ((e.current = qu[Ds]), (qu[Ds] = null), Ds--);
}
function me(e, t) {
  (Ds++, (qu[Ds] = e.current), (e.current = t));
}
var Pr = {},
  Ze = Ir(Pr),
  vt = Ir(!1),
  is = Pr;
function hi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function yt(e) {
  return ((e = e.childContextTypes), e != null);
}
function xl() {
  (we(vt), we(Ze));
}
function pp(e, t, n) {
  if (Ze.current !== Pr) throw Error(j(168));
  (me(Ze, t), me(vt, n));
}
function Dv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(j(108, yx(e) || "Unknown", s));
  return Ee({}, n, r);
}
function _l(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pr),
    (is = Ze.current),
    me(Ze, e),
    me(vt, vt.current),
    !0
  );
}
function mp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  (n
    ? ((e = Dv(e, t, is)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      we(vt),
      we(Ze),
      me(Ze, e))
    : we(vt),
    me(vt, n));
}
var Nn = null,
  tc = !1,
  Xc = !1;
function $v(e) {
  Nn === null ? (Nn = [e]) : Nn.push(e);
}
function L_(e) {
  ((tc = !0), $v(e));
}
function Lr() {
  if (!Xc && Nn !== null) {
    Xc = !0;
    var e = 0,
      t = de;
    try {
      var n = Nn;
      for (de = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Nn = null), (tc = !1));
    } catch (s) {
      throw (Nn !== null && (Nn = Nn.slice(e + 1)), lv(dh, Lr), s);
    } finally {
      ((de = t), (Xc = !1));
    }
  }
  return null;
}
var $s = [],
  Ms = 0,
  Sl = null,
  El = 0,
  It = [],
  Lt = 0,
  os = null,
  Ln = 1,
  Dn = "";
function Ur(e, t) {
  (($s[Ms++] = El), ($s[Ms++] = Sl), (Sl = e), (El = t));
}
function Mv(e, t, n) {
  ((It[Lt++] = Ln), (It[Lt++] = Dn), (It[Lt++] = os), (os = e));
  var r = Ln;
  e = Dn;
  var s = 32 - nn(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - nn(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Ln = (1 << (32 - nn(t) + s)) | (n << s) | r),
      (Dn = i + e));
  } else ((Ln = (1 << i) | (n << s) | r), (Dn = e));
}
function bh(e) {
  e.return !== null && (Ur(e, 1), Mv(e, 1, 0));
}
function xh(e) {
  for (; e === Sl; )
    ((Sl = $s[--Ms]), ($s[Ms] = null), (El = $s[--Ms]), ($s[Ms] = null));
  for (; e === os; )
    ((os = It[--Lt]),
      (It[Lt] = null),
      (Dn = It[--Lt]),
      (It[Lt] = null),
      (Ln = It[--Lt]),
      (It[Lt] = null));
}
var Ct = null,
  Tt = null,
  be = !1,
  tn = null;
function Uv(e, t) {
  var n = Dt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function gp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ct = e), (Tt = _r(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ct = e), (Tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = os !== null ? { id: Ln, overflow: Dn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ct = e),
            (Tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ku(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gu(e) {
  if (be) {
    var t = Tt;
    if (t) {
      var n = t;
      if (!gp(e, t)) {
        if (Ku(e)) throw Error(j(418));
        t = _r(n.nextSibling);
        var r = Ct;
        t && gp(e, t)
          ? Uv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (be = !1), (Ct = e));
      }
    } else {
      if (Ku(e)) throw Error(j(418));
      ((e.flags = (e.flags & -4097) | 2), (be = !1), (Ct = e));
    }
  }
}
function vp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ct = e;
}
function Oa(e) {
  if (e !== Ct) return !1;
  if (!be) return (vp(e), (be = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hu(e.type, e.memoizedProps))),
    t && (t = Tt))
  ) {
    if (Ku(e)) throw (Fv(), Error(j(418)));
    for (; t; ) (Uv(e, t), (t = _r(t.nextSibling)));
  }
  if ((vp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Tt = _r(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Tt = null;
    }
  } else Tt = Ct ? _r(e.stateNode.nextSibling) : null;
  return !0;
}
function Fv() {
  for (var e = Tt; e; ) e = _r(e.nextSibling);
}
function fi() {
  ((Tt = Ct = null), (be = !1));
}
function _h(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
var D_ = Wn.ReactCurrentBatchConfig;
function zi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function ja(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function yp(e) {
  var t = e._init;
  return t(e._payload);
}
function zv(e) {
  function t(p, m) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [m]), (p.flags |= 16)) : y.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) (t(p, m), (m = m.sibling));
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      (m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling));
    return p;
  }
  function s(p, m) {
    return ((p = Tr(p, m)), (p.index = 0), (p.sibling = null), p);
  }
  function i(p, m, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((p.flags |= 2), m) : y)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function o(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, m, y, _) {
    return m === null || m.tag !== 6
      ? ((m = iu(y, p.mode, _)), (m.return = p), m)
      : ((m = s(m, y)), (m.return = p), m);
  }
  function l(p, m, y, _) {
    var S = y.type;
    return S === Os
      ? d(p, m, y.props.children, _, y.key)
      : m !== null &&
          (m.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === nr &&
              yp(S) === m.type))
        ? ((_ = s(m, y.props)), (_.ref = zi(p, m, y)), (_.return = p), _)
        : ((_ = al(y.type, y.key, y.props, null, p.mode, _)),
          (_.ref = zi(p, m, y)),
          (_.return = p),
          _);
  }
  function c(p, m, y, _) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = ou(y, p.mode, _)), (m.return = p), m)
      : ((m = s(m, y.children || [])), (m.return = p), m);
  }
  function d(p, m, y, _, S) {
    return m === null || m.tag !== 7
      ? ((m = rs(y, p.mode, _, S)), (m.return = p), m)
      : ((m = s(m, y)), (m.return = p), m);
  }
  function u(p, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = iu("" + m, p.mode, y)), (m.return = p), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xa:
          return (
            (y = al(m.type, m.key, m.props, null, p.mode, y)),
            (y.ref = zi(p, null, m)),
            (y.return = p),
            y
          );
        case As:
          return ((m = ou(m, p.mode, y)), (m.return = p), m);
        case nr:
          var _ = m._init;
          return u(p, _(m._payload), y);
      }
      if (Gi(m) || Di(m))
        return ((m = rs(m, p.mode, y, null)), (m.return = p), m);
      ja(p, m);
    }
    return null;
  }
  function f(p, m, y, _) {
    var S = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return S !== null ? null : a(p, m, "" + y, _);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case xa:
          return y.key === S ? l(p, m, y, _) : null;
        case As:
          return y.key === S ? c(p, m, y, _) : null;
        case nr:
          return ((S = y._init), f(p, m, S(y._payload), _));
      }
      if (Gi(y) || Di(y)) return S !== null ? null : d(p, m, y, _, null);
      ja(p, y);
    }
    return null;
  }
  function h(p, m, y, _, S) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return ((p = p.get(y) || null), a(m, p, "" + _, S));
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case xa:
          return (
            (p = p.get(_.key === null ? y : _.key) || null),
            l(m, p, _, S)
          );
        case As:
          return (
            (p = p.get(_.key === null ? y : _.key) || null),
            c(m, p, _, S)
          );
        case nr:
          var E = _._init;
          return h(p, m, y, E(_._payload), S);
      }
      if (Gi(_) || Di(_)) return ((p = p.get(y) || null), d(m, p, _, S, null));
      ja(m, _);
    }
    return null;
  }
  function v(p, m, y, _) {
    for (
      var S = null, E = null, T = m, C = (m = 0), P = null;
      T !== null && C < y.length;
      C++
    ) {
      T.index > C ? ((P = T), (T = null)) : (P = T.sibling);
      var O = f(p, T, y[C], _);
      if (O === null) {
        T === null && (T = P);
        break;
      }
      (e && T && O.alternate === null && t(p, T),
        (m = i(O, m, C)),
        E === null ? (S = O) : (E.sibling = O),
        (E = O),
        (T = P));
    }
    if (C === y.length) return (n(p, T), be && Ur(p, C), S);
    if (T === null) {
      for (; C < y.length; C++)
        ((T = u(p, y[C], _)),
          T !== null &&
            ((m = i(T, m, C)),
            E === null ? (S = T) : (E.sibling = T),
            (E = T)));
      return (be && Ur(p, C), S);
    }
    for (T = r(p, T); C < y.length; C++)
      ((P = h(T, p, C, y[C], _)),
        P !== null &&
          (e && P.alternate !== null && T.delete(P.key === null ? C : P.key),
          (m = i(P, m, C)),
          E === null ? (S = P) : (E.sibling = P),
          (E = P)));
    return (
      e &&
        T.forEach(function (D) {
          return t(p, D);
        }),
      be && Ur(p, C),
      S
    );
  }
  function g(p, m, y, _) {
    var S = Di(y);
    if (typeof S != "function") throw Error(j(150));
    if (((y = S.call(y)), y == null)) throw Error(j(151));
    for (
      var E = (S = null), T = m, C = (m = 0), P = null, O = y.next();
      T !== null && !O.done;
      C++, O = y.next()
    ) {
      T.index > C ? ((P = T), (T = null)) : (P = T.sibling);
      var D = f(p, T, O.value, _);
      if (D === null) {
        T === null && (T = P);
        break;
      }
      (e && T && D.alternate === null && t(p, T),
        (m = i(D, m, C)),
        E === null ? (S = D) : (E.sibling = D),
        (E = D),
        (T = P));
    }
    if (O.done) return (n(p, T), be && Ur(p, C), S);
    if (T === null) {
      for (; !O.done; C++, O = y.next())
        ((O = u(p, O.value, _)),
          O !== null &&
            ((m = i(O, m, C)),
            E === null ? (S = O) : (E.sibling = O),
            (E = O)));
      return (be && Ur(p, C), S);
    }
    for (T = r(p, T); !O.done; C++, O = y.next())
      ((O = h(T, p, C, O.value, _)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? C : O.key),
          (m = i(O, m, C)),
          E === null ? (S = O) : (E.sibling = O),
          (E = O)));
    return (
      e &&
        T.forEach(function (N) {
          return t(p, N);
        }),
      be && Ur(p, C),
      S
    );
  }
  function w(p, m, y, _) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Os &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case xa:
          e: {
            for (var S = y.key, E = m; E !== null; ) {
              if (E.key === S) {
                if (((S = y.type), S === Os)) {
                  if (E.tag === 7) {
                    (n(p, E.sibling),
                      (m = s(E, y.props.children)),
                      (m.return = p),
                      (p = m));
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === nr &&
                    yp(S) === E.type)
                ) {
                  (n(p, E.sibling),
                    (m = s(E, y.props)),
                    (m.ref = zi(p, E, y)),
                    (m.return = p),
                    (p = m));
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            y.type === Os
              ? ((m = rs(y.props.children, p.mode, _, y.key)),
                (m.return = p),
                (p = m))
              : ((_ = al(y.type, y.key, y.props, null, p.mode, _)),
                (_.ref = zi(p, m, y)),
                (_.return = p),
                (p = _));
          }
          return o(p);
        case As:
          e: {
            for (E = y.key; m !== null; ) {
              if (m.key === E)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  (n(p, m.sibling),
                    (m = s(m, y.children || [])),
                    (m.return = p),
                    (p = m));
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            ((m = ou(y, p.mode, _)), (m.return = p), (p = m));
          }
          return o(p);
        case nr:
          return ((E = y._init), w(p, m, E(y._payload), _));
      }
      if (Gi(y)) return v(p, m, y, _);
      if (Di(y)) return g(p, m, y, _);
      ja(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = s(m, y)), (m.return = p), (p = m))
          : (n(p, m), (m = iu(y, p.mode, _)), (m.return = p), (p = m)),
        o(p))
      : n(p, m);
  }
  return w;
}
var pi = zv(!0),
  Bv = zv(!1),
  kl = Ir(null),
  Tl = null,
  Us = null,
  Sh = null;
function Eh() {
  Sh = Us = Tl = null;
}
function kh(e) {
  var t = kl.current;
  (we(kl), (e._currentValue = t));
}
function Qu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gs(e, t) {
  ((Tl = e),
    (Sh = Us = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (gt = !0), (e.firstContext = null)));
}
function Mt(e) {
  var t = e._currentValue;
  if (Sh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Us === null)) {
      if (Tl === null) throw Error(j(308));
      ((Us = e), (Tl.dependencies = { lanes: 0, firstContext: e }));
    } else Us = Us.next = e;
  return t;
}
var Vr = null;
function Th(e) {
  Vr === null ? (Vr = [e]) : Vr.push(e);
}
function Hv(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Th(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Fn(e, r)
  );
}
function Fn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var rr = !1;
function Ch(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vv(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function $n(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Sr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ae & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      Fn(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Th(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Fn(e, n)
  );
}
function tl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), hh(e, n));
  }
}
function wp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Cl(e, t, n, r) {
  var s = e.updateQueue;
  rr = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      c = l.next;
    ((l.next = null), o === null ? (i = c) : (o.next = c), (o = l));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var u = s.baseState;
    ((o = 0), (d = c = l = null), (a = i));
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            g = a;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                u = v.call(h, u, f);
                break e;
              }
              u = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(h, u, f) : v),
                f == null)
              )
                break e;
              u = Ee({}, u, f);
              break e;
            case 2:
              rr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [a]) : f.push(a));
      } else
        ((h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = h), (l = u)) : (d = d.next = h),
          (o |= f));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (l = u),
      (s.baseState = l),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((o |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((ls |= o), (e.lanes = o), (e.memoizedState = u));
  }
}
function bp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(j(191, s));
        s.call(r);
      }
    }
}
var ia = {},
  Sn = Ir(ia),
  Ro = Ir(ia),
  Po = Ir(ia);
function Wr(e) {
  if (e === ia) throw Error(j(174));
  return e;
}
function Rh(e, t) {
  switch ((me(Po, t), me(Ro, e), me(Sn, ia), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pu(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pu(t, e)));
  }
  (we(Sn), me(Sn, t));
}
function mi() {
  (we(Sn), we(Ro), we(Po));
}
function Wv(e) {
  Wr(Po.current);
  var t = Wr(Sn.current),
    n = Pu(t, e.type);
  t !== n && (me(Ro, e), me(Sn, n));
}
function Ph(e) {
  Ro.current === e && (we(Sn), we(Ro));
}
var xe = Ir(0);
function Rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Zc = [];
function Ah() {
  for (var e = 0; e < Zc.length; e++)
    Zc[e]._workInProgressVersionPrimary = null;
  Zc.length = 0;
}
var nl = Wn.ReactCurrentDispatcher,
  eu = Wn.ReactCurrentBatchConfig,
  as = 0,
  Se = null,
  Le = null,
  ze = null,
  Pl = !1,
  oo = !1,
  Ao = 0,
  $_ = 0;
function Qe() {
  throw Error(j(321));
}
function Oh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!on(e[n], t[n])) return !1;
  return !0;
}
function jh(e, t, n, r, s, i) {
  if (
    ((as = i),
    (Se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (nl.current = e === null || e.memoizedState === null ? z_ : B_),
    (e = n(r, s)),
    oo)
  ) {
    i = 0;
    do {
      if (((oo = !1), (Ao = 0), 25 <= i)) throw Error(j(301));
      ((i += 1),
        (ze = Le = null),
        (t.updateQueue = null),
        (nl.current = H_),
        (e = n(r, s)));
    } while (oo);
  }
  if (
    ((nl.current = Al),
    (t = Le !== null && Le.next !== null),
    (as = 0),
    (ze = Le = Se = null),
    (Pl = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Nh() {
  var e = Ao !== 0;
  return ((Ao = 0), e);
}
function pn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ze === null ? (Se.memoizedState = ze = e) : (ze = ze.next = e), ze);
}
function Ut() {
  if (Le === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = ze === null ? Se.memoizedState : ze.next;
  if (t !== null) ((ze = t), (Le = e));
  else {
    if (e === null) throw Error(j(310));
    ((Le = e),
      (e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null,
      }),
      ze === null ? (Se.memoizedState = ze = e) : (ze = ze.next = e));
  }
  return ze;
}
function Oo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function tu(e) {
  var t = Ut(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Le,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      ((s.next = i.next), (i.next = o));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      c = i;
    do {
      var d = c.lane;
      if ((as & d) === d)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var u = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (l === null ? ((a = l = u), (o = r)) : (l = l.next = u),
          (Se.lanes |= d),
          (ls |= d));
      }
      c = c.next;
    } while (c !== null && c !== i);
    (l === null ? (o = r) : (l.next = a),
      on(r, t.memoizedState) || (gt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (Se.lanes |= i), (ls |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function nu(e) {
  var t = Ut(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== s);
    (on(i, t.memoizedState) || (gt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function qv() {}
function Kv(e, t) {
  var n = Se,
    r = Ut(),
    s = t(),
    i = !on(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (gt = !0)),
    (r = r.queue),
    Ih(Jv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      jo(9, Qv.bind(null, n, r, s, t), void 0, null),
      Be === null)
    )
      throw Error(j(349));
    as & 30 || Gv(n, t, s);
  }
  return s;
}
function Gv(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Qv(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Yv(t) && Xv(e));
}
function Jv(e, t, n) {
  return n(function () {
    Yv(t) && Xv(e);
  });
}
function Yv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !on(e, n);
  } catch {
    return !0;
  }
}
function Xv(e) {
  var t = Fn(e, 1);
  t !== null && rn(t, e, 1, -1);
}
function xp(e) {
  var t = pn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Oo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = F_.bind(null, Se, e)),
    [t.memoizedState, e]
  );
}
function jo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zv() {
  return Ut().memoizedState;
}
function rl(e, t, n, r) {
  var s = pn();
  ((Se.flags |= e),
    (s.memoizedState = jo(1 | t, n, void 0, r === void 0 ? null : r)));
}
function nc(e, t, n, r) {
  var s = Ut();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (((i = o.destroy), r !== null && Oh(r, o.deps))) {
      s.memoizedState = jo(t, n, i, r);
      return;
    }
  }
  ((Se.flags |= e), (s.memoizedState = jo(1 | t, n, i, r)));
}
function _p(e, t) {
  return rl(8390656, 8, e, t);
}
function Ih(e, t) {
  return nc(2048, 8, e, t);
}
function ey(e, t) {
  return nc(4, 2, e, t);
}
function ty(e, t) {
  return nc(4, 4, e, t);
}
function ny(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ry(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    nc(4, 4, ny.bind(null, t, e), n)
  );
}
function Lh() {}
function sy(e, t) {
  var n = Ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function iy(e, t) {
  var n = Ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function oy(e, t, n) {
  return as & 21
    ? (on(n, t) || ((n = dv()), (Se.lanes |= n), (ls |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (gt = !0)), (e.memoizedState = n));
}
function M_(e, t) {
  var n = de;
  ((de = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = eu.transition;
  eu.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((de = n), (eu.transition = r));
  }
}
function ay() {
  return Ut().memoizedState;
}
function U_(e, t, n) {
  var r = kr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ly(e))
  )
    cy(t, n);
  else if (((n = Hv(e, t, n, r)), n !== null)) {
    var s = ot();
    (rn(n, e, r, s), uy(n, t, r));
  }
}
function F_(e, t, n) {
  var r = kr(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ly(e)) cy(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), on(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((s.next = s), Th(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Hv(e, t, s, r)),
      n !== null && ((s = ot()), rn(n, e, r, s), uy(n, t, r)));
  }
}
function ly(e) {
  var t = e.alternate;
  return e === Se || (t !== null && t === Se);
}
function cy(e, t) {
  oo = Pl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function uy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), hh(e, n));
  }
}
var Al = {
    readContext: Mt,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useInsertionEffect: Qe,
    useLayoutEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useMutableSource: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    unstable_isNewReconciler: !1,
  },
  z_ = {
    readContext: Mt,
    useCallback: function (e, t) {
      return ((pn().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Mt,
    useEffect: _p,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        rl(4194308, 4, ny.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pn();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = pn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = U_.bind(null, Se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pn();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: xp,
    useDebugValue: Lh,
    useDeferredValue: function (e) {
      return (pn().memoizedState = e);
    },
    useTransition: function () {
      var e = xp(!1),
        t = e[0];
      return ((e = M_.bind(null, e[1])), (pn().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Se,
        s = pn();
      if (be) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Be === null)) throw Error(j(349));
        as & 30 || Gv(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        _p(Jv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        jo(9, Qv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pn(),
        t = Be.identifierPrefix;
      if (be) {
        var n = Dn,
          r = Ln;
        ((n = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ao++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = $_++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  B_ = {
    readContext: Mt,
    useCallback: sy,
    useContext: Mt,
    useEffect: Ih,
    useImperativeHandle: ry,
    useInsertionEffect: ey,
    useLayoutEffect: ty,
    useMemo: iy,
    useReducer: tu,
    useRef: Zv,
    useState: function () {
      return tu(Oo);
    },
    useDebugValue: Lh,
    useDeferredValue: function (e) {
      var t = Ut();
      return oy(t, Le.memoizedState, e);
    },
    useTransition: function () {
      var e = tu(Oo)[0],
        t = Ut().memoizedState;
      return [e, t];
    },
    useMutableSource: qv,
    useSyncExternalStore: Kv,
    useId: ay,
    unstable_isNewReconciler: !1,
  },
  H_ = {
    readContext: Mt,
    useCallback: sy,
    useContext: Mt,
    useEffect: Ih,
    useImperativeHandle: ry,
    useInsertionEffect: ey,
    useLayoutEffect: ty,
    useMemo: iy,
    useReducer: nu,
    useRef: Zv,
    useState: function () {
      return nu(Oo);
    },
    useDebugValue: Lh,
    useDeferredValue: function (e) {
      var t = Ut();
      return Le === null ? (t.memoizedState = e) : oy(t, Le.memoizedState, e);
    },
    useTransition: function () {
      var e = nu(Oo)[0],
        t = Ut().memoizedState;
      return [e, t];
    },
    useMutableSource: qv,
    useSyncExternalStore: Kv,
    useId: ay,
    unstable_isNewReconciler: !1,
  };
function Jt(e, t) {
  if (e && e.defaultProps) {
    ((t = Ee({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ju(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var rc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ps(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      s = kr(e),
      i = $n(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = Sr(e, i, s)),
      t !== null && (rn(t, e, s, r), tl(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      s = kr(e),
      i = $n(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Sr(e, i, s)),
      t !== null && (rn(t, e, s, r), tl(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ot(),
      r = kr(e),
      s = $n(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Sr(e, s, r)),
      t !== null && (rn(t, e, r, n), tl(t, e, r)));
  },
};
function Sp(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Eo(n, r) || !Eo(s, i)
        : !0
  );
}
function dy(e, t, n) {
  var r = !1,
    s = Pr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Mt(i))
      : ((s = yt(t) ? is : Ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? hi(e, s) : Pr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ep(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rc.enqueueReplaceState(t, t.state, null));
}
function Yu(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Ch(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = Mt(i))
    : ((i = yt(t) ? is : Ze.current), (s.context = hi(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ju(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && rc.enqueueReplaceState(s, s.state, null),
      Cl(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function gi(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += vx(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function ru(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var V_ = typeof WeakMap == "function" ? WeakMap : Map;
function hy(e, t, n) {
  ((n = $n(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (jl || ((jl = !0), (ld = r)), Xu(e, t));
    }),
    n
  );
}
function fy(e, t, n) {
  ((n = $n(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Xu(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Xu(e, t),
          typeof r != "function" &&
            (Er === null ? (Er = new Set([this])) : Er.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function kp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new V_();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = s1.bind(null, e, t, n)), t.then(e, e));
}
function Tp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cp(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $n(-1, 1)), (t.tag = 2), Sr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var W_ = Wn.ReactCurrentOwner,
  gt = !1;
function it(e, t, n, r) {
  t.child = e === null ? Bv(t, null, n, r) : pi(t, e.child, n, r);
}
function Rp(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Gs(t, s),
    (r = jh(e, t, n, r, i, s)),
    (n = Nh()),
    e !== null && !gt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        zn(e, t, s))
      : (be && n && bh(t), (t.flags |= 1), it(e, t, r, s), t.child)
  );
}
function Pp(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Hh(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), py(e, t, i, r, s))
      : ((e = al(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Eo), n(o, r) && e.ref === t.ref)
    )
      return zn(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Tr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function py(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Eo(i, r) && e.ref === t.ref)
      if (((gt = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (gt = !0);
      else return ((t.lanes = e.lanes), zn(e, t, s));
  }
  return Zu(e, t, n, r, s);
}
function my(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        me(zs, St),
        (St |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          me(zs, St),
          (St |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        me(zs, St),
        (St |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      me(zs, St),
      (St |= r));
  return (it(e, t, s, n), t.child);
}
function gy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zu(e, t, n, r, s) {
  var i = yt(n) ? is : Ze.current;
  return (
    (i = hi(t, i)),
    Gs(t, s),
    (n = jh(e, t, n, r, i, s)),
    (r = Nh()),
    e !== null && !gt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        zn(e, t, s))
      : (be && r && bh(t), (t.flags |= 1), it(e, t, n, s), t.child)
  );
}
function Ap(e, t, n, r, s) {
  if (yt(n)) {
    var i = !0;
    _l(t);
  } else i = !1;
  if ((Gs(t, s), t.stateNode === null))
    (sl(e, t), dy(t, n, r), Yu(t, n, r, s), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Mt(c))
      : ((c = yt(n) ? is : Ze.current), (c = hi(t, c)));
    var d = n.getDerivedStateFromProps,
      u =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (u ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Ep(t, o, r, c)),
      (rr = !1));
    var f = t.memoizedState;
    ((o.state = f),
      Cl(t, r, o, s),
      (l = t.memoizedState),
      a !== r || f !== l || vt.current || rr
        ? (typeof d == "function" && (Ju(t, n, d, r), (l = t.memoizedState)),
          (a = rr || Sp(t, n, a, r, f, l, c))
            ? (u ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Vv(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Jt(t.type, a)),
      (o.props = c),
      (u = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Mt(l))
        : ((l = yt(n) ? is : Ze.current), (l = hi(t, l))));
    var h = n.getDerivedStateFromProps;
    ((d =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== u || f !== l) && Ep(t, o, r, l)),
      (rr = !1),
      (f = t.memoizedState),
      (o.state = f),
      Cl(t, r, o, s));
    var v = t.memoizedState;
    a !== u || f !== v || vt.current || rr
      ? (typeof h == "function" && (Ju(t, n, h, r), (v = t.memoizedState)),
        (c = rr || Sp(t, n, c, r, f, v, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ed(e, t, n, r, i, s);
}
function ed(e, t, n, r, s, i) {
  gy(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (s && mp(t, n, !1), zn(e, t, i));
  ((r = t.stateNode), (W_.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = pi(t, e.child, null, i)), (t.child = pi(t, null, a, i)))
      : it(e, t, a, i),
    (t.memoizedState = r.state),
    s && mp(t, n, !0),
    t.child
  );
}
function vy(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? pp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pp(e, t.context, !1),
    Rh(e, t.containerInfo));
}
function Op(e, t, n, r, s) {
  return (fi(), _h(s), (t.flags |= 256), it(e, t, n, r), t.child);
}
var td = { dehydrated: null, treeContext: null, retryLane: 0 };
function nd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yy(e, t, n) {
  var r = t.pendingProps,
    s = xe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    me(xe, s & 1),
    e === null)
  )
    return (
      Gu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = oc(o, r, 0, null)),
              (e = rs(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = nd(n)),
              (t.memoizedState = td),
              e)
            : Dh(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return q_(e, t, o, r, a, s, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Tr(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = Tr(a, i)) : ((i = rs(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? nd(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = td),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Tr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Dh(e, t) {
  return (
    (t = oc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Na(e, t, n, r) {
  return (
    r !== null && _h(r),
    pi(t, e.child, null, n),
    (e = Dh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function q_(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ru(Error(j(422)))), Na(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = oc({ mode: "visible", children: r.children }, s, 0, null)),
          (i = rs(i, s, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && pi(t, e.child, null, o),
          (t.child.memoizedState = nd(o)),
          (t.memoizedState = td),
          i);
  if (!(t.mode & 1)) return Na(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(j(419))),
      (r = ru(i, r, void 0)),
      Na(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), gt || a)) {
    if (((r = Be), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), Fn(e, s), rn(r, e, s, -1)));
    }
    return (Bh(), (r = ru(Error(j(421)))), Na(e, t, o, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = i1.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Tt = _r(s.nextSibling)),
      (Ct = t),
      (be = !0),
      (tn = null),
      e !== null &&
        ((It[Lt++] = Ln),
        (It[Lt++] = Dn),
        (It[Lt++] = os),
        (Ln = e.id),
        (Dn = e.overflow),
        (os = t)),
      (t = Dh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function jp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Qu(e.return, t, n));
}
function su(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function wy(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((it(e, t, r.children, n), (r = xe.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jp(e, n, t);
        else if (e.tag === 19) jp(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((me(xe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && Rl(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          su(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Rl(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        su(t, !0, n, null, i);
        break;
      case "together":
        su(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function sl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ls |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Tr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function K_(e, t, n) {
  switch (t.tag) {
    case 3:
      (vy(t), fi());
      break;
    case 5:
      Wv(t);
      break;
    case 1:
      yt(t.type) && _l(t);
      break;
    case 4:
      Rh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (me(kl, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (me(xe, xe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? yy(e, t, n)
            : (me(xe, xe.current & 1),
              (e = zn(e, t, n)),
              e !== null ? e.sibling : null);
      me(xe, xe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        me(xe, xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), my(e, t, n));
  }
  return zn(e, t, n);
}
var by, rd, xy, _y;
by = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
rd = function () {};
xy = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), Wr(Sn.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = ku(e, s)), (r = ku(e, r)), (i = []));
        break;
      case "select":
        ((s = Ee({}, s, { value: void 0 })),
          (r = Ee({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = Ru(e, s)), (r = Ru(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = bl);
    }
    Au(n, r);
    var o;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (vo.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (i || (i = []), i.push(c, n)), (n = l));
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (vo.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && ye("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
_y = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bi(e, t) {
  if (!be)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function G_(e, t, n) {
  var r = t.pendingProps;
  switch ((xh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Je(t), null);
    case 1:
      return (yt(t.type) && xl(), Je(t), null);
    case 3:
      return (
        (r = t.stateNode),
        mi(),
        we(vt),
        we(Ze),
        Ah(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Oa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tn !== null && (dd(tn), (tn = null)))),
        rd(e, t),
        Je(t),
        null
      );
    case 5:
      Ph(t);
      var s = Wr(Po.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (xy(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return (Je(t), null);
        }
        if (((e = Wr(Sn.current)), Oa(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[bn] = t), (r[Co] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (ye("cancel", r), ye("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Ji.length; s++) ye(Ji[s], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (ye("error", r), ye("load", r));
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              (zf(r, i), ye("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                ye("invalid", r));
              break;
            case "textarea":
              (Hf(r, i), ye("invalid", r));
          }
          (Au(n, i), (s = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Aa(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Aa(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : vo.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ye("scroll", r);
            }
          switch (n) {
            case "input":
              (_a(r), Bf(r, i, !0));
              break;
            case "textarea":
              (_a(r), Vf(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = bl);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Jg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[bn] = t),
            (e[Co] = r),
            by(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Ou(n, r)), n)) {
              case "dialog":
                (ye("cancel", e), ye("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (ye("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < Ji.length; s++) ye(Ji[s], e);
                s = r;
                break;
              case "source":
                (ye("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (ye("error", e), ye("load", e), (s = r));
                break;
              case "details":
                (ye("toggle", e), (s = r));
                break;
              case "input":
                (zf(e, r), (s = ku(e, r)), ye("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = Ee({}, r, { value: void 0 })),
                  ye("invalid", e));
                break;
              case "textarea":
                (Hf(e, r), (s = Ru(e, r)), ye("invalid", e));
                break;
              default:
                s = r;
            }
            (Au(n, s), (a = s));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Zg(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Yg(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && yo(e, l)
                        : typeof l == "number" && yo(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (vo.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && ye("scroll", e)
                          : l != null && oh(e, i, l, o));
              }
            switch (n) {
              case "input":
                (_a(e), Bf(e, r, !1));
                break;
              case "textarea":
                (_a(e), Vf(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rr(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Vs(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Vs(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = bl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Je(t), null);
    case 6:
      if (e && t.stateNode != null) _y(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Wr(Po.current)), Wr(Sn.current), Oa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[bn] = t),
            (i = r.nodeValue !== n) && ((e = Ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                Aa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Aa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[bn] = t),
            (t.stateNode = r));
      }
      return (Je(t), null);
    case 13:
      if (
        (we(xe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (be && Tt !== null && t.mode & 1 && !(t.flags & 128))
          (Fv(), fi(), (t.flags |= 98560), (i = !1));
        else if (((i = Oa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[bn] = t;
          } else
            (fi(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Je(t), (i = !1));
        } else (tn !== null && (dd(tn), (tn = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || xe.current & 1 ? $e === 0 && ($e = 3) : Bh())),
          t.updateQueue !== null && (t.flags |= 4),
          Je(t),
          null);
    case 4:
      return (
        mi(),
        rd(e, t),
        e === null && ko(t.stateNode.containerInfo),
        Je(t),
        null
      );
    case 10:
      return (kh(t.type._context), Je(t), null);
    case 17:
      return (yt(t.type) && xl(), Je(t), null);
    case 19:
      if ((we(xe), (i = t.memoizedState), i === null)) return (Je(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Bi(i, !1);
        else {
          if ($e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Rl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Bi(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (me(xe, (xe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ae() > vi &&
            ((t.flags |= 128), (r = !0), Bi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Rl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !be)
            )
              return (Je(t), null);
          } else
            2 * Ae() - i.renderingStartTime > vi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ae()),
          (t.sibling = null),
          (n = xe.current),
          me(xe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Je(t), null);
    case 22:
    case 23:
      return (
        zh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? St & 1073741824 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Q_(e, t) {
  switch ((xh(t), t.tag)) {
    case 1:
      return (
        yt(t.type) && xl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mi(),
        we(vt),
        we(Ze),
        Ah(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ph(t), null);
    case 13:
      if (
        (we(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        fi();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (we(xe), null);
    case 4:
      return (mi(), null);
    case 10:
      return (kh(t.type._context), null);
    case 22:
    case 23:
      return (zh(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ia = !1,
  Xe = !1,
  J_ = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Fs(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Pe(e, t, r);
      }
    else n.current = null;
}
function sd(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var Np = !1;
function Y_(e, t) {
  if (((zu = vl), (e = Cv()), wh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            d = 0,
            u = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              u !== n || (s !== 0 && u.nodeType !== 3) || (a = o + s),
                u !== i || (r !== 0 && u.nodeType !== 3) || (l = o + r),
                u.nodeType === 3 && (o += u.nodeValue.length),
                (h = u.firstChild) !== null;
            )
              ((f = u), (u = h));
            for (;;) {
              if (u === e) break t;
              if (
                (f === n && ++c === s && (a = o),
                f === i && ++d === r && (l = o),
                (h = u.nextSibling) !== null)
              )
                break;
              ((u = f), (f = u.parentNode));
            }
            u = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bu = { focusedElem: e, selectionRange: n }, vl = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (M = e));
    else
      for (; M !== null; ) {
        t = M;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    w = v.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Jt(t.type, g),
                      w,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (_) {
          Pe(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (M = e));
          break;
        }
        M = t.return;
      }
  return ((v = Np), (Np = !1), v);
}
function ao(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && sd(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function sc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function id(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Sy(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Sy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[bn], delete t[Co], delete t[Wu], delete t[N_], delete t[I_])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Ey(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ip(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ey(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function od(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (od(e, t, n), e = e.sibling; e !== null; )
      (od(e, t, n), (e = e.sibling));
}
function ad(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ad(e, t, n), e = e.sibling; e !== null; )
      (ad(e, t, n), (e = e.sibling));
}
var We = null,
  en = !1;
function Xn(e, t, n) {
  for (n = n.child; n !== null; ) (ky(e, t, n), (n = n.sibling));
}
function ky(e, t, n) {
  if (_n && typeof _n.onCommitFiberUnmount == "function")
    try {
      _n.onCommitFiberUnmount(Jl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Xe || Fs(n, t);
    case 6:
      var r = We,
        s = en;
      ((We = null),
        Xn(e, t, n),
        (We = r),
        (en = s),
        We !== null &&
          (en
            ? ((e = We),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : We.removeChild(n.stateNode)));
      break;
    case 18:
      We !== null &&
        (en
          ? ((e = We),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yc(e.parentNode, n)
              : e.nodeType === 1 && Yc(e, n),
            _o(e))
          : Yc(We, n.stateNode));
      break;
    case 4:
      ((r = We),
        (s = en),
        (We = n.stateNode.containerInfo),
        (en = !0),
        Xn(e, t, n),
        (We = r),
        (en = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && sd(n, t, o),
            (s = s.next));
        } while (s !== r);
      }
      Xn(e, t, n);
      break;
    case 1:
      if (
        !Xe &&
        (Fs(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          Pe(n, t, a);
        }
      Xn(e, t, n);
      break;
    case 21:
      Xn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Xe = (r = Xe) || n.memoizedState !== null), Xn(e, t, n), (Xe = r))
        : Xn(e, t, n);
      break;
    default:
      Xn(e, t, n);
  }
}
function Lp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new J_()),
      t.forEach(function (r) {
        var s = o1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Kt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((We = a.stateNode), (en = !1));
              break e;
            case 3:
              ((We = a.stateNode.containerInfo), (en = !0));
              break e;
            case 4:
              ((We = a.stateNode.containerInfo), (en = !0));
              break e;
          }
          a = a.return;
        }
        if (We === null) throw Error(j(160));
        (ky(i, o, s), (We = null), (en = !1));
        var l = s.alternate;
        (l !== null && (l.return = null), (s.return = null));
      } catch (c) {
        Pe(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Ty(t, e), (t = t.sibling));
}
function Ty(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Kt(t, e), hn(e), r & 4)) {
        try {
          (ao(3, e, e.return), sc(3, e));
        } catch (g) {
          Pe(e, e.return, g);
        }
        try {
          ao(5, e, e.return);
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      break;
    case 1:
      (Kt(t, e), hn(e), r & 512 && n !== null && Fs(n, n.return));
      break;
    case 5:
      if (
        (Kt(t, e),
        hn(e),
        r & 512 && n !== null && Fs(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          yo(s, "");
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && Gg(s, i),
              Ou(a, o));
            var c = Ou(a, i);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                u = l[o + 1];
              d === "style"
                ? Zg(s, u)
                : d === "dangerouslySetInnerHTML"
                  ? Yg(s, u)
                  : d === "children"
                    ? yo(s, u)
                    : oh(s, d, u, c);
            }
            switch (a) {
              case "input":
                Tu(s, i);
                break;
              case "textarea":
                Qg(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Vs(s, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Vs(s, !!i.multiple, i.defaultValue, !0)
                      : Vs(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Co] = i;
          } catch (g) {
            Pe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Kt(t, e), hn(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Kt(t, e), hn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          _o(t.containerInfo);
        } catch (g) {
          Pe(e, e.return, g);
        }
      break;
    case 4:
      (Kt(t, e), hn(e));
      break;
    case 13:
      (Kt(t, e),
        hn(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Uh = Ae())),
        r & 4 && Lp(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Xe = (c = Xe) || d), Kt(t, e), (Xe = c)) : Kt(t, e),
        hn(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (u = M = d; M !== null; ) {
              switch (((f = M), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ao(4, f, f.return);
                  break;
                case 1:
                  Fs(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (g) {
                      Pe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Fs(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    $p(u);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (M = h)) : $p(u);
            }
            d = d.sibling;
          }
        e: for (d = null, u = e; ; ) {
          if (u.tag === 5) {
            if (d === null) {
              d = u;
              try {
                ((s = u.stateNode),
                  c
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = u.stateNode),
                      (l = u.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Xg("display", o))));
              } catch (g) {
                Pe(e, e.return, g);
              }
            }
          } else if (u.tag === 6) {
            if (d === null)
              try {
                u.stateNode.nodeValue = c ? "" : u.memoizedProps;
              } catch (g) {
                Pe(e, e.return, g);
              }
          } else if (
            ((u.tag !== 22 && u.tag !== 23) ||
              u.memoizedState === null ||
              u === e) &&
            u.child !== null
          ) {
            ((u.child.return = u), (u = u.child));
            continue;
          }
          if (u === e) break e;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === e) break e;
            (d === u && (d = null), (u = u.return));
          }
          (d === u && (d = null),
            (u.sibling.return = u.return),
            (u = u.sibling));
        }
      }
      break;
    case 19:
      (Kt(t, e), hn(e), r & 4 && Lp(e));
      break;
    case 21:
      break;
    default:
      (Kt(t, e), hn(e));
  }
}
function hn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ey(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (yo(s, ""), (r.flags &= -33));
          var i = Ip(e);
          ad(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ip(e);
          od(e, a, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      Pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function X_(e, t, n) {
  ((M = e), Cy(e));
}
function Cy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var s = M,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Ia;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Xe;
        a = Ia;
        var c = Xe;
        if (((Ia = o), (Xe = l) && !c))
          for (M = s; M !== null; )
            ((o = M),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Mp(s)
                : l !== null
                  ? ((l.return = o), (M = l))
                  : Mp(s));
        for (; i !== null; ) ((M = i), Cy(i), (i = i.sibling));
        ((M = s), (Ia = a), (Xe = c));
      }
      Dp(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (M = i)) : Dp(e);
  }
}
function Dp(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || sc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && bp(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bp(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var u = d.dehydrated;
                    u !== null && _o(u);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Xe || (t.flags & 512 && id(t));
      } catch (f) {
        Pe(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (M = n));
      break;
    }
    M = t.return;
  }
}
function $p(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (M = n));
      break;
    }
    M = t.return;
  }
}
function Mp(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            sc(4, t);
          } catch (l) {
            Pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Pe(t, s, l);
            }
          }
          var i = t.return;
          try {
            id(t);
          } catch (l) {
            Pe(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            id(t);
          } catch (l) {
            Pe(t, o, l);
          }
      }
    } catch (l) {
      Pe(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (M = a));
      break;
    }
    M = t.return;
  }
}
var Z_ = Math.ceil,
  Ol = Wn.ReactCurrentDispatcher,
  $h = Wn.ReactCurrentOwner,
  $t = Wn.ReactCurrentBatchConfig,
  ae = 0,
  Be = null,
  Ne = null,
  Ke = 0,
  St = 0,
  zs = Ir(0),
  $e = 0,
  No = null,
  ls = 0,
  ic = 0,
  Mh = 0,
  lo = null,
  mt = null,
  Uh = 0,
  vi = 1 / 0,
  An = null,
  jl = !1,
  ld = null,
  Er = null,
  La = !1,
  vr = null,
  Nl = 0,
  co = 0,
  cd = null,
  il = -1,
  ol = 0;
function ot() {
  return ae & 6 ? Ae() : il !== -1 ? il : (il = Ae());
}
function kr(e) {
  return e.mode & 1
    ? ae & 2 && Ke !== 0
      ? Ke & -Ke
      : D_.transition !== null
        ? (ol === 0 && (ol = dv()), ol)
        : ((e = de),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yv(e.type))),
          e)
    : 1;
}
function rn(e, t, n, r) {
  if (50 < co) throw ((co = 0), (cd = null), Error(j(185)));
  (na(e, n, r),
    (!(ae & 2) || e !== Be) &&
      (e === Be && (!(ae & 2) && (ic |= n), $e === 4 && ir(e, Ke)),
      wt(e, r),
      n === 1 && ae === 0 && !(t.mode & 1) && ((vi = Ae() + 500), tc && Lr())));
}
function wt(e, t) {
  var n = e.callbackNode;
  Dx(e, t);
  var r = gl(e, e === Be ? Ke : 0);
  if (r === 0)
    (n !== null && Kf(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Kf(n), t === 1))
      (e.tag === 0 ? L_(Up.bind(null, e)) : $v(Up.bind(null, e)),
        O_(function () {
          !(ae & 6) && Lr();
        }),
        (n = null));
    else {
      switch (hv(r)) {
        case 1:
          n = dh;
          break;
        case 4:
          n = cv;
          break;
        case 16:
          n = ml;
          break;
        case 536870912:
          n = uv;
          break;
        default:
          n = ml;
      }
      n = Ly(n, Ry.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Ry(e, t) {
  if (((il = -1), (ol = 0), ae & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Qs() && e.callbackNode !== n) return null;
  var r = gl(e, e === Be ? Ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Il(e, r);
  else {
    t = r;
    var s = ae;
    ae |= 2;
    var i = Ay();
    (Be !== e || Ke !== t) && ((An = null), (vi = Ae() + 500), ns(e, t));
    do
      try {
        n1();
        break;
      } catch (a) {
        Py(e, a);
      }
    while (!0);
    (Eh(),
      (Ol.current = i),
      (ae = s),
      Ne !== null ? (t = 0) : ((Be = null), (Ke = 0), (t = $e)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Du(e)), s !== 0 && ((r = s), (t = ud(e, s)))), t === 1)
    )
      throw ((n = No), ns(e, 0), ir(e, r), wt(e, Ae()), n);
    if (t === 6) ir(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !e1(s) &&
          ((t = Il(e, r)),
          t === 2 && ((i = Du(e)), i !== 0 && ((r = i), (t = ud(e, i)))),
          t === 1))
      )
        throw ((n = No), ns(e, 0), ir(e, r), wt(e, Ae()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Fr(e, mt, An);
          break;
        case 3:
          if (
            (ir(e, r), (r & 130023424) === r && ((t = Uh + 500 - Ae()), 10 < t))
          ) {
            if (gl(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (ot(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = Vu(Fr.bind(null, e, mt, An), t);
            break;
          }
          Fr(e, mt, An);
          break;
        case 4:
          if ((ir(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - nn(r);
            ((i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i));
          }
          if (
            ((r = s),
            (r = Ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Z_(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vu(Fr.bind(null, e, mt, An), r);
            break;
          }
          Fr(e, mt, An);
          break;
        case 5:
          Fr(e, mt, An);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return (wt(e, Ae()), e.callbackNode === n ? Ry.bind(null, e) : null);
}
function ud(e, t) {
  var n = lo;
  return (
    e.current.memoizedState.isDehydrated && (ns(e, t).flags |= 256),
    (e = Il(e, t)),
    e !== 2 && ((t = mt), (mt = n), t !== null && dd(t)),
    e
  );
}
function dd(e) {
  mt === null ? (mt = e) : mt.push.apply(mt, e);
}
function e1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!on(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function ir(e, t) {
  for (
    t &= ~Mh,
      t &= ~ic,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - nn(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Up(e) {
  if (ae & 6) throw Error(j(327));
  Qs();
  var t = gl(e, 0);
  if (!(t & 1)) return (wt(e, Ae()), null);
  var n = Il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Du(e);
    r !== 0 && ((t = r), (n = ud(e, r)));
  }
  if (n === 1) throw ((n = No), ns(e, 0), ir(e, t), wt(e, Ae()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Fr(e, mt, An),
    wt(e, Ae()),
    null
  );
}
function Fh(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ((ae = n), ae === 0 && ((vi = Ae() + 500), tc && Lr()));
  }
}
function cs(e) {
  vr !== null && vr.tag === 0 && !(ae & 6) && Qs();
  var t = ae;
  ae |= 1;
  var n = $t.transition,
    r = de;
  try {
    if ((($t.transition = null), (de = 1), e)) return e();
  } finally {
    ((de = r), ($t.transition = n), (ae = t), !(ae & 6) && Lr());
  }
}
function zh() {
  ((St = zs.current), we(zs));
}
function ns(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), A_(n)), Ne !== null))
    for (n = Ne.return; n !== null; ) {
      var r = n;
      switch ((xh(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && xl());
          break;
        case 3:
          (mi(), we(vt), we(Ze), Ah());
          break;
        case 5:
          Ph(r);
          break;
        case 4:
          mi();
          break;
        case 13:
          we(xe);
          break;
        case 19:
          we(xe);
          break;
        case 10:
          kh(r.type._context);
          break;
        case 22:
        case 23:
          zh();
      }
      n = n.return;
    }
  if (
    ((Be = e),
    (Ne = e = Tr(e.current, null)),
    (Ke = St = t),
    ($e = 0),
    (No = null),
    (Mh = ic = ls = 0),
    (mt = lo = null),
    Vr !== null)
  ) {
    for (t = 0; t < Vr.length; t++)
      if (((n = Vr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = s), (r.next = o));
        }
        n.pending = r;
      }
    Vr = null;
  }
  return e;
}
function Py(e, t) {
  do {
    var n = Ne;
    try {
      if ((Eh(), (nl.current = Al), Pl)) {
        for (var r = Se.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        Pl = !1;
      }
      if (
        ((as = 0),
        (ze = Le = Se = null),
        (oo = !1),
        (Ao = 0),
        ($h.current = null),
        n === null || n.return === null)
      ) {
        (($e = 1), (No = t), (Ne = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Ke),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = a,
            u = d.tag;
          if (!(d.mode & 1) && (u === 0 || u === 11 || u === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var h = Tp(o);
          if (h !== null) {
            ((h.flags &= -257),
              Cp(h, o, a, i, t),
              h.mode & 1 && kp(i, c, t),
              (t = h),
              (l = c));
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              (g.add(l), (t.updateQueue = g));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (kp(i, c, t), Bh());
              break e;
            }
            l = Error(j(426));
          }
        } else if (be && a.mode & 1) {
          var w = Tp(o);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              Cp(w, o, a, i, t),
              _h(gi(l, a)));
            break e;
          }
        }
        ((i = l = gi(l, a)),
          $e !== 4 && ($e = 2),
          lo === null ? (lo = [i]) : lo.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var p = hy(i, l, t);
              wp(i, p);
              break e;
            case 1:
              a = l;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Er === null || !Er.has(y))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var _ = fy(i, a, t);
                wp(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      jy(n);
    } catch (S) {
      ((t = S), Ne === n && n !== null && (Ne = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Ay() {
  var e = Ol.current;
  return ((Ol.current = Al), e === null ? Al : e);
}
function Bh() {
  (($e === 0 || $e === 3 || $e === 2) && ($e = 4),
    Be === null || (!(ls & 268435455) && !(ic & 268435455)) || ir(Be, Ke));
}
function Il(e, t) {
  var n = ae;
  ae |= 2;
  var r = Ay();
  (Be !== e || Ke !== t) && ((An = null), ns(e, t));
  do
    try {
      t1();
      break;
    } catch (s) {
      Py(e, s);
    }
  while (!0);
  if ((Eh(), (ae = n), (Ol.current = r), Ne !== null)) throw Error(j(261));
  return ((Be = null), (Ke = 0), $e);
}
function t1() {
  for (; Ne !== null; ) Oy(Ne);
}
function n1() {
  for (; Ne !== null && !Cx(); ) Oy(Ne);
}
function Oy(e) {
  var t = Iy(e.alternate, e, St);
  ((e.memoizedProps = e.pendingProps),
    t === null ? jy(e) : (Ne = t),
    ($h.current = null));
}
function jy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Q_(n, t)), n !== null)) {
        ((n.flags &= 32767), (Ne = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        (($e = 6), (Ne = null));
        return;
      }
    } else if (((n = G_(n, t, St)), n !== null)) {
      Ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  $e === 0 && ($e = 5);
}
function Fr(e, t, n) {
  var r = de,
    s = $t.transition;
  try {
    (($t.transition = null), (de = 1), r1(e, t, n, r));
  } finally {
    (($t.transition = s), (de = r));
  }
  return null;
}
function r1(e, t, n, r) {
  do Qs();
  while (vr !== null);
  if (ae & 6) throw Error(j(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    ($x(e, i),
    e === Be && ((Ne = Be = null), (Ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      La ||
      ((La = !0),
      Ly(ml, function () {
        return (Qs(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = $t.transition), ($t.transition = null));
    var o = de;
    de = 1;
    var a = ae;
    ((ae |= 4),
      ($h.current = null),
      Y_(e, n),
      Ty(n, e),
      S_(Bu),
      (vl = !!zu),
      (Bu = zu = null),
      (e.current = n),
      X_(n),
      Rx(),
      (ae = a),
      (de = o),
      ($t.transition = i));
  } else e.current = n;
  if (
    (La && ((La = !1), (vr = e), (Nl = s)),
    (i = e.pendingLanes),
    i === 0 && (Er = null),
    Ox(n.stateNode),
    wt(e, Ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (jl) throw ((jl = !1), (e = ld), (ld = null), e);
  return (
    Nl & 1 && e.tag !== 0 && Qs(),
    (i = e.pendingLanes),
    i & 1 ? (e === cd ? co++ : ((co = 0), (cd = e))) : (co = 0),
    Lr(),
    null
  );
}
function Qs() {
  if (vr !== null) {
    var e = hv(Nl),
      t = $t.transition,
      n = de;
    try {
      if ((($t.transition = null), (de = 16 > e ? 16 : e), vr === null))
        var r = !1;
      else {
        if (((e = vr), (vr = null), (Nl = 0), ae & 6)) throw Error(j(331));
        var s = ae;
        for (ae |= 4, M = e.current; M !== null; ) {
          var i = M,
            o = i.child;
          if (M.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (M = c; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ao(8, d, i);
                  }
                  var u = d.child;
                  if (u !== null) ((u.return = d), (M = u));
                  else
                    for (; M !== null; ) {
                      d = M;
                      var f = d.sibling,
                        h = d.return;
                      if ((Sy(d), d === c)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = h), (M = f));
                        break;
                      }
                      M = h;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var w = g.sibling;
                    ((g.sibling = null), (g = w));
                  } while (g !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (M = o));
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ao(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                ((p.return = i.return), (M = p));
                break e;
              }
              M = i.return;
            }
        }
        var m = e.current;
        for (M = m; M !== null; ) {
          o = M;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) ((y.return = o), (M = y));
          else
            e: for (o = m; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sc(9, a);
                  }
                } catch (S) {
                  Pe(a, a.return, S);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                ((_.return = a.return), (M = _));
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((ae = s), Lr(), _n && typeof _n.onPostCommitFiberRoot == "function")
        )
          try {
            _n.onPostCommitFiberRoot(Jl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((de = n), ($t.transition = t));
    }
  }
  return !1;
}
function Fp(e, t, n) {
  ((t = gi(n, t)),
    (t = hy(e, t, 1)),
    (e = Sr(e, t, 1)),
    (t = ot()),
    e !== null && (na(e, 1, t), wt(e, t)));
}
function Pe(e, t, n) {
  if (e.tag === 3) Fp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Er === null || !Er.has(r)))
        ) {
          ((e = gi(n, e)),
            (e = fy(t, e, 1)),
            (t = Sr(t, e, 1)),
            (e = ot()),
            t !== null && (na(t, 1, e), wt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function s1(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ot()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Be === e &&
      (Ke & n) === n &&
      ($e === 4 || ($e === 3 && (Ke & 130023424) === Ke && 500 > Ae() - Uh)
        ? ns(e, 0)
        : (Mh |= n)),
    wt(e, t));
}
function Ny(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ka), (ka <<= 1), !(ka & 130023424) && (ka = 4194304))
      : (t = 1));
  var n = ot();
  ((e = Fn(e, t)), e !== null && (na(e, t, n), wt(e, n)));
}
function i1(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Ny(e, n));
}
function o1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  (r !== null && r.delete(t), Ny(e, n));
}
var Iy;
Iy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || vt.current) gt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((gt = !1), K_(e, t, n));
      gt = !!(e.flags & 131072);
    }
  else ((gt = !1), be && t.flags & 1048576 && Mv(t, El, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (sl(e, t), (e = t.pendingProps));
      var s = hi(t, Ze.current);
      (Gs(t, n), (s = jh(null, t, r, e, s, n)));
      var i = Nh();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            yt(r) ? ((i = !0), _l(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Ch(t),
            (s.updater = rc),
            (t.stateNode = s),
            (s._reactInternals = t),
            Yu(t, r, e, n),
            (t = ed(null, t, r, !0, i, n)))
          : ((t.tag = 0), be && i && bh(t), it(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (sl(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = l1(r)),
          (e = Jt(r, e)),
          s)
        ) {
          case 0:
            t = Zu(null, t, r, e, n);
            break e;
          case 1:
            t = Ap(null, t, r, e, n);
            break e;
          case 11:
            t = Rp(null, t, r, e, n);
            break e;
          case 14:
            t = Pp(null, t, r, Jt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Jt(r, s)),
        Zu(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Jt(r, s)),
        Ap(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((vy(t), e === null)) throw Error(j(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          Vv(e, t),
          Cl(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = gi(Error(j(423)), t)), (t = Op(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = gi(Error(j(424)), t)), (t = Op(e, t, r, n, s)));
            break e;
          } else
            for (
              Tt = _r(t.stateNode.containerInfo.firstChild),
                Ct = t,
                be = !0,
                tn = null,
                n = Bv(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((fi(), r === s)) {
            t = zn(e, t, n);
            break e;
          }
          it(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wv(t),
        e === null && Gu(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Hu(r, s) ? (o = null) : i !== null && Hu(r, i) && (t.flags |= 32),
        gy(e, t),
        it(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Gu(t), null);
    case 13:
      return yy(e, t, n);
    case 4:
      return (
        Rh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pi(t, null, r, n)) : it(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Jt(r, s)),
        Rp(e, t, r, s, n)
      );
    case 7:
      return (it(e, t, t.pendingProps, n), t.child);
    case 8:
      return (it(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (it(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          me(kl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (on(i.value, o)) {
            if (i.children === s.children && !vt.current) {
              t = zn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = $n(-1, n & -n)), (l.tag = 2));
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        (d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Qu(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(j(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Qu(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (it(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Gs(t, n),
        (s = Mt(s)),
        (r = r(s)),
        (t.flags |= 1),
        it(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Jt(r, t.pendingProps)),
        (s = Jt(r.type, s)),
        Pp(e, t, r, s, n)
      );
    case 15:
      return py(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Jt(r, s)),
        sl(e, t),
        (t.tag = 1),
        yt(r) ? ((e = !0), _l(t)) : (e = !1),
        Gs(t, n),
        dy(t, r, s),
        Yu(t, r, s, n),
        ed(null, t, r, !0, e, n)
      );
    case 19:
      return wy(e, t, n);
    case 22:
      return my(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Ly(e, t) {
  return lv(e, t);
}
function a1(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Dt(e, t, n, r) {
  return new a1(e, t, n, r);
}
function Hh(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function l1(e) {
  if (typeof e == "function") return Hh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lh)) return 11;
    if (e === ch) return 14;
  }
  return 2;
}
function Tr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Dt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function al(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Hh(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Os:
        return rs(n.children, s, i, t);
      case ah:
        ((o = 8), (s |= 8));
        break;
      case xu:
        return (
          (e = Dt(12, n, t, s | 2)),
          (e.elementType = xu),
          (e.lanes = i),
          e
        );
      case _u:
        return ((e = Dt(13, n, t, s)), (e.elementType = _u), (e.lanes = i), e);
      case Su:
        return ((e = Dt(19, n, t, s)), (e.elementType = Su), (e.lanes = i), e);
      case Wg:
        return oc(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hg:
              o = 10;
              break e;
            case Vg:
              o = 9;
              break e;
            case lh:
              o = 11;
              break e;
            case ch:
              o = 14;
              break e;
            case nr:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Dt(o, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function rs(e, t, n, r) {
  return ((e = Dt(7, e, r, t)), (e.lanes = n), e);
}
function oc(e, t, n, r) {
  return (
    (e = Dt(22, e, r, t)),
    (e.elementType = Wg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function iu(e, t, n) {
  return ((e = Dt(6, e, null, t)), (e.lanes = n), e);
}
function ou(e, t, n) {
  return (
    (t = Dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function c1(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fc(0)),
    (this.expirationTimes = Fc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function Vh(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new c1(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Dt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ch(i),
    e
  );
}
function u1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: As,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dy(e) {
  if (!e) return Pr;
  e = e._reactInternals;
  e: {
    if (ps(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (yt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (yt(n)) return Dv(e, n, t);
  }
  return t;
}
function $y(e, t, n, r, s, i, o, a, l) {
  return (
    (e = Vh(n, r, !0, e, s, i, o, a, l)),
    (e.context = Dy(null)),
    (n = e.current),
    (r = ot()),
    (s = kr(n)),
    (i = $n(r, s)),
    (i.callback = t ?? null),
    Sr(n, i, s),
    (e.current.lanes = s),
    na(e, s, r),
    wt(e, r),
    e
  );
}
function ac(e, t, n, r) {
  var s = t.current,
    i = ot(),
    o = kr(s);
  return (
    (n = Dy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $n(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Sr(s, t, o)),
    e !== null && (rn(e, s, o, i), tl(e, s, o)),
    o
  );
}
function Ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wh(e, t) {
  (zp(e, t), (e = e.alternate) && zp(e, t));
}
function d1() {
  return null;
}
var My =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qh(e) {
  this._internalRoot = e;
}
lc.prototype.render = qh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  ac(e, t, null, null);
};
lc.prototype.unmount = qh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (cs(function () {
      ac(null, e, null, null);
    }),
      (t[Un] = null));
  }
};
function lc(e) {
  this._internalRoot = e;
}
lc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = mv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < sr.length && t !== 0 && t < sr[n].priority; n++);
    (sr.splice(n, 0, e), n === 0 && vv(e));
  }
};
function Kh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bp() {}
function h1(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Ll(o);
        i.call(c);
      };
    }
    var o = $y(t, r, e, 0, null, !1, !1, "", Bp);
    return (
      (e._reactRootContainer = o),
      (e[Un] = o.current),
      ko(e.nodeType === 8 ? e.parentNode : e),
      cs(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Ll(l);
      a.call(c);
    };
  }
  var l = Vh(e, 0, !1, null, null, !1, !1, "", Bp);
  return (
    (e._reactRootContainer = l),
    (e[Un] = l.current),
    ko(e.nodeType === 8 ? e.parentNode : e),
    cs(function () {
      ac(t, l, n, r);
    }),
    l
  );
}
function uc(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Ll(o);
        a.call(l);
      };
    }
    ac(t, o, e, s);
  } else o = h1(n, t, e, s, r);
  return Ll(o);
}
fv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qi(t.pendingLanes);
        n !== 0 &&
          (hh(t, n | 1), wt(t, Ae()), !(ae & 6) && ((vi = Ae() + 500), Lr()));
      }
      break;
    case 13:
      (cs(function () {
        var r = Fn(e, 1);
        if (r !== null) {
          var s = ot();
          rn(r, e, 1, s);
        }
      }),
        Wh(e, 1));
  }
};
fh = function (e) {
  if (e.tag === 13) {
    var t = Fn(e, 134217728);
    if (t !== null) {
      var n = ot();
      rn(t, e, 134217728, n);
    }
    Wh(e, 134217728);
  }
};
pv = function (e) {
  if (e.tag === 13) {
    var t = kr(e),
      n = Fn(e, t);
    if (n !== null) {
      var r = ot();
      rn(n, e, t, r);
    }
    Wh(e, t);
  }
};
mv = function () {
  return de;
};
gv = function (e, t) {
  var n = de;
  try {
    return ((de = e), t());
  } finally {
    de = n;
  }
};
Nu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Tu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = ec(r);
            if (!s) throw Error(j(90));
            (Kg(r), Tu(r, s));
          }
        }
      }
      break;
    case "textarea":
      Qg(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Vs(e, !!n.multiple, t, !1));
  }
};
nv = Fh;
rv = cs;
var f1 = { usingClientEntryPoint: !1, Events: [sa, Ls, ec, ev, tv, Fh] },
  Hi = {
    findFiberByHostInstance: Hr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  p1 = {
    bundleType: Hi.bundleType,
    version: Hi.version,
    rendererPackageName: Hi.rendererPackageName,
    rendererConfig: Hi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = ov(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Hi.findFiberByHostInstance || d1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Da = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Da.isDisabled && Da.supportsFiber)
    try {
      ((Jl = Da.inject(p1)), (_n = Da));
    } catch {}
}
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f1;
At.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Kh(t)) throw Error(j(200));
  return u1(e, t, null, n);
};
At.createRoot = function (e, t) {
  if (!Kh(e)) throw Error(j(299));
  var n = !1,
    r = "",
    s = My;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Vh(e, 1, !1, null, null, n, !1, r, s)),
    (e[Un] = t.current),
    ko(e.nodeType === 8 ? e.parentNode : e),
    new qh(t)
  );
};
At.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return ((e = ov(t)), (e = e === null ? null : e.stateNode), e);
};
At.flushSync = function (e) {
  return cs(e);
};
At.hydrate = function (e, t, n) {
  if (!cc(t)) throw Error(j(200));
  return uc(null, e, t, !0, n);
};
At.hydrateRoot = function (e, t, n) {
  if (!Kh(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = My;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = $y(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[Un] = t.current),
    ko(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new lc(t);
};
At.render = function (e, t, n) {
  if (!cc(t)) throw Error(j(200));
  return uc(null, e, t, !1, n);
};
At.unmountComponentAtNode = function (e) {
  if (!cc(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (cs(function () {
        uc(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Un] = null));
        });
      }),
      !0)
    : !1;
};
At.unstable_batchedUpdates = Fh;
At.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!cc(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return uc(e, t, n, !1, r);
};
At.version = "18.3.1-next-f1338f8080-20240426";
function Uy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uy);
    } catch (e) {
      console.error(e);
    }
}
(Uy(), (Ug.exports = At));
var Ei = Ug.exports;
const Fy = Cg(Ei);
var zy,
  Hp = Ei;
((zy = Hp.createRoot), Hp.hydrateRoot);
const m1 = "modulepreload",
  g1 = function (e) {
    return "/" + e;
  },
  Vp = {},
  Gh = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        a =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      s = Promise.allSettled(
        n.map((l) => {
          if (((l = g1(l)), l in Vp)) return;
          Vp[l] = !0;
          const c = l.endsWith(".css"),
            d = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${d}`)) return;
          const u = document.createElement("link");
          if (
            ((u.rel = c ? "stylesheet" : m1),
            c || (u.as = "script"),
            (u.crossOrigin = ""),
            (u.href = l),
            a && u.setAttribute("nonce", a),
            document.head.appendChild(u),
            c)
          )
            return new Promise((f, h) => {
              (u.addEventListener("load", f),
                u.addEventListener("error", () =>
                  h(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    function i(o) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
        throw o;
    }
    return s.then((o) => {
      for (const a of o || []) a.status === "rejected" && i(a.reason);
      return t().catch(i);
    });
  },
  v1 = 1,
  y1 = 1e6;
let au = 0;
function w1() {
  return ((au = (au + 1) % Number.MAX_SAFE_INTEGER), au.toString());
}
const lu = new Map(),
  Wp = (e) => {
    if (lu.has(e)) return;
    const t = setTimeout(() => {
      (lu.delete(e), uo({ type: "REMOVE_TOAST", toastId: e }));
    }, y1);
    lu.set(e, t);
  },
  b1 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, v1) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Wp(n)
            : e.toasts.forEach((r) => {
                Wp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  ll = [];
let cl = { toasts: [] };
function uo(e) {
  ((cl = b1(cl, e)),
    ll.forEach((t) => {
      t(cl);
    }));
}
function x1({ ...e }) {
  const t = w1(),
    n = (s) => uo({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
    r = () => uo({ type: "DISMISS_TOAST", toastId: t });
  return (
    uo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (s) => {
          s || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function _1() {
  const [e, t] = x.useState(cl);
  return (
    x.useEffect(
      () => (
        ll.push(t),
        () => {
          const n = ll.indexOf(t);
          n > -1 && ll.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: x1,
      dismiss: (n) => uo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function De(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function qp(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function By(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = qp(s, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : qp(e[s], null);
        }
      };
  };
}
function an(...e) {
  return x.useCallback(By(...e), e);
}
function tN(e, t) {
  const n = x.createContext(t),
    r = (i) => {
      const { children: o, ...a } = i,
        l = x.useMemo(() => a, Object.values(a));
      return b.jsx(n.Provider, { value: l, children: o });
    };
  r.displayName = e + "Provider";
  function s(i) {
    const o = x.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, s];
}
function oa(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = x.createContext(o),
      l = n.length;
    n = [...n, o];
    const c = (u) => {
      var p;
      const { scope: f, children: h, ...v } = u,
        g = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a,
        w = x.useMemo(() => v, Object.values(v));
      return b.jsx(g.Provider, { value: w, children: h });
    };
    c.displayName = i + "Provider";
    function d(u, f) {
      var g;
      const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        v = x.useContext(h);
      if (v) return v;
      if (o !== void 0) return o;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return [c, d];
  }
  const s = () => {
    const i = n.map((o) => x.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((s.scopeName = e), [r, S1(s, ...t)]);
}
function S1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = r.reduce((a, { useScope: l, scopeName: c }) => {
        const u = l(i)[`__scope${c}`];
        return { ...a, ...u };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Dl(e) {
  const t = k1(e),
    n = x.forwardRef((r, s) => {
      const { children: i, ...o } = r,
        a = x.Children.toArray(i),
        l = a.find(C1);
      if (l) {
        const c = l.props.children,
          d = a.map((u) =>
            u === l
              ? x.Children.count(c) > 1
                ? x.Children.only(null)
                : x.isValidElement(c)
                  ? c.props.children
                  : null
              : u,
          );
        return b.jsx(t, {
          ...o,
          ref: s,
          children: x.isValidElement(c) ? x.cloneElement(c, void 0, d) : null,
        });
      }
      return b.jsx(t, { ...o, ref: s, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var E1 = Dl("Slot");
function k1(e) {
  const t = x.forwardRef((n, r) => {
    const { children: s, ...i } = n;
    if (x.isValidElement(s)) {
      const o = P1(s),
        a = R1(i, s.props);
      return (
        s.type !== x.Fragment && (a.ref = r ? By(r, o) : o),
        x.cloneElement(s, a)
      );
    }
    return x.Children.count(s) > 1 ? x.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Hy = Symbol("radix.slottable");
function T1(e) {
  const t = ({ children: n }) => b.jsx(b.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = Hy), t);
}
function C1(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Hy
  );
}
function R1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? s && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (s(...a), l);
          })
        : s && (n[r] = s)
      : r === "style"
        ? (n[r] = { ...s, ...i })
        : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function P1(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function A1(e) {
  const t = e + "CollectionProvider",
    [n, r] = oa(t),
    [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (g) => {
      const { scope: w, children: p } = g,
        m = I.useRef(null),
        y = I.useRef(new Map()).current;
      return b.jsx(s, { scope: w, itemMap: y, collectionRef: m, children: p });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = Dl(a),
    c = I.forwardRef((g, w) => {
      const { scope: p, children: m } = g,
        y = i(a, p),
        _ = an(w, y.collectionRef);
      return b.jsx(l, { ref: _, children: m });
    });
  c.displayName = a;
  const d = e + "CollectionItemSlot",
    u = "data-radix-collection-item",
    f = Dl(d),
    h = I.forwardRef((g, w) => {
      const { scope: p, children: m, ...y } = g,
        _ = I.useRef(null),
        S = an(w, _),
        E = i(d, p);
      return (
        I.useEffect(
          () => (
            E.itemMap.set(_, { ref: _, ...y }),
            () => void E.itemMap.delete(_)
          ),
        ),
        b.jsx(f, { [u]: "", ref: S, children: m })
      );
    });
  h.displayName = d;
  function v(g) {
    const w = i(e + "CollectionConsumer", g);
    return I.useCallback(() => {
      const m = w.collectionRef.current;
      if (!m) return [];
      const y = Array.from(m.querySelectorAll(`[${u}]`));
      return Array.from(w.itemMap.values()).sort(
        (E, T) => y.indexOf(E.ref.current) - y.indexOf(T.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: o, Slot: c, ItemSlot: h }, v, r];
}
var O1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  et = O1.reduce((e, t) => {
    const n = Dl(`Primitive.${t}`),
      r = x.forwardRef((s, i) => {
        const { asChild: o, ...a } = s,
          l = o ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          b.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function Vy(e, t) {
  e && Ei.flushSync(() => e.dispatchEvent(t));
}
function Ar(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function j1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ar(e);
  x.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var N1 = "DismissableLayer",
  hd = "dismissableLayer.update",
  I1 = "dismissableLayer.pointerDownOutside",
  L1 = "dismissableLayer.focusOutside",
  Kp,
  Wy = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Qh = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      c = x.useContext(Wy),
      [d, u] = x.useState(null),
      f =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = x.useState({}),
      v = an(t, (T) => u(T)),
      g = Array.from(c.layers),
      [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = g.indexOf(w),
      m = d ? g.indexOf(d) : -1,
      y = c.layersWithOutsidePointerEventsDisabled.size > 0,
      _ = m >= p,
      S = $1((T) => {
        const C = T.target,
          P = [...c.branches].some((O) => O.contains(C));
        !_ ||
          P ||
          (s == null || s(T),
          o == null || o(T),
          T.defaultPrevented || a == null || a());
      }, f),
      E = M1((T) => {
        const C = T.target;
        [...c.branches].some((O) => O.contains(C)) ||
          (i == null || i(T),
          o == null || o(T),
          T.defaultPrevented || a == null || a());
      }, f);
    return (
      j1((T) => {
        m === c.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, f),
      x.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Kp = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            Gp(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Kp);
            }
          );
      }, [d, f, n, c]),
      x.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            Gp());
        },
        [d, c],
      ),
      x.useEffect(() => {
        const T = () => h({});
        return (
          document.addEventListener(hd, T),
          () => document.removeEventListener(hd, T)
        );
      }, []),
      b.jsx(et.div, {
        ...l,
        ref: v,
        style: {
          pointerEvents: y ? (_ ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: De(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: De(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: De(
          e.onPointerDownCapture,
          S.onPointerDownCapture,
        ),
      })
    );
  });
Qh.displayName = N1;
var D1 = "DismissableLayerBranch",
  qy = x.forwardRef((e, t) => {
    const n = x.useContext(Wy),
      r = x.useRef(null),
      s = an(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      b.jsx(et.div, { ...e, ref: s })
    );
  });
qy.displayName = D1;
function $1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ar(e),
    r = x.useRef(!1),
    s = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Ky(I1, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function M1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ar(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          Ky(L1, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Gp() {
  const e = new CustomEvent(hd);
  document.dispatchEvent(e);
}
function Ky(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? Vy(s, i) : s.dispatchEvent(i));
}
var U1 = Qh,
  F1 = qy,
  Bn = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  z1 = "Portal",
  Gy = x.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = x.useState(!1);
    Bn(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? Fy.createPortal(b.jsx(et.div, { ...r, ref: t }), o) : null;
  });
Gy.displayName = z1;
function B1(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Jh = (e) => {
  const { present: t, children: n } = e,
    r = H1(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = an(r.ref, V1(s));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(s, { ref: i })
    : null;
};
Jh.displayName = "Presence";
function H1(e) {
  const [t, n] = x.useState(),
    r = x.useRef(null),
    s = x.useRef(e),
    i = x.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = B1(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const c = $a(r.current);
      i.current = a === "mounted" ? c : "none";
    }, [a]),
    Bn(() => {
      const c = r.current,
        d = s.current;
      if (d !== e) {
        const f = i.current,
          h = $a(c);
        (e
          ? l("MOUNT")
          : h === "none" || (c == null ? void 0 : c.display) === "none"
            ? l("UNMOUNT")
            : l(d && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, l]),
    Bn(() => {
      if (t) {
        let c;
        const d = t.ownerDocument.defaultView ?? window,
          u = (h) => {
            const g = $a(r.current).includes(h.animationName);
            if (h.target === t && g && (l("ANIMATION_END"), !s.current)) {
              const w = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (c = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                })));
            }
          },
          f = (h) => {
            h.target === t && (i.current = $a(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            (d.clearTimeout(c),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: x.useCallback((c) => {
        ((r.current = c ? getComputedStyle(c) : null), n(c));
      }, []),
    }
  );
}
function $a(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function V1(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var W1 = rh[" useInsertionEffect ".trim().toString()] || Bn;
function Qy({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [s, i, o] = q1({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : s;
  {
    const d = x.useRef(e !== void 0);
    x.useEffect(() => {
      const u = d.current;
      (u !== a &&
        console.warn(
          `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (d.current = a));
    }, [a, r]);
  }
  const c = x.useCallback(
    (d) => {
      var u;
      if (a) {
        const f = K1(d) ? d(e) : d;
        f !== e && ((u = o.current) == null || u.call(o, f));
      } else i(d);
    },
    [a, e, i, o],
  );
  return [l, c];
}
function q1({ defaultProp: e, onChange: t }) {
  const [n, r] = x.useState(e),
    s = x.useRef(n),
    i = x.useRef(t);
  return (
    W1(() => {
      i.current = t;
    }, [t]),
    x.useEffect(() => {
      var o;
      s.current !== n &&
        ((o = i.current) == null || o.call(i, n), (s.current = n));
    }, [n, s]),
    [n, r, i]
  );
}
function K1(e) {
  return typeof e == "function";
}
var G1 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Q1 = "VisuallyHidden",
  dc = x.forwardRef((e, t) =>
    b.jsx(et.span, { ...e, ref: t, style: { ...G1, ...e.style } }),
  );
dc.displayName = Q1;
var J1 = dc,
  Yh = "ToastProvider",
  [Xh, Y1, X1] = A1("Toast"),
  [Jy, nN] = oa("Toast", [X1]),
  [Z1, hc] = Jy(Yh),
  Yy = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: i = 50,
        children: o,
      } = e,
      [a, l] = x.useState(null),
      [c, d] = x.useState(0),
      u = x.useRef(!1),
      f = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Yh}\`. Expected non-empty \`string\`.`,
        ),
      b.jsx(Xh.Provider, {
        scope: t,
        children: b.jsx(Z1, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: s,
          swipeThreshold: i,
          toastCount: c,
          viewport: a,
          onViewportChange: l,
          onToastAdd: x.useCallback(() => d((h) => h + 1), []),
          onToastRemove: x.useCallback(() => d((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: u,
          isClosePausedRef: f,
          children: o,
        }),
      })
    );
  };
Yy.displayName = Yh;
var Xy = "ToastViewport",
  eS = ["F8"],
  fd = "toast.viewportPause",
  pd = "toast.viewportResume",
  Zy = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = eS,
        label: s = "Notifications ({hotkey})",
        ...i
      } = e,
      o = hc(Xy, n),
      a = Y1(n),
      l = x.useRef(null),
      c = x.useRef(null),
      d = x.useRef(null),
      u = x.useRef(null),
      f = an(t, u, o.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      v = o.toastCount > 0;
    (x.useEffect(() => {
      const w = (p) => {
        var y;
        r.length !== 0 &&
          r.every((_) => p[_] || p.code === _) &&
          ((y = u.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      x.useEffect(() => {
        const w = l.current,
          p = u.current;
        if (v && w && p) {
          const m = () => {
              if (!o.isClosePausedRef.current) {
                const E = new CustomEvent(fd);
                (p.dispatchEvent(E), (o.isClosePausedRef.current = !0));
              }
            },
            y = () => {
              if (o.isClosePausedRef.current) {
                const E = new CustomEvent(pd);
                (p.dispatchEvent(E), (o.isClosePausedRef.current = !1));
              }
            },
            _ = (E) => {
              !w.contains(E.relatedTarget) && y();
            },
            S = () => {
              w.contains(document.activeElement) || y();
            };
          return (
            w.addEventListener("focusin", m),
            w.addEventListener("focusout", _),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", S),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
              (w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", _),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y));
            }
          );
        }
      }, [v, o.isClosePausedRef]));
    const g = x.useCallback(
      ({ tabbingDirection: w }) => {
        const m = a().map((y) => {
          const _ = y.ref.current,
            S = [_, ...fS(_)];
          return w === "forwards" ? S : S.reverse();
        });
        return (w === "forwards" ? m.reverse() : m).flat();
      },
      [a],
    );
    return (
      x.useEffect(() => {
        const w = u.current;
        if (w) {
          const p = (m) => {
            var S, E, T;
            const y = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !y) {
              const C = document.activeElement,
                P = m.shiftKey;
              if (m.target === w && P) {
                (S = c.current) == null || S.focus();
                return;
              }
              const N = g({ tabbingDirection: P ? "backwards" : "forwards" }),
                V = N.findIndex((L) => L === C);
              cu(N.slice(V + 1))
                ? m.preventDefault()
                : P
                  ? (E = c.current) == null || E.focus()
                  : (T = d.current) == null || T.focus();
            }
          };
          return (
            w.addEventListener("keydown", p),
            () => w.removeEventListener("keydown", p)
          );
        }
      }, [a, g]),
      b.jsxs(F1, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v &&
            b.jsx(md, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "forwards" });
                cu(w);
              },
            }),
          b.jsx(Xh.Slot, {
            scope: n,
            children: b.jsx(et.ol, { tabIndex: -1, ...i, ref: f }),
          }),
          v &&
            b.jsx(md, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "backwards" });
                cu(w);
              },
            }),
        ],
      })
    );
  });
Zy.displayName = Xy;
var e0 = "ToastFocusProxy",
  md = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...s } = e,
      i = hc(e0, n);
    return b.jsx(dc, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: { position: "fixed" },
      onFocus: (o) => {
        var c;
        const a = o.relatedTarget;
        !((c = i.viewport) != null && c.contains(a)) && r();
      },
    });
  });
md.displayName = e0;
var aa = "Toast",
  tS = "toast.swipeStart",
  nS = "toast.swipeMove",
  rS = "toast.swipeCancel",
  sS = "toast.swipeEnd",
  t0 = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: s, onOpenChange: i, ...o } = e,
      [a, l] = Qy({ prop: r, defaultProp: s ?? !0, onChange: i, caller: aa });
    return b.jsx(Jh, {
      present: n || a,
      children: b.jsx(aS, {
        open: a,
        ...o,
        ref: t,
        onClose: () => l(!1),
        onPause: Ar(e.onPause),
        onResume: Ar(e.onResume),
        onSwipeStart: De(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: De(e.onSwipeMove, (c) => {
          const { x: d, y: u } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${u}px`,
            ));
        }),
        onSwipeCancel: De(e.onSwipeCancel, (c) => {
          (c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: De(e.onSwipeEnd, (c) => {
          const { x: d, y: u } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${u}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
t0.displayName = aa;
var [iS, oS] = Jy(aa, { onClose() {} }),
  aS = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: s,
        open: i,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: c,
        onSwipeStart: d,
        onSwipeMove: u,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...v
      } = e,
      g = hc(aa, n),
      [w, p] = x.useState(null),
      m = an(t, (L) => p(L)),
      y = x.useRef(null),
      _ = x.useRef(null),
      S = s || g.duration,
      E = x.useRef(0),
      T = x.useRef(S),
      C = x.useRef(0),
      { onToastAdd: P, onToastRemove: O } = g,
      D = Ar(() => {
        var J;
        ((w == null ? void 0 : w.contains(document.activeElement)) &&
          ((J = g.viewport) == null || J.focus()),
          o());
      }),
      N = x.useCallback(
        (L) => {
          !L ||
            L === 1 / 0 ||
            (window.clearTimeout(C.current),
            (E.current = new Date().getTime()),
            (C.current = window.setTimeout(D, L)));
        },
        [D],
      );
    (x.useEffect(() => {
      const L = g.viewport;
      if (L) {
        const J = () => {
            (N(T.current), c == null || c());
          },
          W = () => {
            const G = new Date().getTime() - E.current;
            ((T.current = T.current - G),
              window.clearTimeout(C.current),
              l == null || l());
          };
        return (
          L.addEventListener(fd, W),
          L.addEventListener(pd, J),
          () => {
            (L.removeEventListener(fd, W), L.removeEventListener(pd, J));
          }
        );
      }
    }, [g.viewport, S, l, c, N]),
      x.useEffect(() => {
        i && !g.isClosePausedRef.current && N(S);
      }, [i, S, g.isClosePausedRef, N]),
      x.useEffect(() => (P(), () => O()), [P, O]));
    const V = x.useMemo(() => (w ? l0(w) : null), [w]);
    return g.viewport
      ? b.jsxs(b.Fragment, {
          children: [
            V &&
              b.jsx(lS, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: V,
              }),
            b.jsx(iS, {
              scope: n,
              onClose: D,
              children: Ei.createPortal(
                b.jsx(Xh.ItemSlot, {
                  scope: n,
                  children: b.jsx(U1, {
                    asChild: !0,
                    onEscapeKeyDown: De(a, () => {
                      (g.isFocusedToastEscapeKeyDownRef.current || D(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: b.jsx(et.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...v,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: De(e.onKeyDown, (L) => {
                        L.key === "Escape" &&
                          (a == null || a(L.nativeEvent),
                          L.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            D()));
                      }),
                      onPointerDown: De(e.onPointerDown, (L) => {
                        L.button === 0 &&
                          (y.current = { x: L.clientX, y: L.clientY });
                      }),
                      onPointerMove: De(e.onPointerMove, (L) => {
                        if (!y.current) return;
                        const J = L.clientX - y.current.x,
                          W = L.clientY - y.current.y,
                          G = !!_.current,
                          R = ["left", "right"].includes(g.swipeDirection),
                          A = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          $ = R ? A(0, J) : 0,
                          q = R ? 0 : A(0, W),
                          B = L.pointerType === "touch" ? 10 : 2,
                          Z = { x: $, y: q },
                          Y = { originalEvent: L, delta: Z };
                        G
                          ? ((_.current = Z), Ma(nS, u, Y, { discrete: !1 }))
                          : Qp(Z, g.swipeDirection, B)
                            ? ((_.current = Z),
                              Ma(tS, d, Y, { discrete: !1 }),
                              L.target.setPointerCapture(L.pointerId))
                            : (Math.abs(J) > B || Math.abs(W) > B) &&
                              (y.current = null);
                      }),
                      onPointerUp: De(e.onPointerUp, (L) => {
                        const J = _.current,
                          W = L.target;
                        if (
                          (W.hasPointerCapture(L.pointerId) &&
                            W.releasePointerCapture(L.pointerId),
                          (_.current = null),
                          (y.current = null),
                          J)
                        ) {
                          const G = L.currentTarget,
                            R = { originalEvent: L, delta: J };
                          (Qp(J, g.swipeDirection, g.swipeThreshold)
                            ? Ma(sS, h, R, { discrete: !0 })
                            : Ma(rS, f, R, { discrete: !0 }),
                            G.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  lS = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      s = hc(aa, t),
      [i, o] = x.useState(!1),
      [a, l] = x.useState(!1);
    return (
      dS(() => o(!0)),
      x.useEffect(() => {
        const c = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      a
        ? null
        : b.jsx(Gy, {
            asChild: !0,
            children: b.jsx(dc, {
              ...r,
              children:
                i && b.jsxs(b.Fragment, { children: [s.label, " ", n] }),
            }),
          })
    );
  },
  cS = "ToastTitle",
  n0 = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return b.jsx(et.div, { ...r, ref: t });
  });
n0.displayName = cS;
var uS = "ToastDescription",
  r0 = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return b.jsx(et.div, { ...r, ref: t });
  });
r0.displayName = uS;
var s0 = "ToastAction",
  i0 = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? b.jsx(a0, {
          altText: n,
          asChild: !0,
          children: b.jsx(Zh, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${s0}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
i0.displayName = s0;
var o0 = "ToastClose",
  Zh = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      s = oS(o0, n);
    return b.jsx(a0, {
      asChild: !0,
      children: b.jsx(et.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: De(e.onClick, s.onClose),
      }),
    });
  });
Zh.displayName = o0;
var a0 = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...s } = e;
  return b.jsx(et.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...s,
    ref: t,
  });
});
function l0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        hS(r))
      ) {
        const s = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (i) {
            const o = r.dataset.radixToastAnnounceAlt;
            o && t.push(o);
          } else t.push(...l0(r));
      }
    }),
    t
  );
}
function Ma(e, t, n, { discrete: r }) {
  const s = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? Vy(s, i) : s.dispatchEvent(i));
}
var Qp = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    s = Math.abs(e.y),
    i = r > s;
  return t === "left" || t === "right" ? i && r > n : !i && s > n;
};
function dS(e = () => {}) {
  const t = Ar(e);
  Bn(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function hS(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function fS(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function cu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var pS = Yy,
  c0 = Zy,
  u0 = t0,
  d0 = n0,
  h0 = r0,
  f0 = i0,
  p0 = Zh;
function m0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = m0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function g0() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = m0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Jp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Yp = g0,
  v0 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Yp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((c) => {
        const d = n == null ? void 0 : n[c],
          u = i == null ? void 0 : i[c];
        if (d === null) return null;
        const f = Jp(d) || Jp(u);
        return s[c][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, d) => {
          let [u, f] = d;
          return (f === void 0 || (c[u] = f), c);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, d) => {
              let { class: u, className: f, ...h } = d;
              return Object.entries(h).every((v) => {
                let [g, w] = v;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...a }[g])
                  : { ...i, ...a }[g] === w;
              })
                ? [...c, u, f]
                : c;
            }, []);
    return Yp(
      e,
      o,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  y0 = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var gS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vS = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    l,
  ) =>
    x.createElement(
      "svg",
      {
        ref: l,
        ...gS,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: y0("lucide", s),
        ...a,
      },
      [
        ...o.map(([c, d]) => x.createElement(c, d)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ki = (e, t) => {
  const n = x.forwardRef(({ className: r, ...s }, i) =>
    x.createElement(vS, {
      ref: i,
      iconNode: t,
      className: y0(`lucide-${mS(e)}`, r),
      ...s,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w0 = ki("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yS = ki("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wS = ki("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bS = ki("Volume2", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xS = ki("VolumeX", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _S = ki("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ef = "-",
  SS = (e) => {
    const t = kS(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(ef);
        return (a[0] === "" && a.length !== 1 && a.shift(), b0(a, t) || ES(o));
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = n[o] || [];
        return a && r[o] ? [...l, ...r[o]] : l;
      },
    };
  },
  b0 = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? b0(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(ef);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  Xp = /^\[(.+)\]$/,
  ES = (e) => {
    if (Xp.test(e)) {
      const t = Xp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  kS = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      CS(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        gd(o, r, i, t);
      }),
      r
    );
  },
  gd = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : Zp(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (TS(s)) {
          gd(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        gd(o, Zp(t, i), n, r);
      });
    });
  },
  Zp = (e, t) => {
    let n = e;
    return (
      t.split(ef).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  TS = (e) => e.isThemeGetter,
  CS = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const s = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([o, a]) => [t + o, a]),
                  )
                : i,
          );
          return [n, s];
        })
      : e,
  RS = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (i, o) => {
      (n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let o = n.get(i);
        if (o !== void 0) return o;
        if ((o = r.get(i)) !== void 0) return (s(i, o), o);
      },
      set(i, o) {
        n.has(i) ? n.set(i, o) : s(i, o);
      },
    };
  },
  x0 = "!",
  PS = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const l = [];
        let c = 0,
          d = 0,
          u;
        for (let w = 0; w < a.length; w++) {
          let p = a[w];
          if (c === 0) {
            if (p === s && (r || a.slice(w, w + i) === t)) {
              (l.push(a.slice(d, w)), (d = w + i));
              continue;
            }
            if (p === "/") {
              u = w;
              continue;
            }
          }
          p === "[" ? c++ : p === "]" && c--;
        }
        const f = l.length === 0 ? a : a.substring(d),
          h = f.startsWith(x0),
          v = h ? f.substring(1) : f,
          g = u && u > d ? u - d : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: v,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  AS = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  OS = (e) => ({ cache: RS(e.cacheSize), parseClassName: PS(e), ...SS(e) }),
  jS = /\s+/,
  NS = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(jS);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const c = o[l],
        {
          modifiers: d,
          hasImportantModifier: u,
          baseClassName: f,
          maybePostfixModifierPosition: h,
        } = n(c);
      let v = !!h,
        g = r(v ? f.substring(0, h) : f);
      if (!g) {
        if (!v) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((g = r(f)), !g)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const w = AS(d).join(":"),
        p = u ? w + x0 : w,
        m = p + g;
      if (i.includes(m)) continue;
      i.push(m);
      const y = s(g, v);
      for (let _ = 0; _ < y.length; ++_) {
        const S = y[_];
        i.push(p + S);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function IS() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = _0(t)) && (r && (r += " "), (r += n));
  return r;
}
const _0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = _0(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function LS(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(l) {
    const c = t.reduce((d, u) => u(d), e());
    return ((n = OS(c)), (r = n.cache.get), (s = n.cache.set), (i = a), a(l));
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const d = NS(l, n);
    return (s(l, d), d);
  }
  return function () {
    return i(IS.apply(null, arguments));
  };
}
const ve = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  S0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  DS = /^\d+\/\d+$/,
  $S = new Set(["px", "full", "screen"]),
  MS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  US =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  FS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  zS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  BS =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Rn = (e) => Js(e) || $S.has(e) || DS.test(e),
  Zn = (e) => Ti(e, "length", JS),
  Js = (e) => !!e && !Number.isNaN(Number(e)),
  uu = (e) => Ti(e, "number", Js),
  Vi = (e) => !!e && Number.isInteger(Number(e)),
  HS = (e) => e.endsWith("%") && Js(e.slice(0, -1)),
  ne = (e) => S0.test(e),
  er = (e) => MS.test(e),
  VS = new Set(["length", "size", "percentage"]),
  WS = (e) => Ti(e, VS, E0),
  qS = (e) => Ti(e, "position", E0),
  KS = new Set(["image", "url"]),
  GS = (e) => Ti(e, KS, XS),
  QS = (e) => Ti(e, "", YS),
  Wi = () => !0,
  Ti = (e, t, n) => {
    const r = S0.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  JS = (e) => US.test(e) && !FS.test(e),
  E0 = () => !1,
  YS = (e) => zS.test(e),
  XS = (e) => BS.test(e),
  ZS = () => {
    const e = ve("colors"),
      t = ve("spacing"),
      n = ve("blur"),
      r = ve("brightness"),
      s = ve("borderColor"),
      i = ve("borderRadius"),
      o = ve("borderSpacing"),
      a = ve("borderWidth"),
      l = ve("contrast"),
      c = ve("grayscale"),
      d = ve("hueRotate"),
      u = ve("invert"),
      f = ve("gap"),
      h = ve("gradientColorStops"),
      v = ve("gradientColorStopPositions"),
      g = ve("inset"),
      w = ve("margin"),
      p = ve("opacity"),
      m = ve("padding"),
      y = ve("saturate"),
      _ = ve("scale"),
      S = ve("sepia"),
      E = ve("skew"),
      T = ve("space"),
      C = ve("translate"),
      P = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      D = () => ["auto", ne, t],
      N = () => [ne, t],
      V = () => ["", Rn, Zn],
      L = () => ["auto", Js, ne],
      J = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      W = () => ["solid", "dashed", "dotted", "double", "none"],
      G = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      R = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", ne],
      $ = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      q = () => [Js, ne];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Wi],
        spacing: [Rn, Zn],
        blur: ["none", "", er, ne],
        brightness: q(),
        borderColor: [e],
        borderRadius: ["none", "", "full", er, ne],
        borderSpacing: N(),
        borderWidth: V(),
        contrast: q(),
        grayscale: A(),
        hueRotate: q(),
        invert: A(),
        gap: N(),
        gradientColorStops: [e],
        gradientColorStopPositions: [HS, Zn],
        inset: D(),
        margin: D(),
        opacity: q(),
        padding: N(),
        saturate: q(),
        scale: q(),
        sepia: A(),
        skew: q(),
        space: N(),
        translate: N(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ne] }],
        container: ["container"],
        columns: [{ columns: [er] }],
        "break-after": [{ "break-after": $() }],
        "break-before": [{ "break-before": $() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...J(), ne] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: P() }],
        "overscroll-x": [{ "overscroll-x": P() }],
        "overscroll-y": [{ "overscroll-y": P() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Vi, ne] }],
        basis: [{ basis: D() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ne] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", Vi, ne] }],
        "grid-cols": [{ "grid-cols": [Wi] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Vi, ne] }, ne] }],
        "col-start": [{ "col-start": L() }],
        "col-end": [{ "col-end": L() }],
        "grid-rows": [{ "grid-rows": [Wi] }],
        "row-start-end": [{ row: ["auto", { span: [Vi, ne] }, ne] }],
        "row-start": [{ "row-start": L() }],
        "row-end": [{ "row-end": L() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ne] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ne] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...R()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...R(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...R(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ne, t] }],
        "min-w": [{ "min-w": [ne, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ne,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [er] },
              er,
            ],
          },
        ],
        h: [{ h: [ne, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ne, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ne, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ne, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", er, Zn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              uu,
            ],
          },
        ],
        "font-family": [{ font: [Wi] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ne,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Js, uu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Rn,
              ne,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ne] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ne] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [p] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [p] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...W(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Rn, Zn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Rn, ne] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: N() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ne,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ne] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [p] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...J(), qS] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", WS] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              GS,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [p] }],
        "border-style": [{ border: [...W(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [p] }],
        "divide-style": [{ divide: W() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...W()] }],
        "outline-offset": [{ "outline-offset": [Rn, ne] }],
        "outline-w": [{ outline: [Rn, Zn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [p] }],
        "ring-offset-w": [{ "ring-offset": [Rn, Zn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", er, QS] }],
        "shadow-color": [{ shadow: [Wi] }],
        opacity: [{ opacity: [p] }],
        "mix-blend": [{ "mix-blend": [...G(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": G() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", er, ne] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [u] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [u] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ne,
            ],
          },
        ],
        duration: [{ duration: q() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ne] }],
        delay: [{ delay: q() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ne] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [_] }],
        "scale-x": [{ "scale-x": [_] }],
        "scale-y": [{ "scale-y": [_] }],
        rotate: [{ rotate: [Vi, ne] }],
        "translate-x": [{ "translate-x": [C] }],
        "translate-y": [{ "translate-y": [C] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ne,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ne,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": N() }],
        "scroll-mx": [{ "scroll-mx": N() }],
        "scroll-my": [{ "scroll-my": N() }],
        "scroll-ms": [{ "scroll-ms": N() }],
        "scroll-me": [{ "scroll-me": N() }],
        "scroll-mt": [{ "scroll-mt": N() }],
        "scroll-mr": [{ "scroll-mr": N() }],
        "scroll-mb": [{ "scroll-mb": N() }],
        "scroll-ml": [{ "scroll-ml": N() }],
        "scroll-p": [{ "scroll-p": N() }],
        "scroll-px": [{ "scroll-px": N() }],
        "scroll-py": [{ "scroll-py": N() }],
        "scroll-ps": [{ "scroll-ps": N() }],
        "scroll-pe": [{ "scroll-pe": N() }],
        "scroll-pt": [{ "scroll-pt": N() }],
        "scroll-pr": [{ "scroll-pr": N() }],
        "scroll-pb": [{ "scroll-pb": N() }],
        "scroll-pl": [{ "scroll-pl": N() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ne] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Rn, Zn, uu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  eE = LS(ZS);
function te(...e) {
  return eE(g0(e));
}
const tE = pS,
  k0 = x.forwardRef(({ className: e, ...t }, n) =>
    b.jsx(c0, {
      ref: n,
      className: te(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
k0.displayName = c0.displayName;
const nE = v0(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  T0 = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    b.jsx(u0, { ref: r, className: te(nE({ variant: t }), e), ...n }),
  );
T0.displayName = u0.displayName;
const rE = x.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(f0, {
    ref: n,
    className: te(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
rE.displayName = f0.displayName;
const C0 = x.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(p0, {
    ref: n,
    className: te(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: b.jsx(_S, { className: "h-4 w-4" }),
  }),
);
C0.displayName = p0.displayName;
const R0 = x.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(d0, { ref: n, className: te("text-sm font-semibold", e), ...t }),
);
R0.displayName = d0.displayName;
const P0 = x.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(h0, { ref: n, className: te("text-sm opacity-90", e), ...t }),
);
P0.displayName = h0.displayName;
function sE() {
  const { toasts: e } = _1();
  return b.jsxs(tE, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: s, ...i }) {
        return b.jsxs(
          T0,
          {
            ...i,
            children: [
              b.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && b.jsx(R0, { children: n }),
                  r && b.jsx(P0, { children: r }),
                ],
              }),
              s,
              b.jsx(C0, {}),
            ],
          },
          t,
        );
      }),
      b.jsx(k0, {}),
    ],
  });
}
var em = ["light", "dark"],
  iE = "(prefers-color-scheme: dark)",
  oE = x.createContext(void 0),
  aE = { setTheme: (e) => {}, themes: [] },
  lE = () => {
    var e;
    return (e = x.useContext(oE)) != null ? e : aE;
  };
x.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: s,
    defaultTheme: i,
    value: o,
    attrs: a,
    nonce: l,
  }) => {
    let c = i === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((v) => `'${v}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      u = s
        ? em.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (v, g = !1, w = !0) => {
        let p = o ? o[v] : v,
          m = g ? v + "|| ''" : `'${p}'`,
          y = "";
        return (
          s &&
            w &&
            !g &&
            em.includes(v) &&
            (y += `d.style.colorScheme = '${v}';`),
          n === "class"
            ? g || p
              ? (y += `c.add(${m})`)
              : (y += "null")
            : p && (y += `d[s](n,${m})`),
          y
        );
      },
      h = e
        ? `!function(){${d}${f(e)}}()`
        : r
          ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${iE}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${c ? "" : "else{" + f(i, !1, !1) + "}"}${u}}catch(e){}}()`
          : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${u}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: h },
    });
  },
);
var cE = (e) => {
    switch (e) {
      case "success":
        return hE;
      case "info":
        return pE;
      case "warning":
        return fE;
      case "error":
        return mE;
      default:
        return null;
    }
  },
  uE = Array(12).fill(0),
  dE = ({ visible: e, className: t }) =>
    I.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      I.createElement(
        "div",
        { className: "sonner-spinner" },
        uE.map((n, r) =>
          I.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  hE = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  fE = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  pE = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  mE = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  gE = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    I.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    I.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  vE = () => {
    let [e, t] = I.useState(document.hidden);
    return (
      I.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  vd = 1,
  yE = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            s =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : vd++,
            i = this.toasts.find((a) => a.id === s),
            o = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === s
                    ? (this.publish({ ...a, ...e, id: s, title: n }),
                      { ...a, ...e, id: s, dismissible: o, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: o, id: s }),
            s
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            s = n !== void 0,
            i,
            o = r
              .then(async (l) => {
                if (((i = ["resolve", l]), I.isValidElement(l)))
                  ((s = !1),
                    this.create({ id: n, type: "default", message: l }));
                else if (bE(l) && !l.ok) {
                  s = !1;
                  let c =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  s = !1;
                  let c =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: c,
                    description: d,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), t.error !== void 0)) {
                  s = !1;
                  let c =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var l;
                (s && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, c) =>
                o.then(() => (i[0] === "reject" ? c(i[1]) : l(i[1]))).catch(c),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || vd++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  ft = new yE(),
  wE = (e, t) => {
    let n = (t == null ? void 0 : t.id) || vd++;
    return (ft.addToast({ title: e, ...t, id: n }), n);
  },
  bE = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  xE = wE,
  _E = () => ft.toasts,
  SE = () => ft.getActiveToasts();
Object.assign(
  xE,
  {
    success: ft.success,
    info: ft.info,
    warning: ft.warning,
    error: ft.error,
    custom: ft.custom,
    message: ft.message,
    promise: ft.promise,
    dismiss: ft.dismiss,
    loading: ft.loading,
  },
  { getHistory: _E, getToasts: SE },
);
function EE(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
EE(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ua(e) {
  return e.label !== void 0;
}
var kE = 3,
  TE = "32px",
  CE = "16px",
  tm = 4e3,
  RE = 356,
  PE = 14,
  AE = 20,
  OE = 200;
function Gt(...e) {
  return e.filter(Boolean).join(" ");
}
function jE(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var NE = (e) => {
  var t, n, r, s, i, o, a, l, c, d, u;
  let {
      invert: f,
      toast: h,
      unstyled: v,
      interacting: g,
      setHeights: w,
      visibleToasts: p,
      heights: m,
      index: y,
      toasts: _,
      expanded: S,
      removeToast: E,
      defaultRichColors: T,
      closeButton: C,
      style: P,
      cancelButtonStyle: O,
      actionButtonStyle: D,
      className: N = "",
      descriptionClassName: V = "",
      duration: L,
      position: J,
      gap: W,
      loadingIcon: G,
      expandByDefault: R,
      classNames: A,
      icons: $,
      closeButtonAriaLabel: q = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Z, Y] = I.useState(null),
    [he, ke] = I.useState(null),
    [ee, Te] = I.useState(!1),
    [Fe, Oe] = I.useState(!1),
    [le, z] = I.useState(!1),
    [se, ge] = I.useState(!1),
    [Ie, tt] = I.useState(!1),
    [bt, xt] = I.useState(0),
    [nt, dn] = I.useState(0),
    Ft = I.useRef(h.duration || L || tm),
    ms = I.useRef(null),
    zt = I.useRef(null),
    pa = y === 0,
    ma = y + 1 <= p,
    ut = h.type,
    Cn = h.dismissible !== !1,
    Ac = h.className || "",
    Ni = h.descriptionClassName || "",
    Bt = I.useMemo(
      () => m.findIndex((X) => X.toastId === h.id) || 0,
      [m, h.id],
    ),
    Ii = I.useMemo(() => {
      var X;
      return (X = h.closeButton) != null ? X : C;
    }, [h.closeButton, C]),
    gs = I.useMemo(() => h.duration || L || tm, [h.duration, L]),
    Kn = I.useRef(0),
    Gn = I.useRef(0),
    ga = I.useRef(0),
    Qn = I.useRef(null),
    [Oc, jc] = J.split("-"),
    Li = I.useMemo(
      () => m.reduce((X, ce, fe) => (fe >= Bt ? X : X + ce.height), 0),
      [m, Bt],
    ),
    va = vE(),
    ya = h.invert || f,
    vs = ut === "loading";
  ((Gn.current = I.useMemo(() => Bt * W + Li, [Bt, Li])),
    I.useEffect(() => {
      Ft.current = gs;
    }, [gs]),
    I.useEffect(() => {
      Te(!0);
    }, []),
    I.useEffect(() => {
      let X = zt.current;
      if (X) {
        let ce = X.getBoundingClientRect().height;
        return (
          dn(ce),
          w((fe) => [
            { toastId: h.id, height: ce, position: h.position },
            ...fe,
          ]),
          () => w((fe) => fe.filter((Vt) => Vt.toastId !== h.id))
        );
      }
    }, [w, h.id]),
    I.useLayoutEffect(() => {
      if (!ee) return;
      let X = zt.current,
        ce = X.style.height;
      X.style.height = "auto";
      let fe = X.getBoundingClientRect().height;
      ((X.style.height = ce),
        dn(fe),
        w((Vt) =>
          Vt.find((Wt) => Wt.toastId === h.id)
            ? Vt.map((Wt) => (Wt.toastId === h.id ? { ...Wt, height: fe } : Wt))
            : [{ toastId: h.id, height: fe, position: h.position }, ...Vt],
        ));
    }, [ee, h.title, h.description, w, h.id]));
  let Ht = I.useCallback(() => {
    (Oe(!0),
      xt(Gn.current),
      w((X) => X.filter((ce) => ce.toastId !== h.id)),
      setTimeout(() => {
        E(h);
      }, OE));
  }, [h, E, w, Gn]);
  (I.useEffect(() => {
    if (
      (h.promise && ut === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let X;
    return (
      S || g || (B && va)
        ? (() => {
            if (ga.current < Kn.current) {
              let ce = new Date().getTime() - Kn.current;
              Ft.current = Ft.current - ce;
            }
            ga.current = new Date().getTime();
          })()
        : Ft.current !== 1 / 0 &&
          ((Kn.current = new Date().getTime()),
          (X = setTimeout(() => {
            var ce;
            ((ce = h.onAutoClose) == null || ce.call(h, h), Ht());
          }, Ft.current))),
      () => clearTimeout(X)
    );
  }, [S, g, h, ut, B, va, Ht]),
    I.useEffect(() => {
      h.delete && Ht();
    }, [Ht, h.delete]));
  function Nc() {
    var X, ce, fe;
    return $ != null && $.loading
      ? I.createElement(
          "div",
          {
            className: Gt(
              A == null ? void 0 : A.loader,
              (X = h == null ? void 0 : h.classNames) == null
                ? void 0
                : X.loader,
              "sonner-loader",
            ),
            "data-visible": ut === "loading",
          },
          $.loading,
        )
      : G
        ? I.createElement(
            "div",
            {
              className: Gt(
                A == null ? void 0 : A.loader,
                (ce = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : ce.loader,
                "sonner-loader",
              ),
              "data-visible": ut === "loading",
            },
            G,
          )
        : I.createElement(dE, {
            className: Gt(
              A == null ? void 0 : A.loader,
              (fe = h == null ? void 0 : h.classNames) == null
                ? void 0
                : fe.loader,
            ),
            visible: ut === "loading",
          });
  }
  return I.createElement(
    "li",
    {
      tabIndex: 0,
      ref: zt,
      className: Gt(
        N,
        Ac,
        A == null ? void 0 : A.toast,
        (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
        A == null ? void 0 : A.default,
        A == null ? void 0 : A[ut],
        (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ut],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = h.richColors) != null ? r : T,
      "data-styled": !(h.jsx || h.unstyled || v),
      "data-mounted": ee,
      "data-promise": !!h.promise,
      "data-swiped": Ie,
      "data-removed": Fe,
      "data-visible": ma,
      "data-y-position": Oc,
      "data-x-position": jc,
      "data-index": y,
      "data-front": pa,
      "data-swiping": le,
      "data-dismissible": Cn,
      "data-type": ut,
      "data-invert": ya,
      "data-swipe-out": se,
      "data-swipe-direction": he,
      "data-expanded": !!(S || (R && ee)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": _.length - y,
        "--offset": `${Fe ? bt : Gn.current}px`,
        "--initial-height": R ? "auto" : `${nt}px`,
        ...P,
        ...h.style,
      },
      onDragEnd: () => {
        (z(!1), Y(null), (Qn.current = null));
      },
      onPointerDown: (X) => {
        vs ||
          !Cn ||
          ((ms.current = new Date()),
          xt(Gn.current),
          X.target.setPointerCapture(X.pointerId),
          X.target.tagName !== "BUTTON" &&
            (z(!0), (Qn.current = { x: X.clientX, y: X.clientY })));
      },
      onPointerUp: () => {
        var X, ce, fe, Vt;
        if (se || !Cn) return;
        Qn.current = null;
        let Wt = Number(
            ((X = zt.current) == null
              ? void 0
              : X.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Jn = Number(
            ((ce = zt.current) == null
              ? void 0
              : ce.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          Dr =
            new Date().getTime() -
            ((fe = ms.current) == null ? void 0 : fe.getTime()),
          qt = Z === "x" ? Wt : Jn,
          Yn = Math.abs(qt) / Dr;
        if (Math.abs(qt) >= AE || Yn > 0.11) {
          (xt(Gn.current),
            (Vt = h.onDismiss) == null || Vt.call(h, h),
            ke(
              Z === "x" ? (Wt > 0 ? "right" : "left") : Jn > 0 ? "down" : "up",
            ),
            Ht(),
            ge(!0),
            tt(!1));
          return;
        }
        (z(!1), Y(null));
      },
      onPointerMove: (X) => {
        var ce, fe, Vt, Wt;
        if (
          !Qn.current ||
          !Cn ||
          ((ce = window.getSelection()) == null
            ? void 0
            : ce.toString().length) > 0
        )
          return;
        let Jn = X.clientY - Qn.current.y,
          Dr = X.clientX - Qn.current.x,
          qt = (fe = e.swipeDirections) != null ? fe : jE(J);
        !Z &&
          (Math.abs(Dr) > 1 || Math.abs(Jn) > 1) &&
          Y(Math.abs(Dr) > Math.abs(Jn) ? "x" : "y");
        let Yn = { x: 0, y: 0 };
        (Z === "y"
          ? (qt.includes("top") || qt.includes("bottom")) &&
            ((qt.includes("top") && Jn < 0) ||
              (qt.includes("bottom") && Jn > 0)) &&
            (Yn.y = Jn)
          : Z === "x" &&
            (qt.includes("left") || qt.includes("right")) &&
            ((qt.includes("left") && Dr < 0) ||
              (qt.includes("right") && Dr > 0)) &&
            (Yn.x = Dr),
          (Math.abs(Yn.x) > 0 || Math.abs(Yn.y) > 0) && tt(!0),
          (Vt = zt.current) == null ||
            Vt.style.setProperty("--swipe-amount-x", `${Yn.x}px`),
          (Wt = zt.current) == null ||
            Wt.style.setProperty("--swipe-amount-y", `${Yn.y}px`));
      },
    },
    Ii && !h.jsx
      ? I.createElement(
          "button",
          {
            "aria-label": q,
            "data-disabled": vs,
            "data-close-button": !0,
            onClick:
              vs || !Cn
                ? () => {}
                : () => {
                    var X;
                    (Ht(), (X = h.onDismiss) == null || X.call(h, h));
                  },
            className: Gt(
              A == null ? void 0 : A.closeButton,
              (s = h == null ? void 0 : h.classNames) == null
                ? void 0
                : s.closeButton,
            ),
          },
          (i = $ == null ? void 0 : $.close) != null ? i : gE,
        )
      : null,
    h.jsx || x.isValidElement(h.title)
      ? h.jsx
        ? h.jsx
        : typeof h.title == "function"
          ? h.title()
          : h.title
      : I.createElement(
          I.Fragment,
          null,
          ut || h.icon || h.promise
            ? I.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Gt(
                    A == null ? void 0 : A.icon,
                    (o = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : o.icon,
                  ),
                },
                h.promise || (h.type === "loading" && !h.icon)
                  ? h.icon || Nc()
                  : null,
                h.type !== "loading"
                  ? h.icon || ($ == null ? void 0 : $[ut]) || cE(ut)
                  : null,
              )
            : null,
          I.createElement(
            "div",
            {
              "data-content": "",
              className: Gt(
                A == null ? void 0 : A.content,
                (a = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            I.createElement(
              "div",
              {
                "data-title": "",
                className: Gt(
                  A == null ? void 0 : A.title,
                  (l = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof h.title == "function" ? h.title() : h.title,
            ),
            h.description
              ? I.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Gt(
                      V,
                      Ni,
                      A == null ? void 0 : A.description,
                      (c = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : c.description,
                    ),
                  },
                  typeof h.description == "function"
                    ? h.description()
                    : h.description,
                )
              : null,
          ),
          x.isValidElement(h.cancel)
            ? h.cancel
            : h.cancel && Ua(h.cancel)
              ? I.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: h.cancelButtonStyle || O,
                    onClick: (X) => {
                      var ce, fe;
                      Ua(h.cancel) &&
                        Cn &&
                        ((fe = (ce = h.cancel).onClick) == null ||
                          fe.call(ce, X),
                        Ht());
                    },
                    className: Gt(
                      A == null ? void 0 : A.cancelButton,
                      (d = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : d.cancelButton,
                    ),
                  },
                  h.cancel.label,
                )
              : null,
          x.isValidElement(h.action)
            ? h.action
            : h.action && Ua(h.action)
              ? I.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: h.actionButtonStyle || D,
                    onClick: (X) => {
                      var ce, fe;
                      Ua(h.action) &&
                        ((fe = (ce = h.action).onClick) == null ||
                          fe.call(ce, X),
                        !X.defaultPrevented && Ht());
                    },
                    className: Gt(
                      A == null ? void 0 : A.actionButton,
                      (u = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : u.actionButton,
                    ),
                  },
                  h.action.label,
                )
              : null,
        ),
  );
};
function nm() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function IE(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, s) => {
      let i = s === 1,
        o = i ? "--mobile-offset" : "--offset",
        a = i ? CE : TE;
      function l(c) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${o}-${d}`] = typeof c == "number" ? `${c}px` : c;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((c) => {
              r[c] === void 0
                ? (n[`${o}-${c}`] = a)
                : (n[`${o}-${c}`] =
                    typeof r[c] == "number" ? `${r[c]}px` : r[c]);
            })
          : l(a);
    }),
    n
  );
}
var LE = x.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: i,
      closeButton: o,
      className: a,
      offset: l,
      mobileOffset: c,
      theme: d = "light",
      richColors: u,
      duration: f,
      style: h,
      visibleToasts: v = kE,
      toastOptions: g,
      dir: w = nm(),
      gap: p = PE,
      loadingIcon: m,
      icons: y,
      containerAriaLabel: _ = "Notifications",
      pauseWhenPageIsHidden: S,
    } = e,
    [E, T] = I.useState([]),
    C = I.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(E.filter((B) => B.position).map((B) => B.position)),
          ),
        ),
      [E, r],
    ),
    [P, O] = I.useState([]),
    [D, N] = I.useState(!1),
    [V, L] = I.useState(!1),
    [J, W] = I.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    G = I.useRef(null),
    R = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    A = I.useRef(null),
    $ = I.useRef(!1),
    q = I.useCallback((B) => {
      T((Z) => {
        var Y;
        return (
          ((Y = Z.find((he) => he.id === B.id)) != null && Y.delete) ||
            ft.dismiss(B.id),
          Z.filter(({ id: he }) => he !== B.id)
        );
      });
    }, []);
  return (
    I.useEffect(
      () =>
        ft.subscribe((B) => {
          if (B.dismiss) {
            T((Z) => Z.map((Y) => (Y.id === B.id ? { ...Y, delete: !0 } : Y)));
            return;
          }
          setTimeout(() => {
            Fy.flushSync(() => {
              T((Z) => {
                let Y = Z.findIndex((he) => he.id === B.id);
                return Y !== -1
                  ? [...Z.slice(0, Y), { ...Z[Y], ...B }, ...Z.slice(Y + 1)]
                  : [B, ...Z];
              });
            });
          });
        }),
      [],
    ),
    I.useEffect(() => {
      if (d !== "system") {
        W(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? W("dark")
            : W("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Z }) => {
          W(Z ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: Y }) => {
          try {
            W(Y ? "dark" : "light");
          } catch (he) {
            console.error(he);
          }
        });
      }
    }, [d]),
    I.useEffect(() => {
      E.length <= 1 && N(!1);
    }, [E]),
    I.useEffect(() => {
      let B = (Z) => {
        var Y, he;
        (s.every((ke) => Z[ke] || Z.code === ke) &&
          (N(!0), (Y = G.current) == null || Y.focus()),
          Z.code === "Escape" &&
            (document.activeElement === G.current ||
              ((he = G.current) != null &&
                he.contains(document.activeElement))) &&
            N(!1));
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [s]),
    I.useEffect(() => {
      if (G.current)
        return () => {
          A.current &&
            (A.current.focus({ preventScroll: !0 }),
            (A.current = null),
            ($.current = !1));
        };
    }, [G.current]),
    I.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${_} ${R}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      C.map((B, Z) => {
        var Y;
        let [he, ke] = B.split("-");
        return E.length
          ? I.createElement(
              "ol",
              {
                key: B,
                dir: w === "auto" ? nm() : w,
                tabIndex: -1,
                ref: G,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": J,
                "data-y-position": he,
                "data-lifted": D && E.length > 1 && !i,
                "data-x-position": ke,
                style: {
                  "--front-toast-height": `${((Y = P[0]) == null ? void 0 : Y.height) || 0}px`,
                  "--width": `${RE}px`,
                  "--gap": `${p}px`,
                  ...h,
                  ...IE(l, c),
                },
                onBlur: (ee) => {
                  $.current &&
                    !ee.currentTarget.contains(ee.relatedTarget) &&
                    (($.current = !1),
                    A.current &&
                      (A.current.focus({ preventScroll: !0 }),
                      (A.current = null)));
                },
                onFocus: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    $.current ||
                    (($.current = !0), (A.current = ee.relatedTarget));
                },
                onMouseEnter: () => N(!0),
                onMouseMove: () => N(!0),
                onMouseLeave: () => {
                  V || N(!1);
                },
                onDragEnd: () => N(!1),
                onPointerDown: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    L(!0);
                },
                onPointerUp: () => L(!1),
              },
              E.filter(
                (ee) => (!ee.position && Z === 0) || ee.position === B,
              ).map((ee, Te) => {
                var Fe, Oe;
                return I.createElement(NE, {
                  key: ee.id,
                  icons: y,
                  index: Te,
                  toast: ee,
                  defaultRichColors: u,
                  duration:
                    (Fe = g == null ? void 0 : g.duration) != null ? Fe : f,
                  className: g == null ? void 0 : g.className,
                  descriptionClassName:
                    g == null ? void 0 : g.descriptionClassName,
                  invert: n,
                  visibleToasts: v,
                  closeButton:
                    (Oe = g == null ? void 0 : g.closeButton) != null ? Oe : o,
                  interacting: V,
                  position: B,
                  style: g == null ? void 0 : g.style,
                  unstyled: g == null ? void 0 : g.unstyled,
                  classNames: g == null ? void 0 : g.classNames,
                  cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                  actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                  removeToast: q,
                  toasts: E.filter((le) => le.position == ee.position),
                  heights: P.filter((le) => le.position == ee.position),
                  setHeights: O,
                  expandByDefault: i,
                  gap: p,
                  loadingIcon: m,
                  expanded: D,
                  pauseWhenPageIsHidden: S,
                  swipeDirections: e.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
const DE = ({ ...e }) => {
  const { theme: t = "system" } = lE();
  return b.jsx(LE, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var $E = rh[" useId ".trim().toString()] || (() => {}),
  ME = 0;
function UE(e) {
  const [t, n] = x.useState($E());
  return (
    Bn(() => {
      n((r) => r ?? String(ME++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const FE = ["top", "right", "bottom", "left"],
  Or = Math.min,
  Et = Math.max,
  $l = Math.round,
  Fa = Math.floor,
  En = (e) => ({ x: e, y: e }),
  zE = { left: "right", right: "left", bottom: "top", top: "bottom" },
  BE = { start: "end", end: "start" };
function yd(e, t, n) {
  return Et(e, Or(t, n));
}
function Hn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vn(e) {
  return e.split("-")[0];
}
function Ci(e) {
  return e.split("-")[1];
}
function tf(e) {
  return e === "x" ? "y" : "x";
}
function nf(e) {
  return e === "y" ? "height" : "width";
}
const HE = new Set(["top", "bottom"]);
function xn(e) {
  return HE.has(Vn(e)) ? "y" : "x";
}
function rf(e) {
  return tf(xn(e));
}
function VE(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ci(e),
    s = rf(e),
    i = nf(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (o = Ml(o)), [o, Ml(o)]);
}
function WE(e) {
  const t = Ml(e);
  return [wd(e), t, wd(t)];
}
function wd(e) {
  return e.replace(/start|end/g, (t) => BE[t]);
}
const rm = ["left", "right"],
  sm = ["right", "left"],
  qE = ["top", "bottom"],
  KE = ["bottom", "top"];
function GE(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? sm : rm) : t ? rm : sm;
    case "left":
    case "right":
      return t ? qE : KE;
    default:
      return [];
  }
}
function QE(e, t, n, r) {
  const s = Ci(e);
  let i = GE(Vn(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(wd)))),
    i
  );
}
function Ml(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zE[t]);
}
function JE(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function A0(e) {
  return typeof e != "number"
    ? JE(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ul(e) {
  const { x: t, y: n, width: r, height: s } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n,
  };
}
function im(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = xn(t),
    o = rf(t),
    a = nf(o),
    l = Vn(t),
    c = i === "y",
    d = r.x + r.width / 2 - s.width / 2,
    u = r.y + r.height / 2 - s.height / 2,
    f = r[a] / 2 - s[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: d, y: r.y - s.height };
      break;
    case "bottom":
      h = { x: d, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: u };
      break;
    case "left":
      h = { x: r.x - s.width, y: u };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Ci(t)) {
    case "start":
      h[o] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      h[o] += f * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const YE = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: d, y: u } = im(c, r, l),
    f = r,
    h = {},
    v = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: w, fn: p } = a[g],
      {
        x: m,
        y,
        data: _,
        reset: S,
      } = await p({
        x: d,
        y: u,
        initialPlacement: r,
        placement: f,
        strategy: s,
        middlewareData: h,
        rects: c,
        platform: o,
        elements: { reference: e, floating: t },
      });
    ((d = m ?? d),
      (u = y ?? u),
      (h = { ...h, [w]: { ...h[w], ..._ } }),
      S &&
        v <= 50 &&
        (v++,
        typeof S == "object" &&
          (S.placement && (f = S.placement),
          S.rects &&
            (c =
              S.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : S.rects),
          ({ x: d, y: u } = im(c, f, l))),
        (g = -1)));
  }
  return { x: d, y: u, placement: f, strategy: s, middlewareData: h };
};
async function Io(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: u = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = Hn(t, e),
    v = A0(h),
    w = a[f ? (u === "floating" ? "reference" : "floating") : u],
    p = Ul(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    m =
      u === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    _ = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Ul(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: y,
            strategy: l,
          })
        : m,
    );
  return {
    top: (p.top - S.top + v.top) / _.y,
    bottom: (S.bottom - p.bottom + v.bottom) / _.y,
    left: (p.left - S.left + v.left) / _.x,
    right: (S.right - p.right + v.right) / _.x,
  };
}
const XE = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: d = 0 } = Hn(e, t) || {};
      if (c == null) return {};
      const u = A0(d),
        f = { x: n, y: r },
        h = rf(s),
        v = nf(h),
        g = await o.getDimensions(c),
        w = h === "y",
        p = w ? "top" : "left",
        m = w ? "bottom" : "right",
        y = w ? "clientHeight" : "clientWidth",
        _ = i.reference[v] + i.reference[h] - f[h] - i.floating[v],
        S = f[h] - i.reference[h],
        E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
      let T = E ? E[y] : 0;
      (!T || !(await (o.isElement == null ? void 0 : o.isElement(E)))) &&
        (T = a.floating[y] || i.floating[v]);
      const C = _ / 2 - S / 2,
        P = T / 2 - g[v] / 2 - 1,
        O = Or(u[p], P),
        D = Or(u[m], P),
        N = O,
        V = T - g[v] - D,
        L = T / 2 - g[v] / 2 + C,
        J = yd(N, L, V),
        W =
          !l.arrow &&
          Ci(s) != null &&
          L !== J &&
          i.reference[v] / 2 - (L < N ? O : D) - g[v] / 2 < 0,
        G = W ? (L < N ? L - N : L - V) : 0;
      return {
        [h]: f[h] + G,
        data: {
          [h]: J,
          centerOffset: L - J - G,
          ...(W && { alignmentOffset: G }),
        },
        reset: W,
      };
    },
  }),
  ZE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: u = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: g = !0,
              ...w
            } = Hn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const p = Vn(s),
            m = xn(a),
            y = Vn(a) === a,
            _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            S = f || (y || !g ? [Ml(a)] : WE(a)),
            E = v !== "none";
          !f && E && S.push(...QE(a, g, v, _));
          const T = [a, ...S],
            C = await Io(t, w),
            P = [];
          let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && P.push(C[p]), u)) {
            const L = VE(s, o, _);
            P.push(C[L[0]], C[L[1]]);
          }
          if (
            ((O = [...O, { placement: s, overflows: P }]),
            !P.every((L) => L <= 0))
          ) {
            var D, N;
            const L = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1,
              J = T[L];
            if (
              J &&
              (!(u === "alignment" ? m !== xn(J) : !1) ||
                O.every((R) => R.overflows[0] > 0 && xn(R.placement) === m))
            )
              return {
                data: { index: L, overflows: O },
                reset: { placement: J },
              };
            let W =
              (N = O.filter((G) => G.overflows[0] <= 0).sort(
                (G, R) => G.overflows[1] - R.overflows[1],
              )[0]) == null
                ? void 0
                : N.placement;
            if (!W)
              switch (h) {
                case "bestFit": {
                  var V;
                  const G =
                    (V = O.filter((R) => {
                      if (E) {
                        const A = xn(R.placement);
                        return A === m || A === "y";
                      }
                      return !0;
                    })
                      .map((R) => [
                        R.placement,
                        R.overflows
                          .filter((A) => A > 0)
                          .reduce((A, $) => A + $, 0),
                      ])
                      .sort((R, A) => R[1] - A[1])[0]) == null
                      ? void 0
                      : V[0];
                  G && (W = G);
                  break;
                }
                case "initialPlacement":
                  W = a;
                  break;
              }
            if (s !== W) return { reset: { placement: W } };
          }
          return {};
        },
      }
    );
  };
function om(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function am(e) {
  return FE.some((t) => e[t] >= 0);
}
const ek = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...s } = Hn(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await Io(t, { ...s, elementContext: "reference" }),
                o = om(i, n.reference);
              return {
                data: { referenceHiddenOffsets: o, referenceHidden: am(o) },
              };
            }
            case "escaped": {
              const i = await Io(t, { ...s, altBoundary: !0 }),
                o = om(i, n.floating);
              return { data: { escapedOffsets: o, escaped: am(o) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  O0 = new Set(["left", "top"]);
async function tk(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = Vn(n),
    a = Ci(n),
    l = xn(n) === "y",
    c = O0.has(o) ? -1 : 1,
    d = i && l ? -1 : 1,
    u = Hn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v,
  } = typeof u == "number"
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: u.mainAxis || 0,
        crossAxis: u.crossAxis || 0,
        alignmentAxis: u.alignmentAxis,
      };
  return (
    a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? { x: h * d, y: f * c } : { x: f * c, y: h * d }
  );
}
const nk = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            l = await tk(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  rk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: p, y: m } = w;
                  return { x: p, y: m };
                },
              },
              ...l
            } = Hn(e, t),
            c = { x: n, y: r },
            d = await Io(t, l),
            u = xn(Vn(s)),
            f = tf(u);
          let h = c[f],
            v = c[u];
          if (i) {
            const w = f === "y" ? "top" : "left",
              p = f === "y" ? "bottom" : "right",
              m = h + d[w],
              y = h - d[p];
            h = yd(m, h, y);
          }
          if (o) {
            const w = u === "y" ? "top" : "left",
              p = u === "y" ? "bottom" : "right",
              m = v + d[w],
              y = v - d[p];
            v = yd(m, v, y);
          }
          const g = a.fn({ ...t, [f]: h, [u]: v });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [f]: i, [u]: o } },
          };
        },
      }
    );
  },
  sk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = Hn(e, t),
            d = { x: n, y: r },
            u = xn(s),
            f = tf(u);
          let h = d[f],
            v = d[u];
          const g = Hn(a, t),
            w =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const y = f === "y" ? "height" : "width",
              _ = i.reference[f] - i.floating[y] + w.mainAxis,
              S = i.reference[f] + i.reference[y] - w.mainAxis;
            h < _ ? (h = _) : h > S && (h = S);
          }
          if (c) {
            var p, m;
            const y = f === "y" ? "width" : "height",
              _ = O0.has(Vn(s)),
              S =
                i.reference[u] -
                i.floating[y] +
                ((_ && ((p = o.offset) == null ? void 0 : p[u])) || 0) +
                (_ ? 0 : w.crossAxis),
              E =
                i.reference[u] +
                i.reference[y] +
                (_ ? 0 : ((m = o.offset) == null ? void 0 : m[u]) || 0) -
                (_ ? w.crossAxis : 0);
            v < S ? (v = S) : v > E && (v = E);
          }
          return { [f]: h, [u]: v };
        },
      }
    );
  },
  ik = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: l = () => {}, ...c } = Hn(e, t),
            d = await Io(t, c),
            u = Vn(s),
            f = Ci(s),
            h = xn(s) === "y",
            { width: v, height: g } = i.floating;
          let w, p;
          u === "top" || u === "bottom"
            ? ((w = u),
              (p =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((p = u), (w = f === "end" ? "top" : "bottom"));
          const m = g - d.top - d.bottom,
            y = v - d.left - d.right,
            _ = Or(g - d[w], m),
            S = Or(v - d[p], y),
            E = !t.middlewareData.shift;
          let T = _,
            C = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (C = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = m),
            E && !f)
          ) {
            const O = Et(d.left, 0),
              D = Et(d.right, 0),
              N = Et(d.top, 0),
              V = Et(d.bottom, 0);
            h
              ? (C = v - 2 * (O !== 0 || D !== 0 ? O + D : Et(d.left, d.right)))
              : (T =
                  g - 2 * (N !== 0 || V !== 0 ? N + V : Et(d.top, d.bottom)));
          }
          await l({ ...t, availableWidth: C, availableHeight: T });
          const P = await o.getDimensions(a.floating);
          return v !== P.width || g !== P.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function fc() {
  return typeof window < "u";
}
function Ri(e) {
  return j0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Rt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Tn(e) {
  var t;
  return (t = (j0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function j0(e) {
  return fc() ? e instanceof Node || e instanceof Rt(e).Node : !1;
}
function ln(e) {
  return fc() ? e instanceof Element || e instanceof Rt(e).Element : !1;
}
function kn(e) {
  return fc() ? e instanceof HTMLElement || e instanceof Rt(e).HTMLElement : !1;
}
function lm(e) {
  return !fc() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Rt(e).ShadowRoot;
}
const ok = new Set(["inline", "contents"]);
function la(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ok.has(s);
}
const ak = new Set(["table", "td", "th"]);
function lk(e) {
  return ak.has(Ri(e));
}
const ck = [":popover-open", ":modal"];
function pc(e) {
  return ck.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const uk = ["transform", "translate", "scale", "rotate", "perspective"],
  dk = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  hk = ["paint", "layout", "strict", "content"];
function sf(e) {
  const t = of(),
    n = ln(e) ? cn(e) : e;
  return (
    uk.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    dk.some((r) => (n.willChange || "").includes(r)) ||
    hk.some((r) => (n.contain || "").includes(r))
  );
}
function fk(e) {
  let t = jr(e);
  for (; kn(t) && !yi(t); ) {
    if (sf(t)) return t;
    if (pc(t)) return null;
    t = jr(t);
  }
  return null;
}
function of() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const pk = new Set(["html", "body", "#document"]);
function yi(e) {
  return pk.has(Ri(e));
}
function cn(e) {
  return Rt(e).getComputedStyle(e);
}
function mc(e) {
  return ln(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function jr(e) {
  if (Ri(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (lm(e) && e.host) || Tn(e);
  return lm(t) ? t.host : t;
}
function N0(e) {
  const t = jr(e);
  return yi(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : kn(t) && la(t)
      ? t
      : N0(t);
}
function Lo(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const s = N0(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Rt(s);
  if (i) {
    const a = bd(o);
    return t.concat(
      o,
      o.visualViewport || [],
      la(s) ? s : [],
      a && n ? Lo(a) : [],
    );
  }
  return t.concat(s, Lo(s, [], n));
}
function bd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function I0(e) {
  const t = cn(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = kn(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = $l(n) !== i || $l(r) !== o;
  return (a && ((n = i), (r = o)), { width: n, height: r, $: a });
}
function af(e) {
  return ln(e) ? e : e.contextElement;
}
function Ys(e) {
  const t = af(e);
  if (!kn(t)) return En(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = I0(t);
  let o = (i ? $l(n.width) : n.width) / r,
    a = (i ? $l(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const mk = En(0);
function L0(e) {
  const t = Rt(e);
  return !of() || !t.visualViewport
    ? mk
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function gk(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== Rt(e)) ? !1 : t);
}
function us(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const s = e.getBoundingClientRect(),
    i = af(e);
  let o = En(1);
  t && (r ? ln(r) && (o = Ys(r)) : (o = Ys(e)));
  const a = gk(i, n, r) ? L0(i) : En(0);
  let l = (s.left + a.x) / o.x,
    c = (s.top + a.y) / o.y,
    d = s.width / o.x,
    u = s.height / o.y;
  if (i) {
    const f = Rt(i),
      h = r && ln(r) ? Rt(r) : r;
    let v = f,
      g = bd(v);
    for (; g && r && h !== v; ) {
      const w = Ys(g),
        p = g.getBoundingClientRect(),
        m = cn(g),
        y = p.left + (g.clientLeft + parseFloat(m.paddingLeft)) * w.x,
        _ = p.top + (g.clientTop + parseFloat(m.paddingTop)) * w.y;
      ((l *= w.x),
        (c *= w.y),
        (d *= w.x),
        (u *= w.y),
        (l += y),
        (c += _),
        (v = Rt(g)),
        (g = bd(v)));
    }
  }
  return Ul({ width: d, height: u, x: l, y: c });
}
function lf(e, t) {
  const n = mc(e).scrollLeft;
  return t ? t.left + n : us(Tn(e)).left + n;
}
function D0(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : lf(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function vk(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = Tn(r),
    a = t ? pc(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = En(1);
  const d = En(0),
    u = kn(r);
  if (
    (u || (!u && !i)) &&
    ((Ri(r) !== "body" || la(o)) && (l = mc(r)), kn(r))
  ) {
    const h = us(r);
    ((c = Ys(r)), (d.x = h.x + r.clientLeft), (d.y = h.y + r.clientTop));
  }
  const f = o && !u && !i ? D0(o, l, !0) : En(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y,
  };
}
function yk(e) {
  return Array.from(e.getClientRects());
}
function wk(e) {
  const t = Tn(e),
    n = mc(e),
    r = e.ownerDocument.body,
    s = Et(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Et(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + lf(e);
  const a = -n.scrollTop;
  return (
    cn(r).direction === "rtl" && (o += Et(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function bk(e, t) {
  const n = Rt(e),
    r = Tn(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    ((i = s.width), (o = s.height));
    const c = of();
    (!c || (c && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
const xk = new Set(["absolute", "fixed"]);
function _k(e, t) {
  const n = us(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = kn(e) ? Ys(e) : En(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = s * i.x,
    c = r * i.y;
  return { width: o, height: a, x: l, y: c };
}
function cm(e, t, n) {
  let r;
  if (t === "viewport") r = bk(e, n);
  else if (t === "document") r = wk(Tn(e));
  else if (ln(t)) r = _k(t, n);
  else {
    const s = L0(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return Ul(r);
}
function $0(e, t) {
  const n = jr(e);
  return n === t || !ln(n) || yi(n)
    ? !1
    : cn(n).position === "fixed" || $0(n, t);
}
function Sk(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Lo(e, [], !1).filter((a) => ln(a) && Ri(a) !== "body"),
    s = null;
  const i = cn(e).position === "fixed";
  let o = i ? jr(e) : e;
  for (; ln(o) && !yi(o); ) {
    const a = cn(o),
      l = sf(o);
    (!l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l && a.position === "static" && !!s && xk.has(s.position)) ||
            (la(o) && !l && $0(e, o))
      )
        ? (r = r.filter((d) => d !== o))
        : (s = a),
      (o = jr(o)));
  }
  return (t.set(e, r), r);
}
function Ek(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? pc(t)
          ? []
          : Sk(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    l = o.reduce(
      (c, d) => {
        const u = cm(t, d, s);
        return (
          (c.top = Et(u.top, c.top)),
          (c.right = Or(u.right, c.right)),
          (c.bottom = Or(u.bottom, c.bottom)),
          (c.left = Et(u.left, c.left)),
          c
        );
      },
      cm(t, a, s),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function kk(e) {
  const { width: t, height: n } = I0(e);
  return { width: t, height: n };
}
function Tk(e, t, n) {
  const r = kn(t),
    s = Tn(t),
    i = n === "fixed",
    o = us(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = En(0);
  function c() {
    l.x = lf(s);
  }
  if (r || (!r && !i))
    if (((Ri(t) !== "body" || la(s)) && (a = mc(t)), r)) {
      const h = us(t, !0, i, t);
      ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
    } else s && c();
  i && !r && s && c();
  const d = s && !r && !i ? D0(s, a) : En(0),
    u = o.left + a.scrollLeft - l.x - d.x,
    f = o.top + a.scrollTop - l.y - d.y;
  return { x: u, y: f, width: o.width, height: o.height };
}
function du(e) {
  return cn(e).position === "static";
}
function um(e, t) {
  if (!kn(e) || cn(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (Tn(e) === n && (n = n.ownerDocument.body), n);
}
function M0(e, t) {
  const n = Rt(e);
  if (pc(e)) return n;
  if (!kn(e)) {
    let s = jr(e);
    for (; s && !yi(s); ) {
      if (ln(s) && !du(s)) return s;
      s = jr(s);
    }
    return n;
  }
  let r = um(e, t);
  for (; r && lk(r) && du(r); ) r = um(r, t);
  return r && yi(r) && du(r) && !sf(r) ? n : r || fk(e) || n;
}
const Ck = async function (e) {
  const t = this.getOffsetParent || M0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Tk(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Rk(e) {
  return cn(e).direction === "rtl";
}
const Pk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vk,
  getDocumentElement: Tn,
  getClippingRect: Ek,
  getOffsetParent: M0,
  getElementRects: Ck,
  getClientRects: yk,
  getDimensions: kk,
  getScale: Ys,
  isElement: ln,
  isRTL: Rk,
};
function U0(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Ak(e, t) {
  let n = null,
    r;
  const s = Tn(e);
  function i() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function o(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
    const c = e.getBoundingClientRect(),
      { left: d, top: u, width: f, height: h } = c;
    if ((a || t(), !f || !h)) return;
    const v = Fa(u),
      g = Fa(s.clientWidth - (d + f)),
      w = Fa(s.clientHeight - (u + h)),
      p = Fa(d),
      y = {
        rootMargin: -v + "px " + -g + "px " + -w + "px " + -p + "px",
        threshold: Et(0, Or(1, l)) || 1,
      };
    let _ = !0;
    function S(E) {
      const T = E[0].intersectionRatio;
      if (T !== l) {
        if (!_) return o();
        T
          ? o(!1, T)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (T === 1 && !U0(c, e.getBoundingClientRect()) && o(), (_ = !1));
    }
    try {
      n = new IntersectionObserver(S, { ...y, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, y);
    }
    n.observe(e);
  }
  return (o(!0), i);
}
function Ok(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = af(e),
    d = s || i ? [...(c ? Lo(c) : []), ...Lo(t)] : [];
  d.forEach((p) => {
    (s && p.addEventListener("scroll", n, { passive: !0 }),
      i && p.addEventListener("resize", n));
  });
  const u = c && a ? Ak(c, n) : null;
  let f = -1,
    h = null;
  o &&
    ((h = new ResizeObserver((p) => {
      let [m] = p;
      (m &&
        m.target === c &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = h) == null || y.observe(t);
        }))),
        n());
    })),
    c && !l && h.observe(c),
    h.observe(t));
  let v,
    g = l ? us(e) : null;
  l && w();
  function w() {
    const p = us(e);
    (g && !U0(g, p) && n(), (g = p), (v = requestAnimationFrame(w)));
  }
  return (
    n(),
    () => {
      var p;
      (d.forEach((m) => {
        (s && m.removeEventListener("scroll", n),
          i && m.removeEventListener("resize", n));
      }),
        u == null || u(),
        (p = h) == null || p.disconnect(),
        (h = null),
        l && cancelAnimationFrame(v));
    }
  );
}
const jk = nk,
  Nk = rk,
  Ik = ZE,
  Lk = ik,
  Dk = ek,
  dm = XE,
  $k = sk,
  Mk = (e, t, n) => {
    const r = new Map(),
      s = { platform: Pk, ...n },
      i = { ...s.platform, _c: r };
    return YE(e, t, { ...s, platform: i });
  };
var Uk = typeof document < "u",
  Fk = function () {},
  ul = Uk ? x.useLayoutEffect : Fk;
function Fl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Fl(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !Fl(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function F0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hm(e, t) {
  const n = F0(e);
  return Math.round(t * n) / n;
}
function hu(e) {
  const t = x.useRef(e);
  return (
    ul(() => {
      t.current = e;
    }),
    t
  );
}
function zk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [d, u] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = x.useState(r);
  Fl(f, r) || h(r);
  const [v, g] = x.useState(null),
    [w, p] = x.useState(null),
    m = x.useCallback((R) => {
      R !== E.current && ((E.current = R), g(R));
    }, []),
    y = x.useCallback((R) => {
      R !== T.current && ((T.current = R), p(R));
    }, []),
    _ = i || v,
    S = o || w,
    E = x.useRef(null),
    T = x.useRef(null),
    C = x.useRef(d),
    P = l != null,
    O = hu(l),
    D = hu(s),
    N = hu(c),
    V = x.useCallback(() => {
      if (!E.current || !T.current) return;
      const R = { placement: t, strategy: n, middleware: f };
      (D.current && (R.platform = D.current),
        Mk(E.current, T.current, R).then((A) => {
          const $ = { ...A, isPositioned: N.current !== !1 };
          L.current &&
            !Fl(C.current, $) &&
            ((C.current = $),
            Ei.flushSync(() => {
              u($);
            }));
        }));
    }, [f, t, n, D, N]);
  ul(() => {
    c === !1 &&
      C.current.isPositioned &&
      ((C.current.isPositioned = !1), u((R) => ({ ...R, isPositioned: !1 })));
  }, [c]);
  const L = x.useRef(!1);
  (ul(
    () => (
      (L.current = !0),
      () => {
        L.current = !1;
      }
    ),
    [],
  ),
    ul(() => {
      if ((_ && (E.current = _), S && (T.current = S), _ && S)) {
        if (O.current) return O.current(_, S, V);
        V();
      }
    }, [_, S, V, O, P]));
  const J = x.useMemo(
      () => ({ reference: E, floating: T, setReference: m, setFloating: y }),
      [m, y],
    ),
    W = x.useMemo(() => ({ reference: _, floating: S }), [_, S]),
    G = x.useMemo(() => {
      const R = { position: n, left: 0, top: 0 };
      if (!W.floating) return R;
      const A = hm(W.floating, d.x),
        $ = hm(W.floating, d.y);
      return a
        ? {
            ...R,
            transform: "translate(" + A + "px, " + $ + "px)",
            ...(F0(W.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: $ };
    }, [n, a, W.floating, d.x, d.y]);
  return x.useMemo(
    () => ({ ...d, update: V, refs: J, elements: W, floatingStyles: G }),
    [d, V, J, W, G],
  );
}
const Bk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: s } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? dm({ element: r.current, padding: s }).fn(n)
            : {}
          : r
            ? dm({ element: r, padding: s }).fn(n)
            : {};
      },
    };
  },
  Hk = (e, t) => ({ ...jk(e), options: [e, t] }),
  Vk = (e, t) => ({ ...Nk(e), options: [e, t] }),
  Wk = (e, t) => ({ ...$k(e), options: [e, t] }),
  qk = (e, t) => ({ ...Ik(e), options: [e, t] }),
  Kk = (e, t) => ({ ...Lk(e), options: [e, t] }),
  Gk = (e, t) => ({ ...Dk(e), options: [e, t] }),
  Qk = (e, t) => ({ ...Bk(e), options: [e, t] });
var Jk = "Arrow",
  z0 = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return b.jsx(et.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : b.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
z0.displayName = Jk;
var Yk = z0;
function Xk(e) {
  const [t, n] = x.useState(void 0);
  return (
    Bn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            ((o = c.inlineSize), (a = c.blockSize));
          } else ((o = e.offsetWidth), (a = e.offsetHeight));
          n({ width: o, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var cf = "Popper",
  [B0, H0] = oa(cf),
  [Zk, V0] = B0(cf),
  W0 = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, s] = x.useState(null);
    return b.jsx(Zk, { scope: t, anchor: r, onAnchorChange: s, children: n });
  };
W0.displayName = cf;
var q0 = "PopperAnchor",
  K0 = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = V0(q0, n),
      o = x.useRef(null),
      a = an(t, o);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : b.jsx(et.div, { ...s, ref: a })
    );
  });
K0.displayName = q0;
var uf = "PopperContent",
  [eT, tT] = B0(uf),
  G0 = x.forwardRef((e, t) => {
    var ee, Te, Fe, Oe, le, z;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: d = 0,
        sticky: u = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: v,
        ...g
      } = e,
      w = V0(uf, n),
      [p, m] = x.useState(null),
      y = an(t, (se) => m(se)),
      [_, S] = x.useState(null),
      E = Xk(_),
      T = (E == null ? void 0 : E.width) ?? 0,
      C = (E == null ? void 0 : E.height) ?? 0,
      P = r + (i !== "center" ? "-" + i : ""),
      O =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      D = Array.isArray(c) ? c : [c],
      N = D.length > 0,
      V = { padding: O, boundary: D.filter(rT), altBoundary: N },
      {
        refs: L,
        floatingStyles: J,
        placement: W,
        isPositioned: G,
        middlewareData: R,
      } = zk({
        strategy: "fixed",
        placement: P,
        whileElementsMounted: (...se) =>
          Ok(...se, { animationFrame: h === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          Hk({ mainAxis: s + C, alignmentAxis: o }),
          l &&
            Vk({
              mainAxis: !0,
              crossAxis: !1,
              limiter: u === "partial" ? Wk() : void 0,
              ...V,
            }),
          l && qk({ ...V }),
          Kk({
            ...V,
            apply: ({
              elements: se,
              rects: ge,
              availableWidth: Ie,
              availableHeight: tt,
            }) => {
              const { width: bt, height: xt } = ge.reference,
                nt = se.floating.style;
              (nt.setProperty("--radix-popper-available-width", `${Ie}px`),
                nt.setProperty("--radix-popper-available-height", `${tt}px`),
                nt.setProperty("--radix-popper-anchor-width", `${bt}px`),
                nt.setProperty("--radix-popper-anchor-height", `${xt}px`));
            },
          }),
          _ && Qk({ element: _, padding: a }),
          sT({ arrowWidth: T, arrowHeight: C }),
          f && Gk({ strategy: "referenceHidden", ...V }),
        ],
      }),
      [A, $] = Y0(W),
      q = Ar(v);
    Bn(() => {
      G && (q == null || q());
    }, [G, q]);
    const B = (ee = R.arrow) == null ? void 0 : ee.x,
      Z = (Te = R.arrow) == null ? void 0 : Te.y,
      Y = ((Fe = R.arrow) == null ? void 0 : Fe.centerOffset) !== 0,
      [he, ke] = x.useState();
    return (
      Bn(() => {
        p && ke(window.getComputedStyle(p).zIndex);
      }, [p]),
      b.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...J,
          transform: G ? J.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (Oe = R.transformOrigin) == null ? void 0 : Oe.x,
            (le = R.transformOrigin) == null ? void 0 : le.y,
          ].join(" "),
          ...(((z = R.hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: b.jsx(eT, {
          scope: n,
          placedSide: A,
          onArrowChange: S,
          arrowX: B,
          arrowY: Z,
          shouldHideArrow: Y,
          children: b.jsx(et.div, {
            "data-side": A,
            "data-align": $,
            ...g,
            ref: y,
            style: { ...g.style, animation: G ? void 0 : "none" },
          }),
        }),
      })
    );
  });
G0.displayName = uf;
var Q0 = "PopperArrow",
  nT = { top: "bottom", right: "left", bottom: "top", left: "right" },
  J0 = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = tT(Q0, r),
      o = nT[i.placedSide];
    return b.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: b.jsx(Yk, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
J0.displayName = Q0;
function rT(e) {
  return e !== null;
}
var sT = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, p, m;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [c, d] = Y0(n),
      u = { start: "0%", center: "50%", end: "100%" }[d],
      f = (((p = s.arrow) == null ? void 0 : p.x) ?? 0) + a / 2,
      h = (((m = s.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let v = "",
      g = "";
    return (
      c === "bottom"
        ? ((v = o ? u : `${f}px`), (g = `${-l}px`))
        : c === "top"
          ? ((v = o ? u : `${f}px`), (g = `${r.floating.height + l}px`))
          : c === "right"
            ? ((v = `${-l}px`), (g = o ? u : `${h}px`))
            : c === "left" &&
              ((v = `${r.floating.width + l}px`), (g = o ? u : `${h}px`)),
      { data: { x: v, y: g } }
    );
  },
});
function Y0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var iT = W0,
  oT = K0,
  aT = G0,
  lT = J0,
  [gc, rN] = oa("Tooltip", [H0]),
  vc = H0(),
  X0 = "TooltipProvider",
  cT = 700,
  xd = "tooltip.open",
  [uT, df] = gc(X0),
  Z0 = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = cT,
        skipDelayDuration: r = 300,
        disableHoverableContent: s = !1,
        children: i,
      } = e,
      o = x.useRef(!0),
      a = x.useRef(!1),
      l = x.useRef(0);
    return (
      x.useEffect(() => {
        const c = l.current;
        return () => window.clearTimeout(c);
      }, []),
      b.jsx(uT, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          (window.clearTimeout(l.current), (o.current = !1));
        }, []),
        onClose: x.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback((c) => {
          a.current = c;
        }, []),
        disableHoverableContent: s,
        children: i,
      })
    );
  };
Z0.displayName = X0;
var Do = "Tooltip",
  [dT, yc] = gc(Do),
  ew = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        disableHoverableContent: o,
        delayDuration: a,
      } = e,
      l = df(Do, e.__scopeTooltip),
      c = vc(t),
      [d, u] = x.useState(null),
      f = UE(),
      h = x.useRef(0),
      v = o ?? l.disableHoverableContent,
      g = a ?? l.delayDuration,
      w = x.useRef(!1),
      [p, m] = Qy({
        prop: r,
        defaultProp: s ?? !1,
        onChange: (T) => {
          (T
            ? (l.onOpen(), document.dispatchEvent(new CustomEvent(xd)))
            : l.onClose(),
            i == null || i(T));
        },
        caller: Do,
      }),
      y = x.useMemo(
        () => (p ? (w.current ? "delayed-open" : "instant-open") : "closed"),
        [p],
      ),
      _ = x.useCallback(() => {
        (window.clearTimeout(h.current),
          (h.current = 0),
          (w.current = !1),
          m(!0));
      }, [m]),
      S = x.useCallback(() => {
        (window.clearTimeout(h.current), (h.current = 0), m(!1));
      }, [m]),
      E = x.useCallback(() => {
        (window.clearTimeout(h.current),
          (h.current = window.setTimeout(() => {
            ((w.current = !0), m(!0), (h.current = 0));
          }, g)));
      }, [g, m]);
    return (
      x.useEffect(
        () => () => {
          h.current && (window.clearTimeout(h.current), (h.current = 0));
        },
        [],
      ),
      b.jsx(iT, {
        ...c,
        children: b.jsx(dT, {
          scope: t,
          contentId: f,
          open: p,
          stateAttribute: y,
          trigger: d,
          onTriggerChange: u,
          onTriggerEnter: x.useCallback(() => {
            l.isOpenDelayedRef.current ? E() : _();
          }, [l.isOpenDelayedRef, E, _]),
          onTriggerLeave: x.useCallback(() => {
            v ? S() : (window.clearTimeout(h.current), (h.current = 0));
          }, [S, v]),
          onOpen: _,
          onClose: S,
          disableHoverableContent: v,
          children: n,
        }),
      })
    );
  };
ew.displayName = Do;
var _d = "TooltipTrigger",
  tw = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = yc(_d, n),
      i = df(_d, n),
      o = vc(n),
      a = x.useRef(null),
      l = an(t, a, s.onTriggerChange),
      c = x.useRef(!1),
      d = x.useRef(!1),
      u = x.useCallback(() => (c.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", u),
        [u],
      ),
      b.jsx(oT, {
        asChild: !0,
        ...o,
        children: b.jsx(et.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: De(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: De(e.onPointerLeave, () => {
            (s.onTriggerLeave(), (d.current = !1));
          }),
          onPointerDown: De(e.onPointerDown, () => {
            (s.open && s.onClose(),
              (c.current = !0),
              document.addEventListener("pointerup", u, { once: !0 }));
          }),
          onFocus: De(e.onFocus, () => {
            c.current || s.onOpen();
          }),
          onBlur: De(e.onBlur, s.onClose),
          onClick: De(e.onClick, s.onClose),
        }),
      })
    );
  });
tw.displayName = _d;
var hT = "TooltipPortal",
  [sN, fT] = gc(hT, { forceMount: void 0 }),
  wi = "TooltipContent",
  nw = x.forwardRef((e, t) => {
    const n = fT(wi, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: s = "top", ...i } = e,
      o = yc(wi, e.__scopeTooltip);
    return b.jsx(Jh, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? b.jsx(rw, { side: s, ...i, ref: t })
        : b.jsx(pT, { side: s, ...i, ref: t }),
    });
  }),
  pT = x.forwardRef((e, t) => {
    const n = yc(wi, e.__scopeTooltip),
      r = df(wi, e.__scopeTooltip),
      s = x.useRef(null),
      i = an(t, s),
      [o, a] = x.useState(null),
      { trigger: l, onClose: c } = n,
      d = s.current,
      { onPointerInTransitChange: u } = r,
      f = x.useCallback(() => {
        (a(null), u(!1));
      }, [u]),
      h = x.useCallback(
        (v, g) => {
          const w = v.currentTarget,
            p = { x: v.clientX, y: v.clientY },
            m = wT(p, w.getBoundingClientRect()),
            y = bT(p, m),
            _ = xT(g.getBoundingClientRect()),
            S = ST([...y, ..._]);
          (a(S), u(!0));
        },
        [u],
      );
    return (
      x.useEffect(() => () => f(), [f]),
      x.useEffect(() => {
        if (l && d) {
          const v = (w) => h(w, d),
            g = (w) => h(w, l);
          return (
            l.addEventListener("pointerleave", v),
            d.addEventListener("pointerleave", g),
            () => {
              (l.removeEventListener("pointerleave", v),
                d.removeEventListener("pointerleave", g));
            }
          );
        }
      }, [l, d, h, f]),
      x.useEffect(() => {
        if (o) {
          const v = (g) => {
            const w = g.target,
              p = { x: g.clientX, y: g.clientY },
              m =
                (l == null ? void 0 : l.contains(w)) ||
                (d == null ? void 0 : d.contains(w)),
              y = !_T(p, o);
            m ? f() : y && (f(), c());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [l, d, o, c, f]),
      b.jsx(rw, { ...e, ref: i })
    );
  }),
  [mT, gT] = gc(Do, { isInside: !1 }),
  vT = T1("TooltipContent"),
  rw = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": s,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        ...a
      } = e,
      l = yc(wi, n),
      c = vc(n),
      { onClose: d } = l;
    return (
      x.useEffect(
        () => (
          document.addEventListener(xd, d),
          () => document.removeEventListener(xd, d)
        ),
        [d],
      ),
      x.useEffect(() => {
        if (l.trigger) {
          const u = (f) => {
            const h = f.target;
            h != null && h.contains(l.trigger) && d();
          };
          return (
            window.addEventListener("scroll", u, { capture: !0 }),
            () => window.removeEventListener("scroll", u, { capture: !0 })
          );
        }
      }, [l.trigger, d]),
      b.jsx(Qh, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: (u) => u.preventDefault(),
        onDismiss: d,
        children: b.jsxs(aT, {
          "data-state": l.stateAttribute,
          ...c,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            b.jsx(vT, { children: r }),
            b.jsx(mT, {
              scope: n,
              isInside: !0,
              children: b.jsx(J1, {
                id: l.contentId,
                role: "tooltip",
                children: s || r,
              }),
            }),
          ],
        }),
      })
    );
  });
nw.displayName = wi;
var sw = "TooltipArrow",
  yT = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = vc(n);
    return gT(sw, n).isInside ? null : b.jsx(lT, { ...s, ...r, ref: t });
  });
yT.displayName = sw;
function wT(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    s = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, s, i)) {
    case i:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function bT(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function xT(e) {
  const { top: t, right: n, bottom: r, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: s, y: r },
  ];
}
function _T(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i],
      l = t[o],
      c = a.x,
      d = a.y,
      u = l.x,
      f = l.y;
    d > r != f > r && n < ((u - c) * (r - d)) / (f - d) + c && (s = !s);
  }
  return s;
}
function ST(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    ET(t)
  );
}
function ET(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        o = t[t.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        o = n[n.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) n.pop();
      else break;
    }
    n.push(s);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var kT = Z0,
  TT = ew,
  CT = tw,
  iw = nw;
const RT = kT,
  iN = TT,
  oN = CT,
  PT = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    b.jsx(iw, {
      ref: r,
      sideOffset: t,
      className: te(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
PT.displayName = iw.displayName;
var ca = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ds = typeof window > "u" || "Deno" in globalThis;
function pt() {}
function AT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sd(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ow(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Cr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fm(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== hf(o, t.options)) return !1;
    } else if (!Mo(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function pm(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if ($o(t.options.mutationKey) !== $o(i)) return !1;
    } else if (!Mo(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function hf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || $o)(e);
}
function $o(e) {
  return JSON.stringify(e, (t, n) =>
    kd(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n,
  );
}
function Mo(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => Mo(e[n], t[n]))
        : !1;
}
function aw(e, t) {
  if (e === t) return e;
  const n = mm(e) && mm(t);
  if (n || (kd(e) && kd(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {},
      l = new Set(r);
    let c = 0;
    for (let d = 0; d < o; d++) {
      const u = n ? d : i[d];
      ((!n && l.has(u)) || n) && e[u] === void 0 && t[u] === void 0
        ? ((a[u] = void 0), c++)
        : ((a[u] = aw(e[u], t[u])), a[u] === e[u] && e[u] !== void 0 && c++);
    }
    return s === o && c === s ? e : a;
  }
  return t;
}
function Ed(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function mm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function kd(e) {
  if (!gm(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !gm(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function gm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function OT(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Td(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? aw(e, t)
      : t;
}
function jT(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function NT(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ff = Symbol();
function lw(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === ff
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function IT(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Kr,
  lr,
  Zs,
  yg,
  LT =
    ((yg = class extends ca {
      constructor() {
        super();
        Q(this, Kr);
        Q(this, lr);
        Q(this, Zs);
        U(this, Zs, (t) => {
          if (!ds && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, lr) || this.setEventListener(k(this, Zs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, lr)) == null || t.call(this), U(this, lr, void 0));
      }
      setEventListener(t) {
        var n;
        (U(this, Zs, t),
          (n = k(this, lr)) == null || n.call(this),
          U(
            this,
            lr,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        k(this, Kr) !== t && (U(this, Kr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof k(this, Kr) == "boolean"
          ? k(this, Kr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Kr = new WeakMap()),
    (lr = new WeakMap()),
    (Zs = new WeakMap()),
    yg),
  pf = new LT(),
  ei,
  cr,
  ti,
  wg,
  DT =
    ((wg = class extends ca {
      constructor() {
        super();
        Q(this, ei, !0);
        Q(this, cr);
        Q(this, ti);
        U(this, ti, (t) => {
          if (!ds && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, cr) || this.setEventListener(k(this, ti));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, cr)) == null || t.call(this), U(this, cr, void 0));
      }
      setEventListener(t) {
        var n;
        (U(this, ti, t),
          (n = k(this, cr)) == null || n.call(this),
          U(this, cr, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        k(this, ei) !== t &&
          (U(this, ei, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return k(this, ei);
      }
    }),
    (ei = new WeakMap()),
    (cr = new WeakMap()),
    (ti = new WeakMap()),
    wg),
  zl = new DT();
function Cd() {
  let e, t;
  const n = new Promise((s, i) => {
    ((e = s), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(s) {
    (Object.assign(n, s), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (s) => {
      (r({ status: "fulfilled", value: s }), e(s));
    }),
    (n.reject = (s) => {
      (r({ status: "rejected", reason: s }), t(s));
    }),
    n
  );
}
function $T(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function cw(e) {
  return (e ?? "online") === "online" ? zl.isOnline() : !0;
}
var uw = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function fu(e) {
  return e instanceof uw;
}
function dw(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = Cd(),
    o = (g) => {
      var w;
      r || (f(new uw(g)), (w = e.abort) == null || w.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    c = () =>
      pf.isFocused() &&
      (e.networkMode === "always" || zl.isOnline()) &&
      e.canRun(),
    d = () => cw(e.networkMode) && e.canRun(),
    u = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, g),
        s == null || s(),
        i.resolve(g));
    },
    f = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, g),
        s == null || s(),
        i.reject(g));
    },
    h = () =>
      new Promise((g) => {
        var w;
        ((s = (p) => {
          (r || c()) && g(p);
        }),
          (w = e.onPause) == null || w.call(e));
      }).then(() => {
        var g;
        ((s = void 0), r || (g = e.onContinue) == null || g.call(e));
      }),
    v = () => {
      if (r) return;
      let g;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        g = w ?? e.fn();
      } catch (p) {
        g = Promise.reject(p);
      }
      Promise.resolve(g)
        .then(u)
        .catch((p) => {
          var E;
          if (r) return;
          const m = e.retry ?? (ds ? 0 : 3),
            y = e.retryDelay ?? $T,
            _ = typeof y == "function" ? y(n, p) : y,
            S =
              m === !0 ||
              (typeof m == "number" && n < m) ||
              (typeof m == "function" && m(n, p));
          if (t || !S) {
            f(p);
            return;
          }
          (n++,
            (E = e.onFail) == null || E.call(e, n, p),
            OT(_)
              .then(() => (c() ? void 0 : h()))
              .then(() => {
                t ? f(p) : v();
              }));
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? v() : h().then(v), i),
  };
}
var MT = (e) => setTimeout(e, 0);
function UT() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    s = MT;
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      ((e = []),
        a.length &&
          s(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || o());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var qe = UT(),
  Gr,
  bg,
  hw =
    ((bg = class {
      constructor() {
        Q(this, Gr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          Sd(this.gcTime) &&
            U(
              this,
              Gr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (ds ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        k(this, Gr) && (clearTimeout(k(this, Gr)), U(this, Gr, void 0));
      }
    }),
    (Gr = new WeakMap()),
    bg),
  ni,
  Qr,
  jt,
  Jr,
  Ye,
  Yo,
  Yr,
  Xt,
  Pn,
  xg,
  FT =
    ((xg = class extends hw {
      constructor(t) {
        super();
        Q(this, Xt);
        Q(this, ni);
        Q(this, Qr);
        Q(this, jt);
        Q(this, Jr);
        Q(this, Ye);
        Q(this, Yo);
        Q(this, Yr);
        (U(this, Yr, !1),
          U(this, Yo, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          U(this, Jr, t.client),
          U(this, jt, k(this, Jr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          U(this, ni, zT(this.options)),
          (this.state = t.state ?? k(this, ni)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = k(this, Ye)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...k(this, Yo), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          k(this, jt).remove(this);
      }
      setData(t, n) {
        const r = Td(this.state.data, t, this.options);
        return (
          ie(this, Xt, Pn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ie(this, Xt, Pn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = k(this, Ye)) == null ? void 0 : r.promise;
        return (
          (s = k(this, Ye)) == null || s.cancel(t),
          n ? n.then(pt).catch(pt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(k(this, ni)));
      }
      isActive() {
        return this.observers.some((t) => Nt(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === ff ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Cr(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !ow(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Ye)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Ye)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          k(this, jt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (k(this, Ye) &&
              (k(this, Yr)
                ? k(this, Ye).cancel({ revert: !0 })
                : k(this, Ye).cancelRetry()),
            this.scheduleGc()),
          k(this, jt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ie(this, Xt, Pn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, d, u;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (k(this, Ye))
            return (k(this, Ye).continueRetry(), k(this, Ye).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          s = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (U(this, Yr, !0), r.signal),
            });
          },
          i = () => {
            const f = lw(this.options, n),
              v = (() => {
                const g = {
                  client: k(this, Jr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (s(g), g);
              })();
            return (
              U(this, Yr, !1),
              this.options.persister ? this.options.persister(f, v, this) : f(v)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: k(this, Jr),
              state: this.state,
              fetchFn: i,
            };
            return (s(f), f);
          })();
        ((c = this.options.behavior) == null || c.onFetch(a, this),
          U(this, Qr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = a.fetchOptions) == null ? void 0 : d.meta)) &&
            ie(this, Xt, Pn).call(this, {
              type: "fetch",
              meta: (u = a.fetchOptions) == null ? void 0 : u.meta,
            }));
        const l = (f) => {
          var h, v, g, w;
          ((fu(f) && f.silent) ||
            ie(this, Xt, Pn).call(this, { type: "error", error: f }),
            fu(f) ||
              ((v = (h = k(this, jt).config).onError) == null ||
                v.call(h, f, this),
              (w = (g = k(this, jt).config).onSettled) == null ||
                w.call(g, this.state.data, f, this)),
            this.scheduleGc());
        };
        return (
          U(
            this,
            Ye,
            dw({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, v, g, w;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (p) {
                  l(p);
                  return;
                }
                ((v = (h = k(this, jt).config).onSuccess) == null ||
                  v.call(h, f, this),
                  (w = (g = k(this, jt).config).onSettled) == null ||
                    w.call(g, f, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (f, h) => {
                ie(this, Xt, Pn).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                ie(this, Xt, Pn).call(this, { type: "pause" });
              },
              onContinue: () => {
                ie(this, Xt, Pn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          k(this, Ye).start()
        );
      }
    }),
    (ni = new WeakMap()),
    (Qr = new WeakMap()),
    (jt = new WeakMap()),
    (Jr = new WeakMap()),
    (Ye = new WeakMap()),
    (Yo = new WeakMap()),
    (Yr = new WeakMap()),
    (Xt = new WeakSet()),
    (Pn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...fw(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              U(this, Qr, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const s = t.error;
            return fu(s) && s.revert && k(this, Qr)
              ? { ...k(this, Qr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        qe.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            k(this, jt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    xg);
function fw(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: cw(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function zT(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var gn,
  _g,
  BT =
    ((_g = class extends ca {
      constructor(t = {}) {
        super();
        Q(this, gn);
        ((this.config = t), U(this, gn, new Map()));
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? hf(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new FT({
              client: t,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        k(this, gn).has(t.queryHash) ||
          (k(this, gn).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = k(this, gn).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && k(this, gn).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        qe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return k(this, gn).get(t);
      }
      getAll() {
        return [...k(this, gn).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => fm(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => fm(t, r)) : n;
      }
      notify(t) {
        qe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        qe.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        qe.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (gn = new WeakMap()),
    _g),
  vn,
  rt,
  Xr,
  yn,
  tr,
  Sg,
  HT =
    ((Sg = class extends hw {
      constructor(t) {
        super();
        Q(this, yn);
        Q(this, vn);
        Q(this, rt);
        Q(this, Xr);
        ((this.mutationId = t.mutationId),
          U(this, rt, t.mutationCache),
          U(this, vn, []),
          (this.state = t.state || VT()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        k(this, vn).includes(t) ||
          (k(this, vn).push(t),
          this.clearGcTimeout(),
          k(this, rt).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (U(
          this,
          vn,
          k(this, vn).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          k(this, rt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        k(this, vn).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : k(this, rt).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = k(this, Xr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, o, a, l, c, d, u, f, h, v, g, w, p, m, y, _, S, E, T, C;
        const n = () => {
          ie(this, yn, tr).call(this, { type: "continue" });
        };
        U(
          this,
          Xr,
          dw({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (P, O) => {
              ie(this, yn, tr).call(this, {
                type: "failed",
                failureCount: P,
                error: O,
              });
            },
            onPause: () => {
              ie(this, yn, tr).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => k(this, rt).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          s = !k(this, Xr).canStart();
        try {
          if (r) n();
          else {
            (ie(this, yn, tr).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((o = (i = k(this, rt).config).onMutate) == null
                ? void 0
                : o.call(i, t, this)));
            const O = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            O !== this.state.context &&
              ie(this, yn, tr).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: s,
              });
          }
          const P = await k(this, Xr).start();
          return (
            await ((d = (c = k(this, rt).config).onSuccess) == null
              ? void 0
              : d.call(c, P, t, this.state.context, this)),
            await ((f = (u = this.options).onSuccess) == null
              ? void 0
              : f.call(u, P, t, this.state.context)),
            await ((v = (h = k(this, rt).config).onSettled) == null
              ? void 0
              : v.call(
                  h,
                  P,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((w = (g = this.options).onSettled) == null
              ? void 0
              : w.call(g, P, null, t, this.state.context)),
            ie(this, yn, tr).call(this, { type: "success", data: P }),
            P
          );
        } catch (P) {
          try {
            throw (
              await ((m = (p = k(this, rt).config).onError) == null
                ? void 0
                : m.call(p, P, t, this.state.context, this)),
              await ((_ = (y = this.options).onError) == null
                ? void 0
                : _.call(y, P, t, this.state.context)),
              await ((E = (S = k(this, rt).config).onSettled) == null
                ? void 0
                : E.call(
                    S,
                    void 0,
                    P,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((C = (T = this.options).onSettled) == null
                ? void 0
                : C.call(T, void 0, P, t, this.state.context)),
              P
            );
          } finally {
            ie(this, yn, tr).call(this, { type: "error", error: P });
          }
        } finally {
          k(this, rt).runNext(this);
        }
      }
    }),
    (vn = new WeakMap()),
    (rt = new WeakMap()),
    (Xr = new WeakMap()),
    (yn = new WeakSet()),
    (tr = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        qe.batch(() => {
          (k(this, vn).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            k(this, rt).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    Sg);
function VT() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var In,
  Zt,
  Xo,
  Eg,
  WT =
    ((Eg = class extends ca {
      constructor(t = {}) {
        super();
        Q(this, In);
        Q(this, Zt);
        Q(this, Xo);
        ((this.config = t),
          U(this, In, new Set()),
          U(this, Zt, new Map()),
          U(this, Xo, 0));
      }
      build(t, n, r) {
        const s = new HT({
          mutationCache: this,
          mutationId: ++wa(this, Xo)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(s), s);
      }
      add(t) {
        k(this, In).add(t);
        const n = za(t);
        if (typeof n == "string") {
          const r = k(this, Zt).get(n);
          r ? r.push(t) : k(this, Zt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (k(this, In).delete(t)) {
          const n = za(t);
          if (typeof n == "string") {
            const r = k(this, Zt).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
              } else r[0] === t && k(this, Zt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = za(t);
        if (typeof n == "string") {
          const r = k(this, Zt).get(n),
            s =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = za(t);
        if (typeof n == "string") {
          const s =
            (r = k(this, Zt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        qe.batch(() => {
          (k(this, In).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            k(this, In).clear(),
            k(this, Zt).clear());
        });
      }
      getAll() {
        return Array.from(k(this, In));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => pm(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => pm(t, n));
      }
      notify(t) {
        qe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return qe.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(pt))),
        );
      }
    }),
    (In = new WeakMap()),
    (Zt = new WeakMap()),
    (Xo = new WeakMap()),
    Eg);
function za(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function vm(e) {
  return {
    onFetch: (t, n) => {
      var d, u, f, h, v;
      const r = t.options,
        s =
          (f =
            (u = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : u.fetchMore) == null
            ? void 0
            : f.direction,
        i = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        o = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const c = async () => {
        let g = !1;
        const w = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          p = lw(t.options, t.fetchOptions),
          m = async (y, _, S) => {
            if (g) return Promise.reject();
            if (_ == null && y.pages.length) return Promise.resolve(y);
            const T = (() => {
                const D = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: _,
                  direction: S ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (w(D), D);
              })(),
              C = await p(T),
              { maxPages: P } = t.options,
              O = S ? NT : jT;
            return {
              pages: O(y.pages, C, P),
              pageParams: O(y.pageParams, _, P),
            };
          };
        if (s && i.length) {
          const y = s === "backward",
            _ = y ? qT : ym,
            S = { pages: i, pageParams: o },
            E = _(r, S);
          a = await m(S, E, y);
        } else {
          const y = e ?? i.length;
          do {
            const _ = l === 0 ? (o[0] ?? r.initialPageParam) : ym(r, a);
            if (l > 0 && _ == null) break;
            ((a = await m(a, _)), l++);
          } while (l < y);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, w;
            return (w = (g = t.options).persister) == null
              ? void 0
              : w.call(
                  g,
                  c,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function ym(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function qT(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Ce,
  ur,
  dr,
  ri,
  si,
  hr,
  ii,
  oi,
  kg,
  KT =
    ((kg = class {
      constructor(e = {}) {
        Q(this, Ce);
        Q(this, ur);
        Q(this, dr);
        Q(this, ri);
        Q(this, si);
        Q(this, hr);
        Q(this, ii);
        Q(this, oi);
        (U(this, Ce, e.queryCache || new BT()),
          U(this, ur, e.mutationCache || new WT()),
          U(this, dr, e.defaultOptions || {}),
          U(this, ri, new Map()),
          U(this, si, new Map()),
          U(this, hr, 0));
      }
      mount() {
        (wa(this, hr)._++,
          k(this, hr) === 1 &&
            (U(
              this,
              ii,
              pf.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, Ce).onFocus());
              }),
            ),
            U(
              this,
              oi,
              zl.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, Ce).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (wa(this, hr)._--,
          k(this, hr) === 0 &&
            ((e = k(this, ii)) == null || e.call(this),
            U(this, ii, void 0),
            (t = k(this, oi)) == null || t.call(this),
            U(this, oi, void 0)));
      }
      isFetching(e) {
        return k(this, Ce).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return k(this, ur).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, Ce).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = k(this, Ce).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Cr(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return k(this, Ce)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = k(this, Ce).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = AT(t, i);
        if (o !== void 0)
          return k(this, Ce)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return qe.batch(() =>
          k(this, Ce)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, Ce).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = k(this, Ce);
        qe.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = k(this, Ce);
        return qe.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = qe.batch(() =>
            k(this, Ce)
              .findAll(e)
              .map((s) => s.cancel(n)),
          );
        return Promise.all(r).then(pt).catch(pt);
      }
      invalidateQueries(e, t = {}) {
        return qe.batch(
          () => (
            k(this, Ce)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = qe.batch(() =>
            k(this, Ce)
              .findAll(e)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(pt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(pt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = k(this, Ce).build(this, t);
        return n.isStaleByTime(Cr(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(pt).catch(pt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = vm(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(pt).catch(pt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = vm(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return zl.isOnline()
          ? k(this, ur).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return k(this, Ce);
      }
      getMutationCache() {
        return k(this, ur);
      }
      getDefaultOptions() {
        return k(this, dr);
      }
      setDefaultOptions(e) {
        U(this, dr, e);
      }
      setQueryDefaults(e, t) {
        k(this, ri).set($o(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...k(this, ri).values()],
          n = {};
        return (
          t.forEach((r) => {
            Mo(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        k(this, si).set($o(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...k(this, si).values()],
          n = {};
        return (
          t.forEach((r) => {
            Mo(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...k(this, dr).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = hf(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === ff && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...k(this, dr).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (k(this, Ce).clear(), k(this, ur).clear());
      }
    }),
    (Ce = new WeakMap()),
    (ur = new WeakMap()),
    (dr = new WeakMap()),
    (ri = new WeakMap()),
    (si = new WeakMap()),
    (hr = new WeakMap()),
    (ii = new WeakMap()),
    (oi = new WeakMap()),
    kg),
  ht,
  oe,
  Zo,
  st,
  Zr,
  ai,
  fr,
  pr,
  ea,
  li,
  ci,
  es,
  ts,
  mr,
  ui,
  ue,
  Yi,
  Rd,
  Pd,
  Ad,
  Od,
  jd,
  Nd,
  Id,
  pw,
  Tg,
  GT =
    ((Tg = class extends ca {
      constructor(t, n) {
        super();
        Q(this, ue);
        Q(this, ht);
        Q(this, oe);
        Q(this, Zo);
        Q(this, st);
        Q(this, Zr);
        Q(this, ai);
        Q(this, fr);
        Q(this, pr);
        Q(this, ea);
        Q(this, li);
        Q(this, ci);
        Q(this, es);
        Q(this, ts);
        Q(this, mr);
        Q(this, ui, new Set());
        ((this.options = n),
          U(this, ht, t),
          U(this, pr, null),
          U(this, fr, Cd()),
          this.options.experimental_prefetchInRender ||
            k(this, fr).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            ),
          this.bindMethods(),
          this.setOptions(n));
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (k(this, oe).addObserver(this),
          wm(k(this, oe), this.options)
            ? ie(this, ue, Yi).call(this)
            : this.updateResult(),
          ie(this, ue, Od).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Ld(k(this, oe), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Ld(k(this, oe), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        ((this.listeners = new Set()),
          ie(this, ue, jd).call(this),
          ie(this, ue, Nd).call(this),
          k(this, oe).removeObserver(this));
      }
      setOptions(t) {
        const n = this.options,
          r = k(this, oe);
        if (
          ((this.options = k(this, ht).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof Nt(this.options.enabled, k(this, oe)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean",
          );
        (ie(this, ue, Id).call(this),
          k(this, oe).setOptions(this.options),
          n._defaulted &&
            !Ed(this.options, n) &&
            k(this, ht)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: k(this, oe),
                observer: this,
              }));
        const s = this.hasListeners();
        (s &&
          bm(k(this, oe), r, this.options, n) &&
          ie(this, ue, Yi).call(this),
          this.updateResult(),
          s &&
            (k(this, oe) !== r ||
              Nt(this.options.enabled, k(this, oe)) !==
                Nt(n.enabled, k(this, oe)) ||
              Cr(this.options.staleTime, k(this, oe)) !==
                Cr(n.staleTime, k(this, oe))) &&
            ie(this, ue, Rd).call(this));
        const i = ie(this, ue, Pd).call(this);
        s &&
          (k(this, oe) !== r ||
            Nt(this.options.enabled, k(this, oe)) !==
              Nt(n.enabled, k(this, oe)) ||
            i !== k(this, mr)) &&
          ie(this, ue, Ad).call(this, i);
      }
      getOptimisticResult(t) {
        const n = k(this, ht).getQueryCache().build(k(this, ht), t),
          r = this.createResult(n, t);
        return (
          JT(this, r) &&
            (U(this, st, r),
            U(this, ai, this.options),
            U(this, Zr, k(this, oe).state)),
          r
        );
      }
      getCurrentResult() {
        return k(this, st);
      }
      trackResult(t, n) {
        return new Proxy(t, {
          get: (r, s) => (
            this.trackProp(s),
            n == null || n(s),
            Reflect.get(r, s)
          ),
        });
      }
      trackProp(t) {
        k(this, ui).add(t);
      }
      getCurrentQuery() {
        return k(this, oe);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = k(this, ht).defaultQueryOptions(t),
          r = k(this, ht).getQueryCache().build(k(this, ht), n);
        return r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return ie(this, ue, Yi)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), k(this, st)));
      }
      createResult(t, n) {
        var P;
        const r = k(this, oe),
          s = this.options,
          i = k(this, st),
          o = k(this, Zr),
          a = k(this, ai),
          c = t !== r ? t.state : k(this, Zo),
          { state: d } = t;
        let u = { ...d },
          f = !1,
          h;
        if (n._optimisticResults) {
          const O = this.hasListeners(),
            D = !O && wm(t, n),
            N = O && bm(t, r, n, s);
          ((D || N) && (u = { ...u, ...fw(d.data, t.options) }),
            n._optimisticResults === "isRestoring" && (u.fetchStatus = "idle"));
        }
        let { error: v, errorUpdatedAt: g, status: w } = u;
        h = u.data;
        let p = !1;
        if (n.placeholderData !== void 0 && h === void 0 && w === "pending") {
          let O;
          (i != null &&
          i.isPlaceholderData &&
          n.placeholderData === (a == null ? void 0 : a.placeholderData)
            ? ((O = i.data), (p = !0))
            : (O =
                typeof n.placeholderData == "function"
                  ? n.placeholderData(
                      (P = k(this, ci)) == null ? void 0 : P.state.data,
                      k(this, ci),
                    )
                  : n.placeholderData),
            O !== void 0 &&
              ((w = "success"),
              (h = Td(i == null ? void 0 : i.data, O, n)),
              (f = !0)));
        }
        if (n.select && h !== void 0 && !p)
          if (
            i &&
            h === (o == null ? void 0 : o.data) &&
            n.select === k(this, ea)
          )
            h = k(this, li);
          else
            try {
              (U(this, ea, n.select),
                (h = n.select(h)),
                (h = Td(i == null ? void 0 : i.data, h, n)),
                U(this, li, h),
                U(this, pr, null));
            } catch (O) {
              U(this, pr, O);
            }
        k(this, pr) &&
          ((v = k(this, pr)),
          (h = k(this, li)),
          (g = Date.now()),
          (w = "error"));
        const m = u.fetchStatus === "fetching",
          y = w === "pending",
          _ = w === "error",
          S = y && m,
          E = h !== void 0,
          C = {
            status: w,
            fetchStatus: u.fetchStatus,
            isPending: y,
            isSuccess: w === "success",
            isError: _,
            isInitialLoading: S,
            isLoading: S,
            data: h,
            dataUpdatedAt: u.dataUpdatedAt,
            error: v,
            errorUpdatedAt: g,
            failureCount: u.fetchFailureCount,
            failureReason: u.fetchFailureReason,
            errorUpdateCount: u.errorUpdateCount,
            isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
            isFetchedAfterMount:
              u.dataUpdateCount > c.dataUpdateCount ||
              u.errorUpdateCount > c.errorUpdateCount,
            isFetching: m,
            isRefetching: m && !y,
            isLoadingError: _ && !E,
            isPaused: u.fetchStatus === "paused",
            isPlaceholderData: f,
            isRefetchError: _ && E,
            isStale: mf(t, n),
            refetch: this.refetch,
            promise: k(this, fr),
            isEnabled: Nt(n.enabled, t) !== !1,
          };
        if (this.options.experimental_prefetchInRender) {
          const O = (V) => {
              C.status === "error"
                ? V.reject(C.error)
                : C.data !== void 0 && V.resolve(C.data);
            },
            D = () => {
              const V = U(this, fr, (C.promise = Cd()));
              O(V);
            },
            N = k(this, fr);
          switch (N.status) {
            case "pending":
              t.queryHash === r.queryHash && O(N);
              break;
            case "fulfilled":
              (C.status === "error" || C.data !== N.value) && D();
              break;
            case "rejected":
              (C.status !== "error" || C.error !== N.reason) && D();
              break;
          }
        }
        return C;
      }
      updateResult() {
        const t = k(this, st),
          n = this.createResult(k(this, oe), this.options);
        if (
          (U(this, Zr, k(this, oe).state),
          U(this, ai, this.options),
          k(this, Zr).data !== void 0 && U(this, ci, k(this, oe)),
          Ed(n, t))
        )
          return;
        U(this, st, n);
        const r = () => {
          if (!t) return !0;
          const { notifyOnChangeProps: s } = this.options,
            i = typeof s == "function" ? s() : s;
          if (i === "all" || (!i && !k(this, ui).size)) return !0;
          const o = new Set(i ?? k(this, ui));
          return (
            this.options.throwOnError && o.add("error"),
            Object.keys(k(this, st)).some((a) => {
              const l = a;
              return k(this, st)[l] !== t[l] && o.has(l);
            })
          );
        };
        ie(this, ue, pw).call(this, { listeners: r() });
      }
      onQueryUpdate() {
        (this.updateResult(),
          this.hasListeners() && ie(this, ue, Od).call(this));
      }
    }),
    (ht = new WeakMap()),
    (oe = new WeakMap()),
    (Zo = new WeakMap()),
    (st = new WeakMap()),
    (Zr = new WeakMap()),
    (ai = new WeakMap()),
    (fr = new WeakMap()),
    (pr = new WeakMap()),
    (ea = new WeakMap()),
    (li = new WeakMap()),
    (ci = new WeakMap()),
    (es = new WeakMap()),
    (ts = new WeakMap()),
    (mr = new WeakMap()),
    (ui = new WeakMap()),
    (ue = new WeakSet()),
    (Yi = function (t) {
      ie(this, ue, Id).call(this);
      let n = k(this, oe).fetch(this.options, t);
      return ((t != null && t.throwOnError) || (n = n.catch(pt)), n);
    }),
    (Rd = function () {
      ie(this, ue, jd).call(this);
      const t = Cr(this.options.staleTime, k(this, oe));
      if (ds || k(this, st).isStale || !Sd(t)) return;
      const r = ow(k(this, st).dataUpdatedAt, t) + 1;
      U(
        this,
        es,
        setTimeout(() => {
          k(this, st).isStale || this.updateResult();
        }, r),
      );
    }),
    (Pd = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(k(this, oe))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Ad = function (t) {
      (ie(this, ue, Nd).call(this),
        U(this, mr, t),
        !(
          ds ||
          Nt(this.options.enabled, k(this, oe)) === !1 ||
          !Sd(k(this, mr)) ||
          k(this, mr) === 0
        ) &&
          U(
            this,
            ts,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || pf.isFocused()) &&
                  ie(this, ue, Yi).call(this);
              },
              k(this, mr),
            ),
          ));
    }),
    (Od = function () {
      (ie(this, ue, Rd).call(this),
        ie(this, ue, Ad).call(this, ie(this, ue, Pd).call(this)));
    }),
    (jd = function () {
      k(this, es) && (clearTimeout(k(this, es)), U(this, es, void 0));
    }),
    (Nd = function () {
      k(this, ts) && (clearInterval(k(this, ts)), U(this, ts, void 0));
    }),
    (Id = function () {
      const t = k(this, ht).getQueryCache().build(k(this, ht), this.options);
      if (t === k(this, oe)) return;
      const n = k(this, oe);
      (U(this, oe, t),
        U(this, Zo, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this)));
    }),
    (pw = function (t) {
      qe.batch(() => {
        (t.listeners &&
          this.listeners.forEach((n) => {
            n(k(this, st));
          }),
          k(this, ht)
            .getQueryCache()
            .notify({ query: k(this, oe), type: "observerResultsUpdated" }));
      });
    }),
    Tg);
function QT(e, t) {
  return (
    Nt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function wm(e, t) {
  return QT(e, t) || (e.state.data !== void 0 && Ld(e, t, t.refetchOnMount));
}
function Ld(e, t, n) {
  if (Nt(t.enabled, e) !== !1 && Cr(t.staleTime, e) !== "static") {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && mf(e, t));
  }
  return !1;
}
function bm(e, t, n, r) {
  return (
    (e !== t || Nt(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    mf(e, n)
  );
}
function mf(e, t) {
  return Nt(t.enabled, e) !== !1 && e.isStaleByTime(Cr(t.staleTime, e));
}
function JT(e, t) {
  return !Ed(e.getCurrentResult(), t);
}
var mw = x.createContext(void 0),
  YT = (e) => {
    const t = x.useContext(mw);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  XT = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    b.jsx(mw.Provider, { value: e, children: t })
  ),
  gw = x.createContext(!1),
  ZT = () => x.useContext(gw);
gw.Provider;
function eC() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var tC = x.createContext(eC()),
  nC = () => x.useContext(tC),
  rC = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  sC = (e) => {
    x.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  iC = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: s,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((s && e.data === void 0) || IT(n, [e.error, r])),
  oC = (e) => {
    if (e.suspense) {
      const t = (r) => (r === "static" ? r : Math.max(r ?? 1e3, 1e3)),
        n = e.staleTime;
      ((e.staleTime = typeof n == "function" ? (...r) => t(n(...r)) : t(n)),
        typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
    }
  },
  aC = (e, t) => e.isLoading && e.isFetching && !t,
  lC = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  xm = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function cC(e, t, n) {
  var u, f, h, v, g;
  const r = ZT(),
    s = nC(),
    i = YT(),
    o = i.defaultQueryOptions(e);
  ((f =
    (u = i.getDefaultOptions().queries) == null
      ? void 0
      : u._experimental_beforeQuery) == null || f.call(u, o),
    (o._optimisticResults = r ? "isRestoring" : "optimistic"),
    oC(o),
    rC(o, s),
    sC(s));
  const a = !i.getQueryCache().get(o.queryHash),
    [l] = x.useState(() => new t(i, o)),
    c = l.getOptimisticResult(o),
    d = !r && e.subscribed !== !1;
  if (
    (x.useSyncExternalStore(
      x.useCallback(
        (w) => {
          const p = d ? l.subscribe(qe.batchCalls(w)) : pt;
          return (l.updateResult(), p);
        },
        [l, d],
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult(),
    ),
    x.useEffect(() => {
      l.setOptions(o);
    }, [o, l]),
    lC(o, c))
  )
    throw xm(o, l, s);
  if (
    iC({
      result: c,
      errorResetBoundary: s,
      throwOnError: o.throwOnError,
      query: i.getQueryCache().get(o.queryHash),
      suspense: o.suspense,
    })
  )
    throw c.error;
  if (
    ((v =
      (h = i.getDefaultOptions().queries) == null
        ? void 0
        : h._experimental_afterQuery) == null || v.call(h, o, c),
    o.experimental_prefetchInRender && !ds && aC(c, r))
  ) {
    const w = a
      ? xm(o, l, s)
      : (g = i.getQueryCache().get(o.queryHash)) == null
        ? void 0
        : g.promise;
    w == null ||
      w.catch(pt).finally(() => {
        l.updateResult();
      });
  }
  return o.notifyOnChangeProps ? c : l.trackResult(c);
}
function uC(e, t) {
  return cC(e, GT);
}
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Uo() {
  return (
    (Uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Uo.apply(this, arguments)
  );
}
var yr;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(yr || (yr = {}));
const _m = "popstate";
function dC(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: i, search: o, hash: a } = r.location;
    return Dd(
      "",
      { pathname: i, search: o, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : yw(s);
  }
  return fC(t, n, null, e);
}
function Me(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function vw(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function hC() {
  return Math.random().toString(36).substr(2, 8);
}
function Sm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Dd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Uo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Pi(t) : t,
      { state: n, key: (t && t.key) || r || hC() },
    )
  );
}
function yw(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Pi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function fC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    o = s.history,
    a = yr.Pop,
    l = null,
    c = d();
  c == null && ((c = 0), o.replaceState(Uo({}, o.state, { idx: c }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function u() {
    a = yr.Pop;
    let w = d(),
      p = w == null ? null : w - c;
    ((c = w), l && l({ action: a, location: g.location, delta: p }));
  }
  function f(w, p) {
    a = yr.Push;
    let m = Dd(g.location, w, p);
    c = d() + 1;
    let y = Sm(m, c),
      _ = g.createHref(m);
    try {
      o.pushState(y, "", _);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      s.location.assign(_);
    }
    i && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(w, p) {
    a = yr.Replace;
    let m = Dd(g.location, w, p);
    c = d();
    let y = Sm(m, c),
      _ = g.createHref(m);
    (o.replaceState(y, "", _),
      i && l && l({ action: a, location: g.location, delta: 0 }));
  }
  function v(w) {
    let p = s.location.origin !== "null" ? s.location.origin : s.location.href,
      m = typeof w == "string" ? w : yw(w);
    return (
      (m = m.replace(/ $/, "%20")),
      Me(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          m,
      ),
      new URL(m, p)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(s, o);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(_m, u),
        (l = w),
        () => {
          (s.removeEventListener(_m, u), (l = null));
        }
      );
    },
    createHref(w) {
      return t(s, w);
    },
    createURL: v,
    encodeLocation(w) {
      let p = v(w);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: h,
    go(w) {
      return o.go(w);
    },
  };
  return g;
}
var Em;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Em || (Em = {}));
function pC(e, t, n) {
  return (n === void 0 && (n = "/"), mC(e, t, n, !1));
}
function mC(e, t, n, r) {
  let s = typeof t == "string" ? Pi(t) : t,
    i = xw(s.pathname || "/", n);
  if (i == null) return null;
  let o = ww(e);
  gC(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let c = CC(i);
    a = kC(o[l], c, r);
  }
  return a;
}
function ww(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let s = (i, o, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Me(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = ss([r, l.relativePath]),
      d = n.concat(l);
    (i.children &&
      i.children.length > 0 &&
      (Me(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      ww(i.children, t, d, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: SC(c, i.index), routesMeta: d }));
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
      else for (let l of bw(i.path)) s(i, o, l);
    }),
    t
  );
}
function bw(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let o = bw(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    s && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function gC(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : EC(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const vC = /^:[\w-]+$/,
  yC = 3,
  wC = 2,
  bC = 1,
  xC = 10,
  _C = -2,
  km = (e) => e === "*";
function SC(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(km) && (r += _C),
    t && (r += wC),
    n
      .filter((s) => !km(s))
      .reduce((s, i) => s + (vC.test(i) ? yC : i === "" ? bC : xC), r)
  );
}
function EC(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function kC(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      c = a === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      u = Tm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        d,
      ),
      f = l.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = Tm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d,
        )),
      !u)
    )
      return null;
    (Object.assign(s, u.params),
      o.push({
        params: s,
        pathname: ss([i, u.pathname]),
        pathnameBase: NC(ss([i, u.pathnameBase])),
        route: f,
      }),
      u.pathnameBase !== "/" && (i = ss([i, u.pathnameBase])));
  }
  return o;
}
function Tm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = TC(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((c, d, u) => {
      let { paramName: f, isOptional: h } = d;
      if (f === "*") {
        let g = a[u] || "";
        o = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[u];
      return (
        h && !v ? (c[f] = void 0) : (c[f] = (v || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function TC(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    vw(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function CC(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      vw(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function xw(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function RC(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? Pi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : PC(n, t)) : t,
    search: IC(r),
    hash: LC(s),
  };
}
function PC(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function AC(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function OC(e, t) {
  let n = AC(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function jC(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Pi(e))
    : ((s = Uo({}, e)),
      Me(
        !s.pathname || !s.pathname.includes("?"),
        pu("?", "pathname", "search", s),
      ),
      Me(
        !s.pathname || !s.pathname.includes("#"),
        pu("#", "pathname", "hash", s),
      ),
      Me(!s.search || !s.search.includes("#"), pu("#", "search", "hash", s)));
  let i = e === "" || s.pathname === "",
    o = i ? "/" : s.pathname,
    a;
  if (o == null) a = n;
  else {
    let u = t.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) (f.shift(), (u -= 1));
      s.pathname = f.join("/");
    }
    a = u >= 0 ? t[u] : "/";
  }
  let l = RC(s, a),
    c = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l);
}
const ss = (e) => e.join("/").replace(/\/\/+/g, "/"),
  NC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  IC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  LC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function DC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const _w = ["post", "put", "patch", "delete"];
new Set(_w);
const $C = ["get", ..._w];
new Set($C);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fo() {
  return (
    (Fo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fo.apply(this, arguments)
  );
}
const gf = x.createContext(null),
  MC = x.createContext(null),
  wc = x.createContext(null),
  bc = x.createContext(null),
  Ai = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Sw = x.createContext(null);
function xc() {
  return x.useContext(bc) != null;
}
function _c() {
  return (xc() || Me(!1), x.useContext(bc).location);
}
function Ew(e) {
  x.useContext(wc).static || x.useLayoutEffect(e);
}
function UC() {
  let { isDataRoute: e } = x.useContext(Ai);
  return e ? XC() : FC();
}
function FC() {
  xc() || Me(!1);
  let e = x.useContext(gf),
    { basename: t, future: n, navigator: r } = x.useContext(wc),
    { matches: s } = x.useContext(Ai),
    { pathname: i } = _c(),
    o = JSON.stringify(OC(s, n.v7_relativeSplatPath)),
    a = x.useRef(!1);
  return (
    Ew(() => {
      a.current = !0;
    }),
    x.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let u = jC(c, JSON.parse(o), i, d.relative === "path");
        (e == null &&
          t !== "/" &&
          (u.pathname = u.pathname === "/" ? t : ss([t, u.pathname])),
          (d.replace ? r.replace : r.push)(u, d.state, d));
      },
      [t, r, o, i, e],
    )
  );
}
function zC(e, t) {
  return BC(e, t);
}
function BC(e, t, n, r) {
  xc() || Me(!1);
  let { navigator: s } = x.useContext(wc),
    { matches: i } = x.useContext(Ai),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let c = _c(),
    d;
  if (t) {
    var u;
    let w = typeof t == "string" ? Pi(t) : t;
    (l === "/" || ((u = w.pathname) != null && u.startsWith(l)) || Me(!1),
      (d = w));
  } else d = c;
  let f = d.pathname || "/",
    h = f;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let v = pC(e, { pathname: h }),
    g = KC(
      v &&
        v.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: ss([
              l,
              s.encodeLocation
                ? s.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : ss([
                    l,
                    s.encodeLocation
                      ? s.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && g
    ? x.createElement(
        bc.Provider,
        {
          value: {
            location: Fo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: yr.Pop,
          },
        },
        g,
      )
    : g;
}
function HC() {
  let e = YC(),
    t = DC(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: s }, n) : null,
    null,
  );
}
const VC = x.createElement(HC, null);
class WC extends x.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          Ai.Provider,
          { value: this.props.routeContext },
          x.createElement(Sw.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function qC(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = x.useContext(gf);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Ai.Provider, { value: t }, r)
  );
}
function KC(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let d = o.findIndex(
      (u) => u.route.id && (a == null ? void 0 : a[u.route.id]) !== void 0,
    );
    (d >= 0 || Me(!1), (o = o.slice(0, Math.min(o.length, d + 1))));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let u = o[d];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (c = d),
        u.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          v =
            u.route.loader &&
            f[u.route.id] === void 0 &&
            (!h || h[u.route.id] === void 0);
        if (u.route.lazy || v) {
          ((l = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((d, u, f) => {
    let h,
      v = !1,
      g = null,
      w = null;
    n &&
      ((h = a && u.route.id ? a[u.route.id] : void 0),
      (g = u.route.errorElement || VC),
      l &&
        (c < 0 && f === 0
          ? ((v = !0), (w = null))
          : c === f &&
            ((v = !0), (w = u.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, f + 1)),
      m = () => {
        let y;
        return (
          h
            ? (y = g)
            : v
              ? (y = w)
              : u.route.Component
                ? (y = x.createElement(u.route.Component, null))
                : u.route.element
                  ? (y = u.route.element)
                  : (y = d),
          x.createElement(qC, {
            match: u,
            routeContext: { outlet: d, matches: p, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || f === 0)
      ? x.createElement(WC, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var kw = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(kw || {}),
  Bl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Bl || {});
function GC(e) {
  let t = x.useContext(gf);
  return (t || Me(!1), t);
}
function QC(e) {
  let t = x.useContext(MC);
  return (t || Me(!1), t);
}
function JC(e) {
  let t = x.useContext(Ai);
  return (t || Me(!1), t);
}
function Tw(e) {
  let t = JC(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || Me(!1), n.route.id);
}
function YC() {
  var e;
  let t = x.useContext(Sw),
    n = QC(Bl.UseRouteError),
    r = Tw(Bl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function XC() {
  let { router: e } = GC(kw.UseNavigateStable),
    t = Tw(Bl.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Ew(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (s, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Fo({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
function ZC(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function ks(e) {
  Me(!1);
}
function eR(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = yr.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  xc() && Me(!1);
  let l = t.replace(/^\/*/, "/"),
    c = x.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Fo({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, o],
    );
  typeof r == "string" && (r = Pi(r));
  let {
      pathname: d = "/",
      search: u = "",
      hash: f = "",
      state: h = null,
      key: v = "default",
    } = r,
    g = x.useMemo(() => {
      let w = xw(d, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: u, hash: f, state: h, key: v },
            navigationType: s,
          };
    }, [l, d, u, f, h, v, s]);
  return g == null
    ? null
    : x.createElement(
        wc.Provider,
        { value: c },
        x.createElement(bc.Provider, { children: n, value: g }),
      );
}
function tR(e) {
  let { children: t, location: n } = e;
  return zC($d(t), n);
}
new Promise(() => {});
function $d(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, s) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, s];
      if (r.type === x.Fragment) {
        n.push.apply(n, $d(r.props.children, i));
        return;
      }
      (r.type !== ks && Me(!1), !r.props.index || !r.props.children || Me(!1));
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = $d(r.props.children, i)), n.push(o));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Md(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((s) => [n, s]) : [[n, r]]);
          }, []),
    )
  );
}
function nR(e, t) {
  let n = Md(e);
  return (
    t &&
      t.forEach((r, s) => {
        n.has(s) ||
          t.getAll(s).forEach((i) => {
            n.append(s, i);
          });
      }),
    n
  );
}
const rR = "6";
try {
  window.__reactRouterVersion = rR;
} catch {}
const sR = "startTransition",
  Cm = rh[sR];
function iR(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    i = x.useRef();
  i.current == null && (i.current = dC({ window: s, v5Compat: !0 }));
  let o = i.current,
    [a, l] = x.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    d = x.useCallback(
      (u) => {
        c && Cm ? Cm(() => l(u)) : l(u);
      },
      [l, c],
    );
  return (
    x.useLayoutEffect(() => o.listen(d), [o, d]),
    x.useEffect(() => ZC(r), [r]),
    x.createElement(eR, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
var Rm;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Rm || (Rm = {}));
var Pm;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Pm || (Pm = {}));
function aN(e) {
  let t = x.useRef(Md(e)),
    n = x.useRef(!1),
    r = _c(),
    s = x.useMemo(() => nR(r.search, n.current ? null : t.current), [r.search]),
    i = UC(),
    o = x.useCallback(
      (a, l) => {
        const c = Md(typeof a == "function" ? a(s) : a);
        ((n.current = !0), i("?" + c, l));
      },
      [i, s],
    );
  return [s, o];
}
var vf = "Progress",
  yf = 100,
  [oR, lN] = oa(vf),
  [aR, lR] = oR(vf),
  Cw = x.forwardRef((e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: s,
      getValueLabel: i = cR,
      ...o
    } = e;
    (s || s === 0) && !Am(s) && console.error(uR(`${s}`, "Progress"));
    const a = Am(s) ? s : yf;
    r !== null && !Om(r, a) && console.error(dR(`${r}`, "Progress"));
    const l = Om(r, a) ? r : null,
      c = Hl(l) ? i(l, a) : void 0;
    return b.jsx(aR, {
      scope: n,
      value: l,
      max: a,
      children: b.jsx(et.div, {
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": Hl(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": Aw(l, a),
        "data-value": l ?? void 0,
        "data-max": a,
        ...o,
        ref: t,
      }),
    });
  });
Cw.displayName = vf;
var Rw = "ProgressIndicator",
  Pw = x.forwardRef((e, t) => {
    const { __scopeProgress: n, ...r } = e,
      s = lR(Rw, n);
    return b.jsx(et.div, {
      "data-state": Aw(s.value, s.max),
      "data-value": s.value ?? void 0,
      "data-max": s.max,
      ...r,
      ref: t,
    });
  });
Pw.displayName = Rw;
function cR(e, t) {
  return `${Math.round((e / t) * 100)}%`;
}
function Aw(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Hl(e) {
  return typeof e == "number";
}
function Am(e) {
  return Hl(e) && !isNaN(e) && e > 0;
}
function Om(e, t) {
  return Hl(e) && !isNaN(e) && e <= t && e >= 0;
}
function uR(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${yf}\`.`;
}
function dR(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${yf} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Ow = Cw,
  hR = Pw;
const jw = x.forwardRef(
  ({ className: e, value: t, indicatorClassName: n, ...r }, s) => {
    const o =
      n === "funnel-bar-ok" || n === "funnel-bar-alert"
        ? n === "funnel-bar-alert"
          ? {
              background:
                "linear-gradient(90deg, hsl(0 72% 51%), hsl(0 84% 60%))",
            }
          : {
              background:
                "linear-gradient(90deg, hsl(142 71% 45%), hsl(142 76% 36%))",
            }
        : {
            background:
              "linear-gradient(90deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))",
          };
    return b.jsx(Ow, {
      ref: s,
      className: te(
        "relative h-4 w-full overflow-hidden rounded-none bg-secondary",
        e,
      ),
      ...r,
      children: b.jsx(hR, {
        className:
          "h-full w-full flex-1 transition-all duration-500 ease-out relative overflow-hidden",
        style: { transform: `translateX(-${100 - (t || 0)}%)`, ...o },
        children: b.jsx("span", {
          className: "absolute inset-0 w-full h-full animate-shimmer",
          style: {
            background:
              "linear-gradient(90deg, transparent, hsla(0,0%,100%,0.25), transparent)",
          },
        }),
      }),
    });
  },
);
jw.displayName = Ow.displayName;
function fR(e, t) {
  if (t <= 0) return 0;
  const n = Math.max(0, e / t);
  return 0.2 + Math.sqrt(n) * 0.8;
}
const pR = ({ currentStep: e, totalSteps: t }) => {
    const n = fR(e, t) * 100;
    return b.jsx(jw, { value: n, className: "h-2" });
  },
  Nw = x.forwardRef(({ className: e, ...t }, n) =>
    b.jsx("div", {
      ref: n,
      className: te(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e,
      ),
      ...t,
    }),
  );
Nw.displayName = "Card";
const Iw = x.forwardRef(({ className: e, ...t }, n) =>
  b.jsx("div", {
    ref: n,
    className: te("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
Iw.displayName = "CardHeader";
const Lw = x.forwardRef(({ className: e, ...t }, n) =>
  b.jsx("h3", {
    ref: n,
    className: te("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
Lw.displayName = "CardTitle";
const mR = x.forwardRef(({ className: e, ...t }, n) =>
  b.jsx("p", {
    ref: n,
    className: te("text-sm text-muted-foreground", e),
    ...t,
  }),
);
mR.displayName = "CardDescription";
const Dw = x.forwardRef(({ className: e, ...t }, n) =>
  b.jsx("div", { ref: n, className: te("p-6 pt-0", e), ...t }),
);
Dw.displayName = "CardContent";
const gR = x.forwardRef(({ className: e, ...t }, n) =>
  b.jsx("div", {
    ref: n,
    className: te("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
gR.displayName = "CardFooter";
const Ue = ({ title: e, className: t }) =>
  b.jsx("div", {
    className: te("text-center mb-8", t),
    children: b.jsx("h2", {
      className:
        "text-xl font-semibold leading-snug tracking-tight font-heading text-white",
      children: e,
    }),
  });
Ue.displayName = "Título";
const bi = ({ children: e, className: t }) =>
  b.jsx("p", {
    className: te("text-sm text-muted-foreground text-center", t),
    children: e,
  });
bi.displayName = "Texto";
let vR = 0;
const ua = ({ label: e, className: t, onClick: n, onClickSound: r, ...s }) => {
  const [i, o] = x.useState([]),
    a = x.useRef(null),
    l = x.useCallback(
      (c) => {
        const d = a.current;
        if (!d) return;
        r == null || r();
        const u = d.getBoundingClientRect(),
          f = c.clientX - u.left,
          h = c.clientY - u.top,
          v =
            Math.max(
              Math.hypot(f, h),
              Math.hypot(u.width - f, h),
              Math.hypot(f, u.height - h),
              Math.hypot(u.width - f, u.height - h),
            ) * 2,
          g = ++vR;
        (o((w) => [...w, { x: f, y: h, size: v, id: g }]),
          setTimeout(() => {
            (o((w) => w.filter((p) => p.id !== g)), n == null || n(c));
          }, 250));
      },
      [n, r],
    );
  return b.jsx("div", {
    className: te("relative w-full", t),
    children: b.jsx("div", {
      className: "glow-button-wrapper",
      children: b.jsxs("button", {
        ref: a,
        className: "glow-button",
        onClick: l,
        ...s,
        children: [
          b.jsx("span", { className: "glow-button__text", children: e }),
          b.jsx("svg", {
            className: "glow-button__icon",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: b.jsx("path", {
              clipRule: "evenodd",
              d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
              fillRule: "evenodd",
            }),
          }),
          i.map((c) =>
            b.jsx(
              "span",
              {
                className: "ripple-circle",
                style: { left: c.x, top: c.y, width: c.size, height: c.size },
              },
              c.id,
            ),
          ),
        ],
      }),
    }),
  });
};
ua.displayName = "Botão";
const wf = ({
  duration: e = 12e3,
  description: t,
  onComplete: n,
  size: r = 120,
  border: s = 10,
  loop: i = !1,
  className: o,
}) => {
  const [a, l] = x.useState(0),
    [c, d] = x.useState("loading"),
    u = x.useRef(n);
  u.current = n;
  const f = (r - s) / 2,
    h = 2 * Math.PI * f,
    v = h * (1 - a / 100),
    w = ((a / 100) * 360 * Math.PI) / 180,
    p = r / 2 + f * Math.cos(w),
    m = r / 2 + f * Math.sin(w);
  (x.useEffect(() => {
    if (c !== "loading") return;
    const _ = 50,
      S = (_ / e) * 100,
      E = setInterval(() => {
        l((T) => {
          const C = T + S;
          return C >= 100 ? (clearInterval(E), 100) : C;
        });
      }, _);
    return () => clearInterval(E);
  }, [e, c]),
    x.useEffect(() => {
      if (a >= 100 && c === "loading") {
        const _ = setTimeout(() => {
          var S;
          if ((d("complete"), (S = u.current) == null || S.call(u), i)) {
            const E = setTimeout(() => {
              (l(0), d("loading"));
            }, 1500);
            return () => clearTimeout(E);
          }
        }, 400);
        return () => clearTimeout(_);
      }
    }, [a, c, i]));
  const y = c === "complete";
  return b.jsxs("div", {
    className: te("flex flex-col items-center gap-5", o),
    children: [
      b.jsxs("div", {
        className: "relative flex items-center justify-center",
        style: { width: r, height: r },
        children: [
          b.jsx("div", {
            className: te(
              "absolute inset-0 flex items-center justify-center transition-all duration-500",
              y ? "opacity-100 scale-100" : "opacity-0 scale-75",
            ),
            children: b.jsx("div", {
              className: "rounded-full flex items-center justify-center",
              style: {
                width: r,
                height: r,
                backgroundColor: "hsl(142 71% 45% / 0.15)",
              },
              children: b.jsx(w0, {
                className: "text-green-500",
                size: r * 0.45,
                strokeWidth: 3,
              }),
            }),
          }),
          b.jsxs("svg", {
            width: r,
            height: r,
            className: te(
              "absolute inset-0 transition-opacity duration-500",
              y ? "opacity-0" : "opacity-100",
            ),
            style: { transform: "rotate(-90deg) scaleX(-1)" },
            children: [
              b.jsxs("defs", {
                children: [
                  b.jsxs("linearGradient", {
                    id: "loader-gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                    children: [
                      b.jsx("stop", {
                        offset: "0%",
                        stopColor: "hsl(0 80% 55%)",
                      }),
                      b.jsx("stop", {
                        offset: "60%",
                        stopColor: "hsl(0 80% 65%)",
                      }),
                      b.jsx("stop", {
                        offset: "100%",
                        stopColor: "hsl(var(--primary-foreground))",
                      }),
                    ],
                  }),
                  b.jsxs("filter", {
                    id: "dot-glow",
                    x: "-100%",
                    y: "-100%",
                    width: "300%",
                    height: "300%",
                    children: [
                      b.jsx("feGaussianBlur", {
                        stdDeviation: s / 2,
                        result: "blur",
                      }),
                      b.jsxs("feMerge", {
                        children: [
                          b.jsx("feMergeNode", { in: "blur" }),
                          b.jsx("feMergeNode", { in: "SourceGraphic" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              b.jsx("circle", {
                cx: r / 2,
                cy: r / 2,
                r: f,
                fill: "none",
                stroke: "hsl(var(--primary) / 0.1)",
                strokeWidth: s,
              }),
              b.jsx("circle", {
                cx: r / 2,
                cy: r / 2,
                r: f,
                fill: "none",
                stroke: "url(#loader-gradient)",
                strokeWidth: s,
                strokeLinecap: "round",
                strokeDasharray: h,
                strokeDashoffset: v,
                style: { transition: "stroke-dashoffset 80ms linear" },
              }),
              a > 0.5 &&
                b.jsx("circle", {
                  cx: p,
                  cy: m,
                  r: s / 2,
                  fill: "hsl(var(--primary-foreground))",
                  filter: "url(#dot-glow)",
                  style: { transition: "cx 80ms linear, cy 80ms linear" },
                }),
            ],
          }),
          b.jsxs("span", {
            className: te(
              "absolute z-10 font-bold text-white transition-opacity duration-500 leading-none",
              y ? "opacity-0" : "opacity-100",
            ),
            style: { fontSize: r * 0.22, marginBottom: -6 },
            children: [Math.round(a), "%"],
          }),
        ],
      }),
      t &&
        b.jsx("p", {
          className:
            "text-sm text-muted-foreground text-center max-w-xs leading-relaxed",
          children: t,
        }),
    ],
  });
};
wf.displayName = "Barra de Carregamento";
const yR = (e) => (typeof e == "string" ? { label: e } : e),
  jm = 8,
  un = ({
    options: e,
    onSelect: t,
    layout: n = "horizontal",
    className: r,
    onClickSound: s,
  }) => {
    const [i, o] = x.useState(null),
      [a, l] = x.useState(null),
      c = x.useCallback(
        (v, g) => {
          var S;
          if (i) return;
          s == null || s();
          const w =
              ((S = g.currentTarget.querySelector(".emoji-card__content")) ==
              null
                ? void 0
                : S.getBoundingClientRect()) ??
              g.currentTarget.getBoundingClientRect(),
            p = g.clientX - w.left,
            m = g.clientY - w.top,
            _ =
              Math.max(
                Math.hypot(p, m),
                Math.hypot(w.width - p, m),
                Math.hypot(p, w.height - m),
                Math.hypot(w.width - p, w.height - m),
              ) * 2;
          (o(v),
            l({ label: v, x: p, y: m, size: _ }),
            setTimeout(() => t(v), 250));
        },
        [i, t, s],
      ),
      d = e.map(yR),
      u = d.some((v) => v.emoji),
      f = n === "vertical" && u,
      h = (v) =>
        !a || a.label !== v
          ? null
          : b.jsx("span", {
              className: "ripple-circle",
              style: { left: a.x, top: a.y, width: a.size, height: a.size },
            });
    return f
      ? b.jsx("div", {
          className: te("grid grid-cols-2 gap-3", r),
          children: d.map(({ label: v, emoji: g }, w) =>
            b.jsx(
              "div",
              {
                onClick: (p) => c(v, p),
                role: "button",
                tabIndex: 0,
                onKeyDown: (p) => p.key === "Enter" && c(v, p),
                className: te(
                  "emoji-card cursor-pointer transition-all duration-300 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  i !== null && "pointer-events-none",
                  i === v ? "ring-2 ring-primary scale-[0.98]" : "",
                  "animate-fade-in",
                ),
                style: { animationDelay: `${w * 60}ms` },
                children: b.jsxs("div", {
                  className:
                    "emoji-card__content flex flex-col items-center justify-center gap-2 p-5",
                  children: [
                    b.jsx("div", {
                      className: "emoji-card__points",
                      children: Array.from({ length: jm }).map((p, m) =>
                        b.jsx("div", { className: "point" }, m),
                      ),
                    }),
                    h(v),
                    b.jsx("span", {
                      className: te(
                        "relative z-10 text-4xl",
                        i === v && "text-primary-foreground",
                      ),
                      children: g,
                    }),
                    b.jsx("span", {
                      className: te(
                        "relative z-10 font-light text-sm text-center",
                        i === v ? "text-primary-foreground" : "text-foreground",
                      ),
                      children: v,
                    }),
                  ],
                }),
              },
              v,
            ),
          ),
        })
      : b.jsx("div", {
          className: te("space-y-3 w-full", r),
          children: d.map(({ label: v, emoji: g }, w) =>
            b.jsx(
              "div",
              {
                onClick: (p) => c(v, p),
                role: "button",
                tabIndex: 0,
                onKeyDown: (p) => p.key === "Enter" && c(v, p),
                className: te(
                  "emoji-card cursor-pointer transition-all duration-300 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  i !== null && "pointer-events-none",
                  i === v ? "ring-2 ring-primary scale-[0.98]" : "",
                  "animate-fade-in",
                ),
                style: { animationDelay: `${w * 60}ms` },
                children: b.jsxs("div", {
                  className:
                    "emoji-card__content flex items-center gap-3 px-5 py-4 w-full",
                  children: [
                    b.jsx("div", {
                      className: "emoji-card__points",
                      children: Array.from({ length: jm }).map((p, m) =>
                        b.jsx("div", { className: "point" }, m),
                      ),
                    }),
                    h(v),
                    g &&
                      b.jsx("span", {
                        className: te(
                          "relative z-10 text-xl shrink-0",
                          i === v && "text-primary-foreground",
                        ),
                        children: g,
                      }),
                    b.jsx("span", {
                      className: te(
                        "relative z-10 font-light text-base",
                        i === v ? "text-primary-foreground" : "text-foreground",
                      ),
                      children: v,
                    }),
                  ],
                }),
              },
              v,
            ),
          ),
        });
  };
un.displayName = "Alternativas";
const Oi = ({ options: e, onSelect: t, className: n, onClickSound: r }) => {
  const [s, i] = x.useState(null),
    o = (a) => {
      s || (r == null || r(), i(a), setTimeout(() => t(a), 250));
    };
  return b.jsx("div", {
    className: te(n),
    children: b.jsx("div", {
      className: "grid grid-cols-2 gap-3",
      children: e.map(({ label: a, image: l }, c) =>
        b.jsx(
          "div",
          {
            onClick: () => o(a),
            role: "button",
            tabIndex: 0,
            onKeyDown: (d) => d.key === "Enter" && o(a),
            className: te(
              "cursor-pointer transition-all duration-300 ease-out rounded-xl overflow-hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              s !== null && "pointer-events-none",
              s === a ? "ring-2 ring-primary scale-[0.98]" : "",
              "animate-fade-in",
            ),
            style: { animationDelay: `${c * 60}ms` },
            children: b.jsxs("div", {
              className: "relative w-full aspect-square overflow-hidden",
              children: [
                b.jsx("div", {
                  className:
                    "absolute left-0 w-full h-[2px] bg-white/10 pointer-events-none z-[1]",
                  style: { animation: "scan-line 4s ease-in-out infinite" },
                }),
                b.jsx("img", {
                  src: l,
                  alt: a,
                  className: "w-full h-full object-cover",
                }),
                b.jsx("div", {
                  className: "absolute inset-0",
                  style: {
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)",
                  },
                }),
                b.jsx("div", {
                  className:
                    "absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-sm px-3 py-2",
                  children: b.jsx("span", {
                    className:
                      "block font-light text-white text-center text-sm leading-tight",
                    children: a,
                  }),
                }),
              ],
            }),
          },
          a,
        ),
      ),
    }),
  });
};
Oi.displayName = "Alternativas com Imagem";
const wR = v0(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  bf = x.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...s }, i) => {
      const o = r ? E1 : "button";
      return b.jsx(o, {
        className: te(wR({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
      });
    },
  );
bf.displayName = "Button";
const bR = ({
  onSelect: e,
  min: t = 1,
  max: n = 5,
  labels: r,
  className: s,
  onClickSound: i,
}) => {
  const [o, a] = x.useState(null),
    l = Array.from({ length: n - t + 1 }, (d, u) => t + u),
    c = (d) => {
      o === null &&
        (i == null || i(), a(d), setTimeout(() => e(String(d)), 200));
    };
  return b.jsxs("div", {
    className: te("space-y-2", s),
    children: [
      b.jsx("div", {
        className: "flex justify-center gap-2",
        children: l.map((d) =>
          b.jsx(
            bf,
            {
              onClick: () => c(d),
              disabled: o !== null,
              variant: o === d ? "default" : "outline",
              size: "icon",
              className: te(
                "transition-all duration-150",
                o === d && "scale-[0.95]",
              ),
              children: d,
            },
            d,
          ),
        ),
      }),
      r &&
        b.jsxs("div", {
          className: "flex justify-between text-xs text-muted-foreground px-1",
          children: [
            b.jsx("span", { children: r.low }),
            b.jsx("span", { children: r.high }),
          ],
        }),
    ],
  });
};
bR.displayName = "Escala Numérica";
const xf = x.forwardRef(({ className: e, type: t, ...n }, r) =>
  b.jsx("input", {
    type: t,
    className: te(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: r,
    ...n,
  }),
);
xf.displayName = "Input";
const Sc = ({
  onSubmit: e,
  placeholder: t = "Digite sua resposta...",
  buttonLabel: n = "Continuar",
  className: r,
  mask: s,
  defaultValue: i = "",
  onClickSound: o,
}) => {
  const [a, l] = x.useState(i),
    [c, d] = x.useState(null),
    [u, f] = x.useState(!1),
    h = x.useCallback(
      (w) => {
        let p = w.target.value;
        (s === "date" &&
          ((p = p.replace(/\D/g, "").slice(0, 8)),
          p.length > 4
            ? (p = p.slice(0, 2) + "/" + p.slice(2, 4) + "/" + p.slice(4))
            : p.length > 2 && (p = p.slice(0, 2) + "/" + p.slice(2))),
          l(p));
      },
      [s],
    ),
    v = x.useCallback(
      (w) => {
        var m;
        const p = a.trim();
        if (!(!p || u)) {
          if ((o == null || o(), w)) {
            const y =
                ((m = w.currentTarget.querySelector(".emoji-card__content")) ==
                null
                  ? void 0
                  : m.getBoundingClientRect()) ??
                w.currentTarget.getBoundingClientRect(),
              _ = w.clientX - y.left,
              S = w.clientY - y.top,
              E = Math.max(
                Math.hypot(_, S),
                Math.hypot(y.width - _, S),
                Math.hypot(_, y.height - S),
                Math.hypot(y.width - _, y.height - S),
              );
            d({ x: _, y: S, size: E * 2 });
          }
          (f(!0), setTimeout(() => e(p), 250));
        }
      },
      [a, u, e, o],
    ),
    g = !a.trim();
  return b.jsxs("div", {
    className: te("space-y-3 w-full", r),
    children: [
      b.jsx(xf, {
        value: a,
        onChange: h,
        inputMode: s === "date" ? "numeric" : void 0,
        placeholder: t,
        onKeyDown: (w) => w.key === "Enter" && v(),
        className:
          "h-[3.5rem] text-center focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-red-400",
      }),
      b.jsx("div", {
        role: "button",
        tabIndex: 0,
        onClick: (w) => !g && v(w),
        onKeyDown: (w) => w.key === "Enter" && !g && v(),
        className: te(
          "emoji-card cursor-pointer transition-all duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          g && "opacity-50 pointer-events-none",
          u && "pointer-events-none ring-2 ring-primary scale-[0.98]",
        ),
        children: b.jsxs("div", {
          className:
            "emoji-card__content flex items-center justify-center px-5 py-4 w-full",
          style: { minHeight: "3.5rem" },
          children: [
            b.jsx("div", {
              className: "emoji-card__points",
              children: Array.from({ length: 8 }).map((w, p) =>
                b.jsx("div", { className: "point" }, p),
              ),
            }),
            c &&
              b.jsx("span", {
                className: "ripple-circle",
                style: { left: c.x, top: c.y, width: c.size, height: c.size },
              }),
            b.jsx("span", {
              className: te(
                "relative z-10 font-medium text-base",
                u ? "text-primary-foreground" : "text-foreground",
              ),
              children: n,
            }),
            b.jsx("svg", {
              className: "relative z-10 w-5 h-5 ml-1.5 shrink-0",
              "aria-hidden": "true",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: b.jsx("path", {
                clipRule: "evenodd",
                d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
                fillRule: "evenodd",
              }),
            }),
          ],
        }),
      }),
    ],
  });
};
Sc.displayName = "Campo de Texto";
const ct = ({ src: e, alt: t = "", className: n, priority: r = !1 }) => {
  const [s, i] = x.useState(!1);
  return b.jsxs("div", {
    className: te(
      "relative w-full overflow-hidden image-shine-wrapper aspect-square",
      n,
    ),
    children: [
      !s && b.jsx("div", { className: "absolute inset-0 bg-muted/30" }),
      b.jsx("img", {
        src: e,
        alt: t,
        loading: r ? "eager" : "lazy",
        decoding: "async",
        fetchpriority: r ? "high" : "auto",
        className: te(
          "w-full h-full object-cover transition-opacity duration-300",
          s ? "opacity-100" : "opacity-0",
        ),
        onLoad: () => i(!0),
      }),
    ],
  });
};
ct.displayName = "Imagem";
const xR = ({ onCheckout: e }) =>
    b.jsxs(Nw, {
      className: "w-full max-w-lg mx-auto",
      children: [
        b.jsx(Iw, {
          children: b.jsx(Lw, {
            className: "text-2xl text-center",
            children: "Concluído!",
          }),
        }),
        b.jsxs(Dw, {
          className: "space-y-6 text-center",
          children: [
            b.jsx("p", {
              className: "text-muted-foreground",
              children: "Parabéns! Você completou todas as etapas do quiz.",
            }),
            b.jsx(ua, { label: "Continuar", onClick: e }),
          ],
        }),
      ],
    }),
  _R = "/assets/logo-IlKQELIN.svg",
  SR = () => {
    const e = new Date().getFullYear();
    return b.jsxs("footer", {
      className:
        "w-full mt-auto pt-4 pb-4 px-6 flex flex-col items-center gap-2 border-t border-white/10 backdrop-blur-3xl bg-black/40 text-muted-foreground/50",
      children: [
        b.jsx("img", { src: _R, alt: "Logo", className: "h-16 w-auto" }),
        b.jsxs("span", {
          className: "text-xs",
          children: ["© ", e, " - Ritual de la Llama Eterna."],
        }),
      ],
    });
  },
  _f = "/assets/step01-image-CRpHjTEs.webp",
  ER = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: _f,
          alt: "Ritual de Amor",
          className: "aspect-square",
          priority: !0,
        }),
        b.jsxs("div", {
          className:
            "flex-1 flex flex-col items-center justify-center text-center px-4 py-[40px]",
          children: [
            b.jsxs("h1", {
              className: "text-2xl font-bold leading-snug font-heading",
              children: [
                "Haz este ",
                b.jsx("span", {
                  className: "text-primary",
                  children: "ritual de amor",
                }),
                " y verás a la persona que amas volver buscándote en ",
                b.jsx("span", {
                  className: "text-primary",
                  children: "las próximas 72 horas",
                }),
              ],
            }),
            b.jsx("p", {
              className: "text-muted-foreground text-base max-w-md mt-3",
              children:
                "Sin karma ni consecuencias negativas para ti ni para él",
            }),
            b.jsx(ua, {
              label: "Empieza ahora",
              onClick: () => e("start"),
              onClickSound: t,
              className: "text-lg mt-4 pb-0 pt-[16px] py-px",
            }),
            b.jsx(bi, {
              className: "mt-4 text-xs font-normal",
              children: "🔒 100% confidencial",
            }),
            b.jsx(bi, {
              className: "mt-1 text-xs font-normal",
              children: "✅ Ritual personalizado y exclusivo para tu situación",
            }),
          ],
        }),
      ],
    }),
  $w = "/assets/step02-1-6qVF8u8g.webp",
  Mw = "/assets/step02-2-D5nC7H67.webp",
  Uw = "/assets/step02-3-CYpPzmTv.webp",
  Fw = "/assets/step02-4-DnuOKndQ.webp",
  kR = ({ onAdvance: e, onClickSound: t }) => {
    const [n, r] = x.useState("");
    return b.jsxs("div", {
      className:
        "px-4 pt-16 pb-16 flex-1 flex flex-col items-center justify-center",
      children: [
        b.jsx(Ue, { title: "Cuál fue el motivo de la ruptura entre ustedes?" }),
        b.jsx(Oi, {
          options: [
            { label: "Discutimos mucho", image: $w },
            { label: "La relación se fue enfriando", image: Mw },
            { label: "Me dejó por otra persona", image: Uw },
            { label: "Celos", image: Fw },
          ],
          onSelect: e,
          onClickSound: t,
        }),
        b.jsx("span", {
          className:
            "text-sm text-muted-foreground mt-4 py-[4px] pt-0 pb-[6px]",
          children: "o",
        }),
        b.jsxs("div", {
          className: "flex items-center gap-2 w-full mt-2",
          children: [
            b.jsx(xf, {
              value: n,
              onChange: (s) => r(s.target.value),
              placeholder: "Escriba otro motivo...",
              className:
                "flex-1 h-[3.5rem] bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground/60",
              onKeyDown: (s) => {
                s.key === "Enter" &&
                  n.trim() &&
                  (t == null || t(), e(n.trim()));
              },
            }),
            b.jsx(bf, {
              size: "icon",
              variant: "secondary",
              className: "h-[3.5rem] w-[3.5rem]",
              disabled: !n.trim(),
              onClick: () => {
                (t == null || t(), e(n.trim()));
              },
              children: b.jsx(wS, { className: "h-4 w-4" }),
            }),
          ],
        }),
      ],
    });
  },
  zw = "/assets/step03-image-BB-LpFlf.webp",
  TR = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: zw,
          alt: "Relógio antigo",
          className: "w-full aspect-square",
        }),
        b.jsxs("div", {
          className: "px-4 py-6 flex flex-col items-center",
          children: [
            b.jsx(Ue, {
              title: "Cuánto tiempo llevas intentando recuperar a tu ex?",
            }),
            b.jsx(un, {
              className: "w-full",
              options: [
                { label: "Hace algunos días", emoji: "🤦" },
                { label: "Hace algunas semanas", emoji: "😩" },
                { label: "Hace algunos meses", emoji: "😭" },
                { label: "Hace más de un año", emoji: "💔" },
              ],
              onSelect: e,
              onClickSound: t,
            }),
          ],
        }),
      ],
    }),
  Bw = "/assets/step04-opt01-D9B-pxLu.webp",
  Hw = "/assets/step04-opt02-CYp0S_-H.webp",
  Vw = "/assets/step04-opt03-8ADHFkpG.webp",
  Ww = "/assets/step04-opt04-bDvUEBKJ.webp",
  qw = "/assets/step04-opt05-Boa54yQ7.webp",
  CR = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className:
        "px-4 pt-16 pb-16 flex-1 flex flex-col items-center justify-center",
      children: [
        b.jsx(Ue, { title: "Aún mantienes contacto con tu amor?" }),
        b.jsx(Oi, {
          options: [
            { label: "No, me bloqueó de todas partes", image: Bw },
            { label: "Perdimos el contacto", image: Hw },
            { label: "Hablamos muy rara vez", image: Vw },
            { label: "A veces hablamos, pero de forma fría", image: Ww },
            { label: "Aún hablamos con frecuencia", image: qw },
          ],
          onSelect: e,
          onClickSound: t,
        }),
      ],
    }),
  Kw = "/assets/step05-image-D2z7YIXk.webp",
  RR = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: Kw,
          alt: "Casal apaixonado",
          className: "w-full aspect-square",
        }),
        b.jsxs("div", {
          className: "px-4 py-6 flex flex-col items-center",
          children: [
            b.jsx(Ue, {
              title: "Cómo era el sentimiento al inicio de su relación?",
            }),
            b.jsx(un, {
              className: "w-full",
              options: [
                {
                  label: "Era intenso y siempre tuvimos mucha conexión",
                  emoji: "🔥",
                },
                {
                  label: "Inestable, a veces cercano, a veces frío",
                  emoji: "❌",
                },
                {
                  label: "Él nunca fue de demostrar sus sentimientos",
                  emoji: "🧊",
                },
              ],
              onSelect: e,
              onClickSound: t,
            }),
          ],
        }),
      ],
    }),
  Gw = "/assets/step06-image-B-MmEGJD.webp",
  PR = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: Gw,
          alt: "Decisión de terminar",
          className: "w-full aspect-square",
        }),
        b.jsxs("div", {
          className: "px-4 py-6 flex flex-col items-center",
          children: [
            b.jsx(Ue, {
              title: "Quién tomó la decisión de terminar la relación?",
            }),
            b.jsx(un, {
              className: "w-full",
              options: [
                { label: "Yo", emoji: "👩" },
                { label: "Él", emoji: "👨" },
                { label: "Fue una decisión de ambos", emoji: "💔" },
              ],
              onSelect: e,
              onClickSound: t,
            }),
          ],
        }),
      ],
    }),
  Sf = "/assets/step07-alt1-BqnsMB5u.webp",
  Ef = "/assets/step07-alt2-cKlEN01H.webp",
  kf = "/assets/step07-alt3-vkhnsBEp.webp",
  Tf = "/assets/step07-alt4-DcSJvMC3.webp",
  AR = [
    { label: "Me arrepentí inmediatamente", image: Sf },
    { label: "Intenté seguir, pero pronto me arrepentí", image: Ef },
    { label: "Tardé en sentirlo, pero hoy me arrepiento", image: kf },
    { label: "No le di mucha importancia.", image: Tf },
  ],
  OR = [
    { label: "Me sentí mal desde el inicio", image: Sf },
    {
      label: "Al principio intenté aceptarlo, pero pronto empecé a extrañarlo",
      image: Ef,
    },
    { label: "Tardé en sentirlo, pero hoy la siento un gran vacío", image: kf },
    { label: "No le di mucha importancia.", image: Tf },
  ],
  jR = ({ onAdvance: e, answers: t, onClickSound: n }) => {
    const s = (t == null ? void 0 : t[5]) === "Él" ? OR : AR;
    return b.jsxs("div", {
      className:
        "px-4 pt-16 pb-16 flex-1 flex flex-col items-center justify-center",
      children: [
        b.jsx(Ue, { title: "Cómo te sentiste después de la ruptura?" }),
        b.jsx(Oi, { options: s, onSelect: e, onClickSound: n }),
      ],
    });
  },
  Qw = "/assets/step08-3AXkBUCM.webp",
  NR = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: Qw,
          alt: "Vela con pétalos de rosa",
          className: "w-full aspect-square",
        }),
        b.jsxs("div", {
          className: "px-4 py-6 flex flex-col items-center",
          children: [
            b.jsx(Ue, {
              title: "Ya intentaste algo para recuperar a tu amor?",
            }),
            b.jsx(un, {
              className: "w-full",
              options: [
                {
                  label:
                    "Sí, intenté algunos rituales que encontré en internet",
                  emoji: "🧙",
                },
                {
                  label:
                    "Sí, ya pagué por algunos trabajos, pero nada funcionó",
                  emoji: "🕯️",
                },
                {
                  label:
                    "Todavía no, esta es la primera vez que estoy buscando algo así",
                  emoji: "💔",
                },
              ],
              onSelect: e,
              onClickSound: t,
            }),
          ],
        }),
      ],
    }),
  Jw = "/assets/step09-CeZq4ihX.webp",
  IR = ({ onAdvance: e, answers: t, onClickSound: n }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, { src: Jw, alt: "Conexión espiritual" }),
        b.jsxs("div", {
          className:
            "flex-1 flex flex-col items-center justify-center px-4 py-4",
          children: [
            b.jsx(Ue, { title: "¿Cuál es tu nombre?" }),
            b.jsx(Sc, {
              onSubmit: e,
              placeholder: "Escribe tu nombre...",
              buttonLabel: "Continuar",
              defaultValue: (t == null ? void 0 : t[8]) || "",
              onClickSound: n,
            }),
          ],
        }),
      ],
    }),
  Yw = "/assets/step10-DeMWSpwS.webp",
  LR = ({ onAdvance: e, answers: t, onClickSound: n }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, { src: Yw, alt: "Nombre de tu amor" }),
        b.jsxs("div", {
          className:
            "flex-1 flex flex-col items-center justify-center px-4 py-4",
          children: [
            b.jsx(Ue, { title: "¿Cómo se llama tu amor?" }),
            b.jsx(Sc, {
              onSubmit: e,
              placeholder: "Escribe el nombre de tu amor...",
              buttonLabel: "Continuar",
              defaultValue: (t == null ? void 0 : t[9]) || "",
              onClickSound: n,
            }),
          ],
        }),
      ],
    }),
  DR = ({ onAdvance: e, answers: t, onClickSound: n }) =>
    b.jsxs("div", {
      className:
        "px-4 pt-16 pb-16 flex-1 flex flex-col items-center justify-center",
      children: [
        b.jsx(Ue, { title: "¿Cuál es tu fecha de nacimiento?" }),
        b.jsx(Sc, {
          onSubmit: e,
          mask: "date",
          placeholder: "DD/MM/AAAA",
          buttonLabel: "Continuar",
          defaultValue: (t == null ? void 0 : t[10]) || "",
          onClickSound: n,
        }),
      ],
    });
function $R(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Nm(e) {
  return $R(e) || Array.isArray(e);
}
function MR() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function Cf(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const s = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return s !== i
    ? !1
    : n.every((o) => {
        const a = e[o],
          l = t[o];
        return typeof a == "function"
          ? `${a}` == `${l}`
          : !Nm(a) || !Nm(l)
            ? a === l
            : Cf(a, l);
      });
}
function Im(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function UR(e, t) {
  if (e.length !== t.length) return !1;
  const n = Im(e),
    r = Im(t);
  return n.every((s, i) => {
    const o = r[i];
    return Cf(s, o);
  });
}
function Rf(e) {
  return typeof e == "number";
}
function Ud(e) {
  return typeof e == "string";
}
function Ec(e) {
  return typeof e == "boolean";
}
function Lm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function _e(e) {
  return Math.abs(e);
}
function Pf(e) {
  return Math.sign(e);
}
function ho(e, t) {
  return _e(e - t);
}
function FR(e, t) {
  if (e === 0 || t === 0 || _e(e) <= _e(t)) return 0;
  const n = ho(_e(e), _e(t));
  return _e(n / e);
}
function zR(e) {
  return Math.round(e * 100) / 100;
}
function zo(e) {
  return Bo(e).map(Number);
}
function sn(e) {
  return e[da(e)];
}
function da(e) {
  return Math.max(0, e.length - 1);
}
function Af(e, t) {
  return t === da(e);
}
function Dm(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Bo(e) {
  return Object.keys(e);
}
function Xw(e, t) {
  return [e, t].reduce(
    (n, r) => (
      Bo(r).forEach((s) => {
        const i = n[s],
          o = r[s],
          a = Lm(i) && Lm(o);
        n[s] = a ? Xw(i, o) : o;
      }),
      n
    ),
    {},
  );
}
function Fd(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function BR(e, t) {
  const n = { start: r, center: s, end: i };
  function r() {
    return 0;
  }
  function s(l) {
    return i(l) / 2;
  }
  function i(l) {
    return t - l;
  }
  function o(l, c) {
    return Ud(e) ? n[e](l) : e(t, l, c);
  }
  return { measure: o };
}
function Ho() {
  let e = [];
  function t(s, i, o, a = { passive: !0 }) {
    let l;
    if ("addEventListener" in s)
      (s.addEventListener(i, o, a), (l = () => s.removeEventListener(i, o, a)));
    else {
      const c = s;
      (c.addListener(o), (l = () => c.removeListener(o)));
    }
    return (e.push(l), r);
  }
  function n() {
    e = e.filter((s) => s());
  }
  const r = { add: t, clear: n };
  return r;
}
function HR(e, t, n, r) {
  const s = Ho(),
    i = 1e3 / 60;
  let o = null,
    a = 0,
    l = 0;
  function c() {
    s.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function d() {
    (h(), s.clear());
  }
  function u(w) {
    if (!l) return;
    o || ((o = w), n(), n());
    const p = w - o;
    for (o = w, a += p; a >= i; ) (n(), (a -= i));
    const m = a / i;
    (r(m), l && (l = t.requestAnimationFrame(u)));
  }
  function f() {
    l || (l = t.requestAnimationFrame(u));
  }
  function h() {
    (t.cancelAnimationFrame(l), (o = null), (a = 0), (l = 0));
  }
  function v() {
    ((o = null), (a = 0));
  }
  return { init: c, destroy: d, start: f, stop: h, update: n, render: r };
}
function VR(e, t) {
  const n = t === "rtl",
    r = e === "y",
    s = r ? "y" : "x",
    i = r ? "x" : "y",
    o = !r && n ? -1 : 1,
    a = d(),
    l = u();
  function c(v) {
    const { height: g, width: w } = v;
    return r ? g : w;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function u() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function f(v) {
    return v * o;
  }
  return {
    scroll: s,
    cross: i,
    startEdge: a,
    endEdge: l,
    measureSize: c,
    direction: f,
  };
}
function hs(e = 0, t = 0) {
  const n = _e(e - t);
  function r(c) {
    return c < e;
  }
  function s(c) {
    return c > t;
  }
  function i(c) {
    return r(c) || s(c);
  }
  function o(c) {
    return i(c) ? (r(c) ? e : t) : c;
  }
  function a(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: o,
    reachedAny: i,
    reachedMax: s,
    reachedMin: r,
    removeOffset: a,
  };
}
function Zw(e, t, n) {
  const { constrain: r } = hs(0, e),
    s = e + 1;
  let i = o(t);
  function o(f) {
    return n ? _e((s + f) % s) : r(f);
  }
  function a() {
    return i;
  }
  function l(f) {
    return ((i = o(f)), u);
  }
  function c(f) {
    return d().set(a() + f);
  }
  function d() {
    return Zw(e, a(), n);
  }
  const u = { get: a, set: l, add: c, clone: d };
  return u;
}
function WR(e, t, n, r, s, i, o, a, l, c, d, u, f, h, v, g, w, p, m) {
  const { cross: y, direction: _ } = e,
    S = ["INPUT", "SELECT", "TEXTAREA"],
    E = { passive: !1 },
    T = Ho(),
    C = Ho(),
    P = hs(50, 225).constrain(h.measure(20)),
    O = { mouse: 300, touch: 400 },
    D = { mouse: 500, touch: 600 },
    N = v ? 43 : 25;
  let V = !1,
    L = 0,
    J = 0,
    W = !1,
    G = !1,
    R = !1,
    A = !1;
  function $(z) {
    if (!m) return;
    function se(Ie) {
      (Ec(m) || m(z, Ie)) && ke(Ie);
    }
    const ge = t;
    T.add(ge, "dragstart", (Ie) => Ie.preventDefault(), E)
      .add(ge, "touchmove", () => {}, E)
      .add(ge, "touchend", () => {})
      .add(ge, "touchstart", se)
      .add(ge, "mousedown", se)
      .add(ge, "touchcancel", Te)
      .add(ge, "contextmenu", Te)
      .add(ge, "click", Fe, !0);
  }
  function q() {
    (T.clear(), C.clear());
  }
  function B() {
    const z = A ? n : t;
    C.add(z, "touchmove", ee, E)
      .add(z, "touchend", Te)
      .add(z, "mousemove", ee, E)
      .add(z, "mouseup", Te);
  }
  function Z(z) {
    const se = z.nodeName || "";
    return S.includes(se);
  }
  function Y() {
    return (v ? D : O)[A ? "mouse" : "touch"];
  }
  function he(z, se) {
    const ge = u.add(Pf(z) * -1),
      Ie = d.byDistance(z, !v).distance;
    return v || _e(z) < P
      ? Ie
      : w && se
        ? Ie * 0.5
        : d.byIndex(ge.get(), 0).distance;
  }
  function ke(z) {
    const se = Fd(z, r);
    ((A = se),
      (R = v && se && !z.buttons && V),
      (V = ho(s.get(), o.get()) >= 2),
      !(se && z.button !== 0) &&
        (Z(z.target) ||
          ((W = !0),
          i.pointerDown(z),
          c.useFriction(0).useDuration(0),
          s.set(o),
          B(),
          (L = i.readPoint(z)),
          (J = i.readPoint(z, y)),
          f.emit("pointerDown"))));
  }
  function ee(z) {
    if (!Fd(z, r) && z.touches.length >= 2) return Te(z);
    const ge = i.readPoint(z),
      Ie = i.readPoint(z, y),
      tt = ho(ge, L),
      bt = ho(Ie, J);
    if (!G && !A && (!z.cancelable || ((G = tt > bt), !G))) return Te(z);
    const xt = i.pointerMove(z);
    (tt > g && (R = !0),
      c.useFriction(0.3).useDuration(0.75),
      a.start(),
      s.add(_(xt)),
      z.preventDefault());
  }
  function Te(z) {
    const ge = d.byDistance(0, !1).index !== u.get(),
      Ie = i.pointerUp(z) * Y(),
      tt = he(_(Ie), ge),
      bt = FR(Ie, tt),
      xt = N - 10 * bt,
      nt = p + bt / 50;
    ((G = !1),
      (W = !1),
      C.clear(),
      c.useDuration(xt).useFriction(nt),
      l.distance(tt, !v),
      (A = !1),
      f.emit("pointerUp"));
  }
  function Fe(z) {
    R && (z.stopPropagation(), z.preventDefault(), (R = !1));
  }
  function Oe() {
    return W;
  }
  return { init: $, destroy: q, pointerDown: Oe };
}
function qR(e, t) {
  let r, s;
  function i(u) {
    return u.timeStamp;
  }
  function o(u, f) {
    const v = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (Fd(u, t) ? u : u.touches[0])[v];
  }
  function a(u) {
    return ((r = u), (s = u), o(u));
  }
  function l(u) {
    const f = o(u) - o(s),
      h = i(u) - i(r) > 170;
    return ((s = u), h && (r = u), f);
  }
  function c(u) {
    if (!r || !s) return 0;
    const f = o(s) - o(r),
      h = i(u) - i(r),
      v = i(u) - i(s) > 170,
      g = f / h;
    return h && !v && _e(g) > 0.1 ? g : 0;
  }
  return { pointerDown: a, pointerMove: l, pointerUp: c, readPoint: o };
}
function KR() {
  function e(n) {
    const { offsetTop: r, offsetLeft: s, offsetWidth: i, offsetHeight: o } = n;
    return {
      top: r,
      right: s + i,
      bottom: r + o,
      left: s,
      width: i,
      height: o,
    };
  }
  return { measure: e };
}
function GR(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function QR(e, t, n, r, s, i, o) {
  const a = [e].concat(r);
  let l,
    c,
    d = [],
    u = !1;
  function f(w) {
    return s.measureSize(o.measure(w));
  }
  function h(w) {
    if (!i) return;
    ((c = f(e)), (d = r.map(f)));
    function p(m) {
      for (const y of m) {
        if (u) return;
        const _ = y.target === e,
          S = r.indexOf(y.target),
          E = _ ? c : d[S],
          T = f(_ ? e : r[S]);
        if (_e(T - E) >= 0.5) {
          (w.reInit(), t.emit("resize"));
          break;
        }
      }
    }
    ((l = new ResizeObserver((m) => {
      (Ec(i) || i(w, m)) && p(m);
    })),
      n.requestAnimationFrame(() => {
        a.forEach((m) => l.observe(m));
      }));
  }
  function v() {
    ((u = !0), l && l.disconnect());
  }
  return { init: h, destroy: v };
}
function JR(e, t, n, r, s, i) {
  let o = 0,
    a = 0,
    l = s,
    c = i,
    d = e.get(),
    u = 0;
  function f() {
    const E = r.get() - e.get(),
      T = !l;
    let C = 0;
    return (
      T
        ? ((o = 0), n.set(r), e.set(r), (C = E))
        : (n.set(e), (o += E / l), (o *= c), (d += o), e.add(o), (C = d - u)),
      (a = Pf(C)),
      (u = d),
      S
    );
  }
  function h() {
    const E = r.get() - t.get();
    return _e(E) < 0.001;
  }
  function v() {
    return l;
  }
  function g() {
    return a;
  }
  function w() {
    return o;
  }
  function p() {
    return y(s);
  }
  function m() {
    return _(i);
  }
  function y(E) {
    return ((l = E), S);
  }
  function _(E) {
    return ((c = E), S);
  }
  const S = {
    direction: g,
    duration: v,
    velocity: w,
    seek: f,
    settled: h,
    useBaseFriction: m,
    useBaseDuration: p,
    useFriction: _,
    useDuration: y,
  };
  return S;
}
function YR(e, t, n, r, s) {
  const i = s.measure(10),
    o = s.measure(50),
    a = hs(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(h) {
    if (!c()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max",
      g = _e(e[v] - t.get()),
      w = n.get() - t.get(),
      p = a.constrain(g / o);
    (n.subtract(w * p),
      !h &&
        _e(w) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction()));
  }
  function u(h) {
    l = !h;
  }
  return { shouldConstrain: c, constrain: d, toggleActive: u };
}
function XR(e, t, n, r, s) {
  const i = hs(-t + e, 0),
    o = u(),
    a = d(),
    l = f();
  function c(v, g) {
    return ho(v, g) <= 1;
  }
  function d() {
    const v = o[0],
      g = sn(o),
      w = o.lastIndexOf(v),
      p = o.indexOf(g) + 1;
    return hs(w, p);
  }
  function u() {
    return n
      .map((v, g) => {
        const { min: w, max: p } = i,
          m = i.constrain(v),
          y = !g,
          _ = Af(n, g);
        return y ? p : _ || c(w, m) ? w : c(p, m) ? p : m;
      })
      .map((v) => parseFloat(v.toFixed(3)));
  }
  function f() {
    if (t <= e + s) return [i.max];
    if (r === "keepSnaps") return o;
    const { min: v, max: g } = a;
    return o.slice(v, g);
  }
  return { snapsContained: l, scrollContainLimit: a };
}
function ZR(e, t, n) {
  const r = t[0],
    s = n ? r - e : sn(t);
  return { limit: hs(s, r) };
}
function eP(e, t, n, r) {
  const i = t.min + 0.1,
    o = t.max + 0.1,
    { reachedMin: a, reachedMax: l } = hs(i, o);
  function c(f) {
    return f === 1 ? l(n.get()) : f === -1 ? a(n.get()) : !1;
  }
  function d(f) {
    if (!c(f)) return;
    const h = e * (f * -1);
    r.forEach((v) => v.add(h));
  }
  return { loop: d };
}
function tP(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const o = i - t;
    return n ? o / -n : 0;
  }
  return { get: r };
}
function nP(e, t, n, r, s) {
  const { startEdge: i, endEdge: o } = e,
    { groupSlides: a } = s,
    l = u().map(t.measure),
    c = f(),
    d = h();
  function u() {
    return a(r)
      .map((g) => sn(g)[o] - g[0][i])
      .map(_e);
  }
  function f() {
    return r.map((g) => n[i] - g[i]).map((g) => -_e(g));
  }
  function h() {
    return a(c)
      .map((g) => g[0])
      .map((g, w) => g + l[w]);
  }
  return { snaps: c, snapsAligned: d };
}
function rP(e, t, n, r, s, i) {
  const { groupSlides: o } = s,
    { min: a, max: l } = r,
    c = d();
  function d() {
    const f = o(i),
      h = !e || t === "keepSnaps";
    return n.length === 1
      ? [i]
      : h
        ? f
        : f.slice(a, l).map((v, g, w) => {
            const p = !g,
              m = Af(w, g);
            if (p) {
              const y = sn(w[0]) + 1;
              return Dm(y);
            }
            if (m) {
              const y = da(i) - sn(w)[0] + 1;
              return Dm(y, sn(w)[0]);
            }
            return v;
          });
  }
  return { slideRegistry: c };
}
function sP(e, t, n, r, s) {
  const { reachedAny: i, removeOffset: o, constrain: a } = r;
  function l(v) {
    return v.concat().sort((g, w) => _e(g) - _e(w))[0];
  }
  function c(v) {
    const g = e ? o(v) : a(v),
      w = t
        .map((m, y) => ({ diff: d(m - g, 0), index: y }))
        .sort((m, y) => _e(m.diff) - _e(y.diff)),
      { index: p } = w[0];
    return { index: p, distance: g };
  }
  function d(v, g) {
    const w = [v, v + n, v - n];
    if (!e) return v;
    if (!g) return l(w);
    const p = w.filter((m) => Pf(m) === g);
    return p.length ? l(p) : sn(w) - n;
  }
  function u(v, g) {
    const w = t[v] - s.get(),
      p = d(w, g);
    return { index: v, distance: p };
  }
  function f(v, g) {
    const w = s.get() + v,
      { index: p, distance: m } = c(w),
      y = !e && i(w);
    if (!g || y) return { index: p, distance: v };
    const _ = t[p] - m,
      S = v + d(_, 0);
    return { index: p, distance: S };
  }
  return { byDistance: f, byIndex: u, shortcut: d };
}
function iP(e, t, n, r, s, i, o) {
  function a(u) {
    const f = u.distance,
      h = u.index !== t.get();
    (i.add(f),
      f && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      h && (n.set(t.get()), t.set(u.index), o.emit("select")));
  }
  function l(u, f) {
    const h = s.byDistance(u, f);
    a(h);
  }
  function c(u, f) {
    const h = t.clone().set(u),
      v = s.byIndex(h.get(), f);
    a(v);
  }
  return { distance: l, index: c };
}
function oP(e, t, n, r, s, i, o, a) {
  const l = { passive: !0, capture: !0 };
  let c = 0;
  function d(h) {
    if (!a) return;
    function v(g) {
      if (new Date().getTime() - c > 10) return;
      (o.emit("slideFocusStart"), (e.scrollLeft = 0));
      const m = n.findIndex((y) => y.includes(g));
      Rf(m) && (s.useDuration(0), r.index(m, 0), o.emit("slideFocus"));
    }
    (i.add(document, "keydown", u, !1),
      t.forEach((g, w) => {
        i.add(
          g,
          "focus",
          (p) => {
            (Ec(a) || a(h, p)) && v(w);
          },
          l,
        );
      }));
  }
  function u(h) {
    h.code === "Tab" && (c = new Date().getTime());
  }
  return { init: d };
}
function Xi(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = o(l);
  }
  function s(l) {
    t += o(l);
  }
  function i(l) {
    t -= o(l);
  }
  function o(l) {
    return Rf(l) ? l : l.get();
  }
  return { get: n, set: r, add: s, subtract: i };
}
function eb(e, t) {
  const n = e.scroll === "x" ? o : a,
    r = t.style;
  let s = null,
    i = !1;
  function o(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function a(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function l(f) {
    if (i) return;
    const h = zR(e.direction(f));
    h !== s && ((r.transform = n(h)), (s = h));
  }
  function c(f) {
    i = !f;
  }
  function d() {
    i ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: d, to: l, toggleActive: c };
}
function aP(e, t, n, r, s, i, o, a, l) {
  const d = zo(s),
    u = zo(s).reverse(),
    f = p().concat(m());
  function h(T, C) {
    return T.reduce((P, O) => P - s[O], C);
  }
  function v(T, C) {
    return T.reduce((P, O) => (h(P, C) > 0 ? P.concat([O]) : P), []);
  }
  function g(T) {
    return i.map((C, P) => ({
      start: C - r[P] + 0.5 + T,
      end: C + t - 0.5 + T,
    }));
  }
  function w(T, C, P) {
    const O = g(C);
    return T.map((D) => {
      const N = P ? 0 : -n,
        V = P ? n : 0,
        L = P ? "end" : "start",
        J = O[D][L];
      return {
        index: D,
        loopPoint: J,
        slideLocation: Xi(-1),
        translate: eb(e, l[D]),
        target: () => (a.get() > J ? N : V),
      };
    });
  }
  function p() {
    const T = o[0],
      C = v(u, T);
    return w(C, n, !1);
  }
  function m() {
    const T = t - o[0] - 1,
      C = v(d, T);
    return w(C, -n, !0);
  }
  function y() {
    return f.every(({ index: T }) => {
      const C = d.filter((P) => P !== T);
      return h(C, t) <= 0.1;
    });
  }
  function _() {
    f.forEach((T) => {
      const { target: C, translate: P, slideLocation: O } = T,
        D = C();
      D !== O.get() && (P.to(D), O.set(D));
    });
  }
  function S() {
    f.forEach((T) => T.translate.clear());
  }
  return { canLoop: y, clear: S, loop: _, loopPoints: f };
}
function lP(e, t, n) {
  let r,
    s = !1;
  function i(l) {
    if (!n) return;
    function c(d) {
      for (const u of d)
        if (u.type === "childList") {
          (l.reInit(), t.emit("slidesChanged"));
          break;
        }
    }
    ((r = new MutationObserver((d) => {
      s || ((Ec(n) || n(l, d)) && c(d));
    })),
      r.observe(e, { childList: !0 }));
  }
  function o() {
    (r && r.disconnect(), (s = !0));
  }
  return { init: i, destroy: o };
}
function cP(e, t, n, r) {
  const s = {};
  let i = null,
    o = null,
    a,
    l = !1;
  function c() {
    ((a = new IntersectionObserver(
      (v) => {
        l ||
          (v.forEach((g) => {
            const w = t.indexOf(g.target);
            s[w] = g;
          }),
          (i = null),
          (o = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r },
    )),
      t.forEach((v) => a.observe(v)));
  }
  function d() {
    (a && a.disconnect(), (l = !0));
  }
  function u(v) {
    return Bo(s).reduce((g, w) => {
      const p = parseInt(w),
        { isIntersecting: m } = s[p];
      return (((v && m) || (!v && !m)) && g.push(p), g);
    }, []);
  }
  function f(v = !0) {
    if (v && i) return i;
    if (!v && o) return o;
    const g = u(v);
    return (v && (i = g), v || (o = g), g);
  }
  return { init: c, destroy: d, get: f };
}
function uP(e, t, n, r, s, i) {
  const { measureSize: o, startEdge: a, endEdge: l } = e,
    c = n[0] && s,
    d = v(),
    u = g(),
    f = n.map(o),
    h = w();
  function v() {
    if (!c) return 0;
    const m = n[0];
    return _e(t[a] - m[a]);
  }
  function g() {
    if (!c) return 0;
    const m = i.getComputedStyle(sn(r));
    return parseFloat(m.getPropertyValue(`margin-${l}`));
  }
  function w() {
    return n
      .map((m, y, _) => {
        const S = !y,
          E = Af(_, y);
        return S ? f[y] + d : E ? f[y] + u : _[y + 1][a] - m[a];
      })
      .map(_e);
  }
  return { slideSizes: f, slideSizesWithGaps: h, startGap: d, endGap: u };
}
function dP(e, t, n, r, s, i, o, a, l) {
  const { startEdge: c, endEdge: d, direction: u } = e,
    f = Rf(n);
  function h(p, m) {
    return zo(p)
      .filter((y) => y % m === 0)
      .map((y) => p.slice(y, y + m));
  }
  function v(p) {
    return p.length
      ? zo(p)
          .reduce((m, y, _) => {
            const S = sn(m) || 0,
              E = S === 0,
              T = y === da(p),
              C = s[c] - i[S][c],
              P = s[c] - i[y][d],
              O = !r && E ? u(o) : 0,
              D = !r && T ? u(a) : 0,
              N = _e(P - D - (C + O));
            return (_ && N > t + l && m.push(y), T && m.push(p.length), m);
          }, [])
          .map((m, y, _) => {
            const S = Math.max(_[y - 1] || 0);
            return p.slice(S, m);
          })
      : [];
  }
  function g(p) {
    return f ? h(p, n) : v(p);
  }
  return { groupSlides: g };
}
function hP(e, t, n, r, s, i, o) {
  const {
      align: a,
      axis: l,
      direction: c,
      startIndex: d,
      loop: u,
      duration: f,
      dragFree: h,
      dragThreshold: v,
      inViewThreshold: g,
      slidesToScroll: w,
      skipSnaps: p,
      containScroll: m,
      watchResize: y,
      watchSlides: _,
      watchDrag: S,
      watchFocus: E,
    } = i,
    T = 2,
    C = KR(),
    P = C.measure(t),
    O = n.map(C.measure),
    D = VR(l, c),
    N = D.measureSize(P),
    V = GR(N),
    L = BR(a, N),
    J = !u && !!m,
    W = u || !!m,
    {
      slideSizes: G,
      slideSizesWithGaps: R,
      startGap: A,
      endGap: $,
    } = uP(D, P, O, n, W, s),
    q = dP(D, N, w, u, P, O, A, $, T),
    { snaps: B, snapsAligned: Z } = nP(D, L, P, O, q),
    Y = -sn(B) + sn(R),
    { snapsContained: he, scrollContainLimit: ke } = XR(N, Y, Z, m, T),
    ee = J ? he : Z,
    { limit: Te } = ZR(Y, ee, u),
    Fe = Zw(da(ee), d, u),
    Oe = Fe.clone(),
    le = zo(n),
    z = ({
      dragHandler: Bt,
      scrollBody: Ii,
      scrollBounds: gs,
      options: { loop: Kn },
    }) => {
      (Kn || gs.constrain(Bt.pointerDown()), Ii.seek());
    },
    se = (
      {
        scrollBody: Bt,
        translate: Ii,
        location: gs,
        offsetLocation: Kn,
        previousLocation: Gn,
        scrollLooper: ga,
        slideLooper: Qn,
        dragHandler: Oc,
        animation: jc,
        eventHandler: Li,
        scrollBounds: va,
        options: { loop: ya },
      },
      vs,
    ) => {
      const Ht = Bt.settled(),
        Nc = !va.shouldConstrain(),
        X = ya ? Ht : Ht && Nc,
        ce = X && !Oc.pointerDown();
      ce && jc.stop();
      const fe = gs.get() * vs + Gn.get() * (1 - vs);
      (Kn.set(fe),
        ya && (ga.loop(Bt.direction()), Qn.loop()),
        Ii.to(Kn.get()),
        ce && Li.emit("settle"),
        X || Li.emit("scroll"));
    },
    ge = HR(
      r,
      s,
      () => z(Ni),
      (Bt) => se(Ni, Bt),
    ),
    Ie = 0.68,
    tt = ee[Fe.get()],
    bt = Xi(tt),
    xt = Xi(tt),
    nt = Xi(tt),
    dn = Xi(tt),
    Ft = JR(bt, nt, xt, dn, f, Ie),
    ms = sP(u, ee, Y, Te, dn),
    zt = iP(ge, Fe, Oe, Ft, ms, dn, o),
    pa = tP(Te),
    ma = Ho(),
    ut = cP(t, n, o, g),
    { slideRegistry: Cn } = rP(J, m, ee, ke, q, le),
    Ac = oP(e, n, Cn, zt, Ft, ma, o, E),
    Ni = {
      ownerDocument: r,
      ownerWindow: s,
      eventHandler: o,
      containerRect: P,
      slideRects: O,
      animation: ge,
      axis: D,
      dragHandler: WR(
        D,
        e,
        r,
        s,
        dn,
        qR(D, s),
        bt,
        ge,
        zt,
        Ft,
        ms,
        Fe,
        o,
        V,
        h,
        v,
        p,
        Ie,
        S,
      ),
      eventStore: ma,
      percentOfView: V,
      index: Fe,
      indexPrevious: Oe,
      limit: Te,
      location: bt,
      offsetLocation: nt,
      previousLocation: xt,
      options: i,
      resizeHandler: QR(t, o, s, n, D, y, C),
      scrollBody: Ft,
      scrollBounds: YR(Te, nt, dn, Ft, V),
      scrollLooper: eP(Y, Te, nt, [bt, nt, xt, dn]),
      scrollProgress: pa,
      scrollSnapList: ee.map(pa.get),
      scrollSnaps: ee,
      scrollTarget: ms,
      scrollTo: zt,
      slideLooper: aP(D, N, Y, G, R, B, ee, nt, n),
      slideFocus: Ac,
      slidesHandler: lP(t, o, _),
      slidesInView: ut,
      slideIndexes: le,
      slideRegistry: Cn,
      slidesToScroll: q,
      target: dn,
      translate: eb(D, t),
    };
  return Ni;
}
function fP() {
  let e = {},
    t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function s(c) {
    return (r(c).forEach((d) => d(t, c)), l);
  }
  function i(c, d) {
    return ((e[c] = r(c).concat([d])), l);
  }
  function o(c, d) {
    return ((e[c] = r(c).filter((u) => u !== d)), l);
  }
  function a() {
    e = {};
  }
  const l = { init: n, emit: s, off: o, on: i, clear: a };
  return l;
}
const pP = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function mP(e) {
  function t(i, o) {
    return Xw(i, o || {});
  }
  function n(i) {
    const o = i.breakpoints || {},
      a = Bo(o)
        .filter((l) => e.matchMedia(l).matches)
        .map((l) => o[l])
        .reduce((l, c) => t(l, c), {});
    return t(i, a);
  }
  function r(i) {
    return i
      .map((o) => Bo(o.breakpoints || {}))
      .reduce((o, a) => o.concat(a), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function gP(e) {
  let t = [];
  function n(i, o) {
    return (
      (t = o.filter(({ options: a }) => e.optionsAtMedia(a).active !== !1)),
      t.forEach((a) => a.init(i, e)),
      o.reduce((a, l) => Object.assign(a, { [l.name]: l }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function Vl(e, t, n) {
  const r = e.ownerDocument,
    s = r.defaultView,
    i = mP(s),
    o = gP(i),
    a = Ho(),
    l = fP(),
    { mergeOptions: c, optionsAtMedia: d, optionsMediaQueries: u } = i,
    { on: f, off: h, emit: v } = l,
    g = D;
  let w = !1,
    p,
    m = c(pP, Vl.globalOptions),
    y = c(m),
    _ = [],
    S,
    E,
    T;
  function C() {
    const { container: le, slides: z } = y;
    E = (Ud(le) ? e.querySelector(le) : le) || e.children[0];
    const ge = Ud(z) ? E.querySelectorAll(z) : z;
    T = [].slice.call(ge || E.children);
  }
  function P(le) {
    const z = hP(e, E, T, r, s, le, l);
    if (le.loop && !z.slideLooper.canLoop()) {
      const se = Object.assign({}, le, { loop: !1 });
      return P(se);
    }
    return z;
  }
  function O(le, z) {
    w ||
      ((m = c(m, le)),
      (y = d(m)),
      (_ = z || _),
      C(),
      (p = P(y)),
      u([m, ..._.map(({ options: se }) => se)]).forEach((se) =>
        a.add(se, "change", D),
      ),
      y.active &&
        (p.translate.to(p.location.get()),
        p.animation.init(),
        p.slidesInView.init(),
        p.slideFocus.init(Oe),
        p.eventHandler.init(Oe),
        p.resizeHandler.init(Oe),
        p.slidesHandler.init(Oe),
        p.options.loop && p.slideLooper.loop(),
        E.offsetParent && T.length && p.dragHandler.init(Oe),
        (S = o.init(Oe, _))));
  }
  function D(le, z) {
    const se = q();
    (N(), O(c({ startIndex: se }, le), z), l.emit("reInit"));
  }
  function N() {
    (p.dragHandler.destroy(),
      p.eventStore.clear(),
      p.translate.clear(),
      p.slideLooper.clear(),
      p.resizeHandler.destroy(),
      p.slidesHandler.destroy(),
      p.slidesInView.destroy(),
      p.animation.destroy(),
      o.destroy(),
      a.clear());
  }
  function V() {
    w || ((w = !0), a.clear(), N(), l.emit("destroy"), l.clear());
  }
  function L(le, z, se) {
    !y.active ||
      w ||
      (p.scrollBody.useBaseFriction().useDuration(z === !0 ? 0 : y.duration),
      p.scrollTo.index(le, se || 0));
  }
  function J(le) {
    const z = p.index.add(1).get();
    L(z, le, -1);
  }
  function W(le) {
    const z = p.index.add(-1).get();
    L(z, le, 1);
  }
  function G() {
    return p.index.add(1).get() !== q();
  }
  function R() {
    return p.index.add(-1).get() !== q();
  }
  function A() {
    return p.scrollSnapList;
  }
  function $() {
    return p.scrollProgress.get(p.offsetLocation.get());
  }
  function q() {
    return p.index.get();
  }
  function B() {
    return p.indexPrevious.get();
  }
  function Z() {
    return p.slidesInView.get();
  }
  function Y() {
    return p.slidesInView.get(!1);
  }
  function he() {
    return S;
  }
  function ke() {
    return p;
  }
  function ee() {
    return e;
  }
  function Te() {
    return E;
  }
  function Fe() {
    return T;
  }
  const Oe = {
    canScrollNext: G,
    canScrollPrev: R,
    containerNode: Te,
    internalEngine: ke,
    destroy: V,
    off: h,
    on: f,
    emit: v,
    plugins: he,
    previousScrollSnap: B,
    reInit: g,
    rootNode: ee,
    scrollNext: J,
    scrollPrev: W,
    scrollProgress: $,
    scrollSnapList: A,
    scrollTo: L,
    selectedScrollSnap: q,
    slideNodes: Fe,
    slidesInView: Z,
    slidesNotInView: Y,
  };
  return (O(t, n), setTimeout(() => l.emit("init"), 0), Oe);
}
Vl.globalOptions = void 0;
function Of(e = {}, t = []) {
  const n = x.useRef(e),
    r = x.useRef(t),
    [s, i] = x.useState(),
    [o, a] = x.useState(),
    l = x.useCallback(() => {
      s && s.reInit(n.current, r.current);
    }, [s]);
  return (
    x.useEffect(() => {
      Cf(n.current, e) || ((n.current = e), l());
    }, [e, l]),
    x.useEffect(() => {
      UR(r.current, t) || ((r.current = t), l());
    }, [t, l]),
    x.useEffect(() => {
      if (MR() && o) {
        Vl.globalOptions = Of.globalOptions;
        const c = Vl(o, n.current, r.current);
        return (i(c), () => c.destroy());
      } else i(void 0);
    }, [o, i]),
    [a, s]
  );
}
Of.globalOptions = void 0;
const tb = "/assets/rosa-moreno-tx9Hsnsw.webp",
  nb = "/assets/testimonial-01-FSLvnYSE.webp",
  rb = "/assets/testimonial-02-BacRHIIC.webp",
  sb = "/assets/testimonial-03-DD-8cFdI.webp",
  ib = "/assets/testimonial-04-BopwN9q0.webp",
  ob = "/assets/testimonial-05-BGU_GlCG.webp",
  $m = 5e3,
  vP = () => {
    const [e, t] = x.useState(!0);
    return (
      x.useEffect(() => {
        const n = setTimeout(() => t(!1), $m);
        return () => clearTimeout(n);
      }, []),
      e
        ? b.jsx("div", {
            className:
              "fixed top-4 left-1/2 z-50 animate-[slideDown_0.4s_ease-out_forwards]",
            style: { transform: "translate(-50%, 0)" },
            children: b.jsxs("div", {
              className: "flex flex-col rounded-lg shadow-lg overflow-hidden",
              style: {
                backgroundColor: "hsl(140 30% 10%)",
                border: "1px solid hsl(140 40% 22%)",
              },
              children: [
                b.jsxs("div", {
                  className: "flex items-center gap-3 px-4 py-3",
                  children: [
                    b.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { color: "hsl(140 50% 40%)" },
                      className: "shrink-0",
                      children: [
                        b.jsx("path", {
                          d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
                        }),
                        b.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
                      ],
                    }),
                    b.jsx("p", {
                      className: "text-sm font-medium whitespace-nowrap",
                      style: { color: "hsl(140 20% 80%)" },
                      children: "Baja hasta el final para continuar",
                    }),
                  ],
                }),
                b.jsx("div", {
                  className: "h-[2px] w-full",
                  style: { backgroundColor: "hsl(140 30% 16%)" },
                  children: b.jsx("div", {
                    className: "h-full",
                    style: {
                      backgroundColor: "hsl(140 50% 40%)",
                      animation: `shrinkBar ${$m}ms linear forwards`,
                    },
                  }),
                }),
              ],
            }),
          })
        : null
    );
  },
  Mm = [nb, rb, sb, ib, ob],
  yP = ({ onAdvance: e, onClickSound: t }) => {
    const [n, r] = x.useState(!1),
      [s, i] = x.useState(0),
      [o, a] = Of({
        align: "start",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
      });
    return (
      a == null ||
        a.on("select", () => {
          i(a.selectedScrollSnap());
        }),
      b.jsxs("div", {
        className:
          "flex-1 flex flex-col items-center text-center px-4 pt-16 pb-16 space-y-5 overflow-y-auto",
        children: [
          b.jsx(wf, {
            duration: 12e3,
            description:
              "Nos estamos conectando con la energía de ustedes dos y analizando tus respuestas...",
            onComplete: () => r(!0),
          }),
          n && Ei.createPortal(b.jsx(vP, {}), document.body),
          b.jsx("div", {
            className: "opacity-0 animate-fade-in",
            style: { animationDelay: "0.3s", animationFillMode: "forwards" },
            children: b.jsx(ct, {
              src: tb,
              alt: "Rosa Moreno",
              className: "max-w-[220px] mx-auto rounded-lg aspect-square",
            }),
          }),
          b.jsx("p", {
            className:
              "text-lg font-bold text-foreground opacity-0 animate-fade-in",
            style: { animationDelay: "0.6s", animationFillMode: "forwards" },
            children: "Mi nombre es Rosa Moreno",
          }),
          b.jsxs("p", {
            className:
              "text-sm text-muted-foreground leading-relaxed opacity-0 animate-fade-in",
            style: { animationDelay: "0.9s", animationFillMode: "forwards" },
            children: [
              b.jsx("span", {
                className: "text-primary font-bold",
                children: "Desde hace más de 9 años,",
              }),
              " ",
              "mi misión ha sido una sola: usar el conocimiento que heredé de mi familia",
              " ",
              b.jsx("strong", {
                className: "text-foreground",
                children: "para ayudar a mujeres",
              }),
              " como tú que tienen el corazón roto.",
            ],
          }),
          b.jsx("p", {
            className:
              "text-sm text-muted-foreground leading-relaxed opacity-0 animate-fade-in",
            style: { animationDelay: "1.2s", animationFillMode: "forwards" },
            children:
              "He dedicado mi vida a demostrar que para todo sufrimiento de amor, siempre existe un camino de regreso.",
          }),
          b.jsxs("div", {
            className: "w-full opacity-0 animate-fade-in",
            style: { animationDelay: "1.5s", animationFillMode: "forwards" },
            children: [
              b.jsx("div", {
                ref: o,
                className: "overflow-hidden",
                children: b.jsx("div", {
                  className: "flex",
                  children: Mm.map((l, c) =>
                    b.jsx(
                      "div",
                      {
                        className: "flex-[0_0_91%] min-w-0 pl-3",
                        children: b.jsx("img", {
                          src: l,
                          alt: `Depoimento ${c + 1}`,
                          className: "w-full rounded-lg object-contain",
                        }),
                      },
                      c,
                    ),
                  ),
                }),
              }),
              b.jsx("div", {
                className: "flex justify-center gap-1.5 mt-3",
                children: Mm.map((l, c) =>
                  b.jsx(
                    "div",
                    {
                      className: te(
                        "w-2 h-2 rounded-full transition-all",
                        c === s ? "bg-primary w-4" : "bg-muted-foreground/30",
                      ),
                    },
                    c,
                  ),
                ),
              }),
            ],
          }),
          b.jsx("p", {
            className:
              "text-sm font-bold text-foreground leading-relaxed opacity-0 animate-fade-in",
            style: { animationDelay: "1.8s", animationFillMode: "forwards" },
            children:
              "Cada uno de estos mensajes significa una historia reconstruida.",
          }),
          b.jsx("p", {
            className:
              "text-sm text-muted-foreground leading-relaxed opacity-0 animate-fade-in",
            style: { animationDelay: "2.1s", animationFillMode: "forwards" },
            children:
              "Estos son solo algunos de los mensajes que recibo todos los días de personas que decidieron confiar en el ritual y hoy están viviendo el resultado.",
          }),
          n &&
            b.jsx("div", {
              className: "pt-2 w-full",
              children: b.jsx(ua, {
                label: "Continuar mi ritual",
                onClick: () => e("continuar"),
                onClickSound: t,
                className: "w-full",
              }),
            }),
        ],
      })
    );
  },
  wP = ({ onAdvance: e, answers: t, onClickSound: n }) => {
    const r = (t == null ? void 0 : t[8]) || "";
    return b.jsxs("div", {
      className:
        "px-4 pt-16 pb-16 flex-1 flex flex-col items-center justify-center",
      children: [
        b.jsxs("div", {
          className:
            "rounded-xl bg-muted/60 border border-border px-4 py-3 space-y-1",
          children: [
            b.jsxs(bi, {
              className: "leading-relaxed",
              children: [
                r,
                ", responde algunas preguntas más para preparar tu ritual exclusivo.",
              ],
            }),
            b.jsx(bi, {
              className: "font-semibold text-foreground leading-relaxed",
              children:
                "Si no actúas ahora, él puede seguir adelante para siempre...",
            }),
          ],
        }),
        b.jsx(Ue, {
          title:
            "Qué es lo que más te rompe el corazón en esta lucha por tenerlo de vuelta?",
          className: "mt-5 [&_h2]:leading-relaxed",
        }),
        b.jsx(un, {
          options: [
            {
              label: "Él me ignora como si nunca me hubiera amado",
              emoji: "😢",
            },
            {
              label: "Él está con otra persona y eso me destruye por dentro",
              emoji: "💔",
            },
            { label: "Lo intento, pero parece que nada funciona", emoji: "💥" },
            { label: "El miedo al rechazo me paraliza", emoji: "😩" },
            { label: "Todas las opciones anteriores", emoji: "🤦‍♀️" },
          ],
          onSelect: e,
          onClickSound: n,
        }),
      ],
    });
  },
  ab = "/assets/step14-couple-BzQSgC5o.webp",
  bP = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: ab,
          alt: "Pareja",
          className: "w-full aspect-square",
        }),
        b.jsxs("div", {
          className: "px-4 py-6 flex flex-col items-center",
          children: [
            b.jsx(Ue, {
              title: "Por qué crees que aún no has logrado recuperar a tu ex?",
            }),
            b.jsx(un, {
              className: "w-full",
              options: [
                { label: "Falta de comunicación", emoji: "❌" },
                { label: "Heridas del pasado", emoji: "💔" },
                { label: "Otras personas interfiriendo", emoji: "👫" },
                { label: "No sé el motivo exacto", emoji: "😢" },
              ],
              onSelect: e,
              onClickSound: t,
            }),
          ],
        }),
      ],
    }),
  lb = "/assets/step15-tristeza-BCzGzNgK.webp",
  cb = "/assets/step15-ansiedad-YGFo44_a.webp",
  ub = "/assets/step15-rabia-CO3GDtX-.webp",
  db = "/assets/step15-nada-Cd21LOXM.webp",
  xP = ({ onAdvance: e, answers: t, onClickSound: n }) => {
    const r = (t == null ? void 0 : t[8]) || "";
    return b.jsxs("div", {
      className:
        "px-4 pt-16 pb-16 flex-1 flex flex-col items-center justify-center",
      children: [
        b.jsx(Ue, {
          title: `${r}, cómo te sientes cuando piensas en el fin de la relación?`,
        }),
        b.jsx(Oi, {
          className: "w-full",
          options: [
            { label: "Tristeza profunda", image: lb },
            { label: "Ansiedad", image: cb },
            { label: "Rabia", image: ub },
            { label: "No siento nada", image: db },
          ],
          onSelect: e,
          onClickSound: n,
        }),
      ],
    });
  },
  hb = "/assets/step16-revivir-doypsVRR.webp",
  _P = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: hb,
          alt: "Revivir momentos",
          className: "w-full aspect-square",
        }),
        b.jsxs("div", {
          className: "px-4 py-6 flex flex-col items-center",
          children: [
            b.jsx(Ue, {
              title:
                "Sueles revivir mentalmente momentos específicos de la relación?",
            }),
            b.jsx(un, {
              className: "w-full",
              options: [
                { label: "Sí, todos los días", emoji: "💭" },
                { label: "Sí, a veces", emoji: "🤔" },
                { label: "Rara vez", emoji: "🤔" },
                { label: "Nunca me ha pasado", emoji: "❌" },
              ],
              onSelect: e,
              onClickSound: t,
            }),
          ],
        }),
      ],
    }),
  fb = "/assets/step17-redes-BuVEAljO.webp",
  SP = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: fb,
          alt: "Redes sociales",
          className: "w-full aspect-square",
        }),
        b.jsxs("div", {
          className: "px-4 py-6 flex flex-col items-center",
          children: [
            b.jsx(Ue, {
              title: "Tienes el hábito de revisar las redes sociales de tu ex?",
            }),
            b.jsx(un, {
              className: "w-full",
              options: [
                { label: "Sí, todos los días", emoji: "📱" },
                { label: "Sí, a veces", emoji: "🤔" },
                { label: "Rara vez", emoji: "🤔" },
                { label: "No, no estoy pendiente", emoji: "❌" },
              ],
              onSelect: e,
              onClickSound: t,
            }),
          ],
        }),
      ],
    }),
  pb = "/assets/step18-salud-BW_PME0O.webp",
  mb = "/assets/step18-trabajo-BD4__Dzm.webp",
  gb = "/assets/step18-noches-DocIP_Rr.webp",
  vb = "/assets/step18-todas-jhq7xSBX.webp",
  EP = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className:
        "px-4 pt-16 pb-16 flex-1 flex flex-col items-center justify-center",
      children: [
        b.jsx(Ue, {
          title:
            "Sientes que esta situación está afectando otras áreas de tu vida?",
        }),
        b.jsx(Oi, {
          className: "w-full",
          options: [
            { label: "Sí, mi salud emocional", image: pb },
            { label: "Sí, mi desempeño profesional", image: mb },
            { label: "Sí, estoy teniendo noches mal dormidas", image: gb },
            { label: "Todas las opciones anteriores", image: vb },
          ],
          onSelect: e,
          onClickSound: t,
        }),
      ],
    }),
  yb = "/assets/step19-ritual-DD3Hf5WV.webp",
  kP = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: yb,
          alt: "Resultados ritual",
          className: "w-full aspect-square",
        }),
        b.jsxs("div", {
          className: "px-4 py-6 flex flex-col items-center",
          children: [
            b.jsx(Ue, {
              title: "Qué resultados te gustaría alcanzar con este ritual?",
            }),
            b.jsx(un, {
              className: "w-full text-left",
              options: [
                { label: "Que él vuelva completamente enamorado" },
                { label: "Que me pida perdón y reconsidere la separación" },
                { label: "Que se aleje de cualquier otra mujer" },
                { label: "Todas las opciones anteriores" },
              ],
              onSelect: e,
              onClickSound: t,
            }),
          ],
        }),
      ],
    }),
  wb = "/assets/step20-volver-ClxEo3a2.webp",
  TP = ({ onAdvance: e, onClickSound: t }) =>
    b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, {
          src: wb,
          alt: "Volver hoy",
          className: "w-full aspect-square",
        }),
        b.jsxs("div", {
          className: "px-4 py-6 flex flex-col items-center",
          children: [
            b.jsx(Ue, {
              title: "Si pudieras hacer que tu ex vuelva HOY, ¿lo harías?",
            }),
            b.jsx(un, {
              className: "w-full",
              options: [
                { label: "Sí, ¡inmediatamente!", emoji: "😍" },
                {
                  label:
                    "Quiero asegurarme de que funcione, sin importar cuánto tiempo tome",
                  emoji: "👫",
                },
                { label: "No me importa tanto eso", emoji: "🥱" },
              ],
              onSelect: e,
              onClickSound: t,
            }),
          ],
        }),
      ],
    }),
  bb = "/assets/step21-ritual-0PK_P6ia.webp",
  CP = ({ onAdvance: e, answers: t }) => {
    const n = (t == null ? void 0 : t[8]) || "",
      r = (t == null ? void 0 : t[9]) || "";
    return b.jsxs("div", {
      className: "flex-1 flex flex-col",
      children: [
        b.jsx(ct, { src: bb, alt: "Ritual" }),
        b.jsxs("div", {
          className:
            "flex-1 flex flex-col items-center text-center px-4 py-4 pb-16 space-y-5",
          children: [
            b.jsxs("h2", {
              className:
                "text-xl font-bold leading-snug tracking-tight font-heading uppercase",
              children: [
                b.jsx("span", { className: "text-red-300", children: n }),
                b.jsx("br", {}),
                b.jsx("span", {
                  className: "text-foreground",
                  children: "No salgas de esta página",
                }),
              ],
            }),
            b.jsx(wf, {
              duration: 1e4,
              description:
                "Estamos finalizando los últimos detalles de tu ritual personalizado…",
              onComplete: () => e("continuar"),
            }),
            b.jsxs("div", {
              className:
                "rounded-xl bg-destructive/10 border border-destructive/15 px-4 py-3 space-y-2",
              children: [
                b.jsx("span", { className: "text-3xl", children: "❤️" }),
                b.jsxs(bi, {
                  className: "leading-relaxed",
                  children: [
                    "Tú y ",
                    b.jsx("strong", { children: r }),
                    " están más cerca que nunca de reencontrarse",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
var Um = function () {
  return (
    (Um =
      Object.assign ||
      function (t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Um.apply(this, arguments)
  );
};
function kc(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
        (n[r[s]] = e[r[s]]);
  return n;
}
function RP(e, t, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function a(d) {
      try {
        c(r.next(d));
      } catch (u) {
        o(u);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (u) {
        o(u);
      }
    }
    function c(d) {
      d.done ? i(d.value) : s(d.value).then(a, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function cN(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, i; r < s; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
const PP = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t));
class jf extends Error {
  constructor(t, n = "FunctionsError", r) {
    (super(t), (this.name = n), (this.context = r));
  }
  toJSON() {
    return { name: this.name, message: this.message, context: this.context };
  }
}
class AP extends jf {
  constructor(t) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      t,
    );
  }
}
class Fm extends jf {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class zm extends jf {
  constructor(t) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      t,
    );
  }
}
var zd;
(function (e) {
  ((e.Any = "any"),
    (e.ApNortheast1 = "ap-northeast-1"),
    (e.ApNortheast2 = "ap-northeast-2"),
    (e.ApSouth1 = "ap-south-1"),
    (e.ApSoutheast1 = "ap-southeast-1"),
    (e.ApSoutheast2 = "ap-southeast-2"),
    (e.CaCentral1 = "ca-central-1"),
    (e.EuCentral1 = "eu-central-1"),
    (e.EuWest1 = "eu-west-1"),
    (e.EuWest2 = "eu-west-2"),
    (e.EuWest3 = "eu-west-3"),
    (e.SaEast1 = "sa-east-1"),
    (e.UsEast1 = "us-east-1"),
    (e.UsWest1 = "us-west-1"),
    (e.UsWest2 = "us-west-2"));
})(zd || (zd = {}));
class OP {
  constructor(t, { headers: n = {}, customFetch: r, region: s = zd.Any } = {}) {
    ((this.url = t),
      (this.headers = n),
      (this.region = s),
      (this.fetch = PP(r)));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t) {
    return RP(this, arguments, void 0, function* (n, r = {}) {
      var s;
      let i, o;
      try {
        const { headers: a, method: l, body: c, signal: d, timeout: u } = r;
        let f = {},
          { region: h } = r;
        h || (h = this.region);
        const v = new URL(`${this.url}/${n}`);
        h &&
          h !== "any" &&
          ((f["x-region"] = h), v.searchParams.set("forceFunctionRegion", h));
        let g;
        c &&
        ((a && !Object.prototype.hasOwnProperty.call(a, "Content-Type")) || !a)
          ? (typeof Blob < "u" && c instanceof Blob) || c instanceof ArrayBuffer
            ? ((f["Content-Type"] = "application/octet-stream"), (g = c))
            : typeof c == "string"
              ? ((f["Content-Type"] = "text/plain"), (g = c))
              : typeof FormData < "u" && c instanceof FormData
                ? (g = c)
                : ((f["Content-Type"] = "application/json"),
                  (g = JSON.stringify(c)))
          : c &&
              typeof c != "string" &&
              !(typeof Blob < "u" && c instanceof Blob) &&
              !(c instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && c instanceof FormData)
            ? (g = JSON.stringify(c))
            : (g = c);
        let w = d;
        u &&
          ((o = new AbortController()),
          (i = setTimeout(() => o.abort(), u)),
          d
            ? ((w = o.signal), d.addEventListener("abort", () => o.abort()))
            : (w = o.signal));
        const p = yield this.fetch(v.toString(), {
            method: l || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, f), this.headers),
              a,
            ),
            body: g,
            signal: w,
          }).catch((S) => {
            throw new AP(S);
          }),
          m = p.headers.get("x-relay-error");
        if (m && m === "true") throw new Fm(p);
        if (!p.ok) throw new zm(p);
        let y = (
            (s = p.headers.get("Content-Type")) !== null && s !== void 0
              ? s
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          _;
        return (
          y === "application/json"
            ? (_ = yield p.json())
            : y === "application/octet-stream" || y === "application/pdf"
              ? (_ = yield p.blob())
              : y === "text/event-stream"
                ? (_ = p)
                : y === "multipart/form-data"
                  ? (_ = yield p.formData())
                  : (_ = yield p.text()),
          { data: _, error: null, response: p }
        );
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof zm || a instanceof Fm ? a.context : void 0,
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
const xb = 3,
  Bm = (e) => Math.min(1e3 * 2 ** e, 3e4),
  jP = [520, 503],
  _b = ["GET", "HEAD", "OPTIONS"];
var NP = class extends Error {
  constructor(e) {
    (super(e.message),
      (this.name = "PostgrestError"),
      (this.details = e.details),
      (this.hint = e.hint),
      (this.code = e.code));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code,
    };
  }
};
function Hm(e, t) {
  return new Promise((n) => {
    if (t != null && t.aborted) {
      n();
      return;
    }
    const r = setTimeout(() => {
      (t == null || t.removeEventListener("abort", s), n());
    }, e);
    function s() {
      (clearTimeout(r), n());
    }
    t == null || t.addEventListener("abort", s);
  });
}
function IP(e, t, n, r) {
  return !(!r || n >= xb || !_b.includes(e) || !jP.includes(t));
}
var LP = class {
    constructor(e) {
      var t, n, r, s;
      ((this.shouldThrowOnError = !1),
        (this.retryEnabled = !0),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = new Headers(e.headers)),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError =
          (t = e.shouldThrowOnError) !== null && t !== void 0 ? t : !1),
        (this.signal = e.signal),
        (this.isMaybeSingle =
          (n = e.isMaybeSingle) !== null && n !== void 0 ? n : !1),
        (this.urlLengthLimit =
          (r = e.urlLengthLimit) !== null && r !== void 0 ? r : 8e3),
        (this.retryEnabled = (s = e.retry) !== null && s !== void 0 ? s : !0),
        e.fetch ? (this.fetch = e.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(e, t) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(e, t),
        this
      );
    }
    retry(e) {
      return ((this.retryEnabled = e), this);
    }
    then(e, t) {
      var n = this;
      (this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"));
      const r = this.fetch;
      let i = (async () => {
        let o = 0;
        for (;;) {
          const c = new Headers(n.headers);
          o > 0 && c.set("X-Retry-Count", String(o));
          let d;
          try {
            d = await r(n.url.toString(), {
              method: n.method,
              headers: c,
              body: JSON.stringify(n.body),
              signal: n.signal,
            });
          } catch (u) {
            if (
              (u == null ? void 0 : u.name) === "AbortError" ||
              (u == null ? void 0 : u.code) === "ABORT_ERR" ||
              !_b.includes(n.method)
            )
              throw u;
            if (n.retryEnabled && o < xb) {
              const f = Bm(o);
              (o++, await Hm(f, n.signal));
              continue;
            }
            throw u;
          }
          if (IP(n.method, d.status, o, n.retryEnabled)) {
            var a, l;
            const u =
                (a =
                  (l = d.headers) === null || l === void 0
                    ? void 0
                    : l.get("Retry-After")) !== null && a !== void 0
                  ? a
                  : null,
              f = u !== null ? Math.max(0, parseInt(u, 10) || 0) * 1e3 : Bm(o);
            (await d.text(), o++, await Hm(f, n.signal));
            continue;
          }
          return await n.processResponse(d);
        }
      })();
      return (
        this.shouldThrowOnError ||
          (i = i.catch((o) => {
            var a;
            let l = "",
              c = "",
              d = "";
            const u = o == null ? void 0 : o.cause;
            if (u) {
              var f, h, v, g;
              const m =
                  (f = u == null ? void 0 : u.message) !== null && f !== void 0
                    ? f
                    : "",
                y =
                  (h = u == null ? void 0 : u.code) !== null && h !== void 0
                    ? h
                    : "";
              ((l = `${(v = o == null ? void 0 : o.name) !== null && v !== void 0 ? v : "FetchError"}: ${o == null ? void 0 : o.message}`),
                (l += `

Caused by: ${(g = u == null ? void 0 : u.name) !== null && g !== void 0 ? g : "Error"}: ${m}`),
                y && (l += ` (${y})`),
                u != null &&
                  u.stack &&
                  (l += `
${u.stack}`));
            } else {
              var w;
              l =
                (w = o == null ? void 0 : o.stack) !== null && w !== void 0
                  ? w
                  : "";
            }
            const p = this.url.toString().length;
            return (
              (o == null ? void 0 : o.name) === "AbortError" ||
              (o == null ? void 0 : o.code) === "ABORT_ERR"
                ? ((d = ""),
                  (c = "Request was aborted (timeout or manual cancellation)"),
                  p > this.urlLengthLimit &&
                    (c += `. Note: Your request URL is ${p} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((u == null ? void 0 : u.name) === "HeadersOverflowError" ||
                    (u == null ? void 0 : u.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((d = ""),
                  (c = "HTTP headers exceeded server limits (typically 16KB)"),
                  p > this.urlLengthLimit &&
                    (c += `. Your request URL is ${p} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                success: !1,
                error: {
                  message: `${(a = o == null ? void 0 : o.name) !== null && a !== void 0 ? a : "FetchError"}: ${o == null ? void 0 : o.message}`,
                  details: l,
                  hint: c,
                  code: d,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        i.then(e, t)
      );
    }
    async processResponse(e) {
      var t = this;
      let n = null,
        r = null,
        s = null,
        i = e.status,
        o = e.statusText;
      if (e.ok) {
        var a, l;
        if (t.method !== "HEAD") {
          var c;
          const f = await e.text();
          f === "" ||
            (t.headers.get("Accept") === "text/csv" ||
            (t.headers.get("Accept") &&
              !((c = t.headers.get("Accept")) === null || c === void 0) &&
              c.includes("application/vnd.pgrst.plan+text"))
              ? (r = f)
              : (r = JSON.parse(f)));
        }
        const d =
            (a = t.headers.get("Prefer")) === null || a === void 0
              ? void 0
              : a.match(/count=(exact|planned|estimated)/),
          u =
            (l = e.headers.get("content-range")) === null || l === void 0
              ? void 0
              : l.split("/");
        (d && u && u.length > 1 && (s = parseInt(u[1])),
          t.isMaybeSingle &&
            Array.isArray(r) &&
            (r.length > 1
              ? ((n = {
                  code: "PGRST116",
                  details: `Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message:
                    "JSON object requested, multiple (or no) rows returned",
                }),
                (r = null),
                (s = null),
                (i = 406),
                (o = "Not Acceptable"))
              : r.length === 1
                ? (r = r[0])
                : (r = null)));
      } else {
        const d = await e.text();
        try {
          ((n = JSON.parse(d)),
            Array.isArray(n) &&
              e.status === 404 &&
              ((r = []), (n = null), (i = 200), (o = "OK")));
        } catch {
          e.status === 404 && d === ""
            ? ((i = 204), (o = "No Content"))
            : (n = { message: d });
        }
        if (n && t.shouldThrowOnError) throw new NP(n);
      }
      return {
        success: n === null,
        error: n,
        data: r,
        count: s,
        status: i,
        statusText: o,
      };
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  DP = class extends LP {
    select(e) {
      let t = !1;
      const n = (e ?? "*")
        .split("")
        .map((r) => (/\s/.test(r) && !t ? "" : (r === '"' && (t = !t), r)))
        .join("");
      return (
        this.url.searchParams.set("select", n),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      e,
      {
        ascending: t = !0,
        nullsFirst: n,
        foreignTable: r,
        referencedTable: s = r,
      } = {},
    ) {
      const i = s ? `${s}.order` : "order",
        o = this.url.searchParams.get(i);
      return (
        this.url.searchParams.set(
          i,
          `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(e, { foreignTable: t, referencedTable: n = t } = {}) {
      const r = typeof n > "u" ? "limit" : `${n}.limit`;
      return (this.url.searchParams.set(r, `${e}`), this);
    }
    range(e, t, { foreignTable: n, referencedTable: r = n } = {}) {
      const s = typeof r > "u" ? "offset" : `${r}.offset`,
        i = typeof r > "u" ? "limit" : `${r}.limit`;
      return (
        this.url.searchParams.set(s, `${e}`),
        this.url.searchParams.set(i, `${t - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return ((this.signal = e), this);
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
      );
    }
    maybeSingle() {
      return ((this.isMaybeSingle = !0), this);
    }
    csv() {
      return (this.headers.set("Accept", "text/csv"), this);
    }
    geojson() {
      return (this.headers.set("Accept", "application/geo+json"), this);
    }
    explain({
      analyze: e = !1,
      verbose: t = !1,
      settings: n = !1,
      buffers: r = !1,
      wal: s = !1,
      format: i = "text",
    } = {}) {
      var o;
      const a = [
          e ? "analyze" : null,
          t ? "verbose" : null,
          n ? "settings" : null,
          r ? "buffers" : null,
          s ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        l =
          (o = this.headers.get("Accept")) !== null && o !== void 0
            ? o
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${i}; for="${l}"; options=${a};`,
        ),
        i === "json" ? this : this
      );
    }
    rollback() {
      return (this.headers.append("Prefer", "tx=rollback"), this);
    }
    returns() {
      return this;
    }
    maxAffected(e) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${e}`),
        this
      );
    }
  };
const Vm = new RegExp("[,()]");
var Ts = class extends DP {
    eq(e, t) {
      return (this.url.searchParams.append(e, `eq.${t}`), this);
    }
    neq(e, t) {
      return (this.url.searchParams.append(e, `neq.${t}`), this);
    }
    gt(e, t) {
      return (this.url.searchParams.append(e, `gt.${t}`), this);
    }
    gte(e, t) {
      return (this.url.searchParams.append(e, `gte.${t}`), this);
    }
    lt(e, t) {
      return (this.url.searchParams.append(e, `lt.${t}`), this);
    }
    lte(e, t) {
      return (this.url.searchParams.append(e, `lte.${t}`), this);
    }
    like(e, t) {
      return (this.url.searchParams.append(e, `like.${t}`), this);
    }
    likeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
        this
      );
    }
    likeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
        this
      );
    }
    ilike(e, t) {
      return (this.url.searchParams.append(e, `ilike.${t}`), this);
    }
    ilikeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
        this
      );
    }
    ilikeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
        this
      );
    }
    regexMatch(e, t) {
      return (this.url.searchParams.append(e, `match.${t}`), this);
    }
    regexIMatch(e, t) {
      return (this.url.searchParams.append(e, `imatch.${t}`), this);
    }
    is(e, t) {
      return (this.url.searchParams.append(e, `is.${t}`), this);
    }
    isDistinct(e, t) {
      return (this.url.searchParams.append(e, `isdistinct.${t}`), this);
    }
    in(e, t) {
      const n = Array.from(new Set(t))
        .map((r) => (typeof r == "string" && Vm.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(e, `in.(${n})`), this);
    }
    notIn(e, t) {
      const n = Array.from(new Set(t))
        .map((r) => (typeof r == "string" && Vm.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return (this.url.searchParams.append(e, `not.in.(${n})`), this);
    }
    contains(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cs.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
      );
    }
    containedBy(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cd.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
      );
    }
    rangeGt(e, t) {
      return (this.url.searchParams.append(e, `sr.${t}`), this);
    }
    rangeGte(e, t) {
      return (this.url.searchParams.append(e, `nxl.${t}`), this);
    }
    rangeLt(e, t) {
      return (this.url.searchParams.append(e, `sl.${t}`), this);
    }
    rangeLte(e, t) {
      return (this.url.searchParams.append(e, `nxr.${t}`), this);
    }
    rangeAdjacent(e, t) {
      return (this.url.searchParams.append(e, `adj.${t}`), this);
    }
    overlaps(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `ov.${t}`)
          : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
        this
      );
    }
    textSearch(e, t, { config: n, type: r } = {}) {
      let s = "";
      r === "plain"
        ? (s = "pl")
        : r === "phrase"
          ? (s = "ph")
          : r === "websearch" && (s = "w");
      const i = n === void 0 ? "" : `(${n})`;
      return (this.url.searchParams.append(e, `${s}fts${i}.${t}`), this);
    }
    match(e) {
      return (
        Object.entries(e)
          .filter(([t, n]) => n !== void 0)
          .forEach(([t, n]) => {
            this.url.searchParams.append(t, `eq.${n}`);
          }),
        this
      );
    }
    not(e, t, n) {
      return (this.url.searchParams.append(e, `not.${t}.${n}`), this);
    }
    or(e, { foreignTable: t, referencedTable: n = t } = {}) {
      const r = n ? `${n}.or` : "or";
      return (this.url.searchParams.append(r, `(${e})`), this);
    }
    filter(e, t, n) {
      return (this.url.searchParams.append(e, `${t}.${n}`), this);
    }
  },
  $P = class {
    constructor(
      e,
      {
        headers: t = {},
        schema: n,
        fetch: r,
        urlLengthLimit: s = 8e3,
        retry: i,
      },
    ) {
      ((this.url = e),
        (this.headers = new Headers(t)),
        (this.schema = n),
        (this.fetch = r),
        (this.urlLengthLimit = s),
        (this.retry = i));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(e, t) {
      const { head: n = !1, count: r } = t ?? {},
        s = n ? "HEAD" : "GET";
      let i = !1;
      const o = (e ?? "*")
          .split("")
          .map((c) => (/\s/.test(c) && !i ? "" : (c === '"' && (i = !i), c)))
          .join(""),
        { url: a, headers: l } = this.cloneRequestState();
      return (
        a.searchParams.set("select", o),
        r && l.append("Prefer", `count=${r}`),
        new Ts({
          method: s,
          url: a,
          headers: l,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    insert(e, { count: t, defaultToNull: n = !0 } = {}) {
      var r;
      const s = "POST",
        { url: i, headers: o } = this.cloneRequestState();
      if (
        (t && o.append("Prefer", `count=${t}`),
        n || o.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const a = e.reduce((l, c) => l.concat(Object.keys(c)), []);
        if (a.length > 0) {
          const l = [...new Set(a)].map((c) => `"${c}"`);
          i.searchParams.set("columns", l.join(","));
        }
      }
      return new Ts({
        method: s,
        url: i,
        headers: o,
        schema: this.schema,
        body: e,
        fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    upsert(
      e,
      {
        onConflict: t,
        ignoreDuplicates: n = !1,
        count: r,
        defaultToNull: s = !0,
      } = {},
    ) {
      var i;
      const o = "POST",
        { url: a, headers: l } = this.cloneRequestState();
      if (
        (l.append("Prefer", `resolution=${n ? "ignore" : "merge"}-duplicates`),
        t !== void 0 && a.searchParams.set("on_conflict", t),
        r && l.append("Prefer", `count=${r}`),
        s || l.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const c = e.reduce((d, u) => d.concat(Object.keys(u)), []);
        if (c.length > 0) {
          const d = [...new Set(c)].map((u) => `"${u}"`);
          a.searchParams.set("columns", d.join(","));
        }
      }
      return new Ts({
        method: o,
        url: a,
        headers: l,
        schema: this.schema,
        body: e,
        fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    update(e, { count: t } = {}) {
      var n;
      const r = "PATCH",
        { url: s, headers: i } = this.cloneRequestState();
      return (
        t && i.append("Prefer", `count=${t}`),
        new Ts({
          method: r,
          url: s,
          headers: i,
          schema: this.schema,
          body: e,
          fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    delete({ count: e } = {}) {
      var t;
      const n = "DELETE",
        { url: r, headers: s } = this.cloneRequestState();
      return (
        e && s.append("Prefer", `count=${e}`),
        new Ts({
          method: n,
          url: r,
          headers: s,
          schema: this.schema,
          fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
  };
function Vo(e) {
  "@babel/helpers - typeof";
  return (
    (Vo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vo(e)
  );
}
function MP(e, t) {
  if (Vo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Vo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UP(e) {
  var t = MP(e, "string");
  return Vo(t) == "symbol" ? t : t + "";
}
function FP(e, t, n) {
  return (
    (t = UP(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Wm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wm(Object(n), !0).forEach(function (r) {
          FP(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Wm(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
var zP = class Sb {
  constructor(
    t,
    {
      headers: n = {},
      schema: r,
      fetch: s,
      timeout: i,
      urlLengthLimit: o = 8e3,
      retry: a,
    } = {},
  ) {
    ((this.url = t),
      (this.headers = new Headers(n)),
      (this.schemaName = r),
      (this.urlLengthLimit = o));
    const l = s ?? globalThis.fetch;
    (i !== void 0 && i > 0
      ? (this.fetch = (c, d) => {
          const u = new AbortController(),
            f = setTimeout(() => u.abort(), i),
            h = d == null ? void 0 : d.signal;
          if (h) {
            if (h.aborted) return (clearTimeout(f), l(c, d));
            const v = () => {
              (clearTimeout(f), u.abort());
            };
            return (
              h.addEventListener("abort", v, { once: !0 }),
              l(c, Ba(Ba({}, d), {}, { signal: u.signal })).finally(() => {
                (clearTimeout(f), h.removeEventListener("abort", v));
              })
            );
          }
          return l(c, Ba(Ba({}, d), {}, { signal: u.signal })).finally(() =>
            clearTimeout(f),
          );
        })
      : (this.fetch = l),
      (this.retry = a));
  }
  from(t) {
    if (!t || typeof t != "string" || t.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string.",
      );
    return new $P(new URL(`${this.url}/${t}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry,
    });
  }
  schema(t) {
    return new Sb(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry,
    });
  }
  rpc(t, n = {}, { head: r = !1, get: s = !1, count: i } = {}) {
    var o;
    let a;
    const l = new URL(`${this.url}/rpc/${t}`);
    let c;
    const d = (h) =>
        h !== null && typeof h == "object" && (!Array.isArray(h) || h.some(d)),
      u = r && Object.values(n).some(d);
    u
      ? ((a = "POST"), (c = n))
      : r || s
        ? ((a = r ? "HEAD" : "GET"),
          Object.entries(n)
            .filter(([h, v]) => v !== void 0)
            .map(([h, v]) => [
              h,
              Array.isArray(v) ? `{${v.join(",")}}` : `${v}`,
            ])
            .forEach(([h, v]) => {
              l.searchParams.append(h, v);
            }))
        : ((a = "POST"), (c = n));
    const f = new Headers(this.headers);
    return (
      u
        ? f.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal")
        : i && f.set("Prefer", `count=${i}`),
      new Ts({
        method: a,
        url: l,
        headers: f,
        schema: this.schemaName,
        body: c,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      })
    );
  }
};
class BP {
  constructor() {}
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((t = navigator.userAgent) === null || t === void 0) &&
        t.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const n = globalThis.process;
    if (n) {
      const r = n.versions;
      if (r && r.node) {
        const s = r.node,
          i = parseInt(s.replace(/^v/, "").split(".")[0]);
        return i >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${i} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${i} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.constructor) return t.constructor;
    let n = t.error || "WebSocket not supported in this environment.";
    throw (
      t.workaround &&
        (n += `

Suggested solution: ${t.workaround}`),
      new Error(n)
    );
  }
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const HP = "2.102.1",
  VP = `realtime-js/${HP}`,
  WP = "1.0.0",
  Eb = "2.0.0",
  qP = Eb,
  KP = 1e4,
  GP = 100,
  or = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  kb = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
    access_token: "access_token",
  },
  Bd = {
    connecting: "connecting",
    open: "open",
    closing: "closing",
    closed: "closed",
  };
class QP {
  constructor(t) {
    ((this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = t ?? []));
  }
  encode(t, n) {
    if (
      t.event === this.BROADCAST_EVENT &&
      !(t.payload instanceof ArrayBuffer) &&
      typeof t.payload.event == "string"
    )
      return n(this._binaryEncodeUserBroadcastPush(t));
    let r = [t.join_ref, t.ref, t.topic, t.event, t.payload];
    return n(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(t) {
    var n;
    return this._isArrayBuffer(
      (n = t.payload) === null || n === void 0 ? void 0 : n.payload,
    )
      ? this._encodeBinaryUserBroadcastPush(t)
      : this._encodeJsonUserBroadcastPush(t);
  }
  _encodeBinaryUserBroadcastPush(t) {
    var n, r;
    const s =
      (r = (n = t.payload) === null || n === void 0 ? void 0 : n.payload) !==
        null && r !== void 0
        ? r
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(t) {
    var n, r;
    const s =
        (r = (n = t.payload) === null || n === void 0 ? void 0 : n.payload) !==
          null && r !== void 0
          ? r
          : {},
      o = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(t, n, r) {
    var s, i;
    const o = t.topic,
      a = (s = t.ref) !== null && s !== void 0 ? s : "",
      l = (i = t.join_ref) !== null && i !== void 0 ? i : "",
      c = t.payload.event,
      d = this.allowedMetadataKeys
        ? this._pick(t.payload, this.allowedMetadataKeys)
        : {},
      u = Object.keys(d).length === 0 ? "" : JSON.stringify(d);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (c.length > 255)
      throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`metadata length ${u.length} exceeds maximum of 255`);
    const f =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        l.length +
        a.length +
        o.length +
        c.length +
        u.length,
      h = new ArrayBuffer(this.HEADER_LENGTH + f);
    let v = new DataView(h),
      g = 0;
    (v.setUint8(g++, this.KINDS.userBroadcastPush),
      v.setUint8(g++, l.length),
      v.setUint8(g++, a.length),
      v.setUint8(g++, o.length),
      v.setUint8(g++, c.length),
      v.setUint8(g++, u.length),
      v.setUint8(g++, n),
      Array.from(l, (p) => v.setUint8(g++, p.charCodeAt(0))),
      Array.from(a, (p) => v.setUint8(g++, p.charCodeAt(0))),
      Array.from(o, (p) => v.setUint8(g++, p.charCodeAt(0))),
      Array.from(c, (p) => v.setUint8(g++, p.charCodeAt(0))),
      Array.from(u, (p) => v.setUint8(g++, p.charCodeAt(0))));
    var w = new Uint8Array(h.byteLength + r.byteLength);
    return (
      w.set(new Uint8Array(h), 0),
      w.set(new Uint8Array(r), h.byteLength),
      w.buffer
    );
  }
  decode(t, n) {
    if (this._isArrayBuffer(t)) {
      let r = this._binaryDecode(t);
      return n(r);
    }
    if (typeof t == "string") {
      const r = JSON.parse(t),
        [s, i, o, a, l] = r;
      return n({ join_ref: s, ref: i, topic: o, event: a, payload: l });
    }
    return n({});
  }
  _binaryDecode(t) {
    const n = new DataView(t),
      r = n.getUint8(0),
      s = new TextDecoder();
    switch (r) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(t, n, s);
    }
  }
  _decodeUserBroadcast(t, n, r) {
    const s = n.getUint8(1),
      i = n.getUint8(2),
      o = n.getUint8(3),
      a = n.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const c = r.decode(t.slice(l, l + s));
    l = l + s;
    const d = r.decode(t.slice(l, l + i));
    l = l + i;
    const u = r.decode(t.slice(l, l + o));
    l = l + o;
    const f = t.slice(l, t.byteLength),
      h = a === this.JSON_ENCODING ? JSON.parse(r.decode(f)) : f,
      v = { type: this.BROADCAST_EVENT, event: d, payload: h };
    return (
      o > 0 && (v.meta = JSON.parse(u)),
      {
        join_ref: null,
        ref: null,
        topic: c,
        event: this.BROADCAST_EVENT,
        payload: v,
      }
    );
  }
  _isArrayBuffer(t) {
    var n;
    return (
      t instanceof ArrayBuffer ||
      ((n = t == null ? void 0 : t.constructor) === null || n === void 0
        ? void 0
        : n.name) === "ArrayBuffer"
    );
  }
  _pick(t, n) {
    return !t || typeof t != "object"
      ? {}
      : Object.fromEntries(Object.entries(t).filter(([r]) => n.includes(r)));
  }
}
var pe;
(function (e) {
  ((e.abstime = "abstime"),
    (e.bool = "bool"),
    (e.date = "date"),
    (e.daterange = "daterange"),
    (e.float4 = "float4"),
    (e.float8 = "float8"),
    (e.int2 = "int2"),
    (e.int4 = "int4"),
    (e.int4range = "int4range"),
    (e.int8 = "int8"),
    (e.int8range = "int8range"),
    (e.json = "json"),
    (e.jsonb = "jsonb"),
    (e.money = "money"),
    (e.numeric = "numeric"),
    (e.oid = "oid"),
    (e.reltime = "reltime"),
    (e.text = "text"),
    (e.time = "time"),
    (e.timestamp = "timestamp"),
    (e.timestamptz = "timestamptz"),
    (e.timetz = "timetz"),
    (e.tsrange = "tsrange"),
    (e.tstzrange = "tstzrange"));
})(pe || (pe = {}));
const qm = (e, t, n = {}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return t
      ? Object.keys(t).reduce((i, o) => ((i[o] = JP(o, e, t, s)), i), {})
      : {};
  },
  JP = (e, t, n, r) => {
    const s = t.find((a) => a.name === e),
      i = s == null ? void 0 : s.type,
      o = n[e];
    return i && !r.includes(i) ? Tb(i, o) : Hd(o);
  },
  Tb = (e, t) => {
    if (e.charAt(0) === "_") {
      const n = e.slice(1, e.length);
      return eA(t, n);
    }
    switch (e) {
      case pe.bool:
        return YP(t);
      case pe.float4:
      case pe.float8:
      case pe.int2:
      case pe.int4:
      case pe.int8:
      case pe.numeric:
      case pe.oid:
        return XP(t);
      case pe.json:
      case pe.jsonb:
        return ZP(t);
      case pe.timestamp:
        return tA(t);
      case pe.abstime:
      case pe.date:
      case pe.daterange:
      case pe.int4range:
      case pe.int8range:
      case pe.money:
      case pe.reltime:
      case pe.text:
      case pe.time:
      case pe.timestamptz:
      case pe.timetz:
      case pe.tsrange:
      case pe.tstzrange:
        return Hd(t);
      default:
        return Hd(t);
    }
  },
  Hd = (e) => e,
  YP = (e) => {
    switch (e) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return e;
    }
  },
  XP = (e) => {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  ZP = (e) => {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  },
  eA = (e, t) => {
    if (typeof e != "string") return e;
    const n = e.length - 1,
      r = e[n];
    if (e[0] === "{" && r === "}") {
      let i;
      const o = e.slice(1, n);
      try {
        i = JSON.parse("[" + o + "]");
      } catch {
        i = o ? o.split(",") : [];
      }
      return i.map((a) => Tb(t, a));
    }
    return e;
  },
  tA = (e) => (typeof e == "string" ? e.replace(" ", "T") : e),
  Cb = (e) => {
    const t = new URL(e);
    return (
      (t.protocol = t.protocol.replace(/^ws/i, "http")),
      (t.pathname = t.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      t.pathname === "" || t.pathname === "/"
        ? (t.pathname = "/api/broadcast")
        : (t.pathname = t.pathname + "/api/broadcast"),
      t.href
    );
  };
var fo = (e) =>
    typeof e == "function"
      ? e
      : function () {
          return e;
        },
  nA = typeof self < "u" ? self : null,
  Cs = typeof window < "u" ? window : null,
  mn = nA || Cs || globalThis,
  rA = "2.0.0",
  sA = 1e4,
  iA = 1e3,
  wn = { connecting: 0, open: 1, closing: 2, closed: 3 },
  dt = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  On = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
  },
  Vd = { longpoll: "longpoll", websocket: "websocket" },
  oA = { complete: 4 },
  Wd = "base64url.bearer.phx.",
  Ha = class {
    constructor(e, t, n, r) {
      ((this.channel = e),
        (this.event = t),
        (this.payload =
          n ||
          function () {
            return {};
          }),
        (this.receivedResp = null),
        (this.timeout = r),
        (this.timeoutTimer = null),
        (this.recHooks = []),
        (this.sent = !1),
        (this.ref = void 0));
    }
    resend(e) {
      ((this.timeout = e), this.reset(), this.send());
    }
    send() {
      this.hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload(),
          ref: this.ref,
          join_ref: this.channel.joinRef(),
        }));
    }
    receive(e, t) {
      return (
        this.hasReceived(e) && t(this.receivedResp.response),
        this.recHooks.push({ status: e, callback: t }),
        this
      );
    }
    reset() {
      (this.cancelRefEvent(),
        (this.ref = null),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1));
    }
    destroy() {
      (this.cancelRefEvent(), this.cancelTimeout());
    }
    matchReceive({ status: e, response: t, _ref: n }) {
      this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(t));
    }
    cancelRefEvent() {
      this.refEvent && this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    startTimeout() {
      (this.timeoutTimer && this.cancelTimeout(),
        (this.ref = this.channel.socket.makeRef()),
        (this.refEvent = this.channel.replyEventName(this.ref)),
        this.channel.on(this.refEvent, (e) => {
          (this.cancelRefEvent(),
            this.cancelTimeout(),
            (this.receivedResp = e),
            this.matchReceive(e));
        }),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout)));
    }
    hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
    trigger(e, t) {
      this.channel.trigger(this.refEvent, { status: e, response: t });
    }
  },
  Rb = class {
    constructor(e, t) {
      ((this.callback = e),
        (this.timerCalc = t),
        (this.timer = void 0),
        (this.tries = 0));
    }
    reset() {
      ((this.tries = 0), clearTimeout(this.timer));
    }
    scheduleTimeout() {
      (clearTimeout(this.timer),
        (this.timer = setTimeout(
          () => {
            ((this.tries = this.tries + 1), this.callback());
          },
          this.timerCalc(this.tries + 1),
        )));
    }
  },
  aA = class {
    constructor(e, t, n) {
      ((this.state = dt.closed),
        (this.topic = e),
        (this.params = fo(t || {})),
        (this.socket = n),
        (this.bindings = []),
        (this.bindingRef = 0),
        (this.timeout = this.socket.timeout),
        (this.joinedOnce = !1),
        (this.joinPush = new Ha(this, On.join, this.params, this.timeout)),
        (this.pushBuffer = []),
        (this.stateChangeRefs = []),
        (this.rejoinTimer = new Rb(() => {
          this.socket.isConnected() && this.rejoin();
        }, this.socket.rejoinAfterMs)),
        this.stateChangeRefs.push(
          this.socket.onError(() => this.rejoinTimer.reset()),
        ),
        this.stateChangeRefs.push(
          this.socket.onOpen(() => {
            (this.rejoinTimer.reset(), this.isErrored() && this.rejoin());
          }),
        ),
        this.joinPush.receive("ok", () => {
          ((this.state = dt.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((r) => r.send()),
            (this.pushBuffer = []));
        }),
        this.joinPush.receive("error", (r) => {
          ((this.state = dt.errored),
            this.socket.hasLogger() &&
              this.socket.log("channel", `error ${this.topic}`, r),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.onClose(() => {
          (this.rejoinTimer.reset(),
            this.socket.hasLogger() &&
              this.socket.log("channel", `close ${this.topic}`),
            (this.state = dt.closed),
            this.socket.remove(this));
        }),
        this.onError((r) => {
          (this.socket.hasLogger() &&
            this.socket.log("channel", `error ${this.topic}`, r),
            this.isJoining() && this.joinPush.reset(),
            (this.state = dt.errored),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive("timeout", () => {
          (this.socket.hasLogger() &&
            this.socket.log(
              "channel",
              `timeout ${this.topic}`,
              this.joinPush.timeout,
            ),
            new Ha(this, On.leave, fo({}), this.timeout).send(),
            (this.state = dt.errored),
            this.joinPush.reset(),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.on(On.reply, (r, s) => {
          this.trigger(this.replyEventName(s), r);
        }));
    }
    join(e = this.timeout) {
      if (this.joinedOnce)
        throw new Error(
          "tried to join multiple times. 'join' can only be called a single time per channel instance",
        );
      return (
        (this.timeout = e),
        (this.joinedOnce = !0),
        this.rejoin(),
        this.joinPush
      );
    }
    teardown() {
      (this.pushBuffer.forEach((e) => e.destroy()),
        (this.pushBuffer = []),
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        (this.state = dt.closed),
        (this.bindings = []));
    }
    onClose(e) {
      this.on(On.close, e);
    }
    onError(e) {
      return this.on(On.error, (t) => e(t));
    }
    on(e, t) {
      let n = this.bindingRef++;
      return (this.bindings.push({ event: e, ref: n, callback: t }), n);
    }
    off(e, t) {
      this.bindings = this.bindings.filter(
        (n) => !(n.event === e && (typeof t > "u" || t === n.ref)),
      );
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(e, t, n = this.timeout) {
      if (((t = t || {}), !this.joinedOnce))
        throw new Error(
          `tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`,
        );
      let r = new Ha(
        this,
        e,
        function () {
          return t;
        },
        n,
      );
      return (
        this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)),
        r
      );
    }
    leave(e = this.timeout) {
      (this.rejoinTimer.reset(),
        this.joinPush.cancelTimeout(),
        (this.state = dt.leaving));
      let t = () => {
          (this.socket.hasLogger() &&
            this.socket.log("channel", `leave ${this.topic}`),
            this.trigger(On.close, "leave"));
        },
        n = new Ha(this, On.leave, fo({}), e);
      return (
        n.receive("ok", () => t()).receive("timeout", () => t()),
        n.send(),
        this.canPush() || n.trigger("ok", {}),
        n
      );
    }
    onMessage(e, t, n) {
      return t;
    }
    filterBindings(e, t, n) {
      return !0;
    }
    isMember(e, t, n, r) {
      return this.topic !== e
        ? !1
        : r && r !== this.joinRef()
          ? (this.socket.hasLogger() &&
              this.socket.log("channel", "dropping outdated message", {
                topic: e,
                event: t,
                payload: n,
                joinRef: r,
              }),
            !1)
          : !0;
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(e = this.timeout) {
      this.isLeaving() ||
        (this.socket.leaveOpenTopic(this.topic),
        (this.state = dt.joining),
        this.joinPush.resend(e));
    }
    trigger(e, t, n, r) {
      let s = this.onMessage(e, t, n, r);
      if (t && !s)
        throw new Error(
          "channel onMessage callbacks must return the payload, modified or unmodified",
        );
      let i = this.bindings.filter(
        (o) => o.event === e && this.filterBindings(o, t, n),
      );
      for (let o = 0; o < i.length; o++)
        i[o].callback(s, n, r || this.joinRef());
    }
    replyEventName(e) {
      return `chan_reply_${e}`;
    }
    isClosed() {
      return this.state === dt.closed;
    }
    isErrored() {
      return this.state === dt.errored;
    }
    isJoined() {
      return this.state === dt.joined;
    }
    isJoining() {
      return this.state === dt.joining;
    }
    isLeaving() {
      return this.state === dt.leaving;
    }
  },
  Wl = class {
    static request(e, t, n, r, s, i, o) {
      if (mn.XDomainRequest) {
        let a = new mn.XDomainRequest();
        return this.xdomainRequest(a, e, t, r, s, i, o);
      } else if (mn.XMLHttpRequest) {
        let a = new mn.XMLHttpRequest();
        return this.xhrRequest(a, e, t, n, r, s, i, o);
      } else {
        if (mn.fetch && mn.AbortController)
          return this.fetchRequest(e, t, n, r, s, i, o);
        throw new Error("No suitable XMLHttpRequest implementation found");
      }
    }
    static fetchRequest(e, t, n, r, s, i, o) {
      let a = { method: e, headers: n, body: r },
        l = null;
      return (
        s &&
          ((l = new AbortController()),
          setTimeout(() => l.abort(), s),
          (a.signal = l.signal)),
        mn
          .fetch(t, a)
          .then((c) => c.text())
          .then((c) => this.parseJSON(c))
          .then((c) => o && o(c))
          .catch((c) => {
            c.name === "AbortError" && i ? i() : o && o(null);
          }),
        l
      );
    }
    static xdomainRequest(e, t, n, r, s, i, o) {
      return (
        (e.timeout = s),
        e.open(t, n),
        (e.onload = () => {
          let a = this.parseJSON(e.responseText);
          o && o(a);
        }),
        i && (e.ontimeout = i),
        (e.onprogress = () => {}),
        e.send(r),
        e
      );
    }
    static xhrRequest(e, t, n, r, s, i, o, a) {
      (e.open(t, n, !0), (e.timeout = i));
      for (let [l, c] of Object.entries(r)) e.setRequestHeader(l, c);
      return (
        (e.onerror = () => a && a(null)),
        (e.onreadystatechange = () => {
          if (e.readyState === oA.complete && a) {
            let l = this.parseJSON(e.responseText);
            a(l);
          }
        }),
        o && (e.ontimeout = o),
        e.send(s),
        e
      );
    }
    static parseJSON(e) {
      if (!e || e === "") return null;
      try {
        return JSON.parse(e);
      } catch {
        return (
          console && console.log("failed to parse JSON response", e),
          null
        );
      }
    }
    static serialize(e, t) {
      let n = [];
      for (var r in e) {
        if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
        let s = t ? `${t}[${r}]` : r,
          i = e[r];
        typeof i == "object"
          ? n.push(this.serialize(i, s))
          : n.push(encodeURIComponent(s) + "=" + encodeURIComponent(i));
      }
      return n.join("&");
    }
    static appendParams(e, t) {
      if (Object.keys(t).length === 0) return e;
      let n = e.match(/\?/) ? "&" : "?";
      return `${e}${n}${this.serialize(t)}`;
    }
  },
  lA = (e) => {
    let t = "",
      n = new Uint8Array(e),
      r = n.byteLength;
    for (let s = 0; s < r; s++) t += String.fromCharCode(n[s]);
    return btoa(t);
  },
  ws = class {
    constructor(e, t) {
      (t &&
        t.length === 2 &&
        t[1].startsWith(Wd) &&
        (this.authToken = atob(t[1].slice(Wd.length))),
        (this.endPoint = null),
        (this.token = null),
        (this.skipHeartbeat = !0),
        (this.reqs = new Set()),
        (this.awaitingBatchAck = !1),
        (this.currentBatch = null),
        (this.currentBatchTimer = null),
        (this.batchBuffer = []),
        (this.onopen = function () {}),
        (this.onerror = function () {}),
        (this.onmessage = function () {}),
        (this.onclose = function () {}),
        (this.pollEndpoint = this.normalizeEndpoint(e)),
        (this.readyState = wn.connecting),
        setTimeout(() => this.poll(), 0));
    }
    normalizeEndpoint(e) {
      return e
        .replace("ws://", "http://")
        .replace("wss://", "https://")
        .replace(new RegExp("(.*)/" + Vd.websocket), "$1/" + Vd.longpoll);
    }
    endpointURL() {
      return Wl.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(e, t, n) {
      (this.close(e, t, n), (this.readyState = wn.connecting));
    }
    ontimeout() {
      (this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1));
    }
    isActive() {
      return this.readyState === wn.open || this.readyState === wn.connecting;
    }
    poll() {
      const e = { Accept: "application/json" };
      (this.authToken && (e["X-Phoenix-AuthToken"] = this.authToken),
        this.ajax(
          "GET",
          e,
          null,
          () => this.ontimeout(),
          (t) => {
            if (t) {
              var { status: n, token: r, messages: s } = t;
              if (n === 410 && this.token !== null) {
                (this.onerror(410),
                  this.closeAndRetry(3410, "session_gone", !1));
                return;
              }
              this.token = r;
            } else n = 0;
            switch (n) {
              case 200:
                (s.forEach((i) => {
                  setTimeout(() => this.onmessage({ data: i }), 0);
                }),
                  this.poll());
                break;
              case 204:
                this.poll();
                break;
              case 410:
                ((this.readyState = wn.open), this.onopen({}), this.poll());
                break;
              case 403:
                (this.onerror(403), this.close(1008, "forbidden", !1));
                break;
              case 0:
              case 500:
                (this.onerror(500),
                  this.closeAndRetry(1011, "internal server error", 500));
                break;
              default:
                throw new Error(`unhandled poll status ${n}`);
            }
          },
        ));
    }
    send(e) {
      (typeof e != "string" && (e = lA(e)),
        this.currentBatch
          ? this.currentBatch.push(e)
          : this.awaitingBatchAck
            ? this.batchBuffer.push(e)
            : ((this.currentBatch = [e]),
              (this.currentBatchTimer = setTimeout(() => {
                (this.batchSend(this.currentBatch), (this.currentBatch = null));
              }, 0))));
    }
    batchSend(e) {
      ((this.awaitingBatchAck = !0),
        this.ajax(
          "POST",
          { "Content-Type": "application/x-ndjson" },
          e.join(`
`),
          () => this.onerror("timeout"),
          (t) => {
            ((this.awaitingBatchAck = !1),
              !t || t.status !== 200
                ? (this.onerror(t && t.status),
                  this.closeAndRetry(1011, "internal server error", !1))
                : this.batchBuffer.length > 0 &&
                  (this.batchSend(this.batchBuffer), (this.batchBuffer = [])));
          },
        ));
    }
    close(e, t, n) {
      for (let s of this.reqs) s.abort();
      this.readyState = wn.closed;
      let r = Object.assign(
        { code: 1e3, reason: void 0, wasClean: !0 },
        { code: e, reason: t, wasClean: n },
      );
      ((this.batchBuffer = []),
        clearTimeout(this.currentBatchTimer),
        (this.currentBatchTimer = null),
        typeof CloseEvent < "u"
          ? this.onclose(new CloseEvent("close", r))
          : this.onclose(r));
    }
    ajax(e, t, n, r, s) {
      let i,
        o = () => {
          (this.reqs.delete(i), r());
        };
      ((i = Wl.request(e, this.endpointURL(), t, n, this.timeout, o, (a) => {
        (this.reqs.delete(i), this.isActive() && s(a));
      })),
        this.reqs.add(i));
    }
  },
  cA = class Zi {
    constructor(t, n = {}) {
      let r = n.events || { state: "presence_state", diff: "presence_diff" };
      ((this.state = {}),
        (this.pendingDiffs = []),
        (this.channel = t),
        (this.joinRef = null),
        (this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {},
        }),
        this.channel.on(r.state, (s) => {
          let { onJoin: i, onLeave: o, onSync: a } = this.caller;
          ((this.joinRef = this.channel.joinRef()),
            (this.state = Zi.syncState(this.state, s, i, o)),
            this.pendingDiffs.forEach((l) => {
              this.state = Zi.syncDiff(this.state, l, i, o);
            }),
            (this.pendingDiffs = []),
            a());
        }),
        this.channel.on(r.diff, (s) => {
          let { onJoin: i, onLeave: o, onSync: a } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(s)
            : ((this.state = Zi.syncDiff(this.state, s, i, o)), a());
        }));
    }
    onJoin(t) {
      this.caller.onJoin = t;
    }
    onLeave(t) {
      this.caller.onLeave = t;
    }
    onSync(t) {
      this.caller.onSync = t;
    }
    list(t) {
      return Zi.list(this.state, t);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(t, n, r, s) {
      let i = this.clone(t),
        o = {},
        a = {};
      return (
        this.map(i, (l, c) => {
          n[l] || (a[l] = c);
        }),
        this.map(n, (l, c) => {
          let d = i[l];
          if (d) {
            let u = c.metas.map((g) => g.phx_ref),
              f = d.metas.map((g) => g.phx_ref),
              h = c.metas.filter((g) => f.indexOf(g.phx_ref) < 0),
              v = d.metas.filter((g) => u.indexOf(g.phx_ref) < 0);
            (h.length > 0 && ((o[l] = c), (o[l].metas = h)),
              v.length > 0 && ((a[l] = this.clone(d)), (a[l].metas = v)));
          } else o[l] = c;
        }),
        this.syncDiff(i, { joins: o, leaves: a }, r, s)
      );
    }
    static syncDiff(t, n, r, s) {
      let { joins: i, leaves: o } = this.clone(n);
      return (
        r || (r = function () {}),
        s || (s = function () {}),
        this.map(i, (a, l) => {
          let c = t[a];
          if (((t[a] = this.clone(l)), c)) {
            let d = t[a].metas.map((f) => f.phx_ref),
              u = c.metas.filter((f) => d.indexOf(f.phx_ref) < 0);
            t[a].metas.unshift(...u);
          }
          r(a, c, l);
        }),
        this.map(o, (a, l) => {
          let c = t[a];
          if (!c) return;
          let d = l.metas.map((u) => u.phx_ref);
          ((c.metas = c.metas.filter((u) => d.indexOf(u.phx_ref) < 0)),
            s(a, c, l),
            c.metas.length === 0 && delete t[a]);
        }),
        t
      );
    }
    static list(t, n) {
      return (
        n ||
          (n = function (r, s) {
            return s;
          }),
        this.map(t, (r, s) => n(r, s))
      );
    }
    static map(t, n) {
      return Object.getOwnPropertyNames(t).map((r) => n(r, t[r]));
    }
    static clone(t) {
      return JSON.parse(JSON.stringify(t));
    }
  },
  Va = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(e, t) {
      if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
      {
        let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(n));
      }
    },
    decode(e, t) {
      if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
      {
        let [n, r, s, i, o] = JSON.parse(e);
        return t({ join_ref: n, ref: r, topic: s, event: i, payload: o });
      }
    },
    binaryEncode(e) {
      let { join_ref: t, ref: n, event: r, topic: s, payload: i } = e,
        o = this.META_LENGTH + t.length + n.length + s.length + r.length,
        a = new ArrayBuffer(this.HEADER_LENGTH + o),
        l = new DataView(a),
        c = 0;
      (l.setUint8(c++, this.KINDS.push),
        l.setUint8(c++, t.length),
        l.setUint8(c++, n.length),
        l.setUint8(c++, s.length),
        l.setUint8(c++, r.length),
        Array.from(t, (u) => l.setUint8(c++, u.charCodeAt(0))),
        Array.from(n, (u) => l.setUint8(c++, u.charCodeAt(0))),
        Array.from(s, (u) => l.setUint8(c++, u.charCodeAt(0))),
        Array.from(r, (u) => l.setUint8(c++, u.charCodeAt(0))));
      var d = new Uint8Array(a.byteLength + i.byteLength);
      return (
        d.set(new Uint8Array(a), 0),
        d.set(new Uint8Array(i), a.byteLength),
        d.buffer
      );
    },
    binaryDecode(e) {
      let t = new DataView(e),
        n = t.getUint8(0),
        r = new TextDecoder();
      switch (n) {
        case this.KINDS.push:
          return this.decodePush(e, t, r);
        case this.KINDS.reply:
          return this.decodeReply(e, t, r);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(e, t, r);
      }
    },
    decodePush(e, t, n) {
      let r = t.getUint8(1),
        s = t.getUint8(2),
        i = t.getUint8(3),
        o = this.HEADER_LENGTH + this.META_LENGTH - 1,
        a = n.decode(e.slice(o, o + r));
      o = o + r;
      let l = n.decode(e.slice(o, o + s));
      o = o + s;
      let c = n.decode(e.slice(o, o + i));
      o = o + i;
      let d = e.slice(o, e.byteLength);
      return { join_ref: a, ref: null, topic: l, event: c, payload: d };
    },
    decodeReply(e, t, n) {
      let r = t.getUint8(1),
        s = t.getUint8(2),
        i = t.getUint8(3),
        o = t.getUint8(4),
        a = this.HEADER_LENGTH + this.META_LENGTH,
        l = n.decode(e.slice(a, a + r));
      a = a + r;
      let c = n.decode(e.slice(a, a + s));
      a = a + s;
      let d = n.decode(e.slice(a, a + i));
      a = a + i;
      let u = n.decode(e.slice(a, a + o));
      a = a + o;
      let f = e.slice(a, e.byteLength),
        h = { status: u, response: f };
      return { join_ref: l, ref: c, topic: d, event: On.reply, payload: h };
    },
    decodeBroadcast(e, t, n) {
      let r = t.getUint8(1),
        s = t.getUint8(2),
        i = this.HEADER_LENGTH + 2,
        o = n.decode(e.slice(i, i + r));
      i = i + r;
      let a = n.decode(e.slice(i, i + s));
      i = i + s;
      let l = e.slice(i, e.byteLength);
      return { join_ref: null, ref: null, topic: o, event: a, payload: l };
    },
  },
  uA = class {
    constructor(e, t = {}) {
      ((this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
        (this.channels = []),
        (this.sendBuffer = []),
        (this.ref = 0),
        (this.fallbackRef = null),
        (this.timeout = t.timeout || sA),
        (this.transport = t.transport || mn.WebSocket || ws),
        (this.conn = void 0),
        (this.primaryPassedHealthCheck = !1),
        (this.longPollFallbackMs = t.longPollFallbackMs),
        (this.fallbackTimer = null),
        (this.sessionStore = t.sessionStorage || (mn && mn.sessionStorage)),
        (this.establishedConnections = 0),
        (this.defaultEncoder = Va.encode.bind(Va)),
        (this.defaultDecoder = Va.decode.bind(Va)),
        (this.closeWasClean = !0),
        (this.disconnecting = !1),
        (this.binaryType = t.binaryType || "arraybuffer"),
        (this.connectClock = 1),
        (this.pageHidden = !1),
        (this.encode = void 0),
        (this.decode = void 0),
        this.transport !== ws
          ? ((this.encode = t.encode || this.defaultEncoder),
            (this.decode = t.decode || this.defaultDecoder))
          : ((this.encode = this.defaultEncoder),
            (this.decode = this.defaultDecoder)));
      let n = null;
      (Cs &&
        Cs.addEventListener &&
        (Cs.addEventListener("pagehide", (r) => {
          this.conn && (this.disconnect(), (n = this.connectClock));
        }),
        Cs.addEventListener("pageshow", (r) => {
          n === this.connectClock && ((n = null), this.connect());
        }),
        Cs.addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden"
            ? (this.pageHidden = !0)
            : ((this.pageHidden = !1),
              !this.isConnected() &&
                !this.closeWasClean &&
                this.teardown(() => this.connect()));
        })),
        (this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4),
        (this.autoSendHeartbeat = t.autoSendHeartbeat ?? !0),
        (this.heartbeatCallback = t.heartbeatCallback ?? (() => {})),
        (this.rejoinAfterMs = (r) =>
          t.rejoinAfterMs ? t.rejoinAfterMs(r) : [1e3, 2e3, 5e3][r - 1] || 1e4),
        (this.reconnectAfterMs = (r) =>
          t.reconnectAfterMs
            ? t.reconnectAfterMs(r)
            : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][r - 1] || 5e3),
        (this.logger = t.logger || null),
        !this.logger &&
          t.debug &&
          (this.logger = (r, s, i) => {
            console.log(`${r}: ${s}`, i);
          }),
        (this.longpollerTimeout = t.longpollerTimeout || 2e4),
        (this.params = fo(t.params || {})),
        (this.endPoint = `${e}/${Vd.websocket}`),
        (this.vsn = t.vsn || rA),
        (this.heartbeatTimeoutTimer = null),
        (this.heartbeatTimer = null),
        (this.heartbeatSentAt = null),
        (this.pendingHeartbeatRef = null),
        (this.reconnectTimer = new Rb(() => {
          if (this.pageHidden) {
            (this.log("Not reconnecting as page is hidden!"), this.teardown());
            return;
          }
          this.teardown(async () => {
            (t.beforeReconnect && (await t.beforeReconnect()), this.connect());
          });
        }, this.reconnectAfterMs)),
        (this.authToken = t.authToken));
    }
    getLongPollTransport() {
      return ws;
    }
    replaceTransport(e) {
      (this.connectClock++,
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.conn && (this.conn.close(), (this.conn = null)),
        (this.transport = e));
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let e = Wl.appendParams(Wl.appendParams(this.endPoint, this.params()), {
        vsn: this.vsn,
      });
      return e.charAt(0) !== "/"
        ? e
        : e.charAt(1) === "/"
          ? `${this.protocol()}:${e}`
          : `${this.protocol()}://${location.host}${e}`;
    }
    disconnect(e, t, n) {
      (this.connectClock++,
        (this.disconnecting = !0),
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.teardown(
          () => {
            ((this.disconnecting = !1), e && e());
          },
          t,
          n,
        ));
    }
    connect(e) {
      (e &&
        (console &&
          console.log(
            "passing params to connect is deprecated. Instead pass :params to the Socket constructor",
          ),
        (this.params = fo(e))),
        !(this.conn && !this.disconnecting) &&
          (this.longPollFallbackMs && this.transport !== ws
            ? this.connectWithFallback(ws, this.longPollFallbackMs)
            : this.transportConnect()));
    }
    log(e, t, n) {
      this.logger && this.logger(e, t, n);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.open.push([t, e]), t);
    }
    onClose(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.close.push([t, e]), t);
    }
    onError(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.error.push([t, e]), t);
    }
    onMessage(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.message.push([t, e]), t);
    }
    onHeartbeat(e) {
      this.heartbeatCallback = e;
    }
    ping(e) {
      if (!this.isConnected()) return !1;
      let t = this.makeRef(),
        n = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: t });
      let r = this.onMessage((s) => {
        s.ref === t && (this.off([r]), e(Date.now() - n));
      });
      return !0;
    }
    transportName(e) {
      switch (e) {
        case ws:
          return "LongPoll";
        default:
          return e.name;
      }
    }
    transportConnect() {
      (this.connectClock++, (this.closeWasClean = !1));
      let e;
      (this.authToken &&
        (e = ["phoenix", `${Wd}${btoa(this.authToken).replace(/=/g, "")}`]),
        (this.conn = new this.transport(this.endPointURL(), e)),
        (this.conn.binaryType = this.binaryType),
        (this.conn.timeout = this.longpollerTimeout),
        (this.conn.onopen = () => this.onConnOpen()),
        (this.conn.onerror = (t) => this.onConnError(t)),
        (this.conn.onmessage = (t) => this.onConnMessage(t)),
        (this.conn.onclose = (t) => this.onConnClose(t)));
    }
    getSession(e) {
      return this.sessionStore && this.sessionStore.getItem(e);
    }
    storeSession(e, t) {
      this.sessionStore && this.sessionStore.setItem(e, t);
    }
    connectWithFallback(e, t = 2500) {
      clearTimeout(this.fallbackTimer);
      let n = !1,
        r = !0,
        s,
        i,
        o = this.transportName(e),
        a = (l) => {
          (this.log("transport", `falling back to ${o}...`, l),
            this.off([s, i]),
            (r = !1),
            this.replaceTransport(e),
            this.transportConnect());
        };
      if (this.getSession(`phx:fallback:${o}`)) return a("memorized");
      ((this.fallbackTimer = setTimeout(a, t)),
        (i = this.onError((l) => {
          (this.log("transport", "error", l),
            r && !n && (clearTimeout(this.fallbackTimer), a(l)));
        })),
        this.fallbackRef && this.off([this.fallbackRef]),
        (this.fallbackRef = this.onOpen(() => {
          if (((n = !0), !r)) {
            let l = this.transportName(e);
            return (
              this.primaryPassedHealthCheck ||
                this.storeSession(`phx:fallback:${l}`, "true"),
              this.log("transport", `established ${l} fallback`)
            );
          }
          (clearTimeout(this.fallbackTimer),
            (this.fallbackTimer = setTimeout(a, t)),
            this.ping((l) => {
              (this.log("transport", "connected to primary after", l),
                (this.primaryPassedHealthCheck = !0),
                clearTimeout(this.fallbackTimer));
            }));
        })),
        this.transportConnect());
    }
    clearHeartbeats() {
      (clearTimeout(this.heartbeatTimer),
        clearTimeout(this.heartbeatTimeoutTimer));
    }
    onConnOpen() {
      (this.hasLogger() &&
        this.log("transport", `connected to ${this.endPointURL()}`),
        (this.closeWasClean = !1),
        (this.disconnecting = !1),
        this.establishedConnections++,
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.autoSendHeartbeat && this.resetHeartbeat(),
        this.triggerStateCallbacks("open"));
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        ((this.pendingHeartbeatRef = null),
          (this.heartbeatSentAt = null),
          this.hasLogger() &&
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection",
            ));
        try {
          this.heartbeatCallback("timeout");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        (this.triggerChanError(),
          (this.closeWasClean = !1),
          this.teardown(
            () => this.reconnectTimer.scheduleTimeout(),
            iA,
            "heartbeat timeout",
          ));
      }
    }
    resetHeartbeat() {
      (this.conn && this.conn.skipHeartbeat) ||
        ((this.pendingHeartbeatRef = null),
        this.clearHeartbeats(),
        (this.heartbeatTimer = setTimeout(
          () => this.sendHeartbeat(),
          this.heartbeatIntervalMs,
        )));
    }
    teardown(e, t, n) {
      if (!this.conn) return e && e();
      const r = this.conn;
      this.waitForBufferDone(r, () => {
        (t ? r.close(t, n || "") : r.close(),
          this.waitForSocketClosed(r, () => {
            (this.conn === r &&
              ((this.conn.onopen = function () {}),
              (this.conn.onerror = function () {}),
              (this.conn.onmessage = function () {}),
              (this.conn.onclose = function () {}),
              (this.conn = null)),
              e && e());
          }));
      });
    }
    waitForBufferDone(e, t, n = 1) {
      if (n === 5 || !e.bufferedAmount) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(e, t, n + 1);
      }, 150 * n);
    }
    waitForSocketClosed(e, t, n = 1) {
      if (n === 5 || e.readyState === wn.closed) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(e, t, n + 1);
      }, 150 * n);
    }
    onConnClose(e) {
      (this.conn && (this.conn.onclose = () => {}),
        this.hasLogger() && this.log("transport", "close", e),
        this.triggerChanError(),
        this.clearHeartbeats(),
        this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
        this.triggerStateCallbacks("close", e));
    }
    onConnError(e) {
      this.hasLogger() && this.log("transport", e);
      let t = this.transport,
        n = this.establishedConnections;
      (this.triggerStateCallbacks("error", e, t, n),
        (t === this.transport || n > 0) && this.triggerChanError());
    }
    triggerChanError() {
      this.channels.forEach((e) => {
        e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(On.error);
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case wn.connecting:
          return "connecting";
        case wn.open:
          return "open";
        case wn.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(e) {
      (this.off(e.stateChangeRefs),
        (this.channels = this.channels.filter((t) => t !== e)));
    }
    off(e) {
      for (let t in this.stateChangeCallbacks)
        this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(
          ([n]) => e.indexOf(n) === -1,
        );
    }
    channel(e, t = {}) {
      let n = new aA(e, t, this);
      return (this.channels.push(n), n);
    }
    push(e) {
      if (this.hasLogger()) {
        let { topic: t, event: n, payload: r, ref: s, join_ref: i } = e;
        this.log("push", `${t} ${n} (${i}, ${s})`, r);
      }
      this.isConnected()
        ? this.encode(e, (t) => this.conn.send(t))
        : this.sendBuffer.push(() => this.encode(e, (t) => this.conn.send(t)));
    }
    makeRef() {
      let e = this.ref + 1;
      return (
        e === this.ref ? (this.ref = 0) : (this.ref = e),
        this.ref.toString()
      );
    }
    sendHeartbeat() {
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback("disconnected");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.heartbeatTimeout();
        return;
      }
      ((this.pendingHeartbeatRef = this.makeRef()),
        (this.heartbeatSentAt = Date.now()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }));
      try {
        this.heartbeatCallback("sent");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      this.heartbeatTimeoutTimer = setTimeout(
        () => this.heartbeatTimeout(),
        this.heartbeatIntervalMs,
      );
    }
    flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    onConnMessage(e) {
      this.decode(e.data, (t) => {
        let { topic: n, event: r, payload: s, ref: i, join_ref: o } = t;
        if (i && i === this.pendingHeartbeatRef) {
          const a = this.heartbeatSentAt
            ? Date.now() - this.heartbeatSentAt
            : void 0;
          this.clearHeartbeats();
          try {
            this.heartbeatCallback(s.status === "ok" ? "ok" : "error", a);
          } catch (l) {
            this.log("error", "error in heartbeat callback", l);
          }
          ((this.pendingHeartbeatRef = null),
            (this.heartbeatSentAt = null),
            this.autoSendHeartbeat &&
              (this.heartbeatTimer = setTimeout(
                () => this.sendHeartbeat(),
                this.heartbeatIntervalMs,
              )));
        }
        this.hasLogger() &&
          this.log(
            "receive",
            `${s.status || ""} ${n} ${r} ${(i && "(" + i + ")") || ""}`.trim(),
            s,
          );
        for (let a = 0; a < this.channels.length; a++) {
          const l = this.channels[a];
          l.isMember(n, r, s, o) && l.trigger(r, s, i, o);
        }
        this.triggerStateCallbacks("message", t);
      });
    }
    triggerStateCallbacks(e, ...t) {
      try {
        this.stateChangeCallbacks[e].forEach(([n, r]) => {
          try {
            r(...t);
          } catch (s) {
            this.log("error", `error in ${e} callback`, s);
          }
        });
      } catch (n) {
        this.log("error", `error triggering ${e} callbacks`, n);
      }
    }
    leaveOpenTopic(e) {
      let t = this.channels.find(
        (n) => n.topic === e && (n.isJoined() || n.isJoining()),
      );
      t &&
        (this.hasLogger() &&
          this.log("transport", `leaving duplicate topic "${e}"`),
        t.leave());
    }
  };
class po {
  constructor(t, n) {
    const r = hA(n);
    ((this.presence = new cA(t.getChannel(), r)),
      this.presence.onJoin((s, i, o) => {
        const a = po.onJoinPayload(s, i, o);
        t.getChannel().trigger("presence", a);
      }),
      this.presence.onLeave((s, i, o) => {
        const a = po.onLeavePayload(s, i, o);
        t.getChannel().trigger("presence", a);
      }),
      this.presence.onSync(() => {
        t.getChannel().trigger("presence", { event: "sync" });
      }));
  }
  get state() {
    return po.transformState(this.presence.state);
  }
  static transformState(t) {
    return (
      (t = dA(t)),
      Object.getOwnPropertyNames(t).reduce((n, r) => {
        const s = t[r];
        return ((n[r] = dl(s)), n);
      }, {})
    );
  }
  static onJoinPayload(t, n, r) {
    const s = Km(n),
      i = dl(r);
    return { event: "join", key: t, currentPresences: s, newPresences: i };
  }
  static onLeavePayload(t, n, r) {
    const s = Km(n),
      i = dl(r);
    return { event: "leave", key: t, currentPresences: s, leftPresences: i };
  }
}
function dl(e) {
  return e.metas.map(
    (t) => (
      (t.presence_ref = t.phx_ref),
      delete t.phx_ref,
      delete t.phx_ref_prev,
      t
    ),
  );
}
function dA(e) {
  return JSON.parse(JSON.stringify(e));
}
function hA(e) {
  return (e == null ? void 0 : e.events) && { events: e.events };
}
function Km(e) {
  return e != null && e.metas ? dl(e) : [];
}
var Gm;
(function (e) {
  ((e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave"));
})(Gm || (Gm = {}));
class fA {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(t, n) {
    ((this.channel = t),
      (this.presenceAdapter = new po(this.channel.channelAdapter, n)));
  }
}
class pA {
  constructor(t, n, r) {
    const s = mA(r);
    ((this.channel = t.getSocket().channel(n, s)), (this.socket = t));
  }
  get state() {
    return this.channel.state;
  }
  set state(t) {
    this.channel.state = t;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(t, n) {
    return this.channel.on(t, n);
  }
  off(t, n) {
    this.channel.off(t, n);
  }
  subscribe(t) {
    return this.channel.join(t);
  }
  unsubscribe(t) {
    return this.channel.leave(t);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(t) {
    this.channel.onClose(t);
  }
  onError(t) {
    return this.channel.onError(t);
  }
  push(t, n, r) {
    let s;
    try {
      s = this.channel.push(t, n, r);
    } catch {
      throw `tried to push '${t}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`;
    }
    if (this.channel.pushBuffer.length > GP) {
      const i = this.channel.pushBuffer.shift();
      (i.cancelTimeout(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${i.event}`,
          i.payload(),
        ));
    }
    return s;
  }
  updateJoinPayload(t) {
    const n = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () =>
      Object.assign(Object.assign({}, n), t);
  }
  canPush() {
    return this.socket.isConnected() && this.state === or.joined;
  }
  isJoined() {
    return this.state === or.joined;
  }
  isJoining() {
    return this.state === or.joining;
  }
  isClosed() {
    return this.state === or.closed;
  }
  isLeaving() {
    return this.state === or.leaving;
  }
  updateFilterBindings(t) {
    this.channel.filterBindings = t;
  }
  updatePayloadTransform(t) {
    this.channel.onMessage = t;
  }
  getChannel() {
    return this.channel;
  }
}
function mA(e) {
  return {
    config: Object.assign(
      {
        broadcast: { ack: !1, self: !1 },
        presence: { key: "", enabled: !1 },
        private: !1,
      },
      e.config,
    ),
  };
}
var Qm;
(function (e) {
  ((e.ALL = "*"),
    (e.INSERT = "INSERT"),
    (e.UPDATE = "UPDATE"),
    (e.DELETE = "DELETE"));
})(Qm || (Qm = {}));
var Bs;
(function (e) {
  ((e.BROADCAST = "broadcast"),
    (e.PRESENCE = "presence"),
    (e.POSTGRES_CHANGES = "postgres_changes"),
    (e.SYSTEM = "system"));
})(Bs || (Bs = {}));
var jn;
(function (e) {
  ((e.SUBSCRIBED = "SUBSCRIBED"),
    (e.TIMED_OUT = "TIMED_OUT"),
    (e.CLOSED = "CLOSED"),
    (e.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(jn || (jn = {}));
class mo {
  get state() {
    return this.channelAdapter.state;
  }
  set state(t) {
    this.channelAdapter.state = t;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  constructor(t, n = { config: {} }, r) {
    var s, i;
    if (
      ((this.topic = t),
      (this.params = n),
      (this.socket = r),
      (this.bindings = {}),
      (this.subTopic = t.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        n.config,
      )),
      (this.channelAdapter = new pA(this.socket.socketAdapter, t, this.params)),
      (this.presence = new fA(this)),
      this._onClose(() => {
        this.socket._remove(this);
      }),
      this._updateFilterTransform(),
      (this.broadcastEndpointURL = Cb(this.socket.socketAdapter.endPointURL())),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (i =
            (s = this.params.config) === null || s === void 0
              ? void 0
              : s.broadcast) === null || i === void 0
        ) &&
        i.replay)
    )
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  subscribe(t, n = this.timeout) {
    var r, s, i;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.channelAdapter.isClosed())
    ) {
      const {
          config: { broadcast: o, presence: a, private: l },
        } = this.params,
        c =
          (s =
            (r = this.bindings.postgres_changes) === null || r === void 0
              ? void 0
              : r.map((h) => h.filter)) !== null && s !== void 0
            ? s
            : [],
        d =
          (!!this.bindings[Bs.PRESENCE] &&
            this.bindings[Bs.PRESENCE].length > 0) ||
          ((i = this.params.config.presence) === null || i === void 0
            ? void 0
            : i.enabled) === !0,
        u = {},
        f = {
          broadcast: o,
          presence: Object.assign(Object.assign({}, a), { enabled: d }),
          postgres_changes: c,
          private: l,
        };
      (this.socket.accessTokenValue &&
        (u.access_token = this.socket.accessTokenValue),
        this._onError((h) => {
          t == null || t(jn.CHANNEL_ERROR, h);
        }),
        this._onClose(() => (t == null ? void 0 : t(jn.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: f }, u)),
        this._updateFilterMessage(),
        this.channelAdapter
          .subscribe(n)
          .receive("ok", async ({ postgres_changes: h }) => {
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              h === void 0)
            ) {
              t == null || t(jn.SUBSCRIBED);
              return;
            }
            this._updatePostgresBindings(h, t);
          })
          .receive("error", (h) => {
            ((this.state = or.errored),
              t == null ||
                t(
                  jn.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(h).join(", ") || "error"),
                  ),
                ));
          })
          .receive("timeout", () => {
            t == null || t(jn.TIMED_OUT);
          }));
    }
    return this;
  }
  _updatePostgresBindings(t, n) {
    var r;
    const s = this.bindings.postgres_changes,
      i = (r = s == null ? void 0 : s.length) !== null && r !== void 0 ? r : 0,
      o = [];
    for (let a = 0; a < i; a++) {
      const l = s[a],
        {
          filter: { event: c, schema: d, table: u, filter: f },
        } = l,
        h = t && t[a];
      if (
        h &&
        h.event === c &&
        mo.isFilterValueEqual(h.schema, d) &&
        mo.isFilterValueEqual(h.table, u) &&
        mo.isFilterValueEqual(h.filter, f)
      )
        o.push(Object.assign(Object.assign({}, l), { id: h.id }));
      else {
        (this.unsubscribe(),
          (this.state = or.errored),
          n == null ||
            n(
              jn.CHANNEL_ERROR,
              new Error(
                "mismatch between server and client bindings for postgres changes",
              ),
            ));
        return;
      }
    }
    ((this.bindings.postgres_changes = o),
      this.state != or.errored && n && n(jn.SUBSCRIBED));
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, n = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: t },
      n.timeout || this.timeout,
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: "presence", event: "untrack" }, t);
  }
  on(t, n, r) {
    const s = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
      i = t === Bs.PRESENCE || t === Bs.POSTGRES_CHANGES;
    if (s && i)
      throw (
        this.socket.log(
          "channel",
          `cannot add \`${t}\` callbacks for ${this.topic} after \`subscribe()\`.`,
        ),
        new Error(
          `cannot add \`${t}\` callbacks for ${this.topic} after \`subscribe()\`.`,
        )
      );
    return this._on(t, n, r);
  }
  async httpSend(t, n, r = {}) {
    var s;
    if (n == null) return Promise.reject("Payload is required for httpSend()");
    const i = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
        method: "POST",
        headers: i,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: t,
              payload: n,
              private: this.private,
            },
          ],
        }),
      },
      a = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        o,
        (s = r.timeout) !== null && s !== void 0 ? s : this.timeout,
      );
    if (a.status === 202) return { success: !0 };
    let l = a.statusText;
    try {
      const c = await a.json();
      l = c.error || c.message || l;
    } catch {}
    return Promise.reject(new Error(l));
  }
  async send(t, n = {}) {
    var r, s;
    if (!this.channelAdapter.canPush() && t.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.",
      );
      const { event: i, payload: o } = t,
        a = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: a,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: o,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const c = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          l,
          (r = n.timeout) !== null && r !== void 0 ? r : this.timeout,
        );
        return (
          await ((s = c.body) === null || s === void 0 ? void 0 : s.cancel()),
          c.ok ? "ok" : "error"
        );
      } catch (c) {
        return c.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var o, a, l;
        const c = this.channelAdapter.push(
          t.type,
          t,
          n.timeout || this.timeout,
        );
        (t.type === "broadcast" &&
          !(
            !(
              (l =
                (a =
                  (o = this.params) === null || o === void 0
                    ? void 0
                    : o.config) === null || a === void 0
                  ? void 0
                  : a.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          i("ok"),
          c.receive("ok", () => i("ok")),
          c.receive("error", () => i("error")),
          c.receive("timeout", () => i("timed out")));
      });
  }
  updateJoinPayload(t) {
    this.channelAdapter.updateJoinPayload(t);
  }
  async unsubscribe(t = this.timeout) {
    return new Promise((n) => {
      this.channelAdapter
        .unsubscribe(t)
        .receive("ok", () => n("ok"))
        .receive("timeout", () => n("timed out"))
        .receive("error", () => n("error"));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(t, n, r) {
    const s = new AbortController(),
      i = setTimeout(() => s.abort(), r),
      o = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, n), { signal: s.signal }),
      );
    return (clearTimeout(i), o);
  }
  _on(t, n, r) {
    const s = t.toLocaleLowerCase(),
      i = this.channelAdapter.on(t, r),
      o = { type: s, filter: n, callback: r, ref: i };
    return (
      this.bindings[s] ? this.bindings[s].push(o) : (this.bindings[s] = [o]),
      this._updateFilterMessage(),
      this
    );
  }
  _onClose(t) {
    this.channelAdapter.onClose(t);
  }
  _onError(t) {
    this.channelAdapter.onError(t);
  }
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((t, n, r) => {
      var s, i, o, a, l, c, d;
      const u = t.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(u, r)) return !1;
      const f =
        (s = this.bindings[u]) === null || s === void 0
          ? void 0
          : s.find((h) => h.ref === t.ref);
      if (!f) return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(u))
        if ("id" in f) {
          const h = f.id,
            v = (i = f.filter) === null || i === void 0 ? void 0 : i.event;
          return (
            h &&
            ((o = n.ids) === null || o === void 0 ? void 0 : o.includes(h)) &&
            (v === "*" ||
              (v == null ? void 0 : v.toLocaleLowerCase()) ===
                ((a = n.data) === null || a === void 0
                  ? void 0
                  : a.type.toLocaleLowerCase()))
          );
        } else {
          const h =
            (c =
              (l = f == null ? void 0 : f.filter) === null || l === void 0
                ? void 0
                : l.event) === null || c === void 0
              ? void 0
              : c.toLocaleLowerCase();
          return (
            h === "*" ||
            h ===
              ((d = n == null ? void 0 : n.event) === null || d === void 0
                ? void 0
                : d.toLocaleLowerCase())
          );
        }
      else return f.type.toLocaleLowerCase() === u;
    });
  }
  _notThisChannelEvent(t, n) {
    const { close: r, error: s, leave: i, join: o } = kb;
    return n && [r, s, i, o].includes(t) && n !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((t, n, r) => {
      if (typeof n == "object" && "ids" in n) {
        const s = n.data,
          { schema: i, table: o, commit_timestamp: a, type: l, errors: c } = s;
        return Object.assign(
          Object.assign(
            {},
            {
              schema: i,
              table: o,
              commit_timestamp: a,
              eventType: l,
              new: {},
              old: {},
              errors: c,
            },
          ),
          this._getPayloadRecords(s),
        );
      }
      return n;
    });
  }
  copyBindings(t) {
    if (this.joinedOnce)
      throw new Error("cannot copy bindings into joined channel");
    for (const n in t.bindings)
      for (const r of t.bindings[n]) this._on(r.type, r.filter, r.callback);
  }
  static isFilterValueEqual(t, n) {
    return (t ?? void 0) === (n ?? void 0);
  }
  _getPayloadRecords(t) {
    const n = { new: {}, old: {} };
    return (
      (t.type === "INSERT" || t.type === "UPDATE") &&
        (n.new = qm(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") &&
        (n.old = qm(t.columns, t.old_record)),
      n
    );
  }
}
class gA {
  constructor(t, n) {
    this.socket = new uA(t, n);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(t) {
    this.socket.heartbeatCallback = t;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(t, n, r, s = 1e4) {
    return new Promise((i) => {
      (setTimeout(() => i("timeout"), s),
        this.socket.disconnect(
          () => {
            (t(), i("ok"));
          },
          n,
          r,
        ));
    });
  }
  push(t) {
    this.socket.push(t);
  }
  log(t, n, r) {
    this.socket.log(t, n, r);
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(t) {
    this.socket.onOpen(t);
  }
  onClose(t) {
    this.socket.onClose(t);
  }
  onError(t) {
    this.socket.onError(t);
  }
  onMessage(t) {
    this.socket.onMessage(t);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == Bd.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == Bd.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  getSocket() {
    return this.socket;
  }
}
const vA = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  yA = [1e3, 2e3, 5e3, 1e4],
  wA = 1e4,
  bA = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class xA {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker
      ? this._workerHeartbeatTimer
      : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker
      ? this._pendingWorkerHeartbeatRef
      : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  constructor(t, n) {
    var r;
    if (
      ((this.channels = new Array()),
      (this.accessTokenValue = null),
      (this.accessToken = null),
      (this.apiKey = null),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.ref = 0),
      (this.serializer = new QP()),
      (this._manuallySetToken = !1),
      (this._authPromise = null),
      (this._workerHeartbeatTimer = void 0),
      (this._pendingWorkerHeartbeatRef = null),
      (this._resolveFetch = (i) =>
        i ? (...o) => i(...o) : (...o) => fetch(...o)),
      !(
        !((r = n == null ? void 0 : n.params) === null || r === void 0) &&
        r.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = n.params.apikey;
    const s = this._initializeOptions(n);
    ((this.socketAdapter = new gA(t, s)),
      (this.httpEndpoint = Cb(t)),
      (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch)));
  }
  connect() {
    if (
      !(this.isConnecting() || this.isDisconnecting() || this.isConnected())
    ) {
      (this.accessToken && !this._authPromise && this._setAuthSafely("connect"),
        this._setupConnectionHandlers());
      try {
        this.socketAdapter.connect();
      } catch (t) {
        const n = t.message;
        throw n.includes("Node.js")
          ? new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
          : new Error(`WebSocket not available: ${n}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(t, n) {
    return this.isDisconnecting()
      ? "ok"
      : await this.socketAdapter.disconnect(
          () => {
            (clearInterval(this._workerHeartbeatTimer),
              this._terminateWorker());
          },
          t,
          n,
        );
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const n = await t.unsubscribe();
    return (
      n === "ok" && t.teardown(),
      this.channels.length === 0 && this.disconnect(),
      n
    );
  }
  async removeAllChannels() {
    const t = this.channels.map(async (r) => {
        const s = await r.unsubscribe();
        return (r.teardown(), s);
      }),
      n = await Promise.all(t);
    return (this.disconnect(), n);
  }
  log(t, n, r) {
    this.socketAdapter.log(t, n, r);
  }
  connectionState() {
    return this.socketAdapter.connectionState() || Bd.closed;
  }
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  channel(t, n = { config: {} }) {
    const r = `realtime:${t}`,
      s = this.getChannels().find((i) => i.topic === r);
    if (s) return s;
    {
      const i = new mo(`realtime:${t}`, n, this);
      return (this.channels.push(i), i);
    }
  }
  push(t) {
    this.socketAdapter.push(t);
  }
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  onHeartbeat(t) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(t);
  }
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  _remove(t) {
    this.channels = this.channels.filter((n) => n.topic !== t.topic);
  }
  async _performAuth(t = null) {
    let n,
      r = !1;
    if (t) ((n = t), (r = !0));
    else if (this.accessToken)
      try {
        n = await this.accessToken();
      } catch (s) {
        (this.log("error", "Error fetching access token from callback", s),
          (n = this.accessTokenValue));
      }
    else n = this.accessTokenValue;
    (r
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != n &&
        ((this.accessTokenValue = n),
        this.channels.forEach((s) => {
          const i = { access_token: n, version: VP };
          (n && s.updateJoinPayload(i),
            s.joinedOnce &&
              s.channelAdapter.isJoined() &&
              s.channelAdapter.push(kb.access_token, { access_token: n }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(t = "general") {
    this._isManualToken() ||
      this.setAuth().catch((n) => {
        this.log("error", `Error setting auth in ${t}`, n);
      });
  }
  _setupConnectionHandlers() {
    (this.socketAdapter.onOpen(() => {
      ((
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      ).catch((n) => {
        this.log("error", "error waiting for auth on connect", n);
      }),
        this.worker && !this.workerRef && this._startWorkerHeartbeat());
    }),
      this.socketAdapter.onClose(() => {
        this.worker && this.workerRef && this._terminateWorker();
      }),
      this.socketAdapter.onMessage((t) => {
        t.ref &&
          t.ref === this._pendingWorkerHeartbeatRef &&
          (this._pendingWorkerHeartbeatRef = null);
      }));
  }
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() &&
      this.socketAdapter.getSocket().onConnOpen();
  }
  _wrapHeartbeatCallback(t) {
    return (n, r) => {
      (n == "sent" && this._setAuthSafely(), t && t(n, r));
    };
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    ((this.workerRef = new Worker(t)),
      (this.workerRef.onerror = (n) => {
        (this.log("worker", "worker error", n.message),
          this._terminateWorker(),
          this.disconnect());
      }),
      (this.workerRef.onmessage = (n) => {
        n.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      }));
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _workerObjectUrl(t) {
    let n;
    if (t) n = t;
    else {
      const r = new Blob([bA], { type: "application/javascript" });
      n = URL.createObjectURL(r);
    }
    return n;
  }
  _initializeOptions(t) {
    var n, r, s, i, o, a, l, c, d;
    ((this.worker =
      (n = t == null ? void 0 : t.worker) !== null && n !== void 0 ? n : !1),
      (this.accessToken =
        (r = t == null ? void 0 : t.accessToken) !== null && r !== void 0
          ? r
          : null));
    const u = {};
    ((u.timeout =
      (s = t == null ? void 0 : t.timeout) !== null && s !== void 0 ? s : KP),
      (u.heartbeatIntervalMs =
        (i = t == null ? void 0 : t.heartbeatIntervalMs) !== null &&
        i !== void 0
          ? i
          : vA.HEARTBEAT_INTERVAL),
      (u.transport =
        (o = t == null ? void 0 : t.transport) !== null && o !== void 0
          ? o
          : BP.getWebSocketConstructor()),
      (u.params = t == null ? void 0 : t.params),
      (u.logger = t == null ? void 0 : t.logger),
      (u.heartbeatCallback = this._wrapHeartbeatCallback(
        t == null ? void 0 : t.heartbeatCallback,
      )),
      (u.reconnectAfterMs =
        (a = t == null ? void 0 : t.reconnectAfterMs) !== null && a !== void 0
          ? a
          : (g) => yA[g - 1] || wA));
    let f, h;
    const v =
      (l = t == null ? void 0 : t.vsn) !== null && l !== void 0 ? l : qP;
    switch (v) {
      case WP:
        ((f = (g, w) => w(JSON.stringify(g))),
          (h = (g, w) => w(JSON.parse(g))));
        break;
      case Eb:
        ((f = this.serializer.encode.bind(this.serializer)),
          (h = this.serializer.decode.bind(this.serializer)));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${u.vsn}`);
    }
    if (
      ((u.vsn = v),
      (u.encode =
        (c = t == null ? void 0 : t.encode) !== null && c !== void 0 ? c : f),
      (u.decode =
        (d = t == null ? void 0 : t.decode) !== null && d !== void 0 ? d : h),
      (u.beforeReconnect = this._reconnectAuth.bind(this)),
      ((t != null && t.logLevel) || (t != null && t.log_level)) &&
        ((this.logLevel = t.logLevel || t.log_level),
        (u.params = Object.assign(Object.assign({}, u.params), {
          log_level: this.logLevel,
        }))),
      this.worker)
    ) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      ((this.workerUrl = t == null ? void 0 : t.workerUrl),
        (u.autoSendHeartbeat = !this.worker));
    }
    return u;
  }
  async _reconnectAuth() {
    (await this._waitForAuthIfNeeded(), this.isConnected() || this.connect());
  }
}
var Wo = class extends Error {
  constructor(e, t) {
    var n;
    (super(e),
      (this.name = "IcebergError"),
      (this.status = t.status),
      (this.icebergType = t.icebergType),
      (this.icebergCode = t.icebergCode),
      (this.details = t.details),
      (this.isCommitStateUnknown =
        t.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(t.status) &&
          ((n = t.icebergType) == null ? void 0 : n.includes("CommitState")) ===
            !0)));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function _A(e, t, n) {
  const r = new URL(t, e);
  if (n)
    for (const [s, i] of Object.entries(n))
      i !== void 0 && r.searchParams.set(s, i);
  return r.toString();
}
async function SA(e) {
  return !e || e.type === "none"
    ? {}
    : e.type === "bearer"
      ? { Authorization: `Bearer ${e.token}` }
      : e.type === "header"
        ? { [e.name]: e.value }
        : e.type === "custom"
          ? await e.getHeaders()
          : {};
}
function EA(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: n, path: r, query: s, body: i, headers: o }) {
      const a = _A(e.baseUrl, r, s),
        l = await SA(e.auth),
        c = await t(a, {
          method: n,
          headers: {
            ...(i ? { "Content-Type": "application/json" } : {}),
            ...l,
            ...o,
          },
          body: i ? JSON.stringify(i) : void 0,
        }),
        d = await c.text(),
        u = (c.headers.get("content-type") || "").includes("application/json"),
        f = u && d ? JSON.parse(d) : d;
      if (!c.ok) {
        const h = u ? f : void 0,
          v = h == null ? void 0 : h.error;
        throw new Wo(
          (v == null ? void 0 : v.message) ??
            `Request failed with status ${c.status}`,
          {
            status: c.status,
            icebergType: v == null ? void 0 : v.type,
            icebergCode: v == null ? void 0 : v.code,
            details: h,
          },
        );
      }
      return { status: c.status, headers: c.headers, data: f };
    },
  };
}
function Wa(e) {
  return e.join("");
}
var kA = class {
  constructor(e, t = "") {
    ((this.client = e), (this.prefix = t));
  }
  async listNamespaces(e) {
    const t = e ? { parent: Wa(e.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: t,
      })
    ).data.namespaces.map((r) => ({ namespace: r }));
  }
  async createNamespace(e, t) {
    const n = {
      namespace: e.namespace,
      properties: t == null ? void 0 : t.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: n,
      })
    ).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Wa(e.namespace)}`,
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Wa(e.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(e) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${Wa(e.namespace)}`,
        }),
        !0
      );
    } catch (t) {
      if (t instanceof Wo && t.status === 404) return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (n) {
      if (n instanceof Wo && n.status === 409) return;
      throw n;
    }
  }
};
function bs(e) {
  return e.join("");
}
var TA = class {
    constructor(e, t = "", n) {
      ((this.client = e), (this.prefix = t), (this.accessDelegation = n));
    }
    async listTables(e) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${bs(e.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(e, t) {
      const n = {};
      return (
        this.accessDelegation &&
          (n["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${bs(e.namespace)}/tables`,
            body: t,
            headers: n,
          })
        ).data.metadata
      );
    }
    async updateTable(e, t) {
      const n = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${bs(e.namespace)}/tables/${e.name}`,
        body: t,
      });
      return {
        "metadata-location": n.data["metadata-location"],
        metadata: n.data.metadata,
      };
    }
    async dropTable(e, t) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${bs(e.namespace)}/tables/${e.name}`,
        query: { purgeRequested: String((t == null ? void 0 : t.purge) ?? !1) },
      });
    }
    async loadTable(e) {
      const t = {};
      return (
        this.accessDelegation &&
          (t["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${bs(e.namespace)}/tables/${e.name}`,
            headers: t,
          })
        ).data.metadata
      );
    }
    async tableExists(e) {
      const t = {};
      this.accessDelegation &&
        (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${bs(e.namespace)}/tables/${e.name}`,
            headers: t,
          }),
          !0
        );
      } catch (n) {
        if (n instanceof Wo && n.status === 404) return !1;
        throw n;
      }
    }
    async createTableIfNotExists(e, t) {
      try {
        return await this.createTable(e, t);
      } catch (n) {
        if (n instanceof Wo && n.status === 409)
          return await this.loadTable({ namespace: e.namespace, name: t.name });
        throw n;
      }
    }
  },
  CA = class {
    constructor(e) {
      var r;
      let t = "v1";
      e.catalogName && (t += `/${e.catalogName}`);
      const n = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
      ((this.client = EA({ baseUrl: n, auth: e.auth, fetchImpl: e.fetch })),
        (this.accessDelegation =
          (r = e.accessDelegation) == null ? void 0 : r.join(",")),
        (this.namespaceOps = new kA(this.client, t)),
        (this.tableOps = new TA(this.client, t, this.accessDelegation)));
    }
    async listNamespaces(e) {
      return this.namespaceOps.listNamespaces(e);
    }
    async createNamespace(e, t) {
      return this.namespaceOps.createNamespace(e, t);
    }
    async dropNamespace(e) {
      await this.namespaceOps.dropNamespace(e);
    }
    async loadNamespaceMetadata(e) {
      return this.namespaceOps.loadNamespaceMetadata(e);
    }
    async listTables(e) {
      return this.tableOps.listTables(e);
    }
    async createTable(e, t) {
      return this.tableOps.createTable(e, t);
    }
    async updateTable(e, t) {
      return this.tableOps.updateTable(e, t);
    }
    async dropTable(e, t) {
      await this.tableOps.dropTable(e, t);
    }
    async loadTable(e) {
      return this.tableOps.loadTable(e);
    }
    async namespaceExists(e) {
      return this.namespaceOps.namespaceExists(e);
    }
    async tableExists(e) {
      return this.tableOps.tableExists(e);
    }
    async createNamespaceIfNotExists(e, t) {
      return this.namespaceOps.createNamespaceIfNotExists(e, t);
    }
    async createTableIfNotExists(e, t) {
      return this.tableOps.createTableIfNotExists(e, t);
    }
  },
  Tc = class extends Error {
    constructor(e, t = "storage", n, r) {
      (super(e),
        (this.__isStorageError = !0),
        (this.namespace = t),
        (this.name = t === "vectors" ? "StorageVectorsError" : "StorageError"),
        (this.status = n),
        (this.statusCode = r));
    }
  };
function Cc(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var qd = class extends Tc {
    constructor(e, t, n, r = "storage") {
      (super(e, r, t, n),
        (this.name =
          r === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = t),
        (this.statusCode = n));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  Pb = class extends Tc {
    constructor(e, t, n = "storage") {
      (super(e, n),
        (this.name =
          n === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = t));
    }
  };
const RA = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  PA = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Kd = (e) => {
    if (Array.isArray(e)) return e.map((n) => Kd(n));
    if (typeof e == "function" || e !== Object(e)) return e;
    const t = {};
    return (
      Object.entries(e).forEach(([n, r]) => {
        const s = n.replace(/([-_][a-z])/gi, (i) =>
          i.toUpperCase().replace(/[-_]/g, ""),
        );
        t[s] = Kd(r);
      }),
      t
    );
  },
  AA = (e) =>
    !e ||
    typeof e != "string" ||
    e.length === 0 ||
    e.length > 100 ||
    e.trim() !== e ||
    e.includes("/") ||
    e.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e);
function qo(e) {
  "@babel/helpers - typeof";
  return (
    (qo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qo(e)
  );
}
function OA(e, t) {
  if (qo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (qo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jA(e) {
  var t = OA(e, "string");
  return qo(t) == "symbol" ? t : t + "";
}
function NA(e, t, n) {
  return (
    (t = jA(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Jm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jm(Object(n), !0).forEach(function (r) {
          NA(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Jm(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
const Ym = (e) => {
    var t;
    return (
      e.msg ||
      e.message ||
      e.error_description ||
      (typeof e.error == "string"
        ? e.error
        : (t = e.error) === null || t === void 0
          ? void 0
          : t.message) ||
      JSON.stringify(e)
    );
  },
  IA = async (e, t, n, r) => {
    if (e !== null && typeof e == "object" && typeof e.json == "function") {
      const s = e;
      let i = parseInt(s.status, 10);
      (Number.isFinite(i) || (i = 500),
        s
          .json()
          .then((o) => {
            const a =
              (o == null ? void 0 : o.statusCode) ||
              (o == null ? void 0 : o.code) ||
              i + "";
            t(new qd(Ym(o), i, a, r));
          })
          .catch(() => {
            const o = i + "";
            t(new qd(s.statusText || `HTTP ${i} error`, i, o, r));
          }));
    } else t(new Pb(Ym(e), e, r));
  },
  LA = (e, t, n, r) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    if (e === "GET" || e === "HEAD" || !r) return K(K({}, s), n);
    if (PA(r)) {
      var i;
      const o = (t == null ? void 0 : t.headers) || {};
      let a;
      for (const [l, c] of Object.entries(o))
        l.toLowerCase() === "content-type" && (a = c);
      ((s.headers = DA(
        o,
        "Content-Type",
        (i = a) !== null && i !== void 0 ? i : "application/json",
      )),
        (s.body = JSON.stringify(r)));
    } else s.body = r;
    return (t != null && t.duplex && (s.duplex = t.duplex), K(K({}, s), n));
  };
function DA(e, t, n) {
  const r = K({}, e);
  for (const s of Object.keys(r))
    s.toLowerCase() === t.toLowerCase() && delete r[s];
  return ((r[t] = n), r);
}
async function qi(e, t, n, r, s, i, o) {
  return new Promise((a, l) => {
    e(n, LA(t, r, s, i))
      .then((c) => {
        if (!c.ok) throw c;
        if (r != null && r.noResolveJson) return c;
        if (o === "vectors") {
          const d = c.headers.get("content-type");
          if (c.headers.get("content-length") === "0" || c.status === 204)
            return {};
          if (!d || !d.includes("application/json")) return {};
        }
        return c.json();
      })
      .then((c) => a(c))
      .catch((c) => IA(c, l, r, o));
  });
}
function Ab(e = "storage") {
  return {
    get: async (t, n, r, s) => qi(t, "GET", n, r, s, void 0, e),
    post: async (t, n, r, s, i) => qi(t, "POST", n, s, i, r, e),
    put: async (t, n, r, s, i) => qi(t, "PUT", n, s, i, r, e),
    head: async (t, n, r, s) =>
      qi(t, "HEAD", n, K(K({}, r), {}, { noResolveJson: !0 }), s, void 0, e),
    remove: async (t, n, r, s, i) => qi(t, "DELETE", n, s, i, r, e),
  };
}
const $A = Ab("storage"),
  { get: Ko, post: Yt, put: Gd, head: MA, remove: Nf } = $A,
  kt = Ab("vectors");
var ji = class {
    constructor(e, t = {}, n, r = "storage") {
      ((this.shouldThrowOnError = !1),
        (this.url = e),
        (this.headers = Object.fromEntries(
          Object.entries(t).map(([s, i]) => [s.toLowerCase(), i]),
        )),
        (this.fetch = RA(n)),
        (this.namespace = r));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(e, t) {
      return (
        (this.headers = K(K({}, this.headers), {}, { [e.toLowerCase()]: t })),
        this
      );
    }
    async handleOperation(e) {
      var t = this;
      try {
        return { data: await e(), error: null };
      } catch (n) {
        if (t.shouldThrowOnError) throw n;
        if (Cc(n)) return { data: null, error: n };
        throw n;
      }
    }
  },
  UA = class {
    constructor(e, t) {
      ((this.downloadFn = e), (this.shouldThrowOnError = t));
    }
    then(e, t) {
      return this.execute().then(e, t);
    }
    async execute() {
      var e = this;
      try {
        return { data: (await e.downloadFn()).body, error: null };
      } catch (t) {
        if (e.shouldThrowOnError) throw t;
        if (Cc(t)) return { data: null, error: t };
        throw t;
      }
    }
  };
let Ob;
Ob = Symbol.toStringTag;
var FA = class {
  constructor(e, t) {
    ((this.downloadFn = e),
      (this.shouldThrowOnError = t),
      (this[Ob] = "BlobDownloadBuilder"),
      (this.promise = null));
  }
  asStream() {
    return new UA(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var e = this;
    try {
      return { data: await (await e.downloadFn()).blob(), error: null };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (Cc(t)) return { data: null, error: t };
      throw t;
    }
  }
};
const zA = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  Xm = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var BA = class extends ji {
  constructor(e, t = {}, n, r) {
    (super(e, t, r, "storage"), (this.bucketId = n));
  }
  async uploadOrUpdate(e, t, n, r) {
    var s = this;
    return s.handleOperation(async () => {
      let i;
      const o = K(K({}, Xm), r);
      let a = K(
        K({}, s.headers),
        e === "POST" && { "x-upsert": String(o.upsert) },
      );
      const l = o.metadata;
      (typeof Blob < "u" && n instanceof Blob
        ? ((i = new FormData()),
          i.append("cacheControl", o.cacheControl),
          l && i.append("metadata", s.encodeMetadata(l)),
          i.append("", n))
        : typeof FormData < "u" && n instanceof FormData
          ? ((i = n),
            i.has("cacheControl") || i.append("cacheControl", o.cacheControl),
            l &&
              !i.has("metadata") &&
              i.append("metadata", s.encodeMetadata(l)))
          : ((i = n),
            (a["cache-control"] = `max-age=${o.cacheControl}`),
            (a["content-type"] = o.contentType),
            l && (a["x-metadata"] = s.toBase64(s.encodeMetadata(l))),
            ((typeof ReadableStream < "u" && i instanceof ReadableStream) ||
              (i &&
                typeof i == "object" &&
                "pipe" in i &&
                typeof i.pipe == "function")) &&
              !o.duplex &&
              (o.duplex = "half")),
        r != null && r.headers && (a = K(K({}, a), r.headers)));
      const c = s._removeEmptyFolders(t),
        d = s._getFinalPath(c),
        u = await (e == "PUT" ? Gd : Yt)(
          s.fetch,
          `${s.url}/object/${d}`,
          i,
          K({ headers: a }, o != null && o.duplex ? { duplex: o.duplex } : {}),
        );
      return { path: c, id: u.Id, fullPath: u.Key };
    });
  }
  async upload(e, t, n) {
    return this.uploadOrUpdate("POST", e, t, n);
  }
  async uploadToSignedUrl(e, t, n, r) {
    var s = this;
    const i = s._removeEmptyFolders(e),
      o = s._getFinalPath(i),
      a = new URL(s.url + `/object/upload/sign/${o}`);
    return (
      a.searchParams.set("token", t),
      s.handleOperation(async () => {
        let l;
        const c = K(K({}, Xm), r),
          d = K(K({}, s.headers), { "x-upsert": String(c.upsert) });
        return (
          typeof Blob < "u" && n instanceof Blob
            ? ((l = new FormData()),
              l.append("cacheControl", c.cacheControl),
              l.append("", n))
            : typeof FormData < "u" && n instanceof FormData
              ? ((l = n), l.append("cacheControl", c.cacheControl))
              : ((l = n),
                (d["cache-control"] = `max-age=${c.cacheControl}`),
                (d["content-type"] = c.contentType)),
          {
            path: i,
            fullPath: (await Gd(s.fetch, a.toString(), l, { headers: d })).Key,
          }
        );
      })
    );
  }
  async createSignedUploadUrl(e, t) {
    var n = this;
    return n.handleOperation(async () => {
      let r = n._getFinalPath(e);
      const s = K({}, n.headers);
      t != null && t.upsert && (s["x-upsert"] = "true");
      const i = await Yt(
          n.fetch,
          `${n.url}/object/upload/sign/${r}`,
          {},
          { headers: s },
        ),
        o = new URL(n.url + i.url),
        a = o.searchParams.get("token");
      if (!a) throw new Tc("No token returned by API");
      return { signedUrl: o.toString(), path: e, token: a };
    });
  }
  async update(e, t, n) {
    return this.uploadOrUpdate("PUT", e, t, n);
  }
  async move(e, t, n) {
    var r = this;
    return r.handleOperation(
      async () =>
        await Yt(
          r.fetch,
          `${r.url}/object/move`,
          {
            bucketId: r.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: n == null ? void 0 : n.destinationBucket,
          },
          { headers: r.headers },
        ),
    );
  }
  async copy(e, t, n) {
    var r = this;
    return r.handleOperation(async () => ({
      path: (
        await Yt(
          r.fetch,
          `${r.url}/object/copy`,
          {
            bucketId: r.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: n == null ? void 0 : n.destinationBucket,
          },
          { headers: r.headers },
        )
      ).Key,
    }));
  }
  async createSignedUrl(e, t, n) {
    var r = this;
    return r.handleOperation(async () => {
      let s = r._getFinalPath(e);
      const i =
        typeof (n == null ? void 0 : n.transform) == "object" &&
        n.transform !== null &&
        Object.keys(n.transform).length > 0;
      let o = await Yt(
        r.fetch,
        `${r.url}/object/sign/${s}`,
        K({ expiresIn: t }, i ? { transform: n.transform } : {}),
        { headers: r.headers },
      );
      const a =
          n != null && n.download
            ? `&download=${n.download === !0 ? "" : n.download}`
            : "",
        l =
          i && o.signedURL.includes("/object/sign/")
            ? o.signedURL.replace("/object/sign/", "/render/image/sign/")
            : o.signedURL;
      return { signedUrl: encodeURI(`${r.url}${l}${a}`) };
    });
  }
  async createSignedUrls(e, t, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = await Yt(
          r.fetch,
          `${r.url}/object/sign/${r.bucketId}`,
          { expiresIn: t, paths: e },
          { headers: r.headers },
        ),
        i =
          n != null && n.download
            ? `&download=${n.download === !0 ? "" : n.download}`
            : "";
      return s.map((o) =>
        K(
          K({}, o),
          {},
          {
            signedUrl: o.signedURL
              ? encodeURI(`${r.url}${o.signedURL}${i}`)
              : null,
          },
        ),
      );
    });
  }
  download(e, t, n) {
    const r =
        typeof (t == null ? void 0 : t.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      s = this.transformOptsToQueryString(
        (t == null ? void 0 : t.transform) || {},
      ),
      i = s ? `?${s}` : "",
      o = this._getFinalPath(e),
      a = () =>
        Ko(
          this.fetch,
          `${this.url}/${r}/${o}${i}`,
          { headers: this.headers, noResolveJson: !0 },
          n,
        );
    return new FA(a, this.shouldThrowOnError);
  }
  async info(e) {
    var t = this;
    const n = t._getFinalPath(e);
    return t.handleOperation(async () =>
      Kd(
        await Ko(t.fetch, `${t.url}/object/info/${n}`, { headers: t.headers }),
      ),
    );
  }
  async exists(e) {
    var t = this;
    const n = t._getFinalPath(e);
    try {
      return (
        await MA(t.fetch, `${t.url}/object/${n}`, { headers: t.headers }),
        { data: !0, error: null }
      );
    } catch (s) {
      if (t.shouldThrowOnError) throw s;
      if (Cc(s)) {
        var r;
        const i =
          s instanceof qd
            ? s.status
            : s instanceof Pb
              ? (r = s.originalError) === null || r === void 0
                ? void 0
                : r.status
              : void 0;
        if (i !== void 0 && [400, 404].includes(i))
          return { data: !1, error: s };
      }
      throw s;
    }
  }
  getPublicUrl(e, t) {
    const n = this._getFinalPath(e),
      r = [],
      s =
        t != null && t.download
          ? `download=${t.download === !0 ? "" : t.download}`
          : "";
    s !== "" && r.push(s);
    const i =
        typeof (t == null ? void 0 : t.transform) < "u"
          ? "render/image"
          : "object",
      o = this.transformOptsToQueryString(
        (t == null ? void 0 : t.transform) || {},
      );
    o !== "" && r.push(o);
    let a = r.join("&");
    return (
      a !== "" && (a = `?${a}`),
      { data: { publicUrl: encodeURI(`${this.url}/${i}/public/${n}${a}`) } }
    );
  }
  async remove(e) {
    var t = this;
    return t.handleOperation(
      async () =>
        await Nf(
          t.fetch,
          `${t.url}/object/${t.bucketId}`,
          { prefixes: e },
          { headers: t.headers },
        ),
    );
  }
  async list(e, t, n) {
    var r = this;
    return r.handleOperation(async () => {
      const s = K(K(K({}, zA), t), {}, { prefix: e || "" });
      return await Yt(
        r.fetch,
        `${r.url}/object/list/${r.bucketId}`,
        s,
        { headers: r.headers },
        n,
      );
    });
  }
  async listV2(e, t) {
    var n = this;
    return n.handleOperation(async () => {
      const r = K({}, e);
      return await Yt(
        n.fetch,
        `${n.url}/object/list-v2/${n.bucketId}`,
        r,
        { headers: n.headers },
        t,
      );
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return (
      e.width && t.push(`width=${e.width}`),
      e.height && t.push(`height=${e.height}`),
      e.resize && t.push(`resize=${e.resize}`),
      e.format && t.push(`format=${e.format}`),
      e.quality && t.push(`quality=${e.quality}`),
      t.join("&")
    );
  }
};
const HA = "2.102.1",
  ha = { "X-Client-Info": `storage-js/${HA}` };
var VA = class extends ji {
    constructor(e, t = {}, n, r) {
      const s = new URL(e);
      r != null &&
        r.useNewHostname &&
        /supabase\.(co|in|red)$/.test(s.hostname) &&
        !s.hostname.includes("storage.supabase.") &&
        (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
      const i = s.href.replace(/\/$/, ""),
        o = K(K({}, ha), t);
      super(i, o, n, "storage");
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        const n = t.listBucketOptionsToQueryString(e);
        return await Ko(t.fetch, `${t.url}/bucket${n}`, { headers: t.headers });
      });
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Ko(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }),
      );
    }
    async createBucket(e, t = { public: !1 }) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Yt(
            n.fetch,
            `${n.url}/bucket`,
            {
              id: e,
              name: e,
              type: t.type,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async updateBucket(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          await Gd(
            n.fetch,
            `${n.url}/bucket/${e}`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async emptyBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Yt(
            t.fetch,
            `${t.url}/bucket/${e}/empty`,
            {},
            { headers: t.headers },
          ),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Nf(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    listBucketOptionsToQueryString(e) {
      const t = {};
      return (
        e &&
          ("limit" in e && (t.limit = String(e.limit)),
          "offset" in e && (t.offset = String(e.offset)),
          e.search && (t.search = e.search),
          e.sortColumn && (t.sortColumn = e.sortColumn),
          e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : ""
      );
    }
  },
  WA = class extends ji {
    constructor(e, t = {}, n) {
      const r = e.replace(/\/$/, ""),
        s = K(K({}, ha), t);
      super(r, s, n, "storage");
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Yt(
            t.fetch,
            `${t.url}/bucket`,
            { name: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        const n = new URLSearchParams();
        ((e == null ? void 0 : e.limit) !== void 0 &&
          n.set("limit", e.limit.toString()),
          (e == null ? void 0 : e.offset) !== void 0 &&
            n.set("offset", e.offset.toString()),
          e != null && e.sortColumn && n.set("sortColumn", e.sortColumn),
          e != null && e.sortOrder && n.set("sortOrder", e.sortOrder),
          e != null && e.search && n.set("search", e.search));
        const r = n.toString(),
          s = r ? `${t.url}/bucket?${r}` : `${t.url}/bucket`;
        return await Ko(t.fetch, s, { headers: t.headers });
      });
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Nf(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    from(e) {
      var t = this;
      if (!AA(e))
        throw new Tc(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
        );
      const n = new CA({
          baseUrl: this.url,
          catalogName: e,
          auth: { type: "custom", getHeaders: async () => t.headers },
          fetch: this.fetch,
        }),
        r = this.shouldThrowOnError;
      return new Proxy(n, {
        get(s, i) {
          const o = s[i];
          return typeof o != "function"
            ? o
            : async (...a) => {
                try {
                  return { data: await o.apply(s, a), error: null };
                } catch (l) {
                  if (r) throw l;
                  return { data: null, error: l };
                }
              };
        },
      });
    }
  },
  qA = class extends ji {
    constructor(e, t = {}, n) {
      const r = e.replace(/\/$/, ""),
        s = K(K({}, ha), {}, { "Content-Type": "application/json" }, t);
      super(r, s, n, "vectors");
    }
    async createIndex(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await kt.post(t.fetch, `${t.url}/CreateIndex`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getIndex(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          await kt.post(
            n.fetch,
            `${n.url}/GetIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: n.headers },
          ),
      );
    }
    async listIndexes(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await kt.post(t.fetch, `${t.url}/ListIndexes`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteIndex(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          (await kt.post(
            n.fetch,
            `${n.url}/DeleteIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: n.headers },
          )) || {},
      );
    }
  },
  KA = class extends ji {
    constructor(e, t = {}, n) {
      const r = e.replace(/\/$/, ""),
        s = K(K({}, ha), {}, { "Content-Type": "application/json" }, t);
      super(r, s, n, "vectors");
    }
    async putVectors(e) {
      var t = this;
      if (e.vectors.length < 1 || e.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return t.handleOperation(
        async () =>
          (await kt.post(t.fetch, `${t.url}/PutVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await kt.post(t.fetch, `${t.url}/GetVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async listVectors(e) {
      var t = this;
      if (e.segmentCount !== void 0) {
        if (e.segmentCount < 1 || e.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (
          e.segmentIndex !== void 0 &&
          (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)
        )
          throw new Error(
            `segmentIndex must be between 0 and ${e.segmentCount - 1}`,
          );
      }
      return t.handleOperation(
        async () =>
          await kt.post(t.fetch, `${t.url}/ListVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async queryVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await kt.post(t.fetch, `${t.url}/QueryVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteVectors(e) {
      var t = this;
      if (e.keys.length < 1 || e.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return t.handleOperation(
        async () =>
          (await kt.post(t.fetch, `${t.url}/DeleteVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
  },
  GA = class extends ji {
    constructor(e, t = {}, n) {
      const r = e.replace(/\/$/, ""),
        s = K(K({}, ha), {}, { "Content-Type": "application/json" }, t);
      super(r, s, n, "vectors");
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await kt.post(
            t.fetch,
            `${t.url}/CreateVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await kt.post(
            t.fetch,
            `${t.url}/GetVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e = {}) {
      var t = this;
      return t.handleOperation(
        async () =>
          await kt.post(t.fetch, `${t.url}/ListVectorBuckets`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await kt.post(
            t.fetch,
            `${t.url}/DeleteVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
  },
  QA = class extends GA {
    constructor(e, t = {}) {
      super(e, t.headers || {}, t.fetch);
    }
    from(e) {
      return new JA(this.url, this.headers, e, this.fetch);
    }
    async createBucket(e) {
      var t = () => super.createBucket,
        n = this;
      return t().call(n, e);
    }
    async getBucket(e) {
      var t = () => super.getBucket,
        n = this;
      return t().call(n, e);
    }
    async listBuckets(e = {}) {
      var t = () => super.listBuckets,
        n = this;
      return t().call(n, e);
    }
    async deleteBucket(e) {
      var t = () => super.deleteBucket,
        n = this;
      return t().call(n, e);
    }
  },
  JA = class extends qA {
    constructor(e, t, n, r) {
      (super(e, t, r), (this.vectorBucketName = n));
    }
    async createIndex(e) {
      var t = () => super.createIndex,
        n = this;
      return t().call(
        n,
        K(K({}, e), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async listIndexes(e = {}) {
      var t = () => super.listIndexes,
        n = this;
      return t().call(
        n,
        K(K({}, e), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async getIndex(e) {
      var t = () => super.getIndex,
        n = this;
      return t().call(n, n.vectorBucketName, e);
    }
    async deleteIndex(e) {
      var t = () => super.deleteIndex,
        n = this;
      return t().call(n, n.vectorBucketName, e);
    }
    index(e) {
      return new YA(
        this.url,
        this.headers,
        this.vectorBucketName,
        e,
        this.fetch,
      );
    }
  },
  YA = class extends KA {
    constructor(e, t, n, r, s) {
      (super(e, t, s), (this.vectorBucketName = n), (this.indexName = r));
    }
    async putVectors(e) {
      var t = () => super.putVectors,
        n = this;
      return t().call(
        n,
        K(
          K({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async getVectors(e) {
      var t = () => super.getVectors,
        n = this;
      return t().call(
        n,
        K(
          K({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async listVectors(e = {}) {
      var t = () => super.listVectors,
        n = this;
      return t().call(
        n,
        K(
          K({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async queryVectors(e) {
      var t = () => super.queryVectors,
        n = this;
      return t().call(
        n,
        K(
          K({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async deleteVectors(e) {
      var t = () => super.deleteVectors,
        n = this;
      return t().call(
        n,
        K(
          K({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
  },
  XA = class extends VA {
    constructor(e, t = {}, n, r) {
      super(e, t, n, r);
    }
    from(e) {
      return new BA(this.url, this.headers, e, this.fetch);
    }
    get vectors() {
      return new QA(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new WA(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const jb = "2.102.1",
  Rs = 30 * 1e3,
  Qd = 3,
  mu = Qd * Rs,
  ZA = "http://localhost:9999",
  eO = "supabase.auth.token",
  tO = { "X-Client-Info": `gotrue-js/${jb}` },
  Jd = "X-Supabase-Api-Version",
  Nb = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  nO = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  rO = 10 * 60 * 1e3;
class Go extends Error {
  constructor(t, n, r) {
    (super(t),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = n),
      (this.code = r));
  }
}
function F(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class sO extends Go {
  constructor(t, n, r) {
    (super(t, n, r),
      (this.name = "AuthApiError"),
      (this.status = n),
      (this.code = r));
  }
}
function iO(e) {
  return F(e) && e.name === "AuthApiError";
}
class Br extends Go {
  constructor(t, n) {
    (super(t), (this.name = "AuthUnknownError"), (this.originalError = n));
  }
}
class qn extends Go {
  constructor(t, n, r, s) {
    (super(t, r, s), (this.name = n), (this.status = r));
  }
}
class _t extends qn {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function qa(e) {
  return F(e) && e.name === "AuthSessionMissingError";
}
class xs extends qn {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0,
    );
  }
}
class Ka extends qn {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Ga extends qn {
  constructor(t, n = null) {
    (super(t, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = n));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function oO(e) {
  return F(e) && e.name === "AuthImplicitGrantRedirectError";
}
class Zm extends qn {
  constructor(t, n = null) {
    (super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = n));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class aO extends qn {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found",
    );
  }
}
class Yd extends qn {
  constructor(t, n) {
    super(t, "AuthRetryableFetchError", n, void 0);
  }
}
function gu(e) {
  return F(e) && e.name === "AuthRetryableFetchError";
}
class eg extends qn {
  constructor(t, n, r) {
    (super(t, "AuthWeakPasswordError", n, "weak_password"), (this.reasons = r));
  }
}
class Xd extends qn {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const ql =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      "",
    ),
  tg = ` 	
\r=`.split(""),
  lO = (() => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1) e[t] = -1;
    for (let t = 0; t < tg.length; t += 1) e[tg[t].charCodeAt(0)] = -2;
    for (let t = 0; t < ql.length; t += 1) e[ql[t].charCodeAt(0)] = t;
    return e;
  })();
function ng(e, t, n) {
  if (e !== null)
    for (t.queue = (t.queue << 8) | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const r = (t.queue >> (t.queuedBits - 6)) & 63;
      (n(ql[r]), (t.queuedBits -= 6));
    }
  else if (t.queuedBits > 0)
    for (
      t.queue = t.queue << (6 - t.queuedBits), t.queuedBits = 6;
      t.queuedBits >= 6;
    ) {
      const r = (t.queue >> (t.queuedBits - 6)) & 63;
      (n(ql[r]), (t.queuedBits -= 6));
    }
}
function Ib(e, t, n) {
  const r = lO[e];
  if (r > -1)
    for (t.queue = (t.queue << 6) | r, t.queuedBits += 6; t.queuedBits >= 8; )
      (n((t.queue >> (t.queuedBits - 8)) & 255), (t.queuedBits -= 8));
  else {
    if (r === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function rg(e) {
  const t = [],
    n = (o) => {
      t.push(String.fromCodePoint(o));
    },
    r = { utf8seq: 0, codepoint: 0 },
    s = { queue: 0, queuedBits: 0 },
    i = (o) => {
      dO(o, r, n);
    };
  for (let o = 0; o < e.length; o += 1) Ib(e.charCodeAt(o), s, i);
  return t.join("");
}
function cO(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    (t(192 | (e >> 6)), t(128 | (e & 63)));
    return;
  } else if (e <= 65535) {
    (t(224 | (e >> 12)), t(128 | ((e >> 6) & 63)), t(128 | (e & 63)));
    return;
  } else if (e <= 1114111) {
    (t(240 | (e >> 18)),
      t(128 | ((e >> 12) & 63)),
      t(128 | ((e >> 6) & 63)),
      t(128 | (e & 63)));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function uO(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    let r = e.charCodeAt(n);
    if (r > 55295 && r <= 56319) {
      const s = ((r - 55296) * 1024) & 65535;
      ((r = (((e.charCodeAt(n + 1) - 56320) & 65535) | s) + 65536), (n += 1));
    }
    cO(r, t);
  }
}
function dO(e, t, n) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      n(e);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (!((e >> (7 - r)) & 1)) {
        t.utf8seq = r;
        break;
      }
    if (t.utf8seq === 2) t.codepoint = e & 31;
    else if (t.utf8seq === 3) t.codepoint = e & 15;
    else if (t.utf8seq === 4) t.codepoint = e & 7;
    else throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (e <= 127) throw new Error("Invalid UTF-8 sequence");
    ((t.codepoint = (t.codepoint << 6) | (e & 63)),
      (t.utf8seq -= 1),
      t.utf8seq === 0 && n(t.codepoint));
  }
}
function Xs(e) {
  const t = [],
    n = { queue: 0, queuedBits: 0 },
    r = (s) => {
      t.push(s);
    };
  for (let s = 0; s < e.length; s += 1) Ib(e.charCodeAt(s), n, r);
  return new Uint8Array(t);
}
function hO(e) {
  const t = [];
  return (uO(e, (n) => t.push(n)), new Uint8Array(t));
}
function qr(e) {
  const t = [],
    n = { queue: 0, queuedBits: 0 },
    r = (s) => {
      t.push(s);
    };
  return (e.forEach((s) => ng(s, n, r)), ng(null, n, r), t.join(""));
}
function fO(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function pO() {
  return Symbol("auth-callback");
}
const Ve = () => typeof window < "u" && typeof document < "u",
  $r = { tested: !1, writable: !1 },
  Lb = () => {
    if (!Ve()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if ($r.tested) return $r.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        ($r.tested = !0),
        ($r.writable = !0));
    } catch {
      (($r.tested = !0), ($r.writable = !1));
    }
    return $r.writable;
  };
function mO(e) {
  const t = {},
    n = new URL(e);
  if (n.hash && n.hash[0] === "#")
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((s, i) => {
        t[i] = s;
      });
    } catch {}
  return (
    n.searchParams.forEach((r, s) => {
      t[s] = r;
    }),
    t
  );
}
const Db = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  gO = (e) =>
    typeof e == "object" &&
    e !== null &&
    "status" in e &&
    "ok" in e &&
    "json" in e &&
    typeof e.json == "function",
  Ps = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n));
  },
  Mr = async (e, t) => {
    const n = await e.getItem(t);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  },
  He = async (e, t) => {
    await e.removeItem(t);
  };
class Rc {
  constructor() {
    this.promise = new Rc.promiseConstructor((t, n) => {
      ((this.resolve = t), (this.reject = n));
    });
  }
}
Rc.promiseConstructor = Promise;
function Qa(e) {
  const t = e.split(".");
  if (t.length !== 3) throw new Xd("Invalid JWT structure");
  for (let r = 0; r < t.length; r++)
    if (!nO.test(t[r])) throw new Xd("JWT not in base64url format");
  return {
    header: JSON.parse(rg(t[0])),
    payload: JSON.parse(rg(t[1])),
    signature: Xs(t[2]),
    raw: { header: t[0], payload: t[1] },
  };
}
async function vO(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function yO(e, t) {
  return new Promise((r, s) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await e(i);
          if (!t(i, null, o)) {
            r(o);
            return;
          }
        } catch (o) {
          if (!t(i, o)) {
            s(o);
            return;
          }
        }
    })();
  });
}
function wO(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function bO() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const n =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = n.length;
    let s = "";
    for (let i = 0; i < 56; i++) s += n.charAt(Math.floor(Math.random() * r));
    return s;
  }
  return (crypto.getRandomValues(t), Array.from(t, wO).join(""));
}
async function xO(e) {
  const n = new TextEncoder().encode(e),
    r = await crypto.subtle.digest("SHA-256", n),
    s = new Uint8Array(r);
  return Array.from(s)
    .map((i) => String.fromCharCode(i))
    .join("");
}
async function _O(e) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
      ),
      e
    );
  const n = await xO(e);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function _s(e, t, n = !1) {
  const r = bO();
  let s = r;
  (n && (s += "/PASSWORD_RECOVERY"), await Ps(e, `${t}-code-verifier`, s));
  const i = await _O(r);
  return [i, r === i ? "plain" : "s256"];
}
const SO = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function EO(e) {
  const t = e.headers.get(Jd);
  if (!t || !t.match(SO)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function kO(e) {
  if (!e) throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t) throw new Error("JWT has expired");
}
function TO(e) {
  switch (e) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const CO = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Ss(e) {
  if (!CO.test(e))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not",
    );
}
function vu() {
  const e = {};
  return new Proxy(e, {
    get: (t, n) => {
      if (n === "__isUserNotAvailableProxy") return !0;
      if (typeof n == "symbol") {
        const r = n.toString();
        if (
          r === "Symbol(Symbol.toPrimitive)" ||
          r === "Symbol(Symbol.toStringTag)" ||
          r === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`,
      );
    },
    set: (t, n) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
    deleteProperty: (t, n) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
  });
}
function RO(e, t) {
  return new Proxy(e, {
    get: (n, r, s) => {
      if (r === "__isInsecureUserWarningProxy") return !0;
      if (typeof r == "symbol") {
        const i = r.toString();
        if (
          i === "Symbol(Symbol.toPrimitive)" ||
          i === "Symbol(Symbol.toStringTag)" ||
          i === "Symbol(util.inspect.custom)" ||
          i === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(n, r, s);
      }
      return (
        !t.value &&
          typeof r == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
          ),
          (t.value = !0)),
        Reflect.get(n, r, s)
      );
    },
  });
}
function sg(e) {
  return JSON.parse(JSON.stringify(e));
}
const zr = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  PO = [502, 503, 504];
async function ig(e) {
  var t;
  if (!gO(e)) throw new Yd(zr(e), 0);
  if (PO.includes(e.status)) throw new Yd(zr(e), e.status);
  let n;
  try {
    n = await e.json();
  } catch (i) {
    throw new Br(zr(i), i);
  }
  let r;
  const s = EO(e);
  if (
    (s &&
    s.getTime() >= Nb["2024-01-01"].timestamp &&
    typeof n == "object" &&
    n &&
    typeof n.code == "string"
      ? (r = n.code)
      : typeof n == "object" &&
        n &&
        typeof n.error_code == "string" &&
        (r = n.error_code),
    r)
  ) {
    if (r === "weak_password")
      throw new eg(
        zr(n),
        e.status,
        ((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) ||
          [],
      );
    if (r === "session_not_found") throw new _t();
  } else if (
    typeof n == "object" &&
    n &&
    typeof n.weak_password == "object" &&
    n.weak_password &&
    Array.isArray(n.weak_password.reasons) &&
    n.weak_password.reasons.length &&
    n.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0)
  )
    throw new eg(zr(n), e.status, n.weak_password.reasons);
  throw new sO(zr(n), e.status || 500, r);
}
const AO = (e, t, n, r) => {
  const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === "GET"
    ? s
    : ((s.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        t == null ? void 0 : t.headers,
      )),
      (s.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, s), n));
};
async function H(e, t, n, r) {
  var s;
  const i = Object.assign({}, r == null ? void 0 : r.headers);
  (i[Jd] || (i[Jd] = Nb["2024-01-01"].name),
    r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`));
  const o =
    (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
  r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
  const a = Object.keys(o).length
      ? "?" + new URLSearchParams(o).toString()
      : "",
    l = await OO(
      e,
      t,
      n + a,
      { headers: i, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body,
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function OO(e, t, n, r, s, i) {
  const o = AO(t, r, s, i);
  let a;
  try {
    a = await e(n, Object.assign({}, o));
  } catch (l) {
    throw (console.error(l), new Yd(zr(l), 0));
  }
  if ((a.ok || (await ig(a)), r != null && r.noResolveJson)) return a;
  try {
    return await a.json();
  } catch (l) {
    await ig(l);
  }
}
function Qt(e) {
  var t;
  let n = null;
  IO(e) &&
    ((n = Object.assign({}, e)),
    e.expires_at || (n.expires_at = fO(e.expires_in)));
  const r = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: n, user: r }, error: null };
}
function og(e) {
  const t = Qt(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == "object" &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == "string" &&
      e.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function ar(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function jO(e) {
  return { data: e, error: null };
}
function NO(e) {
  const {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: i,
    } = e,
    o = kc(e, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    a = {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: i,
    },
    l = Object.assign({}, o);
  return { data: { properties: a, user: l }, error: null };
}
function ag(e) {
  return e;
}
function IO(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
const yu = ["global", "local", "others"];
class LO {
  constructor({ url: t = "", headers: n = {}, fetch: r }) {
    ((this.url = t),
      (this.headers = n),
      (this.fetch = Db(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      }),
      (this.customProviders = {
        listProviders: this._listCustomProviders.bind(this),
        createProvider: this._createCustomProvider.bind(this),
        getProvider: this._getCustomProvider.bind(this),
        updateProvider: this._updateCustomProvider.bind(this),
        deleteProvider: this._deleteCustomProvider.bind(this),
      }));
  }
  async signOut(t, n = yu[0]) {
    if (yu.indexOf(n) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${yu.join(", ")}`,
      );
    try {
      return (
        await H(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (F(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(t, n = {}) {
    try {
      return await H(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: ar,
      });
    } catch (r) {
      if (F(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(t) {
    try {
      const { options: n } = t,
        r = kc(t, ["options"]),
        s = Object.assign(Object.assign({}, r), n);
      return (
        "newEmail" in r &&
          ((s.new_email = r == null ? void 0 : r.newEmail), delete s.newEmail),
        await H(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: s,
          headers: this.headers,
          xform: NO,
          redirectTo: n == null ? void 0 : n.redirectTo,
        })
      );
    } catch (n) {
      if (F(n)) return { data: { properties: null, user: null }, error: n };
      throw n;
    }
  }
  async createUser(t) {
    try {
      return await H(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: ar,
      });
    } catch (n) {
      if (F(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async listUsers(t) {
    var n, r, s, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 },
        d = await H(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = t == null ? void 0 : t.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (i =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: ag,
        });
      if (d.error) throw d.error;
      const u = await d.json(),
        f =
          (o = d.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        h =
          (l =
            (a = d.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        h.length > 0 &&
          (h.forEach((v) => {
            const g = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)),
              w = JSON.parse(v.split(";")[1].split("=")[1]);
            c[`${w}Page`] = g;
          }),
          (c.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, u), c), error: null }
      );
    } catch (c) {
      if (F(c)) return { data: { users: [] }, error: c };
      throw c;
    }
  }
  async getUserById(t) {
    Ss(t);
    try {
      return await H(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: ar,
      });
    } catch (n) {
      if (F(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUserById(t, n) {
    Ss(t);
    try {
      return await H(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: n,
        headers: this.headers,
        xform: ar,
      });
    } catch (r) {
      if (F(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(t, n = !1) {
    Ss(t);
    try {
      return await H(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: n },
        xform: ar,
      });
    } catch (r) {
      if (F(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(t) {
    Ss(t.userId);
    try {
      const { data: n, error: r } = await H(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (s) => ({ data: { factors: s }, error: null }),
        },
      );
      return { data: n, error: r };
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(t) {
    (Ss(t.userId), Ss(t.id));
    try {
      return {
        data: await H(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers },
        ),
        error: null,
      };
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _listOAuthClients(t) {
    var n, r, s, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 },
        d = await H(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = t == null ? void 0 : t.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (i =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: ag,
        });
      if (d.error) throw d.error;
      const u = await d.json(),
        f =
          (o = d.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        h =
          (l =
            (a = d.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        h.length > 0 &&
          (h.forEach((v) => {
            const g = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)),
              w = JSON.parse(v.split(";")[1].split("=")[1]);
            c[`${w}Page`] = g;
          }),
          (c.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, u), c), error: null }
      );
    } catch (c) {
      if (F(c)) return { data: { clients: [] }, error: c };
      throw c;
    }
  }
  async _createOAuthClient(t) {
    try {
      return await H(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null }),
      });
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _getOAuthClient(t) {
    try {
      return await H(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${t}`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _updateOAuthClient(t, n) {
    try {
      return await H(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${t}`,
        {
          body: n,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        },
      );
    } catch (r) {
      if (F(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteOAuthClient(t) {
    try {
      return (
        await H(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _regenerateOAuthClientSecret(t) {
    try {
      return await H(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${t}/regenerate_secret`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _listCustomProviders(t) {
    try {
      const n = {};
      return (
        t != null && t.type && (n.type = t.type),
        await H(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
          headers: this.headers,
          query: n,
          xform: (r) => {
            var s;
            return {
              data: {
                providers:
                  (s = r == null ? void 0 : r.providers) !== null &&
                  s !== void 0
                    ? s
                    : [],
              },
              error: null,
            };
          },
        })
      );
    } catch (n) {
      if (F(n)) return { data: { providers: [] }, error: n };
      throw n;
    }
  }
  async _createCustomProvider(t) {
    try {
      return await H(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: t,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null }),
      });
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _getCustomProvider(t) {
    try {
      return await H(
        this.fetch,
        "GET",
        `${this.url}/admin/custom-providers/${t}`,
        { headers: this.headers, xform: (n) => ({ data: n, error: null }) },
      );
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _updateCustomProvider(t, n) {
    try {
      return await H(
        this.fetch,
        "PUT",
        `${this.url}/admin/custom-providers/${t}`,
        {
          body: n,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        },
      );
    } catch (r) {
      if (F(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteCustomProvider(t) {
    try {
      return (
        await H(
          this.fetch,
          "DELETE",
          `${this.url}/admin/custom-providers/${t}`,
          { headers: this.headers, noResolveJson: !0 },
        ),
        { data: null, error: null }
      );
    } catch (n) {
      if (F(n)) return { data: null, error: n };
      throw n;
    }
  }
}
function lg(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, n) => {
      e[t] = n;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
const fn = {
  debug: !!(
    globalThis &&
    Lb() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class $b extends Error {
  constructor(t) {
    (super(t), (this.isAcquireTimeout = !0));
  }
}
class cg extends $b {}
async function DO(e, t, n) {
  fn.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const r = new globalThis.AbortController();
  let s;
  (t > 0 &&
    (s = setTimeout(() => {
      (r.abort(),
        fn.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock acquire timed out",
            e,
          ));
    }, t)),
    await Promise.resolve());
  try {
    return await globalThis.navigator.locks.request(
      e,
      t === 0
        ? { mode: "exclusive", ifAvailable: !0 }
        : { mode: "exclusive", signal: r.signal },
      async (i) => {
        if (i) {
          (clearTimeout(s),
            fn.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                e,
                i.name,
              ));
          try {
            return await n();
          } finally {
            fn.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: released",
                e,
                i.name,
              );
          }
        } else {
          if (t === 0)
            throw (
              fn.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: not immediately available",
                  e,
                ),
              new cg(
                `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`,
              )
            );
          if (fn.debug)
            try {
              const o = await globalThis.navigator.locks.query();
              console.log(
                "@supabase/gotrue-js: Navigator LockManager state",
                JSON.stringify(o, null, "  "),
              );
            } catch (o) {
              console.warn(
                "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                o,
              );
            }
          return (
            console.warn(
              "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
            ),
            clearTimeout(s),
            await n()
          );
        }
      },
    );
  } catch (i) {
    if (
      (t > 0 && clearTimeout(s),
      (i == null ? void 0 : i.name) === "AbortError" && t > 0)
    ) {
      if (r.signal.aborted)
        return (
          fn.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",
              e,
            ),
          console.warn(
            `@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`,
          ),
          await Promise.resolve().then(() =>
            globalThis.navigator.locks.request(
              e,
              { mode: "exclusive", steal: !0 },
              async (o) => {
                if (o) {
                  fn.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: recovered (stolen)",
                      e,
                      o.name,
                    );
                  try {
                    return await n();
                  } finally {
                    fn.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: released (stolen)",
                        e,
                        o.name,
                      );
                  }
                } else
                  return (
                    console.warn(
                      "@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true",
                    ),
                    await n()
                  );
              },
            ),
          )
        );
      throw (
        fn.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock: lock was stolen by another request",
            e,
          ),
        new cg(`Lock "${e}" was released because another request stole it`)
      );
    }
    throw i;
  }
}
function $O() {
  if (typeof globalThis != "object")
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function Mb(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function MO(e) {
  return parseInt(e, 16);
}
function UO(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (r) => r.toString(16).padStart(2, "0")).join("");
}
function FO(e) {
  var t;
  const {
    chainId: n,
    domain: r,
    expirationTime: s,
    issuedAt: i = new Date(),
    nonce: o,
    notBefore: a,
    requestId: l,
    resources: c,
    scheme: d,
    uri: u,
    version: f,
  } = e;
  {
    if (!Number.isInteger(n))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${n}`,
      );
    if (!r)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
      );
    if (o && o.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`,
      );
    if (!u)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.',
      );
    if (f !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`,
      );
    if (
      !((t = e.statement) === null || t === void 0) &&
      t.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`,
      );
  }
  const h = Mb(e.address),
    v = d ? `${d}://${r}` : r,
    g = e.statement
      ? `${e.statement}
`
      : "",
    w = `${v} wants you to sign in with your Ethereum account:
${h}

${g}`;
  let p = `URI: ${u}
Version: ${f}
Chain ID: ${n}${
    o
      ? `
Nonce: ${o}`
      : ""
  }
Issued At: ${i.toISOString()}`;
  if (
    (s &&
      (p += `
Expiration Time: ${s.toISOString()}`),
    a &&
      (p += `
Not Before: ${a.toISOString()}`),
    l &&
      (p += `
Request ID: ${l}`),
    c)
  ) {
    let m = `
Resources:`;
    for (const y of c) {
      if (!y || typeof y != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${y}`,
        );
      m += `
- ${y}`;
    }
    p += m;
  }
  return `${w}
${p}`;
}
class je extends Error {
  constructor({ message: t, code: n, cause: r, name: s }) {
    var i;
    (super(t, { cause: r }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (i = s ?? (r instanceof Error ? r.name : void 0)) !== null &&
        i !== void 0
          ? i
          : "Unknown Error"),
      (this.code = n));
  }
}
class Kl extends je {
  constructor(t, n) {
    (super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: n,
      message: t,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = n));
  }
}
function zO({ error: e, options: t }) {
  var n, r, s;
  const { publicKey: i } = t;
  if (!i) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new je({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else if (e.name === "ConstraintError") {
    if (
      ((n = i.authenticatorSelection) === null || n === void 0
        ? void 0
        : n.requireResidentKey) === !0
    )
      return new je({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e,
      });
    if (
      t.mediation === "conditional" &&
      ((r = i.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.userVerification) === "required"
    )
      return new je({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e,
      });
    if (
      ((s = i.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.userVerification) === "required"
    )
      return new je({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e,
      });
  } else {
    if (e.name === "InvalidStateError")
      return new je({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e,
      });
    if (e.name === "NotAllowedError")
      return new je({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((a) => a.type === "public-key")
        .length === 0
        ? new je({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: e,
          })
        : new je({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: e,
          });
    if (e.name === "SecurityError") {
      const o = window.location.hostname;
      if (Ub(o)) {
        if (i.rp.id !== o)
          return new je({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new je({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new je({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new je({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new je({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
function BO({ error: e, options: t }) {
  const { publicKey: n } = t;
  if (!n) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new je({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else {
    if (e.name === "NotAllowedError")
      return new je({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "SecurityError") {
      const r = window.location.hostname;
      if (Ub(r)) {
        if (n.rpId !== r)
          return new je({
            message: `The RP ID "${n.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new je({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new je({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new je({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
class HO {
  createNewAbortSignal() {
    if (this.controller) {
      const n = new Error("Cancelling existing WebAuthn API call for new one");
      ((n.name = "AbortError"), this.controller.abort(n));
    }
    const t = new AbortController();
    return ((this.controller = t), t.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      ((t.name = "AbortError"),
        this.controller.abort(t),
        (this.controller = void 0));
    }
  }
}
const VO = new HO();
function WO(e) {
  if (!e) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(e);
  const { challenge: t, user: n, excludeCredentials: r } = e,
    s = kc(e, ["challenge", "user", "excludeCredentials"]),
    i = Xs(t).buffer,
    o = Object.assign(Object.assign({}, n), { id: Xs(n.id).buffer }),
    a = Object.assign(Object.assign({}, s), { challenge: i, user: o });
  if (r && r.length > 0) {
    a.excludeCredentials = new Array(r.length);
    for (let l = 0; l < r.length; l++) {
      const c = r[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, c), {
        id: Xs(c.id).buffer,
        type: c.type || "public-key",
        transports: c.transports,
      });
    }
  }
  return a;
}
function qO(e) {
  if (!e) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: n } = e,
    r = kc(e, ["challenge", "allowCredentials"]),
    s = Xs(t).buffer,
    i = Object.assign(Object.assign({}, r), { challenge: s });
  if (n && n.length > 0) {
    i.allowCredentials = new Array(n.length);
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: Xs(a.id).buffer,
        type: a.type || "public-key",
        transports: a.transports,
      });
    }
  }
  return i;
}
function KO(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const n = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: qr(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: qr(new Uint8Array(e.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment:
      (t = n.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function GO(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const n = e,
    r = e.getClientExtensionResults(),
    s = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: qr(new Uint8Array(s.authenticatorData)),
      clientDataJSON: qr(new Uint8Array(s.clientDataJSON)),
      signature: qr(new Uint8Array(s.signature)),
      userHandle: s.userHandle ? qr(new Uint8Array(s.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: r,
    authenticatorAttachment:
      (t = n.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function Ub(e) {
  return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function ug() {
  var e, t;
  return !!(
    Ve() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.create) == "function" &&
    typeof ((t = navigator == null ? void 0 : navigator.credentials) === null ||
    t === void 0
      ? void 0
      : t.get) == "function"
  );
}
async function QO(e) {
  try {
    const t = await navigator.credentials.create(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Kl("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Kl("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: zO({ error: t, options: e }) };
  }
}
async function JO(e) {
  try {
    const t = await navigator.credentials.get(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Kl("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Kl("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: BO({ error: t, options: e }) };
  }
}
const YO = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  XO = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function Gl(...e) {
  const t = (s) => s !== null && typeof s == "object" && !Array.isArray(s),
    n = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
    r = {};
  for (const s of e)
    if (s)
      for (const i in s) {
        const o = s[i];
        if (o !== void 0)
          if (Array.isArray(o)) r[i] = o;
          else if (n(o)) r[i] = o;
          else if (t(o)) {
            const a = r[i];
            t(a) ? (r[i] = Gl(a, o)) : (r[i] = Gl(o));
          } else r[i] = o;
      }
  return r;
}
function ZO(e, t) {
  return Gl(YO, e, t || {});
}
function ej(e, t) {
  return Gl(XO, e, t || {});
}
class tj {
  constructor(t) {
    ((this.client = t),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(t) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, t), { factorType: "webauthn" }),
    );
  }
  async _challenge(
    { factorId: t, webauthn: n, friendlyName: r, signal: s },
    i,
  ) {
    var o;
    try {
      const { data: a, error: l } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: n,
      });
      if (!a) return { data: null, error: l };
      const c = s ?? VO.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: d } = a.webauthn.credential_options.publicKey;
        if (!d.name) {
          const u = r;
          if (u) d.name = `${d.id}:${u}`;
          else {
            const h = (await this.client.getUser()).data.user,
              v =
                ((o = h == null ? void 0 : h.user_metadata) === null ||
                o === void 0
                  ? void 0
                  : o.name) ||
                (h == null ? void 0 : h.email) ||
                (h == null ? void 0 : h.id) ||
                "User";
            d.name = `${d.id}:${v}`;
          }
        }
        d.displayName || (d.displayName = d.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const d = ZO(
              a.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.create,
            ),
            { data: u, error: f } = await QO({ publicKey: d, signal: c });
          return u
            ? {
                data: {
                  factorId: t,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: u },
                },
                error: null,
              }
            : { data: null, error: f };
        }
        case "request": {
          const d = ej(
              a.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.request,
            ),
            { data: u, error: f } = await JO(
              Object.assign(Object.assign({}, a.webauthn.credential_options), {
                publicKey: d,
                signal: c,
              }),
            );
          return u
            ? {
                data: {
                  factorId: t,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: u },
                },
                error: null,
              }
            : { data: null, error: f };
        }
      }
    } catch (a) {
      return F(a)
        ? { data: null, error: a }
        : { data: null, error: new Br("Unexpected error in challenge", a) };
    }
  }
  async _verify({ challengeId: t, factorId: n, webauthn: r }) {
    return this.client.mfa.verify({ factorId: n, challengeId: t, webauthn: r });
  }
  async _authenticate(
    {
      factorId: t,
      webauthn: {
        rpId: n = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i,
  ) {
    if (!n)
      return {
        data: null,
        error: new Go("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!ug())
        return {
          data: null,
          error: new Br("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this.challenge(
        { factorId: t, webauthn: { rpId: n, rpOrigins: r }, signal: s },
        { request: i },
      );
      if (!o) return { data: null, error: a };
      const { webauthn: l } = o;
      return this._verify({
        factorId: t,
        challengeId: o.challengeId,
        webauthn: {
          type: l.type,
          rpId: n,
          rpOrigins: r,
          credential_response: l.credential_response,
        },
      });
    } catch (o) {
      return F(o)
        ? { data: null, error: o }
        : { data: null, error: new Br("Unexpected error in authenticate", o) };
    }
  }
  async _register(
    {
      friendlyName: t,
      webauthn: {
        rpId: n = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i,
  ) {
    if (!n)
      return {
        data: null,
        error: new Go("rpId is required for WebAuthn registration"),
      };
    try {
      if (!ug())
        return {
          data: null,
          error: new Br("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this._enroll({ friendlyName: t });
      if (!o)
        return (
          await this.client.mfa
            .listFactors()
            .then((d) => {
              var u;
              return (u = d.data) === null || u === void 0
                ? void 0
                : u.all.find(
                    (f) =>
                      f.factor_type === "webauthn" &&
                      f.friendly_name === t &&
                      f.status !== "unverified",
                  );
            })
            .then((d) =>
              d
                ? this.client.mfa.unenroll({
                    factorId: d == null ? void 0 : d.id,
                  })
                : void 0,
            ),
          { data: null, error: a }
        );
      const { data: l, error: c } = await this._challenge(
        {
          factorId: o.id,
          friendlyName: o.friendly_name,
          webauthn: { rpId: n, rpOrigins: r },
          signal: s,
        },
        { create: i },
      );
      return l
        ? this._verify({
            factorId: o.id,
            challengeId: l.challengeId,
            webauthn: {
              rpId: n,
              rpOrigins: r,
              type: l.webauthn.type,
              credential_response: l.webauthn.credential_response,
            },
          })
        : { data: null, error: c };
    } catch (o) {
      return F(o)
        ? { data: null, error: o }
        : { data: null, error: new Br("Unexpected error in register", o) };
    }
  }
}
$O();
const nj = {
  url: ZA,
  storageKey: eO,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: tO,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  skipAutoInitialize: !1,
};
async function dg(e, t, n) {
  return await n();
}
const Es = {};
class Qo {
  get jwks() {
    var t, n;
    return (n =
      (t = Es[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !==
      null && n !== void 0
      ? n
      : { keys: [] };
  }
  set jwks(t) {
    Es[this.storageKey] = Object.assign(
      Object.assign({}, Es[this.storageKey]),
      { jwks: t },
    );
  }
  get jwks_cached_at() {
    var t, n;
    return (n =
      (t = Es[this.storageKey]) === null || t === void 0
        ? void 0
        : t.cachedAt) !== null && n !== void 0
      ? n
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    Es[this.storageKey] = Object.assign(
      Object.assign({}, Es[this.storageKey]),
      { cachedAt: t },
    );
  }
  constructor(t) {
    var n, r, s;
    ((this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log));
    const i = Object.assign(Object.assign({}, nj), t);
    if (
      ((this.storageKey = i.storageKey),
      (this.instanceID =
        (n = Qo.nextInstanceID[this.storageKey]) !== null && n !== void 0
          ? n
          : 0),
      (Qo.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!i.debug),
      typeof i.debug == "function" && (this.logger = i.debug),
      this.instanceID > 0 && Ve())
    ) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(o), this.logDebugMessages && console.trace(o));
    }
    if (
      ((this.persistSession = i.persistSession),
      (this.autoRefreshToken = i.autoRefreshToken),
      (this.admin = new LO({ url: i.url, headers: i.headers, fetch: i.fetch })),
      (this.url = i.url),
      (this.headers = i.headers),
      (this.fetch = Db(i.fetch)),
      (this.lock = i.lock || dg),
      (this.detectSessionInUrl = i.detectSessionInUrl),
      (this.flowType = i.flowType),
      (this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader),
      (this.throwOnError = i.throwOnError),
      (this.lockAcquireTimeout = i.lockAcquireTimeout),
      i.lock
        ? (this.lock = i.lock)
        : this.persistSession &&
            Ve() &&
            !(
              (r = globalThis == null ? void 0 : globalThis.navigator) ===
                null || r === void 0
            ) &&
            r.locks
          ? (this.lock = DO)
          : (this.lock = dg),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new tj(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      this.persistSession
        ? (i.storage
            ? (this.storage = i.storage)
            : Lb()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}),
                (this.storage = lg(this.memoryStorage))),
          i.userStorage && (this.userStorage = i.userStorage))
        : ((this.memoryStorage = {}), (this.storage = lg(this.memoryStorage))),
      Ve() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey,
        );
      } catch (o) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          o,
        );
      }
      (s = this.broadcastChannel) === null ||
        s === void 0 ||
        s.addEventListener("message", async (o) => {
          this._debug(
            "received broadcast notification from other tab or client",
            o,
          );
          try {
            await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
          } catch (a) {
            this._debug("#broadcastChannel", "error", a);
          }
        });
    }
    i.skipAutoInitialize ||
      this.initialize().catch((o) => {
        this._debug("#initialize()", "error", o);
      });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(t) {
    if (this.throwOnError && t && t.error) throw t.error;
    return t;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${jb}) ${new Date().toISOString()}`;
  }
  _debug(...t) {
    return (
      this.logDebugMessages && this.logger(this._logPrefix(), ...t),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._initialize(),
          ))()),
        await this.initializePromise);
  }
  async _initialize() {
    var t;
    try {
      let n = {},
        r = "none";
      if (
        (Ve() &&
          ((n = mO(window.location.href)),
          this._isImplicitGrantCallback(n)
            ? (r = "implicit")
            : (await this._isPKCECallback(n)) && (r = "pkce")),
        Ve() && this.detectSessionInUrl && r !== "none")
      ) {
        const { data: s, error: i } = await this._getSessionFromURL(n, r);
        if (i) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              i,
            ),
            oO(i))
          ) {
            const l =
              (t = i.details) === null || t === void 0 ? void 0 : t.code;
            if (
              l === "identity_already_exists" ||
              l === "identity_not_found" ||
              l === "single_identity_not_deletable"
            )
              return { error: i };
          }
          return { error: i };
        }
        const { session: o, redirectType: a } = s;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            o,
            "redirect type",
            a,
          ),
          await this._saveSession(o),
          setTimeout(async () => {
            a === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o)
              : await this._notifyAllSubscribers("SIGNED_IN", o);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (n) {
      return F(n)
        ? this._returnResult({ error: n })
        : this._returnResult({
            error: new Br("Unexpected error during initialization", n),
          });
    } finally {
      (await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(t) {
    var n, r, s;
    try {
      const i = await H(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (n = t == null ? void 0 : t.options) === null || n === void 0
                  ? void 0
                  : n.data) !== null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (s = t == null ? void 0 : t.options) === null || s === void 0
                  ? void 0
                  : s.captchaToken,
            },
          },
          xform: Qt,
        }),
        { data: o, error: a } = i;
      if (a || !o)
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      const l = o.session,
        c = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: c, session: l }, error: null })
      );
    } catch (i) {
      if (F(i))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signUp(t) {
    var n, r, s;
    try {
      let i;
      if ("email" in t) {
        const { email: d, password: u, options: f } = t;
        let h = null,
          v = null;
        (this.flowType === "pkce" &&
          ([h, v] = await _s(this.storage, this.storageKey)),
          (i = await H(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: f == null ? void 0 : f.emailRedirectTo,
            body: {
              email: d,
              password: u,
              data:
                (n = f == null ? void 0 : f.data) !== null && n !== void 0
                  ? n
                  : {},
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
              code_challenge: h,
              code_challenge_method: v,
            },
            xform: Qt,
          })));
      } else if ("phone" in t) {
        const { phone: d, password: u, options: f } = t;
        i = await H(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: d,
            password: u,
            data:
              (r = f == null ? void 0 : f.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (s = f == null ? void 0 : f.channel) !== null && s !== void 0
                ? s
                : "sms",
            gotrue_meta_security: {
              captcha_token: f == null ? void 0 : f.captchaToken,
            },
          },
          xform: Qt,
        });
      } else
        throw new Ka(
          "You must provide either an email or phone number and a password",
        );
      const { data: o, error: a } = i;
      if (a || !o)
        return (
          await He(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: a })
        );
      const l = o.session,
        c = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: c, session: l }, error: null })
      );
    } catch (i) {
      if ((await He(this.storage, `${this.storageKey}-code-verifier`), F(i)))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithPassword(t) {
    try {
      let n;
      if ("email" in t) {
        const { email: i, password: o, options: a } = t;
        n = await H(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: og,
          },
        );
      } else if ("phone" in t) {
        const { phone: i, password: o, options: a } = t;
        n = await H(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: og,
          },
        );
      } else
        throw new Ka(
          "You must provide either an email or phone number and a password",
        );
      const { data: r, error: s } = n;
      if (s)
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      if (!r || !r.session || !r.user) {
        const i = new xs();
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      }
      return (
        r.session &&
          (await this._saveSession(r.session),
          await this._notifyAllSubscribers("SIGNED_IN", r.session)),
        this._returnResult({
          data: Object.assign(
            { user: r.user, session: r.session },
            r.weak_password ? { weakPassword: r.weak_password } : null,
          ),
          error: s,
        })
      );
    } catch (n) {
      if (F(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithOAuth(t) {
    var n, r, s, i;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo:
        (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
      scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams:
        (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect:
        (i = t.options) === null || i === void 0
          ? void 0
          : i.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(this.lockAcquireTimeout, async () =>
        this._exchangeCodeForSession(t),
      )
    );
  }
  async signInWithWeb3(t) {
    const { chain: n } = t;
    switch (n) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`);
    }
  }
  async signInWithEthereum(t) {
    var n, r, s, i, o, a, l, c, d, u, f;
    let h, v;
    if ("message" in t) ((h = t.message), (v = t.signature));
    else {
      const { chain: g, wallet: w, statement: p, options: m } = t;
      let y;
      if (Ve())
        if (typeof w == "object") y = w;
        else {
          const P = window;
          if (
            "ethereum" in P &&
            typeof P.ethereum == "object" &&
            "request" in P.ethereum &&
            typeof P.ethereum.request == "function"
          )
            y = P.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof w != "object" || !(m != null && m.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        y = w;
      }
      const _ = new URL(
          (n = m == null ? void 0 : m.url) !== null && n !== void 0
            ? n
            : window.location.href,
        ),
        S = await y
          .request({ method: "eth_requestAccounts" })
          .then((P) => P)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
            );
          });
      if (!S || S.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
        );
      const E = Mb(S[0]);
      let T =
        (r = m == null ? void 0 : m.signInWithEthereum) === null || r === void 0
          ? void 0
          : r.chainId;
      if (!T) {
        const P = await y.request({ method: "eth_chainId" });
        T = MO(P);
      }
      const C = {
        domain: _.host,
        address: E,
        statement: p,
        uri: _.href,
        version: "1",
        chainId: T,
        nonce:
          (s = m == null ? void 0 : m.signInWithEthereum) === null ||
          s === void 0
            ? void 0
            : s.nonce,
        issuedAt:
          (o =
            (i = m == null ? void 0 : m.signInWithEthereum) === null ||
            i === void 0
              ? void 0
              : i.issuedAt) !== null && o !== void 0
            ? o
            : new Date(),
        expirationTime:
          (a = m == null ? void 0 : m.signInWithEthereum) === null ||
          a === void 0
            ? void 0
            : a.expirationTime,
        notBefore:
          (l = m == null ? void 0 : m.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.notBefore,
        requestId:
          (c = m == null ? void 0 : m.signInWithEthereum) === null ||
          c === void 0
            ? void 0
            : c.requestId,
        resources:
          (d = m == null ? void 0 : m.signInWithEthereum) === null ||
          d === void 0
            ? void 0
            : d.resources,
      };
      ((h = FO(C)),
        (v = await y.request({ method: "personal_sign", params: [UO(h), E] })));
    }
    try {
      const { data: g, error: w } = await H(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: h, signature: v },
            !((u = t.options) === null || u === void 0) && u.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (f = t.options) === null || f === void 0
                        ? void 0
                        : f.captchaToken,
                  },
                }
              : null,
          ),
          xform: Qt,
        },
      );
      if (w) throw w;
      if (!g || !g.session || !g.user) {
        const p = new xs();
        return this._returnResult({
          data: { user: null, session: null },
          error: p,
        });
      }
      return (
        g.session &&
          (await this._saveSession(g.session),
          await this._notifyAllSubscribers("SIGNED_IN", g.session)),
        this._returnResult({ data: Object.assign({}, g), error: w })
      );
    } catch (g) {
      if (F(g))
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      throw g;
    }
  }
  async signInWithSolana(t) {
    var n, r, s, i, o, a, l, c, d, u, f, h;
    let v, g;
    if ("message" in t) ((v = t.message), (g = t.signature));
    else {
      const { chain: w, wallet: p, statement: m, options: y } = t;
      let _;
      if (Ve())
        if (typeof p == "object") _ = p;
        else {
          const E = window;
          if (
            "solana" in E &&
            typeof E.solana == "object" &&
            (("signIn" in E.solana && typeof E.solana.signIn == "function") ||
              ("signMessage" in E.solana &&
                typeof E.solana.signMessage == "function"))
          )
            _ = E.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof p != "object" || !(y != null && y.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        _ = p;
      }
      const S = new URL(
        (n = y == null ? void 0 : y.url) !== null && n !== void 0
          ? n
          : window.location.href,
      );
      if ("signIn" in _ && _.signIn) {
        const E = await _.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                y == null ? void 0 : y.signInWithSolana,
              ),
              { version: "1", domain: S.host, uri: S.href },
            ),
            m ? { statement: m } : null,
          ),
        );
        let T;
        if (Array.isArray(E) && E[0] && typeof E[0] == "object") T = E[0];
        else if (
          E &&
          typeof E == "object" &&
          "signedMessage" in E &&
          "signature" in E
        )
          T = E;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value",
          );
        if (
          "signedMessage" in T &&
          "signature" in T &&
          (typeof T.signedMessage == "string" ||
            T.signedMessage instanceof Uint8Array) &&
          T.signature instanceof Uint8Array
        )
          ((v =
            typeof T.signedMessage == "string"
              ? T.signedMessage
              : new TextDecoder().decode(T.signedMessage)),
            (g = T.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
          );
      } else {
        if (
          !("signMessage" in _) ||
          typeof _.signMessage != "function" ||
          !("publicKey" in _) ||
          typeof _ != "object" ||
          !_.publicKey ||
          !("toBase58" in _.publicKey) ||
          typeof _.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
          );
        v = [
          `${S.host} wants you to sign in with your Solana account:`,
          _.publicKey.toBase58(),
          ...(m ? ["", m, ""] : [""]),
          "Version: 1",
          `URI: ${S.href}`,
          `Issued At: ${(s = (r = y == null ? void 0 : y.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`,
          ...(!(
            (i = y == null ? void 0 : y.signInWithSolana) === null ||
            i === void 0
          ) && i.notBefore
            ? [`Not Before: ${y.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (o = y == null ? void 0 : y.signInWithSolana) === null ||
            o === void 0
          ) && o.expirationTime
            ? [`Expiration Time: ${y.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (a = y == null ? void 0 : y.signInWithSolana) === null ||
            a === void 0
          ) && a.chainId
            ? [`Chain ID: ${y.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (l = y == null ? void 0 : y.signInWithSolana) === null ||
            l === void 0
          ) && l.nonce
            ? [`Nonce: ${y.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (c = y == null ? void 0 : y.signInWithSolana) === null ||
            c === void 0
          ) && c.requestId
            ? [`Request ID: ${y.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (u =
              (d = y == null ? void 0 : y.signInWithSolana) === null ||
              d === void 0
                ? void 0
                : d.resources) === null || u === void 0
          ) && u.length
            ? [
                "Resources",
                ...y.signInWithSolana.resources.map((T) => `- ${T}`),
              ]
            : []),
        ].join(`
`);
        const E = await _.signMessage(new TextEncoder().encode(v), "utf8");
        if (!E || !(E instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
          );
        g = E;
      }
    }
    try {
      const { data: w, error: p } = await H(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: v, signature: qr(g) },
            !((f = t.options) === null || f === void 0) && f.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (h = t.options) === null || h === void 0
                        ? void 0
                        : h.captchaToken,
                  },
                }
              : null,
          ),
          xform: Qt,
        },
      );
      if (p) throw p;
      if (!w || !w.session || !w.user) {
        const m = new xs();
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      }
      return (
        w.session &&
          (await this._saveSession(w.session),
          await this._notifyAllSubscribers("SIGNED_IN", w.session)),
        this._returnResult({ data: Object.assign({}, w), error: p })
      );
    } catch (w) {
      if (F(w))
        return this._returnResult({
          data: { user: null, session: null },
          error: w,
        });
      throw w;
    }
  }
  async _exchangeCodeForSession(t) {
    const n = await Mr(this.storage, `${this.storageKey}-code-verifier`),
      [r, s] = (n ?? "").split("/");
    try {
      if (!r && this.flowType === "pkce") throw new aO();
      const { data: i, error: o } = await H(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: r },
          xform: Qt,
        },
      );
      if ((await He(this.storage, `${this.storageKey}-code-verifier`), o))
        throw o;
      if (!i || !i.session || !i.user) {
        const a = new xs();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a,
        });
      }
      return (
        i.session &&
          (await this._saveSession(i.session),
          await this._notifyAllSubscribers("SIGNED_IN", i.session)),
        this._returnResult({
          data: Object.assign(Object.assign({}, i), {
            redirectType: s ?? null,
          }),
          error: o,
        })
      );
    } catch (i) {
      if ((await He(this.storage, `${this.storageKey}-code-verifier`), F(i)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithIdToken(t) {
    try {
      const {
          options: n,
          provider: r,
          token: s,
          access_token: i,
          nonce: o,
        } = t,
        a = await H(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: s,
              access_token: i,
              nonce: o,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            xform: Qt,
          },
        ),
        { data: l, error: c } = a;
      if (c)
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      if (!l || !l.session || !l.user) {
        const d = new xs();
        return this._returnResult({
          data: { user: null, session: null },
          error: d,
        });
      }
      return (
        l.session &&
          (await this._saveSession(l.session),
          await this._notifyAllSubscribers("SIGNED_IN", l.session)),
        this._returnResult({ data: l, error: c })
      );
    } catch (n) {
      if (F(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async signInWithOtp(t) {
    var n, r, s, i, o;
    try {
      if ("email" in t) {
        const { email: a, options: l } = t;
        let c = null,
          d = null;
        this.flowType === "pkce" &&
          ([c, d] = await _s(this.storage, this.storageKey));
        const { error: u } = await H(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data:
              (n = l == null ? void 0 : l.data) !== null && n !== void 0
                ? n
                : {},
            create_user:
              (r = l == null ? void 0 : l.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: c,
            code_challenge_method: d,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      }
      if ("phone" in t) {
        const { phone: a, options: l } = t,
          { data: c, error: d } = await H(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: a,
                data:
                  (s = l == null ? void 0 : l.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (i = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  i !== void 0
                    ? i
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (o = l == null ? void 0 : l.channel) !== null && o !== void 0
                    ? o
                    : "sms",
              },
            },
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: c == null ? void 0 : c.message_id,
          },
          error: d,
        });
      }
      throw new Ka("You must provide either an email or phone number.");
    } catch (a) {
      if ((await He(this.storage, `${this.storageKey}-code-verifier`), F(a)))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async verifyOtp(t) {
    var n, r;
    try {
      let s, i;
      "options" in t &&
        ((s = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo),
        (i =
          (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: o, error: a } = await H(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: i },
          }),
          redirectTo: s,
          xform: Qt,
        },
      );
      if (a) throw a;
      if (!o) throw new Error("An error occurred on token verification.");
      const l = o.session,
        c = o.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            l,
          )),
        this._returnResult({ data: { user: c, session: l }, error: null })
      );
    } catch (s) {
      if (F(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithSSO(t) {
    var n, r, s, i, o;
    try {
      let a = null,
        l = null;
      this.flowType === "pkce" &&
        ([a, l] = await _s(this.storage, this.storageKey));
      const c = await H(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in t ? { provider_id: t.providerId } : null,
                ),
                "domain" in t ? { domain: t.domain } : null,
              ),
              {
                redirect_to:
                  (r =
                    (n = t.options) === null || n === void 0
                      ? void 0
                      : n.redirectTo) !== null && r !== void 0
                    ? r
                    : void 0,
              },
            ),
            !((s = t == null ? void 0 : t.options) === null || s === void 0) &&
              s.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: t.options.captchaToken,
                  },
                }
              : null,
          ),
          {
            skip_http_redirect: !0,
            code_challenge: a,
            code_challenge_method: l,
          },
        ),
        headers: this.headers,
        xform: jO,
      });
      return (
        !((i = c.data) === null || i === void 0) &&
          i.url &&
          Ve() &&
          !(
            !((o = t.options) === null || o === void 0) && o.skipBrowserRedirect
          ) &&
          window.location.assign(c.data.url),
        this._returnResult(c)
      );
    } catch (a) {
      if ((await He(this.storage, `${this.storageKey}-code-verifier`), F(a)))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._reauthenticate(),
      )
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: n },
          error: r,
        } = t;
        if (r) throw r;
        if (!n) throw new _t();
        const { error: s } = await H(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: n.access_token },
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      });
    } catch (t) {
      if (F(t))
        return this._returnResult({
          data: { user: null, session: null },
          error: t,
        });
      throw t;
    }
  }
  async resend(t) {
    try {
      const n = `${this.url}/resend`;
      if ("email" in t) {
        const { email: r, type: s, options: i } = t,
          { error: o } = await H(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              email: r,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
            redirectTo: i == null ? void 0 : i.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      } else if ("phone" in t) {
        const { phone: r, type: s, options: i } = t,
          { data: o, error: a } = await H(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              phone: r,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: o == null ? void 0 : o.message_id,
          },
          error: a,
        });
      }
      throw new Ka(
        "You must provide either an email or phone number and a type",
      );
    } catch (n) {
      if (F(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (n) => n),
      )
    );
  }
  async _acquireLock(t, n) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          s = (async () => (await r, await n()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await s;
              } catch {}
            })(),
          ),
          s
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey,
        );
        try {
          this.lockAcquired = !0;
          const r = n();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })(),
            ),
              await r;
            this.pendingInLock.length;
          ) {
            const s = [...this.pendingInLock];
            (await Promise.all(s), this.pendingInLock.splice(0, s.length));
          }
          return await r;
        } finally {
          (this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey,
          ),
            (this.lockAcquired = !1));
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const n = await this.__loadSession();
      return await t(n);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    (this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack,
        ));
    try {
      let t = null;
      const n = await Mr(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", n),
        n !== null &&
          (this._isValidSession(n)
            ? (t = n)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid",
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const r = t.expires_at ? t.expires_at * 1e3 - Date.now() < mu : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${r ? "" : " not"} expired`,
          "expires_at",
          t.expires_at,
        ),
        !r)
      ) {
        if (this.userStorage) {
          const o = await Mr(this.userStorage, this.storageKey + "-user");
          o != null && o.user ? (t.user = o.user) : (t.user = vu());
        }
        if (
          this.storage.isServer &&
          t.user &&
          !t.user.__isUserNotAvailableProxy
        ) {
          const o = { value: this.suppressGetSessionWarning };
          ((t.user = RO(t.user, o)),
            o.value && (this.suppressGetSessionWarning = !0));
        }
        return { data: { session: t }, error: null };
      }
      const { data: s, error: i } = await this._callRefreshToken(
        t.refresh_token,
      );
      return i
        ? this._returnResult({ data: { session: null }, error: i })
        : this._returnResult({ data: { session: s }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(t) {
    if (t) return await this._getUser(t);
    await this.initializePromise;
    const n = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser(),
    );
    return (n.data.user && (this.suppressGetSessionWarning = !0), n);
  }
  async _getUser(t) {
    try {
      return t
        ? await H(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: ar,
          })
        : await this._useSession(async (n) => {
            var r, s, i;
            const { data: o, error: a } = n;
            if (a) throw a;
            return !(
              !((r = o.session) === null || r === void 0) && r.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new _t() }
              : await H(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (i =
                      (s = o.session) === null || s === void 0
                        ? void 0
                        : s.access_token) !== null && i !== void 0
                      ? i
                      : void 0,
                  xform: ar,
                });
          });
    } catch (n) {
      if (F(n))
        return (
          qa(n) &&
            (await this._removeSession(),
            await He(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: n })
        );
      throw n;
    }
  }
  async updateUser(t, n = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(t, n),
      )
    );
  }
  async _updateUser(t, n = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: s, error: i } = r;
        if (i) throw i;
        if (!s.session) throw new _t();
        const o = s.session;
        let a = null,
          l = null;
        this.flowType === "pkce" &&
          t.email != null &&
          ([a, l] = await _s(this.storage, this.storageKey));
        const { data: c, error: d } = await H(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: n == null ? void 0 : n.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: a,
              code_challenge_method: l,
            }),
            jwt: o.access_token,
            xform: ar,
          },
        );
        if (d) throw d;
        return (
          (o.user = c.user),
          await this._saveSession(o),
          await this._notifyAllSubscribers("USER_UPDATED", o),
          this._returnResult({ data: { user: o.user }, error: null })
        );
      });
    } catch (r) {
      if ((await He(this.storage, `${this.storageKey}-code-verifier`), F(r)))
        return this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._setSession(t),
      )
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new _t();
      const n = Date.now() / 1e3;
      let r = n,
        s = !0,
        i = null;
      const { payload: o } = Qa(t.access_token);
      if ((o.exp && ((r = o.exp), (s = r <= n)), s)) {
        const { data: a, error: l } = await this._callRefreshToken(
          t.refresh_token,
        );
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        if (!a) return { data: { user: null, session: null }, error: null };
        i = a;
      } else {
        const { data: a, error: l } = await this._getUser(t.access_token);
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        ((i = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: r - n,
          expires_at: r,
        }),
          await this._saveSession(i),
          await this._notifyAllSubscribers("SIGNED_IN", i));
      }
      return this._returnResult({
        data: { user: i.user, session: i },
        error: null,
      });
    } catch (n) {
      if (F(n))
        return this._returnResult({
          data: { session: null, user: null },
          error: n,
        });
      throw n;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._refreshSession(t),
      )
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!t) {
          const { data: o, error: a } = n;
          if (a) throw a;
          t = (r = o.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new _t();
        const { data: s, error: i } = await this._callRefreshToken(
          t.refresh_token,
        );
        return i
          ? this._returnResult({
              data: { user: null, session: null },
              error: i,
            })
          : s
            ? this._returnResult({
                data: { user: s.user, session: s },
                error: null,
              })
            : this._returnResult({
                data: { user: null, session: null },
                error: null,
              });
      });
    } catch (n) {
      if (F(n))
        return this._returnResult({
          data: { user: null, session: null },
          error: n,
        });
      throw n;
    }
  }
  async _getSessionFromURL(t, n) {
    try {
      if (!Ve()) throw new Ga("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new Ga(
          t.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: t.error || "unspecified_error",
            code: t.error_code || "unspecified_code",
          },
        );
      switch (n) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Zm("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Ga("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (n === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
        )
          throw new Zm("No code detected.");
        const { data: m, error: y } = await this._exchangeCodeForSession(
          t.code,
        );
        if (y) throw y;
        const _ = new URL(window.location.href);
        return (
          _.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", _.toString()),
          { data: { session: m.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: r,
        provider_refresh_token: s,
        access_token: i,
        refresh_token: o,
        expires_in: a,
        expires_at: l,
        token_type: c,
      } = t;
      if (!i || !a || !o || !c) throw new Ga("No session defined in URL");
      const d = Math.round(Date.now() / 1e3),
        u = parseInt(a);
      let f = d + u;
      l && (f = parseInt(l));
      const h = f - d;
      h * 1e3 <= Rs &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${u}s`,
        );
      const v = f - u;
      d - v >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            v,
            f,
            d,
          )
        : d - v < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            v,
            f,
            d,
          );
      const { data: g, error: w } = await this._getUser(i);
      if (w) throw w;
      const p = {
        provider_token: r,
        provider_refresh_token: s,
        access_token: i,
        expires_in: u,
        expires_at: f,
        refresh_token: o,
        token_type: c,
        user: g.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: p, redirectType: t.type },
          error: null,
        })
      );
    } catch (r) {
      if (F(r))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: r,
        });
      throw r;
    }
  }
  _isImplicitGrantCallback(t) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), t)
      : !!(t.access_token || t.error_description);
  }
  async _isPKCECallback(t) {
    const n = await Mr(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && n);
  }
  async signOut(t = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._signOut(t),
      )
    );
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (n) => {
      var r;
      const { data: s, error: i } = n;
      if (i && !qa(i)) return this._returnResult({ error: i });
      const o =
        (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, t);
        if (
          a &&
          !(
            (iO(a) &&
              (a.status === 404 || a.status === 401 || a.status === 403)) ||
            qa(a)
          )
        )
          return this._returnResult({ error: a });
      }
      return (
        t !== "others" &&
          (await this._removeSession(),
          await He(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(t) {
    const n = pO(),
      r = {
        id: n,
        callback: t,
        unsubscribe: () => {
          (this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            n,
          ),
            this.stateChangeEmitters.delete(n));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", n),
      this.stateChangeEmitters.set(n, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(n);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (n) => {
      var r, s;
      try {
        const {
          data: { session: i },
          error: o,
        } = n;
        if (o) throw o;
        (await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", i)),
          this._debug("INITIAL_SESSION", "callback id", t, "session", i));
      } catch (i) {
        (await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0
          ? void 0
          : s.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", t, "error", i),
          qa(i) ? console.warn(i) : console.error(i));
      }
    });
  }
  async resetPasswordForEmail(t, n = {}) {
    let r = null,
      s = null;
    this.flowType === "pkce" &&
      ([r, s] = await _s(this.storage, this.storageKey, !0));
    try {
      return await H(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: r,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: n.captchaToken },
        },
        headers: this.headers,
        redirectTo: n.redirectTo,
      });
    } catch (i) {
      if ((await He(this.storage, `${this.storageKey}-code-verifier`), F(i)))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r) throw r;
      return this._returnResult({
        data: {
          identities: (t = n.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      });
    } catch (n) {
      if (F(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async linkIdentity(t) {
    return "token" in t
      ? this.linkIdentityIdToken(t)
      : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var n;
    try {
      const { data: r, error: s } = await this._useSession(async (i) => {
        var o, a, l, c, d;
        const { data: u, error: f } = i;
        if (f) throw f;
        const h = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
            scopes:
              (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
            queryParams:
              (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          },
        );
        return await H(this.fetch, "GET", h, {
          headers: this.headers,
          jwt:
            (d =
              (c = u.session) === null || c === void 0
                ? void 0
                : c.access_token) !== null && d !== void 0
              ? d
              : void 0,
        });
      });
      if (s) throw s;
      return (
        Ve() &&
          !(
            !((n = t.options) === null || n === void 0) && n.skipBrowserRedirect
          ) &&
          window.location.assign(r == null ? void 0 : r.url),
        this._returnResult({
          data: { provider: t.provider, url: r == null ? void 0 : r.url },
          error: null,
        })
      );
    } catch (r) {
      if (F(r))
        return this._returnResult({
          data: { provider: t.provider, url: null },
          error: r,
        });
      throw r;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (n) => {
      var r;
      try {
        const {
          error: s,
          data: { session: i },
        } = n;
        if (s) throw s;
        const {
            options: o,
            provider: a,
            token: l,
            access_token: c,
            nonce: d,
          } = t,
          u = await H(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.access_token) !== null &&
                r !== void 0
                  ? r
                  : void 0,
              body: {
                provider: a,
                id_token: l,
                access_token: c,
                nonce: d,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: o == null ? void 0 : o.captchaToken,
                },
              },
              xform: Qt,
            },
          ),
          { data: f, error: h } = u;
        return h
          ? this._returnResult({
              data: { user: null, session: null },
              error: h,
            })
          : !f || !f.session || !f.user
            ? this._returnResult({
                data: { user: null, session: null },
                error: new xs(),
              })
            : (f.session &&
                (await this._saveSession(f.session),
                await this._notifyAllSubscribers("USER_UPDATED", f.session)),
              this._returnResult({ data: f, error: h }));
      } catch (s) {
        if ((await He(this.storage, `${this.storageKey}-code-verifier`), F(s)))
          return this._returnResult({
            data: { user: null, session: null },
            error: s,
          });
        throw s;
      }
    });
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: i, error: o } = n;
        if (o) throw o;
        return await H(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (s =
                (r = i.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && s !== void 0
                ? s
                : void 0,
          },
        );
      });
    } catch (n) {
      if (F(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _refreshAccessToken(t) {
    const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      const r = Date.now();
      return await yO(
        async (s) => (
          s > 0 && (await vO(200 * Math.pow(2, s - 1))),
          this._debug(n, "refreshing attempt", s),
          await H(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: Qt },
          )
        ),
        (s, i) => {
          const o = 200 * Math.pow(2, s);
          return i && gu(i) && Date.now() + o - r < Rs;
        },
      );
    } catch (r) {
      if ((this._debug(n, "error", r), F(r)))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    } finally {
      this._debug(n, "end");
    }
  }
  _isValidSession(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      "access_token" in t &&
      "refresh_token" in t &&
      "expires_at" in t
    );
  }
  async _handleProviderSignIn(t, n) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        t,
        "options",
        n,
        "url",
        r,
      ),
      Ve() && !n.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: t, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t, n;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const s = await Mr(this.storage, this.storageKey);
      if (s && this.userStorage) {
        let o = await Mr(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !o &&
          ((o = { user: s.user }),
          await Ps(this.userStorage, this.storageKey + "-user", o)),
          (s.user =
            (t = o == null ? void 0 : o.user) !== null && t !== void 0
              ? t
              : vu()));
      } else if (s && !s.user && !s.user) {
        const o = await Mr(this.storage, this.storageKey + "-user");
        o && o != null && o.user
          ? ((s.user = o.user),
            await He(this.storage, this.storageKey + "-user"),
            await Ps(this.storage, this.storageKey, s))
          : (s.user = vu());
      }
      if (
        (this._debug(r, "session from storage", s), !this._isValidSession(s))
      ) {
        (this._debug(r, "session is not valid"),
          s !== null && (await this._removeSession()));
        return;
      }
      const i =
        ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 -
          Date.now() <
        mu;
      if (
        (this._debug(
          r,
          `session has${i ? "" : " not"} expired with margin of ${mu}s`,
        ),
        i)
      ) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: o } = await this._callRefreshToken(s.refresh_token);
          o &&
            (console.error(o),
            gu(o) ||
              (this._debug(
                r,
                "refresh failed with a non-retryable error, removing the session",
                o,
              ),
              await this._removeSession()));
        }
      } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(s.access_token);
          !a && o != null && o.user
            ? ((s.user = o.user),
              await this._saveSession(s),
              await this._notifyAllSubscribers("SIGNED_IN", s))
            : this._debug(
                r,
                "could not get user data, skipping SIGNED_IN notification",
              );
        } catch (o) {
          (console.error("Error getting user data:", o),
            this._debug(
              r,
              "error getting user data, skipping SIGNED_IN notification",
              o,
            ));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      (this._debug(r, "error", s), console.error(s));
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(t) {
    var n, r;
    if (!t) throw new _t();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new Rc();
      const { data: i, error: o } = await this._refreshAccessToken(t);
      if (o) throw o;
      if (!i.session) throw new _t();
      (await this._saveSession(i.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session));
      const a = { data: i.session, error: null };
      return (this.refreshingDeferred.resolve(a), a);
    } catch (i) {
      if ((this._debug(s, "error", i), F(i))) {
        const o = { data: null, error: i };
        return (
          gu(i) || (await this._removeSession()),
          (n = this.refreshingDeferred) === null ||
            n === void 0 ||
            n.resolve(o),
          o
        );
      }
      throw (
        (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i),
        i
      );
    } finally {
      ((this.refreshingDeferred = null), this._debug(s, "end"));
    }
  }
  async _notifyAllSubscribers(t, n, r = !0) {
    const s = `#_notifyAllSubscribers(${t})`;
    this._debug(s, "begin", n, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: t, session: n });
      const i = [],
        o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
          try {
            await a.callback(t, n);
          } catch (l) {
            i.push(l);
          }
        });
      if ((await Promise.all(o), i.length > 0)) {
        for (let a = 0; a < i.length; a += 1) console.error(i[a]);
        throw i[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  async _saveSession(t) {
    (this._debug("#_saveSession()", t),
      (this.suppressGetSessionWarning = !0),
      await He(this.storage, `${this.storageKey}-code-verifier`));
    const n = Object.assign({}, t),
      r = n.user && n.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r &&
        n.user &&
        (await Ps(this.userStorage, this.storageKey + "-user", {
          user: n.user,
        }));
      const s = Object.assign({}, n);
      delete s.user;
      const i = sg(s);
      await Ps(this.storage, this.storageKey, i);
    } else {
      const s = sg(n);
      await Ps(this.storage, this.storageKey, s);
    }
  }
  async _removeSession() {
    (this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await He(this.storage, this.storageKey),
      await He(this.storage, this.storageKey + "-code-verifier"),
      await He(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await He(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        Ve() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", t);
    } catch (n) {
      console.error("removing visibilitychange callback failed", n);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const t = setInterval(() => this._autoRefreshTokenTick(), Rs);
    ((this.autoRefreshTicker = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(t));
    const n = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = n),
      n && typeof n == "object" && typeof n.unref == "function"
        ? n.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(n));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), t && clearInterval(t));
    const n = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), n && clearTimeout(n));
  }
  async startAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._startAutoRefresh());
  }
  async stopAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._stopAutoRefresh());
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (n) => {
              const {
                data: { session: r },
              } = n;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((r.expires_at * 1e3 - t) / Rs);
              (this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${s} ticks, a tick lasts ${Rs}ms, refresh threshold is ${Qd} ticks`,
              ),
                s <= Qd && (await this._callRefreshToken(r.refresh_token)));
            });
          } catch (n) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              n,
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof $b)
        this._debug("auto refresh token tick lock not available");
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !Ve() || !(window != null && window.addEventListener))
    )
      return (this.autoRefreshToken && this.startAutoRefresh(), !1);
    try {
      ((this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (t) {
          this._debug("#visibilityChangedCallback", "error", t);
        }
      }),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback,
          ),
        await this._onVisibilityChanged(!0));
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  async _onVisibilityChanged(t) {
    const n = `#_onVisibilityChanged(${t})`;
    (this._debug(n, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  n,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh());
  }
  async _getUrlForProvider(t, n, r) {
    const s = [`provider=${encodeURIComponent(n)}`];
    if (
      (r != null &&
        r.redirectTo &&
        s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [i, o] = await _s(this.storage, this.storageKey),
        a = new URLSearchParams({
          code_challenge: `${encodeURIComponent(i)}`,
          code_challenge_method: `${encodeURIComponent(o)}`,
        });
      s.push(a.toString());
    }
    if (r != null && r.queryParams) {
      const i = new URLSearchParams(r.queryParams);
      s.push(i.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${t}?${s.join("&")}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: s, error: i } = n;
        return i
          ? this._returnResult({ data: null, error: i })
          : await H(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
              headers: this.headers,
              jwt:
                (r = s == null ? void 0 : s.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            });
      });
    } catch (n) {
      if (F(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: i, error: o } = n;
        if (o) return this._returnResult({ data: null, error: o });
        const a = Object.assign(
            { friendly_name: t.friendlyName, factor_type: t.factorType },
            t.factorType === "phone"
              ? { phone: t.phone }
              : t.factorType === "totp"
                ? { issuer: t.issuer }
                : {},
          ),
          { data: l, error: c } = await H(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: a,
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            },
          );
        return c
          ? this._returnResult({ data: null, error: c })
          : (t.factorType === "totp" &&
              l.type === "totp" &&
              !((s = l == null ? void 0 : l.totp) === null || s === void 0) &&
              s.qr_code &&
              (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
            this._returnResult({ data: l, error: null }));
      });
    } catch (n) {
      if (F(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _verify(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: s, error: i } = n;
          if (i) return this._returnResult({ data: null, error: i });
          const o = Object.assign(
              { challenge_id: t.challengeId },
              "webauthn" in t
                ? {
                    webauthn: Object.assign(Object.assign({}, t.webauthn), {
                      credential_response:
                        t.webauthn.type === "create"
                          ? KO(t.webauthn.credential_response)
                          : GO(t.webauthn.credential_response),
                    }),
                  }
                : { code: t.code },
            ),
            { data: a, error: l } = await H(
              this.fetch,
              "POST",
              `${this.url}/factors/${t.factorId}/verify`,
              {
                body: o,
                headers: this.headers,
                jwt:
                  (r = s == null ? void 0 : s.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              },
            );
          return l
            ? this._returnResult({ data: null, error: l })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                  a,
                ),
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
              this._returnResult({ data: a, error: l }));
        });
      } catch (n) {
        if (F(n)) return this._returnResult({ data: null, error: n });
        throw n;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: s, error: i } = n;
          if (i) return this._returnResult({ data: null, error: i });
          const o = await H(
            this.fetch,
            "POST",
            `${this.url}/factors/${t.factorId}/challenge`,
            {
              body: t,
              headers: this.headers,
              jwt:
                (r = s == null ? void 0 : s.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            },
          );
          if (o.error) return o;
          const { data: a } = o;
          if (a.type !== "webauthn") return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      {
                        publicKey: WO(a.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      {
                        publicKey: qO(a.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (n) {
        if (F(n)) return this._returnResult({ data: null, error: n });
        throw n;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: n, error: r } = await this._challenge({
      factorId: t.factorId,
    });
    return r
      ? this._returnResult({ data: null, error: r })
      : await this._verify({
          factorId: t.factorId,
          challengeId: n.id,
          code: t.code,
        });
  }
  async _listFactors() {
    var t;
    const {
      data: { user: n },
      error: r,
    } = await this.getUser();
    if (r) return { data: null, error: r };
    const s = { all: [], phone: [], totp: [], webauthn: [] };
    for (const i of (t = n == null ? void 0 : n.factors) !== null &&
    t !== void 0
      ? t
      : [])
      (s.all.push(i), i.status === "verified" && s[i.factor_type].push(i));
    return { data: s, error: null };
  }
  async _getAuthenticatorAssuranceLevel(t) {
    var n, r, s, i;
    if (t)
      try {
        const { payload: h } = Qa(t);
        let v = null;
        h.aal && (v = h.aal);
        let g = v;
        const {
          data: { user: w },
          error: p,
        } = await this.getUser(t);
        if (p) return this._returnResult({ data: null, error: p });
        ((r =
          (n = w == null ? void 0 : w.factors) === null || n === void 0
            ? void 0
            : n.filter((_) => _.status === "verified")) !== null && r !== void 0
          ? r
          : []
        ).length > 0 && (g = "aal2");
        const y = h.amr || [];
        return {
          data: {
            currentLevel: v,
            nextLevel: g,
            currentAuthenticationMethods: y,
          },
          error: null,
        };
      } catch (h) {
        if (F(h)) return this._returnResult({ data: null, error: h });
        throw h;
      }
    const {
      data: { session: o },
      error: a,
    } = await this.getSession();
    if (a) return this._returnResult({ data: null, error: a });
    if (!o)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: l } = Qa(o.access_token);
    let c = null;
    l.aal && (c = l.aal);
    let d = c;
    ((i =
      (s = o.user.factors) === null || s === void 0
        ? void 0
        : s.filter((h) => h.status === "verified")) !== null && i !== void 0
      ? i
      : []
    ).length > 0 && (d = "aal2");
    const f = l.amr || [];
    return {
      data: { currentLevel: c, nextLevel: d, currentAuthenticationMethods: f },
      error: null,
    };
  }
  async _getAuthorizationDetails(t) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        return s
          ? this._returnResult({ data: null, error: s })
          : r
            ? await H(
                this.fetch,
                "GET",
                `${this.url}/oauth/authorizations/${t}`,
                {
                  headers: this.headers,
                  jwt: r.access_token,
                  xform: (i) => ({ data: i, error: null }),
                },
              )
            : this._returnResult({ data: null, error: new _t() });
      });
    } catch (n) {
      if (F(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _approveAuthorization(t, n) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: i,
        } = r;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new _t() });
        const o = await H(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "approve" },
            xform: (a) => ({ data: a, error: null }),
          },
        );
        return (
          o.data &&
            o.data.redirect_url &&
            Ve() &&
            !(n != null && n.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (r) {
      if (F(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _denyAuthorization(t, n) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: s },
          error: i,
        } = r;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new _t() });
        const o = await H(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "deny" },
            xform: (a) => ({ data: a, error: null }),
          },
        );
        return (
          o.data &&
            o.data.redirect_url &&
            Ve() &&
            !(n != null && n.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (r) {
      if (F(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: n },
          error: r,
        } = t;
        return r
          ? this._returnResult({ data: null, error: r })
          : n
            ? await H(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: n.access_token,
                xform: (s) => ({ data: s, error: null }),
              })
            : this._returnResult({ data: null, error: new _t() });
      });
    } catch (t) {
      if (F(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _revokeOAuthGrant(t) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: r },
          error: s,
        } = n;
        return s
          ? this._returnResult({ data: null, error: s })
          : r
            ? (await H(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: r.access_token,
                query: { client_id: t.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new _t() });
      });
    } catch (n) {
      if (F(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async fetchJwk(t, n = { keys: [] }) {
    let r = n.keys.find((a) => a.kid === t);
    if (r) return r;
    const s = Date.now();
    if (
      ((r = this.jwks.keys.find((a) => a.kid === t)),
      r && this.jwks_cached_at + rO > s)
    )
      return r;
    const { data: i, error: o } = await H(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers },
    );
    if (o) throw o;
    return !i.keys ||
      i.keys.length === 0 ||
      ((this.jwks = i),
      (this.jwks_cached_at = s),
      (r = i.keys.find((a) => a.kid === t)),
      !r)
      ? null
      : r;
  }
  async getClaims(t, n = {}) {
    try {
      let r = t;
      if (!r) {
        const { data: h, error: v } = await this.getSession();
        if (v || !h.session)
          return this._returnResult({ data: null, error: v });
        r = h.session.access_token;
      }
      const {
        header: s,
        payload: i,
        signature: o,
        raw: { header: a, payload: l },
      } = Qa(r);
      (n != null && n.allowExpired) || kO(i.exp);
      const c =
        !s.alg ||
        s.alg.startsWith("HS") ||
        !s.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              s.kid,
              n != null && n.keys
                ? { keys: n.keys }
                : n == null
                  ? void 0
                  : n.jwks,
            );
      if (!c) {
        const { error: h } = await this.getUser(r);
        if (h) throw h;
        return { data: { claims: i, header: s, signature: o }, error: null };
      }
      const d = TO(s.alg),
        u = await crypto.subtle.importKey("jwk", c, d, !0, ["verify"]);
      if (!(await crypto.subtle.verify(d, u, o, hO(`${a}.${l}`))))
        throw new Xd("Invalid JWT signature");
      return { data: { claims: i, header: s, signature: o }, error: null };
    } catch (r) {
      if (F(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
}
Qo.nextInstanceID = {};
const rj = Qo,
  sj = "2.102.1";
let eo = "";
typeof Deno < "u"
  ? (eo = "deno")
  : typeof document < "u"
    ? (eo = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
      ? (eo = "react-native")
      : (eo = "node");
const ij = { "X-Client-Info": `supabase-js-${eo}/${sj}` },
  oj = { headers: ij },
  aj = { schema: "public" },
  lj = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  cj = {};
function Jo(e) {
  "@babel/helpers - typeof";
  return (
    (Jo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Jo(e)
  );
}
function uj(e, t) {
  if (Jo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Jo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dj(e) {
  var t = uj(e, "string");
  return Jo(t) == "symbol" ? t : t + "";
}
function hj(e, t, n) {
  return (
    (t = dj(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function hg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hg(Object(n), !0).forEach(function (r) {
          hj(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hg(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
const fj = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  pj = () => Headers,
  mj = (e, t, n) => {
    const r = fj(n),
      s = pj();
    return async (i, o) => {
      var a;
      const l = (a = await t()) !== null && a !== void 0 ? a : e;
      let c = new s(o == null ? void 0 : o.headers);
      return (
        c.has("apikey") || c.set("apikey", e),
        c.has("Authorization") || c.set("Authorization", `Bearer ${l}`),
        r(i, Re(Re({}, o), {}, { headers: c }))
      );
    };
  };
function gj(e) {
  return e.endsWith("/") ? e : e + "/";
}
function vj(e, t) {
  var n, r;
  const { db: s, auth: i, realtime: o, global: a } = e,
    { db: l, auth: c, realtime: d, global: u } = t,
    f = {
      db: Re(Re({}, l), s),
      auth: Re(Re({}, c), i),
      realtime: Re(Re({}, d), o),
      storage: {},
      global: Re(
        Re(Re({}, u), a),
        {},
        {
          headers: Re(
            Re(
              {},
              (n = u == null ? void 0 : u.headers) !== null && n !== void 0
                ? n
                : {},
            ),
            (r = a == null ? void 0 : a.headers) !== null && r !== void 0
              ? r
              : {},
          ),
        },
      ),
      accessToken: async () => "",
    };
  return (
    e.accessToken ? (f.accessToken = e.accessToken) : delete f.accessToken,
    f
  );
}
function yj(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(gj(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var wj = class extends rj {
    constructor(e) {
      super(e);
    }
  },
  bj = class {
    constructor(e, t, n) {
      var r, s;
      ((this.supabaseUrl = e), (this.supabaseKey = t));
      const i = yj(e);
      if (!t) throw new Error("supabaseKey is required.");
      ((this.realtimeUrl = new URL("realtime/v1", i)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws",
        )),
        (this.authUrl = new URL("auth/v1", i)),
        (this.storageUrl = new URL("storage/v1", i)),
        (this.functionsUrl = new URL("functions/v1", i)));
      const o = `sb-${i.hostname.split(".")[0]}-auth-token`,
        a = {
          db: aj,
          realtime: cj,
          auth: Re(Re({}, lj), {}, { storageKey: o }),
          global: oj,
        },
        l = vj(n ?? {}, a);
      if (
        ((this.storageKey =
          (r = l.auth.storageKey) !== null && r !== void 0 ? r : ""),
        (this.headers =
          (s = l.global.headers) !== null && s !== void 0 ? s : {}),
        l.accessToken)
      )
        ((this.accessToken = l.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (d, u) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`,
                );
              },
            },
          )));
      else {
        var c;
        this.auth = this._initSupabaseAuthClient(
          (c = l.auth) !== null && c !== void 0 ? c : {},
          this.headers,
          l.global.fetch,
        );
      }
      ((this.fetch = mj(t, this._getAccessToken.bind(this), l.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          Re(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            l.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((d) => this.realtime.setAuth(d))
            .catch((d) =>
              console.warn("Failed to set initial Realtime auth token:", d),
            ),
        (this.rest = new zP(new URL("rest/v1", i).href, {
          headers: this.headers,
          schema: l.db.schema,
          fetch: this.fetch,
          timeout: l.db.timeout,
          urlLengthLimit: l.db.urlLengthLimit,
        })),
        (this.storage = new XA(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          n == null ? void 0 : n.storage,
        )),
        l.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new OP(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, n = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(e, t, n);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var e = this,
        t,
        n;
      if (e.accessToken) return await e.accessToken();
      const { data: r } = await e.auth.getSession();
      return (t =
        (n = r.session) === null || n === void 0 ? void 0 : n.access_token) !==
        null && t !== void 0
        ? t
        : e.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: n,
        storage: r,
        userStorage: s,
        storageKey: i,
        flowType: o,
        lock: a,
        debug: l,
        throwOnError: c,
      },
      d,
      u,
    ) {
      const f = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new wj({
        url: this.authUrl.href,
        headers: Re(Re({}, f), d),
        storageKey: i,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: n,
        storage: r,
        userStorage: s,
        flowType: o,
        lock: a,
        debug: l,
        throwOnError: c,
        fetch: u,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (h) => h.toLowerCase() === "authorization",
        ),
      });
    }
    _initRealtimeClient(e) {
      return new xA(
        this.realtimeUrl.href,
        Re(
          Re({}, e),
          {},
          {
            params: Re(
              Re({}, { apikey: this.supabaseKey }),
              e == null ? void 0 : e.params,
            ),
          },
        ),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((e, t) => {
        this._handleTokenChanged(
          e,
          "CLIENT",
          t == null ? void 0 : t.access_token,
        );
      });
    }
    _handleTokenChanged(e, t, n) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
      this.changedAccessToken !== n
        ? ((this.changedAccessToken = n), this.realtime.setAuth(n))
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          t == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const xj = (e, t, n) => new bj(e, t, n);
function _j() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const n = t.match(/^v(\d+)\./);
  return n ? parseInt(n[1], 10) <= 18 : !1;
}
_j() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217",
  );
const Sj = "https://xedyxmkhzsnclkcuzezq.supabase.co",
  Ej =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlZHl4bWtoenNuY2xrY3V6ZXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2OTE4MzYsImV4cCI6MjA5MTI2NzgzNn0.nw_VQGfoCmXbFDmqd6TQtbCH7pUJACdZ8sgTl15wd8c",
  Hs = xj(Sj, Ej, {
    auth: { storage: localStorage, persistSession: !0, autoRefreshToken: !0 },
  }),
  fg = {
    currency: "USD",
    symbol: "$",
    price: "17.90",
    priceRaw: 17.9,
    originalPrice: "647.00",
    taxRate: 0,
    countryCode: "US",
    loading: !1,
    error: !0,
  };
function kj(e) {
  const [t, n] = x.useState({ ...fg, loading: !0, error: !1 });
  return (
    x.useEffect(() => {
      let r = !1;
      async function s() {
        try {
          const i = e != null ? { base_price_usd: e } : void 0,
            { data: o, error: a } = await Hs.functions.invoke(
              "detect-country",
              { body: i },
            );
          if (a || !o) throw new Error("Failed");
          r ||
            n({
              currency: o.currency,
              symbol: o.symbol,
              price: o.price,
              priceRaw: o.price_raw,
              originalPrice: o.original_price,
              taxRate: o.tax_rate,
              countryCode: o.country_code,
              loading: !1,
              error: !1,
            });
        } catch {
          r || n(fg);
        }
      }
      return (
        s(),
        () => {
          r = !0;
        }
      );
    }, [e]),
    t
  );
}
const Fb = {
  checkoutUrl: "URL_CHECKOUT_AQUI",
  basePriceUsd: 17.9,
  videoEmbed: `<style>.wistia_responsive_wrapper { position: relative; width: 320px; max-width: 100%; padding-top: 133.33%; margin: 0 auto; } .wistia_responsive_wrapper wistia-player { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="wistia_responsive_wrapper"><wistia-player media-id="rxw8235j2e"></wistia-player></div>`,
  vturbOptimize: "",
  customHead: "",
  customBody: "",
  customFooter: "",
};
async function Tj() {
  return Fb;
}
function Pc() {
  const { data: e, isLoading: t } = uC({
    queryKey: ["offer_settings"],
    queryFn: Tj,
    staleTime: 1 / 0,
    gcTime: 1 / 0,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1,
  });
  return { ...(e ?? Fb), loading: t };
}
function pg({ className: e, ...t }) {
  return b.jsx("div", {
    className: te("animate-pulse rounded-md bg-muted", e),
    ...t,
  });
}
const Cj = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre",
};
function Rj() {
  const e = new Date(),
    t = new Date(e.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
  return (
    t.getHours() < 11 && t.setDate(t.getDate() - 1),
    `${t.getDate()} de ${Cj[t.getMonth()]}`
  );
}
function Pj(e) {
  if (!e) return "#";
  if (typeof window > "u") return e;
  try {
    const t = new URL(e);
    return (
      new URLSearchParams(window.location.search).forEach((r, s) => {
        t.searchParams.set(s, r);
      }),
      t.toString()
    );
  } catch {
    return e;
  }
}
const Aj = [
    "Tu ritual 100% personalizado",
    "3 regalos especiales",
    "1 regalo secreto",
    "Garantía incondicional de 30 días",
    "Acceso de por vida",
  ],
  zb = ({
    symbol: e,
    price: t,
    originalPrice: n,
    loading: r,
    checkoutUrl: s,
    onCheckout: i,
  }) => {
    const o = Rj(),
      a = x.useMemo(() => Pj(s), [s]),
      l = () => {
        try {
          i == null || i();
        } catch {}
      };
    return b.jsx("a", {
      href: a,
      onClick: l,
      className:
        "after-pitch emoji-card emoji-card--no-glow w-full cursor-pointer block no-underline text-inherit",
      style: { "--emoji-rounded": "16px" },
      children: b.jsxs("div", {
        className: "emoji-card__content flex flex-col overflow-hidden",
        children: [
          b.jsx("div", {
            className:
              "bg-[hsl(var(--primary))] text-primary-foreground text-center py-2.5 px-4 text-sm font-bold tracking-wide",
            style: { borderRadius: "14px 14px 0 0" },
            children: "Último día con 97,24% de descuento",
          }),
          b.jsxs("div", {
            className: "px-5 py-6 flex flex-col",
            children: [
              b.jsx("h3", {
                className: "text-xl font-bold text-foreground text-center mb-5",
                children: "Ritual de la Llama Eterna",
              }),
              b.jsxs("div", {
                className: "text-center space-y-1 mb-5",
                children: [
                  r
                    ? b.jsx(pg, { className: "h-5 w-24 mx-auto" })
                    : b.jsxs("span", {
                        className: "text-[hsl(0_0%_40%)] line-through text-sm",
                        children: [e, " ", n],
                      }),
                  r
                    ? b.jsx(pg, { className: "h-12 w-40 mx-auto" })
                    : b.jsxs("p", {
                        className: "text-4xl font-extrabold text-[#00DA37]",
                        style: { textShadow: "0 0 18px rgba(0,218,55,0.45)" },
                        children: [e, " ", t, "*"],
                      }),
                  b.jsx("p", {
                    className: "text-sm text-[hsl(0_0%_40%)]",
                    children: "Pago único, sin cuotas mensuales",
                  }),
                ],
              }),
              b.jsxs("div", {
                className: "space-y-2.5 mb-5",
                children: [
                  b.jsx("p", {
                    className: "text-sm font-semibold text-foreground",
                    children: "Recibirás:",
                  }),
                  Aj.map((c) =>
                    b.jsxs(
                      "div",
                      {
                        className: "flex items-start gap-2.5",
                        children: [
                          b.jsx(w0, {
                            className: "w-4 h-4 text-[#00DA37] mt-0.5 shrink-0",
                          }),
                          b.jsx("span", {
                            className: "text-sm text-muted-foreground",
                            children: c,
                          }),
                        ],
                      },
                      c,
                    ),
                  ),
                ],
              }),
              b.jsxs("div", {
                className: "space-y-3",
                children: [
                  b.jsx(ua, {
                    label: "6 RITUALES RESTANTES!",
                    className: "price-box-cta",
                    type: "button",
                    tabIndex: -1,
                  }),
                  b.jsxs("p", {
                    className: "text-xs text-[hsl(0_0%_40%)] text-center",
                    children: ["*Oferta válida hasta ", o, " a las 23h59 CST"],
                  }),
                  b.jsx("p", {
                    className: "text-xs text-[hsl(0_0%_40%)] text-center",
                    children:
                      "*Valor aproximado, en el siguiente paso pueden agregarse impuestos y cargos específicos de tu país.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
zb.displayName = "CaixaPreço";
const Bb = ({ answers: e, onCheckout: t }) => {
  const n = (e == null ? void 0 : e[8]) || "Querida",
    r = (e == null ? void 0 : e[9]) || "él",
    { checkoutUrl: s, basePriceUsd: i, videoEmbed: o, loading: a } = Pc(),
    { symbol: l, price: c, originalPrice: d, loading: u } = kj(a ? void 0 : i),
    f = x.useRef(null),
    [showBtn, setShowBtn] = x.useState(!1);
  return (
    x.useEffect(() => {
      const timer = setTimeout(() => setShowBtn(!0), 640000);
      return () => clearTimeout(timer);
    }, []),
    b.jsxs("div", {
      className: "flex flex-col items-center px-6 pt-10 pb-8 text-center",
      children: [
        b.jsxs("h1", {
          className: "text-2xl font-bold mb-6",
          children: [
            b.jsx("span", { className: "text-red-400", children: n }),
            b.jsx("br", {}),
            b.jsx("span", {
              className: "text-foreground",
              children: "tu ritual está listo!",
            }),
          ],
        }),
        b.jsxs("p", {
          className: "text-base text-muted-foreground leading-relaxed mb-8",
          children: [
            "Si activas el ritual ",
            b.jsx("span", {
              className: "font-bold text-foreground",
              children: "HOY",
            }),
            ", prepárate para ver a",
            " ",
            b.jsx("span", {
              className: "font-bold text-foreground",
              children: r,
            }),
            " buscándote desesperado en los próximos 7 días.",
          ],
        }),
        b.jsxs("div", {
          className: "w-full space-y-3 text-center mb-8",
          children: [
            b.jsx("p", {
              className: "text-base text-muted-foreground",
              children: "🔥 No importa si te bloqueó.",
            }),
            b.jsx("p", {
              className: "text-base text-muted-foreground",
              children: "🔥 No importa si está con otra.",
            }),
            b.jsx("p", {
              className: "text-base text-muted-foreground",
              children:
                "❌ Sin karma negativo ni ninguna consecuencia mala para ti ni para él.",
            }),
          ],
        }),
        b.jsx("p", {
          className:
            "text-base text-foreground font-medium leading-relaxed mb-8",
          children:
            "Mira el video a continuación y descubre cómo acceder a tu ritual y comenzar ahora mismo 👇",
        }),
        o &&
          b.jsx("div", {
            ref: f,
            className: "w-full mb-8",
            children: b.jsx("div", { dangerouslySetInnerHTML: { __html: o } }),
          }),
        showBtn &&
          b.jsx(zb, {
            symbol: l,
            price: c,
            originalPrice: d,
            loading: u || a,
            checkoutUrl: s,
            onCheckout: t,
          }),
      ],
    })
  );
};
Bb.displayName = "OfferStep";
const mg = [
  ER,
  kR,
  TR,
  CR,
  RR,
  PR,
  jR,
  NR,
  IR,
  LR,
  DR,
  yP,
  wP,
  bP,
  xP,
  _P,
  SP,
  EP,
  kP,
  TP,
  CP,
  Bb,
];
function Oj() {
  const t = x.useCallback((s, i) => {}, []),
    n = x.useCallback((s) => {}, []),
    r = x.useCallback(() => {}, []);
  return { saveAnswer: t, markCheckout: r, markStepViewed: n };
}
const gg = "quiz-sound-enabled";
function jj() {
  const e = x.useRef(null),
    [t, n] = x.useState(() => {
      try {
        return localStorage.getItem(gg) !== "false";
      } catch {
        return !0;
      }
    });
  (x.useEffect(() => {
    try {
      localStorage.setItem(gg, String(t));
    } catch {}
  }, [t]),
    x.useEffect(() => {
      const a = () => {
        if (!e.current) {
          try {
            const l = new AudioContext(),
              c = l.createBuffer(1, 1, 22050),
              d = l.createBufferSource();
            ((d.buffer = c),
              d.connect(l.destination),
              d.start(0),
              (e.current = l));
          } catch {}
          (document.removeEventListener("touchstart", a),
            document.removeEventListener("click", a));
        }
      };
      return (
        document.addEventListener("touchstart", a, { passive: !0 }),
        document.addEventListener("click", a),
        () => {
          (document.removeEventListener("touchstart", a),
            document.removeEventListener("click", a));
        }
      );
    }, []));
  const r = x.useCallback(
      () => (e.current || (e.current = new AudioContext()), e.current),
      [],
    ),
    s = x.useCallback(async () => {
      if (t)
        try {
          const a = r();
          a.state === "suspended" && (await a.resume());
          const l = a.createOscillator(),
            c = a.createGain();
          ((l.type = "sine"),
            l.frequency.setValueAtTime(800, a.currentTime),
            l.frequency.exponentialRampToValueAtTime(400, a.currentTime + 0.08),
            c.gain.setValueAtTime(0.12, a.currentTime),
            c.gain.exponentialRampToValueAtTime(0.001, a.currentTime + 0.1),
            l.connect(c).connect(a.destination),
            l.start(a.currentTime),
            l.stop(a.currentTime + 0.1));
        } catch {}
    }, [t, r]),
    i = x.useCallback(async () => {
      if (t)
        try {
          const a = r();
          a.state === "suspended" && (await a.resume());
          const l = a.currentTime;
          [523, 659, 784].forEach((c, d) => {
            const u = a.createOscillator(),
              f = a.createGain();
            ((u.type = "sine"),
              u.frequency.setValueAtTime(c, l + d * 0.08),
              f.gain.setValueAtTime(0.1, l + d * 0.08),
              f.gain.exponentialRampToValueAtTime(0.001, l + d * 0.08 + 0.2),
              u.connect(f).connect(a.destination),
              u.start(l + d * 0.08),
              u.stop(l + d * 0.08 + 0.2));
          });
        } catch {}
    }, [t, r]),
    o = x.useCallback(() => n((a) => !a), []);
  return { playClick: s, playSuccess: i, enabled: t, toggle: o };
}
const Nj = {
    0: [_f],
    1: [$w, Mw, Uw, Fw],
    2: [zw],
    3: [Bw, Hw, Vw, Ww, qw],
    4: [Kw],
    5: [Gw],
    6: [Sf, Ef, kf, Tf],
    7: [Qw],
    8: [Jw],
    9: [Yw],
    11: [tb, nb, rb, sb, ib, ob],
    13: [ab],
    14: [lb, cb, ub, db],
    15: [hb],
    16: [fb],
    17: [pb, mb, gb, vb],
    18: [yb],
    19: [wb],
    20: [bb],
  },
  Ij = 3,
  Lj = (e) => {
    const t = typeof window < "u" ? window : void 0;
    return t && "requestIdleCallback" in t
      ? t.requestIdleCallback(e, { timeout: 2e3 })
      : window.setTimeout(
          () => e({ didTimeout: !1, timeRemaining: () => 0 }),
          200,
        );
  },
  Dj = (e) => {
    const t = typeof window < "u" ? window : void 0;
    t && "cancelIdleCallback" in t
      ? t.cancelIdleCallback(e)
      : (t ?? globalThis).clearTimeout(e);
  };
function $j(e) {
  const t = x.useRef(new Set());
  x.useEffect(() => {
    if (e === 0) return;
    const n = Lj(() => {
      for (let r = e + 1; r <= e + Ij; r++) {
        const s = Nj[r];
        if (s)
          for (const i of s) {
            if (t.current.has(i)) continue;
            t.current.add(i);
            const o = new Image();
            o.src = i;
          }
      }
    });
    return () => Dj(n);
  }, [e]);
}
const Mj = () => {
    const [e, t] = x.useState(0),
      [n, r] = x.useState({}),
      { saveAnswer: s, markCheckout: i, markStepViewed: o } = Oj(),
      { playClick: a, playSuccess: l, enabled: c, toggle: d } = jj(),
      { checkoutUrl: u } = Pc();
    $j(e);
    const f = mg.length,
      h = e >= f;
    (x.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
      x.useEffect(() => {
        const _ = e + 1,
          S = setTimeout(() => {
            o(_);
          }, 500);
        return () => clearTimeout(S);
      }, [e, o]));
    const v = x.useCallback(
        (_) => {
          const S = e + 1;
          (s(S, _), r((E) => ({ ...E, [e]: _ })), t((E) => E + 1));
        },
        [e, s],
      ),
      g = x.useCallback(() => {
        e > 0 && (t((_) => _ - 1), a());
      }, [e, a]),
      w = async () => {
        (l(), await i(), (window.location.href = u || "https://google.com"));
      },
      p = h ? null : mg[e],
      m = e === f - 1,
      y = e >= 0 && !h && !m;
    return b.jsxs("div", {
      className:
        "flex min-h-screen md:min-h-full h-full flex-col quiz-bg relative overflow-x-hidden overflow-y-auto",
      children: [
        !m &&
          b.jsx("button", {
            onClick: d,
            className:
              "fixed md:absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors z-30",
            "aria-label": c ? "Desactivar sonido" : "Activar sonido",
            children: c ? b.jsx(bS, { size: 20 }) : b.jsx(xS, { size: 20 }),
          }),
        !m &&
          y &&
          e > 0 &&
          b.jsx("button", {
            onClick: g,
            className:
              "fixed md:absolute top-4 left-4 z-30 bg-black/50 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors rounded-full p-1.5",
            "aria-label": "Volver",
            children: b.jsx(yS, { size: 18 }),
          }),
        y &&
          b.jsx("div", {
            className: "fixed md:absolute top-0 left-0 w-full z-20",
            children: b.jsx(pR, { currentStep: e - 1, totalSteps: f - 2 }),
          }),
        b.jsx("div", {
          className: "flex-1 flex flex-col items-center",
          children: h
            ? b.jsx(xR, { onCheckout: w })
            : p &&
              b.jsx(
                "div",
                {
                  className:
                    "w-full max-w-lg mx-auto animate-slide-up flex-1 flex flex-col",
                  children: b.jsx(p, {
                    onAdvance: v,
                    onGoBack: g,
                    answers: n,
                    onClickSound: a,
                    onCheckout: i,
                  }),
                },
                e,
              ),
        }),
        b.jsx(SR, {}),
      ],
    });
  },
  Uj = () => {
    const { vturbOptimize: e } = Pc();
    return (
      x.useEffect(() => {
        const t = window.location.hash,
          n = window.location.search;
        (t.includes("access_token=") ||
          t.includes("error=") ||
          t.includes("error_description=") ||
          n.includes("code=") ||
          n.includes("error=")) &&
          window.location.replace("/painel" + n + t);
      }, []),
      x.useEffect(() => {
        if (!(e != null && e.trim())) return;
        const t = [],
          n = document.createElement("div");
        return (
          (n.innerHTML = e),
          Array.from(n.childNodes).forEach((r) => {
            if (r instanceof HTMLScriptElement) {
              const s = document.createElement("script");
              (Array.from(r.attributes).forEach((i) =>
                s.setAttribute(i.name, i.value),
              ),
                (s.textContent = r.textContent),
                document.head.appendChild(s),
                t.push(s));
            } else {
              const s = r.cloneNode(!0);
              (document.head.appendChild(s), t.push(s));
            }
          }),
          () =>
            t.forEach((r) => {
              var s;
              return (s = r.parentNode) == null ? void 0 : s.removeChild(r);
            })
        );
      }, [e]),
      b.jsx("div", {
        className:
          "min-h-screen md:flex md:items-center md:justify-center md:bg-neutral-950",
        children: b.jsx("div", {
          className:
            "w-full h-full md:relative md:w-[390px] md:h-[844px] md:max-h-[90vh] md:rounded-3xl md:overflow-hidden md:shadow-[0_0_60px_rgba(0,0,0,0.5)] md:border md:border-white/10",
          children: b.jsx(Mj, {}),
        }),
      })
    );
  },
  Fj = () => {
    const e = _c();
    return (
      x.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      b.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: b.jsxs("div", {
          className: "text-center",
          children: [
            b.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            b.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            b.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  };
function vg(e) {
  const t = document.documentElement;
  (Object.entries(e.cssVars).forEach(([n, r]) => {
    t.style.setProperty(`--${n}`, r);
  }),
    t.style.setProperty("--radius", e.radius));
}
function zj() {
  const e = document.documentElement;
  [
    "primary",
    "primary-foreground",
    "background",
    "foreground",
    "card",
    "card-foreground",
    "popover",
    "popover-foreground",
    "secondary",
    "secondary-foreground",
    "muted",
    "muted-foreground",
    "accent",
    "accent-foreground",
    "destructive",
    "destructive-foreground",
    "border",
    "input",
    "ring",
    "radius",
    "sidebar-background",
    "sidebar-foreground",
    "sidebar-primary",
    "sidebar-primary-foreground",
    "sidebar-accent",
    "sidebar-accent-foreground",
    "sidebar-border",
    "sidebar-ring",
  ].forEach((n) => e.style.removeProperty(`--${n}`));
}
const go = "quiz-theme";
function Bj(e) {
  localStorage.setItem(go, JSON.stringify(e));
}
function Hj() {
  const e = localStorage.getItem(go);
  if (!e) return null;
  try {
    const t = JSON.parse(e);
    return !t || !t.cssVars || typeof t.cssVars != "object"
      ? (localStorage.removeItem(go), null)
      : t;
  } catch {
    return (localStorage.removeItem(go), null);
  }
}
function Vj() {
  localStorage.removeItem(go);
}
const Wj = x.createContext({
    theme: null,
    setTheme: () => {},
    resetTheme: () => {},
  }),
  qj = ({ children: e }) => {
    const [t, n] = x.useState(null);
    x.useEffect(() => {
      const i = Hj();
      i && (n(i), vg(i));
    }, []);
    const r = (i) => {
        (n(i), vg(i), Bj(i));
      },
      s = () => {
        (n(null), zj(), Vj());
      };
    return b.jsx(Wj.Provider, {
      value: { theme: t, setTheme: r, resetTheme: s },
      children: e,
    });
  };
function wu(e, t) {
  if (!e.trim()) return [];
  const n = [],
    r = document.createElement("div");
  return (
    (r.innerHTML = e),
    Array.from(r.childNodes).forEach((s) => {
      if (s instanceof HTMLScriptElement) {
        const i = document.createElement("script");
        (Array.from(s.attributes).forEach((o) =>
          i.setAttribute(o.name, o.value),
        ),
          (i.textContent = s.textContent),
          t.appendChild(i),
          n.push(i));
      } else {
        const i = s.cloneNode(!0);
        (t.appendChild(i), n.push(i));
      }
    }),
    n
  );
}
function Kj(e, t, n) {
  (x.useEffect(() => {
    const r = wu(e, document.head);
    return () =>
      r.forEach((s) => {
        var i;
        return (i = s.parentNode) == null ? void 0 : i.removeChild(s);
      });
  }, [e]),
    x.useEffect(() => {
      const r = document.getElementById("root");
      if (!(r != null && r.parentElement)) return;
      const s = wu(t, r.parentElement);
      return (
        s.forEach((i) => r.parentElement.insertBefore(i, r)),
        () =>
          s.forEach((i) => {
            var o;
            return (o = i.parentNode) == null ? void 0 : o.removeChild(i);
          })
      );
    }, [t]),
    x.useEffect(() => {
      const r = wu(n, document.body);
      return () =>
        r.forEach((s) => {
          var i;
          return (i = s.parentNode) == null ? void 0 : i.removeChild(s);
        });
    }, [n]));
}
const Gj = x.lazy(() =>
    Gh(() => import("./Admin-938vDmNA.js"), __vite__mapDeps([0, 1])),
  ),
  Qj = x.lazy(() =>
    Gh(() => import("./SetPassword-B1sxEUVz.js"), __vite__mapDeps([2, 1])),
  ),
  Jj = x.lazy(() => Gh(() => import("./StepPreview-DLh2_d5E.js"), [])),
  Yj = new KT(),
  Xj = () => {
    const { customHead: e, customBody: t, customFooter: n } = Pc();
    return (Kj(e, t, n), null);
  },
  Zj = () =>
    b.jsx(XT, {
      client: Yj,
      children: b.jsx(qj, {
        children: b.jsxs(RT, {
          children: [
            b.jsx(Xj, {}),
            b.jsx(sE, {}),
            b.jsx(DE, {}),
            b.jsx(iR, {
              children: b.jsx(x.Suspense, {
                fallback: null,
                children: b.jsxs(tR, {
                  children: [
                    b.jsx(ks, { path: "/", element: b.jsx(Uj, {}) }),
                    b.jsx(ks, { path: "/painel", element: b.jsx(Gj, {}) }),
                    b.jsx(ks, {
                      path: "/painel/definir-senha",
                      element: b.jsx(Qj, {}),
                    }),
                    b.jsx(ks, {
                      path: "/step-preview",
                      element: b.jsx(Jj, {}),
                    }),
                    b.jsx(ks, { path: "*", element: b.jsx(Fj, {}) }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  fa = document.createElement("link");
fa.rel = "preload";
fa.as = "image";
fa.href = _f;
fa.setAttribute("fetchpriority", "high");
document.head.appendChild(fa);
zy(document.getElementById("root")).render(b.jsx(Zj, {}));
export {
  yS as $,
  un as A,
  bf as B,
  w0 as C,
  Qh as D,
  bR as E,
  ct as F,
  zb as G,
  Iw as H,
  xf as I,
  Lw as J,
  mR as K,
  wf as L,
  RT as M,
  iN as N,
  oN as O,
  et as P,
  PT as Q,
  I as R,
  Ue as S,
  Sc as T,
  pg as U,
  E1 as V,
  Bn as W,
  _S as X,
  T1 as Y,
  wR as Z,
  Um as _,
  oa as a,
  mg as a0,
  UC as a1,
  qj as a2,
  aN as a3,
  pR as a4,
  bS as a5,
  SR as a6,
  Qy as b,
  ki as c,
  De as d,
  Xk as e,
  te as f,
  Jh as g,
  Nw as h,
  Dw as i,
  b as j,
  jw as k,
  Ar as l,
  kc as m,
  cN as n,
  tN as o,
  UE as p,
  Gy as q,
  x as r,
  Hs as s,
  Dl as t,
  an as u,
  A1 as v,
  v0 as w,
  bi as x,
  ua as y,
  Oi as z,
};
