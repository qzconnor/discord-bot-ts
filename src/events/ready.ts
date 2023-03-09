import { event } from "../utils";

export default event('ready', async ({log}, client) => {
    log(`Logged in as ${client.user.tag}`)
})