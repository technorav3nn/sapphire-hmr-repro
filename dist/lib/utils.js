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
var utils_exports = {};
__export(utils_exports, {
  pickRandom: () => pickRandom,
  sendLoadingMessage: () => sendLoadingMessage
});
module.exports = __toCommonJS(utils_exports);
var import_plugin_editable_commands = require("@sapphire/plugin-editable-commands");
var import_discord = require("discord.js");
var import_constants = require("./constants");
function pickRandom(array) {
  const { length } = array;
  return array[Math.floor(Math.random() * length)];
}
__name(pickRandom, "pickRandom");
function sendLoadingMessage(message) {
  return (0, import_plugin_editable_commands.send)(message, { embeds: [new import_discord.EmbedBuilder().setDescription(pickRandom(import_constants.RandomLoadingMessage)).setColor("#FF0000")] });
}
__name(sendLoadingMessage, "sendLoadingMessage");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  pickRandom,
  sendLoadingMessage
});
//# sourceMappingURL=utils.js.map