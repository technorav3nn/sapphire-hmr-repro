"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var main_exports = {};
__export(main_exports, {
  UserRoute: () => UserRoute
});
module.exports = __toCommonJS(main_exports);
var import_decorators = require("@sapphire/decorators");
var import_plugin_api = require("@sapphire/plugin-api");
let UserRoute = class extends import_plugin_api.Route {
  [import_plugin_api.methods.GET](_request, response) {
    response.json({ message: "Landing Page!" });
  }
  [import_plugin_api.methods.POST](_request, response) {
    response.json({ message: "Landing Page!" });
  }
};
__name(UserRoute, "UserRoute");
UserRoute = __decorateClass([
  (0, import_decorators.ApplyOptions)({ route: "" })
], UserRoute);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserRoute
});
//# sourceMappingURL=main.js.map