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
var ping_exports = {};
__export(ping_exports, {
  UserCommand: () => UserCommand
});
module.exports = __toCommonJS(ping_exports);
var import_decorators = require("@sapphire/decorators");
var import_framework = require("@sapphire/framework");
var import_plugin_editable_commands = require("@sapphire/plugin-editable-commands");
let UserCommand = class extends import_framework.Command {
  async messageRun(message) {
    const msg = await (0, import_plugin_editable_commands.send)(message, "Ping?");
    const content = `Pong!!! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)}ms.`;
    return (0, import_plugin_editable_commands.send)(message, content);
  }
  async chatInputRun(interaction) {
    await interaction.deferReply();
    const int = await interaction.fetchReply();
    const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${(int.editedTimestamp || interaction.createdTimestamp) - (int.editedTimestamp || interaction.createdTimestamp)}ms.`;
    return interaction.editReply(content);
  }
  registerApplicationCommands(registry) {
    registry.registerChatInputCommand(
      {
        name: "ping",
        description: "ping pong"
      },
      { guildIds: ["956642632090677268"] }
    );
  }
};
__name(UserCommand, "UserCommand");
UserCommand = __decorateClass([
  (0, import_decorators.ApplyOptions)({
    name: "ping"
  })
], UserCommand);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserCommand
});
//# sourceMappingURL=ping.js.map