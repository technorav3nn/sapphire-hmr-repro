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
var env_parser_exports = {};
__export(env_parser_exports, {
  envParseArray: () => envParseArray
});
module.exports = __toCommonJS(env_parser_exports);
var import_utilities = require("@sapphire/utilities");
function envParseArray(key, defaultValue) {
  const value = process.env[key];
  if ((0, import_utilities.isNullishOrEmpty)(value)) {
    if (defaultValue === void 0)
      throw new Error(`[ENV] ${key} - The key must be an array, but is empty or undefined.`);
    return defaultValue;
  }
  return value.split(" ");
}
__name(envParseArray, "envParseArray");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  envParseArray
});
//# sourceMappingURL=env-parser.js.map