"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_reflect_metadata = require("reflect-metadata");
var import_register = require("@sapphire/plugin-api/register");
var import_register2 = require("@sapphire/plugin-editable-commands/register");
var import_register3 = require("@sapphire/plugin-logger/register");
var import_register4 = require("@sapphire/plugin-hmr/register");
var colorette = __toESM(require("colorette"));
var import_dotenv_cra = require("dotenv-cra");
var import_path = require("path");
var import_util = require("util");
var import_constants = require("./constants");
var import_framework = require("@sapphire/framework");
var _a;
(_a = process.env).NODE_ENV ?? (_a.NODE_ENV = "development");
import_framework.ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(import_framework.RegisterBehavior.BulkOverwrite);
(0, import_dotenv_cra.config)({ path: (0, import_path.join)(import_constants.srcDir, ".env") });
import_util.inspect.defaultOptions.depth = 1;
colorette.createColors({ useColor: true });
//# sourceMappingURL=setup.js.map