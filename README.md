# Discord Bot Template with TypeScript

## To get started

Use this template to create your Repository.
Clone your Repository and start editing. 😎

Copy `.example.env` to `.env` and change the values.
```
CLIENT_TOKEN="client_token"
TEST_GUILD="1234567"
```


## To create your Discord Bot

> Create your bot here. [Discord Developer Portal](https://discord.com/developers/applications) <br> 
  You will find many tutorials how to do that on Youtube/Google.
  
  Enable all Privileged intents.

## To add your own Commands / Events
To add a new category copy the schema of the `example` folder and for the events is it mostly the same you can follow the schema.

## Important
1. Keep in mind that you have to register your **Commands and Events**.
2. After you change or add a Command you have to run `npm run deploy`. If not Discord will not recognize your Slash Commands.
3. To run the Bot for Development use `npm run dev`.
4. To Build the Bot use `npm run build`.
5. And to deply for the production build use `npm run deploy-prod`
6. To run the compiled version of the Bot run `npm start` or `npm run start`

A list of all Scripts you will find in the `package.json`
