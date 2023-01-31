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
var mentionPrefixOnly_exports = {};
__export(mentionPrefixOnly_exports, {
  UserEvent: () => UserEvent
});
module.exports = __toCommonJS(mentionPrefixOnly_exports);
var import_framework = require("@sapphire/framework");
class UserEvent extends import_framework.Listener {
  async run(message) {
    const prefix = this.container.client.options.defaultPrefix;
    return message.channel.send(prefix ? `My prefix in this guild is: \`${prefix}\`` : "Cannot find any Prefix for Message-Commands.");
  }
}
__name(UserEvent, "UserEvent");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserEvent
});
//# sourceMappingURL=mentionPrefixOnly.js.map