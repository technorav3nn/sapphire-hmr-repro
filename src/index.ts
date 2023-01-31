import './lib/setup';
import { LogLevel, SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits, Partials } from 'discord.js';

const client = new SapphireClient({
	defaultPrefix: '!',
	regexPrefix: /^(hey +)?bot[,! ]/i,
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	shards: 'auto',
	intents: [],
	partials: [Partials.Channel],
	loadMessageCommandListeners: true,
	hmr: { enabled: true }
});

const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login('OTQ0NjMyNDI4OTM1NDA1NTg5.YhEbgQ.uPhD7uKq4eQR2Q7ZpmjdfWvIEp4');
		client.logger.info('logged in');
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();
