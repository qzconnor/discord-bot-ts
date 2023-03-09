import {
    InteractionReplyOptions,
    WebhookEditMessageOptions
} from 'discord.js'

export const Colors = {
    error: 0xf54242,
    success: 0x00ff59,
    accent: 0x007550
}

export const Reply = {
    error:(msg: string): InteractionReplyOptions => {
        return {
            ephemeral: true,
            embeds: [{
                color: Colors.error,
                description: msg
            }]
        }
    },
    success:(msg: string, ephemeral: boolean = true): InteractionReplyOptions => {
        return {
            ephemeral,
            embeds: [{
                color: Colors.success,
                description: msg
            }]
        }
    },
}

export const EditReply = {
    error:(msg: string): WebhookEditMessageOptions => {
        return {
            embeds: [{
                color: Colors.error,
                description: msg
            }]
        }
    }
}