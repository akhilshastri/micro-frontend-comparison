import { importShared } from './__federation_fn_import-e40783d0.js';
import { r as reactExports } from './index-6af61f11.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const we = await importShared('react');

var Z = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function fr() {
  if (Oe)
    return $;
  Oe = 1;
  var k = we, m = Symbol.for("react.element"), E = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, S = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(R, c, C) {
    var p, h = {}, _ = null, Y = null;
    C !== void 0 && (_ = "" + C), c.key !== void 0 && (_ = "" + c.key), c.ref !== void 0 && (Y = c.ref);
    for (p in c)
      y.call(c, p) && !w.hasOwnProperty(p) && (h[p] = c[p]);
    if (R && R.defaultProps)
      for (p in c = R.defaultProps, c)
        h[p] === void 0 && (h[p] = c[p]);
    return { $$typeof: m, type: R, key: _, ref: Y, props: h, _owner: S.current };
  }
  return $.Fragment = E, $.jsx = D, $.jsxs = D, $;
}
Z.exports = fr() ;
var dr = Z.exports;
const pr = ({
  children: k,
  onClick: m,
  variant: E = "primary",
  disabled: y = !1
}) => {
  const S = "px-4 py-2 rounded font-medium transition-colors", w = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100"
  };
  return /* @__PURE__ */ dr.jsx(
    "button",
    {
      className: `${S} ${w[E]}`,
      onClick: m,
      disabled: y,
      style: {
        backgroundColor: E === "primary" ? "#3b82f6" : "#e5e7eb",
        color: E === "primary" ? "white" : "#1f2937",
        padding: "8px 16px",
        borderRadius: "6px",
        border: "none",
        fontWeight: "500",
        cursor: y ? "not-allowed" : "pointer",
        opacity: y ? 0.6 : 1
      },
      children: k
    }
  );
};

const {useState} = await importShared('react');
const SupplierComponent = () => {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    border: "2px solid #3b82f6",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#f8fafc"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Federated Supplier Component" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This component is exposed via Module Federation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Count: ",
      count
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px", marginTop: "12px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(pr, { onClick: () => setCount(count + 1), children: "Increment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        pr,
        {
          variant: "secondary",
          onClick: () => setCount(count - 1),
          children: "Decrement"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        pr,
        {
          variant: "secondary",
          onClick: () => setCount(0),
          children: "Reset"
        }
      )
    ] })
  ] });
};

export { SupplierComponent as default, jsxRuntimeExports as j, pr as p };
