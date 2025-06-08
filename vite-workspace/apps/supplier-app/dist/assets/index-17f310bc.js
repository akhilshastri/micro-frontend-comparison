import { importShared } from './__federation_fn_import-e40783d0.js';
import SupplierComponent, { j as jsxRuntimeExports, p as pr } from './__federation_expose_SupplierComponent-0aa0d12f.js';
import { r as reactDomExports } from './index-ebe3b9e0.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Supplier App (Vite)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This is the supplier application that exposes federated modules." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Shared Button Component" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(pr, { onClick: () => alert("Button clicked in Supplier App!"), children: "Supplier Button" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Federated Supplier Component" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SupplierComponent, {})
    ] })
  ] });
}

const index = '';

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
