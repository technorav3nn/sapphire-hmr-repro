"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ready_exports = {};
__export(ready_exports, {
  UserEvent: () => UserEvent
});
module.exports = __toCommonJS(ready_exports);
var import_decorators = require("@sapphire/decorators");
var import_framework = require("@sapphire/framework");
var import_colorette = require("colorette");
const dev = process.env.NODE_ENV !== "production";
let UserEvent = class extends import_framework.Listener {
  constructor() {
    super(...arguments);
    __publicField(this, "style", dev ? import_colorette.yellow : import_colorette.blue);
  }
  run() {
    this.printBanner();
    this.printStoreDebugInformation();
  }
  printBanner() {
    const success = (0, import_colorette.green)("+");
    const llc = dev ? import_colorette.magentaBright : import_colorette.white;
    const blc = dev ? import_colorette.magenta : import_colorette.blue;
    const line01 = llc("");
    const line02 = llc("");
    const line03 = llc("");
    const pad = " ".repeat(7);
    console.log(
      String.raw`
${line01} ${pad}${blc("1.0.0")}
${line02} ${pad}[${success}] Gateway
${line03}${dev ? ` ${pad}${blc("<")}${llc("/")}${blc(">")} ${llc("DEVELOPMENT MODE")}` : ""}
		`.trim()
    );
  }
  printStoreDebugInformation() {
    const { client, logger } = this.container;
    const stores = [...client.stores.values()];
    const last = stores.pop();
    for (const store of stores)
      logger.info(this.styleStore(store, false));
    logger.info(this.styleStore(last, true));
  }
  styleStore(store, last) {
    return (0, import_colorette.gray)(`${last ? "\u2514\u2500" : "\u251C\u2500"} Loaded ${this.style(store.size.toString().padEnd(3, " "))} ${store.name}.`);
  }
};
__name(UserEvent, "UserEvent");
UserEvent = __decorateClass([
  (0, import_decorators.ApplyOptions)({ once: true })
], UserEvent);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserEvent
});
//# sourceMappingURL=ready.js.map