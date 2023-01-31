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
var messageCommandSuccess_exports = {};
__export(messageCommandSuccess_exports, {
  UserEvent: () => UserEvent
});
module.exports = __toCommonJS(messageCommandSuccess_exports);
var import_framework = require("@sapphire/framework");
var import_colorette = require("colorette");
class UserEvent extends import_framework.Listener {
  run({ message, command }) {
    const shard = this.shard(message.guild?.shardId ?? 0);
    const commandName = this.command(command);
    const author = this.author(message.author);
    const sentAt = message.guild ? this.guild(message.guild) : this.direct();
    this.container.logger.debug(`${shard} - ${commandName} ${author} ${sentAt}`);
  }
  onLoad() {
    this.enabled = this.container.logger.level <= import_framework.LogLevel.Debug;
    return super.onLoad();
  }
  shard(id) {
    return `[${(0, import_colorette.cyan)(id.toString())}]`;
  }
  command(command) {
    return (0, import_colorette.cyan)(command.name);
  }
  author(author) {
    return `${author.username}[${(0, import_colorette.cyan)(author.id)}]`;
  }
  direct() {
    return (0, import_colorette.cyan)("Direct Messages");
  }
  guild(guild) {
    return `${guild.name}[${(0, import_colorette.cyan)(guild.id)}]`;
  }
}
__name(UserEvent, "UserEvent");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserEvent
});
//# sourceMappingURL=messageCommandSuccess.js.map