var cf = e => {
    throw TypeError(e)
}
;
var ml = (e, t, n) => t.has(e) || cf("Cannot " + n);
var R = (e, t, n) => (ml(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , ae = (e, t, n) => t.has(e) ? cf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , X = (e, t, n, r) => (ml(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Le = (e, t, n) => (ml(e, t, "access private method"),
n);
var ii = (e, t, n, r) => ({
    set _(o) {
        X(e, t, o, n)
    },
    get _() {
        return R(e, t, r)
    }
});
function Vx(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function Nh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ph = {
    exports: {}
}
  , Ma = {}
  , kh = {
    exports: {}
}
  , J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs = Symbol.for("react.element")
  , Hx = Symbol.for("react.portal")
  , Wx = Symbol.for("react.fragment")
  , Kx = Symbol.for("react.strict_mode")
  , Gx = Symbol.for("react.profiler")
  , Qx = Symbol.for("react.provider")
  , Yx = Symbol.for("react.context")
  , Xx = Symbol.for("react.forward_ref")
  , qx = Symbol.for("react.suspense")
  , Zx = Symbol.for("react.memo")
  , Jx = Symbol.for("react.lazy")
  , df = Symbol.iterator;
function ew(e) {
    return e === null || typeof e != "object" ? null : (e = df && e[df] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Th = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Rh = Object.assign
  , jh = {};
function Ao(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = jh,
    this.updater = n || Th
}
Ao.prototype.isReactComponent = {};
Ao.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Ao.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Mh() {}
Mh.prototype = Ao.prototype;
function Cc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = jh,
    this.updater = n || Th
}
var Ec = Cc.prototype = new Mh;
Ec.constructor = Cc;
Rh(Ec, Ao.prototype);
Ec.isPureReactComponent = !0;
var ff = Array.isArray
  , _h = Object.prototype.hasOwnProperty
  , bc = {
    current: null
}
  , Ih = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Oh(e, t, n) {
    var r, o = {}, s = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            _h.call(t, r) && !Ih.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: Qs,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: bc.current
    }
}
function tw(e, t) {
    return {
        $$typeof: Qs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Nc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Qs
}
function nw(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var pf = /\/+/g;
function vl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? nw("" + e.key) : t.toString(36)
}
function Ii(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Qs:
            case Hx:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + vl(i, 0) : r,
        ff(o) ? (n = "",
        e != null && (n = e.replace(pf, "$&/") + "/"),
        Ii(o, t, n, "", function(u) {
            return u
        })) : o != null && (Nc(o) && (o = tw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(pf, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    ff(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + vl(s, a);
            i += Ii(s, t, n, l, o)
        }
    else if (l = ew(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + vl(s, a++),
            i += Ii(s, t, n, l, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function ai(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Ii(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function rw(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Qe = {
    current: null
}
  , Oi = {
    transition: null
}
  , ow = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: Oi,
    ReactCurrentOwner: bc
};
function Ah() {
    throw Error("act(...) is not supported in production builds of React.")
}
J.Children = {
    map: ai,
    forEach: function(e, t, n) {
        ai(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ai(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ai(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Nc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
J.Component = Ao;
J.Fragment = Wx;
J.Profiler = Gx;
J.PureComponent = Cc;
J.StrictMode = Kx;
J.Suspense = qx;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ow;
J.act = Ah;
J.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Rh({}, e.props)
      , o = e.key
      , s = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        i = bc.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            _h.call(t, l) && !Ih.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Qs,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
}
;
J.createContext = function(e) {
    return e = {
        $$typeof: Yx,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Qx,
        _context: e
    },
    e.Consumer = e
}
;
J.createElement = Oh;
J.createFactory = function(e) {
    var t = Oh.bind(null, e);
    return t.type = e,
    t
}
;
J.createRef = function() {
    return {
        current: null
    }
}
;
J.forwardRef = function(e) {
    return {
        $$typeof: Xx,
        render: e
    }
}
;
J.isValidElement = Nc;
J.lazy = function(e) {
    return {
        $$typeof: Jx,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: rw
    }
}
;
J.memo = function(e, t) {
    return {
        $$typeof: Zx,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
J.startTransition = function(e) {
    var t = Oi.transition;
    Oi.transition = {};
    try {
        e()
    } finally {
        Oi.transition = t
    }
}
;
J.unstable_act = Ah;
J.useCallback = function(e, t) {
    return Qe.current.useCallback(e, t)
}
;
J.useContext = function(e) {
    return Qe.current.useContext(e)
}
;
J.useDebugValue = function() {}
;
J.useDeferredValue = function(e) {
    return Qe.current.useDeferredValue(e)
}
;
J.useEffect = function(e, t) {
    return Qe.current.useEffect(e, t)
}
;
J.useId = function() {
    return Qe.current.useId()
}
;
J.useImperativeHandle = function(e, t, n) {
    return Qe.current.useImperativeHandle(e, t, n)
}
;
J.useInsertionEffect = function(e, t) {
    return Qe.current.useInsertionEffect(e, t)
}
;
J.useLayoutEffect = function(e, t) {
    return Qe.current.useLayoutEffect(e, t)
}
;
J.useMemo = function(e, t) {
    return Qe.current.useMemo(e, t)
}
;
J.useReducer = function(e, t, n) {
    return Qe.current.useReducer(e, t, n)
}
;
J.useRef = function(e) {
    return Qe.current.useRef(e)
}
;
J.useState = function(e) {
    return Qe.current.useState(e)
}
;
J.useSyncExternalStore = function(e, t, n) {
    return Qe.current.useSyncExternalStore(e, t, n)
}
;
J.useTransition = function() {
    return Qe.current.useTransition()
}
;
J.version = "18.3.1";
kh.exports = J;
var d = kh.exports;
const A = Nh(d)
  , Pc = Vx({
    __proto__: null,
    default: A
}, [d]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sw = d
  , iw = Symbol.for("react.element")
  , aw = Symbol.for("react.fragment")
  , lw = Object.prototype.hasOwnProperty
  , uw = sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , cw = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Dh(e, t, n) {
    var r, o = {}, s = null, i = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        lw.call(t, r) && !cw.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: iw,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: uw.current
    }
}
Ma.Fragment = aw;
Ma.jsx = Dh;
Ma.jsxs = Dh;
Ph.exports = Ma;
var c = Ph.exports
  , Lh = {
    exports: {}
}
  , ut = {}
  , Fh = {
    exports: {}
}
  , zh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, N) {
        var O = k.length;
        k.push(N);
        e: for (; 0 < O; ) {
            var V = O - 1 >>> 1
              , B = k[V];
            if (0 < o(B, N))
                k[V] = N,
                k[O] = B,
                O = V;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var N = k[0]
          , O = k.pop();
        if (O !== N) {
            k[0] = O;
            e: for (var V = 0, B = k.length, Q = B >>> 1; V < Q; ) {
                var G = 2 * (V + 1) - 1
                  , ue = k[G]
                  , ce = G + 1
                  , L = k[ce];
                if (0 > o(ue, O))
                    ce < B && 0 > o(L, ue) ? (k[V] = L,
                    k[ce] = O,
                    V = ce) : (k[V] = ue,
                    k[G] = O,
                    V = G);
                else if (ce < B && 0 > o(L, O))
                    k[V] = L,
                    k[ce] = O,
                    V = ce;
                else
                    break e
            }
        }
        return N
    }
    function o(k, N) {
        var O = k.sortIndex - N.sortIndex;
        return O !== 0 ? O : k.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var l = []
      , u = []
      , f = 1
      , p = null
      , m = 3
      , h = !1
      , S = !1
      , v = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(k) {
        for (var N = n(u); N !== null; ) {
            if (N.callback === null)
                r(u);
            else if (N.startTime <= k)
                r(u),
                N.sortIndex = N.expirationTime,
                t(l, N);
            else
                break;
            N = n(u)
        }
    }
    function C(k) {
        if (v = !1,
        x(k),
        !S)
            if (n(l) !== null)
                S = !0,
                F(E);
            else {
                var N = n(u);
                N !== null && H(C, N.startTime - k)
            }
    }
    function E(k, N) {
        S = !1,
        v && (v = !1,
        y(T),
        T = -1),
        h = !0;
        var O = m;
        try {
            for (x(N),
            p = n(l); p !== null && (!(p.expirationTime > N) || k && !U()); ) {
                var V = p.callback;
                if (typeof V == "function") {
                    p.callback = null,
                    m = p.priorityLevel;
                    var B = V(p.expirationTime <= N);
                    N = e.unstable_now(),
                    typeof B == "function" ? p.callback = B : p === n(l) && r(l),
                    x(N)
                } else
                    r(l);
                p = n(l)
            }
            if (p !== null)
                var Q = !0;
            else {
                var G = n(u);
                G !== null && H(C, G.startTime - N),
                Q = !1
            }
            return Q
        } finally {
            p = null,
            m = O,
            h = !1
        }
    }
    var P = !1
      , b = null
      , T = -1
      , M = 5
      , j = -1;
    function U() {
        return !(e.unstable_now() - j < M)
    }
    function D() {
        if (b !== null) {
            var k = e.unstable_now();
            j = k;
            var N = !0;
            try {
                N = b(!0, k)
            } finally {
                N ? W() : (P = !1,
                b = null)
            }
        } else
            P = !1
    }
    var W;
    if (typeof g == "function")
        W = function() {
            g(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel
          , K = I.port2;
        I.port1.onmessage = D,
        W = function() {
            K.postMessage(null)
        }
    } else
        W = function() {
            w(D, 0)
        }
        ;
    function F(k) {
        b = k,
        P || (P = !0,
        W())
    }
    function H(k, N) {
        T = w(function() {
            k(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || h || (S = !0,
        F(E))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(k) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var N = 3;
            break;
        default:
            N = m
        }
        var O = m;
        m = N;
        try {
            return k()
        } finally {
            m = O
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, N) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var O = m;
        m = k;
        try {
            return N()
        } finally {
            m = O
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, N, O) {
        var V = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay,
        O = typeof O == "number" && 0 < O ? V + O : V) : O = V,
        k) {
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
            B = 5e3
        }
        return B = O + B,
        k = {
            id: f++,
            callback: N,
            priorityLevel: k,
            startTime: O,
            expirationTime: B,
            sortIndex: -1
        },
        O > V ? (k.sortIndex = O,
        t(u, k),
        n(l) === null && k === n(u) && (v ? (y(T),
        T = -1) : v = !0,
        H(C, O - V))) : (k.sortIndex = B,
        t(l, k),
        S || h || (S = !0,
        F(E))),
        k
    }
    ,
    e.unstable_shouldYield = U,
    e.unstable_wrapCallback = function(k) {
        var N = m;
        return function() {
            var O = m;
            m = N;
            try {
                return k.apply(this, arguments)
            } finally {
                m = O
            }
        }
    }
}
)(zh);
Fh.exports = zh;
var dw = Fh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fw = d
  , lt = dw;
function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var $h = new Set
  , ws = {};
function Rr(e, t) {
    Eo(e, t),
    Eo(e + "Capture", t)
}
function Eo(e, t) {
    for (ws[e] = t,
    e = 0; e < t.length; e++)
        $h.add(t[e])
}
var un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , su = Object.prototype.hasOwnProperty
  , pw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , hf = {}
  , mf = {};
function hw(e) {
    return su.call(mf, e) ? !0 : su.call(hf, e) ? !1 : pw.test(e) ? mf[e] = !0 : (hf[e] = !0,
    !1)
}
function mw(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function vw(e, t, n, r) {
    if (t === null || typeof t > "u" || mw(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ye(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = i
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Oe[e] = new Ye(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Oe[t] = new Ye(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Oe[e] = new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Oe[e] = new Ye(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Oe[e] = new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Oe[e] = new Ye(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Oe[e] = new Ye(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Oe[e] = new Ye(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Oe[e] = new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var kc = /[\-:]([a-z])/g;
function Tc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(kc, Tc);
    Oe[t] = new Ye(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(kc, Tc);
    Oe[t] = new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(kc, Tc);
    Oe[t] = new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Oe[e] = new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Oe.xlinkHref = new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Oe[e] = new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Rc(e, t, n, r) {
    var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vw(t, n, o, r) && (n = null),
    r || o === null ? hw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var mn = fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , li = Symbol.for("react.element")
  , Hr = Symbol.for("react.portal")
  , Wr = Symbol.for("react.fragment")
  , jc = Symbol.for("react.strict_mode")
  , iu = Symbol.for("react.profiler")
  , Bh = Symbol.for("react.provider")
  , Uh = Symbol.for("react.context")
  , Mc = Symbol.for("react.forward_ref")
  , au = Symbol.for("react.suspense")
  , lu = Symbol.for("react.suspense_list")
  , _c = Symbol.for("react.memo")
  , Pn = Symbol.for("react.lazy")
  , Vh = Symbol.for("react.offscreen")
  , vf = Symbol.iterator;
function Go(e) {
    return e === null || typeof e != "object" ? null : (e = vf && e[vf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Se = Object.assign, gl;
function rs(e) {
    if (gl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            gl = t && t[1] || ""
        }
    return `
` + gl + e
}
var yl = !1;
function xl(e, t) {
    if (!e || yl)
        return "";
    yl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (o[i] !== s[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || o[i] !== s[a]) {
                                var l = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        yl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? rs(e) : ""
}
function gw(e) {
    switch (e.tag) {
    case 5:
        return rs(e.type);
    case 16:
        return rs("Lazy");
    case 13:
        return rs("Suspense");
    case 19:
        return rs("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = xl(e.type, !1),
        e;
    case 11:
        return e = xl(e.type.render, !1),
        e;
    case 1:
        return e = xl(e.type, !0),
        e;
    default:
        return ""
    }
}
function uu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Wr:
        return "Fragment";
    case Hr:
        return "Portal";
    case iu:
        return "Profiler";
    case jc:
        return "StrictMode";
    case au:
        return "Suspense";
    case lu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Uh:
            return (e.displayName || "Context") + ".Consumer";
        case Bh:
            return (e._context.displayName || "Context") + ".Provider";
        case Mc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case _c:
            return t = e.displayName || null,
            t !== null ? t : uu(e.type) || "Memo";
        case Pn:
            t = e._payload,
            e = e._init;
            try {
                return uu(e(t))
            } catch {}
        }
    return null
}
function yw(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return uu(t);
    case 8:
        return t === jc ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Gn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Hh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function xw(e) {
    var t = Hh(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                s.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ui(e) {
    e._valueTracker || (e._valueTracker = xw(e))
}
function Wh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Hh(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Xi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function cu(e, t) {
    var n = t.checked;
    return Se({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function gf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Gn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Kh(e, t) {
    t = t.checked,
    t != null && Rc(e, "checked", t, !1)
}
function du(e, t) {
    Kh(e, t);
    var n = Gn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? fu(e, t.type, n) : t.hasOwnProperty("defaultValue") && fu(e, t.type, Gn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function yf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function fu(e, t, n) {
    (t !== "number" || Xi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var os = Array.isArray;
function ro(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Gn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function pu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(_(91));
    return Se({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function xf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(_(92));
            if (os(n)) {
                if (1 < n.length)
                    throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Gn(n)
    }
}
function Gh(e, t) {
    var n = Gn(t.value)
      , r = Gn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function wf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Qh(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function hu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ci, Yh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ci = ci || document.createElement("div"),
        ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ci.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ss(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var cs = {
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
    strokeWidth: !0
}
  , ww = ["Webkit", "ms", "Moz", "O"];
Object.keys(cs).forEach(function(e) {
    ww.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        cs[t] = cs[e]
    })
});
function Xh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cs.hasOwnProperty(e) && cs[e] ? ("" + t).trim() : t + "px"
}
function qh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Xh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Sw = Se({
    menuitem: !0
}, {
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
    wbr: !0
});
function mu(e, t) {
    if (t) {
        if (Sw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(_(62))
    }
}
function vu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var gu = null;
function Ic(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var yu = null
  , oo = null
  , so = null;
function Sf(e) {
    if (e = qs(e)) {
        if (typeof yu != "function")
            throw Error(_(280));
        var t = e.stateNode;
        t && (t = Da(t),
        yu(e.stateNode, e.type, t))
    }
}
function Zh(e) {
    oo ? so ? so.push(e) : so = [e] : oo = e
}
function Jh() {
    if (oo) {
        var e = oo
          , t = so;
        if (so = oo = null,
        Sf(e),
        t)
            for (e = 0; e < t.length; e++)
                Sf(t[e])
    }
}
function em(e, t) {
    return e(t)
}
function tm() {}
var wl = !1;
function nm(e, t, n) {
    if (wl)
        return e(t, n);
    wl = !0;
    try {
        return em(e, t, n)
    } finally {
        wl = !1,
        (oo !== null || so !== null) && (tm(),
        Jh())
    }
}
function Cs(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Da(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(_(231, t, typeof n));
    return n
}
var xu = !1;
if (un)
    try {
        var Qo = {};
        Object.defineProperty(Qo, "passive", {
            get: function() {
                xu = !0
            }
        }),
        window.addEventListener("test", Qo, Qo),
        window.removeEventListener("test", Qo, Qo)
    } catch {
        xu = !1
    }
function Cw(e, t, n, r, o, s, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var ds = !1
  , qi = null
  , Zi = !1
  , wu = null
  , Ew = {
    onError: function(e) {
        ds = !0,
        qi = e
    }
};
function bw(e, t, n, r, o, s, i, a, l) {
    ds = !1,
    qi = null,
    Cw.apply(Ew, arguments)
}
function Nw(e, t, n, r, o, s, i, a, l) {
    if (bw.apply(this, arguments),
    ds) {
        if (ds) {
            var u = qi;
            ds = !1,
            qi = null
        } else
            throw Error(_(198));
        Zi || (Zi = !0,
        wu = u)
    }
}
function jr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function rm(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Cf(e) {
    if (jr(e) !== e)
        throw Error(_(188))
}
function Pw(e) {
    var t = e.alternate;
    if (!t) {
        if (t = jr(e),
        t === null)
            throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return Cf(o),
                    e;
                if (s === r)
                    return Cf(o),
                    t;
                s = s.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var i = !1, a = o.child; a; ) {
                if (a === n) {
                    i = !0,
                    n = o,
                    r = s;
                    break
                }
                if (a === r) {
                    i = !0,
                    r = o,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        i = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (a === r) {
                        i = !0,
                        r = s,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(_(189))
            }
        }
        if (n.alternate !== r)
            throw Error(_(190))
    }
    if (n.tag !== 3)
        throw Error(_(188));
    return n.stateNode.current === n ? e : t
}
function om(e) {
    return e = Pw(e),
    e !== null ? sm(e) : null
}
function sm(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = sm(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var im = lt.unstable_scheduleCallback
  , Ef = lt.unstable_cancelCallback
  , kw = lt.unstable_shouldYield
  , Tw = lt.unstable_requestPaint
  , be = lt.unstable_now
  , Rw = lt.unstable_getCurrentPriorityLevel
  , Oc = lt.unstable_ImmediatePriority
  , am = lt.unstable_UserBlockingPriority
  , Ji = lt.unstable_NormalPriority
  , jw = lt.unstable_LowPriority
  , lm = lt.unstable_IdlePriority
  , _a = null
  , Kt = null;
function Mw(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
            Kt.onCommitFiberRoot(_a, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var It = Math.clz32 ? Math.clz32 : Ow
  , _w = Math.log
  , Iw = Math.LN2;
function Ow(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (_w(e) / Iw | 0) | 0
}
var di = 64
  , fi = 4194304;
function ss(e) {
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
        return e
    }
}
function ea(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? r = ss(a) : (s &= i,
        s !== 0 && (r = ss(s)))
    } else
        i = n & ~o,
        i !== 0 ? r = ss(i) : s !== 0 && (r = ss(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - It(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Aw(e, t) {
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
        return -1
    }
}
function Dw(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - It(s)
          , a = 1 << i
          , l = o[i];
        l === -1 ? (!(a & n) || a & r) && (o[i] = Aw(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function Su(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function um() {
    var e = di;
    return di <<= 1,
    !(di & 4194240) && (di = 64),
    e
}
function Sl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ys(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - It(t),
    e[t] = n
}
function Lw(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - It(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function Ac(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - It(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var le = 0;
function cm(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var dm, Dc, fm, pm, hm, Cu = !1, pi = [], Fn = null, zn = null, $n = null, Es = new Map, bs = new Map, Tn = [], Fw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Fn = null;
        break;
    case "dragenter":
    case "dragleave":
        zn = null;
        break;
    case "mouseover":
    case "mouseout":
        $n = null;
        break;
    case "pointerover":
    case "pointerout":
        Es.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        bs.delete(t.pointerId)
    }
}
function Yo(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = qs(t),
    t !== null && Dc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function zw(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Fn = Yo(Fn, e, t, n, r, o),
        !0;
    case "dragenter":
        return zn = Yo(zn, e, t, n, r, o),
        !0;
    case "mouseover":
        return $n = Yo($n, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return Es.set(s, Yo(Es.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        bs.set(s, Yo(bs.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function mm(e) {
    var t = cr(e.target);
    if (t !== null) {
        var n = jr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = rm(n),
                t !== null) {
                    e.blockedOn = t,
                    hm(e.priority, function() {
                        fm(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ai(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Eu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            gu = r,
            n.target.dispatchEvent(r),
            gu = null
        } else
            return t = qs(n),
            t !== null && Dc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Nf(e, t, n) {
    Ai(e) && n.delete(t)
}
function $w() {
    Cu = !1,
    Fn !== null && Ai(Fn) && (Fn = null),
    zn !== null && Ai(zn) && (zn = null),
    $n !== null && Ai($n) && ($n = null),
    Es.forEach(Nf),
    bs.forEach(Nf)
}
function Xo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Cu || (Cu = !0,
    lt.unstable_scheduleCallback(lt.unstable_NormalPriority, $w)))
}
function Ns(e) {
    function t(o) {
        return Xo(o, e)
    }
    if (0 < pi.length) {
        Xo(pi[0], e);
        for (var n = 1; n < pi.length; n++) {
            var r = pi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Fn !== null && Xo(Fn, e),
    zn !== null && Xo(zn, e),
    $n !== null && Xo($n, e),
    Es.forEach(t),
    bs.forEach(t),
    n = 0; n < Tn.length; n++)
        r = Tn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tn.length && (n = Tn[0],
    n.blockedOn === null); )
        mm(n),
        n.blockedOn === null && Tn.shift()
}
var io = mn.ReactCurrentBatchConfig
  , ta = !0;
function Bw(e, t, n, r) {
    var o = le
      , s = io.transition;
    io.transition = null;
    try {
        le = 1,
        Lc(e, t, n, r)
    } finally {
        le = o,
        io.transition = s
    }
}
function Uw(e, t, n, r) {
    var o = le
      , s = io.transition;
    io.transition = null;
    try {
        le = 4,
        Lc(e, t, n, r)
    } finally {
        le = o,
        io.transition = s
    }
}
function Lc(e, t, n, r) {
    if (ta) {
        var o = Eu(e, t, n, r);
        if (o === null)
            Ml(e, t, r, na, n),
            bf(e, r);
        else if (zw(o, e, t, n, r))
            r.stopPropagation();
        else if (bf(e, r),
        t & 4 && -1 < Fw.indexOf(e)) {
            for (; o !== null; ) {
                var s = qs(o);
                if (s !== null && dm(s),
                s = Eu(e, t, n, r),
                s === null && Ml(e, t, r, na, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            Ml(e, t, r, null, n)
    }
}
var na = null;
function Eu(e, t, n, r) {
    if (na = null,
    e = Ic(r),
    e = cr(e),
    e !== null)
        if (t = jr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = rm(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return na = e,
    null
}
function vm(e) {
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
        switch (Rw()) {
        case Oc:
            return 1;
        case am:
            return 4;
        case Ji:
        case jw:
            return 16;
        case lm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var An = null
  , Fc = null
  , Di = null;
function gm() {
    if (Di)
        return Di;
    var e, t = Fc, n = t.length, r, o = "value"in An ? An.value : An.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
        ;
    return Di = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Li(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function hi() {
    return !0
}
function Pf() {
    return !1
}
function ct(e) {
    function t(n, r, o, s, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? hi : Pf,
        this.isPropagationStopped = Pf,
        this
    }
    return Se(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = hi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = hi)
        },
        persist: function() {},
        isPersistent: hi
    }),
    t
}
var Do = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, zc = ct(Do), Xs = Se({}, Do, {
    view: 0,
    detail: 0
}), Vw = ct(Xs), Cl, El, qo, Ia = Se({}, Xs, {
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
    getModifierState: $c,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== qo && (qo && e.type === "mousemove" ? (Cl = e.screenX - qo.screenX,
        El = e.screenY - qo.screenY) : El = Cl = 0,
        qo = e),
        Cl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : El
    }
}), kf = ct(Ia), Hw = Se({}, Ia, {
    dataTransfer: 0
}), Ww = ct(Hw), Kw = Se({}, Xs, {
    relatedTarget: 0
}), bl = ct(Kw), Gw = Se({}, Do, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Qw = ct(Gw), Yw = Se({}, Do, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Xw = ct(Yw), qw = Se({}, Do, {
    data: 0
}), Tf = ct(qw), Zw = {
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
    MozPrintableKey: "Unidentified"
}, Jw = {
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
    224: "Meta"
}, e1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function t1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = e1[e]) ? !!t[e] : !1
}
function $c() {
    return t1
}
var n1 = Se({}, Xs, {
    key: function(e) {
        if (e.key) {
            var t = Zw[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Li(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jw[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $c,
    charCode: function(e) {
        return e.type === "keypress" ? Li(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , r1 = ct(n1)
  , o1 = Se({}, Ia, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Rf = ct(o1)
  , s1 = Se({}, Xs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $c
})
  , i1 = ct(s1)
  , a1 = Se({}, Do, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , l1 = ct(a1)
  , u1 = Se({}, Ia, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , c1 = ct(u1)
  , d1 = [9, 13, 27, 32]
  , Bc = un && "CompositionEvent"in window
  , fs = null;
un && "documentMode"in document && (fs = document.documentMode);
var f1 = un && "TextEvent"in window && !fs
  , ym = un && (!Bc || fs && 8 < fs && 11 >= fs)
  , jf = " "
  , Mf = !1;
function xm(e, t) {
    switch (e) {
    case "keyup":
        return d1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function wm(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Kr = !1;
function p1(e, t) {
    switch (e) {
    case "compositionend":
        return wm(t);
    case "keypress":
        return t.which !== 32 ? null : (Mf = !0,
        jf);
    case "textInput":
        return e = t.data,
        e === jf && Mf ? null : e;
    default:
        return null
    }
}
function h1(e, t) {
    if (Kr)
        return e === "compositionend" || !Bc && xm(e, t) ? (e = gm(),
        Di = Fc = An = null,
        Kr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return ym && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var m1 = {
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
    week: !0
};
function _f(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!m1[e.type] : t === "textarea"
}
function Sm(e, t, n, r) {
    Zh(r),
    t = ra(t, "onChange"),
    0 < t.length && (n = new zc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ps = null
  , Ps = null;
function v1(e) {
    _m(e, 0)
}
function Oa(e) {
    var t = Yr(e);
    if (Wh(t))
        return e
}
function g1(e, t) {
    if (e === "change")
        return t
}
var Cm = !1;
if (un) {
    var Nl;
    if (un) {
        var Pl = "oninput"in document;
        if (!Pl) {
            var If = document.createElement("div");
            If.setAttribute("oninput", "return;"),
            Pl = typeof If.oninput == "function"
        }
        Nl = Pl
    } else
        Nl = !1;
    Cm = Nl && (!document.documentMode || 9 < document.documentMode)
}
function Of() {
    ps && (ps.detachEvent("onpropertychange", Em),
    Ps = ps = null)
}
function Em(e) {
    if (e.propertyName === "value" && Oa(Ps)) {
        var t = [];
        Sm(t, Ps, e, Ic(e)),
        nm(v1, t)
    }
}
function y1(e, t, n) {
    e === "focusin" ? (Of(),
    ps = t,
    Ps = n,
    ps.attachEvent("onpropertychange", Em)) : e === "focusout" && Of()
}
function x1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Oa(Ps)
}
function w1(e, t) {
    if (e === "click")
        return Oa(t)
}
function S1(e, t) {
    if (e === "input" || e === "change")
        return Oa(t)
}
function C1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var At = typeof Object.is == "function" ? Object.is : C1;
function ks(e, t) {
    if (At(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!su.call(t, o) || !At(e[o], t[o]))
            return !1
    }
    return !0
}
function Af(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Df(e, t) {
    var n = Af(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Af(n)
    }
}
function bm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bm(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Nm() {
    for (var e = window, t = Xi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Xi(e.document)
    }
    return t
}
function Uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function E1(e) {
    var t = Nm()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bm(n.ownerDocument.documentElement, n)) {
        if (r !== null && Uc(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = Df(n, s);
                var i = Df(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var b1 = un && "documentMode"in document && 11 >= document.documentMode
  , Gr = null
  , bu = null
  , hs = null
  , Nu = !1;
function Lf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Nu || Gr == null || Gr !== Xi(r) || (r = Gr,
    "selectionStart"in r && Uc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    hs && ks(hs, r) || (hs = r,
    r = ra(bu, "onSelect"),
    0 < r.length && (t = new zc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Gr)))
}
function mi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Qr = {
    animationend: mi("Animation", "AnimationEnd"),
    animationiteration: mi("Animation", "AnimationIteration"),
    animationstart: mi("Animation", "AnimationStart"),
    transitionend: mi("Transition", "TransitionEnd")
}
  , kl = {}
  , Pm = {};
un && (Pm = document.createElement("div").style,
"AnimationEvent"in window || (delete Qr.animationend.animation,
delete Qr.animationiteration.animation,
delete Qr.animationstart.animation),
"TransitionEvent"in window || delete Qr.transitionend.transition);
function Aa(e) {
    if (kl[e])
        return kl[e];
    if (!Qr[e])
        return e;
    var t = Qr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Pm)
            return kl[e] = t[n];
    return e
}
var km = Aa("animationend")
  , Tm = Aa("animationiteration")
  , Rm = Aa("animationstart")
  , jm = Aa("transitionend")
  , Mm = new Map
  , Ff = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qn(e, t) {
    Mm.set(e, t),
    Rr(t, [e])
}
for (var Tl = 0; Tl < Ff.length; Tl++) {
    var Rl = Ff[Tl]
      , N1 = Rl.toLowerCase()
      , P1 = Rl[0].toUpperCase() + Rl.slice(1);
    qn(N1, "on" + P1)
}
qn(km, "onAnimationEnd");
qn(Tm, "onAnimationIteration");
qn(Rm, "onAnimationStart");
qn("dblclick", "onDoubleClick");
qn("focusin", "onFocus");
qn("focusout", "onBlur");
qn(jm, "onTransitionEnd");
Eo("onMouseEnter", ["mouseout", "mouseover"]);
Eo("onMouseLeave", ["mouseout", "mouseover"]);
Eo("onPointerEnter", ["pointerout", "pointerover"]);
Eo("onPointerLeave", ["pointerout", "pointerover"]);
Rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , k1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
function zf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Nw(r, t, void 0, e),
    e.currentTarget = null
}
function _m(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    zf(o, a, u),
                    s = l
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    zf(o, a, u),
                    s = l
                }
        }
    }
    if (Zi)
        throw e = wu,
        Zi = !1,
        wu = null,
        e
}
function me(e, t) {
    var n = t[ju];
    n === void 0 && (n = t[ju] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Im(t, e, 2, !1),
    n.add(r))
}
function jl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Im(n, e, r, t)
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function Ts(e) {
    if (!e[vi]) {
        e[vi] = !0,
        $h.forEach(function(n) {
            n !== "selectionchange" && (k1.has(n) || jl(n, !1, e),
            jl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[vi] || (t[vi] = !0,
        jl("selectionchange", !1, t))
    }
}
function Im(e, t, n, r) {
    switch (vm(t)) {
    case 1:
        var o = Bw;
        break;
    case 4:
        o = Uw;
        break;
    default:
        o = Lc
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Ml(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var l = i.tag;
                        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = cr(a),
                    i === null)
                        return;
                    if (l = i.tag,
                    l === 5 || l === 6) {
                        r = s = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    nm(function() {
        var u = s
          , f = Ic(n)
          , p = [];
        e: {
            var m = Mm.get(e);
            if (m !== void 0) {
                var h = zc
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Li(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = r1;
                    break;
                case "focusin":
                    S = "focus",
                    h = bl;
                    break;
                case "focusout":
                    S = "blur",
                    h = bl;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = bl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = kf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = Ww;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = i1;
                    break;
                case km:
                case Tm:
                case Rm:
                    h = Qw;
                    break;
                case jm:
                    h = l1;
                    break;
                case "scroll":
                    h = Vw;
                    break;
                case "wheel":
                    h = c1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = Xw;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = Rf
                }
                var v = (t & 4) !== 0
                  , w = !v && e === "scroll"
                  , y = v ? m !== null ? m + "Capture" : null : m;
                v = [];
                for (var g = u, x; g !== null; ) {
                    x = g;
                    var C = x.stateNode;
                    if (x.tag === 5 && C !== null && (x = C,
                    y !== null && (C = Cs(g, y),
                    C != null && v.push(Rs(g, C, x)))),
                    w)
                        break;
                    g = g.return
                }
                0 < v.length && (m = new h(m,S,null,n,f),
                p.push({
                    event: m,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                m && n !== gu && (S = n.relatedTarget || n.fromElement) && (cr(S) || S[cn]))
                    break e;
                if ((h || m) && (m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window,
                h ? (S = n.relatedTarget || n.toElement,
                h = u,
                S = S ? cr(S) : null,
                S !== null && (w = jr(S),
                S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (h = null,
                S = u),
                h !== S)) {
                    if (v = kf,
                    C = "onMouseLeave",
                    y = "onMouseEnter",
                    g = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Rf,
                    C = "onPointerLeave",
                    y = "onPointerEnter",
                    g = "pointer"),
                    w = h == null ? m : Yr(h),
                    x = S == null ? m : Yr(S),
                    m = new v(C,g + "leave",h,n,f),
                    m.target = w,
                    m.relatedTarget = x,
                    C = null,
                    cr(f) === u && (v = new v(y,g + "enter",S,n,f),
                    v.target = x,
                    v.relatedTarget = w,
                    C = v),
                    w = C,
                    h && S)
                        t: {
                            for (v = h,
                            y = S,
                            g = 0,
                            x = v; x; x = $r(x))
                                g++;
                            for (x = 0,
                            C = y; C; C = $r(C))
                                x++;
                            for (; 0 < g - x; )
                                v = $r(v),
                                g--;
                            for (; 0 < x - g; )
                                y = $r(y),
                                x--;
                            for (; g--; ) {
                                if (v === y || y !== null && v === y.alternate)
                                    break t;
                                v = $r(v),
                                y = $r(y)
                            }
                            v = null
                        }
                    else
                        v = null;
                    h !== null && $f(p, m, h, v, !1),
                    S !== null && w !== null && $f(p, w, S, v, !0)
                }
            }
            e: {
                if (m = u ? Yr(u) : window,
                h = m.nodeName && m.nodeName.toLowerCase(),
                h === "select" || h === "input" && m.type === "file")
                    var E = g1;
                else if (_f(m))
                    if (Cm)
                        E = S1;
                    else {
                        E = x1;
                        var P = y1
                    }
                else
                    (h = m.nodeName) && h.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = w1);
                if (E && (E = E(e, u))) {
                    Sm(p, E, n, f);
                    break e
                }
                P && P(e, m, u),
                e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && fu(m, "number", m.value)
            }
            switch (P = u ? Yr(u) : window,
            e) {
            case "focusin":
                (_f(P) || P.contentEditable === "true") && (Gr = P,
                bu = u,
                hs = null);
                break;
            case "focusout":
                hs = bu = Gr = null;
                break;
            case "mousedown":
                Nu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Nu = !1,
                Lf(p, n, f);
                break;
            case "selectionchange":
                if (b1)
                    break;
            case "keydown":
            case "keyup":
                Lf(p, n, f)
            }
            var b;
            if (Bc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                Kr ? xm(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (ym && n.locale !== "ko" && (Kr || T !== "onCompositionStart" ? T === "onCompositionEnd" && Kr && (b = gm()) : (An = f,
            Fc = "value"in An ? An.value : An.textContent,
            Kr = !0)),
            P = ra(u, T),
            0 < P.length && (T = new Tf(T,e,null,n,f),
            p.push({
                event: T,
                listeners: P
            }),
            b ? T.data = b : (b = wm(n),
            b !== null && (T.data = b)))),
            (b = f1 ? p1(e, n) : h1(e, n)) && (u = ra(u, "onBeforeInput"),
            0 < u.length && (f = new Tf("onBeforeInput","beforeinput",null,n,f),
            p.push({
                event: f,
                listeners: u
            }),
            f.data = b))
        }
        _m(p, t)
    })
}
function Rs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ra(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = Cs(e, n),
        s != null && r.unshift(Rs(e, s, o)),
        s = Cs(e, t),
        s != null && r.push(Rs(e, s, o))),
        e = e.return
    }
    return r
}
function $r(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function $f(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = Cs(n, s),
        l != null && i.unshift(Rs(n, l, a))) : o || (l = Cs(n, s),
        l != null && i.push(Rs(n, l, a)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var T1 = /\r\n?/g
  , R1 = /\u0000|\uFFFD/g;
function Bf(e) {
    return (typeof e == "string" ? e : "" + e).replace(T1, `
`).replace(R1, "")
}
function gi(e, t, n) {
    if (t = Bf(t),
    Bf(e) !== t && n)
        throw Error(_(425))
}
function oa() {}
var Pu = null
  , ku = null;
function Tu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ru = typeof setTimeout == "function" ? setTimeout : void 0
  , j1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Uf = typeof Promise == "function" ? Promise : void 0
  , M1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uf < "u" ? function(e) {
    return Uf.resolve(null).then(e).catch(_1)
}
: Ru;
function _1(e) {
    setTimeout(function() {
        throw e
    })
}
function _l(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Ns(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Ns(t)
}
function Bn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Vf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Lo = Math.random().toString(36).slice(2)
  , Vt = "__reactFiber$" + Lo
  , js = "__reactProps$" + Lo
  , cn = "__reactContainer$" + Lo
  , ju = "__reactEvents$" + Lo
  , I1 = "__reactListeners$" + Lo
  , O1 = "__reactHandles$" + Lo;
function cr(e) {
    var t = e[Vt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[cn] || n[Vt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Vf(e); e !== null; ) {
                    if (n = e[Vt])
                        return n;
                    e = Vf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function qs(e) {
    return e = e[Vt] || e[cn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Yr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(_(33))
}
function Da(e) {
    return e[js] || null
}
var Mu = []
  , Xr = -1;
function Zn(e) {
    return {
        current: e
    }
}
function ve(e) {
    0 > Xr || (e.current = Mu[Xr],
    Mu[Xr] = null,
    Xr--)
}
function pe(e, t) {
    Xr++,
    Mu[Xr] = e.current,
    e.current = t
}
var Qn = {}
  , Ue = Zn(Qn)
  , et = Zn(!1)
  , Sr = Qn;
function bo(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Qn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function tt(e) {
    return e = e.childContextTypes,
    e != null
}
function sa() {
    ve(et),
    ve(Ue)
}
function Hf(e, t, n) {
    if (Ue.current !== Qn)
        throw Error(_(168));
    pe(Ue, t),
    pe(et, n)
}
function Om(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(_(108, yw(e) || "Unknown", o));
    return Se({}, n, r)
}
function ia(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qn,
    Sr = Ue.current,
    pe(Ue, e),
    pe(et, et.current),
    !0
}
function Wf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(_(169));
    n ? (e = Om(e, t, Sr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ve(et),
    ve(Ue),
    pe(Ue, e)) : ve(et),
    pe(et, n)
}
var en = null
  , La = !1
  , Il = !1;
function Am(e) {
    en === null ? en = [e] : en.push(e)
}
function A1(e) {
    La = !0,
    Am(e)
}
function Jn() {
    if (!Il && en !== null) {
        Il = !0;
        var e = 0
          , t = le;
        try {
            var n = en;
            for (le = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            en = null,
            La = !1
        } catch (o) {
            throw en !== null && (en = en.slice(e + 1)),
            im(Oc, Jn),
            o
        } finally {
            le = t,
            Il = !1
        }
    }
    return null
}
var qr = []
  , Zr = 0
  , aa = null
  , la = 0
  , ht = []
  , mt = 0
  , Cr = null
  , nn = 1
  , rn = "";
function lr(e, t) {
    qr[Zr++] = la,
    qr[Zr++] = aa,
    aa = e,
    la = t
}
function Dm(e, t, n) {
    ht[mt++] = nn,
    ht[mt++] = rn,
    ht[mt++] = Cr,
    Cr = e;
    var r = nn;
    e = rn;
    var o = 32 - It(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - It(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        nn = 1 << 32 - It(t) + o | n << o | r,
        rn = s + e
    } else
        nn = 1 << s | n << o | r,
        rn = e
}
function Vc(e) {
    e.return !== null && (lr(e, 1),
    Dm(e, 1, 0))
}
function Hc(e) {
    for (; e === aa; )
        aa = qr[--Zr],
        qr[Zr] = null,
        la = qr[--Zr],
        qr[Zr] = null;
    for (; e === Cr; )
        Cr = ht[--mt],
        ht[mt] = null,
        rn = ht[--mt],
        ht[mt] = null,
        nn = ht[--mt],
        ht[mt] = null
}
var it = null
  , st = null
  , ye = !1
  , _t = null;
function Lm(e, t) {
    var n = vt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Kf(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        it = e,
        st = Bn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        it = e,
        st = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Cr !== null ? {
            id: nn,
            overflow: rn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = vt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        it = e,
        st = null,
        !0) : !1;
    default:
        return !1
    }
}
function _u(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Iu(e) {
    if (ye) {
        var t = st;
        if (t) {
            var n = t;
            if (!Kf(e, t)) {
                if (_u(e))
                    throw Error(_(418));
                t = Bn(n.nextSibling);
                var r = it;
                t && Kf(e, t) ? Lm(r, n) : (e.flags = e.flags & -4097 | 2,
                ye = !1,
                it = e)
            }
        } else {
            if (_u(e))
                throw Error(_(418));
            e.flags = e.flags & -4097 | 2,
            ye = !1,
            it = e
        }
    }
}
function Gf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    it = e
}
function yi(e) {
    if (e !== it)
        return !1;
    if (!ye)
        return Gf(e),
        ye = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Tu(e.type, e.memoizedProps)),
    t && (t = st)) {
        if (_u(e))
            throw Fm(),
            Error(_(418));
        for (; t; )
            Lm(e, t),
            t = Bn(t.nextSibling)
    }
    if (Gf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(_(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            st = Bn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            st = null
        }
    } else
        st = it ? Bn(e.stateNode.nextSibling) : null;
    return !0
}
function Fm() {
    for (var e = st; e; )
        e = Bn(e.nextSibling)
}
function No() {
    st = it = null,
    ye = !1
}
function Wc(e) {
    _t === null ? _t = [e] : _t.push(e)
}
var D1 = mn.ReactCurrentBatchConfig;
function Zo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(_(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(_(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var a = o.refs;
                i === null ? delete a[s] : a[s] = i
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(_(284));
        if (!n._owner)
            throw Error(_(290, e))
    }
    return e
}
function xi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Qf(e) {
    var t = e._init;
    return t(e._payload)
}
function zm(e) {
    function t(y, g) {
        if (e) {
            var x = y.deletions;
            x === null ? (y.deletions = [g],
            y.flags |= 16) : x.push(g)
        }
    }
    function n(y, g) {
        if (!e)
            return null;
        for (; g !== null; )
            t(y, g),
            g = g.sibling;
        return null
    }
    function r(y, g) {
        for (y = new Map; g !== null; )
            g.key !== null ? y.set(g.key, g) : y.set(g.index, g),
            g = g.sibling;
        return y
    }
    function o(y, g) {
        return y = Wn(y, g),
        y.index = 0,
        y.sibling = null,
        y
    }
    function s(y, g, x) {
        return y.index = x,
        e ? (x = y.alternate,
        x !== null ? (x = x.index,
        x < g ? (y.flags |= 2,
        g) : x) : (y.flags |= 2,
        g)) : (y.flags |= 1048576,
        g)
    }
    function i(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function a(y, g, x, C) {
        return g === null || g.tag !== 6 ? (g = $l(x, y.mode, C),
        g.return = y,
        g) : (g = o(g, x),
        g.return = y,
        g)
    }
    function l(y, g, x, C) {
        var E = x.type;
        return E === Wr ? f(y, g, x.props.children, C, x.key) : g !== null && (g.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Pn && Qf(E) === g.type) ? (C = o(g, x.props),
        C.ref = Zo(y, g, x),
        C.return = y,
        C) : (C = Hi(x.type, x.key, x.props, null, y.mode, C),
        C.ref = Zo(y, g, x),
        C.return = y,
        C)
    }
    function u(y, g, x, C) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== x.containerInfo || g.stateNode.implementation !== x.implementation ? (g = Bl(x, y.mode, C),
        g.return = y,
        g) : (g = o(g, x.children || []),
        g.return = y,
        g)
    }
    function f(y, g, x, C, E) {
        return g === null || g.tag !== 7 ? (g = wr(x, y.mode, C, E),
        g.return = y,
        g) : (g = o(g, x),
        g.return = y,
        g)
    }
    function p(y, g, x) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return g = $l("" + g, y.mode, x),
            g.return = y,
            g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case li:
                return x = Hi(g.type, g.key, g.props, null, y.mode, x),
                x.ref = Zo(y, null, g),
                x.return = y,
                x;
            case Hr:
                return g = Bl(g, y.mode, x),
                g.return = y,
                g;
            case Pn:
                var C = g._init;
                return p(y, C(g._payload), x)
            }
            if (os(g) || Go(g))
                return g = wr(g, y.mode, x, null),
                g.return = y,
                g;
            xi(y, g)
        }
        return null
    }
    function m(y, g, x, C) {
        var E = g !== null ? g.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return E !== null ? null : a(y, g, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case li:
                return x.key === E ? l(y, g, x, C) : null;
            case Hr:
                return x.key === E ? u(y, g, x, C) : null;
            case Pn:
                return E = x._init,
                m(y, g, E(x._payload), C)
            }
            if (os(x) || Go(x))
                return E !== null ? null : f(y, g, x, C, null);
            xi(y, x)
        }
        return null
    }
    function h(y, g, x, C, E) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return y = y.get(x) || null,
            a(g, y, "" + C, E);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case li:
                return y = y.get(C.key === null ? x : C.key) || null,
                l(g, y, C, E);
            case Hr:
                return y = y.get(C.key === null ? x : C.key) || null,
                u(g, y, C, E);
            case Pn:
                var P = C._init;
                return h(y, g, x, P(C._payload), E)
            }
            if (os(C) || Go(C))
                return y = y.get(x) || null,
                f(g, y, C, E, null);
            xi(g, C)
        }
        return null
    }
    function S(y, g, x, C) {
        for (var E = null, P = null, b = g, T = g = 0, M = null; b !== null && T < x.length; T++) {
            b.index > T ? (M = b,
            b = null) : M = b.sibling;
            var j = m(y, b, x[T], C);
            if (j === null) {
                b === null && (b = M);
                break
            }
            e && b && j.alternate === null && t(y, b),
            g = s(j, g, T),
            P === null ? E = j : P.sibling = j,
            P = j,
            b = M
        }
        if (T === x.length)
            return n(y, b),
            ye && lr(y, T),
            E;
        if (b === null) {
            for (; T < x.length; T++)
                b = p(y, x[T], C),
                b !== null && (g = s(b, g, T),
                P === null ? E = b : P.sibling = b,
                P = b);
            return ye && lr(y, T),
            E
        }
        for (b = r(y, b); T < x.length; T++)
            M = h(b, y, T, x[T], C),
            M !== null && (e && M.alternate !== null && b.delete(M.key === null ? T : M.key),
            g = s(M, g, T),
            P === null ? E = M : P.sibling = M,
            P = M);
        return e && b.forEach(function(U) {
            return t(y, U)
        }),
        ye && lr(y, T),
        E
    }
    function v(y, g, x, C) {
        var E = Go(x);
        if (typeof E != "function")
            throw Error(_(150));
        if (x = E.call(x),
        x == null)
            throw Error(_(151));
        for (var P = E = null, b = g, T = g = 0, M = null, j = x.next(); b !== null && !j.done; T++,
        j = x.next()) {
            b.index > T ? (M = b,
            b = null) : M = b.sibling;
            var U = m(y, b, j.value, C);
            if (U === null) {
                b === null && (b = M);
                break
            }
            e && b && U.alternate === null && t(y, b),
            g = s(U, g, T),
            P === null ? E = U : P.sibling = U,
            P = U,
            b = M
        }
        if (j.done)
            return n(y, b),
            ye && lr(y, T),
            E;
        if (b === null) {
            for (; !j.done; T++,
            j = x.next())
                j = p(y, j.value, C),
                j !== null && (g = s(j, g, T),
                P === null ? E = j : P.sibling = j,
                P = j);
            return ye && lr(y, T),
            E
        }
        for (b = r(y, b); !j.done; T++,
        j = x.next())
            j = h(b, y, T, j.value, C),
            j !== null && (e && j.alternate !== null && b.delete(j.key === null ? T : j.key),
            g = s(j, g, T),
            P === null ? E = j : P.sibling = j,
            P = j);
        return e && b.forEach(function(D) {
            return t(y, D)
        }),
        ye && lr(y, T),
        E
    }
    function w(y, g, x, C) {
        if (typeof x == "object" && x !== null && x.type === Wr && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case li:
                e: {
                    for (var E = x.key, P = g; P !== null; ) {
                        if (P.key === E) {
                            if (E = x.type,
                            E === Wr) {
                                if (P.tag === 7) {
                                    n(y, P.sibling),
                                    g = o(P, x.props.children),
                                    g.return = y,
                                    y = g;
                                    break e
                                }
                            } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Pn && Qf(E) === P.type) {
                                n(y, P.sibling),
                                g = o(P, x.props),
                                g.ref = Zo(y, P, x),
                                g.return = y,
                                y = g;
                                break e
                            }
                            n(y, P);
                            break
                        } else
                            t(y, P);
                        P = P.sibling
                    }
                    x.type === Wr ? (g = wr(x.props.children, y.mode, C, x.key),
                    g.return = y,
                    y = g) : (C = Hi(x.type, x.key, x.props, null, y.mode, C),
                    C.ref = Zo(y, g, x),
                    C.return = y,
                    y = C)
                }
                return i(y);
            case Hr:
                e: {
                    for (P = x.key; g !== null; ) {
                        if (g.key === P)
                            if (g.tag === 4 && g.stateNode.containerInfo === x.containerInfo && g.stateNode.implementation === x.implementation) {
                                n(y, g.sibling),
                                g = o(g, x.children || []),
                                g.return = y,
                                y = g;
                                break e
                            } else {
                                n(y, g);
                                break
                            }
                        else
                            t(y, g);
                        g = g.sibling
                    }
                    g = Bl(x, y.mode, C),
                    g.return = y,
                    y = g
                }
                return i(y);
            case Pn:
                return P = x._init,
                w(y, g, P(x._payload), C)
            }
            if (os(x))
                return S(y, g, x, C);
            if (Go(x))
                return v(y, g, x, C);
            xi(y, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        g !== null && g.tag === 6 ? (n(y, g.sibling),
        g = o(g, x),
        g.return = y,
        y = g) : (n(y, g),
        g = $l(x, y.mode, C),
        g.return = y,
        y = g),
        i(y)) : n(y, g)
    }
    return w
}
var Po = zm(!0)
  , $m = zm(!1)
  , ua = Zn(null)
  , ca = null
  , Jr = null
  , Kc = null;
function Gc() {
    Kc = Jr = ca = null
}
function Qc(e) {
    var t = ua.current;
    ve(ua),
    e._currentValue = t
}
function Ou(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function ao(e, t) {
    ca = e,
    Kc = Jr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Je = !0),
    e.firstContext = null)
}
function xt(e) {
    var t = e._currentValue;
    if (Kc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Jr === null) {
            if (ca === null)
                throw Error(_(308));
            Jr = e,
            ca.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Jr = Jr.next = e;
    return t
}
var dr = null;
function Yc(e) {
    dr === null ? dr = [e] : dr.push(e)
}
function Bm(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Yc(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    dn(e, r)
}
function dn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var kn = !1;
function Xc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Um(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function on(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Un(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    re & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        dn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Yc(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    dn(e, n)
}
function Fi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ac(e, n)
    }
}
function Yf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function da(e, t, n, r) {
    var o = e.updateQueue;
    kn = !1;
    var s = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        i === null ? s = u : i.next = u,
        i = l;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        a = f.lastBaseUpdate,
        a !== i && (a === null ? f.firstBaseUpdate = u : a.next = u,
        f.lastBaseUpdate = l))
    }
    if (s !== null) {
        var p = o.baseState;
        i = 0,
        f = u = l = null,
        a = s;
        do {
            var m = a.lane
              , h = a.eventTime;
            if ((r & m) === m) {
                f !== null && (f = f.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e
                      , v = a;
                    switch (m = t,
                    h = n,
                    v.tag) {
                    case 1:
                        if (S = v.payload,
                        typeof S == "function") {
                            p = S.call(h, p, m);
                            break e
                        }
                        p = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = v.payload,
                        m = typeof S == "function" ? S.call(h, p, m) : S,
                        m == null)
                            break e;
                        p = Se({}, p, m);
                        break e;
                    case 2:
                        kn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                m = o.effects,
                m === null ? o.effects = [a] : m.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: m,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                f === null ? (u = f = h,
                l = p) : f = f.next = h,
                i |= m;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                m = a,
                a = m.next,
                m.next = null,
                o.lastBaseUpdate = m,
                o.shared.pending = null
            }
        } while (!0);
        if (f === null && (l = p),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = f,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        br |= i,
        e.lanes = i,
        e.memoizedState = p
    }
}
function Xf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(_(191, o));
                o.call(r)
            }
        }
}
var Zs = {}
  , Gt = Zn(Zs)
  , Ms = Zn(Zs)
  , _s = Zn(Zs);
function fr(e) {
    if (e === Zs)
        throw Error(_(174));
    return e
}
function qc(e, t) {
    switch (pe(_s, t),
    pe(Ms, e),
    pe(Gt, Zs),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : hu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = hu(t, e)
    }
    ve(Gt),
    pe(Gt, t)
}
function ko() {
    ve(Gt),
    ve(Ms),
    ve(_s)
}
function Vm(e) {
    fr(_s.current);
    var t = fr(Gt.current)
      , n = hu(t, e.type);
    t !== n && (pe(Ms, e),
    pe(Gt, n))
}
function Zc(e) {
    Ms.current === e && (ve(Gt),
    ve(Ms))
}
var xe = Zn(0);
function fa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ol = [];
function Jc() {
    for (var e = 0; e < Ol.length; e++)
        Ol[e]._workInProgressVersionPrimary = null;
    Ol.length = 0
}
var zi = mn.ReactCurrentDispatcher
  , Al = mn.ReactCurrentBatchConfig
  , Er = 0
  , we = null
  , Te = null
  , je = null
  , pa = !1
  , ms = !1
  , Is = 0
  , L1 = 0;
function Fe() {
    throw Error(_(321))
}
function ed(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!At(e[n], t[n]))
            return !1;
    return !0
}
function td(e, t, n, r, o, s) {
    if (Er = s,
    we = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    zi.current = e === null || e.memoizedState === null ? B1 : U1,
    e = n(r, o),
    ms) {
        s = 0;
        do {
            if (ms = !1,
            Is = 0,
            25 <= s)
                throw Error(_(301));
            s += 1,
            je = Te = null,
            t.updateQueue = null,
            zi.current = V1,
            e = n(r, o)
        } while (ms)
    }
    if (zi.current = ha,
    t = Te !== null && Te.next !== null,
    Er = 0,
    je = Te = we = null,
    pa = !1,
    t)
        throw Error(_(300));
    return e
}
function nd() {
    var e = Is !== 0;
    return Is = 0,
    e
}
function zt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return je === null ? we.memoizedState = je = e : je = je.next = e,
    je
}
function wt() {
    if (Te === null) {
        var e = we.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Te.next;
    var t = je === null ? we.memoizedState : je.next;
    if (t !== null)
        je = t,
        Te = e;
    else {
        if (e === null)
            throw Error(_(310));
        Te = e,
        e = {
            memoizedState: Te.memoizedState,
            baseState: Te.baseState,
            baseQueue: Te.baseQueue,
            queue: Te.queue,
            next: null
        },
        je === null ? we.memoizedState = je = e : je = je.next = e
    }
    return je
}
function Os(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Dl(e) {
    var t = wt()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = Te
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next,
            s.next = i
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var a = i = null
          , l = null
          , u = s;
        do {
            var f = u.lane;
            if ((Er & f) === f)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = p,
                i = r) : l = l.next = p,
                we.lanes |= f,
                br |= f
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? i = r : l.next = a,
        At(r, t.memoizedState) || (Je = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            we.lanes |= s,
            br |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ll(e) {
    var t = wt()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            s = e(s, i.action),
            i = i.next;
        while (i !== o);
        At(s, t.memoizedState) || (Je = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Hm() {}
function Wm(e, t) {
    var n = we
      , r = wt()
      , o = t()
      , s = !At(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    Je = !0),
    r = r.queue,
    rd(Qm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || je !== null && je.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        As(9, Gm.bind(null, n, r, o, t), void 0, null),
        Me === null)
            throw Error(_(349));
        Er & 30 || Km(n, t, o)
    }
    return o
}
function Km(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = we.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    we.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Gm(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Ym(t) && Xm(e)
}
function Qm(e, t, n) {
    return n(function() {
        Ym(t) && Xm(e)
    })
}
function Ym(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !At(e, n)
    } catch {
        return !0
    }
}
function Xm(e) {
    var t = dn(e, 1);
    t !== null && Ot(t, e, 1, -1)
}
function qf(e) {
    var t = zt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Os,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = $1.bind(null, we, e),
    [t.memoizedState, e]
}
function As(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = we.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    we.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function qm() {
    return wt().memoizedState
}
function $i(e, t, n, r) {
    var o = zt();
    we.flags |= e,
    o.memoizedState = As(1 | t, n, void 0, r === void 0 ? null : r)
}
function Fa(e, t, n, r) {
    var o = wt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Te !== null) {
        var i = Te.memoizedState;
        if (s = i.destroy,
        r !== null && ed(r, i.deps)) {
            o.memoizedState = As(t, n, s, r);
            return
        }
    }
    we.flags |= e,
    o.memoizedState = As(1 | t, n, s, r)
}
function Zf(e, t) {
    return $i(8390656, 8, e, t)
}
function rd(e, t) {
    return Fa(2048, 8, e, t)
}
function Zm(e, t) {
    return Fa(4, 2, e, t)
}
function Jm(e, t) {
    return Fa(4, 4, e, t)
}
function ev(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function tv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Fa(4, 4, ev.bind(null, t, e), n)
}
function od() {}
function nv(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ed(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function rv(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ed(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ov(e, t, n) {
    return Er & 21 ? (At(n, t) || (n = um(),
    we.lanes |= n,
    br |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Je = !0),
    e.memoizedState = n)
}
function F1(e, t) {
    var n = le;
    le = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Al.transition;
    Al.transition = {};
    try {
        e(!1),
        t()
    } finally {
        le = n,
        Al.transition = r
    }
}
function sv() {
    return wt().memoizedState
}
function z1(e, t, n) {
    var r = Hn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    iv(e))
        av(t, n);
    else if (n = Bm(e, t, n, r),
    n !== null) {
        var o = Ke();
        Ot(n, e, r, o),
        lv(n, t, r)
    }
}
function $1(e, t, n) {
    var r = Hn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (iv(e))
        av(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var i = t.lastRenderedState
                  , a = s(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                At(a, i)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Yc(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Bm(e, t, o, r),
        n !== null && (o = Ke(),
        Ot(n, e, r, o),
        lv(n, t, r))
    }
}
function iv(e) {
    var t = e.alternate;
    return e === we || t !== null && t === we
}
function av(e, t) {
    ms = pa = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function lv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ac(e, n)
    }
}
var ha = {
    readContext: xt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1
}
  , B1 = {
    readContext: xt,
    useCallback: function(e, t) {
        return zt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: xt,
    useEffect: Zf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        $i(4194308, 4, ev.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return $i(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return $i(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = zt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = zt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = z1.bind(null, we, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = zt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: qf,
    useDebugValue: od,
    useDeferredValue: function(e) {
        return zt().memoizedState = e
    },
    useTransition: function() {
        var e = qf(!1)
          , t = e[0];
        return e = F1.bind(null, e[1]),
        zt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = we
          , o = zt();
        if (ye) {
            if (n === void 0)
                throw Error(_(407));
            n = n()
        } else {
            if (n = t(),
            Me === null)
                throw Error(_(349));
            Er & 30 || Km(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        Zf(Qm.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        As(9, Gm.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = zt()
          , t = Me.identifierPrefix;
        if (ye) {
            var n = rn
              , r = nn;
            n = (r & ~(1 << 32 - It(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Is++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = L1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , U1 = {
    readContext: xt,
    useCallback: nv,
    useContext: xt,
    useEffect: rd,
    useImperativeHandle: tv,
    useInsertionEffect: Zm,
    useLayoutEffect: Jm,
    useMemo: rv,
    useReducer: Dl,
    useRef: qm,
    useState: function() {
        return Dl(Os)
    },
    useDebugValue: od,
    useDeferredValue: function(e) {
        var t = wt();
        return ov(t, Te.memoizedState, e)
    },
    useTransition: function() {
        var e = Dl(Os)[0]
          , t = wt().memoizedState;
        return [e, t]
    },
    useMutableSource: Hm,
    useSyncExternalStore: Wm,
    useId: sv,
    unstable_isNewReconciler: !1
}
  , V1 = {
    readContext: xt,
    useCallback: nv,
    useContext: xt,
    useEffect: rd,
    useImperativeHandle: tv,
    useInsertionEffect: Zm,
    useLayoutEffect: Jm,
    useMemo: rv,
    useReducer: Ll,
    useRef: qm,
    useState: function() {
        return Ll(Os)
    },
    useDebugValue: od,
    useDeferredValue: function(e) {
        var t = wt();
        return Te === null ? t.memoizedState = e : ov(t, Te.memoizedState, e)
    },
    useTransition: function() {
        var e = Ll(Os)[0]
          , t = wt().memoizedState;
        return [e, t]
    },
    useMutableSource: Hm,
    useSyncExternalStore: Wm,
    useId: sv,
    unstable_isNewReconciler: !1
};
function kt(e, t) {
    if (e && e.defaultProps) {
        t = Se({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Au(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Se({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var za = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? jr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke()
          , o = Hn(e)
          , s = on(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = Un(e, s, o),
        t !== null && (Ot(t, e, o, r),
        Fi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke()
          , o = Hn(e)
          , s = on(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Un(e, s, o),
        t !== null && (Ot(t, e, o, r),
        Fi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ke()
          , r = Hn(e)
          , o = on(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Un(e, o, r),
        t !== null && (Ot(t, e, r, n),
        Fi(t, e, r))
    }
};
function Jf(e, t, n, r, o, s, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !ks(n, r) || !ks(o, s) : !0
}
function uv(e, t, n) {
    var r = !1
      , o = Qn
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = xt(s) : (o = tt(t) ? Sr : Ue.current,
    r = t.contextTypes,
    s = (r = r != null) ? bo(e, o) : Qn),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = za,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function ep(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && za.enqueueReplaceState(t, t.state, null)
}
function Du(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Xc(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = xt(s) : (s = tt(t) ? Sr : Ue.current,
    o.context = bo(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Au(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && za.enqueueReplaceState(o, o.state, null),
    da(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function To(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += gw(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Fl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Lu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var H1 = typeof WeakMap == "function" ? WeakMap : Map;
function cv(e, t, n) {
    n = on(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        va || (va = !0,
        Gu = r),
        Lu(e, t)
    }
    ,
    n
}
function dv(e, t, n) {
    n = on(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Lu(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Lu(e, t),
        typeof r != "function" && (Vn === null ? Vn = new Set([this]) : Vn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function tp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new H1;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = oS.bind(null, e, t, n),
    t.then(e, e))
}
function np(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function rp(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1),
    t.tag = 2,
    Un(n, t, 1))),
    n.lanes |= 1),
    e)
}
var W1 = mn.ReactCurrentOwner
  , Je = !1;
function He(e, t, n, r) {
    t.child = e === null ? $m(t, null, n, r) : Po(t, e.child, n, r)
}
function op(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return ao(t, o),
    r = td(e, t, n, r, s, o),
    n = nd(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    fn(e, t, o)) : (ye && n && Vc(t),
    t.flags |= 1,
    He(e, t, r, o),
    t.child)
}
function sp(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !fd(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        fv(e, t, s, r, o)) : (e = Hi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ks,
        n(i, r) && e.ref === t.ref)
            return fn(e, t, o)
    }
    return t.flags |= 1,
    e = Wn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function fv(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ks(s, r) && e.ref === t.ref)
            if (Je = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Je = !0);
            else
                return t.lanes = e.lanes,
                fn(e, t, o)
    }
    return Fu(e, t, n, r, o)
}
function pv(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            pe(to, rt),
            rt |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                pe(to, rt),
                rt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            pe(to, rt),
            rt |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        pe(to, rt),
        rt |= r;
    return He(e, t, o, n),
    t.child
}
function hv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Fu(e, t, n, r, o) {
    var s = tt(n) ? Sr : Ue.current;
    return s = bo(t, s),
    ao(t, o),
    n = td(e, t, n, r, s, o),
    r = nd(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    fn(e, t, o)) : (ye && r && Vc(t),
    t.flags |= 1,
    He(e, t, n, o),
    t.child)
}
function ip(e, t, n, r, o) {
    if (tt(n)) {
        var s = !0;
        ia(t)
    } else
        s = !1;
    if (ao(t, o),
    t.stateNode === null)
        Bi(e, t),
        uv(t, n, r),
        Du(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var l = i.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = xt(u) : (u = tt(n) ? Sr : Ue.current,
        u = bo(t, u));
        var f = n.getDerivedStateFromProps
          , p = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && ep(t, i, r, u),
        kn = !1;
        var m = t.memoizedState;
        i.state = m,
        da(t, r, i, o),
        l = t.memoizedState,
        a !== r || m !== l || et.current || kn ? (typeof f == "function" && (Au(t, n, f, r),
        l = t.memoizedState),
        (a = kn || Jf(t, n, a, r, m, l, u)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        i.props = r,
        i.state = l,
        i.context = u,
        r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        Um(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : kt(t.type, a),
        i.props = u,
        p = t.pendingProps,
        m = i.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = xt(l) : (l = tt(n) ? Sr : Ue.current,
        l = bo(t, l));
        var h = n.getDerivedStateFromProps;
        (f = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== p || m !== l) && ep(t, i, r, l),
        kn = !1,
        m = t.memoizedState,
        i.state = m,
        da(t, r, i, o);
        var S = t.memoizedState;
        a !== p || m !== S || et.current || kn ? (typeof h == "function" && (Au(t, n, h, r),
        S = t.memoizedState),
        (u = kn || Jf(t, n, u, r, m, S, l) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, l),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, l)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        i.props = r,
        i.state = S,
        i.context = l,
        r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return zu(e, t, n, r, s, o)
}
function zu(e, t, n, r, o, s) {
    hv(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && Wf(t, n, !1),
        fn(e, t, s);
    r = t.stateNode,
    W1.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = Po(t, e.child, null, s),
    t.child = Po(t, null, a, s)) : He(e, t, a, s),
    t.memoizedState = r.state,
    o && Wf(t, n, !0),
    t.child
}
function mv(e) {
    var t = e.stateNode;
    t.pendingContext ? Hf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hf(e, t.context, !1),
    qc(e, t.containerInfo)
}
function ap(e, t, n, r, o) {
    return No(),
    Wc(o),
    t.flags |= 256,
    He(e, t, n, r),
    t.child
}
var $u = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Bu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function vv(e, t, n) {
    var r = t.pendingProps, o = xe.current, s = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    pe(xe, o & 1),
    e === null)
        return Iu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = i) : s = Ua(i, r, 0, null),
        e = wr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Bu(n),
        t.memoizedState = $u,
        e) : sd(t, i));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return K1(e, t, i, r, a, o, n);
    if (s) {
        s = r.fallback,
        i = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Wn(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? s = Wn(a, s) : (s = wr(s, i, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        i = e.child.memoizedState,
        i = i === null ? Bu(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        s.memoizedState = i,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = $u,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Wn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function sd(e, t) {
    return t = Ua({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function wi(e, t, n, r) {
    return r !== null && Wc(r),
    Po(t, e.child, null, n),
    e = sd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function K1(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Fl(Error(_(422))),
        wi(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = Ua({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = wr(s, o, i, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && Po(t, e.child, null, i),
        t.child.memoizedState = Bu(i),
        t.memoizedState = $u,
        s);
    if (!(t.mode & 1))
        return wi(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(_(419)),
        r = Fl(s, r, void 0),
        wi(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
    Je || a) {
        if (r = Me,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
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
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            dn(e, o),
            Ot(r, e, o, -1))
        }
        return dd(),
        r = Fl(Error(_(421))),
        wi(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = sS.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    st = Bn(o.nextSibling),
    it = t,
    ye = !0,
    _t = null,
    e !== null && (ht[mt++] = nn,
    ht[mt++] = rn,
    ht[mt++] = Cr,
    nn = e.id,
    rn = e.overflow,
    Cr = t),
    t = sd(t, r.children),
    t.flags |= 4096,
    t)
}
function lp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ou(e.return, t, n)
}
function zl(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function gv(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (He(e, t, r.children, n),
    r = xe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && lp(e, n, t);
                else if (e.tag === 19)
                    lp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (pe(xe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && fa(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            zl(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && fa(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            zl(t, !0, n, null, s);
            break;
        case "together":
            zl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Bi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    br |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Wn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Wn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function G1(e, t, n) {
    switch (t.tag) {
    case 3:
        mv(t),
        No();
        break;
    case 5:
        Vm(t);
        break;
    case 1:
        tt(t.type) && ia(t);
        break;
    case 4:
        qc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        pe(ua, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (pe(xe, xe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? vv(e, t, n) : (pe(xe, xe.current & 1),
            e = fn(e, t, n),
            e !== null ? e.sibling : null);
        pe(xe, xe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return gv(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        pe(xe, xe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        pv(e, t, n)
    }
    return fn(e, t, n)
}
var yv, Uu, xv, wv;
yv = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Uu = function() {}
;
xv = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        fr(Gt.current);
        var s = null;
        switch (n) {
        case "input":
            o = cu(e, o),
            r = cu(e, r),
            s = [];
            break;
        case "select":
            o = Se({}, o, {
                value: void 0
            }),
            r = Se({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = pu(e, o),
            r = pu(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = oa)
        }
        mu(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ws.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in l)
                            l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}),
                            n[i] = l[i])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ws.hasOwnProperty(u) ? (l != null && u === "onScroll" && me("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
wv = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Jo(e, t) {
    if (!ye)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Q1(e, t, n) {
    var r = t.pendingProps;
    switch (Hc(t),
    t.tag) {
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
        return ze(t),
        null;
    case 1:
        return tt(t.type) && sa(),
        ze(t),
        null;
    case 3:
        return r = t.stateNode,
        ko(),
        ve(et),
        ve(Ue),
        Jc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (yi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        _t !== null && (Xu(_t),
        _t = null))),
        Uu(e, t),
        ze(t),
        null;
    case 5:
        Zc(t);
        var o = fr(_s.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            xv(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(_(166));
                return ze(t),
                null
            }
            if (e = fr(Gt.current),
            yi(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Vt] = t,
                r[js] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    me("cancel", r),
                    me("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    me("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < is.length; o++)
                        me(is[o], r);
                    break;
                case "source":
                    me("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    me("error", r),
                    me("load", r);
                    break;
                case "details":
                    me("toggle", r);
                    break;
                case "input":
                    gf(r, s),
                    me("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    me("invalid", r);
                    break;
                case "textarea":
                    xf(r, s),
                    me("invalid", r)
                }
                mu(n, s),
                o = null;
                for (var i in s)
                    if (s.hasOwnProperty(i)) {
                        var a = s[i];
                        i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && gi(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && gi(r.textContent, a, e),
                        o = ["children", "" + a]) : ws.hasOwnProperty(i) && a != null && i === "onScroll" && me("scroll", r)
                    }
                switch (n) {
                case "input":
                    ui(r),
                    yf(r, s, !0);
                    break;
                case "textarea":
                    ui(r),
                    wf(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = oa)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Qh(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Vt] = t,
                e[js] = r,
                yv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = vu(n, r),
                    n) {
                    case "dialog":
                        me("cancel", e),
                        me("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        me("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < is.length; o++)
                            me(is[o], e);
                        o = r;
                        break;
                    case "source":
                        me("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        me("error", e),
                        me("load", e),
                        o = r;
                        break;
                    case "details":
                        me("toggle", e),
                        o = r;
                        break;
                    case "input":
                        gf(e, r),
                        o = cu(e, r),
                        me("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Se({}, r, {
                            value: void 0
                        }),
                        me("invalid", e);
                        break;
                    case "textarea":
                        xf(e, r),
                        o = pu(e, r),
                        me("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    mu(n, o),
                    a = o;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? qh(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Yh(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ss(e, l) : typeof l == "number" && Ss(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ws.hasOwnProperty(s) ? l != null && s === "onScroll" && me("scroll", e) : l != null && Rc(e, s, l, i))
                        }
                    switch (n) {
                    case "input":
                        ui(e),
                        yf(e, r, !1);
                        break;
                    case "textarea":
                        ui(e),
                        wf(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Gn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? ro(e, !!r.multiple, s, !1) : r.defaultValue != null && ro(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = oa)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ze(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            wv(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(_(166));
            if (n = fr(_s.current),
            fr(Gt.current),
            yi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Vt] = t,
                (s = r.nodeValue !== n) && (e = it,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        gi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && gi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Vt] = t,
                t.stateNode = r
        }
        return ze(t),
        null;
    case 13:
        if (ve(xe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ye && st !== null && t.mode & 1 && !(t.flags & 128))
                Fm(),
                No(),
                t.flags |= 98560,
                s = !1;
            else if (s = yi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(_(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(_(317));
                    s[Vt] = t
                } else
                    No(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ze(t),
                s = !1
            } else
                _t !== null && (Xu(_t),
                _t = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || xe.current & 1 ? Re === 0 && (Re = 3) : dd())),
        t.updateQueue !== null && (t.flags |= 4),
        ze(t),
        null);
    case 4:
        return ko(),
        Uu(e, t),
        e === null && Ts(t.stateNode.containerInfo),
        ze(t),
        null;
    case 10:
        return Qc(t.type._context),
        ze(t),
        null;
    case 17:
        return tt(t.type) && sa(),
        ze(t),
        null;
    case 19:
        if (ve(xe),
        s = t.memoizedState,
        s === null)
            return ze(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = s.rendering,
        i === null)
            if (r)
                Jo(s, !1);
            else {
                if (Re !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = fa(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Jo(s, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                i = s.alternate,
                                i === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = i.childLanes,
                                s.lanes = i.lanes,
                                s.child = i.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = i.memoizedProps,
                                s.memoizedState = i.memoizedState,
                                s.updateQueue = i.updateQueue,
                                s.type = i.type,
                                e = i.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return pe(xe, xe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && be() > Ro && (t.flags |= 128,
                r = !0,
                Jo(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = fa(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Jo(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !i.alternate && !ye)
                        return ze(t),
                        null
                } else
                    2 * be() - s.renderingStartTime > Ro && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Jo(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = s.last,
            n !== null ? n.sibling = i : t.child = i,
            s.last = i)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = be(),
        t.sibling = null,
        n = xe.current,
        pe(xe, r ? n & 1 | 2 : n & 1),
        t) : (ze(t),
        null);
    case 22:
    case 23:
        return cd(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? rt & 1073741824 && (ze(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(_(156, t.tag))
}
function Y1(e, t) {
    switch (Hc(t),
    t.tag) {
    case 1:
        return tt(t.type) && sa(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ko(),
        ve(et),
        ve(Ue),
        Jc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Zc(t),
        null;
    case 13:
        if (ve(xe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(_(340));
            No()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ve(xe),
        null;
    case 4:
        return ko(),
        null;
    case 10:
        return Qc(t.type._context),
        null;
    case 22:
    case 23:
        return cd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Si = !1
  , Be = !1
  , X1 = typeof WeakSet == "function" ? WeakSet : Set
  , $ = null;
function eo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Ee(e, t, r)
            }
        else
            n.current = null
}
function Vu(e, t, n) {
    try {
        n()
    } catch (r) {
        Ee(e, t, r)
    }
}
var up = !1;
function q1(e, t) {
    if (Pu = ta,
    e = Nm(),
    Uc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , f = 0
                      , p = e
                      , m = null;
                    t: for (; ; ) {
                        for (var h; p !== n || o !== 0 && p.nodeType !== 3 || (a = i + o),
                        p !== s || r !== 0 && p.nodeType !== 3 || (l = i + r),
                        p.nodeType === 3 && (i += p.nodeValue.length),
                        (h = p.firstChild) !== null; )
                            m = p,
                            p = h;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (m === n && ++u === o && (a = i),
                            m === s && ++f === r && (l = i),
                            (h = p.nextSibling) !== null)
                                break;
                            p = m,
                            m = p.parentNode
                        }
                        p = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ku = {
        focusedElem: e,
        selectionRange: n
    },
    ta = !1,
    $ = t; $ !== null; )
        if (t = $,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            $ = e;
        else
            for (; $ !== null; ) {
                t = $;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var v = S.memoizedProps
                                  , w = S.memoizedState
                                  , y = t.stateNode
                                  , g = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : kt(t.type, v), w);
                                y.__reactInternalSnapshotBeforeUpdate = g
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(_(163))
                        }
                } catch (C) {
                    Ee(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    $ = e;
                    break
                }
                $ = t.return
            }
    return S = up,
    up = !1,
    S
}
function vs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && Vu(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function $a(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Hu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Sv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Sv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Vt],
    delete t[js],
    delete t[ju],
    delete t[I1],
    delete t[O1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Cv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function cp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Cv(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Wu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = oa));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Wu(e, t, n),
        e = e.sibling; e !== null; )
            Wu(e, t, n),
            e = e.sibling
}
function Ku(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ku(e, t, n),
        e = e.sibling; e !== null; )
            Ku(e, t, n),
            e = e.sibling
}
var _e = null
  , Mt = !1;
function Sn(e, t, n) {
    for (n = n.child; n !== null; )
        Ev(e, t, n),
        n = n.sibling
}
function Ev(e, t, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
        try {
            Kt.onCommitFiberUnmount(_a, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Be || eo(n, t);
    case 6:
        var r = _e
          , o = Mt;
        _e = null,
        Sn(e, t, n),
        _e = r,
        Mt = o,
        _e !== null && (Mt ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
        break;
    case 18:
        _e !== null && (Mt ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? _l(e.parentNode, n) : e.nodeType === 1 && _l(e, n),
        Ns(e)) : _l(_e, n.stateNode));
        break;
    case 4:
        r = _e,
        o = Mt,
        _e = n.stateNode.containerInfo,
        Mt = !0,
        Sn(e, t, n),
        _e = r,
        Mt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Be && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , i = s.destroy;
                s = s.tag,
                i !== void 0 && (s & 2 || s & 4) && Vu(n, t, i),
                o = o.next
            } while (o !== r)
        }
        Sn(e, t, n);
        break;
    case 1:
        if (!Be && (eo(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Ee(n, t, a)
            }
        Sn(e, t, n);
        break;
    case 21:
        Sn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null,
        Sn(e, t, n),
        Be = r) : Sn(e, t, n);
        break;
    default:
        Sn(e, t, n)
    }
}
function dp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new X1),
        t.forEach(function(r) {
            var o = iS.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function bt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        _e = a.stateNode,
                        Mt = !1;
                        break e;
                    case 3:
                        _e = a.stateNode.containerInfo,
                        Mt = !0;
                        break e;
                    case 4:
                        _e = a.stateNode.containerInfo,
                        Mt = !0;
                        break e
                    }
                    a = a.return
                }
                if (_e === null)
                    throw Error(_(160));
                Ev(s, i, o),
                _e = null,
                Mt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                Ee(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            bv(t, e),
            t = t.sibling
}
function bv(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (bt(t, e),
        Ft(e),
        r & 4) {
            try {
                vs(3, e, e.return),
                $a(3, e)
            } catch (v) {
                Ee(e, e.return, v)
            }
            try {
                vs(5, e, e.return)
            } catch (v) {
                Ee(e, e.return, v)
            }
        }
        break;
    case 1:
        bt(t, e),
        Ft(e),
        r & 512 && n !== null && eo(n, n.return);
        break;
    case 5:
        if (bt(t, e),
        Ft(e),
        r & 512 && n !== null && eo(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Ss(o, "")
            } catch (v) {
                Ee(e, e.return, v)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , i = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && Kh(o, s),
                    vu(a, i);
                    var u = vu(a, s);
                    for (i = 0; i < l.length; i += 2) {
                        var f = l[i]
                          , p = l[i + 1];
                        f === "style" ? qh(o, p) : f === "dangerouslySetInnerHTML" ? Yh(o, p) : f === "children" ? Ss(o, p) : Rc(o, f, p, u)
                    }
                    switch (a) {
                    case "input":
                        du(o, s);
                        break;
                    case "textarea":
                        Gh(o, s);
                        break;
                    case "select":
                        var m = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var h = s.value;
                        h != null ? ro(o, !!s.multiple, h, !1) : m !== !!s.multiple && (s.defaultValue != null ? ro(o, !!s.multiple, s.defaultValue, !0) : ro(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[js] = s
                } catch (v) {
                    Ee(e, e.return, v)
                }
        }
        break;
    case 6:
        if (bt(t, e),
        Ft(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(_(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (v) {
                Ee(e, e.return, v)
            }
        }
        break;
    case 3:
        if (bt(t, e),
        Ft(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ns(t.containerInfo)
            } catch (v) {
                Ee(e, e.return, v)
            }
        break;
    case 4:
        bt(t, e),
        Ft(e);
        break;
    case 13:
        bt(t, e),
        Ft(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (ld = be())),
        r & 4 && dp(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Be = (u = Be) || f,
        bt(t, e),
        Be = u) : bt(t, e),
        Ft(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for ($ = e,
                f = e.child; f !== null; ) {
                    for (p = $ = f; $ !== null; ) {
                        switch (m = $,
                        h = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            vs(4, m, m.return);
                            break;
                        case 1:
                            eo(m, m.return);
                            var S = m.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (v) {
                                    Ee(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            eo(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                pp(p);
                                continue
                            }
                        }
                        h !== null ? (h.return = m,
                        $ = h) : pp(p)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (f === null) {
                        f = p;
                        try {
                            o = p.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = p.stateNode,
                            l = p.memoizedProps.style,
                            i = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Xh("display", i))
                        } catch (v) {
                            Ee(e, e.return, v)
                        }
                    }
                } else if (p.tag === 6) {
                    if (f === null)
                        try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (v) {
                            Ee(e, e.return, v)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    f === p && (f = null),
                    p = p.return
                }
                f === p && (f = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        bt(t, e),
        Ft(e),
        r & 4 && dp(e);
        break;
    case 21:
        break;
    default:
        bt(t, e),
        Ft(e)
    }
}
function Ft(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Cv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Ss(o, ""),
                r.flags &= -33);
                var s = cp(e);
                Ku(e, s, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , a = cp(e);
                Wu(e, a, i);
                break;
            default:
                throw Error(_(161))
            }
        } catch (l) {
            Ee(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Z1(e, t, n) {
    $ = e,
    Nv(e)
}
function Nv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null; ) {
        var o = $
          , s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || Si;
            if (!i) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || Be;
                a = Si;
                var u = Be;
                if (Si = i,
                (Be = l) && !u)
                    for ($ = o; $ !== null; )
                        i = $,
                        l = i.child,
                        i.tag === 22 && i.memoizedState !== null ? hp(o) : l !== null ? (l.return = i,
                        $ = l) : hp(o);
                for (; s !== null; )
                    $ = s,
                    Nv(s),
                    s = s.sibling;
                $ = o,
                Si = a,
                Be = u
            }
            fp(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            $ = s) : fp(e)
    }
}
function fp(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Be || $a(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Be)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Xf(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Xf(t, i, n)
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
                                l.src && (n.src = l.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var p = f.dehydrated;
                                    p !== null && Ns(p)
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
                        throw Error(_(163))
                    }
                Be || t.flags & 512 && Hu(t)
            } catch (m) {
                Ee(t, t.return, m)
            }
        }
        if (t === e) {
            $ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            $ = n;
            break
        }
        $ = t.return
    }
}
function pp(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t === e) {
            $ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            $ = n;
            break
        }
        $ = t.return
    }
}
function hp(e) {
    for (; $ !== null; ) {
        var t = $;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    $a(4, t)
                } catch (l) {
                    Ee(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Ee(t, o, l)
                    }
                }
                var s = t.return;
                try {
                    Hu(t)
                } catch (l) {
                    Ee(t, s, l)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    Hu(t)
                } catch (l) {
                    Ee(t, i, l)
                }
            }
        } catch (l) {
            Ee(t, t.return, l)
        }
        if (t === e) {
            $ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            $ = a;
            break
        }
        $ = t.return
    }
}
var J1 = Math.ceil
  , ma = mn.ReactCurrentDispatcher
  , id = mn.ReactCurrentOwner
  , gt = mn.ReactCurrentBatchConfig
  , re = 0
  , Me = null
  , Pe = null
  , Ie = 0
  , rt = 0
  , to = Zn(0)
  , Re = 0
  , Ds = null
  , br = 0
  , Ba = 0
  , ad = 0
  , gs = null
  , Ze = null
  , ld = 0
  , Ro = 1 / 0
  , Jt = null
  , va = !1
  , Gu = null
  , Vn = null
  , Ci = !1
  , Dn = null
  , ga = 0
  , ys = 0
  , Qu = null
  , Ui = -1
  , Vi = 0;
function Ke() {
    return re & 6 ? be() : Ui !== -1 ? Ui : Ui = be()
}
function Hn(e) {
    return e.mode & 1 ? re & 2 && Ie !== 0 ? Ie & -Ie : D1.transition !== null ? (Vi === 0 && (Vi = um()),
    Vi) : (e = le,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : vm(e.type)),
    e) : 1
}
function Ot(e, t, n, r) {
    if (50 < ys)
        throw ys = 0,
        Qu = null,
        Error(_(185));
    Ys(e, n, r),
    (!(re & 2) || e !== Me) && (e === Me && (!(re & 2) && (Ba |= n),
    Re === 4 && Rn(e, Ie)),
    nt(e, r),
    n === 1 && re === 0 && !(t.mode & 1) && (Ro = be() + 500,
    La && Jn()))
}
function nt(e, t) {
    var n = e.callbackNode;
    Dw(e, t);
    var r = ea(e, e === Me ? Ie : 0);
    if (r === 0)
        n !== null && Ef(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Ef(n),
        t === 1)
            e.tag === 0 ? A1(mp.bind(null, e)) : Am(mp.bind(null, e)),
            M1(function() {
                !(re & 6) && Jn()
            }),
            n = null;
        else {
            switch (cm(r)) {
            case 1:
                n = Oc;
                break;
            case 4:
                n = am;
                break;
            case 16:
                n = Ji;
                break;
            case 536870912:
                n = lm;
                break;
            default:
                n = Ji
            }
            n = Iv(n, Pv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Pv(e, t) {
    if (Ui = -1,
    Vi = 0,
    re & 6)
        throw Error(_(327));
    var n = e.callbackNode;
    if (lo() && e.callbackNode !== n)
        return null;
    var r = ea(e, e === Me ? Ie : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ya(e, r);
    else {
        t = r;
        var o = re;
        re |= 2;
        var s = Tv();
        (Me !== e || Ie !== t) && (Jt = null,
        Ro = be() + 500,
        xr(e, t));
        do
            try {
                nS();
                break
            } catch (a) {
                kv(e, a)
            }
        while (!0);
        Gc(),
        ma.current = s,
        re = o,
        Pe !== null ? t = 0 : (Me = null,
        Ie = 0,
        t = Re)
    }
    if (t !== 0) {
        if (t === 2 && (o = Su(e),
        o !== 0 && (r = o,
        t = Yu(e, o))),
        t === 1)
            throw n = Ds,
            xr(e, 0),
            Rn(e, r),
            nt(e, be()),
            n;
        if (t === 6)
            Rn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !eS(o) && (t = ya(e, r),
            t === 2 && (s = Su(e),
            s !== 0 && (r = s,
            t = Yu(e, s))),
            t === 1))
                throw n = Ds,
                xr(e, 0),
                Rn(e, r),
                nt(e, be()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(_(345));
            case 2:
                ur(e, Ze, Jt);
                break;
            case 3:
                if (Rn(e, r),
                (r & 130023424) === r && (t = ld + 500 - be(),
                10 < t)) {
                    if (ea(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ke(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Ru(ur.bind(null, e, Ze, Jt), t);
                    break
                }
                ur(e, Ze, Jt);
                break;
            case 4:
                if (Rn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - It(r);
                    s = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~s
                }
                if (r = o,
                r = be() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * J1(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ru(ur.bind(null, e, Ze, Jt), r);
                    break
                }
                ur(e, Ze, Jt);
                break;
            case 5:
                ur(e, Ze, Jt);
                break;
            default:
                throw Error(_(329))
            }
        }
    }
    return nt(e, be()),
    e.callbackNode === n ? Pv.bind(null, e) : null
}
function Yu(e, t) {
    var n = gs;
    return e.current.memoizedState.isDehydrated && (xr(e, t).flags |= 256),
    e = ya(e, t),
    e !== 2 && (t = Ze,
    Ze = n,
    t !== null && Xu(t)),
    e
}
function Xu(e) {
    Ze === null ? Ze = e : Ze.push.apply(Ze, e)
}
function eS(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!At(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Rn(e, t) {
    for (t &= ~ad,
    t &= ~Ba,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - It(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function mp(e) {
    if (re & 6)
        throw Error(_(327));
    lo();
    var t = ea(e, 0);
    if (!(t & 1))
        return nt(e, be()),
        null;
    var n = ya(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Su(e);
        r !== 0 && (t = r,
        n = Yu(e, r))
    }
    if (n === 1)
        throw n = Ds,
        xr(e, 0),
        Rn(e, t),
        nt(e, be()),
        n;
    if (n === 6)
        throw Error(_(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    ur(e, Ze, Jt),
    nt(e, be()),
    null
}
function ud(e, t) {
    var n = re;
    re |= 1;
    try {
        return e(t)
    } finally {
        re = n,
        re === 0 && (Ro = be() + 500,
        La && Jn())
    }
}
function Nr(e) {
    Dn !== null && Dn.tag === 0 && !(re & 6) && lo();
    var t = re;
    re |= 1;
    var n = gt.transition
      , r = le;
    try {
        if (gt.transition = null,
        le = 1,
        e)
            return e()
    } finally {
        le = r,
        gt.transition = n,
        re = t,
        !(re & 6) && Jn()
    }
}
function cd() {
    rt = to.current,
    ve(to)
}
function xr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    j1(n)),
    Pe !== null)
        for (n = Pe.return; n !== null; ) {
            var r = n;
            switch (Hc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && sa();
                break;
            case 3:
                ko(),
                ve(et),
                ve(Ue),
                Jc();
                break;
            case 5:
                Zc(r);
                break;
            case 4:
                ko();
                break;
            case 13:
                ve(xe);
                break;
            case 19:
                ve(xe);
                break;
            case 10:
                Qc(r.type._context);
                break;
            case 22:
            case 23:
                cd()
            }
            n = n.return
        }
    if (Me = e,
    Pe = e = Wn(e.current, null),
    Ie = rt = t,
    Re = 0,
    Ds = null,
    ad = Ba = br = 0,
    Ze = gs = null,
    dr !== null) {
        for (t = 0; t < dr.length; t++)
            if (n = dr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o,
                    r.next = i
                }
                n.pending = r
            }
        dr = null
    }
    return e
}
function kv(e, t) {
    do {
        var n = Pe;
        try {
            if (Gc(),
            zi.current = ha,
            pa) {
                for (var r = we.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                pa = !1
            }
            if (Er = 0,
            je = Te = we = null,
            ms = !1,
            Is = 0,
            id.current = null,
            n === null || n.return === null) {
                Re = 1,
                Ds = t,
                Pe = null;
                break
            }
            e: {
                var s = e
                  , i = n.return
                  , a = n
                  , l = t;
                if (t = Ie,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , f = a
                      , p = f.tag;
                    if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = f.alternate;
                        m ? (f.updateQueue = m.updateQueue,
                        f.memoizedState = m.memoizedState,
                        f.lanes = m.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var h = np(i);
                    if (h !== null) {
                        h.flags &= -257,
                        rp(h, i, a, s, t),
                        h.mode & 1 && tp(s, u, t),
                        t = h,
                        l = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var v = new Set;
                            v.add(l),
                            t.updateQueue = v
                        } else
                            S.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            tp(s, u, t),
                            dd();
                            break e
                        }
                        l = Error(_(426))
                    }
                } else if (ye && a.mode & 1) {
                    var w = np(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        rp(w, i, a, s, t),
                        Wc(To(l, a));
                        break e
                    }
                }
                s = l = To(l, a),
                Re !== 4 && (Re = 2),
                gs === null ? gs = [s] : gs.push(s),
                s = i;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var y = cv(s, l, t);
                        Yf(s, y);
                        break e;
                    case 1:
                        a = l;
                        var g = s.type
                          , x = s.stateNode;
                        if (!(s.flags & 128) && (typeof g.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Vn === null || !Vn.has(x)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var C = dv(s, a, t);
                            Yf(s, C);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            jv(n)
        } catch (E) {
            t = E,
            Pe === n && n !== null && (Pe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Tv() {
    var e = ma.current;
    return ma.current = ha,
    e === null ? ha : e
}
function dd() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    Me === null || !(br & 268435455) && !(Ba & 268435455) || Rn(Me, Ie)
}
function ya(e, t) {
    var n = re;
    re |= 2;
    var r = Tv();
    (Me !== e || Ie !== t) && (Jt = null,
    xr(e, t));
    do
        try {
            tS();
            break
        } catch (o) {
            kv(e, o)
        }
    while (!0);
    if (Gc(),
    re = n,
    ma.current = r,
    Pe !== null)
        throw Error(_(261));
    return Me = null,
    Ie = 0,
    Re
}
function tS() {
    for (; Pe !== null; )
        Rv(Pe)
}
function nS() {
    for (; Pe !== null && !kw(); )
        Rv(Pe)
}
function Rv(e) {
    var t = _v(e.alternate, e, rt);
    e.memoizedProps = e.pendingProps,
    t === null ? jv(e) : Pe = t,
    id.current = null
}
function jv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Y1(n, t),
            n !== null) {
                n.flags &= 32767,
                Pe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Re = 6,
                Pe = null;
                return
            }
        } else if (n = Q1(n, t, rt),
        n !== null) {
            Pe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Pe = t;
            return
        }
        Pe = t = e
    } while (t !== null);
    Re === 0 && (Re = 5)
}
function ur(e, t, n) {
    var r = le
      , o = gt.transition;
    try {
        gt.transition = null,
        le = 1,
        rS(e, t, n, r)
    } finally {
        gt.transition = o,
        le = r
    }
    return null
}
function rS(e, t, n, r) {
    do
        lo();
    while (Dn !== null);
    if (re & 6)
        throw Error(_(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(_(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Lw(e, s),
    e === Me && (Pe = Me = null,
    Ie = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ci || (Ci = !0,
    Iv(Ji, function() {
        return lo(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = gt.transition,
        gt.transition = null;
        var i = le;
        le = 1;
        var a = re;
        re |= 4,
        id.current = null,
        q1(e, n),
        bv(n, e),
        E1(ku),
        ta = !!Pu,
        ku = Pu = null,
        e.current = n,
        Z1(n),
        Tw(),
        re = a,
        le = i,
        gt.transition = s
    } else
        e.current = n;
    if (Ci && (Ci = !1,
    Dn = e,
    ga = o),
    s = e.pendingLanes,
    s === 0 && (Vn = null),
    Mw(n.stateNode),
    nt(e, be()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (va)
        throw va = !1,
        e = Gu,
        Gu = null,
        e;
    return ga & 1 && e.tag !== 0 && lo(),
    s = e.pendingLanes,
    s & 1 ? e === Qu ? ys++ : (ys = 0,
    Qu = e) : ys = 0,
    Jn(),
    null
}
function lo() {
    if (Dn !== null) {
        var e = cm(ga)
          , t = gt.transition
          , n = le;
        try {
            if (gt.transition = null,
            le = 16 > e ? 16 : e,
            Dn === null)
                var r = !1;
            else {
                if (e = Dn,
                Dn = null,
                ga = 0,
                re & 6)
                    throw Error(_(331));
                var o = re;
                for (re |= 4,
                $ = e.current; $ !== null; ) {
                    var s = $
                      , i = s.child;
                    if ($.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for ($ = u; $ !== null; ) {
                                    var f = $;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        vs(8, f, s)
                                    }
                                    var p = f.child;
                                    if (p !== null)
                                        p.return = f,
                                        $ = p;
                                    else
                                        for (; $ !== null; ) {
                                            f = $;
                                            var m = f.sibling
                                              , h = f.return;
                                            if (Sv(f),
                                            f === u) {
                                                $ = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = h,
                                                $ = m;
                                                break
                                            }
                                            $ = h
                                        }
                                }
                            }
                            var S = s.alternate;
                            if (S !== null) {
                                var v = S.child;
                                if (v !== null) {
                                    S.child = null;
                                    do {
                                        var w = v.sibling;
                                        v.sibling = null,
                                        v = w
                                    } while (v !== null)
                                }
                            }
                            $ = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null)
                        i.return = s,
                        $ = i;
                    else
                        e: for (; $ !== null; ) {
                            if (s = $,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    vs(9, s, s.return)
                                }
                            var y = s.sibling;
                            if (y !== null) {
                                y.return = s.return,
                                $ = y;
                                break e
                            }
                            $ = s.return
                        }
                }
                var g = e.current;
                for ($ = g; $ !== null; ) {
                    i = $;
                    var x = i.child;
                    if (i.subtreeFlags & 2064 && x !== null)
                        x.return = i,
                        $ = x;
                    else
                        e: for (i = g; $ !== null; ) {
                            if (a = $,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $a(9, a)
                                    }
                                } catch (E) {
                                    Ee(a, a.return, E)
                                }
                            if (a === i) {
                                $ = null;
                                break e
                            }
                            var C = a.sibling;
                            if (C !== null) {
                                C.return = a.return,
                                $ = C;
                                break e
                            }
                            $ = a.return
                        }
                }
                if (re = o,
                Jn(),
                Kt && typeof Kt.onPostCommitFiberRoot == "function")
                    try {
                        Kt.onPostCommitFiberRoot(_a, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            le = n,
            gt.transition = t
        }
    }
    return !1
}
function vp(e, t, n) {
    t = To(n, t),
    t = cv(e, t, 1),
    e = Un(e, t, 1),
    t = Ke(),
    e !== null && (Ys(e, 1, t),
    nt(e, t))
}
function Ee(e, t, n) {
    if (e.tag === 3)
        vp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                vp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vn === null || !Vn.has(r))) {
                    e = To(n, e),
                    e = dv(t, e, 1),
                    t = Un(t, e, 1),
                    e = Ke(),
                    t !== null && (Ys(t, 1, e),
                    nt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function oS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ke(),
    e.pingedLanes |= e.suspendedLanes & n,
    Me === e && (Ie & n) === n && (Re === 4 || Re === 3 && (Ie & 130023424) === Ie && 500 > be() - ld ? xr(e, 0) : ad |= n),
    nt(e, t)
}
function Mv(e, t) {
    t === 0 && (e.mode & 1 ? (t = fi,
    fi <<= 1,
    !(fi & 130023424) && (fi = 4194304)) : t = 1);
    var n = Ke();
    e = dn(e, t),
    e !== null && (Ys(e, t, n),
    nt(e, n))
}
function sS(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Mv(e, n)
}
function iS(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(_(314))
    }
    r !== null && r.delete(t),
    Mv(e, n)
}
var _v;
_v = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || et.current)
            Je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Je = !1,
                G1(e, t, n);
            Je = !!(e.flags & 131072)
        }
    else
        Je = !1,
        ye && t.flags & 1048576 && Dm(t, la, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Bi(e, t),
        e = t.pendingProps;
        var o = bo(t, Ue.current);
        ao(t, n),
        o = td(null, t, r, e, o, n);
        var s = nd();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        tt(r) ? (s = !0,
        ia(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Xc(t),
        o.updater = za,
        t.stateNode = o,
        o._reactInternals = t,
        Du(t, r, e, n),
        t = zu(null, t, r, !0, s, n)) : (t.tag = 0,
        ye && s && Vc(t),
        He(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Bi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = lS(r),
            e = kt(r, e),
            o) {
            case 0:
                t = Fu(null, t, r, e, n);
                break e;
            case 1:
                t = ip(null, t, r, e, n);
                break e;
            case 11:
                t = op(null, t, r, e, n);
                break e;
            case 14:
                t = sp(null, t, r, kt(r.type, e), n);
                break e
            }
            throw Error(_(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : kt(r, o),
        Fu(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : kt(r, o),
        ip(e, t, r, o, n);
    case 3:
        e: {
            if (mv(t),
            e === null)
                throw Error(_(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            Um(e, t),
            da(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = To(Error(_(423)), t),
                    t = ap(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = To(Error(_(424)), t),
                    t = ap(e, t, r, n, o);
                    break e
                } else
                    for (st = Bn(t.stateNode.containerInfo.firstChild),
                    it = t,
                    ye = !0,
                    _t = null,
                    n = $m(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (No(),
                r === o) {
                    t = fn(e, t, n);
                    break e
                }
                He(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Vm(t),
        e === null && Iu(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        i = o.children,
        Tu(r, o) ? i = null : s !== null && Tu(r, s) && (t.flags |= 32),
        hv(e, t),
        He(e, t, i, n),
        t.child;
    case 6:
        return e === null && Iu(t),
        null;
    case 13:
        return vv(e, t, n);
    case 4:
        return qc(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Po(t, null, r, n) : He(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : kt(r, o),
        op(e, t, r, o, n);
    case 7:
        return He(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return He(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return He(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            i = o.value,
            pe(ua, r._currentValue),
            r._currentValue = i,
            s !== null)
                if (At(s.value, i)) {
                    if (s.children === o.children && !et.current) {
                        t = fn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            i = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = on(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? l.next = l : (l.next = f.next,
                                            f.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    Ou(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            i = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (i = s.return,
                            i === null)
                                throw Error(_(341));
                            i.lanes |= n,
                            a = i.alternate,
                            a !== null && (a.lanes |= n),
                            Ou(i, n, t),
                            i = s.sibling
                        } else
                            i = s.child;
                        if (i !== null)
                            i.return = s;
                        else
                            for (i = s; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (s = i.sibling,
                                s !== null) {
                                    s.return = i.return,
                                    i = s;
                                    break
                                }
                                i = i.return
                            }
                        s = i
                    }
            He(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        ao(t, n),
        o = xt(o),
        r = r(o),
        t.flags |= 1,
        He(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = kt(r, t.pendingProps),
        o = kt(r.type, o),
        sp(e, t, r, o, n);
    case 15:
        return fv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : kt(r, o),
        Bi(e, t),
        t.tag = 1,
        tt(r) ? (e = !0,
        ia(t)) : e = !1,
        ao(t, n),
        uv(t, r, o),
        Du(t, r, o, n),
        zu(null, t, r, !0, e, n);
    case 19:
        return gv(e, t, n);
    case 22:
        return pv(e, t, n)
    }
    throw Error(_(156, t.tag))
}
;
function Iv(e, t) {
    return im(e, t)
}
function aS(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function vt(e, t, n, r) {
    return new aS(e,t,n,r)
}
function fd(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function lS(e) {
    if (typeof e == "function")
        return fd(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Mc)
            return 11;
        if (e === _c)
            return 14
    }
    return 2
}
function Wn(e, t) {
    var n = e.alternate;
    return n === null ? (n = vt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Hi(e, t, n, r, o, s) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        fd(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Wr:
            return wr(n.children, o, s, t);
        case jc:
            i = 8,
            o |= 8;
            break;
        case iu:
            return e = vt(12, n, t, o | 2),
            e.elementType = iu,
            e.lanes = s,
            e;
        case au:
            return e = vt(13, n, t, o),
            e.elementType = au,
            e.lanes = s,
            e;
        case lu:
            return e = vt(19, n, t, o),
            e.elementType = lu,
            e.lanes = s,
            e;
        case Vh:
            return Ua(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Bh:
                    i = 10;
                    break e;
                case Uh:
                    i = 9;
                    break e;
                case Mc:
                    i = 11;
                    break e;
                case _c:
                    i = 14;
                    break e;
                case Pn:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(_(130, e == null ? e : typeof e, ""))
        }
    return t = vt(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function wr(e, t, n, r) {
    return e = vt(7, e, r, t),
    e.lanes = n,
    e
}
function Ua(e, t, n, r) {
    return e = vt(22, e, r, t),
    e.elementType = Vh,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function $l(e, t, n) {
    return e = vt(6, e, null, t),
    e.lanes = n,
    e
}
function Bl(e, t, n) {
    return t = vt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function uS(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Sl(0),
    this.expirationTimes = Sl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Sl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function pd(e, t, n, r, o, s, i, a, l) {
    return e = new uS(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = vt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Xc(s),
    e
}
function cS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Hr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Ov(e) {
    if (!e)
        return Qn;
    e = e._reactInternals;
    e: {
        if (jr(e) !== e || e.tag !== 1)
            throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (tt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (tt(n))
            return Om(e, n, t)
    }
    return t
}
function Av(e, t, n, r, o, s, i, a, l) {
    return e = pd(n, r, !0, e, o, s, i, a, l),
    e.context = Ov(null),
    n = e.current,
    r = Ke(),
    o = Hn(n),
    s = on(r, o),
    s.callback = t ?? null,
    Un(n, s, o),
    e.current.lanes = o,
    Ys(e, o, r),
    nt(e, r),
    e
}
function Va(e, t, n, r) {
    var o = t.current
      , s = Ke()
      , i = Hn(o);
    return n = Ov(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = on(s, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Un(o, t, i),
    e !== null && (Ot(e, o, i, s),
    Fi(e, o, i)),
    i
}
function xa(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function gp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function hd(e, t) {
    gp(e, t),
    (e = e.alternate) && gp(e, t)
}
function dS() {
    return null
}
var Dv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function md(e) {
    this._internalRoot = e
}
Ha.prototype.render = md.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(_(409));
    Va(e, t, null, null)
}
;
Ha.prototype.unmount = md.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Nr(function() {
            Va(null, e, null, null)
        }),
        t[cn] = null
    }
}
;
function Ha(e) {
    this._internalRoot = e
}
Ha.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = pm();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Tn.length && t !== 0 && t < Tn[n].priority; n++)
            ;
        Tn.splice(n, 0, e),
        n === 0 && mm(e)
    }
}
;
function vd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Wa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function yp() {}
function fS(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = xa(i);
                s.call(u)
            }
        }
        var i = Av(t, r, e, 0, null, !1, !1, "", yp);
        return e._reactRootContainer = i,
        e[cn] = i.current,
        Ts(e.nodeType === 8 ? e.parentNode : e),
        Nr(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = xa(l);
            a.call(u)
        }
    }
    var l = pd(e, 0, !1, null, null, !1, !1, "", yp);
    return e._reactRootContainer = l,
    e[cn] = l.current,
    Ts(e.nodeType === 8 ? e.parentNode : e),
    Nr(function() {
        Va(t, l, n, r)
    }),
    l
}
function Ka(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = xa(i);
                a.call(l)
            }
        }
        Va(t, i, e, o)
    } else
        i = fS(n, t, e, o, r);
    return xa(i)
}
dm = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = ss(t.pendingLanes);
            n !== 0 && (Ac(t, n | 1),
            nt(t, be()),
            !(re & 6) && (Ro = be() + 500,
            Jn()))
        }
        break;
    case 13:
        Nr(function() {
            var r = dn(e, 1);
            if (r !== null) {
                var o = Ke();
                Ot(r, e, 1, o)
            }
        }),
        hd(e, 1)
    }
}
;
Dc = function(e) {
    if (e.tag === 13) {
        var t = dn(e, 134217728);
        if (t !== null) {
            var n = Ke();
            Ot(t, e, 134217728, n)
        }
        hd(e, 134217728)
    }
}
;
fm = function(e) {
    if (e.tag === 13) {
        var t = Hn(e)
          , n = dn(e, t);
        if (n !== null) {
            var r = Ke();
            Ot(n, e, t, r)
        }
        hd(e, t)
    }
}
;
pm = function() {
    return le
}
;
hm = function(e, t) {
    var n = le;
    try {
        return le = e,
        t()
    } finally {
        le = n
    }
}
;
yu = function(e, t, n) {
    switch (t) {
    case "input":
        if (du(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Da(r);
                    if (!o)
                        throw Error(_(90));
                    Wh(r),
                    du(r, o)
                }
            }
        }
        break;
    case "textarea":
        Gh(e, n);
        break;
    case "select":
        t = n.value,
        t != null && ro(e, !!n.multiple, t, !1)
    }
}
;
em = ud;
tm = Nr;
var pS = {
    usingClientEntryPoint: !1,
    Events: [qs, Yr, Da, Zh, Jh, ud]
}
  , es = {
    findFiberByHostInstance: cr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , hS = {
    bundleType: es.bundleType,
    version: es.version,
    rendererPackageName: es.rendererPackageName,
    rendererConfig: es.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = om(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: es.findFiberByHostInstance || dS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ei.isDisabled && Ei.supportsFiber)
        try {
            _a = Ei.inject(hS),
            Kt = Ei
        } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pS;
ut.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vd(t))
        throw Error(_(200));
    return cS(e, t, null, n)
}
;
ut.createRoot = function(e, t) {
    if (!vd(e))
        throw Error(_(299));
    var n = !1
      , r = ""
      , o = Dv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = pd(e, 1, !1, null, null, n, !1, r, o),
    e[cn] = t.current,
    Ts(e.nodeType === 8 ? e.parentNode : e),
    new md(t)
}
;
ut.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","),
        Error(_(268, e)));
    return e = om(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ut.flushSync = function(e) {
    return Nr(e)
}
;
ut.hydrate = function(e, t, n) {
    if (!Wa(t))
        throw Error(_(200));
    return Ka(null, e, t, !0, n)
}
;
ut.hydrateRoot = function(e, t, n) {
    if (!vd(e))
        throw Error(_(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , i = Dv;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = Av(t, null, e, 1, n ?? null, o, !1, s, i),
    e[cn] = t.current,
    Ts(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ha(t)
}
;
ut.render = function(e, t, n) {
    if (!Wa(t))
        throw Error(_(200));
    return Ka(null, e, t, !1, n)
}
;
ut.unmountComponentAtNode = function(e) {
    if (!Wa(e))
        throw Error(_(40));
    return e._reactRootContainer ? (Nr(function() {
        Ka(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[cn] = null
        })
    }),
    !0) : !1
}
;
ut.unstable_batchedUpdates = ud;
ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Wa(n))
        throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(_(38));
    return Ka(e, t, n, !1, r)
}
;
ut.version = "18.3.1-next-f1338f8080-20240426";
function Lv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)
        } catch (e) {
            console.error(e)
        }
}
Lv(),
Lh.exports = ut;
var Mr = Lh.exports;
const Fv = Nh(Mr);
var zv, xp = Mr;
zv = xp.createRoot,
xp.hydrateRoot;
const mS = 1
  , vS = 1e6;
let Ul = 0;
function gS() {
    return Ul = (Ul + 1) % Number.MAX_SAFE_INTEGER,
    Ul.toString()
}
const Vl = new Map
  , wp = e => {
    if (Vl.has(e))
        return;
    const t = setTimeout( () => {
        Vl.delete(e),
        xs({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , vS);
    Vl.set(e, t)
}
  , yS = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, mS)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? wp(n) : e.toasts.forEach(r => {
                wp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Wi = [];
let Ki = {
    toasts: []
};
function xs(e) {
    Ki = yS(Ki, e),
    Wi.forEach(t => {
        t(Ki)
    }
    )
}
function xS({...e}) {
    const t = gS()
      , n = o => xs({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => xs({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return xs({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function gd() {
    const [e,t] = d.useState(Ki);
    return d.useEffect( () => (Wi.push(t),
    () => {
        const n = Wi.indexOf(t);
        n > -1 && Wi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: xS,
        dismiss: n => xs({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function z(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Sp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Ga(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Sp(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : Sp(e[o], null)
                }
            }
    }
}
function fe(...e) {
    return d.useCallback(Ga(...e), e)
}
function vn(e, t=[]) {
    let n = [];
    function r(s, i) {
        const a = d.createContext(i)
          , l = n.length;
        n = [...n, i];
        const u = p => {
            var y;
            const {scope: m, children: h, ...S} = p
              , v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || a
              , w = d.useMemo( () => S, Object.values(S));
            return c.jsx(v.Provider, {
                value: w,
                children: h
            })
        }
        ;
        u.displayName = s + "Provider";
        function f(p, m) {
            var v;
            const h = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[l]) || a
              , S = d.useContext(h);
            if (S)
                return S;
            if (i !== void 0)
                return i;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return [u, f]
    }
    const o = () => {
        const s = n.map(i => d.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return d.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, wS(o, ...t)]
}
function wS(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const p = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...p
                }
            }
            , {});
            return d.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function jo(e) {
    const t = CS(e)
      , n = d.forwardRef( (r, o) => {
        const {children: s, ...i} = r
          , a = d.Children.toArray(s)
          , l = a.find(bS);
        if (l) {
            const u = l.props.children
              , f = a.map(p => p === l ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : p);
            return c.jsx(t, {
                ...i,
                ref: o,
                children: d.isValidElement(u) ? d.cloneElement(u, void 0, f) : null
            })
        }
        return c.jsx(t, {
            ...i,
            ref: o,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var SS = jo("Slot");
function CS(e) {
    const t = d.forwardRef( (n, r) => {
        const {children: o, ...s} = n;
        if (d.isValidElement(o)) {
            const i = PS(o)
              , a = NS(s, o.props);
            return o.type !== d.Fragment && (a.ref = r ? Ga(r, i) : i),
            d.cloneElement(o, a)
        }
        return d.Children.count(o) > 1 ? d.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var $v = Symbol("radix.slottable");
function ES(e) {
    const t = ({children: n}) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = $v,
    t
}
function bS(e) {
    return d.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === $v
}
function NS(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const l = s(...a);
            return o(...a),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function PS(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Qa(e) {
    const t = e + "CollectionProvider"
      , [n,r] = vn(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = v => {
        const {scope: w, children: y} = v
          , g = A.useRef(null)
          , x = A.useRef(new Map).current;
        return c.jsx(o, {
            scope: w,
            itemMap: x,
            collectionRef: g,
            children: y
        })
    }
    ;
    i.displayName = t;
    const a = e + "CollectionSlot"
      , l = jo(a)
      , u = A.forwardRef( (v, w) => {
        const {scope: y, children: g} = v
          , x = s(a, y)
          , C = fe(w, x.collectionRef);
        return c.jsx(l, {
            ref: C,
            children: g
        })
    }
    );
    u.displayName = a;
    const f = e + "CollectionItemSlot"
      , p = "data-radix-collection-item"
      , m = jo(f)
      , h = A.forwardRef( (v, w) => {
        const {scope: y, children: g, ...x} = v
          , C = A.useRef(null)
          , E = fe(w, C)
          , P = s(f, y);
        return A.useEffect( () => (P.itemMap.set(C, {
            ref: C,
            ...x
        }),
        () => void P.itemMap.delete(C))),
        c.jsx(m, {
            [p]: "",
            ref: E,
            children: g
        })
    }
    );
    h.displayName = f;
    function S(v) {
        const w = s(e + "CollectionConsumer", v);
        return A.useCallback( () => {
            const g = w.collectionRef.current;
            if (!g)
                return [];
            const x = Array.from(g.querySelectorAll(`[${p}]`));
            return Array.from(w.itemMap.values()).sort( (P, b) => x.indexOf(P.ref.current) - x.indexOf(b.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: h
    }, S, r]
}
var kS = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Z = kS.reduce( (e, t) => {
    const n = jo(`Primitive.${t}`)
      , r = d.forwardRef( (o, s) => {
        const {asChild: i, ...a} = o
          , l = i ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(l, {
            ...a,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function yd(e, t) {
    e && Mr.flushSync( () => e.dispatchEvent(t))
}
function Ge(e) {
    const t = d.useRef(e);
    return d.useEffect( () => {
        t.current = e
    }
    ),
    d.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function TS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ge(e);
    d.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var RS = "DismissableLayer", qu = "dismissableLayer.update", jS = "dismissableLayer.pointerDownOutside", MS = "dismissableLayer.focusOutside", Cp, Bv = d.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Js = d.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: a, ...l} = e
      , u = d.useContext(Bv)
      , [f,p] = d.useState(null)
      , m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = d.useState({})
      , S = fe(t, b => p(b))
      , v = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = v.indexOf(w)
      , g = f ? v.indexOf(f) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , C = g >= y
      , E = IS(b => {
        const T = b.target
          , M = [...u.branches].some(j => j.contains(T));
        !C || M || (o == null || o(b),
        i == null || i(b),
        b.defaultPrevented || a == null || a())
    }
    , m)
      , P = OS(b => {
        const T = b.target;
        [...u.branches].some(j => j.contains(T)) || (s == null || s(b),
        i == null || i(b),
        b.defaultPrevented || a == null || a())
    }
    , m);
    return TS(b => {
        g === u.layers.size - 1 && (r == null || r(b),
        !b.defaultPrevented && a && (b.preventDefault(),
        a()))
    }
    , m),
    d.useEffect( () => {
        if (f)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Cp = m.body.style.pointerEvents,
            m.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            Ep(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Cp)
            }
    }
    , [f, m, n, u]),
    d.useEffect( () => () => {
        f && (u.layers.delete(f),
        u.layersWithOutsidePointerEventsDisabled.delete(f),
        Ep())
    }
    , [f, u]),
    d.useEffect( () => {
        const b = () => h({});
        return document.addEventListener(qu, b),
        () => document.removeEventListener(qu, b)
    }
    , []),
    c.jsx(Z.div, {
        ...l,
        ref: S,
        style: {
            pointerEvents: x ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: z(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: z(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: z(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
Js.displayName = RS;
var _S = "DismissableLayerBranch"
  , Uv = d.forwardRef( (e, t) => {
    const n = d.useContext(Bv)
      , r = d.useRef(null)
      , o = fe(t, r);
    return d.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    c.jsx(Z.div, {
        ...e,
        ref: o
    })
}
);
Uv.displayName = _S;
function IS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ge(e)
      , r = d.useRef(!1)
      , o = d.useRef( () => {}
    );
    return d.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    Vv(jS, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function OS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ge(e)
      , r = d.useRef(!1);
    return d.useEffect( () => {
        const o = s => {
            s.target && !r.current && Vv(MS, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Ep() {
    const e = new CustomEvent(qu);
    document.dispatchEvent(e)
}
function Vv(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? yd(o, s) : o.dispatchEvent(s)
}
var AS = Js
  , DS = Uv
  , ke = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {}
  , LS = "Portal"
  , Ya = d.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,s] = d.useState(!1);
    ke( () => s(!0), []);
    const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return i ? Fv.createPortal(c.jsx(Z.div, {
        ...r,
        ref: t
    }), i) : null
}
);
Ya.displayName = LS;
function FS(e, t) {
    return d.useReducer( (n, r) => t[n][r] ?? n, e)
}
var _r = e => {
    const {present: t, children: n} = e
      , r = zS(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : d.Children.only(n)
      , s = fe(r.ref, $S(o));
    return typeof n == "function" || r.isPresent ? d.cloneElement(o, {
        ref: s
    }) : null
}
;
_r.displayName = "Presence";
function zS(e) {
    const [t,n] = d.useState()
      , r = d.useRef(null)
      , o = d.useRef(e)
      , s = d.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [a,l] = FS(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return d.useEffect( () => {
        const u = bi(r.current);
        s.current = a === "mounted" ? u : "none"
    }
    , [a]),
    ke( () => {
        const u = r.current
          , f = o.current;
        if (f !== e) {
            const m = s.current
              , h = bi(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && m !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    ke( () => {
        if (t) {
            let u;
            const f = t.ownerDocument.defaultView ?? window
              , p = h => {
                const v = bi(r.current).includes(h.animationName);
                if (h.target === t && v && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = f.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , m = h => {
                h.target === t && (s.current = bi(r.current))
            }
            ;
            return t.addEventListener("animationstart", m),
            t.addEventListener("animationcancel", p),
            t.addEventListener("animationend", p),
            () => {
                f.clearTimeout(u),
                t.removeEventListener("animationstart", m),
                t.removeEventListener("animationcancel", p),
                t.removeEventListener("animationend", p)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: d.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function bi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function $S(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var BS = Pc[" useInsertionEffect ".trim().toString()] || ke;
function Ls({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,s,i] = US({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : o;
    {
        const f = d.useRef(e !== void 0);
        d.useEffect( () => {
            const p = f.current;
            p !== a && console.warn(`${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            f.current = a
        }
        , [a, r])
    }
    const u = d.useCallback(f => {
        var p;
        if (a) {
            const m = VS(f) ? f(e) : f;
            m !== e && ((p = i.current) == null || p.call(i, m))
        } else
            s(f)
    }
    , [a, e, s, i]);
    return [l, u]
}
function US({defaultProp: e, onChange: t}) {
    const [n,r] = d.useState(e)
      , o = d.useRef(n)
      , s = d.useRef(t);
    return BS( () => {
        s.current = t
    }
    , [t]),
    d.useEffect( () => {
        var i;
        o.current !== n && ((i = s.current) == null || i.call(s, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, s]
}
function VS(e) {
    return typeof e == "function"
}
var Hv = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , HS = "VisuallyHidden"
  , Xa = d.forwardRef( (e, t) => c.jsx(Z.span, {
    ...e,
    ref: t,
    style: {
        ...Hv,
        ...e.style
    }
}));
Xa.displayName = HS;
var WS = Xa
  , xd = "ToastProvider"
  , [wd,KS,GS] = Qa("Toast")
  , [Wv,RR] = vn("Toast", [GS])
  , [QS,qa] = Wv(xd)
  , Kv = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: i} = e
      , [a,l] = d.useState(null)
      , [u,f] = d.useState(0)
      , p = d.useRef(!1)
      , m = d.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${xd}\`. Expected non-empty \`string\`.`),
    c.jsx(wd.Provider, {
        scope: t,
        children: c.jsx(QS, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: d.useCallback( () => f(h => h + 1), []),
            onToastRemove: d.useCallback( () => f(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: p,
            isClosePausedRef: m,
            children: i
        })
    })
}
;
Kv.displayName = xd;
var Gv = "ToastViewport"
  , YS = ["F8"]
  , Zu = "toast.viewportPause"
  , Ju = "toast.viewportResume"
  , Qv = d.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=YS, label: o="Notifications ({hotkey})", ...s} = e
      , i = qa(Gv, n)
      , a = KS(n)
      , l = d.useRef(null)
      , u = d.useRef(null)
      , f = d.useRef(null)
      , p = d.useRef(null)
      , m = fe(t, p, i.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = i.toastCount > 0;
    d.useEffect( () => {
        const w = y => {
            var x;
            r.length !== 0 && r.every(C => y[C] || y.code === C) && ((x = p.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    d.useEffect( () => {
        const w = l.current
          , y = p.current;
        if (S && w && y) {
            const g = () => {
                if (!i.isClosePausedRef.current) {
                    const P = new CustomEvent(Zu);
                    y.dispatchEvent(P),
                    i.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (i.isClosePausedRef.current) {
                    const P = new CustomEvent(Ju);
                    y.dispatchEvent(P),
                    i.isClosePausedRef.current = !1
                }
            }
              , C = P => {
                !w.contains(P.relatedTarget) && x()
            }
              , E = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", g),
            w.addEventListener("focusout", C),
            w.addEventListener("pointermove", g),
            w.addEventListener("pointerleave", E),
            window.addEventListener("blur", g),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", g),
                w.removeEventListener("focusout", C),
                w.removeEventListener("pointermove", g),
                w.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", g),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [S, i.isClosePausedRef]);
    const v = d.useCallback( ({tabbingDirection: w}) => {
        const g = a().map(x => {
            const C = x.ref.current
              , E = [C, ...lC(C)];
            return w === "forwards" ? E : E.reverse()
        }
        );
        return (w === "forwards" ? g.reverse() : g).flat()
    }
    , [a]);
    return d.useEffect( () => {
        const w = p.current;
        if (w) {
            const y = g => {
                var E, P, b;
                const x = g.altKey || g.ctrlKey || g.metaKey;
                if (g.key === "Tab" && !x) {
                    const T = document.activeElement
                      , M = g.shiftKey;
                    if (g.target === w && M) {
                        (E = u.current) == null || E.focus();
                        return
                    }
                    const D = v({
                        tabbingDirection: M ? "backwards" : "forwards"
                    })
                      , W = D.findIndex(I => I === T);
                    Hl(D.slice(W + 1)) ? g.preventDefault() : M ? (P = u.current) == null || P.focus() : (b = f.current) == null || b.focus()
                }
            }
            ;
            return w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
        }
    }
    , [a, v]),
    c.jsxs(DS, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && c.jsx(ec, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "forwards"
                });
                Hl(w)
            }
        }), c.jsx(wd.Slot, {
            scope: n,
            children: c.jsx(Z.ol, {
                tabIndex: -1,
                ...s,
                ref: m
            })
        }), S && c.jsx(ec, {
            ref: f,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "backwards"
                });
                Hl(w)
            }
        })]
    })
}
);
Qv.displayName = Gv;
var Yv = "ToastFocusProxy"
  , ec = d.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = qa(Yv, n);
    return c.jsx(Xa, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var u;
            const a = i.relatedTarget;
            !((u = s.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
ec.displayName = Yv;
var ei = "Toast"
  , XS = "toast.swipeStart"
  , qS = "toast.swipeMove"
  , ZS = "toast.swipeCancel"
  , JS = "toast.swipeEnd"
  , Xv = d.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i} = e
      , [a,l] = Ls({
        prop: r,
        defaultProp: o ?? !0,
        onChange: s,
        caller: ei
    });
    return c.jsx(_r, {
        present: n || a,
        children: c.jsx(nC, {
            open: a,
            ...i,
            ref: t,
            onClose: () => l(!1),
            onPause: Ge(e.onPause),
            onResume: Ge(e.onResume),
            onSwipeStart: z(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: z(e.onSwipeMove, u => {
                const {x: f, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
            }
            ),
            onSwipeCancel: z(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: z(e.onSwipeEnd, u => {
                const {x: f, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                l(!1)
            }
            )
        })
    })
}
);
Xv.displayName = ei;
var [eC,tC] = Wv(ei, {
    onClose() {}
})
  , nC = d.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: f, onSwipeMove: p, onSwipeCancel: m, onSwipeEnd: h, ...S} = e
      , v = qa(ei, n)
      , [w,y] = d.useState(null)
      , g = fe(t, I => y(I))
      , x = d.useRef(null)
      , C = d.useRef(null)
      , E = o || v.duration
      , P = d.useRef(0)
      , b = d.useRef(E)
      , T = d.useRef(0)
      , {onToastAdd: M, onToastRemove: j} = v
      , U = Ge( () => {
        var K;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((K = v.viewport) == null || K.focus()),
        i()
    }
    )
      , D = d.useCallback(I => {
        !I || I === 1 / 0 || (window.clearTimeout(T.current),
        P.current = new Date().getTime(),
        T.current = window.setTimeout(U, I))
    }
    , [U]);
    d.useEffect( () => {
        const I = v.viewport;
        if (I) {
            const K = () => {
                D(b.current),
                u == null || u()
            }
              , F = () => {
                const H = new Date().getTime() - P.current;
                b.current = b.current - H,
                window.clearTimeout(T.current),
                l == null || l()
            }
            ;
            return I.addEventListener(Zu, F),
            I.addEventListener(Ju, K),
            () => {
                I.removeEventListener(Zu, F),
                I.removeEventListener(Ju, K)
            }
        }
    }
    , [v.viewport, E, l, u, D]),
    d.useEffect( () => {
        s && !v.isClosePausedRef.current && D(E)
    }
    , [s, E, v.isClosePausedRef, D]),
    d.useEffect( () => (M(),
    () => j()), [M, j]);
    const W = d.useMemo( () => w ? rg(w) : null, [w]);
    return v.viewport ? c.jsxs(c.Fragment, {
        children: [W && c.jsx(rC, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), c.jsx(eC, {
            scope: n,
            onClose: U,
            children: Mr.createPortal(c.jsx(wd.ItemSlot, {
                scope: n,
                children: c.jsx(AS, {
                    asChild: !0,
                    onEscapeKeyDown: z(a, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || U(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: c.jsx(Z.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...S,
                        ref: g,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: z(e.onKeyDown, I => {
                            I.key === "Escape" && (a == null || a(I.nativeEvent),
                            I.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            U()))
                        }
                        ),
                        onPointerDown: z(e.onPointerDown, I => {
                            I.button === 0 && (x.current = {
                                x: I.clientX,
                                y: I.clientY
                            })
                        }
                        ),
                        onPointerMove: z(e.onPointerMove, I => {
                            if (!x.current)
                                return;
                            const K = I.clientX - x.current.x
                              , F = I.clientY - x.current.y
                              , H = !!C.current
                              , k = ["left", "right"].includes(v.swipeDirection)
                              , N = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , O = k ? N(0, K) : 0
                              , V = k ? 0 : N(0, F)
                              , B = I.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: O,
                                y: V
                            }
                              , G = {
                                originalEvent: I,
                                delta: Q
                            };
                            H ? (C.current = Q,
                            Ni(qS, p, G, {
                                discrete: !1
                            })) : bp(Q, v.swipeDirection, B) ? (C.current = Q,
                            Ni(XS, f, G, {
                                discrete: !1
                            }),
                            I.target.setPointerCapture(I.pointerId)) : (Math.abs(K) > B || Math.abs(F) > B) && (x.current = null)
                        }
                        ),
                        onPointerUp: z(e.onPointerUp, I => {
                            const K = C.current
                              , F = I.target;
                            if (F.hasPointerCapture(I.pointerId) && F.releasePointerCapture(I.pointerId),
                            C.current = null,
                            x.current = null,
                            K) {
                                const H = I.currentTarget
                                  , k = {
                                    originalEvent: I,
                                    delta: K
                                };
                                bp(K, v.swipeDirection, v.swipeThreshold) ? Ni(JS, h, k, {
                                    discrete: !0
                                }) : Ni(ZS, m, k, {
                                    discrete: !0
                                }),
                                H.addEventListener("click", N => N.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , rC = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = qa(ei, t)
      , [s,i] = d.useState(!1)
      , [a,l] = d.useState(!1);
    return iC( () => i(!0)),
    d.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : c.jsx(Ya, {
        asChild: !0,
        children: c.jsx(Xa, {
            ...r,
            children: s && c.jsxs(c.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , oC = "ToastTitle"
  , qv = d.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(Z.div, {
        ...r,
        ref: t
    })
}
);
qv.displayName = oC;
var sC = "ToastDescription"
  , Zv = d.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(Z.div, {
        ...r,
        ref: t
    })
}
);
Zv.displayName = sC;
var Jv = "ToastAction"
  , eg = d.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? c.jsx(ng, {
        altText: n,
        asChild: !0,
        children: c.jsx(Sd, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Jv}\`. Expected non-empty \`string\`.`),
    null)
}
);
eg.displayName = Jv;
var tg = "ToastClose"
  , Sd = d.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = tC(tg, n);
    return c.jsx(ng, {
        asChild: !0,
        children: c.jsx(Z.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: z(e.onClick, o.onClose)
        })
    })
}
);
Sd.displayName = tg;
var ng = d.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return c.jsx(Z.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function rg(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        aC(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...rg(r))
        }
    }
    ),
    t
}
function Ni(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? yd(o, s) : o.dispatchEvent(s)
}
var bp = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function iC(e= () => {}
) {
    const t = Ge(e);
    ke( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function aC(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function lC(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Hl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var uC = Kv
  , og = Qv
  , sg = Xv
  , ig = qv
  , ag = Zv
  , lg = eg
  , ug = Sd;
function cg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = cg(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function dg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = cg(e)) && (r && (r += " "),
        r += t);
    return r
}
const Np = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Pp = dg
  , fg = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Pp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , i = Object.keys(o).map(u => {
        const f = n == null ? void 0 : n[u]
          , p = s == null ? void 0 : s[u];
        if (f === null)
            return null;
        const m = Np(f) || Np(p);
        return o[u][m]
    }
    )
      , a = n && Object.entries(n).reduce( (u, f) => {
        let[p,m] = f;
        return m === void 0 || (u[p] = m),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, f) => {
        let {class: p, className: m, ...h} = f;
        return Object.entries(h).every(S => {
            let[v,w] = S;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...a
            }[v]) : {
                ...s,
                ...a
            }[v] === w
        }
        ) ? [...u, p, m] : u
    }
    , []);
    return Pp(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cC = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , pg = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fC = d.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: i, ...a}, l) => d.createElement("svg", {
    ref: l,
    ...dC,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: pg("lucide", o),
    ...a
}, [...i.map( ([u,f]) => d.createElement(u, f)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = (e, t) => {
    const n = d.forwardRef( ({className: r, ...o}, s) => d.createElement(fC, {
        ref: s,
        iconNode: t,
        className: pg(`lucide-${cC(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pC = Ae("Award", [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hg = Ae("Bot", [["path", {
    d: "M12 8V4H8",
    key: "hb8ula"
}], ["rect", {
    width: "16",
    height: "12",
    x: "4",
    y: "8",
    rx: "2",
    key: "enze0r"
}], ["path", {
    d: "M2 14h2",
    key: "vft8re"
}], ["path", {
    d: "M20 14h2",
    key: "4cs60a"
}], ["path", {
    d: "M15 13v2",
    key: "1xurst"
}], ["path", {
    d: "M9 13v2",
    key: "rq6x2g"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mg = Ae("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vg = Ae("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hC = Ae("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mC = Ae("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vC = Ae("Circle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gC = Ae("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yC = Ae("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xC = Ae("LogOut", [["path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    key: "1uf3rs"
}], ["polyline", {
    points: "16 17 21 12 16 7",
    key: "1gabdz"
}], ["line", {
    x1: "21",
    x2: "9",
    y1: "12",
    y2: "12",
    key: "1uyos4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wC = Ae("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SC = Ae("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CC = Ae("Server", [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = Ae("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EC = Ae("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = Ae("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bC = Ae("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Ed = "-"
  , NC = e => {
    const t = kC(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const a = i.split(Ed);
            return a[0] === "" && a.length !== 1 && a.shift(),
            yg(a, t) || PC(i)
        }
        ,
        getConflictingClassGroupIds: (i, a) => {
            const l = n[i] || [];
            return a && r[i] ? [...l, ...r[i]] : l
        }
    }
}
  , yg = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? yg(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(Ed);
    return (i = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : i.classGroupId
}
  , kp = /^\[(.+)\]$/
  , PC = e => {
    if (kp.test(e)) {
        const t = kp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , kC = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return RC(Object.entries(e.classGroups), n).forEach( ([s,i]) => {
        tc(i, r, s, t)
    }
    ),
    r
}
  , tc = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : Tp(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (TC(o)) {
                tc(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,i]) => {
            tc(i, Tp(t, s), n, r)
        }
        )
    }
    )
}
  , Tp = (e, t) => {
    let n = e;
    return t.split(Ed).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , TC = e => e.isThemeGetter
  , RC = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([i,a]) => [t + i, a])) : s);
    return [n, o]
}
) : e
  , jC = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, i) => {
        n.set(s, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let i = n.get(s);
            if (i !== void 0)
                return i;
            if ((i = r.get(s)) !== void 0)
                return o(s, i),
                i
        },
        set(s, i) {
            n.has(s) ? n.set(s, i) : o(s, i)
        }
    }
}
  , xg = "!"
  , MC = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , i = a => {
        const l = [];
        let u = 0, f = 0, p;
        for (let w = 0; w < a.length; w++) {
            let y = a[w];
            if (u === 0) {
                if (y === o && (r || a.slice(w, w + s) === t)) {
                    l.push(a.slice(f, w)),
                    f = w + s;
                    continue
                }
                if (y === "/") {
                    p = w;
                    continue
                }
            }
            y === "[" ? u++ : y === "]" && u--
        }
        const m = l.length === 0 ? a : a.substring(f)
          , h = m.startsWith(xg)
          , S = h ? m.substring(1) : m
          , v = p && p > f ? p - f : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: S,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: i
    }) : i
}
  , _C = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , IC = e => ({
    cache: jC(e.cacheSize),
    parseClassName: MC(e),
    ...NC(e)
})
  , OC = /\s+/
  , AC = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , i = e.trim().split(OC);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
        const u = i[l]
          , {modifiers: f, hasImportantModifier: p, baseClassName: m, maybePostfixModifierPosition: h} = n(u);
        let S = !!h
          , v = r(S ? m.substring(0, h) : m);
        if (!v) {
            if (!S) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (v = r(m),
            !v) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            S = !1
        }
        const w = _C(f).join(":")
          , y = p ? w + xg : w
          , g = y + v;
        if (s.includes(g))
            continue;
        s.push(g);
        const x = o(v, S);
        for (let C = 0; C < x.length; ++C) {
            const E = x[C];
            s.push(y + E)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function DC() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = wg(t)) && (r && (r += " "),
        r += n);
    return r
}
const wg = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = wg(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function LC(e, ...t) {
    let n, r, o, s = i;
    function i(l) {
        const u = t.reduce( (f, p) => p(f), e());
        return n = IC(u),
        r = n.cache.get,
        o = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const f = AC(l, n);
        return o(l, f),
        f
    }
    return function() {
        return s(DC.apply(null, arguments))
    }
}
const he = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Sg = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , FC = /^\d+\/\d+$/
  , zC = new Set(["px", "full", "screen"])
  , $C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , BC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , UC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , VC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , HC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , qt = e => uo(e) || zC.has(e) || FC.test(e)
  , Cn = e => Fo(e, "length", ZC)
  , uo = e => !!e && !Number.isNaN(Number(e))
  , Wl = e => Fo(e, "number", uo)
  , ts = e => !!e && Number.isInteger(Number(e))
  , WC = e => e.endsWith("%") && uo(e.slice(0, -1))
  , q = e => Sg.test(e)
  , En = e => $C.test(e)
  , KC = new Set(["length", "size", "percentage"])
  , GC = e => Fo(e, KC, Cg)
  , QC = e => Fo(e, "position", Cg)
  , YC = new Set(["image", "url"])
  , XC = e => Fo(e, YC, eE)
  , qC = e => Fo(e, "", JC)
  , ns = () => !0
  , Fo = (e, t, n) => {
    const r = Sg.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , ZC = e => BC.test(e) && !UC.test(e)
  , Cg = () => !1
  , JC = e => VC.test(e)
  , eE = e => HC.test(e)
  , tE = () => {
    const e = he("colors")
      , t = he("spacing")
      , n = he("blur")
      , r = he("brightness")
      , o = he("borderColor")
      , s = he("borderRadius")
      , i = he("borderSpacing")
      , a = he("borderWidth")
      , l = he("contrast")
      , u = he("grayscale")
      , f = he("hueRotate")
      , p = he("invert")
      , m = he("gap")
      , h = he("gradientColorStops")
      , S = he("gradientColorStopPositions")
      , v = he("inset")
      , w = he("margin")
      , y = he("opacity")
      , g = he("padding")
      , x = he("saturate")
      , C = he("scale")
      , E = he("sepia")
      , P = he("skew")
      , b = he("space")
      , T = he("translate")
      , M = () => ["auto", "contain", "none"]
      , j = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , U = () => ["auto", q, t]
      , D = () => [q, t]
      , W = () => ["", qt, Cn]
      , I = () => ["auto", uo, q]
      , K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , F = () => ["solid", "dashed", "dotted", "double", "none"]
      , H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , N = () => ["", "0", q]
      , O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , V = () => [uo, q];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ns],
            spacing: [qt, Cn],
            blur: ["none", "", En, q],
            brightness: V(),
            borderColor: [e],
            borderRadius: ["none", "", "full", En, q],
            borderSpacing: D(),
            borderWidth: W(),
            contrast: V(),
            grayscale: N(),
            hueRotate: V(),
            invert: N(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [WC, Cn],
            inset: U(),
            margin: U(),
            opacity: V(),
            padding: D(),
            saturate: V(),
            scale: V(),
            sepia: N(),
            skew: V(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", q]
            }],
            container: ["container"],
            columns: [{
                columns: [En]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...K(), q]
            }],
            overflow: [{
                overflow: j()
            }],
            "overflow-x": [{
                "overflow-x": j()
            }],
            "overflow-y": [{
                "overflow-y": j()
            }],
            overscroll: [{
                overscroll: M()
            }],
            "overscroll-x": [{
                "overscroll-x": M()
            }],
            "overscroll-y": [{
                "overscroll-y": M()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ts, q]
            }],
            basis: [{
                basis: U()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", q]
            }],
            grow: [{
                grow: N()
            }],
            shrink: [{
                shrink: N()
            }],
            order: [{
                order: ["first", "last", "none", ts, q]
            }],
            "grid-cols": [{
                "grid-cols": [ns]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ts, q]
                }, q]
            }],
            "col-start": [{
                "col-start": I()
            }],
            "col-end": [{
                "col-end": I()
            }],
            "grid-rows": [{
                "grid-rows": [ns]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ts, q]
                }, q]
            }],
            "row-start": [{
                "row-start": I()
            }],
            "row-end": [{
                "row-end": I()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", q]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", q]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [g]
            }],
            px: [{
                px: [g]
            }],
            py: [{
                py: [g]
            }],
            ps: [{
                ps: [g]
            }],
            pe: [{
                pe: [g]
            }],
            pt: [{
                pt: [g]
            }],
            pr: [{
                pr: [g]
            }],
            pb: [{
                pb: [g]
            }],
            pl: [{
                pl: [g]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [b]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [b]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, t]
            }],
            "min-w": [{
                "min-w": [q, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [q, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [En]
                }, En]
            }],
            h: [{
                h: [q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [q, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", En, Cn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Wl]
            }],
            "font-family": [{
                font: [ns]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
            }],
            "line-clamp": [{
                "line-clamp": ["none", uo, Wl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", qt, q]
            }],
            "list-image": [{
                "list-image": ["none", q]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", q]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...F(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", qt, Cn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", qt, q]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", q]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...K(), QC]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", GC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, XC]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [...F(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: F()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...F()]
            }],
            "outline-offset": [{
                "outline-offset": [qt, q]
            }],
            "outline-w": [{
                outline: [qt, Cn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [qt, Cn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", En, qC]
            }],
            "shadow-color": [{
                shadow: [ns]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": [...H(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": H()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", En, q]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [f]
            }],
            invert: [{
                invert: [p]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [f]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [p]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
            }],
            duration: [{
                duration: V()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", q]
            }],
            delay: [{
                delay: V()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", q]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [ts, q]
            }],
            "translate-x": [{
                "translate-x": [T]
            }],
            "translate-y": [{
                "translate-y": [T]
            }],
            "skew-x": [{
                "skew-x": [P]
            }],
            "skew-y": [{
                "skew-y": [P]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", q]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [qt, Cn, Wl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
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
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , nE = LC(tE);
function ee(...e) {
    return nE(dg(e))
}
const rE = uC
  , Eg = d.forwardRef( ({className: e, ...t}, n) => c.jsx(og, {
    ref: n,
    className: ee("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Eg.displayName = og.displayName;
const oE = fg("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , bg = d.forwardRef( ({className: e, variant: t, ...n}, r) => c.jsx(sg, {
    ref: r,
    className: ee(oE({
        variant: t
    }), e),
    ...n
}));
bg.displayName = sg.displayName;
const sE = d.forwardRef( ({className: e, ...t}, n) => c.jsx(lg, {
    ref: n,
    className: ee("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
sE.displayName = lg.displayName;
const Ng = d.forwardRef( ({className: e, ...t}, n) => c.jsx(ug, {
    ref: n,
    className: ee("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(Cd, {
        className: "h-4 w-4"
    })
}));
Ng.displayName = ug.displayName;
const Pg = d.forwardRef( ({className: e, ...t}, n) => c.jsx(ig, {
    ref: n,
    className: ee("text-sm font-semibold", e),
    ...t
}));
Pg.displayName = ig.displayName;
const kg = d.forwardRef( ({className: e, ...t}, n) => c.jsx(ag, {
    ref: n,
    className: ee("text-sm opacity-90", e),
    ...t
}));
kg.displayName = ag.displayName;
function iE() {
    const {toasts: e} = gd();
    return c.jsxs(rE, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return c.jsxs(bg, {
                ...s,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(Pg, {
                        children: n
                    }), r && c.jsx(kg, {
                        children: r
                    })]
                }), o, c.jsx(Ng, {})]
            }, t)
        }), c.jsx(Eg, {})]
    })
}
var Rp = ["light", "dark"]
  , aE = "(prefers-color-scheme: dark)"
  , lE = d.createContext(void 0)
  , uE = {
    setTheme: e => {}
    ,
    themes: []
}
  , cE = () => {
    var e;
    return (e = d.useContext(lE)) != null ? e : uE
}
;
d.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: i, attrs: a, nonce: l}) => {
    let u = s === "system"
      , f = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , p = o ? Rp.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , m = (S, v=!1, w=!0) => {
        let y = i ? i[S] : S
          , g = v ? S + "|| ''" : `'${y}'`
          , x = "";
        return o && w && !v && Rp.includes(S) && (x += `d.style.colorScheme = '${S}';`),
        n === "class" ? v || y ? x += `c.add(${g})` : x += "null" : y && (x += `d[s](n,${g})`),
        x
    }
      , h = e ? `!function(){${f}${m(e)}}()` : r ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${aE}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${m(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + m(s, !1, !1) + "}"}${p}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${m(i ? "x[e]" : "e", !0)}}else{${m(s, !1, !1)};}${p}}catch(t){}}();`;
    return d.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var dE = e => {
    switch (e) {
    case "success":
        return hE;
    case "info":
        return vE;
    case "warning":
        return mE;
    case "error":
        return gE;
    default:
        return null
    }
}
  , fE = Array(12).fill(0)
  , pE = ({visible: e, className: t}) => A.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, A.createElement("div", {
    className: "sonner-spinner"
}, fE.map( (n, r) => A.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , hE = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , mE = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , vE = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , gE = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , yE = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, A.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), A.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , xE = () => {
    let[e,t] = A.useState(document.hidden);
    return A.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , nc = 1
  , wE = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : nc++
              , s = this.toasts.find(a => a.id === o)
              , i = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
                ...a,
                ...e,
                id: o,
                title: n
            }),
            {
                ...a,
                ...e,
                id: o,
                dismissible: i,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: i,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, s, i = r.then(async l => {
                if (s = ["resolve", l],
                A.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (CE(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , f = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: f
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , f = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: f
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , f = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: f
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => i.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || nc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , qe = new wE
  , SE = (e, t) => {
    let n = (t == null ? void 0 : t.id) || nc++;
    return qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , CE = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , EE = SE
  , bE = () => qe.toasts
  , NE = () => qe.getActiveToasts();
Object.assign(EE, {
    success: qe.success,
    info: qe.info,
    warning: qe.warning,
    error: qe.error,
    custom: qe.custom,
    message: qe.message,
    promise: qe.promise,
    dismiss: qe.dismiss,
    loading: qe.loading
}, {
    getHistory: bE,
    getToasts: NE
});
function PE(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
PE(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Pi(e) {
    return e.label !== void 0
}
var kE = 3
  , TE = "32px"
  , RE = "16px"
  , jp = 4e3
  , jE = 356
  , ME = 14
  , _E = 20
  , IE = 200;
function Nt(...e) {
    return e.filter(Boolean).join(" ")
}
function OE(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var AE = e => {
    var t, n, r, o, s, i, a, l, u, f, p;
    let {invert: m, toast: h, unstyled: S, interacting: v, setHeights: w, visibleToasts: y, heights: g, index: x, toasts: C, expanded: E, removeToast: P, defaultRichColors: b, closeButton: T, style: M, cancelButtonStyle: j, actionButtonStyle: U, className: D="", descriptionClassName: W="", duration: I, position: K, gap: F, loadingIcon: H, expandByDefault: k, classNames: N, icons: O, closeButtonAriaLabel: V="Close toast", pauseWhenPageIsHidden: B} = e
      , [Q,G] = A.useState(null)
      , [ue,ce] = A.useState(null)
      , [L,oe] = A.useState(!1)
      , [se,te] = A.useState(!1)
      , [ne,ie] = A.useState(!1)
      , [De,dt] = A.useState(!1)
      , [or,gn] = A.useState(!1)
      , [sr,Wo] = A.useState(0)
      , [Dr,rf] = A.useState(0)
      , Ko = A.useRef(h.duration || I || jp)
      , of = A.useRef(null)
      , ir = A.useRef(null)
      , Ox = x === 0
      , Ax = x + 1 <= y
      , ft = h.type
      , Lr = h.dismissible !== !1
      , Dx = h.className || ""
      , Lx = h.descriptionClassName || ""
      , si = A.useMemo( () => g.findIndex(Y => Y.toastId === h.id) || 0, [g, h.id])
      , Fx = A.useMemo( () => {
        var Y;
        return (Y = h.closeButton) != null ? Y : T
    }
    , [h.closeButton, T])
      , sf = A.useMemo( () => h.duration || I || jp, [h.duration, I])
      , pl = A.useRef(0)
      , Fr = A.useRef(0)
      , af = A.useRef(0)
      , zr = A.useRef(null)
      , [zx,$x] = K.split("-")
      , lf = A.useMemo( () => g.reduce( (Y, de, ge) => ge >= si ? Y : Y + de.height, 0), [g, si])
      , uf = xE()
      , Bx = h.invert || m
      , hl = ft === "loading";
    Fr.current = A.useMemo( () => si * F + lf, [si, lf]),
    A.useEffect( () => {
        Ko.current = sf
    }
    , [sf]),
    A.useEffect( () => {
        oe(!0)
    }
    , []),
    A.useEffect( () => {
        let Y = ir.current;
        if (Y) {
            let de = Y.getBoundingClientRect().height;
            return rf(de),
            w(ge => [{
                toastId: h.id,
                height: de,
                position: h.position
            }, ...ge]),
            () => w(ge => ge.filter(St => St.toastId !== h.id))
        }
    }
    , [w, h.id]),
    A.useLayoutEffect( () => {
        if (!L)
            return;
        let Y = ir.current
          , de = Y.style.height;
        Y.style.height = "auto";
        let ge = Y.getBoundingClientRect().height;
        Y.style.height = de,
        rf(ge),
        w(St => St.find(Ct => Ct.toastId === h.id) ? St.map(Ct => Ct.toastId === h.id ? {
            ...Ct,
            height: ge
        } : Ct) : [{
            toastId: h.id,
            height: ge,
            position: h.position
        }, ...St])
    }
    , [L, h.title, h.description, w, h.id]);
    let yn = A.useCallback( () => {
        te(!0),
        Wo(Fr.current),
        w(Y => Y.filter(de => de.toastId !== h.id)),
        setTimeout( () => {
            P(h)
        }
        , IE)
    }
    , [h, P, w, Fr]);
    A.useEffect( () => {
        if (h.promise && ft === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let Y;
        return E || v || B && uf ? ( () => {
            if (af.current < pl.current) {
                let de = new Date().getTime() - pl.current;
                Ko.current = Ko.current - de
            }
            af.current = new Date().getTime()
        }
        )() : Ko.current !== 1 / 0 && (pl.current = new Date().getTime(),
        Y = setTimeout( () => {
            var de;
            (de = h.onAutoClose) == null || de.call(h, h),
            yn()
        }
        , Ko.current)),
        () => clearTimeout(Y)
    }
    , [E, v, h, ft, B, uf, yn]),
    A.useEffect( () => {
        h.delete && yn()
    }
    , [yn, h.delete]);
    function Ux() {
        var Y, de, ge;
        return O != null && O.loading ? A.createElement("div", {
            className: Nt(N == null ? void 0 : N.loader, (Y = h == null ? void 0 : h.classNames) == null ? void 0 : Y.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, O.loading) : H ? A.createElement("div", {
            className: Nt(N == null ? void 0 : N.loader, (de = h == null ? void 0 : h.classNames) == null ? void 0 : de.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, H) : A.createElement(pE, {
            className: Nt(N == null ? void 0 : N.loader, (ge = h == null ? void 0 : h.classNames) == null ? void 0 : ge.loader),
            visible: ft === "loading"
        })
    }
    return A.createElement("li", {
        tabIndex: 0,
        ref: ir,
        className: Nt(D, Dx, N == null ? void 0 : N.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[ft], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ft]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : b,
        "data-styled": !(h.jsx || h.unstyled || S),
        "data-mounted": L,
        "data-promise": !!h.promise,
        "data-swiped": or,
        "data-removed": se,
        "data-visible": Ax,
        "data-y-position": zx,
        "data-x-position": $x,
        "data-index": x,
        "data-front": Ox,
        "data-swiping": ne,
        "data-dismissible": Lr,
        "data-type": ft,
        "data-invert": Bx,
        "data-swipe-out": De,
        "data-swipe-direction": ue,
        "data-expanded": !!(E || k && L),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": C.length - x,
            "--offset": `${se ? sr : Fr.current}px`,
            "--initial-height": k ? "auto" : `${Dr}px`,
            ...M,
            ...h.style
        },
        onDragEnd: () => {
            ie(!1),
            G(null),
            zr.current = null
        }
        ,
        onPointerDown: Y => {
            hl || !Lr || (of.current = new Date,
            Wo(Fr.current),
            Y.target.setPointerCapture(Y.pointerId),
            Y.target.tagName !== "BUTTON" && (ie(!0),
            zr.current = {
                x: Y.clientX,
                y: Y.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Y, de, ge, St;
            if (De || !Lr)
                return;
            zr.current = null;
            let Ct = Number(((Y = ir.current) == null ? void 0 : Y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , xn = Number(((de = ir.current) == null ? void 0 : de.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , ar = new Date().getTime() - ((ge = of.current) == null ? void 0 : ge.getTime())
              , Et = Q === "x" ? Ct : xn
              , wn = Math.abs(Et) / ar;
            if (Math.abs(Et) >= _E || wn > .11) {
                Wo(Fr.current),
                (St = h.onDismiss) == null || St.call(h, h),
                ce(Q === "x" ? Ct > 0 ? "right" : "left" : xn > 0 ? "down" : "up"),
                yn(),
                dt(!0),
                gn(!1);
                return
            }
            ie(!1),
            G(null)
        }
        ,
        onPointerMove: Y => {
            var de, ge, St, Ct;
            if (!zr.current || !Lr || ((de = window.getSelection()) == null ? void 0 : de.toString().length) > 0)
                return;
            let xn = Y.clientY - zr.current.y
              , ar = Y.clientX - zr.current.x
              , Et = (ge = e.swipeDirections) != null ? ge : OE(K);
            !Q && (Math.abs(ar) > 1 || Math.abs(xn) > 1) && G(Math.abs(ar) > Math.abs(xn) ? "x" : "y");
            let wn = {
                x: 0,
                y: 0
            };
            Q === "y" ? (Et.includes("top") || Et.includes("bottom")) && (Et.includes("top") && xn < 0 || Et.includes("bottom") && xn > 0) && (wn.y = xn) : Q === "x" && (Et.includes("left") || Et.includes("right")) && (Et.includes("left") && ar < 0 || Et.includes("right") && ar > 0) && (wn.x = ar),
            (Math.abs(wn.x) > 0 || Math.abs(wn.y) > 0) && gn(!0),
            (St = ir.current) == null || St.style.setProperty("--swipe-amount-x", `${wn.x}px`),
            (Ct = ir.current) == null || Ct.style.setProperty("--swipe-amount-y", `${wn.y}px`)
        }
    }, Fx && !h.jsx ? A.createElement("button", {
        "aria-label": V,
        "data-disabled": hl,
        "data-close-button": !0,
        onClick: hl || !Lr ? () => {}
        : () => {
            var Y;
            yn(),
            (Y = h.onDismiss) == null || Y.call(h, h)
        }
        ,
        className: Nt(N == null ? void 0 : N.closeButton, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton)
    }, (s = O == null ? void 0 : O.close) != null ? s : yE) : null, h.jsx || d.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : A.createElement(A.Fragment, null, ft || h.icon || h.promise ? A.createElement("div", {
        "data-icon": "",
        className: Nt(N == null ? void 0 : N.icon, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || Ux() : null, h.type !== "loading" ? h.icon || (O == null ? void 0 : O[ft]) || dE(ft) : null) : null, A.createElement("div", {
        "data-content": "",
        className: Nt(N == null ? void 0 : N.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, A.createElement("div", {
        "data-title": "",
        className: Nt(N == null ? void 0 : N.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? A.createElement("div", {
        "data-description": "",
        className: Nt(W, Lx, N == null ? void 0 : N.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), d.isValidElement(h.cancel) ? h.cancel : h.cancel && Pi(h.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || j,
        onClick: Y => {
            var de, ge;
            Pi(h.cancel) && Lr && ((ge = (de = h.cancel).onClick) == null || ge.call(de, Y),
            yn())
        }
        ,
        className: Nt(N == null ? void 0 : N.cancelButton, (f = h == null ? void 0 : h.classNames) == null ? void 0 : f.cancelButton)
    }, h.cancel.label) : null, d.isValidElement(h.action) ? h.action : h.action && Pi(h.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || U,
        onClick: Y => {
            var de, ge;
            Pi(h.action) && ((ge = (de = h.action).onClick) == null || ge.call(de, Y),
            !Y.defaultPrevented && yn())
        }
        ,
        className: Nt(N == null ? void 0 : N.actionButton, (p = h == null ? void 0 : h.classNames) == null ? void 0 : p.actionButton)
    }, h.action.label) : null))
}
;
function Mp() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function DE(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let s = o === 1
          , i = s ? "--mobile-offset" : "--offset"
          , a = s ? RE : TE;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(f => {
                n[`${i}-${f}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${i}-${u}`] = a : n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var LE = d.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: s, closeButton: i, className: a, offset: l, mobileOffset: u, theme: f="light", richColors: p, duration: m, style: h, visibleToasts: S=kE, toastOptions: v, dir: w=Mp(), gap: y=ME, loadingIcon: g, icons: x, containerAriaLabel: C="Notifications", pauseWhenPageIsHidden: E} = e
      , [P,b] = A.useState([])
      , T = A.useMemo( () => Array.from(new Set([r].concat(P.filter(B => B.position).map(B => B.position)))), [P, r])
      , [M,j] = A.useState([])
      , [U,D] = A.useState(!1)
      , [W,I] = A.useState(!1)
      , [K,F] = A.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , H = A.useRef(null)
      , k = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , N = A.useRef(null)
      , O = A.useRef(!1)
      , V = A.useCallback(B => {
        b(Q => {
            var G;
            return (G = Q.find(ue => ue.id === B.id)) != null && G.delete || qe.dismiss(B.id),
            Q.filter( ({id: ue}) => ue !== B.id)
        }
        )
    }
    , []);
    return A.useEffect( () => qe.subscribe(B => {
        if (B.dismiss) {
            b(Q => Q.map(G => G.id === B.id ? {
                ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout( () => {
            Fv.flushSync( () => {
                b(Q => {
                    let G = Q.findIndex(ue => ue.id === B.id);
                    return G !== -1 ? [...Q.slice(0, G), {
                        ...Q[G],
                        ...B
                    }, ...Q.slice(G + 1)] : [B, ...Q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    A.useEffect( () => {
        if (f !== "system") {
            F(f);
            return
        }
        if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")),
        typeof window > "u")
            return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: Q}) => {
                F(Q ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: G}) => {
                try {
                    F(G ? "dark" : "light")
                } catch (ue) {
                    console.error(ue)
                }
            }
            )
        }
    }
    , [f]),
    A.useEffect( () => {
        P.length <= 1 && D(!1)
    }
    , [P]),
    A.useEffect( () => {
        let B = Q => {
            var G, ue;
            o.every(ce => Q[ce] || Q.code === ce) && (D(!0),
            (G = H.current) == null || G.focus()),
            Q.code === "Escape" && (document.activeElement === H.current || (ue = H.current) != null && ue.contains(document.activeElement)) && D(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [o]),
    A.useEffect( () => {
        if (H.current)
            return () => {
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null,
                O.current = !1)
            }
    }
    , [H.current]),
    A.createElement("section", {
        ref: t,
        "aria-label": `${C} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, T.map( (B, Q) => {
        var G;
        let[ue,ce] = B.split("-");
        return P.length ? A.createElement("ol", {
            key: B,
            dir: w === "auto" ? Mp() : w,
            tabIndex: -1,
            ref: H,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": K,
            "data-y-position": ue,
            "data-lifted": U && P.length > 1 && !s,
            "data-x-position": ce,
            style: {
                "--front-toast-height": `${((G = M[0]) == null ? void 0 : G.height) || 0}px`,
                "--width": `${jE}px`,
                "--gap": `${y}px`,
                ...h,
                ...DE(l, u)
            },
            onBlur: L => {
                O.current && !L.currentTarget.contains(L.relatedTarget) && (O.current = !1,
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null))
            }
            ,
            onFocus: L => {
                L.target instanceof HTMLElement && L.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                N.current = L.relatedTarget)
            }
            ,
            onMouseEnter: () => D(!0),
            onMouseMove: () => D(!0),
            onMouseLeave: () => {
                W || D(!1)
            }
            ,
            onDragEnd: () => D(!1),
            onPointerDown: L => {
                L.target instanceof HTMLElement && L.target.dataset.dismissible === "false" || I(!0)
            }
            ,
            onPointerUp: () => I(!1)
        }, P.filter(L => !L.position && Q === 0 || L.position === B).map( (L, oe) => {
            var se, te;
            return A.createElement(AE, {
                key: L.id,
                icons: x,
                index: oe,
                toast: L,
                defaultRichColors: p,
                duration: (se = v == null ? void 0 : v.duration) != null ? se : m,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: (te = v == null ? void 0 : v.closeButton) != null ? te : i,
                interacting: W,
                position: B,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: V,
                toasts: P.filter(ne => ne.position == L.position),
                heights: M.filter(ne => ne.position == L.position),
                setHeights: j,
                expandByDefault: s,
                gap: y,
                loadingIcon: g,
                expanded: U,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const FE = ({...e}) => {
    const {theme: t="system"} = cE();
    return c.jsx(LE, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var zE = Pc[" useId ".trim().toString()] || ( () => {}
)
  , $E = 0;
function Mo(e) {
    const [t,n] = d.useState(zE());
    return ke( () => {
        n(r => r ?? String($E++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const BE = ["top", "right", "bottom", "left"]
  , Yn = Math.min
  , ot = Math.max
  , wa = Math.round
  , ki = Math.floor
  , Qt = e => ({
    x: e,
    y: e
})
  , UE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , VE = {
    start: "end",
    end: "start"
};
function rc(e, t, n) {
    return ot(e, Yn(t, n))
}
function pn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function hn(e) {
    return e.split("-")[0]
}
function zo(e) {
    return e.split("-")[1]
}
function bd(e) {
    return e === "x" ? "y" : "x"
}
function Nd(e) {
    return e === "y" ? "height" : "width"
}
const HE = new Set(["top", "bottom"]);
function Wt(e) {
    return HE.has(hn(e)) ? "y" : "x"
}
function Pd(e) {
    return bd(Wt(e))
}
function WE(e, t, n) {
    n === void 0 && (n = !1);
    const r = zo(e)
      , o = Pd(e)
      , s = Nd(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = Sa(i)),
    [i, Sa(i)]
}
function KE(e) {
    const t = Sa(e);
    return [oc(e), t, oc(t)]
}
function oc(e) {
    return e.replace(/start|end/g, t => VE[t])
}
const _p = ["left", "right"]
  , Ip = ["right", "left"]
  , GE = ["top", "bottom"]
  , QE = ["bottom", "top"];
function YE(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Ip : _p : t ? _p : Ip;
    case "left":
    case "right":
        return t ? GE : QE;
    default:
        return []
    }
}
function XE(e, t, n, r) {
    const o = zo(e);
    let s = YE(hn(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o),
    t && (s = s.concat(s.map(oc)))),
    s
}
function Sa(e) {
    return e.replace(/left|right|bottom|top/g, t => UE[t])
}
function qE(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Tg(e) {
    return typeof e != "number" ? qE(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ca(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Op(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = Wt(t)
      , i = Pd(t)
      , a = Nd(i)
      , l = hn(t)
      , u = s === "y"
      , f = r.x + r.width / 2 - o.width / 2
      , p = r.y + r.height / 2 - o.height / 2
      , m = r[a] / 2 - o[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: f,
            y: r.y - o.height
        };
        break;
    case "bottom":
        h = {
            x: f,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: p
        };
        break;
    case "left":
        h = {
            x: r.x - o.width,
            y: p
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (zo(t)) {
    case "start":
        h[i] -= m * (n && u ? -1 : 1);
        break;
    case "end":
        h[i] += m * (n && u ? -1 : 1);
        break
    }
    return h
}
const ZE = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: i} = n
      , a = s.filter(Boolean)
      , l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: f, y: p} = Op(u, r, l)
      , m = r
      , h = {}
      , S = 0;
    for (let v = 0; v < a.length; v++) {
        const {name: w, fn: y} = a[v]
          , {x: g, y: x, data: C, reset: E} = await y({
            x: f,
            y: p,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: h,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = g ?? f,
        p = x ?? p,
        h = {
            ...h,
            [w]: {
                ...h[w],
                ...C
            }
        },
        E && S <= 50 && (S++,
        typeof E == "object" && (E.placement && (m = E.placement),
        E.rects && (u = E.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects),
        {x: f, y: p} = Op(u, m, l)),
        v = -1)
    }
    return {
        x: f,
        y: p,
        placement: m,
        strategy: o,
        middlewareData: h
    }
}
;
async function Fs(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: i, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: f="viewport", elementContext: p="floating", altBoundary: m=!1, padding: h=0} = pn(t, e)
      , S = Tg(h)
      , w = a[m ? p === "floating" ? "reference" : "floating" : p]
      , y = Ca(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: f,
        strategy: l
    }))
      , g = p === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , C = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = Ca(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: g,
        offsetParent: x,
        strategy: l
    }) : g);
    return {
        top: (y.top - E.top + S.top) / C.y,
        bottom: (E.bottom - y.bottom + S.bottom) / C.y,
        left: (y.left - E.left + S.left) / C.x,
        right: (E.right - y.right + S.right) / C.x
    }
}
const JE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: i, elements: a, middlewareData: l} = t
          , {element: u, padding: f=0} = pn(e, t) || {};
        if (u == null)
            return {};
        const p = Tg(f)
          , m = {
            x: n,
            y: r
        }
          , h = Pd(o)
          , S = Nd(h)
          , v = await i.getDimensions(u)
          , w = h === "y"
          , y = w ? "top" : "left"
          , g = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , C = s.reference[S] + s.reference[h] - m[h] - s.floating[S]
          , E = m[h] - s.reference[h]
          , P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let b = P ? P[x] : 0;
        (!b || !await (i.isElement == null ? void 0 : i.isElement(P))) && (b = a.floating[x] || s.floating[S]);
        const T = C / 2 - E / 2
          , M = b / 2 - v[S] / 2 - 1
          , j = Yn(p[y], M)
          , U = Yn(p[g], M)
          , D = j
          , W = b - v[S] - U
          , I = b / 2 - v[S] / 2 + T
          , K = rc(D, I, W)
          , F = !l.arrow && zo(o) != null && I !== K && s.reference[S] / 2 - (I < D ? j : U) - v[S] / 2 < 0
          , H = F ? I < D ? I - D : I - W : 0;
        return {
            [h]: m[h] + H,
            data: {
                [h]: K,
                centerOffset: I - K - H,
                ...F && {
                    alignmentOffset: H
                }
            },
            reset: F
        }
    }
})
  , eb = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: i, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: f=!0, crossAxis: p=!0, fallbackPlacements: m, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: v=!0, ...w} = pn(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const y = hn(o)
              , g = Wt(a)
              , x = hn(a) === a
              , C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , E = m || (x || !v ? [Sa(a)] : KE(a))
              , P = S !== "none";
            !m && P && E.push(...XE(a, v, S, C));
            const b = [a, ...E]
              , T = await Fs(t, w)
              , M = [];
            let j = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (f && M.push(T[y]),
            p) {
                const I = WE(o, i, C);
                M.push(T[I[0]], T[I[1]])
            }
            if (j = [...j, {
                placement: o,
                overflows: M
            }],
            !M.every(I => I <= 0)) {
                var U, D;
                const I = (((U = s.flip) == null ? void 0 : U.index) || 0) + 1
                  , K = b[I];
                if (K && (!(p === "alignment" ? g !== Wt(K) : !1) || j.every(k => k.overflows[0] > 0 && Wt(k.placement) === g)))
                    return {
                        data: {
                            index: I,
                            overflows: j
                        },
                        reset: {
                            placement: K
                        }
                    };
                let F = (D = j.filter(H => H.overflows[0] <= 0).sort( (H, k) => H.overflows[1] - k.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!F)
                    switch (h) {
                    case "bestFit":
                        {
                            var W;
                            const H = (W = j.filter(k => {
                                if (P) {
                                    const N = Wt(k.placement);
                                    return N === g || N === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(N => N > 0).reduce( (N, O) => N + O, 0)]).sort( (k, N) => k[1] - N[1])[0]) == null ? void 0 : W[0];
                            H && (F = H);
                            break
                        }
                    case "initialPlacement":
                        F = a;
                        break
                    }
                if (o !== F)
                    return {
                        reset: {
                            placement: F
                        }
                    }
            }
            return {}
        }
    }
};
function Ap(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Dp(e) {
    return BE.some(t => e[t] >= 0)
}
const tb = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = pn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await Fs(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = Ap(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: Dp(i)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await Fs(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = Ap(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: Dp(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Rg = new Set(["left", "top"]);
async function nb(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , i = hn(n)
      , a = zo(n)
      , l = Wt(n) === "y"
      , u = Rg.has(i) ? -1 : 1
      , f = s && l ? -1 : 1
      , p = pn(t, e);
    let {mainAxis: m, crossAxis: h, alignmentAxis: S} = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return a && typeof S == "number" && (h = a === "end" ? S * -1 : S),
    l ? {
        x: h * f,
        y: m * u
    } : {
        x: m * u,
        y: h * f
    }
}
const rb = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: i, middlewareData: a} = t
              , l = await nb(t, e);
            return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: i
                }
            }
        }
    }
}
  , ob = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: i=!1, limiter: a={
                fn: w => {
                    let {x: y, y: g} = w;
                    return {
                        x: y,
                        y: g
                    }
                }
            }, ...l} = pn(e, t)
              , u = {
                x: n,
                y: r
            }
              , f = await Fs(t, l)
              , p = Wt(hn(o))
              , m = bd(p);
            let h = u[m]
              , S = u[p];
            if (s) {
                const w = m === "y" ? "top" : "left"
                  , y = m === "y" ? "bottom" : "right"
                  , g = h + f[w]
                  , x = h - f[y];
                h = rc(g, h, x)
            }
            if (i) {
                const w = p === "y" ? "top" : "left"
                  , y = p === "y" ? "bottom" : "right"
                  , g = S + f[w]
                  , x = S - f[y];
                S = rc(g, S, x)
            }
            const v = a.fn({
                ...t,
                [m]: h,
                [p]: S
            });
            return {
                ...v,
                data: {
                    x: v.x - n,
                    y: v.y - r,
                    enabled: {
                        [m]: s,
                        [p]: i
                    }
                }
            }
        }
    }
}
  , sb = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: i} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = pn(e, t)
              , f = {
                x: n,
                y: r
            }
              , p = Wt(o)
              , m = bd(p);
            let h = f[m]
              , S = f[p];
            const v = pn(a, t)
              , w = typeof v == "number" ? {
                mainAxis: v,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...v
            };
            if (l) {
                const x = m === "y" ? "height" : "width"
                  , C = s.reference[m] - s.floating[x] + w.mainAxis
                  , E = s.reference[m] + s.reference[x] - w.mainAxis;
                h < C ? h = C : h > E && (h = E)
            }
            if (u) {
                var y, g;
                const x = m === "y" ? "width" : "height"
                  , C = Rg.has(hn(o))
                  , E = s.reference[p] - s.floating[x] + (C && ((y = i.offset) == null ? void 0 : y[p]) || 0) + (C ? 0 : w.crossAxis)
                  , P = s.reference[p] + s.reference[x] + (C ? 0 : ((g = i.offset) == null ? void 0 : g[p]) || 0) - (C ? w.crossAxis : 0);
                S < E ? S = E : S > P && (S = P)
            }
            return {
                [m]: h,
                [p]: S
            }
        }
    }
}
  , ib = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: i, elements: a} = t
              , {apply: l= () => {}
            , ...u} = pn(e, t)
              , f = await Fs(t, u)
              , p = hn(o)
              , m = zo(o)
              , h = Wt(o) === "y"
              , {width: S, height: v} = s.floating;
            let w, y;
            p === "top" || p === "bottom" ? (w = p,
            y = m === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = p,
            w = m === "end" ? "top" : "bottom");
            const g = v - f.top - f.bottom
              , x = S - f.left - f.right
              , C = Yn(v - f[w], g)
              , E = Yn(S - f[y], x)
              , P = !t.middlewareData.shift;
            let b = C
              , T = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = g),
            P && !m) {
                const j = ot(f.left, 0)
                  , U = ot(f.right, 0)
                  , D = ot(f.top, 0)
                  , W = ot(f.bottom, 0);
                h ? T = S - 2 * (j !== 0 || U !== 0 ? j + U : ot(f.left, f.right)) : b = v - 2 * (D !== 0 || W !== 0 ? D + W : ot(f.top, f.bottom))
            }
            await l({
                ...t,
                availableWidth: T,
                availableHeight: b
            });
            const M = await i.getDimensions(a.floating);
            return S !== M.width || v !== M.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Za() {
    return typeof window < "u"
}
function $o(e) {
    return jg(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function at(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Xt(e) {
    var t;
    return (t = (jg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function jg(e) {
    return Za() ? e instanceof Node || e instanceof at(e).Node : !1
}
function Dt(e) {
    return Za() ? e instanceof Element || e instanceof at(e).Element : !1
}
function Yt(e) {
    return Za() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1
}
function Lp(e) {
    return !Za() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot
}
const ab = new Set(["inline", "contents"]);
function ti(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Lt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ab.has(o)
}
const lb = new Set(["table", "td", "th"]);
function ub(e) {
    return lb.has($o(e))
}
const cb = [":popover-open", ":modal"];
function Ja(e) {
    return cb.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const db = ["transform", "translate", "scale", "rotate", "perspective"]
  , fb = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , pb = ["paint", "layout", "strict", "content"];
function kd(e) {
    const t = Td()
      , n = Dt(e) ? Lt(e) : e;
    return db.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || fb.some(r => (n.willChange || "").includes(r)) || pb.some(r => (n.contain || "").includes(r))
}
function hb(e) {
    let t = Xn(e);
    for (; Yt(t) && !_o(t); ) {
        if (kd(t))
            return t;
        if (Ja(t))
            return null;
        t = Xn(t)
    }
    return null
}
function Td() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const mb = new Set(["html", "body", "#document"]);
function _o(e) {
    return mb.has($o(e))
}
function Lt(e) {
    return at(e).getComputedStyle(e)
}
function el(e) {
    return Dt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Xn(e) {
    if ($o(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Lp(e) && e.host || Xt(e);
    return Lp(t) ? t.host : t
}
function Mg(e) {
    const t = Xn(e);
    return _o(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Yt(t) && ti(t) ? t : Mg(t)
}
function zs(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Mg(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = at(o);
    if (s) {
        const a = sc(i);
        return t.concat(i, i.visualViewport || [], ti(o) ? o : [], a && n ? zs(a) : [])
    }
    return t.concat(o, zs(o, [], n))
}
function sc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function _g(e) {
    const t = Lt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Yt(e)
      , s = o ? e.offsetWidth : n
      , i = o ? e.offsetHeight : r
      , a = wa(n) !== s || wa(r) !== i;
    return a && (n = s,
    r = i),
    {
        width: n,
        height: r,
        $: a
    }
}
function Rd(e) {
    return Dt(e) ? e : e.contextElement
}
function co(e) {
    const t = Rd(e);
    if (!Yt(t))
        return Qt(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = _g(t);
    let i = (s ? wa(n.width) : n.width) / r
      , a = (s ? wa(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: i,
        y: a
    }
}
const vb = Qt(0);
function Ig(e) {
    const t = at(e);
    return !Td() || !t.visualViewport ? vb : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function gb(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== at(e) ? !1 : t
}
function Pr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = Rd(e);
    let i = Qt(1);
    t && (r ? Dt(r) && (i = co(r)) : i = co(e));
    const a = gb(s, n, r) ? Ig(s) : Qt(0);
    let l = (o.left + a.x) / i.x
      , u = (o.top + a.y) / i.y
      , f = o.width / i.x
      , p = o.height / i.y;
    if (s) {
        const m = at(s)
          , h = r && Dt(r) ? at(r) : r;
        let S = m
          , v = sc(S);
        for (; v && r && h !== S; ) {
            const w = co(v)
              , y = v.getBoundingClientRect()
              , g = Lt(v)
              , x = y.left + (v.clientLeft + parseFloat(g.paddingLeft)) * w.x
              , C = y.top + (v.clientTop + parseFloat(g.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            f *= w.x,
            p *= w.y,
            l += x,
            u += C,
            S = at(v),
            v = sc(S)
        }
    }
    return Ca({
        width: f,
        height: p,
        x: l,
        y: u
    })
}
function jd(e, t) {
    const n = el(e).scrollLeft;
    return t ? t.left + n : Pr(Xt(e)).left + n
}
function Og(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : jd(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}
function yb(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , i = Xt(r)
      , a = t ? Ja(t.floating) : !1;
    if (r === i || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Qt(1);
    const f = Qt(0)
      , p = Yt(r);
    if ((p || !p && !s) && (($o(r) !== "body" || ti(i)) && (l = el(r)),
    Yt(r))) {
        const h = Pr(r);
        u = co(r),
        f.x = h.x + r.clientLeft,
        f.y = h.y + r.clientTop
    }
    const m = i && !p && !s ? Og(i, l, !0) : Qt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + f.x + m.x,
        y: n.y * u.y - l.scrollTop * u.y + f.y + m.y
    }
}
function xb(e) {
    return Array.from(e.getClientRects())
}
function wb(e) {
    const t = Xt(e)
      , n = el(e)
      , r = e.ownerDocument.body
      , o = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + jd(e);
    const a = -n.scrollTop;
    return Lt(r).direction === "rtl" && (i += ot(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: i,
        y: a
    }
}
function Sb(e, t) {
    const n = at(e)
      , r = Xt(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , i = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        s = o.width,
        i = o.height;
        const u = Td();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: a,
        y: l
    }
}
const Cb = new Set(["absolute", "fixed"]);
function Eb(e, t) {
    const n = Pr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = Yt(e) ? co(e) : Qt(1)
      , i = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = o * s.x
      , u = r * s.y;
    return {
        width: i,
        height: a,
        x: l,
        y: u
    }
}
function Fp(e, t, n) {
    let r;
    if (t === "viewport")
        r = Sb(e, n);
    else if (t === "document")
        r = wb(Xt(e));
    else if (Dt(t))
        r = Eb(t, n);
    else {
        const o = Ig(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Ca(r)
}
function Ag(e, t) {
    const n = Xn(e);
    return n === t || !Dt(n) || _o(n) ? !1 : Lt(n).position === "fixed" || Ag(n, t)
}
function bb(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = zs(e, [], !1).filter(a => Dt(a) && $o(a) !== "body")
      , o = null;
    const s = Lt(e).position === "fixed";
    let i = s ? Xn(e) : e;
    for (; Dt(i) && !_o(i); ) {
        const a = Lt(i)
          , l = kd(i);
        !l && a.position === "fixed" && (o = null),
        (s ? !l && !o : !l && a.position === "static" && !!o && Cb.has(o.position) || ti(i) && !l && Ag(e, i)) ? r = r.filter(f => f !== i) : o = a,
        i = Xn(i)
    }
    return t.set(e, r),
    r
}
function Nb(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const i = [...n === "clippingAncestors" ? Ja(t) ? [] : bb(t, this._c) : [].concat(n), r]
      , a = i[0]
      , l = i.reduce( (u, f) => {
        const p = Fp(t, f, o);
        return u.top = ot(p.top, u.top),
        u.right = Yn(p.right, u.right),
        u.bottom = Yn(p.bottom, u.bottom),
        u.left = ot(p.left, u.left),
        u
    }
    , Fp(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function Pb(e) {
    const {width: t, height: n} = _g(e);
    return {
        width: t,
        height: n
    }
}
function kb(e, t, n) {
    const r = Yt(t)
      , o = Xt(t)
      , s = n === "fixed"
      , i = Pr(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Qt(0);
    function u() {
        l.x = jd(o)
    }
    if (r || !r && !s)
        if (($o(t) !== "body" || ti(o)) && (a = el(t)),
        r) {
            const h = Pr(t, !0, s, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            o && u();
    s && !r && o && u();
    const f = o && !r && !s ? Og(o, a) : Qt(0)
      , p = i.left + a.scrollLeft - l.x - f.x
      , m = i.top + a.scrollTop - l.y - f.y;
    return {
        x: p,
        y: m,
        width: i.width,
        height: i.height
    }
}
function Kl(e) {
    return Lt(e).position === "static"
}
function zp(e, t) {
    if (!Yt(e) || Lt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Xt(e) === n && (n = n.ownerDocument.body),
    n
}
function Dg(e, t) {
    const n = at(e);
    if (Ja(e))
        return n;
    if (!Yt(e)) {
        let o = Xn(e);
        for (; o && !_o(o); ) {
            if (Dt(o) && !Kl(o))
                return o;
            o = Xn(o)
        }
        return n
    }
    let r = zp(e, t);
    for (; r && ub(r) && Kl(r); )
        r = zp(r, t);
    return r && _o(r) && Kl(r) && !kd(r) ? n : r || hb(e) || n
}
const Tb = async function(e) {
    const t = this.getOffsetParent || Dg
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: kb(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function Rb(e) {
    return Lt(e).direction === "rtl"
}
const jb = {
    convertOffsetParentRelativeRectToViewportRelativeRect: yb,
    getDocumentElement: Xt,
    getClippingRect: Nb,
    getOffsetParent: Dg,
    getElementRects: Tb,
    getClientRects: xb,
    getDimensions: Pb,
    getScale: co,
    isElement: Dt,
    isRTL: Rb
};
function Lg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function Mb(e, t) {
    let n = null, r;
    const o = Xt(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function i(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const u = e.getBoundingClientRect()
          , {left: f, top: p, width: m, height: h} = u;
        if (a || t(),
        !m || !h)
            return;
        const S = ki(p)
          , v = ki(o.clientWidth - (f + m))
          , w = ki(o.clientHeight - (p + h))
          , y = ki(f)
          , x = {
            rootMargin: -S + "px " + -v + "px " + -w + "px " + -y + "px",
            threshold: ot(0, Yn(1, l)) || 1
        };
        let C = !0;
        function E(P) {
            const b = P[0].intersectionRatio;
            if (b !== l) {
                if (!C)
                    return i();
                b ? i(!1, b) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            b === 1 && !Lg(u, e.getBoundingClientRect()) && i(),
            C = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,x)
        }
        n.observe(e)
    }
    return i(!0),
    s
}
function _b(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Rd(e)
      , f = o || s ? [...u ? zs(u) : [], ...zs(t)] : [];
    f.forEach(y => {
        o && y.addEventListener("scroll", n, {
            passive: !0
        }),
        s && y.addEventListener("resize", n)
    }
    );
    const p = u && a ? Mb(u, n) : null;
    let m = -1
      , h = null;
    i && (h = new ResizeObserver(y => {
        let[g] = y;
        g && g.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(m),
        m = requestAnimationFrame( () => {
            var x;
            (x = h) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let S, v = l ? Pr(e) : null;
    l && w();
    function w() {
        const y = Pr(e);
        v && !Lg(v, y) && n(),
        v = y,
        S = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var y;
        f.forEach(g => {
            o && g.removeEventListener("scroll", n),
            s && g.removeEventListener("resize", n)
        }
        ),
        p == null || p(),
        (y = h) == null || y.disconnect(),
        h = null,
        l && cancelAnimationFrame(S)
    }
}
const Ib = rb
  , Ob = ob
  , Ab = eb
  , Db = ib
  , Lb = tb
  , $p = JE
  , Fb = sb
  , zb = (e, t, n) => {
    const r = new Map
      , o = {
        platform: jb,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return ZE(e, t, {
        ...o,
        platform: s
    })
}
;
var $b = typeof document < "u"
  , Bb = function() {}
  , Gi = $b ? d.useLayoutEffect : Bb;
function Ea(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ea(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Ea(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Fg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Bp(e, t) {
    const n = Fg(e);
    return Math.round(t * n) / n
}
function Gl(e) {
    const t = d.useRef(e);
    return Gi( () => {
        t.current = e
    }
    ),
    t
}
function Ub(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: i}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [f,p] = d.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [m,h] = d.useState(r);
    Ea(m, r) || h(r);
    const [S,v] = d.useState(null)
      , [w,y] = d.useState(null)
      , g = d.useCallback(k => {
        k !== P.current && (P.current = k,
        v(k))
    }
    , [])
      , x = d.useCallback(k => {
        k !== b.current && (b.current = k,
        y(k))
    }
    , [])
      , C = s || S
      , E = i || w
      , P = d.useRef(null)
      , b = d.useRef(null)
      , T = d.useRef(f)
      , M = l != null
      , j = Gl(l)
      , U = Gl(o)
      , D = Gl(u)
      , W = d.useCallback( () => {
        if (!P.current || !b.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: m
        };
        U.current && (k.platform = U.current),
        zb(P.current, b.current, k).then(N => {
            const O = {
                ...N,
                isPositioned: D.current !== !1
            };
            I.current && !Ea(T.current, O) && (T.current = O,
            Mr.flushSync( () => {
                p(O)
            }
            ))
        }
        )
    }
    , [m, t, n, U, D]);
    Gi( () => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1,
        p(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const I = d.useRef(!1);
    Gi( () => (I.current = !0,
    () => {
        I.current = !1
    }
    ), []),
    Gi( () => {
        if (C && (P.current = C),
        E && (b.current = E),
        C && E) {
            if (j.current)
                return j.current(C, E, W);
            W()
        }
    }
    , [C, E, W, j, M]);
    const K = d.useMemo( () => ({
        reference: P,
        floating: b,
        setReference: g,
        setFloating: x
    }), [g, x])
      , F = d.useMemo( () => ({
        reference: C,
        floating: E
    }), [C, E])
      , H = d.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!F.floating)
            return k;
        const N = Bp(F.floating, f.x)
          , O = Bp(F.floating, f.y);
        return a ? {
            ...k,
            transform: "translate(" + N + "px, " + O + "px)",
            ...Fg(F.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: N,
            top: O
        }
    }
    , [n, a, F.floating, f.x, f.y]);
    return d.useMemo( () => ({
        ...f,
        update: W,
        refs: K,
        elements: F,
        floatingStyles: H
    }), [f, W, K, F, H])
}
const Vb = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? $p({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? $p({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , Hb = (e, t) => ({
    ...Ib(e),
    options: [e, t]
})
  , Wb = (e, t) => ({
    ...Ob(e),
    options: [e, t]
})
  , Kb = (e, t) => ({
    ...Fb(e),
    options: [e, t]
})
  , Gb = (e, t) => ({
    ...Ab(e),
    options: [e, t]
})
  , Qb = (e, t) => ({
    ...Db(e),
    options: [e, t]
})
  , Yb = (e, t) => ({
    ...Lb(e),
    options: [e, t]
})
  , Xb = (e, t) => ({
    ...Vb(e),
    options: [e, t]
});
var qb = "Arrow"
  , zg = d.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return c.jsx(Z.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : c.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
zg.displayName = qb;
var Zb = zg;
function Jb(e) {
    const [t,n] = d.useState(void 0);
    return ke( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize,
                    a = u.blockSize
                } else
                    i = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Md = "Popper"
  , [$g,Bo] = vn(Md)
  , [eN,Bg] = $g(Md)
  , Ug = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = d.useState(null);
    return c.jsx(eN, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
Ug.displayName = Md;
var Vg = "PopperAnchor"
  , Hg = d.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = Bg(Vg, n)
      , i = d.useRef(null)
      , a = fe(t, i);
    return d.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : c.jsx(Z.div, {
        ...o,
        ref: a
    })
}
);
Hg.displayName = Vg;
var _d = "PopperContent"
  , [tN,nN] = $g(_d)
  , Wg = d.forwardRef( (e, t) => {
    var L, oe, se, te, ne, ie;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: i=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: f=0, sticky: p="partial", hideWhenDetached: m=!1, updatePositionStrategy: h="optimized", onPlaced: S, ...v} = e
      , w = Bg(_d, n)
      , [y,g] = d.useState(null)
      , x = fe(t, De => g(De))
      , [C,E] = d.useState(null)
      , P = Jb(C)
      , b = (P == null ? void 0 : P.width) ?? 0
      , T = (P == null ? void 0 : P.height) ?? 0
      , M = r + (s !== "center" ? "-" + s : "")
      , j = typeof f == "number" ? f : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...f
    }
      , U = Array.isArray(u) ? u : [u]
      , D = U.length > 0
      , W = {
        padding: j,
        boundary: U.filter(oN),
        altBoundary: D
    }
      , {refs: I, floatingStyles: K, placement: F, isPositioned: H, middlewareData: k} = Ub({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...De) => _b(...De, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [Hb({
            mainAxis: o + T,
            alignmentAxis: i
        }), l && Wb({
            mainAxis: !0,
            crossAxis: !1,
            limiter: p === "partial" ? Kb() : void 0,
            ...W
        }), l && Gb({
            ...W
        }), Qb({
            ...W,
            apply: ({elements: De, rects: dt, availableWidth: or, availableHeight: gn}) => {
                const {width: sr, height: Wo} = dt.reference
                  , Dr = De.floating.style;
                Dr.setProperty("--radix-popper-available-width", `${or}px`),
                Dr.setProperty("--radix-popper-available-height", `${gn}px`),
                Dr.setProperty("--radix-popper-anchor-width", `${sr}px`),
                Dr.setProperty("--radix-popper-anchor-height", `${Wo}px`)
            }
        }), C && Xb({
            element: C,
            padding: a
        }), sN({
            arrowWidth: b,
            arrowHeight: T
        }), m && Yb({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [N,O] = Qg(F)
      , V = Ge(S);
    ke( () => {
        H && (V == null || V())
    }
    , [H, V]);
    const B = (L = k.arrow) == null ? void 0 : L.x
      , Q = (oe = k.arrow) == null ? void 0 : oe.y
      , G = ((se = k.arrow) == null ? void 0 : se.centerOffset) !== 0
      , [ue,ce] = d.useState();
    return ke( () => {
        y && ce(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    c.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...K,
            transform: H ? K.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ue,
            "--radix-popper-transform-origin": [(te = k.transformOrigin) == null ? void 0 : te.x, (ne = k.transformOrigin) == null ? void 0 : ne.y].join(" "),
            ...((ie = k.hide) == null ? void 0 : ie.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: c.jsx(tN, {
            scope: n,
            placedSide: N,
            onArrowChange: E,
            arrowX: B,
            arrowY: Q,
            shouldHideArrow: G,
            children: c.jsx(Z.div, {
                "data-side": N,
                "data-align": O,
                ...v,
                ref: x,
                style: {
                    ...v.style,
                    animation: H ? void 0 : "none"
                }
            })
        })
    })
}
);
Wg.displayName = _d;
var Kg = "PopperArrow"
  , rN = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Gg = d.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = nN(Kg, r)
      , i = rN[s.placedSide];
    return c.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: c.jsx(Zb, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Gg.displayName = Kg;
function oN(e) {
    return e !== null
}
var sN = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, y, g;
        const {placement: n, rects: r, middlewareData: o} = t
          , i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = i ? 0 : e.arrowWidth
          , l = i ? 0 : e.arrowHeight
          , [u,f] = Qg(n)
          , p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[f]
          , m = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + a / 2
          , h = (((g = o.arrow) == null ? void 0 : g.y) ?? 0) + l / 2;
        let S = ""
          , v = "";
        return u === "bottom" ? (S = i ? p : `${m}px`,
        v = `${-l}px`) : u === "top" ? (S = i ? p : `${m}px`,
        v = `${r.floating.height + l}px`) : u === "right" ? (S = `${-l}px`,
        v = i ? p : `${h}px`) : u === "left" && (S = `${r.floating.width + l}px`,
        v = i ? p : `${h}px`),
        {
            data: {
                x: S,
                y: v
            }
        }
    }
});
function Qg(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var Yg = Ug
  , Id = Hg
  , Od = Wg
  , Ad = Gg
  , [tl,jR] = vn("Tooltip", [Bo])
  , Dd = Bo()
  , Xg = "TooltipProvider"
  , iN = 700
  , Up = "tooltip.open"
  , [aN,qg] = tl(Xg)
  , Zg = e => {
    const {__scopeTooltip: t, delayDuration: n=iN, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , i = d.useRef(!0)
      , a = d.useRef(!1)
      , l = d.useRef(0);
    return d.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    c.jsx(aN, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: d.useCallback( () => {
            window.clearTimeout(l.current),
            i.current = !1
        }
        , []),
        onClose: d.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => i.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: d.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
Zg.displayName = Xg;
var Jg = "Tooltip"
  , [MR,nl] = tl(Jg)
  , ic = "TooltipTrigger"
  , lN = d.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = nl(ic, n)
      , s = qg(ic, n)
      , i = Dd(n)
      , a = d.useRef(null)
      , l = fe(t, a, o.onTriggerChange)
      , u = d.useRef(!1)
      , f = d.useRef(!1)
      , p = d.useCallback( () => u.current = !1, []);
    return d.useEffect( () => () => document.removeEventListener("pointerup", p), [p]),
    c.jsx(Id, {
        asChild: !0,
        ...i,
        children: c.jsx(Z.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: z(e.onPointerMove, m => {
                m.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                f.current = !0)
            }
            ),
            onPointerLeave: z(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                f.current = !1
            }
            ),
            onPointerDown: z(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", p, {
                    once: !0
                })
            }
            ),
            onFocus: z(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: z(e.onBlur, o.onClose),
            onClick: z(e.onClick, o.onClose)
        })
    })
}
);
lN.displayName = ic;
var uN = "TooltipPortal"
  , [_R,cN] = tl(uN, {
    forceMount: void 0
})
  , Io = "TooltipContent"
  , ey = d.forwardRef( (e, t) => {
    const n = cN(Io, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , i = nl(Io, e.__scopeTooltip);
    return c.jsx(_r, {
        present: r || i.open,
        children: i.disableHoverableContent ? c.jsx(ty, {
            side: o,
            ...s,
            ref: t
        }) : c.jsx(dN, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , dN = d.forwardRef( (e, t) => {
    const n = nl(Io, e.__scopeTooltip)
      , r = qg(Io, e.__scopeTooltip)
      , o = d.useRef(null)
      , s = fe(t, o)
      , [i,a] = d.useState(null)
      , {trigger: l, onClose: u} = n
      , f = o.current
      , {onPointerInTransitChange: p} = r
      , m = d.useCallback( () => {
        a(null),
        p(!1)
    }
    , [p])
      , h = d.useCallback( (S, v) => {
        const w = S.currentTarget
          , y = {
            x: S.clientX,
            y: S.clientY
        }
          , g = vN(y, w.getBoundingClientRect())
          , x = gN(y, g)
          , C = yN(v.getBoundingClientRect())
          , E = wN([...x, ...C]);
        a(E),
        p(!0)
    }
    , [p]);
    return d.useEffect( () => () => m(), [m]),
    d.useEffect( () => {
        if (l && f) {
            const S = w => h(w, f)
              , v = w => h(w, l);
            return l.addEventListener("pointerleave", S),
            f.addEventListener("pointerleave", v),
            () => {
                l.removeEventListener("pointerleave", S),
                f.removeEventListener("pointerleave", v)
            }
        }
    }
    , [l, f, h, m]),
    d.useEffect( () => {
        if (i) {
            const S = v => {
                const w = v.target
                  , y = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , g = (l == null ? void 0 : l.contains(w)) || (f == null ? void 0 : f.contains(w))
                  , x = !xN(y, i);
                g ? m() : x && (m(),
                u())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [l, f, i, u, m]),
    c.jsx(ty, {
        ...e,
        ref: s
    })
}
)
  , [fN,pN] = tl(Jg, {
    isInside: !1
})
  , hN = ES("TooltipContent")
  , ty = d.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: i, ...a} = e
      , l = nl(Io, n)
      , u = Dd(n)
      , {onClose: f} = l;
    return d.useEffect( () => (document.addEventListener(Up, f),
    () => document.removeEventListener(Up, f)), [f]),
    d.useEffect( () => {
        if (l.trigger) {
            const p = m => {
                const h = m.target;
                h != null && h.contains(l.trigger) && f()
            }
            ;
            return window.addEventListener("scroll", p, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", p, {
                capture: !0
            })
        }
    }
    , [l.trigger, f]),
    c.jsx(Js, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: p => p.preventDefault(),
        onDismiss: f,
        children: c.jsxs(Od, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [c.jsx(hN, {
                children: r
            }), c.jsx(fN, {
                scope: n,
                isInside: !0,
                children: c.jsx(WS, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
ey.displayName = Io;
var ny = "TooltipArrow"
  , mN = d.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Dd(n);
    return pN(ny, n).isInside ? null : c.jsx(Ad, {
        ...o,
        ...r,
        ref: t
    })
}
);
mN.displayName = ny;
function vN(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function gN(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function yN(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function xN(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s]
          , l = t[i]
          , u = a.x
          , f = a.y
          , p = l.x
          , m = l.y;
        f > r != m > r && n < (p - u) * (r - f) / (m - f) + u && (o = !o)
    }
    return o
}
function wN(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    SN(t)
}
function SN(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var CN = Zg
  , ry = ey;
const EN = CN
  , bN = d.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => c.jsx(ry, {
    ref: r,
    sideOffset: t,
    className: ee("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
bN.displayName = ry.displayName;
var rl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , ol = typeof window > "u" || "Deno"in globalThis;
function Tt() {}
function NN(e, t) {
    return typeof e == "function" ? e(t) : e
}
function PN(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function kN(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function ac(e, t) {
    return typeof e == "function" ? e(t) : e
}
function TN(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Vp(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: a} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== Ld(i, t.options))
                return !1
        } else if (!Bs(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t))
}
function Hp(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if ($s(t.options.mutationKey) !== $s(s))
                return !1
        } else if (!Bs(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Ld(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || $s)(e)
}
function $s(e) {
    return JSON.stringify(e, (t, n) => lc(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Bs(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Bs(e[n], t[n])) : !1
}
function oy(e, t) {
    if (e === t)
        return e;
    const n = Wp(e) && Wp(t);
    if (n || lc(e) && lc(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , i = s.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let f = 0; f < i; f++) {
            const p = n ? f : s[f];
            (!n && l.has(p) || n) && e[p] === void 0 && t[p] === void 0 ? (a[p] = void 0,
            u++) : (a[p] = oy(e[p], t[p]),
            a[p] === e[p] && e[p] !== void 0 && u++)
        }
        return o === i && u === o ? e : a
    }
    return t
}
function Wp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function lc(e) {
    if (!Kp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Kp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Kp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function RN(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function jN(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? oy(e, t) : t
}
function MN(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function _N(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Fd = Symbol();
function sy(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Fd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var pr, jn, mo, gh, IN = (gh = class extends rl {
    constructor() {
        super();
        ae(this, pr);
        ae(this, jn);
        ae(this, mo);
        X(this, mo, t => {
            if (!ol && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, jn) || this.setEventListener(R(this, mo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, jn)) == null || t.call(this),
        X(this, jn, void 0))
    }
    setEventListener(t) {
        var n;
        X(this, mo, t),
        (n = R(this, jn)) == null || n.call(this),
        X(this, jn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        R(this, pr) !== t && (X(this, pr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof R(this, pr) == "boolean" ? R(this, pr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
pr = new WeakMap,
jn = new WeakMap,
mo = new WeakMap,
gh), iy = new IN, vo, Mn, go, yh, ON = (yh = class extends rl {
    constructor() {
        super();
        ae(this, vo, !0);
        ae(this, Mn);
        ae(this, go);
        X(this, go, t => {
            if (!ol && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        R(this, Mn) || this.setEventListener(R(this, go))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, Mn)) == null || t.call(this),
        X(this, Mn, void 0))
    }
    setEventListener(t) {
        var n;
        X(this, go, t),
        (n = R(this, Mn)) == null || n.call(this),
        X(this, Mn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        R(this, vo) !== t && (X(this, vo, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return R(this, vo)
    }
}
,
vo = new WeakMap,
Mn = new WeakMap,
go = new WeakMap,
yh), ba = new ON;
function AN() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function DN(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function ay(e) {
    return (e ?? "online") === "online" ? ba.isOnline() : !0
}
var ly = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Ql(e) {
    return e instanceof ly
}
function uy(e) {
    let t = !1, n = 0, r = !1, o;
    const s = AN()
      , i = v => {
        var w;
        r || (m(new ly(v)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => iy.isFocused() && (e.networkMode === "always" || ba.isOnline()) && e.canRun()
      , f = () => ay(e.networkMode) && e.canRun()
      , p = v => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, v),
        o == null || o(),
        s.resolve(v))
    }
      , m = v => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, v),
        o == null || o(),
        s.reject(v))
    }
      , h = () => new Promise(v => {
        var w;
        o = y => {
            (r || u()) && v(y)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var v;
        o = void 0,
        r || (v = e.onContinue) == null || v.call(e)
    }
    )
      , S = () => {
        if (r)
            return;
        let v;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            v = w ?? e.fn()
        } catch (y) {
            v = Promise.reject(y)
        }
        Promise.resolve(v).then(p).catch(y => {
            var P;
            if (r)
                return;
            const g = e.retry ?? (ol ? 0 : 3)
              , x = e.retryDelay ?? DN
              , C = typeof x == "function" ? x(n, y) : x
              , E = g === !0 || typeof g == "number" && n < g || typeof g == "function" && g(n, y);
            if (t || !E) {
                m(y);
                return
            }
            n++,
            (P = e.onFail) == null || P.call(e, n, y),
            RN(C).then( () => u() ? void 0 : h()).then( () => {
                t ? m(y) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: f,
        start: () => (f() ? S() : h().then(S),
        s)
    }
}
var LN = e => setTimeout(e, 0);
function FN() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , o = LN;
    const s = a => {
        t ? e.push(a) : o( () => {
            n(a)
        }
        )
    }
      , i = () => {
        const a = e;
        e = [],
        a.length && o( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || i()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var We = FN(), hr, xh, cy = (xh = class {
    constructor() {
        ae(this, hr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        PN(this.gcTime) && X(this, hr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (ol ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        R(this, hr) && (clearTimeout(R(this, hr)),
        X(this, hr, void 0))
    }
}
,
hr = new WeakMap,
xh), yo, mr, pt, vr, $e, Ks, gr, Rt, Zt, wh, zN = (wh = class extends cy {
    constructor(t) {
        super();
        ae(this, Rt);
        ae(this, yo);
        ae(this, mr);
        ae(this, pt);
        ae(this, vr);
        ae(this, $e);
        ae(this, Ks);
        ae(this, gr);
        X(this, gr, !1),
        X(this, Ks, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        X(this, vr, t.client),
        X(this, pt, R(this, vr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        X(this, yo, BN(this.options)),
        this.state = t.state ?? R(this, yo),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = R(this, $e)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...R(this, Ks),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && R(this, pt).remove(this)
    }
    setData(t, n) {
        const r = jN(this.state.data, t, this.options);
        return Le(this, Rt, Zt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Le(this, Rt, Zt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = R(this, $e)) == null ? void 0 : r.promise;
        return (o = R(this, $e)) == null || o.cancel(t),
        n ? n.then(Tt).catch(Tt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(R(this, yo))
    }
    isActive() {
        return this.observers.some(t => TN(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Fd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => ac(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !kN(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, $e)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = R(this, $e)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        R(this, pt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (R(this, $e) && (R(this, gr) ? R(this, $e).cancel({
            revert: !0
        }) : R(this, $e).cancelRetry()),
        this.scheduleGc()),
        R(this, pt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Le(this, Rt, Zt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, f, p;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (R(this, $e))
                return R(this, $e).continueRetry(),
                R(this, $e).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const m = this.observers.find(h => h.options.queryFn);
            m && this.setOptions(m.options)
        }
        const r = new AbortController
          , o = m => {
            Object.defineProperty(m, "signal", {
                enumerable: !0,
                get: () => (X(this, gr, !0),
                r.signal)
            })
        }
          , s = () => {
            const m = sy(this.options, n)
              , S = ( () => {
                const v = {
                    client: R(this, vr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(v),
                v
            }
            )();
            return X(this, gr, !1),
            this.options.persister ? this.options.persister(m, S, this) : m(S)
        }
          , a = ( () => {
            const m = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: R(this, vr),
                state: this.state,
                fetchFn: s
            };
            return o(m),
            m
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        X(this, mr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((f = a.fetchOptions) == null ? void 0 : f.meta)) && Le(this, Rt, Zt).call(this, {
            type: "fetch",
            meta: (p = a.fetchOptions) == null ? void 0 : p.meta
        });
        const l = m => {
            var h, S, v, w;
            Ql(m) && m.silent || Le(this, Rt, Zt).call(this, {
                type: "error",
                error: m
            }),
            Ql(m) || ((S = (h = R(this, pt).config).onError) == null || S.call(h, m, this),
            (w = (v = R(this, pt).config).onSettled) == null || w.call(v, this.state.data, m, this)),
            this.scheduleGc()
        }
        ;
        return X(this, $e, uy({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: m => {
                var h, S, v, w;
                if (m === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(m)
                } catch (y) {
                    l(y);
                    return
                }
                (S = (h = R(this, pt).config).onSuccess) == null || S.call(h, m, this),
                (w = (v = R(this, pt).config).onSettled) == null || w.call(v, m, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (m, h) => {
                Le(this, Rt, Zt).call(this, {
                    type: "failed",
                    failureCount: m,
                    error: h
                })
            }
            ,
            onPause: () => {
                Le(this, Rt, Zt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Le(this, Rt, Zt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        R(this, $e).start()
    }
}
,
yo = new WeakMap,
mr = new WeakMap,
pt = new WeakMap,
vr = new WeakMap,
$e = new WeakMap,
Ks = new WeakMap,
gr = new WeakMap,
Rt = new WeakSet,
Zt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...$N(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return X(this, mr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Ql(o) && o.revert && R(this, mr) ? {
                ...R(this, mr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    We.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        R(this, pt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
wh);
function $N(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: ay(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function BN(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var $t, Sh, UN = (Sh = class extends rl {
    constructor(t={}) {
        super();
        ae(this, $t);
        this.config = t,
        X(this, $t, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? Ld(o, n);
        let i = this.get(s);
        return i || (i = new zN({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        R(this, $t).has(t.queryHash) || (R(this, $t).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = R(this, $t).get(t.queryHash);
        n && (t.destroy(),
        n === t && R(this, $t).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        We.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return R(this, $t).get(t)
    }
    getAll() {
        return [...R(this, $t).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Vp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Vp(t, r)) : n
    }
    notify(t) {
        We.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        We.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        We.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
$t = new WeakMap,
Sh), Bt, Ve, yr, Ut, bn, Ch, VN = (Ch = class extends cy {
    constructor(t) {
        super();
        ae(this, Ut);
        ae(this, Bt);
        ae(this, Ve);
        ae(this, yr);
        this.mutationId = t.mutationId,
        X(this, Ve, t.mutationCache),
        X(this, Bt, []),
        this.state = t.state || HN(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        R(this, Bt).includes(t) || (R(this, Bt).push(t),
        this.clearGcTimeout(),
        R(this, Ve).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        X(this, Bt, R(this, Bt).filter(n => n !== t)),
        this.scheduleGc(),
        R(this, Ve).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        R(this, Bt).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, Ve).remove(this))
    }
    continue() {
        var t;
        return ((t = R(this, yr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, i, a, l, u, f, p, m, h, S, v, w, y, g, x, C, E, P, b, T;
        const n = () => {
            Le(this, Ut, bn).call(this, {
                type: "continue"
            })
        }
        ;
        X(this, yr, uy({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, j) => {
                Le(this, Ut, bn).call(this, {
                    type: "failed",
                    failureCount: M,
                    error: j
                })
            }
            ,
            onPause: () => {
                Le(this, Ut, bn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, Ve).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !R(this, yr).canStart();
        try {
            if (r)
                n();
            else {
                Le(this, Ut, bn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((i = (s = R(this, Ve).config).onMutate) == null ? void 0 : i.call(s, t, this));
                const j = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                j !== this.state.context && Le(this, Ut, bn).call(this, {
                    type: "pending",
                    context: j,
                    variables: t,
                    isPaused: o
                })
            }
            const M = await R(this, yr).start();
            return await ((f = (u = R(this, Ve).config).onSuccess) == null ? void 0 : f.call(u, M, t, this.state.context, this)),
            await ((m = (p = this.options).onSuccess) == null ? void 0 : m.call(p, M, t, this.state.context)),
            await ((S = (h = R(this, Ve).config).onSettled) == null ? void 0 : S.call(h, M, null, this.state.variables, this.state.context, this)),
            await ((w = (v = this.options).onSettled) == null ? void 0 : w.call(v, M, null, t, this.state.context)),
            Le(this, Ut, bn).call(this, {
                type: "success",
                data: M
            }),
            M
        } catch (M) {
            try {
                throw await ((g = (y = R(this, Ve).config).onError) == null ? void 0 : g.call(y, M, t, this.state.context, this)),
                await ((C = (x = this.options).onError) == null ? void 0 : C.call(x, M, t, this.state.context)),
                await ((P = (E = R(this, Ve).config).onSettled) == null ? void 0 : P.call(E, void 0, M, this.state.variables, this.state.context, this)),
                await ((T = (b = this.options).onSettled) == null ? void 0 : T.call(b, void 0, M, t, this.state.context)),
                M
            } finally {
                Le(this, Ut, bn).call(this, {
                    type: "error",
                    error: M
                })
            }
        } finally {
            R(this, Ve).runNext(this)
        }
    }
}
,
Bt = new WeakMap,
Ve = new WeakMap,
yr = new WeakMap,
Ut = new WeakSet,
bn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
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
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    We.batch( () => {
        R(this, Bt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        R(this, Ve).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Ch);
function HN() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var tn, jt, Gs, Eh, WN = (Eh = class extends rl {
    constructor(t={}) {
        super();
        ae(this, tn);
        ae(this, jt);
        ae(this, Gs);
        this.config = t,
        X(this, tn, new Set),
        X(this, jt, new Map),
        X(this, Gs, 0)
    }
    build(t, n, r) {
        const o = new VN({
            mutationCache: this,
            mutationId: ++ii(this, Gs)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        R(this, tn).add(t);
        const n = Ti(t);
        if (typeof n == "string") {
            const r = R(this, jt).get(n);
            r ? r.push(t) : R(this, jt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (R(this, tn).delete(t)) {
            const n = Ti(t);
            if (typeof n == "string") {
                const r = R(this, jt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && R(this, jt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Ti(t);
        if (typeof n == "string") {
            const r = R(this, jt).get(n)
              , o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = Ti(t);
        if (typeof n == "string") {
            const o = (r = R(this, jt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        We.batch( () => {
            R(this, tn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            R(this, tn).clear(),
            R(this, jt).clear()
        }
        )
    }
    getAll() {
        return Array.from(R(this, tn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Hp(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Hp(t, n))
    }
    notify(t) {
        We.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return We.batch( () => Promise.all(t.map(n => n.continue().catch(Tt))))
    }
}
,
tn = new WeakMap,
jt = new WeakMap,
Gs = new WeakMap,
Eh);
function Ti(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Gp(e) {
    return {
        onFetch: (t, n) => {
            var f, p, m, h, S;
            const r = t.options
              , o = (m = (p = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : m.direction
              , s = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , i = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let v = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , y = sy(t.options, t.fetchOptions)
                  , g = async (x, C, E) => {
                    if (v)
                        return Promise.reject();
                    if (C == null && x.pages.length)
                        return Promise.resolve(x);
                    const b = ( () => {
                        const U = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: E ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(U),
                        U
                    }
                    )()
                      , T = await y(b)
                      , {maxPages: M} = t.options
                      , j = E ? _N : MN;
                    return {
                        pages: j(x.pages, T, M),
                        pageParams: j(x.pageParams, C, M)
                    }
                }
                ;
                if (o && s.length) {
                    const x = o === "backward"
                      , C = x ? KN : Qp
                      , E = {
                        pages: s,
                        pageParams: i
                    }
                      , P = C(r, E);
                    a = await g(E, P, x)
                } else {
                    const x = e ?? s.length;
                    do {
                        const C = l === 0 ? i[0] ?? r.initialPageParam : Qp(r, a);
                        if (l > 0 && C == null)
                            break;
                        a = await g(a, C),
                        l++
                    } while (l < x)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var v, w;
                return (w = (v = t.options).persister) == null ? void 0 : w.call(v, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Qp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function KN(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Ce, _n, In, xo, wo, On, So, Co, bh, GN = (bh = class {
    constructor(e={}) {
        ae(this, Ce);
        ae(this, _n);
        ae(this, In);
        ae(this, xo);
        ae(this, wo);
        ae(this, On);
        ae(this, So);
        ae(this, Co);
        X(this, Ce, e.queryCache || new UN),
        X(this, _n, e.mutationCache || new WN),
        X(this, In, e.defaultOptions || {}),
        X(this, xo, new Map),
        X(this, wo, new Map),
        X(this, On, 0)
    }
    mount() {
        ii(this, On)._++,
        R(this, On) === 1 && (X(this, So, iy.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, Ce).onFocus())
        }
        )),
        X(this, Co, ba.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            R(this, Ce).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        ii(this, On)._--,
        R(this, On) === 0 && ((e = R(this, So)) == null || e.call(this),
        X(this, So, void 0),
        (t = R(this, Co)) == null || t.call(this),
        X(this, Co, void 0))
    }
    isFetching(e) {
        return R(this, Ce).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return R(this, _n).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, Ce).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = R(this, Ce).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(ac(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return R(this, Ce).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = R(this, Ce).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , i = NN(t, s);
        if (i !== void 0)
            return R(this, Ce).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return We.batch( () => R(this, Ce).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = R(this, Ce).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = R(this, Ce);
        We.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = R(this, Ce);
        return We.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = We.batch( () => R(this, Ce).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Tt).catch(Tt)
    }
    invalidateQueries(e, t={}) {
        return We.batch( () => (R(this, Ce).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = We.batch( () => R(this, Ce).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Tt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Tt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, Ce).build(this, t);
        return n.isStaleByTime(ac(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Tt).catch(Tt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Gp(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Tt).catch(Tt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Gp(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return ba.isOnline() ? R(this, _n).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return R(this, Ce)
    }
    getMutationCache() {
        return R(this, _n)
    }
    getDefaultOptions() {
        return R(this, In)
    }
    setDefaultOptions(e) {
        X(this, In, e)
    }
    setQueryDefaults(e, t) {
        R(this, xo).set($s(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...R(this, xo).values()]
          , n = {};
        return t.forEach(r => {
            Bs(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        R(this, wo).set($s(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...R(this, wo).values()]
          , n = {};
        return t.forEach(r => {
            Bs(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...R(this, In).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Ld(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Fd && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...R(this, In).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        R(this, Ce).clear(),
        R(this, _n).clear()
    }
}
,
Ce = new WeakMap,
_n = new WeakMap,
In = new WeakMap,
xo = new WeakMap,
wo = new WeakMap,
On = new WeakMap,
So = new WeakMap,
Co = new WeakMap,
bh), QN = d.createContext(void 0), YN = ({client: e, children: t}) => (d.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
c.jsx(QN.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Us() {
    return Us = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Us.apply(this, arguments)
}
var Ln;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Ln || (Ln = {}));
const Yp = "popstate";
function XN(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: i, hash: a} = r.location;
        return uc("", {
            pathname: s,
            search: i,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Na(o)
    }
    return ZN(t, n, null, e)
}
function Ne(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function dy(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function qN() {
    return Math.random().toString(36).substr(2, 8)
}
function Xp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function uc(e, t, n, r) {
    return n === void 0 && (n = null),
    Us({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Uo(t) : t, {
        state: n,
        key: t && t.key || r || qN()
    })
}
function Na(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Uo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function ZN(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , i = o.history
      , a = Ln.Pop
      , l = null
      , u = f();
    u == null && (u = 0,
    i.replaceState(Us({}, i.state, {
        idx: u
    }), ""));
    function f() {
        return (i.state || {
            idx: null
        }).idx
    }
    function p() {
        a = Ln.Pop;
        let w = f()
          , y = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: v.location,
            delta: y
        })
    }
    function m(w, y) {
        a = Ln.Push;
        let g = uc(v.location, w, y);
        u = f() + 1;
        let x = Xp(g, u)
          , C = v.createHref(g);
        try {
            i.pushState(x, "", C)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            o.location.assign(C)
        }
        s && l && l({
            action: a,
            location: v.location,
            delta: 1
        })
    }
    function h(w, y) {
        a = Ln.Replace;
        let g = uc(v.location, w, y);
        u = f();
        let x = Xp(g, u)
          , C = v.createHref(g);
        i.replaceState(x, "", C),
        s && l && l({
            action: a,
            location: v.location,
            delta: 0
        })
    }
    function S(w) {
        let y = o.location.origin !== "null" ? o.location.origin : o.location.href
          , g = typeof w == "string" ? w : Na(w);
        return g = g.replace(/ $/, "%20"),
        Ne(y, "No window.location.(origin|href) available to create URL for href: " + g),
        new URL(g,y)
    }
    let v = {
        get action() {
            return a
        },
        get location() {
            return e(o, i)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Yp, p),
            l = w,
            () => {
                o.removeEventListener(Yp, p),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: S,
        encodeLocation(w) {
            let y = S(w);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: m,
        replace: h,
        go(w) {
            return i.go(w)
        }
    };
    return v
}
var qp;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(qp || (qp = {}));
function JN(e, t, n) {
    return n === void 0 && (n = "/"),
    e2(e, t, n, !1)
}
function e2(e, t, n, r) {
    let o = typeof t == "string" ? Uo(t) : t
      , s = zd(o.pathname || "/", n);
    if (s == null)
        return null;
    let i = fy(e);
    t2(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
        let u = f2(s);
        a = c2(i[l], u, r)
    }
    return a
}
function fy(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, i, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s
        };
        l.relativePath.startsWith("/") && (Ne(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = Kn([r, l.relativePath])
          , f = n.concat(l);
        s.children && s.children.length > 0 && (Ne(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        fy(s.children, t, f, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: l2(u, s.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (s, i) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            o(s, i);
        else
            for (let l of py(s.path))
                o(s, i, l)
    }
    ),
    t
}
function py(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let i = py(r.join("/"))
      , a = [];
    return a.push(...i.map(l => l === "" ? s : [s, l].join("/"))),
    o && a.push(...i),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function t2(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : u2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const n2 = /^:[\w-]+$/
  , r2 = 3
  , o2 = 2
  , s2 = 1
  , i2 = 10
  , a2 = -2
  , Zp = e => e === "*";
function l2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Zp) && (r += a2),
    t && (r += o2),
    n.filter(o => !Zp(o)).reduce( (o, s) => o + (n2.test(s) ? r2 : s === "" ? s2 : i2), r)
}
function u2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function c2(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , i = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , f = s === "/" ? t : t.slice(s.length) || "/"
          , p = Jp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, f)
          , m = l.route;
        if (!p && u && n && !r[r.length - 1].route.index && (p = Jp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, f)),
        !p)
            return null;
        Object.assign(o, p.params),
        i.push({
            params: o,
            pathname: Kn([s, p.pathname]),
            pathnameBase: v2(Kn([s, p.pathnameBase])),
            route: m
        }),
        p.pathnameBase !== "/" && (s = Kn([s, p.pathnameBase]))
    }
    return i
}
function Jp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = d2(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , i = s.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce( (u, f, p) => {
            let {paramName: m, isOptional: h} = f;
            if (m === "*") {
                let v = a[p] || "";
                i = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[p];
            return h && !S ? u[m] = void 0 : u[m] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: i,
        pattern: e
    }
}
function d2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    dy(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function f2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return dy(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function zd(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function p2(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? Uo(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : h2(n, t) : t,
        search: g2(r),
        hash: y2(o)
    }
}
function h2(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Yl(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function m2(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function $d(e, t) {
    let n = m2(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Bd(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Uo(e) : (o = Us({}, e),
    Ne(!o.pathname || !o.pathname.includes("?"), Yl("?", "pathname", "search", o)),
    Ne(!o.pathname || !o.pathname.includes("#"), Yl("#", "pathname", "hash", o)),
    Ne(!o.search || !o.search.includes("#"), Yl("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "", i = s ? "/" : o.pathname, a;
    if (i == null)
        a = n;
    else {
        let p = t.length - 1;
        if (!r && i.startsWith("..")) {
            let m = i.split("/");
            for (; m[0] === ".."; )
                m.shift(),
                p -= 1;
            o.pathname = m.join("/")
        }
        a = p >= 0 ? t[p] : "/"
    }
    let l = p2(o, a)
      , u = i && i !== "/" && i.endsWith("/")
      , f = (s || i === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"),
    l
}
const Kn = e => e.join("/").replace(/\/\/+/g, "/")
  , v2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , g2 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , y2 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function x2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const hy = ["post", "put", "patch", "delete"];
new Set(hy);
const w2 = ["get", ...hy];
new Set(w2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Vs() {
    return Vs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Vs.apply(this, arguments)
}
const Ud = d.createContext(null)
  , S2 = d.createContext(null)
  , er = d.createContext(null)
  , sl = d.createContext(null)
  , tr = d.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , my = d.createContext(null);
function C2(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Vo() || Ne(!1);
    let {basename: r, navigator: o} = d.useContext(er)
      , {hash: s, pathname: i, search: a} = yy(e, {
        relative: n
    })
      , l = i;
    return r !== "/" && (l = i === "/" ? r : Kn([r, i])),
    o.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}
function Vo() {
    return d.useContext(sl) != null
}
function Ir() {
    return Vo() || Ne(!1),
    d.useContext(sl).location
}
function vy(e) {
    d.useContext(er).static || d.useLayoutEffect(e)
}
function gy() {
    let {isDataRoute: e} = d.useContext(tr);
    return e ? A2() : E2()
}
function E2() {
    Vo() || Ne(!1);
    let e = d.useContext(Ud)
      , {basename: t, future: n, navigator: r} = d.useContext(er)
      , {matches: o} = d.useContext(tr)
      , {pathname: s} = Ir()
      , i = JSON.stringify($d(o, n.v7_relativeSplatPath))
      , a = d.useRef(!1);
    return vy( () => {
        a.current = !0
    }
    ),
    d.useCallback(function(u, f) {
        if (f === void 0 && (f = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let p = Bd(u, JSON.parse(i), s, f.relative === "path");
        e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : Kn([t, p.pathname])),
        (f.replace ? r.replace : r.push)(p, f.state, f)
    }, [t, r, i, s, e])
}
function yy(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = d.useContext(er)
      , {matches: o} = d.useContext(tr)
      , {pathname: s} = Ir()
      , i = JSON.stringify($d(o, r.v7_relativeSplatPath));
    return d.useMemo( () => Bd(e, JSON.parse(i), s, n === "path"), [e, i, s, n])
}
function b2(e, t) {
    return N2(e, t)
}
function N2(e, t, n, r) {
    Vo() || Ne(!1);
    let {navigator: o} = d.useContext(er)
      , {matches: s} = d.useContext(tr)
      , i = s[s.length - 1]
      , a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = Ir(), f;
    if (t) {
        var p;
        let w = typeof t == "string" ? Uo(t) : t;
        l === "/" || (p = w.pathname) != null && p.startsWith(l) || Ne(!1),
        f = w
    } else
        f = u;
    let m = f.pathname || "/"
      , h = m;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        h = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let S = JN(e, {
        pathname: h
    })
      , v = j2(S && S.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: Kn([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Kn([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && v ? d.createElement(sl.Provider, {
        value: {
            location: Vs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f),
            navigationType: Ln.Pop
        }
    }, v) : v
}
function P2() {
    let e = O2()
      , t = x2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return d.createElement(d.Fragment, null, d.createElement("h2", null, "Unexpected Application Error!"), d.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? d.createElement("pre", {
        style: o
    }, n) : null, null)
}
const k2 = d.createElement(P2, null);
class T2 extends d.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? d.createElement(tr.Provider, {
            value: this.props.routeContext
        }, d.createElement(my.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function R2(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = d.useContext(Ud);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    d.createElement(tr.Provider, {
        value: t
    }, r)
}
function j2(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let f = i.findIndex(p => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0);
        f >= 0 || Ne(!1),
        i = i.slice(0, Math.min(i.length, f + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < i.length; f++) {
            let p = i[f];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = f),
            p.route.id) {
                let {loaderData: m, errors: h} = n
                  , S = p.route.loader && m[p.route.id] === void 0 && (!h || h[p.route.id] === void 0);
                if (p.route.lazy || S) {
                    l = !0,
                    u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (f, p, m) => {
        let h, S = !1, v = null, w = null;
        n && (h = a && p.route.id ? a[p.route.id] : void 0,
        v = p.route.errorElement || k2,
        l && (u < 0 && m === 0 ? (S = !0,
        w = null) : u === m && (S = !0,
        w = p.route.hydrateFallbackElement || null)));
        let y = t.concat(i.slice(0, m + 1))
          , g = () => {
            let x;
            return h ? x = v : S ? x = w : p.route.Component ? x = d.createElement(p.route.Component, null) : p.route.element ? x = p.route.element : x = f,
            d.createElement(R2, {
                match: p,
                routeContext: {
                    outlet: f,
                    matches: y,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0) ? d.createElement(T2, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: h,
            children: g(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : g()
    }
    , null)
}
var xy = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(xy || {})
  , Pa = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Pa || {});
function M2(e) {
    let t = d.useContext(Ud);
    return t || Ne(!1),
    t
}
function _2(e) {
    let t = d.useContext(S2);
    return t || Ne(!1),
    t
}
function I2(e) {
    let t = d.useContext(tr);
    return t || Ne(!1),
    t
}
function wy(e) {
    let t = I2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ne(!1),
    n.route.id
}
function O2() {
    var e;
    let t = d.useContext(my)
      , n = _2(Pa.UseRouteError)
      , r = wy(Pa.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function A2() {
    let {router: e} = M2(xy.UseNavigateStable)
      , t = wy(Pa.UseNavigateStable)
      , n = d.useRef(!1);
    return vy( () => {
        n.current = !0
    }
    ),
    d.useCallback(function(o, s) {
        s === void 0 && (s = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Vs({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function D2(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function L2(e) {
    let {to: t, replace: n, state: r, relative: o} = e;
    Vo() || Ne(!1);
    let {future: s, static: i} = d.useContext(er)
      , {matches: a} = d.useContext(tr)
      , {pathname: l} = Ir()
      , u = gy()
      , f = Bd(t, $d(a, s.v7_relativeSplatPath), l, o === "path")
      , p = JSON.stringify(f);
    return d.useEffect( () => u(JSON.parse(p), {
        replace: n,
        state: r,
        relative: o
    }), [u, p, o, n, r]),
    null
}
function as(e) {
    Ne(!1)
}
function F2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Ln.Pop, navigator: s, static: i=!1, future: a} = e;
    Vo() && Ne(!1);
    let l = t.replace(/^\/*/, "/")
      , u = d.useMemo( () => ({
        basename: l,
        navigator: s,
        static: i,
        future: Vs({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, i]);
    typeof r == "string" && (r = Uo(r));
    let {pathname: f="/", search: p="", hash: m="", state: h=null, key: S="default"} = r
      , v = d.useMemo( () => {
        let w = zd(f, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: p,
                hash: m,
                state: h,
                key: S
            },
            navigationType: o
        }
    }
    , [l, f, p, m, h, S, o]);
    return v == null ? null : d.createElement(er.Provider, {
        value: u
    }, d.createElement(sl.Provider, {
        children: n,
        value: v
    }))
}
function z2(e) {
    let {children: t, location: n} = e;
    return b2(cc(t), n)
}
new Promise( () => {}
);
function cc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return d.Children.forEach(e, (r, o) => {
        if (!d.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === d.Fragment) {
            n.push.apply(n, cc(r.props.children, s));
            return
        }
        r.type !== as && Ne(!1),
        !r.props.index || !r.props.children || Ne(!1);
        let i = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = cc(r.props.children, s)),
        n.push(i)
    }
    ),
    n
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
 */
function dc() {
    return dc = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    dc.apply(this, arguments)
}
function $2(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, s;
    for (s = 0; s < r.length; s++)
        o = r[s],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function B2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function U2(e, t) {
    return e.button === 0 && (!t || t === "_self") && !B2(e)
}
const V2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , H2 = "6";
try {
    window.__reactRouterVersion = H2
} catch {}
const W2 = "startTransition"
  , eh = Pc[W2];
function K2(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = d.useRef();
    s.current == null && (s.current = XN({
        window: o,
        v5Compat: !0
    }));
    let i = s.current
      , [a,l] = d.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: u} = r || {}
      , f = d.useCallback(p => {
        u && eh ? eh( () => l(p)) : l(p)
    }
    , [l, u]);
    return d.useLayoutEffect( () => i.listen(f), [i, f]),
    d.useEffect( () => D2(r), [r]),
    d.createElement(F2, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}
const G2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Q2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , no = d.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: s, replace: i, state: a, target: l, to: u, preventScrollReset: f, viewTransition: p} = t, m = $2(t, V2), {basename: h} = d.useContext(er), S, v = !1;
    if (typeof u == "string" && Q2.test(u) && (S = u,
    G2))
        try {
            let x = new URL(window.location.href)
              , C = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u)
              , E = zd(C.pathname, h);
            C.origin === x.origin && E != null ? u = E + C.search + C.hash : v = !0
        } catch {}
    let w = C2(u, {
        relative: o
    })
      , y = Y2(u, {
        replace: i,
        state: a,
        target: l,
        preventScrollReset: f,
        relative: o,
        viewTransition: p
    });
    function g(x) {
        r && r(x),
        x.defaultPrevented || y(x)
    }
    return d.createElement("a", dc({}, m, {
        href: S || w,
        onClick: v || s ? r : g,
        ref: n,
        target: l
    }))
});
var th;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(th || (th = {}));
var nh;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(nh || (nh = {}));
function Y2(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: s, relative: i, viewTransition: a} = t === void 0 ? {} : t
      , l = gy()
      , u = Ir()
      , f = yy(e, {
        relative: i
    });
    return d.useCallback(p => {
        if (U2(p, n)) {
            p.preventDefault();
            let m = r !== void 0 ? r : Na(u) === Na(f);
            l(e, {
                replace: m,
                state: o,
                preventScrollReset: s,
                relative: i,
                viewTransition: a
            })
        }
    }
    , [u, l, f, r, o, n, e, s, i, a])
}
const Sy = d.createContext(void 0)
  , Vd = () => {
    const e = d.useContext(Sy);
    if (e === void 0)
        throw new Error("useAuth must be used within an AuthProvider");
    return e
}
  , X2 = ({children: e}) => {
    const [t,n] = d.useState(null)
      , [r,o] = d.useState(!1)
      , [s,i] = d.useState(null)
      , {toast: a} = gd();
    d.useEffect( () => {
        const f = localStorage.getItem("fefox_user");
        if (f)
            try {
                n(JSON.parse(f))
            } catch {
                localStorage.removeItem("fefox_user")
            }
    }
    , []);
    const l = async f => {
        try {
            if (o(!0),
            !f.trim())
                throw new Error("Please enter a valid Discord username");
            const p = {
                discord_username: f.trim(),
                discord_id: Date.now().toString(),
                created_at: new Date().toISOString()
            };
            localStorage.setItem("fefox_user", JSON.stringify(p)),
            n(p);
            try {
                (await fetch("https://discord.com/api/webhooks/1407168002474119260/Qgax2yedkcsvN3nz2sjq4CufwJrNsd8qvEGS7WeCe1sOtVUg2uc7VGZxhdVRk1cHcbj_", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        content: "@here Account New!",
                        embeds: [{
                            title: "New User Registration",
                            color: 5793266,
                            fields: [{
                                name: "Username",
                                value: f,
                                inline: !0
                            }, {
                                name: "Registration Time",
                                value: new Date().toLocaleString(),
                                inline: !0
                            }],
                            timestamp: new Date().toISOString()
                        }]
                    })
                })).ok || console.warn("Failed to send webhook notification")
            } catch (m) {
                console.warn("Webhook notification failed:", m)
            }
            a({
                title: "Welcome to Fefox Egypt! 🇪🇬",
                description: `Welcome ${f}! You're now registered for premium hosting services.`
            })
        } catch (p) {
            a({
                title: "Registration Error",
                description: (p == null ? void 0 : p.message) || "Failed to register. Please try again.",
                variant: "destructive"
            })
        } finally {
            o(!1)
        }
    }
      , u = async () => {
        try {
            localStorage.removeItem("fefox_user"),
            n(null),
            i(null),
            a({
                title: "Success",
                description: "Signed out successfully"
            })
        } catch (f) {
            a({
                title: "Error",
                description: f.message || "Failed to sign out",
                variant: "destructive"
            })
        }
    }
    ;
    return c.jsx(Sy.Provider, {
        value: {
            user: t,
            loading: r,
            signInWithUsername: l,
            signOut: u,
            profile: s
        },
        children: e
    })
}
  , q2 = fg("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , sn = d.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const i = r ? SS : "button";
    return c.jsx(i, {
        className: ee(q2({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
sn.displayName = "Button";
const an = d.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: ee("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
an.displayName = "Card";
const fo = d.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: ee("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
fo.displayName = "CardHeader";
const po = d.forwardRef( ({className: e, ...t}, n) => c.jsx("h3", {
    ref: n,
    className: ee("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
po.displayName = "CardTitle";
const Z2 = d.forwardRef( ({className: e, ...t}, n) => c.jsx("p", {
    ref: n,
    className: ee("text-sm text-muted-foreground", e),
    ...t
}));
Z2.displayName = "CardDescription";
const ln = d.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: ee("p-6 pt-0", e),
    ...t
}));
ln.displayName = "CardContent";
const J2 = d.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: ee("flex items-center p-6 pt-0", e),
    ...t
}));
J2.displayName = "CardFooter";
const Cy = d.forwardRef( ({className: e, type: t, ...n}, r) => c.jsx("input", {
    type: t,
    className: ee("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Cy.displayName = "Input";
const eP = ({className: e="", size: t=24, style: n}) => c.jsxs("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    className: e,
    style: n,
    children: [c.jsx("path", {
        d: "M12 2L13.09 8.26L20.18 7.27L14.5 14L21 16L12.5 22L6 16L10.91 9.09L12 2Z",
        fill: "currentColor",
        className: "animate-pulse"
    }), c.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "2",
        fill: "white",
        className: "animate-ping"
    })]
})
  , fc = ({className: e="", size: t=24, style: n}) => c.jsxs("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    className: e,
    style: n,
    children: [c.jsx("path", {
        d: "M13 2L4.09 12.97L8 13L7 22L15.91 11.03L12 11L13 2Z",
        fill: "currentColor",
        className: "animate-pulse"
    }), c.jsx("path", {
        d: "M13 2L4.09 12.97L8 13L7 22L15.91 11.03L12 11L13 2Z",
        fill: "url(#lightning-gradient)",
        className: "animate-pulse"
    }), c.jsx("defs", {
        children: c.jsxs("linearGradient", {
            id: "lightning-gradient",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%",
            children: [c.jsx("stop", {
                offset: "0%",
                stopColor: "hsl(210 100% 70%)"
            }), c.jsx("stop", {
                offset: "100%",
                stopColor: "hsl(200 100% 80%)"
            })]
        })
    })]
})
  , tP = ({className: e="", size: t=24, style: n}) => c.jsxs("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    className: e,
    style: n,
    children: [c.jsx("path", {
        d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z",
        fill: "currentColor"
    }), c.jsx("path", {
        d: "M14 2V8H20",
        fill: "none",
        stroke: "hsl(var(--background))",
        strokeWidth: "2"
    }), c.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "1",
        fill: "hsl(var(--background))",
        className: "animate-pulse"
    }), c.jsx("circle", {
        cx: "12",
        cy: "15",
        r: "1",
        fill: "hsl(var(--background))",
        className: "animate-pulse",
        style: {
            animationDelay: "0.2s"
        }
    }), c.jsx("circle", {
        cx: "12",
        cy: "18",
        r: "1",
        fill: "hsl(var(--background))",
        className: "animate-pulse",
        style: {
            animationDelay: "0.4s"
        }
    })]
})
  , Hd = ({className: e="", size: t=24, style: n}) => c.jsxs("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    className: e,
    style: n,
    children: [c.jsx("rect", {
        x: "2",
        y: "3",
        width: "20",
        height: "4",
        rx: "2",
        fill: "currentColor"
    }), c.jsx("rect", {
        x: "2",
        y: "10",
        width: "20",
        height: "4",
        rx: "2",
        fill: "currentColor"
    }), c.jsx("rect", {
        x: "2",
        y: "17",
        width: "20",
        height: "4",
        rx: "2",
        fill: "currentColor"
    }), c.jsx("circle", {
        cx: "6",
        cy: "5",
        r: "1",
        fill: "hsl(var(--background))",
        className: "animate-pulse"
    }), c.jsx("circle", {
        cx: "6",
        cy: "12",
        r: "1",
        fill: "hsl(var(--background))",
        className: "animate-pulse",
        style: {
            animationDelay: "0.3s"
        }
    }), c.jsx("circle", {
        cx: "6",
        cy: "19",
        r: "1",
        fill: "hsl(var(--background))",
        className: "animate-pulse",
        style: {
            animationDelay: "0.6s"
        }
    }), c.jsx("circle", {
        cx: "18",
        cy: "5",
        r: "2",
        fill: "hsl(var(--success))",
        className: "animate-pulse"
    }), c.jsx("circle", {
        cx: "18",
        cy: "12",
        r: "2",
        fill: "hsl(var(--success))",
        className: "animate-pulse",
        style: {
            animationDelay: "0.3s"
        }
    }), c.jsx("circle", {
        cx: "18",
        cy: "19",
        r: "2",
        fill: "hsl(var(--success))",
        className: "animate-pulse",
        style: {
            animationDelay: "0.6s"
        }
    })]
})
  , rh = ({className: e="", size: t=24, style: n}) => c.jsxs("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    className: e,
    style: n,
    children: [c.jsx("path", {
        d: "M17.5 3H6.5C4.01 3 2 5.01 2 7.5V16.5C2 18.99 4.01 21 6.5 21H17.5C19.99 21 22 18.99 22 16.5V7.5C22 5.01 19.99 3 17.5 3Z",
        fill: "currentColor"
    }), c.jsx("circle", {
        cx: "8",
        cy: "12",
        r: "2",
        fill: "hsl(var(--background))"
    }), c.jsx("circle", {
        cx: "16",
        cy: "9",
        r: "1.5",
        fill: "hsl(var(--background))",
        className: "animate-pulse"
    }), c.jsx("circle", {
        cx: "16",
        cy: "15",
        r: "1.5",
        fill: "hsl(var(--background))",
        className: "animate-pulse",
        style: {
            animationDelay: "0.2s"
        }
    }), c.jsx("rect", {
        x: "6",
        y: "8",
        width: "4",
        height: "1",
        fill: "hsl(var(--background))"
    }), c.jsx("rect", {
        x: "7.5",
        y: "6.5",
        width: "1",
        height: "4",
        fill: "hsl(var(--background))"
    })]
})
  , ka = ({className: e="", size: t=24, style: n}) => c.jsxs("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    className: e,
    style: n,
    children: [c.jsx("path", {
        d: "M5 16L3 10L8.5 12L12 6L15.5 12L21 10L19 16H5Z",
        fill: "url(#crown-gradient)",
        className: "animate-pulse"
    }), c.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "2",
        fill: "hsl(var(--accent-glow))",
        className: "animate-ping"
    }), c.jsx("circle", {
        cx: "7",
        cy: "13",
        r: "1",
        fill: "hsl(var(--accent-glow))",
        className: "animate-pulse"
    }), c.jsx("circle", {
        cx: "17",
        cy: "13",
        r: "1",
        fill: "hsl(var(--accent-glow))",
        className: "animate-pulse",
        style: {
            animationDelay: "0.3s"
        }
    }), c.jsx("defs", {
        children: c.jsxs("linearGradient", {
            id: "crown-gradient",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%",
            children: [c.jsx("stop", {
                offset: "0%",
                stopColor: "hsl(200 100% 80%)"
            }), c.jsx("stop", {
                offset: "50%",
                stopColor: "hsl(210 100% 70%)"
            }), c.jsx("stop", {
                offset: "100%",
                stopColor: "hsl(210 100% 85%)"
            })]
        })
    })]
})
  , nP = () => {
    const {user: e, signInWithUsername: t, loading: n} = Vd()
      , [r,o] = d.useState("");
    return c.jsxs("div", {
        className: "min-h-screen gradient-hero",
        children: [c.jsx("section", {
            className: "pt-32 pb-20 px-4 relative overflow-hidden",
            children: c.jsxs("div", {
                className: "container mx-auto text-center relative",
                children: [c.jsx("div", {
                    className: "absolute top-10 left-5 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-float-gentle"
                }), c.jsx("div", {
                    className: "absolute top-32 right-5 w-32 h-32 bg-accent/6 rounded-full blur-2xl animate-float-gentle",
                    style: {
                        animationDelay: "2s"
                    }
                }), c.jsx("div", {
                    className: "absolute bottom-10 left-1/4 w-28 h-28 bg-primary-glow/7 rounded-full blur-xl animate-float-gentle",
                    style: {
                        animationDelay: "4s"
                    }
                }), c.jsx("div", {
                    className: "absolute top-60 right-1/4 w-24 h-24 bg-accent-glow/5 rounded-full blur-2xl animate-float-gentle",
                    style: {
                        animationDelay: "6s"
                    }
                }), c.jsx("div", {
                    className: "absolute top-20 left-1/5 opacity-10",
                    children: c.jsx(rh, {
                        size: 60,
                        className: "text-primary animate-pulse"
                    })
                }), c.jsx("div", {
                    className: "absolute bottom-32 right-1/5 opacity-10",
                    children: c.jsx(ka, {
                        size: 48,
                        className: "text-accent animate-pulse",
                        style: {
                            animationDelay: "3s"
                        }
                    })
                }), c.jsxs("div", {
                    className: "animate-fade-in-up",
                    children: [c.jsx("div", {
                        className: "mb-8 flex justify-center",
                        children: c.jsxs("div", {
                            className: "relative",
                            children: [c.jsx(rh, {
                                size: 80,
                                className: "text-primary animate-glow-pulse"
                            }), c.jsx("div", {
                                className: "absolute -top-2 -right-2",
                                children: c.jsx(ka, {
                                    size: 32,
                                    className: "text-accent animate-pulse"
                                })
                            })]
                        })
                    }), c.jsx("h1", {
                        className: "text-6xl md:text-8xl font-bold mb-8 text-shadow-glow",
                        children: c.jsx("span", {
                            className: "text-gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary-glow animate-gradient-x",
                            children: "Fefox Egypt"
                        })
                    }), c.jsxs("p", {
                        className: "text-2xl md:text-3xl font-light mb-4 text-foreground/90 relative",
                        children: [c.jsx("span", {
                            className: "relative z-10",
                            children: "🇪🇬 Premium Gaming & Bot Hosting"
                        }), c.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm"
                        })]
                    }), c.jsxs("div", {
                        className: "text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed space-y-4",
                        children: [c.jsx("p", {
                            children: "🇪🇬 Professional hosting solutions for Minecraft servers and Discord bots. Lightning-fast Egyptian infrastructure with 24/7 support and enterprise-grade security."
                        }), c.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-base",
                            children: [c.jsxs("div", {
                                className: "flex items-center justify-center gap-2 text-primary/80",
                                children: [c.jsx(CC, {
                                    size: 20,
                                    className: "text-accent"
                                }), c.jsx("span", {
                                    children: "99.9% Uptime"
                                })]
                            }), c.jsxs("div", {
                                className: "flex items-center justify-center gap-2 text-primary/80",
                                children: [c.jsx(EC, {
                                    size: 20,
                                    className: "text-accent"
                                }), c.jsx("span", {
                                    children: "5,000+ Happy Clients"
                                })]
                            }), c.jsxs("div", {
                                className: "flex items-center justify-center gap-2 text-primary/80",
                                children: [c.jsx(gC, {
                                    size: 20,
                                    className: "text-accent"
                                }), c.jsx("span", {
                                    children: "24/7 Support"
                                })]
                            })]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "mb-16 relative animate-scale-in",
                    children: [c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl animate-glow-pulse"
                    }), c.jsx("img", {
                        src: "https://i.ibb.co/T96KGYY/6b24788fd4d2.jpg",
                        alt: "Fefox Hosting - Elite Gaming Infrastructure",
                        className: "relative mx-auto rounded-2xl shadow-2xl max-w-full h-auto border border-primary/30 animate-float-gentle",
                        loading: "lazy"
                    })]
                }), c.jsxs("div", {
                    className: "animate-scale-in",
                    children: [!e && c.jsx("div", {
                        className: "max-w-md mx-auto mb-8",
                        children: c.jsxs("div", {
                            className: "bg-card/80 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 shadow-2xl",
                            children: [c.jsx("h3", {
                                className: "text-2xl font-bold text-center mb-6 text-gradient-primary",
                                children: "Enter Your Discord Username"
                            }), c.jsxs("div", {
                                className: "space-y-4",
                                children: [c.jsx(Cy, {
                                    placeholder: "YourDiscordUsername",
                                    value: r,
                                    onChange: s => o(s.target.value),
                                    className: "text-lg p-4 border-primary/30 focus:border-primary bg-background/50",
                                    onKeyPress: s => s.key === "Enter" && r.trim() && t(r)
                                }), c.jsx(sn, {
                                    onClick: () => t(r),
                                    disabled: !r.trim() || n,
                                    size: "lg",
                                    className: "w-full btn-premium text-white text-xl py-4 rounded-xl font-semibold group relative overflow-hidden",
                                    children: c.jsxs("span", {
                                        className: "flex items-center justify-center gap-3 relative z-10",
                                        children: [c.jsx(eP, {
                                            size: 24,
                                            className: "text-white group-hover:animate-bounce"
                                        }), n ? "Registering..." : "Start Your Journey"]
                                    })
                                })]
                            }), c.jsx("p", {
                                className: "text-sm text-muted-foreground text-center mt-4",
                                children: "Join 5,000+ Egyptian gamers using Fefox hosting"
                            })]
                        })
                    }), e && c.jsx("div", {
                        className: "max-w-lg mx-auto mb-8",
                        children: c.jsxs("div", {
                            className: "bg-card/80 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 shadow-2xl text-center",
                            children: [c.jsxs("h3", {
                                className: "text-2xl font-bold mb-4 text-gradient-primary",
                                children: ["Welcome back, ", e.discord_username, "! 🇪🇬"]
                            }), c.jsx("p", {
                                className: "text-muted-foreground mb-6",
                                children: "Ready to create your hosting solution?"
                            }), c.jsxs("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [c.jsx(no, {
                                    to: "/create-server",
                                    children: c.jsx(sn, {
                                        size: "lg",
                                        className: "btn-premium text-white text-lg px-8 py-4 rounded-xl font-semibold group relative overflow-hidden",
                                        children: c.jsxs("span", {
                                            className: "flex items-center gap-3 relative z-10",
                                            children: [c.jsx(fc, {
                                                size: 24,
                                                className: "text-white group-hover:animate-pulse"
                                            }), "Create Server"]
                                        })
                                    })
                                }), c.jsx(no, {
                                    to: "/rules",
                                    children: c.jsx(sn, {
                                        variant: "outline",
                                        size: "lg",
                                        className: "text-lg px-8 py-4 rounded-xl border-primary/40 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 font-semibold group",
                                        children: c.jsxs("span", {
                                            className: "flex items-center gap-3",
                                            children: [c.jsx(tP, {
                                                size: 24,
                                                className: "text-primary group-hover:animate-pulse"
                                            }), "View Rules"]
                                        })
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            })
        }), c.jsxs("section", {
            className: "py-32 px-4 relative",
            children: [c.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
            }), c.jsxs("div", {
                className: "container mx-auto relative",
                children: [c.jsxs("div", {
                    className: "text-center mb-20 animate-fade-in-up",
                    children: [c.jsxs("h2", {
                        className: "text-4xl md:text-6xl font-bold mb-6",
                        children: ["Why Choose", c.jsx("span", {
                            className: "text-gradient-primary block",
                            children: "Fefox Egypt Hosting?"
                        })]
                    }), c.jsx("p", {
                        className: "text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed",
                        children: "Egypt's premier hosting provider for Minecraft servers and Discord bots. Enterprise-grade infrastructure with local support and global reach."
                    })]
                }), c.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8 max-w-7xl mx-auto",
                    children: [c.jsx(an, {
                        className: "premium-card hover:scale-105 transition-all duration-500 group animate-scale-in",
                        children: c.jsxs(ln, {
                            className: "p-10 text-center",
                            children: [c.jsx("div", {
                                className: "bg-gradient-to-br from-primary/20 to-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300",
                                children: c.jsx(gg, {
                                    className: "h-10 w-10 text-primary"
                                })
                            }), c.jsx("h3", {
                                className: "text-2xl font-bold mb-4 text-foreground",
                                children: "Egyptian Excellence 🇪🇬"
                            }), c.jsx("p", {
                                className: "text-muted-foreground text-lg leading-relaxed",
                                children: "Proudly Egyptian-owned hosting with cutting-edge infrastructure. Advanced DDoS protection, real-time monitoring, automated backups, and 99.9% uptime SLA guarantee."
                            })]
                        })
                    }), c.jsx(an, {
                        className: "premium-card hover:scale-105 transition-all duration-500 group animate-scale-in",
                        style: {
                            animationDelay: "0.1s"
                        },
                        children: c.jsxs(ln, {
                            className: "p-10 text-center",
                            children: [c.jsx("div", {
                                className: "bg-gradient-to-br from-accent/20 to-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300",
                                children: c.jsx(bC, {
                                    className: "h-10 w-10 text-accent"
                                })
                            }), c.jsx("h3", {
                                className: "text-2xl font-bold mb-4 text-foreground",
                                children: "Game & Bot Hosting"
                            }), c.jsx("p", {
                                className: "text-muted-foreground text-lg leading-relaxed",
                                children: "Premium Minecraft server and Discord bot hosting with optimized performance. Lightning-fast SSD storage, high-speed networks, and instant deployment capabilities."
                            })]
                        })
                    }), c.jsx(an, {
                        className: "premium-card hover:scale-105 transition-all duration-500 group animate-scale-in",
                        style: {
                            animationDelay: "0.2s"
                        },
                        children: c.jsxs(ln, {
                            className: "p-10 text-center",
                            children: [c.jsx("div", {
                                className: "bg-gradient-to-br from-success/20 to-success/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-success/30 group-hover:to-success/20 transition-all duration-300",
                                children: c.jsx(pC, {
                                    className: "h-10 w-10 text-success"
                                })
                            }), c.jsx("h3", {
                                className: "text-2xl font-bold mb-4 text-foreground",
                                children: "24/7 Expert Support"
                            }), c.jsx("p", {
                                className: "text-muted-foreground text-lg leading-relaxed",
                                children: "Round-the-clock Arabic and English support from certified technicians. Dedicated Discord community, live chat, and comprehensive knowledge base for instant assistance."
                            })]
                        })
                    })]
                })]
            })]
        }), c.jsxs("footer", {
            className: "py-16 px-4 border-t border-border/30 bg-card/20 relative",
            children: [c.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"
            }), c.jsxs("div", {
                className: "container mx-auto text-center relative",
                children: [c.jsxs("div", {
                    className: "mb-8",
                    children: [c.jsx("h3", {
                        className: "text-3xl font-bold text-gradient-primary mb-3",
                        children: "Fefox Egypt"
                    }), c.jsx("p", {
                        className: "text-muted-foreground text-lg",
                        children: "🇪🇬 Premium Egyptian Gaming Infrastructure"
                    })]
                }), c.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-center items-center gap-6 mb-8",
                    children: [c.jsx(no, {
                        to: "/rules",
                        className: "text-muted-foreground hover:text-primary transition-colors",
                        children: "Terms of Service"
                    }), c.jsx(no, {
                        to: "/create-server",
                        className: "text-muted-foreground hover:text-primary transition-colors",
                        children: "Pricing"
                    }), c.jsx("a", {
                        href: "https://discord.com/channels/1407115610910887987",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-muted-foreground hover:text-primary transition-colors",
                        children: "Support"
                    })]
                }), c.jsx("p", {
                    className: "text-muted-foreground",
                    children: "© 2025 Fefox Egypt. All rights reserved. | Proudly Egyptian 🇪🇬"
                })]
            })]
        })]
    })
}
  , rP = () => {
    const e = ["No using the server for illegal activities.", "Spamming, harassment, or any form of abuse towards other users is strictly forbidden.", "The use of unauthorized modifications or exploits is prohibited.", "Users are responsible for the content on their servers.", "Respect the resource limits of your chosen plan."]
      , t = ["No using the bot for spam, hate speech, or malicious purposes.", "The bot must not violate Discord's Terms of Service.", "Users are responsible for their bot's actions and content.", "Avoid running resource-intensive tasks that exceed the plan's limitations."];
    return c.jsx("div", {
        className: "min-h-screen pt-24 pb-12 px-4",
        children: c.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [c.jsxs("div", {
                className: "text-center mb-16",
                children: [c.jsx("h1", {
                    className: "text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent animate-slide-up",
                    children: "Fefox Hosting Rules"
                }), c.jsx("p", {
                    className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                    children: "Please read and follow these rules to ensure a safe and enjoyable hosting experience for everyone."
                })]
            }), c.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [c.jsxs(an, {
                    className: "gradient-card hover:scale-105 transition-all duration-300 glow-accent",
                    children: [c.jsx(fo, {
                        children: c.jsxs(po, {
                            className: "flex items-center gap-3 text-2xl",
                            children: [c.jsx("div", {
                                className: "bg-primary/10 p-3 rounded-xl",
                                children: c.jsx(gg, {
                                    className: "h-8 w-8 text-primary"
                                })
                            }), "Minecraft Hosting Rules"]
                        })
                    }), c.jsx(ln, {
                        children: c.jsx("ul", {
                            className: "space-y-4",
                            children: e.map( (n, r) => c.jsxs("li", {
                                className: "flex items-start gap-3",
                                children: [c.jsx("span", {
                                    className: "flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-0.5",
                                    children: r + 1
                                }), c.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: n
                                })]
                            }, r))
                        })
                    })]
                }), c.jsxs(an, {
                    className: "gradient-card hover:scale-105 transition-all duration-300 glow-accent",
                    children: [c.jsx(fo, {
                        children: c.jsxs(po, {
                            className: "flex items-center gap-3 text-2xl",
                            children: [c.jsx("div", {
                                className: "bg-accent/10 p-3 rounded-xl",
                                children: c.jsx(hg, {
                                    className: "h-8 w-8 text-accent"
                                })
                            }), "Discord Bot Hosting Rules"]
                        })
                    }), c.jsx(ln, {
                        children: c.jsx("ul", {
                            className: "space-y-4",
                            children: t.map( (n, r) => c.jsxs("li", {
                                className: "flex items-start gap-3",
                                children: [c.jsx("span", {
                                    className: "flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-0.5",
                                    children: r + 1
                                }), c.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: n
                                })]
                            }, r))
                        })
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-12 p-6 bg-muted/50 rounded-lg",
                children: [c.jsx("h3", {
                    className: "text-lg font-semibold mb-2",
                    children: "Important Notice"
                }), c.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Violation of these rules may result in account suspension or termination. By using our hosting services, you agree to abide by these terms and conditions."
                })]
            })]
        })
    })
}
  , Ey = d.forwardRef( ({className: e, ...t}, n) => c.jsx("textarea", {
    className: ee("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
Ey.displayName = "Textarea";
function oh(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var oP = d.createContext(void 0);
function Wd(e) {
    const t = d.useContext(oP);
    return e || t || "ltr"
}
var Xl = 0;
function by() {
    d.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? sh()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? sh()),
        Xl++,
        () => {
            Xl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            Xl--
        }
    }
    , [])
}
function sh() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var ql = "focusScope.autoFocusOnMount"
  , Zl = "focusScope.autoFocusOnUnmount"
  , ih = {
    bubbles: !1,
    cancelable: !0
}
  , sP = "FocusScope"
  , Kd = d.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...i} = e
      , [a,l] = d.useState(null)
      , u = Ge(o)
      , f = Ge(s)
      , p = d.useRef(null)
      , m = fe(t, v => l(v))
      , h = d.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    d.useEffect( () => {
        if (r) {
            let v = function(x) {
                if (h.paused || !a)
                    return;
                const C = x.target;
                a.contains(C) ? p.current = C : Nn(p.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (h.paused || !a)
                    return;
                const C = x.relatedTarget;
                C !== null && (a.contains(C) || Nn(p.current, {
                    select: !0
                }))
            }
              , y = function(x) {
                if (document.activeElement === document.body)
                    for (const E of x)
                        E.removedNodes.length > 0 && Nn(a)
            };
            document.addEventListener("focusin", v),
            document.addEventListener("focusout", w);
            const g = new MutationObserver(y);
            return a && g.observe(a, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", v),
                document.removeEventListener("focusout", w),
                g.disconnect()
            }
        }
    }
    , [r, a, h.paused]),
    d.useEffect( () => {
        if (a) {
            lh.add(h);
            const v = document.activeElement;
            if (!a.contains(v)) {
                const y = new CustomEvent(ql,ih);
                a.addEventListener(ql, u),
                a.dispatchEvent(y),
                y.defaultPrevented || (iP(dP(Ny(a)), {
                    select: !0
                }),
                document.activeElement === v && Nn(a))
            }
            return () => {
                a.removeEventListener(ql, u),
                setTimeout( () => {
                    const y = new CustomEvent(Zl,ih);
                    a.addEventListener(Zl, f),
                    a.dispatchEvent(y),
                    y.defaultPrevented || Nn(v ?? document.body, {
                        select: !0
                    }),
                    a.removeEventListener(Zl, f),
                    lh.remove(h)
                }
                , 0)
            }
        }
    }
    , [a, u, f, h]);
    const S = d.useCallback(v => {
        if (!n && !r || h.paused)
            return;
        const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey
          , y = document.activeElement;
        if (w && y) {
            const g = v.currentTarget
              , [x,C] = aP(g);
            x && C ? !v.shiftKey && y === C ? (v.preventDefault(),
            n && Nn(x, {
                select: !0
            })) : v.shiftKey && y === x && (v.preventDefault(),
            n && Nn(C, {
                select: !0
            })) : y === g && v.preventDefault()
        }
    }
    , [n, r, h.paused]);
    return c.jsx(Z.div, {
        tabIndex: -1,
        ...i,
        ref: m,
        onKeyDown: S
    })
}
);
Kd.displayName = sP;
function iP(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (Nn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function aP(e) {
    const t = Ny(e)
      , n = ah(t, e)
      , r = ah(t.reverse(), e);
    return [n, r]
}
function Ny(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function ah(e, t) {
    for (const n of e)
        if (!lP(n, {
            upTo: t
        }))
            return n
}
function lP(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function uP(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Nn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && uP(e) && t && e.select()
    }
}
var lh = cP();
function cP() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = uh(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = uh(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function uh(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function dP(e) {
    return e.filter(t => t.tagName !== "A")
}
function fP(e) {
    const t = d.useRef({
        value: e,
        previous: e
    });
    return d.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var pP = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , Br = new WeakMap
  , Ri = new WeakMap
  , ji = {}
  , Jl = 0
  , Py = function(e) {
    return e && (e.host || Py(e.parentNode))
}
  , hP = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = Py(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , mP = function(e, t, n, r) {
    var o = hP(t, Array.isArray(e) ? e : [e]);
    ji[n] || (ji[n] = new WeakMap);
    var s = ji[n]
      , i = []
      , a = new Set
      , l = new Set(o)
      , u = function(p) {
        !p || a.has(p) || (a.add(p),
        u(p.parentNode))
    };
    o.forEach(u);
    var f = function(p) {
        !p || l.has(p) || Array.prototype.forEach.call(p.children, function(m) {
            if (a.has(m))
                f(m);
            else
                try {
                    var h = m.getAttribute(r)
                      , S = h !== null && h !== "false"
                      , v = (Br.get(m) || 0) + 1
                      , w = (s.get(m) || 0) + 1;
                    Br.set(m, v),
                    s.set(m, w),
                    i.push(m),
                    v === 1 && S && Ri.set(m, !0),
                    w === 1 && m.setAttribute(n, "true"),
                    S || m.setAttribute(r, "true")
                } catch (y) {
                    console.error("aria-hidden: cannot operate on ", m, y)
                }
        })
    };
    return f(t),
    a.clear(),
    Jl++,
    function() {
        i.forEach(function(p) {
            var m = Br.get(p) - 1
              , h = s.get(p) - 1;
            Br.set(p, m),
            s.set(p, h),
            m || (Ri.has(p) || p.removeAttribute(r),
            Ri.delete(p)),
            h || p.removeAttribute(n)
        }),
        Jl--,
        Jl || (Br = new WeakMap,
        Br = new WeakMap,
        Ri = new WeakMap,
        ji = {})
    }
}
  , ky = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = pP(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    mP(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Ht = function() {
    return Ht = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    Ht.apply(this, arguments)
};
function Ty(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function vP(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var Qi = "right-scroll-bar-position"
  , Yi = "width-before-scroll-bar"
  , gP = "with-scroll-bars-hidden"
  , yP = "--removed-body-scroll-bar-size";
function eu(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function xP(e, t) {
    var n = d.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var wP = typeof window < "u" ? d.useLayoutEffect : d.useEffect
  , ch = new WeakMap;
function SP(e, t) {
    var n = xP(null, function(r) {
        return e.forEach(function(o) {
            return eu(o, r)
        })
    });
    return wP(function() {
        var r = ch.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , i = n.current;
            o.forEach(function(a) {
                s.has(a) || eu(a, null)
            }),
            s.forEach(function(a) {
                o.has(a) || eu(a, i)
            })
        }
        ch.set(n, e)
    }, [e]),
    n
}
function CP(e) {
    return e
}
function EP(e, t) {
    t === void 0 && (t = CP);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var i = t(s, r);
            return n.push(i),
            function() {
                n = n.filter(function(a) {
                    return a !== i
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var i = n;
                n = [],
                i.forEach(s)
            }
            n = {
                push: function(a) {
                    return s(a)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var i = [];
            if (n.length) {
                var a = n;
                n = [],
                a.forEach(s),
                i = n
            }
            var l = function() {
                var f = i;
                i = [],
                f.forEach(s)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(f) {
                    i.push(f),
                    u()
                },
                filter: function(f) {
                    return i = i.filter(f),
                    n
                }
            }
        }
    };
    return o
}
function bP(e) {
    e === void 0 && (e = {});
    var t = EP(null);
    return t.options = Ht({
        async: !0,
        ssr: !1
    }, e),
    t
}
var Ry = function(e) {
    var t = e.sideCar
      , n = Ty(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return d.createElement(r, Ht({}, n))
};
Ry.isSideCarExport = !0;
function NP(e, t) {
    return e.useMedium(t),
    Ry
}
var jy = bP()
  , tu = function() {}
  , il = d.forwardRef(function(e, t) {
    var n = d.useRef(null)
      , r = d.useState({
        onScrollCapture: tu,
        onWheelCapture: tu,
        onTouchMoveCapture: tu
    })
      , o = r[0]
      , s = r[1]
      , i = e.forwardProps
      , a = e.children
      , l = e.className
      , u = e.removeScrollBar
      , f = e.enabled
      , p = e.shards
      , m = e.sideCar
      , h = e.noRelative
      , S = e.noIsolation
      , v = e.inert
      , w = e.allowPinchZoom
      , y = e.as
      , g = y === void 0 ? "div" : y
      , x = e.gapMode
      , C = Ty(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , E = m
      , P = SP([n, t])
      , b = Ht(Ht({}, C), o);
    return d.createElement(d.Fragment, null, f && d.createElement(E, {
        sideCar: jy,
        removeScrollBar: u,
        shards: p,
        noRelative: h,
        noIsolation: S,
        inert: v,
        setCallbacks: s,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x
    }), i ? d.cloneElement(d.Children.only(a), Ht(Ht({}, b), {
        ref: P
    })) : d.createElement(g, Ht({}, b, {
        className: l,
        ref: P
    }), a))
});
il.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
il.classNames = {
    fullWidth: Yi,
    zeroRight: Qi
};
var PP = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function kP() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = PP();
    return t && e.setAttribute("nonce", t),
    e
}
function TP(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function RP(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var jP = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = kP()) && (TP(t, n),
            RP(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , MP = function() {
    var e = jP();
    return function(t, n) {
        d.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , My = function() {
    var e = MP()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , _P = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , nu = function(e) {
    return parseInt(e || "", 10) || 0
}
  , IP = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [nu(n), nu(r), nu(o)]
}
  , OP = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return _P;
    var t = IP(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , AP = My()
  , ho = "data-scroll-locked"
  , DP = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , i = e.right
      , a = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(gP, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(ho, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Qi, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Yi, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Qi, " .").concat(Qi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Yi, " .").concat(Yi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ho, `] {
    `).concat(yP, ": ").concat(a, `px;
  }
`)
}
  , dh = function() {
    var e = parseInt(document.body.getAttribute(ho) || "0", 10);
    return isFinite(e) ? e : 0
}
  , LP = function() {
    d.useEffect(function() {
        return document.body.setAttribute(ho, (dh() + 1).toString()),
        function() {
            var e = dh() - 1;
            e <= 0 ? document.body.removeAttribute(ho) : document.body.setAttribute(ho, e.toString())
        }
    }, [])
}
  , FP = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    LP();
    var s = d.useMemo(function() {
        return OP(o)
    }, [o]);
    return d.createElement(AP, {
        styles: DP(s, !t, o, n ? "" : "!important")
    })
}
  , pc = !1;
if (typeof window < "u")
    try {
        var Mi = Object.defineProperty({}, "passive", {
            get: function() {
                return pc = !0,
                !0
            }
        });
        window.addEventListener("test", Mi, Mi),
        window.removeEventListener("test", Mi, Mi)
    } catch {
        pc = !1
    }
var Ur = pc ? {
    passive: !1
} : !1
  , zP = function(e) {
    return e.tagName === "TEXTAREA"
}
  , _y = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !zP(e) && n[t] === "visible")
}
  , $P = function(e) {
    return _y(e, "overflowY")
}
  , BP = function(e) {
    return _y(e, "overflowX")
}
  , fh = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = Iy(e, r);
        if (o) {
            var s = Oy(e, r)
              , i = s[1]
              , a = s[2];
            if (i > a)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , UP = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , VP = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , Iy = function(e, t) {
    return e === "v" ? $P(t) : BP(t)
}
  , Oy = function(e, t) {
    return e === "v" ? UP(t) : VP(t)
}
  , HP = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , WP = function(e, t, n, r, o) {
    var s = HP(e, window.getComputedStyle(t).direction)
      , i = s * r
      , a = n.target
      , l = t.contains(a)
      , u = !1
      , f = i > 0
      , p = 0
      , m = 0;
    do {
        if (!a)
            break;
        var h = Oy(e, a)
          , S = h[0]
          , v = h[1]
          , w = h[2]
          , y = v - w - s * S;
        (S || y) && Iy(e, a) && (p += y,
        m += S);
        var g = a.parentNode;
        a = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (f && (Math.abs(p) < 1 || !o) || !f && (Math.abs(m) < 1 || !o)) && (u = !0),
    u
}
  , _i = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , ph = function(e) {
    return [e.deltaX, e.deltaY]
}
  , hh = function(e) {
    return e && "current"in e ? e.current : e
}
  , KP = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , GP = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , QP = 0
  , Vr = [];
function YP(e) {
    var t = d.useRef([])
      , n = d.useRef([0, 0])
      , r = d.useRef()
      , o = d.useState(QP++)[0]
      , s = d.useState(My)[0]
      , i = d.useRef(e);
    d.useEffect(function() {
        i.current = e
    }, [e]),
    d.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var v = vP([e.lockRef.current], (e.shards || []).map(hh), !0).filter(Boolean);
            return v.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = d.useCallback(function(v, w) {
        if ("touches"in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
            return !i.current.allowPinchZoom;
        var y = _i(v), g = n.current, x = "deltaX"in v ? v.deltaX : g[0] - y[0], C = "deltaY"in v ? v.deltaY : g[1] - y[1], E, P = v.target, b = Math.abs(x) > Math.abs(C) ? "h" : "v";
        if ("touches"in v && b === "h" && P.type === "range")
            return !1;
        var T = fh(b, P);
        if (!T)
            return !0;
        if (T ? E = b : (E = b === "v" ? "h" : "v",
        T = fh(b, P)),
        !T)
            return !1;
        if (!r.current && "changedTouches"in v && (x || C) && (r.current = E),
        !E)
            return !0;
        var M = r.current || E;
        return WP(M, w, v, M === "h" ? x : C, !0)
    }, [])
      , l = d.useCallback(function(v) {
        var w = v;
        if (!(!Vr.length || Vr[Vr.length - 1] !== s)) {
            var y = "deltaY"in w ? ph(w) : _i(w)
              , g = t.current.filter(function(E) {
                return E.name === w.type && (E.target === w.target || w.target === E.shadowParent) && KP(E.delta, y)
            })[0];
            if (g && g.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!g) {
                var x = (i.current.shards || []).map(hh).filter(Boolean).filter(function(E) {
                    return E.contains(w.target)
                })
                  , C = x.length > 0 ? a(w, x[0]) : !i.current.noIsolation;
                C && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = d.useCallback(function(v, w, y, g) {
        var x = {
            name: v,
            delta: w,
            target: y,
            should: g,
            shadowParent: XP(y)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(C) {
                return C !== x
            })
        }, 1)
    }, [])
      , f = d.useCallback(function(v) {
        n.current = _i(v),
        r.current = void 0
    }, [])
      , p = d.useCallback(function(v) {
        u(v.type, ph(v), v.target, a(v, e.lockRef.current))
    }, [])
      , m = d.useCallback(function(v) {
        u(v.type, _i(v), v.target, a(v, e.lockRef.current))
    }, []);
    d.useEffect(function() {
        return Vr.push(s),
        e.setCallbacks({
            onScrollCapture: p,
            onWheelCapture: p,
            onTouchMoveCapture: m
        }),
        document.addEventListener("wheel", l, Ur),
        document.addEventListener("touchmove", l, Ur),
        document.addEventListener("touchstart", f, Ur),
        function() {
            Vr = Vr.filter(function(v) {
                return v !== s
            }),
            document.removeEventListener("wheel", l, Ur),
            document.removeEventListener("touchmove", l, Ur),
            document.removeEventListener("touchstart", f, Ur)
        }
    }, []);
    var h = e.removeScrollBar
      , S = e.inert;
    return d.createElement(d.Fragment, null, S ? d.createElement(s, {
        styles: GP(o)
    }) : null, h ? d.createElement(FP, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function XP(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const qP = NP(jy, YP);
var Gd = d.forwardRef(function(e, t) {
    return d.createElement(il, Ht({}, e, {
        ref: t,
        sideCar: qP
    }))
});
Gd.classNames = il.classNames;
var ZP = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , JP = [" ", "Enter"]
  , kr = "Select"
  , [al,ll,ek] = Qa(kr)
  , [Ho,IR] = vn(kr, [ek, Bo])
  , ul = Bo()
  , [tk,nr] = Ho(kr)
  , [nk,rk] = Ho(kr)
  , Ay = e => {
    const {__scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: s, value: i, defaultValue: a, onValueChange: l, dir: u, name: f, autoComplete: p, disabled: m, required: h, form: S} = e
      , v = ul(t)
      , [w,y] = d.useState(null)
      , [g,x] = d.useState(null)
      , [C,E] = d.useState(!1)
      , P = Wd(u)
      , [b,T] = Ls({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: kr
    })
      , [M,j] = Ls({
        prop: i,
        defaultProp: a,
        onChange: l,
        caller: kr
    })
      , U = d.useRef(null)
      , D = w ? S || !!w.closest("form") : !0
      , [W,I] = d.useState(new Set)
      , K = Array.from(W).map(F => F.props.value).join(";");
    return c.jsx(Yg, {
        ...v,
        children: c.jsxs(tk, {
            required: h,
            scope: t,
            trigger: w,
            onTriggerChange: y,
            valueNode: g,
            onValueNodeChange: x,
            valueNodeHasChildren: C,
            onValueNodeHasChildrenChange: E,
            contentId: Mo(),
            value: M,
            onValueChange: j,
            open: b,
            onOpenChange: T,
            dir: P,
            triggerPointerDownPosRef: U,
            disabled: m,
            children: [c.jsx(al.Provider, {
                scope: t,
                children: c.jsx(nk, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: d.useCallback(F => {
                        I(H => new Set(H).add(F))
                    }
                    , []),
                    onNativeOptionRemove: d.useCallback(F => {
                        I(H => {
                            const k = new Set(H);
                            return k.delete(F),
                            k
                        }
                        )
                    }
                    , []),
                    children: n
                })
            }), D ? c.jsxs(s0, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: f,
                autoComplete: p,
                value: M,
                onChange: F => j(F.target.value),
                disabled: m,
                form: S,
                children: [M === void 0 ? c.jsx("option", {
                    value: ""
                }) : null, Array.from(W)]
            }, K) : null]
        })
    })
}
;
Ay.displayName = kr;
var Dy = "SelectTrigger"
  , Ly = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, disabled: r=!1, ...o} = e
      , s = ul(n)
      , i = nr(Dy, n)
      , a = i.disabled || r
      , l = fe(t, i.onTriggerChange)
      , u = ll(n)
      , f = d.useRef("touch")
      , [p,m,h] = a0(v => {
        const w = u().filter(x => !x.disabled)
          , y = w.find(x => x.value === i.value)
          , g = l0(w, v, y);
        g !== void 0 && i.onValueChange(g.value)
    }
    )
      , S = v => {
        a || (i.onOpenChange(!0),
        h()),
        v && (i.triggerPointerDownPosRef.current = {
            x: Math.round(v.pageX),
            y: Math.round(v.pageY)
        })
    }
    ;
    return c.jsx(Id, {
        asChild: !0,
        ...s,
        children: c.jsx(Z.button, {
            type: "button",
            role: "combobox",
            "aria-controls": i.contentId,
            "aria-expanded": i.open,
            "aria-required": i.required,
            "aria-autocomplete": "none",
            dir: i.dir,
            "data-state": i.open ? "open" : "closed",
            disabled: a,
            "data-disabled": a ? "" : void 0,
            "data-placeholder": i0(i.value) ? "" : void 0,
            ...o,
            ref: l,
            onClick: z(o.onClick, v => {
                v.currentTarget.focus(),
                f.current !== "mouse" && S(v)
            }
            ),
            onPointerDown: z(o.onPointerDown, v => {
                f.current = v.pointerType;
                const w = v.target;
                w.hasPointerCapture(v.pointerId) && w.releasePointerCapture(v.pointerId),
                v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (S(v),
                v.preventDefault())
            }
            ),
            onKeyDown: z(o.onKeyDown, v => {
                const w = p.current !== "";
                !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && m(v.key),
                !(w && v.key === " ") && ZP.includes(v.key) && (S(),
                v.preventDefault())
            }
            )
        })
    })
}
);
Ly.displayName = Dy;
var Fy = "SelectValue"
  , zy = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, children: s, placeholder: i="", ...a} = e
      , l = nr(Fy, n)
      , {onValueNodeHasChildrenChange: u} = l
      , f = s !== void 0
      , p = fe(t, l.onValueNodeChange);
    return ke( () => {
        u(f)
    }
    , [u, f]),
    c.jsx(Z.span, {
        ...a,
        ref: p,
        style: {
            pointerEvents: "none"
        },
        children: i0(l.value) ? c.jsx(c.Fragment, {
            children: i
        }) : s
    })
}
);
zy.displayName = Fy;
var ok = "SelectIcon"
  , $y = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, children: r, ...o} = e;
    return c.jsx(Z.span, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        children: r || "▼"
    })
}
);
$y.displayName = ok;
var sk = "SelectPortal"
  , By = e => c.jsx(Ya, {
    asChild: !0,
    ...e
});
By.displayName = sk;
var Tr = "SelectContent"
  , Uy = d.forwardRef( (e, t) => {
    const n = nr(Tr, e.__scopeSelect)
      , [r,o] = d.useState();
    if (ke( () => {
        o(new DocumentFragment)
    }
    , []),
    !n.open) {
        const s = r;
        return s ? Mr.createPortal(c.jsx(Vy, {
            scope: e.__scopeSelect,
            children: c.jsx(al.Slot, {
                scope: e.__scopeSelect,
                children: c.jsx("div", {
                    children: e.children
                })
            })
        }), s) : null
    }
    return c.jsx(Hy, {
        ...e,
        ref: t
    })
}
);
Uy.displayName = Tr;
var Pt = 10
  , [Vy,rr] = Ho(Tr)
  , ik = "SelectContentImpl"
  , ak = jo("SelectContent.RemoveScroll")
  , Hy = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: s, onPointerDownOutside: i, side: a, sideOffset: l, align: u, alignOffset: f, arrowPadding: p, collisionBoundary: m, collisionPadding: h, sticky: S, hideWhenDetached: v, avoidCollisions: w, ...y} = e
      , g = nr(Tr, n)
      , [x,C] = d.useState(null)
      , [E,P] = d.useState(null)
      , b = fe(t, L => C(L))
      , [T,M] = d.useState(null)
      , [j,U] = d.useState(null)
      , D = ll(n)
      , [W,I] = d.useState(!1)
      , K = d.useRef(!1);
    d.useEffect( () => {
        if (x)
            return ky(x)
    }
    , [x]),
    by();
    const F = d.useCallback(L => {
        const [oe,...se] = D().map(ie => ie.ref.current)
          , [te] = se.slice(-1)
          , ne = document.activeElement;
        for (const ie of L)
            if (ie === ne || (ie == null || ie.scrollIntoView({
                block: "nearest"
            }),
            ie === oe && E && (E.scrollTop = 0),
            ie === te && E && (E.scrollTop = E.scrollHeight),
            ie == null || ie.focus(),
            document.activeElement !== ne))
                return
    }
    , [D, E])
      , H = d.useCallback( () => F([T, x]), [F, T, x]);
    d.useEffect( () => {
        W && H()
    }
    , [W, H]);
    const {onOpenChange: k, triggerPointerDownPosRef: N} = g;
    d.useEffect( () => {
        if (x) {
            let L = {
                x: 0,
                y: 0
            };
            const oe = te => {
                var ne, ie;
                L = {
                    x: Math.abs(Math.round(te.pageX) - (((ne = N.current) == null ? void 0 : ne.x) ?? 0)),
                    y: Math.abs(Math.round(te.pageY) - (((ie = N.current) == null ? void 0 : ie.y) ?? 0))
                }
            }
              , se = te => {
                L.x <= 10 && L.y <= 10 ? te.preventDefault() : x.contains(te.target) || k(!1),
                document.removeEventListener("pointermove", oe),
                N.current = null
            }
            ;
            return N.current !== null && (document.addEventListener("pointermove", oe),
            document.addEventListener("pointerup", se, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", oe),
                document.removeEventListener("pointerup", se, {
                    capture: !0
                })
            }
        }
    }
    , [x, k, N]),
    d.useEffect( () => {
        const L = () => k(!1);
        return window.addEventListener("blur", L),
        window.addEventListener("resize", L),
        () => {
            window.removeEventListener("blur", L),
            window.removeEventListener("resize", L)
        }
    }
    , [k]);
    const [O,V] = a0(L => {
        const oe = D().filter(ne => !ne.disabled)
          , se = oe.find(ne => ne.ref.current === document.activeElement)
          , te = l0(oe, L, se);
        te && setTimeout( () => te.ref.current.focus())
    }
    )
      , B = d.useCallback( (L, oe, se) => {
        const te = !K.current && !se;
        (g.value !== void 0 && g.value === oe || te) && (M(L),
        te && (K.current = !0))
    }
    , [g.value])
      , Q = d.useCallback( () => x == null ? void 0 : x.focus(), [x])
      , G = d.useCallback( (L, oe, se) => {
        const te = !K.current && !se;
        (g.value !== void 0 && g.value === oe || te) && U(L)
    }
    , [g.value])
      , ue = r === "popper" ? hc : Wy
      , ce = ue === hc ? {
        side: a,
        sideOffset: l,
        align: u,
        alignOffset: f,
        arrowPadding: p,
        collisionBoundary: m,
        collisionPadding: h,
        sticky: S,
        hideWhenDetached: v,
        avoidCollisions: w
    } : {};
    return c.jsx(Vy, {
        scope: n,
        content: x,
        viewport: E,
        onViewportChange: P,
        itemRefCallback: B,
        selectedItem: T,
        onItemLeave: Q,
        itemTextRefCallback: G,
        focusSelectedItem: H,
        selectedItemText: j,
        position: r,
        isPositioned: W,
        searchRef: O,
        children: c.jsx(Gd, {
            as: ak,
            allowPinchZoom: !0,
            children: c.jsx(Kd, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: L => {
                    L.preventDefault()
                }
                ,
                onUnmountAutoFocus: z(o, L => {
                    var oe;
                    (oe = g.trigger) == null || oe.focus({
                        preventScroll: !0
                    }),
                    L.preventDefault()
                }
                ),
                children: c.jsx(Js, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: i,
                    onFocusOutside: L => L.preventDefault(),
                    onDismiss: () => g.onOpenChange(!1),
                    children: c.jsx(ue, {
                        role: "listbox",
                        id: g.contentId,
                        "data-state": g.open ? "open" : "closed",
                        dir: g.dir,
                        onContextMenu: L => L.preventDefault(),
                        ...y,
                        ...ce,
                        onPlaced: () => I(!0),
                        ref: b,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...y.style
                        },
                        onKeyDown: z(y.onKeyDown, L => {
                            const oe = L.ctrlKey || L.altKey || L.metaKey;
                            if (L.key === "Tab" && L.preventDefault(),
                            !oe && L.key.length === 1 && V(L.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key)) {
                                let te = D().filter(ne => !ne.disabled).map(ne => ne.ref.current);
                                if (["ArrowUp", "End"].includes(L.key) && (te = te.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(L.key)) {
                                    const ne = L.target
                                      , ie = te.indexOf(ne);
                                    te = te.slice(ie + 1)
                                }
                                setTimeout( () => F(te)),
                                L.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
Hy.displayName = ik;
var lk = "SelectItemAlignedPosition"
  , Wy = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, onPlaced: r, ...o} = e
      , s = nr(Tr, n)
      , i = rr(Tr, n)
      , [a,l] = d.useState(null)
      , [u,f] = d.useState(null)
      , p = fe(t, b => f(b))
      , m = ll(n)
      , h = d.useRef(!1)
      , S = d.useRef(!0)
      , {viewport: v, selectedItem: w, selectedItemText: y, focusSelectedItem: g} = i
      , x = d.useCallback( () => {
        if (s.trigger && s.valueNode && a && u && v && w && y) {
            const b = s.trigger.getBoundingClientRect()
              , T = u.getBoundingClientRect()
              , M = s.valueNode.getBoundingClientRect()
              , j = y.getBoundingClientRect();
            if (s.dir !== "rtl") {
                const ne = j.left - T.left
                  , ie = M.left - ne
                  , De = b.left - ie
                  , dt = b.width + De
                  , or = Math.max(dt, T.width)
                  , gn = window.innerWidth - Pt
                  , sr = oh(ie, [Pt, Math.max(Pt, gn - or)]);
                a.style.minWidth = dt + "px",
                a.style.left = sr + "px"
            } else {
                const ne = T.right - j.right
                  , ie = window.innerWidth - M.right - ne
                  , De = window.innerWidth - b.right - ie
                  , dt = b.width + De
                  , or = Math.max(dt, T.width)
                  , gn = window.innerWidth - Pt
                  , sr = oh(ie, [Pt, Math.max(Pt, gn - or)]);
                a.style.minWidth = dt + "px",
                a.style.right = sr + "px"
            }
            const U = m()
              , D = window.innerHeight - Pt * 2
              , W = v.scrollHeight
              , I = window.getComputedStyle(u)
              , K = parseInt(I.borderTopWidth, 10)
              , F = parseInt(I.paddingTop, 10)
              , H = parseInt(I.borderBottomWidth, 10)
              , k = parseInt(I.paddingBottom, 10)
              , N = K + F + W + k + H
              , O = Math.min(w.offsetHeight * 5, N)
              , V = window.getComputedStyle(v)
              , B = parseInt(V.paddingTop, 10)
              , Q = parseInt(V.paddingBottom, 10)
              , G = b.top + b.height / 2 - Pt
              , ue = D - G
              , ce = w.offsetHeight / 2
              , L = w.offsetTop + ce
              , oe = K + F + L
              , se = N - oe;
            if (oe <= G) {
                const ne = U.length > 0 && w === U[U.length - 1].ref.current;
                a.style.bottom = "0px";
                const ie = u.clientHeight - v.offsetTop - v.offsetHeight
                  , De = Math.max(ue, ce + (ne ? Q : 0) + ie + H)
                  , dt = oe + De;
                a.style.height = dt + "px"
            } else {
                const ne = U.length > 0 && w === U[0].ref.current;
                a.style.top = "0px";
                const De = Math.max(G, K + v.offsetTop + (ne ? B : 0) + ce) + se;
                a.style.height = De + "px",
                v.scrollTop = oe - G + v.offsetTop
            }
            a.style.margin = `${Pt}px 0`,
            a.style.minHeight = O + "px",
            a.style.maxHeight = D + "px",
            r == null || r(),
            requestAnimationFrame( () => h.current = !0)
        }
    }
    , [m, s.trigger, s.valueNode, a, u, v, w, y, s.dir, r]);
    ke( () => x(), [x]);
    const [C,E] = d.useState();
    ke( () => {
        u && E(window.getComputedStyle(u).zIndex)
    }
    , [u]);
    const P = d.useCallback(b => {
        b && S.current === !0 && (x(),
        g == null || g(),
        S.current = !1)
    }
    , [x, g]);
    return c.jsx(ck, {
        scope: n,
        contentWrapper: a,
        shouldExpandOnScrollRef: h,
        onScrollButtonChange: P,
        children: c.jsx("div", {
            ref: l,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: C
            },
            children: c.jsx(Z.div, {
                ...o,
                ref: p,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style
                }
            })
        })
    })
}
);
Wy.displayName = lk;
var uk = "SelectPopperPosition"
  , hc = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, align: r="start", collisionPadding: o=Pt, ...s} = e
      , i = ul(n);
    return c.jsx(Od, {
        ...i,
        ...s,
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
            boxSizing: "border-box",
            ...s.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
hc.displayName = uk;
var [ck,Qd] = Ho(Tr, {})
  , mc = "SelectViewport"
  , Ky = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, nonce: r, ...o} = e
      , s = rr(mc, n)
      , i = Qd(mc, n)
      , a = fe(t, s.onViewportChange)
      , l = d.useRef(0);
    return c.jsxs(c.Fragment, {
        children: [c.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), c.jsx(al.Slot, {
            scope: n,
            children: c.jsx(Z.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...o,
                ref: a,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style
                },
                onScroll: z(o.onScroll, u => {
                    const f = u.currentTarget
                      , {contentWrapper: p, shouldExpandOnScrollRef: m} = i;
                    if (m != null && m.current && p) {
                        const h = Math.abs(l.current - f.scrollTop);
                        if (h > 0) {
                            const S = window.innerHeight - Pt * 2
                              , v = parseFloat(p.style.minHeight)
                              , w = parseFloat(p.style.height)
                              , y = Math.max(v, w);
                            if (y < S) {
                                const g = y + h
                                  , x = Math.min(S, g)
                                  , C = g - x;
                                p.style.height = x + "px",
                                p.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0,
                                p.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = f.scrollTop
                }
                )
            })
        })]
    })
}
);
Ky.displayName = mc;
var Gy = "SelectGroup"
  , [dk,fk] = Ho(Gy)
  , pk = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = Mo();
    return c.jsx(dk, {
        scope: n,
        id: o,
        children: c.jsx(Z.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
        })
    })
}
);
pk.displayName = Gy;
var Qy = "SelectLabel"
  , Yy = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = fk(Qy, n);
    return c.jsx(Z.div, {
        id: o.id,
        ...r,
        ref: t
    })
}
);
Yy.displayName = Qy;
var Ta = "SelectItem"
  , [hk,Xy] = Ho(Ta)
  , qy = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, value: r, disabled: o=!1, textValue: s, ...i} = e
      , a = nr(Ta, n)
      , l = rr(Ta, n)
      , u = a.value === r
      , [f,p] = d.useState(s ?? "")
      , [m,h] = d.useState(!1)
      , S = fe(t, g => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, g, r, o)
    }
    )
      , v = Mo()
      , w = d.useRef("touch")
      , y = () => {
        o || (a.onValueChange(r),
        a.onOpenChange(!1))
    }
    ;
    if (r === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return c.jsx(hk, {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: d.useCallback(g => {
            p(x => x || ((g == null ? void 0 : g.textContent) ?? "").trim())
        }
        , []),
        children: c.jsx(al.ItemSlot, {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: c.jsx(Z.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": u && m,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: S,
                onFocus: z(i.onFocus, () => h(!0)),
                onBlur: z(i.onBlur, () => h(!1)),
                onClick: z(i.onClick, () => {
                    w.current !== "mouse" && y()
                }
                ),
                onPointerUp: z(i.onPointerUp, () => {
                    w.current === "mouse" && y()
                }
                ),
                onPointerDown: z(i.onPointerDown, g => {
                    w.current = g.pointerType
                }
                ),
                onPointerMove: z(i.onPointerMove, g => {
                    var x;
                    w.current = g.pointerType,
                    o ? (x = l.onItemLeave) == null || x.call(l) : w.current === "mouse" && g.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: z(i.onPointerLeave, g => {
                    var x;
                    g.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l))
                }
                ),
                onKeyDown: z(i.onKeyDown, g => {
                    var C;
                    ((C = l.searchRef) == null ? void 0 : C.current) !== "" && g.key === " " || (JP.includes(g.key) && y(),
                    g.key === " " && g.preventDefault())
                }
                )
            })
        })
    })
}
);
qy.displayName = Ta;
var ls = "SelectItemText"
  , Zy = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, ...s} = e
      , i = nr(ls, n)
      , a = rr(ls, n)
      , l = Xy(ls, n)
      , u = rk(ls, n)
      , [f,p] = d.useState(null)
      , m = fe(t, y => p(y), l.onItemTextChange, y => {
        var g;
        return (g = a.itemTextRefCallback) == null ? void 0 : g.call(a, y, l.value, l.disabled)
    }
    )
      , h = f == null ? void 0 : f.textContent
      , S = d.useMemo( () => c.jsx("option", {
        value: l.value,
        disabled: l.disabled,
        children: h
    }, l.value), [l.disabled, l.value, h])
      , {onNativeOptionAdd: v, onNativeOptionRemove: w} = u;
    return ke( () => (v(S),
    () => w(S)), [v, w, S]),
    c.jsxs(c.Fragment, {
        children: [c.jsx(Z.span, {
            id: l.textId,
            ...s,
            ref: m
        }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Mr.createPortal(s.children, i.valueNode) : null]
    })
}
);
Zy.displayName = ls;
var Jy = "SelectItemIndicator"
  , e0 = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return Xy(Jy, n).isSelected ? c.jsx(Z.span, {
        "aria-hidden": !0,
        ...r,
        ref: t
    }) : null
}
);
e0.displayName = Jy;
var vc = "SelectScrollUpButton"
  , t0 = d.forwardRef( (e, t) => {
    const n = rr(vc, e.__scopeSelect)
      , r = Qd(vc, e.__scopeSelect)
      , [o,s] = d.useState(!1)
      , i = fe(t, r.onScrollButtonChange);
    return ke( () => {
        if (n.viewport && n.isPositioned) {
            let a = function() {
                const u = l.scrollTop > 0;
                s(u)
            };
            const l = n.viewport;
            return a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? c.jsx(r0, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: a, selectedItem: l} = n;
            a && l && (a.scrollTop = a.scrollTop - l.offsetHeight)
        }
    }) : null
}
);
t0.displayName = vc;
var gc = "SelectScrollDownButton"
  , n0 = d.forwardRef( (e, t) => {
    const n = rr(gc, e.__scopeSelect)
      , r = Qd(gc, e.__scopeSelect)
      , [o,s] = d.useState(!1)
      , i = fe(t, r.onScrollButtonChange);
    return ke( () => {
        if (n.viewport && n.isPositioned) {
            let a = function() {
                const u = l.scrollHeight - l.clientHeight
                  , f = Math.ceil(l.scrollTop) < u;
                s(f)
            };
            const l = n.viewport;
            return a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? c.jsx(r0, {
        ...e,
        ref: i,
        onAutoScroll: () => {
            const {viewport: a, selectedItem: l} = n;
            a && l && (a.scrollTop = a.scrollTop + l.offsetHeight)
        }
    }) : null
}
);
n0.displayName = gc;
var r0 = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, onAutoScroll: r, ...o} = e
      , s = rr("SelectScrollButton", n)
      , i = d.useRef(null)
      , a = ll(n)
      , l = d.useCallback( () => {
        i.current !== null && (window.clearInterval(i.current),
        i.current = null)
    }
    , []);
    return d.useEffect( () => () => l(), [l]),
    ke( () => {
        var f;
        const u = a().find(p => p.ref.current === document.activeElement);
        (f = u == null ? void 0 : u.ref.current) == null || f.scrollIntoView({
            block: "nearest"
        })
    }
    , [a]),
    c.jsx(Z.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: {
            flexShrink: 0,
            ...o.style
        },
        onPointerDown: z(o.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerMove: z(o.onPointerMove, () => {
            var u;
            (u = s.onItemLeave) == null || u.call(s),
            i.current === null && (i.current = window.setInterval(r, 50))
        }
        ),
        onPointerLeave: z(o.onPointerLeave, () => {
            l()
        }
        )
    })
}
)
  , mk = "SelectSeparator"
  , o0 = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return c.jsx(Z.div, {
        "aria-hidden": !0,
        ...r,
        ref: t
    })
}
);
o0.displayName = mk;
var yc = "SelectArrow"
  , vk = d.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = ul(n)
      , s = nr(yc, n)
      , i = rr(yc, n);
    return s.open && i.position === "popper" ? c.jsx(Ad, {
        ...o,
        ...r,
        ref: t
    }) : null
}
);
vk.displayName = yc;
var gk = "SelectBubbleInput"
  , s0 = d.forwardRef( ({__scopeSelect: e, value: t, ...n}, r) => {
    const o = d.useRef(null)
      , s = fe(r, o)
      , i = fP(t);
    return d.useEffect( () => {
        const a = o.current;
        if (!a)
            return;
        const l = window.HTMLSelectElement.prototype
          , f = Object.getOwnPropertyDescriptor(l, "value").set;
        if (i !== t && f) {
            const p = new Event("change",{
                bubbles: !0
            });
            f.call(a, t),
            a.dispatchEvent(p)
        }
    }
    , [i, t]),
    c.jsx(Z.select, {
        ...n,
        style: {
            ...Hv,
            ...n.style
        },
        ref: s,
        defaultValue: t
    })
}
);
s0.displayName = gk;
function i0(e) {
    return e === "" || e === void 0
}
function a0(e) {
    const t = Ge(e)
      , n = d.useRef("")
      , r = d.useRef(0)
      , o = d.useCallback(i => {
        const a = n.current + i;
        t(a),
        function l(u) {
            n.current = u,
            window.clearTimeout(r.current),
            u !== "" && (r.current = window.setTimeout( () => l(""), 1e3))
        }(a)
    }
    , [t])
      , s = d.useCallback( () => {
        n.current = "",
        window.clearTimeout(r.current)
    }
    , []);
    return d.useEffect( () => () => window.clearTimeout(r.current), []),
    [n, o, s]
}
function l0(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
      , s = n ? e.indexOf(n) : -1;
    let i = yk(e, Math.max(s, 0));
    o.length === 1 && (i = i.filter(u => u !== n));
    const l = i.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0
}
function yk(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var xk = Ay
  , u0 = Ly
  , wk = zy
  , Sk = $y
  , Ck = By
  , c0 = Uy
  , Ek = Ky
  , d0 = Yy
  , f0 = qy
  , bk = Zy
  , Nk = e0
  , p0 = t0
  , h0 = n0
  , m0 = o0;
const Pk = xk
  , kk = wk
  , v0 = d.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(u0, {
    ref: r,
    className: ee("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, c.jsx(Sk, {
        asChild: !0,
        children: c.jsx(vg, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
v0.displayName = u0.displayName;
const g0 = d.forwardRef( ({className: e, ...t}, n) => c.jsx(p0, {
    ref: n,
    className: ee("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(mC, {
        className: "h-4 w-4"
    })
}));
g0.displayName = p0.displayName;
const y0 = d.forwardRef( ({className: e, ...t}, n) => c.jsx(h0, {
    ref: n,
    className: ee("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(vg, {
        className: "h-4 w-4"
    })
}));
y0.displayName = h0.displayName;
const x0 = d.forwardRef( ({className: e, children: t, position: n="popper", ...r}, o) => c.jsx(Ck, {
    children: c.jsxs(c0, {
        ref: o,
        className: ee("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...r,
        children: [c.jsx(g0, {}), c.jsx(Ek, {
            className: ee("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), c.jsx(y0, {})]
    })
}));
x0.displayName = c0.displayName;
const Tk = d.forwardRef( ({className: e, ...t}, n) => c.jsx(d0, {
    ref: n,
    className: ee("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
Tk.displayName = d0.displayName;
const xc = d.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(f0, {
    ref: r,
    className: ee("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...n,
    children: [c.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(Nk, {
            children: c.jsx(mg, {
                className: "h-4 w-4"
            })
        })
    }), c.jsx(bk, {
        children: t
    })]
}));
xc.displayName = f0.displayName;
const Rk = d.forwardRef( ({className: e, ...t}, n) => c.jsx(m0, {
    ref: n,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
Rk.displayName = m0.displayName;
const jk = () => {
    const {user: e, loading: t} = Vd()
      , {toast: n} = gd()
      , [r,o] = d.useState("")
      , [s,i] = d.useState("")
      , [a,l] = d.useState(!1);
    if (!e && !t)
        return c.jsx(L2, {
            to: "/",
            replace: !0
        });
    const u = async f => {
        if (f.preventDefault(),
        !r || !s.trim()) {
            n({
                title: "Missing Information",
                description: "Please fill in all required fields",
                variant: "destructive"
            });
            return
        }
        l(!0);
        try {
            const p = {
                content: "@here طلب جديد (New Request)",
                embeds: [{
                    title: "New Order Request",
                    color: 65280,
                    fields: [{
                        name: "Username",
                        value: e.discord_username,
                        inline: !0
                    }, {
                        name: "Order Type",
                        value: r === "minecraft" ? "Minecraft Server Hosting" : "Discord Bot Hosting",
                        inline: !0
                    }, {
                        name: "Details",
                        value: s,
                        inline: !1
                    }, {
                        name: "Request Time",
                        value: new Date().toLocaleString(),
                        inline: !0
                    }],
                    timestamp: new Date().toISOString()
                }]
            };
            if ((await fetch("https://discord.com/api/webhooks/1407172319398592582/l_BgdDpalSiocOmZfnQFC3t3fGk3W42dtOPuD5VPwe3UVUJWwxxYBq6FiBAAcPtsrBcD", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(p)
            })).ok)
                n({
                    title: "Order Submitted Successfully! 🇪🇬",
                    description: "Your hosting request has been sent to our team. We'll contact you soon via Discord!"
                }),
                o(""),
                i("");
            else
                throw new Error("Failed to submit order")
        } catch {
            n({
                title: "Submission Error",
                description: "Failed to submit your order. Please try again or contact support.",
                variant: "destructive"
            })
        } finally {
            l(!1)
        }
    }
    ;
    return t ? c.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: c.jsxs("div", {
            className: "text-center",
            children: [c.jsx("div", {
                className: "animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"
            }), c.jsx("p", {
                className: "text-muted-foreground",
                children: "Loading..."
            })]
        })
    }) : c.jsx("div", {
        className: "min-h-screen pt-24 pb-12 px-4 gradient-hero",
        children: c.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [c.jsxs("div", {
                className: "text-center mb-12 animate-fade-in-up",
                children: [c.jsxs("div", {
                    className: "flex justify-center items-center gap-3 mb-6",
                    children: [c.jsx(ka, {
                        size: 48,
                        className: "text-accent animate-pulse"
                    }), c.jsx("h1", {
                        className: "text-4xl md:text-6xl font-bold text-gradient-primary",
                        children: "Create Your Server"
                    }), c.jsx(fc, {
                        size: 48,
                        className: "text-primary animate-glow-pulse"
                    })]
                }), c.jsxs("p", {
                    className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                    children: ["Welcome ", e == null ? void 0 : e.discord_username, "! Choose your hosting solution and we'll get you set up quickly."]
                })]
            }), c.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8 mb-12",
                children: [c.jsxs(an, {
                    className: "premium-card hover:scale-105 transition-all duration-500 cursor-pointer",
                    onClick: () => o("minecraft"),
                    children: [c.jsxs(fo, {
                        className: "text-center",
                        children: [c.jsx("div", {
                            className: "bg-gradient-to-br from-primary/20 to-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4",
                            children: c.jsx(Hd, {
                                size: 40,
                                className: "text-primary"
                            })
                        }), c.jsx(po, {
                            className: "text-2xl text-gradient-primary",
                            children: "Minecraft Server"
                        })]
                    }), c.jsxs(ln, {
                        className: "text-center",
                        children: [c.jsx("p", {
                            className: "text-muted-foreground mb-4",
                            children: "High-performance Minecraft servers with full mod support, automatic backups, and 99.9% uptime."
                        }), c.jsxs("ul", {
                            className: "text-sm text-muted-foreground space-y-2",
                            children: [c.jsx("li", {
                                children: "• SSD Storage & High RAM"
                            }), c.jsx("li", {
                                children: "• Full FTP & Plugin Access"
                            }), c.jsx("li", {
                                children: "• 24/7 Egyptian Support"
                            }), c.jsx("li", {
                                children: "• DDoS Protection"
                            })]
                        })]
                    })]
                }), c.jsxs(an, {
                    className: "premium-card hover:scale-105 transition-all duration-500 cursor-pointer",
                    onClick: () => o("discord"),
                    children: [c.jsxs(fo, {
                        className: "text-center",
                        children: [c.jsx("div", {
                            className: "bg-gradient-to-br from-accent/20 to-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4",
                            children: c.jsx(hg, {
                                size: 40,
                                className: "text-accent"
                            })
                        }), c.jsx(po, {
                            className: "text-2xl text-gradient-primary",
                            children: "Discord Bot"
                        })]
                    }), c.jsxs(ln, {
                        className: "text-center",
                        children: [c.jsx("p", {
                            className: "text-muted-foreground mb-4",
                            children: "Reliable Discord bot hosting with 24/7 uptime, fast response times, and easy deployment."
                        }), c.jsxs("ul", {
                            className: "text-sm text-muted-foreground space-y-2",
                            children: [c.jsx("li", {
                                children: "• Node.js & Python Support"
                            }), c.jsx("li", {
                                children: "• Auto-restart & Monitoring"
                            }), c.jsx("li", {
                                children: "• Database Integration"
                            }), c.jsx("li", {
                                children: "• Custom Code Support"
                            })]
                        })]
                    })]
                })]
            }), c.jsxs(an, {
                className: "premium-card animate-scale-in",
                children: [c.jsx(fo, {
                    children: c.jsx(po, {
                        className: "text-3xl text-center text-gradient-primary",
                        children: "Order Details"
                    })
                }), c.jsx(ln, {
                    children: c.jsxs("form", {
                        onSubmit: u,
                        className: "space-y-6",
                        children: [c.jsxs("div", {
                            children: [c.jsx("label", {
                                className: "block text-sm font-medium mb-2",
                                children: "Service Type *"
                            }), c.jsxs(Pk, {
                                value: r,
                                onValueChange: o,
                                children: [c.jsx(v0, {
                                    className: "border-primary/30 focus:border-primary",
                                    children: c.jsx(kk, {
                                        placeholder: "Select hosting type"
                                    })
                                }), c.jsxs(x0, {
                                    children: [c.jsx(xc, {
                                        value: "minecraft",
                                        children: "Minecraft Server Hosting"
                                    }), c.jsx(xc, {
                                        value: "discord",
                                        children: "Discord Bot Hosting"
                                    })]
                                })]
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx("label", {
                                className: "block text-sm font-medium mb-2",
                                children: "Server Details & Requirements *"
                            }), c.jsx(Ey, {
                                placeholder: `Please describe your hosting needs:
• Server specifications (RAM, storage, players)
• Plugins/mods required
• Bot features and commands
• Any special requirements
• Preferred server location`,
                                value: s,
                                onChange: f => i(f.target.value),
                                className: "min-h-[150px] border-primary/30 focus:border-primary"
                            })]
                        }), c.jsxs("div", {
                            className: "bg-card/50 border border-primary/20 rounded-lg p-4",
                            children: [c.jsx("h4", {
                                className: "font-semibold text-primary mb-2",
                                children: "🇪🇬 What happens next?"
                            }), c.jsxs("ul", {
                                className: "text-sm text-muted-foreground space-y-1",
                                children: [c.jsx("li", {
                                    children: "• Our team will review your request within 1 hour"
                                }), c.jsx("li", {
                                    children: "• We'll contact you on Discord with pricing and setup details"
                                }), c.jsx("li", {
                                    children: "• Your server will be deployed within 24 hours after payment"
                                }), c.jsx("li", {
                                    children: "• Full Egyptian support throughout the process"
                                })]
                            })]
                        }), c.jsx(sn, {
                            type: "submit",
                            disabled: a || !r || !s.trim(),
                            className: "w-full btn-premium text-white text-xl py-4 font-semibold group",
                            children: c.jsxs("span", {
                                className: "flex items-center justify-center gap-3",
                                children: [c.jsx(fc, {
                                    size: 24,
                                    className: "text-white"
                                }), a ? "Submitting Order..." : "Submit Order Request"]
                            })
                        })]
                    })
                })]
            })]
        })
    })
}
  , Mk = () => {
    const e = Ir();
    return d.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    c.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: c.jsxs("div", {
            className: "text-center",
            children: [c.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), c.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), c.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}
  , _k = () => {
    const [e,t] = d.useState(!0)
      , [n,r] = d.useState(0);
    return d.useEffect( () => {
        const o = setInterval( () => {
            r(s => s >= 100 ? (clearInterval(o),
            setTimeout( () => t(!1), 300),
            100) : s + Math.random() * 15)
        }
        , 150);
        return () => clearInterval(o)
    }
    , []),
    e ? c.jsx("div", {
        className: `preloader ${n >= 100 ? "fade-out" : ""}`,
        children: c.jsxs("div", {
            className: "preloader-content",
            children: [c.jsx("div", {
                className: "relative mb-8",
                children: c.jsxs("div", {
                    className: "preloader-logo",
                    children: [c.jsx(Hd, {
                        size: 64,
                        className: "text-primary animate-pulse-glow"
                    }), c.jsx("div", {
                        className: "absolute -top-2 -right-2",
                        children: c.jsx(ka, {
                            size: 24,
                            className: "text-accent animate-float-gentle"
                        })
                    })]
                })
            }), c.jsx("h2", {
                className: "text-3xl font-bold text-gradient-primary mb-2 animate-fade-in-up",
                children: "Fefox Egypt"
            }), c.jsx("p", {
                className: "text-lg text-muted-foreground mb-6 animate-fade-in-up",
                children: "🇪🇬 Premium Gaming & Bot Hosting"
            }), c.jsx("div", {
                className: "loader-container mb-6",
                children: c.jsxs("div", {
                    className: "premium-loader",
                    children: [c.jsx("div", {
                        className: "loader-ring"
                    }), c.jsx("div", {
                        className: "loader-ring loader-ring-2"
                    }), c.jsx("div", {
                        className: "loader-ring loader-ring-3"
                    })]
                })
            }), c.jsx("div", {
                className: "w-64 h-1 bg-muted/30 rounded-full overflow-hidden mb-4",
                children: c.jsx("div", {
                    className: "h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out rounded-full",
                    style: {
                        width: `${Math.min(n, 100)}%`
                    }
                })
            }), c.jsx("p", {
                className: "text-sm text-muted-foreground animate-pulse",
                children: n < 20 ? "Initializing Egyptian servers..." : n < 40 ? "Loading hosting infrastructure..." : n < 60 ? "Preparing game servers..." : n < 80 ? "Setting up Discord bots..." : n < 95 ? "Finalizing your experience..." : "Welcome to Fefox Egypt! 🇪🇬"
            })]
        })
    }) : null
}
;
var w0 = {
    exports: {}
}
  , S0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo = d;
function Ik(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ok = typeof Object.is == "function" ? Object.is : Ik
  , Ak = Oo.useState
  , Dk = Oo.useEffect
  , Lk = Oo.useLayoutEffect
  , Fk = Oo.useDebugValue;
function zk(e, t) {
    var n = t()
      , r = Ak({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , o = r[0].inst
      , s = r[1];
    return Lk(function() {
        o.value = n,
        o.getSnapshot = t,
        ru(o) && s({
            inst: o
        })
    }, [e, n, t]),
    Dk(function() {
        return ru(o) && s({
            inst: o
        }),
        e(function() {
            ru(o) && s({
                inst: o
            })
        })
    }, [e]),
    Fk(n),
    n
}
function ru(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ok(e, n)
    } catch {
        return !0
    }
}
function $k(e, t) {
    return t()
}
var Bk = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? $k : zk;
S0.useSyncExternalStore = Oo.useSyncExternalStore !== void 0 ? Oo.useSyncExternalStore : Bk;
w0.exports = S0;
var Uk = w0.exports;
function Vk() {
    return Uk.useSyncExternalStore(Hk, () => !0, () => !1)
}
function Hk() {
    return () => {}
}
var Yd = "Avatar"
  , [Wk,OR] = vn(Yd)
  , [Kk,C0] = Wk(Yd)
  , E0 = d.forwardRef( (e, t) => {
    const {__scopeAvatar: n, ...r} = e
      , [o,s] = d.useState("idle");
    return c.jsx(Kk, {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: s,
        children: c.jsx(Z.span, {
            ...r,
            ref: t
        })
    })
}
);
E0.displayName = Yd;
var b0 = "AvatarImage"
  , N0 = d.forwardRef( (e, t) => {
    const {__scopeAvatar: n, src: r, onLoadingStatusChange: o= () => {}
    , ...s} = e
      , i = C0(b0, n)
      , a = Gk(r, s)
      , l = Ge(u => {
        o(u),
        i.onImageLoadingStatusChange(u)
    }
    );
    return ke( () => {
        a !== "idle" && l(a)
    }
    , [a, l]),
    a === "loaded" ? c.jsx(Z.img, {
        ...s,
        ref: t,
        src: r
    }) : null
}
);
N0.displayName = b0;
var P0 = "AvatarFallback"
  , k0 = d.forwardRef( (e, t) => {
    const {__scopeAvatar: n, delayMs: r, ...o} = e
      , s = C0(P0, n)
      , [i,a] = d.useState(r === void 0);
    return d.useEffect( () => {
        if (r !== void 0) {
            const l = window.setTimeout( () => a(!0), r);
            return () => window.clearTimeout(l)
        }
    }
    , [r]),
    i && s.imageLoadingStatus !== "loaded" ? c.jsx(Z.span, {
        ...o,
        ref: t
    }) : null
}
);
k0.displayName = P0;
function mh(e, t) {
    return e ? t ? (e.src !== t && (e.src = t),
    e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
}
function Gk(e, {referrerPolicy: t, crossOrigin: n}) {
    const r = Vk()
      , o = d.useRef(null)
      , s = r ? (o.current || (o.current = new window.Image),
    o.current) : null
      , [i,a] = d.useState( () => mh(s, e));
    return ke( () => {
        a(mh(s, e))
    }
    , [s, e]),
    ke( () => {
        const l = p => () => {
            a(p)
        }
        ;
        if (!s)
            return;
        const u = l("loaded")
          , f = l("error");
        return s.addEventListener("load", u),
        s.addEventListener("error", f),
        t && (s.referrerPolicy = t),
        typeof n == "string" && (s.crossOrigin = n),
        () => {
            s.removeEventListener("load", u),
            s.removeEventListener("error", f)
        }
    }
    , [s, n, t]),
    i
}
var T0 = E0
  , R0 = N0
  , j0 = k0;
const M0 = d.forwardRef( ({className: e, ...t}, n) => c.jsx(T0, {
    ref: n,
    className: ee("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
}));
M0.displayName = T0.displayName;
const Qk = d.forwardRef( ({className: e, ...t}, n) => c.jsx(R0, {
    ref: n,
    className: ee("aspect-square h-full w-full", e),
    ...t
}));
Qk.displayName = R0.displayName;
const _0 = d.forwardRef( ({className: e, ...t}, n) => c.jsx(j0, {
    ref: n,
    className: ee("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
}));
_0.displayName = j0.displayName;
var ou = "rovingFocusGroup.onEntryFocus"
  , Yk = {
    bubbles: !1,
    cancelable: !0
}
  , ni = "RovingFocusGroup"
  , [wc,I0,Xk] = Qa(ni)
  , [qk,O0] = vn(ni, [Xk])
  , [Zk,Jk] = qk(ni)
  , A0 = d.forwardRef( (e, t) => c.jsx(wc.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: c.jsx(wc.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: c.jsx(eT, {
            ...e,
            ref: t
        })
    })
}));
A0.displayName = ni;
var eT = d.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: r, loop: o=!1, dir: s, currentTabStopId: i, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: f=!1, ...p} = e
      , m = d.useRef(null)
      , h = fe(t, m)
      , S = Wd(s)
      , [v,w] = Ls({
        prop: i,
        defaultProp: a ?? null,
        onChange: l,
        caller: ni
    })
      , [y,g] = d.useState(!1)
      , x = Ge(u)
      , C = I0(n)
      , E = d.useRef(!1)
      , [P,b] = d.useState(0);
    return d.useEffect( () => {
        const T = m.current;
        if (T)
            return T.addEventListener(ou, x),
            () => T.removeEventListener(ou, x)
    }
    , [x]),
    c.jsx(Zk, {
        scope: n,
        orientation: r,
        dir: S,
        loop: o,
        currentTabStopId: v,
        onItemFocus: d.useCallback(T => w(T), [w]),
        onItemShiftTab: d.useCallback( () => g(!0), []),
        onFocusableItemAdd: d.useCallback( () => b(T => T + 1), []),
        onFocusableItemRemove: d.useCallback( () => b(T => T - 1), []),
        children: c.jsx(Z.div, {
            tabIndex: y || P === 0 ? -1 : 0,
            "data-orientation": r,
            ...p,
            ref: h,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: z(e.onMouseDown, () => {
                E.current = !0
            }
            ),
            onFocus: z(e.onFocus, T => {
                const M = !E.current;
                if (T.target === T.currentTarget && M && !y) {
                    const j = new CustomEvent(ou,Yk);
                    if (T.currentTarget.dispatchEvent(j),
                    !j.defaultPrevented) {
                        const U = C().filter(F => F.focusable)
                          , D = U.find(F => F.active)
                          , W = U.find(F => F.id === v)
                          , K = [D, W, ...U].filter(Boolean).map(F => F.ref.current);
                        F0(K, f)
                    }
                }
                E.current = !1
            }
            ),
            onBlur: z(e.onBlur, () => g(!1))
        })
    })
}
)
  , D0 = "RovingFocusGroupItem"
  , L0 = d.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: r=!0, active: o=!1, tabStopId: s, children: i, ...a} = e
      , l = Mo()
      , u = s || l
      , f = Jk(D0, n)
      , p = f.currentTabStopId === u
      , m = I0(n)
      , {onFocusableItemAdd: h, onFocusableItemRemove: S, currentTabStopId: v} = f;
    return d.useEffect( () => {
        if (r)
            return h(),
            () => S()
    }
    , [r, h, S]),
    c.jsx(wc.ItemSlot, {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: c.jsx(Z.span, {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...a,
            ref: t,
            onMouseDown: z(e.onMouseDown, w => {
                r ? f.onItemFocus(u) : w.preventDefault()
            }
            ),
            onFocus: z(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: z(e.onKeyDown, w => {
                if (w.key === "Tab" && w.shiftKey) {
                    f.onItemShiftTab();
                    return
                }
                if (w.target !== w.currentTarget)
                    return;
                const y = rT(w, f.orientation, f.dir);
                if (y !== void 0) {
                    if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey)
                        return;
                    w.preventDefault();
                    let x = m().filter(C => C.focusable).map(C => C.ref.current);
                    if (y === "last")
                        x.reverse();
                    else if (y === "prev" || y === "next") {
                        y === "prev" && x.reverse();
                        const C = x.indexOf(w.currentTarget);
                        x = f.loop ? oT(x, C + 1) : x.slice(C + 1)
                    }
                    setTimeout( () => F0(x))
                }
            }
            ),
            children: typeof i == "function" ? i({
                isCurrentTabStop: p,
                hasTabStop: v != null
            }) : i
        })
    })
}
);
L0.displayName = D0;
var tT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function nT(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function rT(e, t, n) {
    const r = nT(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
        return tT[r]
}
function F0(e, t=!1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function oT(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var sT = A0
  , iT = L0
  , Sc = ["Enter", " "]
  , aT = ["ArrowDown", "PageUp", "Home"]
  , z0 = ["ArrowUp", "PageDown", "End"]
  , lT = [...aT, ...z0]
  , uT = {
    ltr: [...Sc, "ArrowRight"],
    rtl: [...Sc, "ArrowLeft"]
}
  , cT = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
}
  , ri = "Menu"
  , [Hs,dT,fT] = Qa(ri)
  , [Or,$0] = vn(ri, [fT, Bo, O0])
  , cl = Bo()
  , B0 = O0()
  , [pT,Ar] = Or(ri)
  , [hT,oi] = Or(ri)
  , U0 = e => {
    const {__scopeMenu: t, open: n=!1, children: r, dir: o, onOpenChange: s, modal: i=!0} = e
      , a = cl(t)
      , [l,u] = d.useState(null)
      , f = d.useRef(!1)
      , p = Ge(s)
      , m = Wd(o);
    return d.useEffect( () => {
        const h = () => {
            f.current = !0,
            document.addEventListener("pointerdown", S, {
                capture: !0,
                once: !0
            }),
            document.addEventListener("pointermove", S, {
                capture: !0,
                once: !0
            })
        }
          , S = () => f.current = !1;
        return document.addEventListener("keydown", h, {
            capture: !0
        }),
        () => {
            document.removeEventListener("keydown", h, {
                capture: !0
            }),
            document.removeEventListener("pointerdown", S, {
                capture: !0
            }),
            document.removeEventListener("pointermove", S, {
                capture: !0
            })
        }
    }
    , []),
    c.jsx(Yg, {
        ...a,
        children: c.jsx(pT, {
            scope: t,
            open: n,
            onOpenChange: p,
            content: l,
            onContentChange: u,
            children: c.jsx(hT, {
                scope: t,
                onClose: d.useCallback( () => p(!1), [p]),
                isUsingKeyboardRef: f,
                dir: m,
                modal: i,
                children: r
            })
        })
    })
}
;
U0.displayName = ri;
var mT = "MenuAnchor"
  , Xd = d.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e
      , o = cl(n);
    return c.jsx(Id, {
        ...o,
        ...r,
        ref: t
    })
}
);
Xd.displayName = mT;
var qd = "MenuPortal"
  , [vT,V0] = Or(qd, {
    forceMount: void 0
})
  , H0 = e => {
    const {__scopeMenu: t, forceMount: n, children: r, container: o} = e
      , s = Ar(qd, t);
    return c.jsx(vT, {
        scope: t,
        forceMount: n,
        children: c.jsx(_r, {
            present: n || s.open,
            children: c.jsx(Ya, {
                asChild: !0,
                container: o,
                children: r
            })
        })
    })
}
;
H0.displayName = qd;
var yt = "MenuContent"
  , [gT,Zd] = Or(yt)
  , W0 = d.forwardRef( (e, t) => {
    const n = V0(yt, e.__scopeMenu)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = Ar(yt, e.__scopeMenu)
      , i = oi(yt, e.__scopeMenu);
    return c.jsx(Hs.Provider, {
        scope: e.__scopeMenu,
        children: c.jsx(_r, {
            present: r || s.open,
            children: c.jsx(Hs.Slot, {
                scope: e.__scopeMenu,
                children: i.modal ? c.jsx(yT, {
                    ...o,
                    ref: t
                }) : c.jsx(xT, {
                    ...o,
                    ref: t
                })
            })
        })
    })
}
)
  , yT = d.forwardRef( (e, t) => {
    const n = Ar(yt, e.__scopeMenu)
      , r = d.useRef(null)
      , o = fe(t, r);
    return d.useEffect( () => {
        const s = r.current;
        if (s)
            return ky(s)
    }
    , []),
    c.jsx(Jd, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: z(e.onFocusOutside, s => s.preventDefault(), {
            checkForDefaultPrevented: !1
        }),
        onDismiss: () => n.onOpenChange(!1)
    })
}
)
  , xT = d.forwardRef( (e, t) => {
    const n = Ar(yt, e.__scopeMenu);
    return c.jsx(Jd, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1)
    })
}
)
  , wT = jo("MenuContent.ScrollLock")
  , Jd = d.forwardRef( (e, t) => {
    const {__scopeMenu: n, loop: r=!1, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: i, disableOutsidePointerEvents: a, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: f, onFocusOutside: p, onInteractOutside: m, onDismiss: h, disableOutsideScroll: S, ...v} = e
      , w = Ar(yt, n)
      , y = oi(yt, n)
      , g = cl(n)
      , x = B0(n)
      , C = dT(n)
      , [E,P] = d.useState(null)
      , b = d.useRef(null)
      , T = fe(t, b, w.onContentChange)
      , M = d.useRef(0)
      , j = d.useRef("")
      , U = d.useRef(0)
      , D = d.useRef(null)
      , W = d.useRef("right")
      , I = d.useRef(0)
      , K = S ? Gd : d.Fragment
      , F = S ? {
        as: wT,
        allowPinchZoom: !0
    } : void 0
      , H = N => {
        var L, oe;
        const O = j.current + N
          , V = C().filter(se => !se.disabled)
          , B = document.activeElement
          , Q = (L = V.find(se => se.ref.current === B)) == null ? void 0 : L.textValue
          , G = V.map(se => se.textValue)
          , ue = _T(G, O, Q)
          , ce = (oe = V.find(se => se.textValue === ue)) == null ? void 0 : oe.ref.current;
        (function se(te) {
            j.current = te,
            window.clearTimeout(M.current),
            te !== "" && (M.current = window.setTimeout( () => se(""), 1e3))
        }
        )(O),
        ce && setTimeout( () => ce.focus())
    }
    ;
    d.useEffect( () => () => window.clearTimeout(M.current), []),
    by();
    const k = d.useCallback(N => {
        var V, B;
        return W.current === ((V = D.current) == null ? void 0 : V.side) && OT(N, (B = D.current) == null ? void 0 : B.area)
    }
    , []);
    return c.jsx(gT, {
        scope: n,
        searchRef: j,
        onItemEnter: d.useCallback(N => {
            k(N) && N.preventDefault()
        }
        , [k]),
        onItemLeave: d.useCallback(N => {
            var O;
            k(N) || ((O = b.current) == null || O.focus(),
            P(null))
        }
        , [k]),
        onTriggerLeave: d.useCallback(N => {
            k(N) && N.preventDefault()
        }
        , [k]),
        pointerGraceTimerRef: U,
        onPointerGraceIntentChange: d.useCallback(N => {
            D.current = N
        }
        , []),
        children: c.jsx(K, {
            ...F,
            children: c.jsx(Kd, {
                asChild: !0,
                trapped: o,
                onMountAutoFocus: z(s, N => {
                    var O;
                    N.preventDefault(),
                    (O = b.current) == null || O.focus({
                        preventScroll: !0
                    })
                }
                ),
                onUnmountAutoFocus: i,
                children: c.jsx(Js, {
                    asChild: !0,
                    disableOutsidePointerEvents: a,
                    onEscapeKeyDown: u,
                    onPointerDownOutside: f,
                    onFocusOutside: p,
                    onInteractOutside: m,
                    onDismiss: h,
                    children: c.jsx(sT, {
                        asChild: !0,
                        ...x,
                        dir: y.dir,
                        orientation: "vertical",
                        loop: r,
                        currentTabStopId: E,
                        onCurrentTabStopIdChange: P,
                        onEntryFocus: z(l, N => {
                            y.isUsingKeyboardRef.current || N.preventDefault()
                        }
                        ),
                        preventScrollOnEntryFocus: !0,
                        children: c.jsx(Od, {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": ax(w.open),
                            "data-radix-menu-content": "",
                            dir: y.dir,
                            ...g,
                            ...v,
                            ref: T,
                            style: {
                                outline: "none",
                                ...v.style
                            },
                            onKeyDown: z(v.onKeyDown, N => {
                                const V = N.target.closest("[data-radix-menu-content]") === N.currentTarget
                                  , B = N.ctrlKey || N.altKey || N.metaKey
                                  , Q = N.key.length === 1;
                                V && (N.key === "Tab" && N.preventDefault(),
                                !B && Q && H(N.key));
                                const G = b.current;
                                if (N.target !== G || !lT.includes(N.key))
                                    return;
                                N.preventDefault();
                                const ce = C().filter(L => !L.disabled).map(L => L.ref.current);
                                z0.includes(N.key) && ce.reverse(),
                                jT(ce)
                            }
                            ),
                            onBlur: z(e.onBlur, N => {
                                N.currentTarget.contains(N.target) || (window.clearTimeout(M.current),
                                j.current = "")
                            }
                            ),
                            onPointerMove: z(e.onPointerMove, Ws(N => {
                                const O = N.target
                                  , V = I.current !== N.clientX;
                                if (N.currentTarget.contains(O) && V) {
                                    const B = N.clientX > I.current ? "right" : "left";
                                    W.current = B,
                                    I.current = N.clientX
                                }
                            }
                            ))
                        })
                    })
                })
            })
        })
    })
}
);
W0.displayName = yt;
var ST = "MenuGroup"
  , ef = d.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e;
    return c.jsx(Z.div, {
        role: "group",
        ...r,
        ref: t
    })
}
);
ef.displayName = ST;
var CT = "MenuLabel"
  , K0 = d.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e;
    return c.jsx(Z.div, {
        ...r,
        ref: t
    })
}
);
K0.displayName = CT;
var Ra = "MenuItem"
  , vh = "menu.itemSelect"
  , dl = d.forwardRef( (e, t) => {
    const {disabled: n=!1, onSelect: r, ...o} = e
      , s = d.useRef(null)
      , i = oi(Ra, e.__scopeMenu)
      , a = Zd(Ra, e.__scopeMenu)
      , l = fe(t, s)
      , u = d.useRef(!1)
      , f = () => {
        const p = s.current;
        if (!n && p) {
            const m = new CustomEvent(vh,{
                bubbles: !0,
                cancelable: !0
            });
            p.addEventListener(vh, h => r == null ? void 0 : r(h), {
                once: !0
            }),
            yd(p, m),
            m.defaultPrevented ? u.current = !1 : i.onClose()
        }
    }
    ;
    return c.jsx(G0, {
        ...o,
        ref: l,
        disabled: n,
        onClick: z(e.onClick, f),
        onPointerDown: p => {
            var m;
            (m = e.onPointerDown) == null || m.call(e, p),
            u.current = !0
        }
        ,
        onPointerUp: z(e.onPointerUp, p => {
            var m;
            u.current || (m = p.currentTarget) == null || m.click()
        }
        ),
        onKeyDown: z(e.onKeyDown, p => {
            const m = a.searchRef.current !== "";
            n || m && p.key === " " || Sc.includes(p.key) && (p.currentTarget.click(),
            p.preventDefault())
        }
        )
    })
}
);
dl.displayName = Ra;
var G0 = d.forwardRef( (e, t) => {
    const {__scopeMenu: n, disabled: r=!1, textValue: o, ...s} = e
      , i = Zd(Ra, n)
      , a = B0(n)
      , l = d.useRef(null)
      , u = fe(t, l)
      , [f,p] = d.useState(!1)
      , [m,h] = d.useState("");
    return d.useEffect( () => {
        const S = l.current;
        S && h((S.textContent ?? "").trim())
    }
    , [s.children]),
    c.jsx(Hs.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: c.jsx(iT, {
            asChild: !0,
            ...a,
            focusable: !r,
            children: c.jsx(Z.div, {
                role: "menuitem",
                "data-highlighted": f ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                ...s,
                ref: u,
                onPointerMove: z(e.onPointerMove, Ws(S => {
                    r ? i.onItemLeave(S) : (i.onItemEnter(S),
                    S.defaultPrevented || S.currentTarget.focus({
                        preventScroll: !0
                    }))
                }
                )),
                onPointerLeave: z(e.onPointerLeave, Ws(S => i.onItemLeave(S))),
                onFocus: z(e.onFocus, () => p(!0)),
                onBlur: z(e.onBlur, () => p(!1))
            })
        })
    })
}
)
  , ET = "MenuCheckboxItem"
  , Q0 = d.forwardRef( (e, t) => {
    const {checked: n=!1, onCheckedChange: r, ...o} = e;
    return c.jsx(J0, {
        scope: e.__scopeMenu,
        checked: n,
        children: c.jsx(dl, {
            role: "menuitemcheckbox",
            "aria-checked": ja(n) ? "mixed" : n,
            ...o,
            ref: t,
            "data-state": nf(n),
            onSelect: z(o.onSelect, () => r == null ? void 0 : r(ja(n) ? !0 : !n), {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
Q0.displayName = ET;
var Y0 = "MenuRadioGroup"
  , [bT,NT] = Or(Y0, {
    value: void 0,
    onValueChange: () => {}
})
  , X0 = d.forwardRef( (e, t) => {
    const {value: n, onValueChange: r, ...o} = e
      , s = Ge(r);
    return c.jsx(bT, {
        scope: e.__scopeMenu,
        value: n,
        onValueChange: s,
        children: c.jsx(ef, {
            ...o,
            ref: t
        })
    })
}
);
X0.displayName = Y0;
var q0 = "MenuRadioItem"
  , Z0 = d.forwardRef( (e, t) => {
    const {value: n, ...r} = e
      , o = NT(q0, e.__scopeMenu)
      , s = n === o.value;
    return c.jsx(J0, {
        scope: e.__scopeMenu,
        checked: s,
        children: c.jsx(dl, {
            role: "menuitemradio",
            "aria-checked": s,
            ...r,
            ref: t,
            "data-state": nf(s),
            onSelect: z(r.onSelect, () => {
                var i;
                return (i = o.onValueChange) == null ? void 0 : i.call(o, n)
            }
            , {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
Z0.displayName = q0;
var tf = "MenuItemIndicator"
  , [J0,PT] = Or(tf, {
    checked: !1
})
  , ex = d.forwardRef( (e, t) => {
    const {__scopeMenu: n, forceMount: r, ...o} = e
      , s = PT(tf, n);
    return c.jsx(_r, {
        present: r || ja(s.checked) || s.checked === !0,
        children: c.jsx(Z.span, {
            ...o,
            ref: t,
            "data-state": nf(s.checked)
        })
    })
}
);
ex.displayName = tf;
var kT = "MenuSeparator"
  , tx = d.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e;
    return c.jsx(Z.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
    })
}
);
tx.displayName = kT;
var TT = "MenuArrow"
  , nx = d.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e
      , o = cl(n);
    return c.jsx(Ad, {
        ...o,
        ...r,
        ref: t
    })
}
);
nx.displayName = TT;
var RT = "MenuSub"
  , [AR,rx] = Or(RT)
  , us = "MenuSubTrigger"
  , ox = d.forwardRef( (e, t) => {
    const n = Ar(us, e.__scopeMenu)
      , r = oi(us, e.__scopeMenu)
      , o = rx(us, e.__scopeMenu)
      , s = Zd(us, e.__scopeMenu)
      , i = d.useRef(null)
      , {pointerGraceTimerRef: a, onPointerGraceIntentChange: l} = s
      , u = {
        __scopeMenu: e.__scopeMenu
    }
      , f = d.useCallback( () => {
        i.current && window.clearTimeout(i.current),
        i.current = null
    }
    , []);
    return d.useEffect( () => f, [f]),
    d.useEffect( () => {
        const p = a.current;
        return () => {
            window.clearTimeout(p),
            l(null)
        }
    }
    , [a, l]),
    c.jsx(Xd, {
        asChild: !0,
        ...u,
        children: c.jsx(G0, {
            id: o.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": n.open,
            "aria-controls": o.contentId,
            "data-state": ax(n.open),
            ...e,
            ref: Ga(t, o.onTriggerChange),
            onClick: p => {
                var m;
                (m = e.onClick) == null || m.call(e, p),
                !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(),
                n.open || n.onOpenChange(!0))
            }
            ,
            onPointerMove: z(e.onPointerMove, Ws(p => {
                s.onItemEnter(p),
                !p.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null),
                i.current = window.setTimeout( () => {
                    n.onOpenChange(!0),
                    f()
                }
                , 100))
            }
            )),
            onPointerLeave: z(e.onPointerLeave, Ws(p => {
                var h, S;
                f();
                const m = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
                if (m) {
                    const v = (S = n.content) == null ? void 0 : S.dataset.side
                      , w = v === "right"
                      , y = w ? -5 : 5
                      , g = m[w ? "left" : "right"]
                      , x = m[w ? "right" : "left"];
                    s.onPointerGraceIntentChange({
                        area: [{
                            x: p.clientX + y,
                            y: p.clientY
                        }, {
                            x: g,
                            y: m.top
                        }, {
                            x,
                            y: m.top
                        }, {
                            x,
                            y: m.bottom
                        }, {
                            x: g,
                            y: m.bottom
                        }],
                        side: v
                    }),
                    window.clearTimeout(a.current),
                    a.current = window.setTimeout( () => s.onPointerGraceIntentChange(null), 300)
                } else {
                    if (s.onTriggerLeave(p),
                    p.defaultPrevented)
                        return;
                    s.onPointerGraceIntentChange(null)
                }
            }
            )),
            onKeyDown: z(e.onKeyDown, p => {
                var h;
                const m = s.searchRef.current !== "";
                e.disabled || m && p.key === " " || uT[r.dir].includes(p.key) && (n.onOpenChange(!0),
                (h = n.content) == null || h.focus(),
                p.preventDefault())
            }
            )
        })
    })
}
);
ox.displayName = us;
var sx = "MenuSubContent"
  , ix = d.forwardRef( (e, t) => {
    const n = V0(yt, e.__scopeMenu)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = Ar(yt, e.__scopeMenu)
      , i = oi(yt, e.__scopeMenu)
      , a = rx(sx, e.__scopeMenu)
      , l = d.useRef(null)
      , u = fe(t, l);
    return c.jsx(Hs.Provider, {
        scope: e.__scopeMenu,
        children: c.jsx(_r, {
            present: r || s.open,
            children: c.jsx(Hs.Slot, {
                scope: e.__scopeMenu,
                children: c.jsx(Jd, {
                    id: a.contentId,
                    "aria-labelledby": a.triggerId,
                    ...o,
                    ref: u,
                    align: "start",
                    side: i.dir === "rtl" ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: f => {
                        var p;
                        i.isUsingKeyboardRef.current && ((p = l.current) == null || p.focus()),
                        f.preventDefault()
                    }
                    ,
                    onCloseAutoFocus: f => f.preventDefault(),
                    onFocusOutside: z(e.onFocusOutside, f => {
                        f.target !== a.trigger && s.onOpenChange(!1)
                    }
                    ),
                    onEscapeKeyDown: z(e.onEscapeKeyDown, f => {
                        i.onClose(),
                        f.preventDefault()
                    }
                    ),
                    onKeyDown: z(e.onKeyDown, f => {
                        var h;
                        const p = f.currentTarget.contains(f.target)
                          , m = cT[i.dir].includes(f.key);
                        p && m && (s.onOpenChange(!1),
                        (h = a.trigger) == null || h.focus(),
                        f.preventDefault())
                    }
                    )
                })
            })
        })
    })
}
);
ix.displayName = sx;
function ax(e) {
    return e ? "open" : "closed"
}
function ja(e) {
    return e === "indeterminate"
}
function nf(e) {
    return ja(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
function jT(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(),
        document.activeElement !== t))
            return
}
function MT(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
function _T(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
      , s = n ? e.indexOf(n) : -1;
    let i = MT(e, Math.max(s, 0));
    o.length === 1 && (i = i.filter(u => u !== n));
    const l = i.find(u => u.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0
}
function IT(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s]
          , l = t[i]
          , u = a.x
          , f = a.y
          , p = l.x
          , m = l.y;
        f > r != m > r && n < (p - u) * (r - f) / (m - f) + u && (o = !o)
    }
    return o
}
function OT(e, t) {
    if (!t)
        return !1;
    const n = {
        x: e.clientX,
        y: e.clientY
    };
    return IT(n, t)
}
function Ws(e) {
    return t => t.pointerType === "mouse" ? e(t) : void 0
}
var AT = U0
  , DT = Xd
  , LT = H0
  , FT = W0
  , zT = ef
  , $T = K0
  , BT = dl
  , UT = Q0
  , VT = X0
  , HT = Z0
  , WT = ex
  , KT = tx
  , GT = nx
  , QT = ox
  , YT = ix
  , fl = "DropdownMenu"
  , [XT,DR] = vn(fl, [$0])
  , Xe = $0()
  , [qT,lx] = XT(fl)
  , ux = e => {
    const {__scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: s, onOpenChange: i, modal: a=!0} = e
      , l = Xe(t)
      , u = d.useRef(null)
      , [f,p] = Ls({
        prop: o,
        defaultProp: s ?? !1,
        onChange: i,
        caller: fl
    });
    return c.jsx(qT, {
        scope: t,
        triggerId: Mo(),
        triggerRef: u,
        contentId: Mo(),
        open: f,
        onOpenChange: p,
        onOpenToggle: d.useCallback( () => p(m => !m), [p]),
        modal: a,
        children: c.jsx(AT, {
            ...l,
            open: f,
            onOpenChange: p,
            dir: r,
            modal: a,
            children: n
        })
    })
}
;
ux.displayName = fl;
var cx = "DropdownMenuTrigger"
  , dx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, disabled: r=!1, ...o} = e
      , s = lx(cx, n)
      , i = Xe(n);
    return c.jsx(DT, {
        asChild: !0,
        ...i,
        children: c.jsx(Z.button, {
            type: "button",
            id: s.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": s.open,
            "aria-controls": s.open ? s.contentId : void 0,
            "data-state": s.open ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: Ga(t, s.triggerRef),
            onPointerDown: z(e.onPointerDown, a => {
                !r && a.button === 0 && a.ctrlKey === !1 && (s.onOpenToggle(),
                s.open || a.preventDefault())
            }
            ),
            onKeyDown: z(e.onKeyDown, a => {
                r || (["Enter", " "].includes(a.key) && s.onOpenToggle(),
                a.key === "ArrowDown" && s.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault())
            }
            )
        })
    })
}
);
dx.displayName = cx;
var ZT = "DropdownMenuPortal"
  , fx = e => {
    const {__scopeDropdownMenu: t, ...n} = e
      , r = Xe(t);
    return c.jsx(LT, {
        ...r,
        ...n
    })
}
;
fx.displayName = ZT;
var px = "DropdownMenuContent"
  , hx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = lx(px, n)
      , s = Xe(n)
      , i = d.useRef(!1);
    return c.jsx(FT, {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: z(e.onCloseAutoFocus, a => {
            var l;
            i.current || (l = o.triggerRef.current) == null || l.focus(),
            i.current = !1,
            a.preventDefault()
        }
        ),
        onInteractOutside: z(e.onInteractOutside, a => {
            const l = a.detail.originalEvent
              , u = l.button === 0 && l.ctrlKey === !0
              , f = l.button === 2 || u;
            (!o.modal || f) && (i.current = !0)
        }
        ),
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
hx.displayName = px;
var JT = "DropdownMenuGroup"
  , eR = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(zT, {
        ...o,
        ...r,
        ref: t
    })
}
);
eR.displayName = JT;
var tR = "DropdownMenuLabel"
  , mx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx($T, {
        ...o,
        ...r,
        ref: t
    })
}
);
mx.displayName = tR;
var nR = "DropdownMenuItem"
  , vx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(BT, {
        ...o,
        ...r,
        ref: t
    })
}
);
vx.displayName = nR;
var rR = "DropdownMenuCheckboxItem"
  , gx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(UT, {
        ...o,
        ...r,
        ref: t
    })
}
);
gx.displayName = rR;
var oR = "DropdownMenuRadioGroup"
  , sR = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(VT, {
        ...o,
        ...r,
        ref: t
    })
}
);
sR.displayName = oR;
var iR = "DropdownMenuRadioItem"
  , yx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(HT, {
        ...o,
        ...r,
        ref: t
    })
}
);
yx.displayName = iR;
var aR = "DropdownMenuItemIndicator"
  , xx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(WT, {
        ...o,
        ...r,
        ref: t
    })
}
);
xx.displayName = aR;
var lR = "DropdownMenuSeparator"
  , wx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(KT, {
        ...o,
        ...r,
        ref: t
    })
}
);
wx.displayName = lR;
var uR = "DropdownMenuArrow"
  , cR = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(GT, {
        ...o,
        ...r,
        ref: t
    })
}
);
cR.displayName = uR;
var dR = "DropdownMenuSubTrigger"
  , Sx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(QT, {
        ...o,
        ...r,
        ref: t
    })
}
);
Sx.displayName = dR;
var fR = "DropdownMenuSubContent"
  , Cx = d.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Xe(n);
    return c.jsx(YT, {
        ...o,
        ...r,
        ref: t,
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
Cx.displayName = fR;
var pR = ux
  , hR = dx
  , mR = fx
  , Ex = hx
  , bx = mx
  , Nx = vx
  , Px = gx
  , kx = yx
  , Tx = xx
  , Rx = wx
  , jx = Sx
  , Mx = Cx;
const vR = pR
  , gR = hR
  , yR = d.forwardRef( ({className: e, inset: t, children: n, ...r}, o) => c.jsxs(jx, {
    ref: o,
    className: ee("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", t && "pl-8", e),
    ...r,
    children: [n, c.jsx(hC, {
        className: "ml-auto h-4 w-4"
    })]
}));
yR.displayName = jx.displayName;
const xR = d.forwardRef( ({className: e, ...t}, n) => c.jsx(Mx, {
    ref: n,
    className: ee("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...t
}));
xR.displayName = Mx.displayName;
const _x = d.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => c.jsx(mR, {
    children: c.jsx(Ex, {
        ref: r,
        sideOffset: t,
        className: ee("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    })
}));
_x.displayName = Ex.displayName;
const Ix = d.forwardRef( ({className: e, inset: t, ...n}, r) => c.jsx(Nx, {
    ref: r,
    className: ee("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", e),
    ...n
}));
Ix.displayName = Nx.displayName;
const wR = d.forwardRef( ({className: e, children: t, checked: n, ...r}, o) => c.jsxs(Px, {
    ref: o,
    className: ee("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    checked: n,
    ...r,
    children: [c.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(Tx, {
            children: c.jsx(mg, {
                className: "h-4 w-4"
            })
        })
    }), t]
}));
wR.displayName = Px.displayName;
const SR = d.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(kx, {
    ref: r,
    className: ee("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...n,
    children: [c.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(Tx, {
            children: c.jsx(vC, {
                className: "h-2 w-2 fill-current"
            })
        })
    }), t]
}));
SR.displayName = kx.displayName;
const CR = d.forwardRef( ({className: e, inset: t, ...n}, r) => c.jsx(bx, {
    ref: r,
    className: ee("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
}));
CR.displayName = bx.displayName;
const ER = d.forwardRef( ({className: e, ...t}, n) => c.jsx(Rx, {
    ref: n,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
ER.displayName = Rx.displayName;
const bR = ({onMenuToggle: e}) => {
    var i;
    const {user: t, signOut: n} = Vd()
      , [r,o] = d.useState(!1)
      , s = () => {
        o(!r),
        e()
    }
    ;
    return c.jsx("header", {
        className: "fixed top-0 left-0 right-0 z-50 glass-header",
        children: c.jsxs("div", {
            className: "container mx-auto px-4 py-4 flex items-center justify-between",
            children: [c.jsxs("div", {
                className: "flex items-center gap-4",
                children: [t && c.jsx(sn, {
                    variant: "ghost",
                    size: "icon",
                    onClick: s,
                    className: "md:hidden",
                    children: r ? c.jsx(Cd, {
                        className: "h-5 w-5"
                    }) : c.jsx(wC, {
                        className: "h-5 w-5"
                    })
                }), c.jsxs(no, {
                    to: "/",
                    className: "flex items-center gap-3 group",
                    children: [c.jsx(Hd, {
                        size: 40,
                        className: "text-primary group-hover:animate-pulse transition-all duration-300"
                    }), c.jsx("h1", {
                        className: "text-2xl md:text-3xl font-bold text-gradient-primary tracking-tight group-hover:scale-105 transition-transform duration-300",
                        children: "Fefox Egypt"
                    })]
                })]
            }), c.jsx("div", {
                className: "flex items-center gap-4",
                children: t ? c.jsxs(vR, {
                    children: [c.jsx(gR, {
                        asChild: !0,
                        children: c.jsxs(sn, {
                            variant: "ghost",
                            className: "flex items-center gap-2 p-2",
                            children: [c.jsx(M0, {
                                className: "h-8 w-8",
                                children: c.jsx(_0, {
                                    children: (i = t.discord_username) == null ? void 0 : i.charAt(0).toUpperCase()
                                })
                            }), c.jsx("span", {
                                className: "hidden md:inline text-sm font-medium",
                                children: t.discord_username
                            })]
                        })
                    }), c.jsx(_x, {
                        align: "end",
                        children: c.jsxs(Ix, {
                            onClick: n,
                            children: [c.jsx(xC, {
                                className: "h-4 w-4 mr-2"
                            }), "Sign Out"]
                        })
                    })]
                }) : c.jsx("div", {
                    className: "text-sm text-muted-foreground",
                    children: "Enter username on homepage to get started"
                })
            })]
        })
    })
}
  , NR = ({isOpen: e, onClose: t}) => {
    const n = Ir()
      , r = [{
        title: "Rules",
        href: "/rules",
        icon: yC
    }, {
        title: "Create Server",
        href: "/create-server",
        icon: SC
    }];
    return c.jsxs(c.Fragment, {
        children: [e && c.jsx("div", {
            className: "fixed inset-0 bg-black/50 z-40 md:hidden",
            onClick: t
        }), c.jsxs("aside", {
            className: ee("fixed top-0 left-0 z-50 h-full w-64 glass-dark border-r border-border/50 transform transition-transform duration-300 ease-in-out", "md:translate-x-0 md:static md:h-auto md:w-auto md:bg-transparent md:border-0", e ? "translate-x-0" : "-translate-x-full"),
            children: [c.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b border-border/50 md:hidden",
                children: [c.jsx("h2", {
                    className: "text-xl font-bold gradient-primary bg-clip-text text-transparent",
                    children: "Fefox Menu"
                }), c.jsx(sn, {
                    variant: "ghost",
                    size: "icon",
                    onClick: t,
                    className: "hover:bg-primary/10",
                    children: c.jsx(Cd, {
                        className: "h-5 w-5"
                    })
                })]
            }), c.jsx("nav", {
                className: "p-6 space-y-3",
                children: r.map(o => c.jsx(no, {
                    to: o.href,
                    onClick: t,
                    children: c.jsxs(sn, {
                        variant: n.pathname === o.href ? "secondary" : "ghost",
                        className: "w-full justify-start gap-3 h-12 text-base hover:bg-primary/10 hover:scale-105 transition-all duration-200",
                        children: [c.jsx(o.icon, {
                            className: "h-5 w-5"
                        }), o.title]
                    })
                }, o.href))
            })]
        })]
    })
}
  , PR = new GN
  , kR = () => {
    const [e,t] = d.useState(!1);
    return c.jsx(YN, {
        client: PR,
        children: c.jsx(EN, {
            children: c.jsxs(X2, {
                children: [c.jsx(_k, {}), c.jsx(iE, {}), c.jsx(FE, {}), c.jsxs(K2, {
                    children: [c.jsx(bR, {
                        onMenuToggle: () => t(!e)
                    }), c.jsx(NR, {
                        isOpen: e,
                        onClose: () => t(!1)
                    }), c.jsxs(z2, {
                        children: [c.jsx(as, {
                            path: "/",
                            element: c.jsx(nP, {})
                        }), c.jsx(as, {
                            path: "/rules",
                            element: c.jsx(rP, {})
                        }), c.jsx(as, {
                            path: "/create-server",
                            element: c.jsx(jk, {})
                        }), c.jsx(as, {
                            path: "*",
                            element: c.jsx(Mk, {})
                        })]
                    })]
                })]
            })
        })
    })
}
;
zv(document.getElementById("root")).render(c.jsx(kR, {}));
