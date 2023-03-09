import { GuildMember, SlashCommandBuilder } from 'discord.js'
import { Reply, command} from '../../utils'

const meta = new SlashCommandBuilder()
    .setName('example')
    .setDescription('Example command')


export default command(meta, ({interaction}) => {
    interaction.reply(Reply.success(`Hello, ${interaction.user.username}!`))
})