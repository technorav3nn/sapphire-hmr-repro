"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var import_setup = require("./lib/setup");
var import_framework = require("@sapphire/framework");
var import_discord = require("discord.js");
const client = new import_framework.SapphireClient({
  defaultPrefix: "!",
  regexPrefix: /^(hey +)?bot[,! ]/i,
  caseInsensitiveCommands: true,
  logger: {
    level: import_framework.LogLevel.Debug
  },
  shards: "auto",
  intents: [],
  partials: [import_discord.Partials.Channel],
  loadMessageCommandListeners: true,
  hmr: { enabled: true }
});
const main = /* @__PURE__ */ __name(async () => {
  try {
    client.logger.info("Logging in");
    await client.login("OTQ0NjMyNDI4OTM1NDA1NTg5.YhEbgQ.uPhD7uKq4eQR2Q7ZpmjdfWvIEp4");
    client.logger.info("logged in");
  } catch (error) {
    client.logger.fatal(error);
    client.destroy();
    process.exit(1);
  }
}, "main");
main();
//# sourceMappingURL=index.js.map