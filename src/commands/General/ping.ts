import { ApplyOptions } from '@sapphire/decorators';
import { ApplicationCommandRegistry, Command } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { ChatInputCommandInteraction, Message } from 'discord.js';

@ApplyOptions<Command.Options>({
	name: 'ping'
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
		const msg = await send(message, 'Ping?');

		const content = `Pong!!! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
			(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)
		}ms.`;

		return send(message, content);
	}

	public async chatInputRun(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();
		const int = await interaction.fetchReply();

		const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
			(int.editedTimestamp || interaction.createdTimestamp) - (int.editedTimestamp || interaction.createdTimestamp)
		}ms.`;

		return interaction.editReply(content);
	}

	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: 'ping',
				description: 'ping pong'
			},
			{ guildIds: ['956642632090677268'] }
		);
	}
}
