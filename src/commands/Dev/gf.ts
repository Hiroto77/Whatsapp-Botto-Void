import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'gf',
            description: 'Existance Check!',
            category: 'dev',
            aliases: ['bf'],
            usage: `${client.config.prefix}gf/bf`,
            dm: false,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(`Hi ${M.sender.username}! Yes it exists, Just try to find out Yourself!`))
        }
}
