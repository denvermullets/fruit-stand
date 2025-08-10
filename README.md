# Fruit Stand

this repo was quickly thrown together using my CLI tool [Mullets-Stack](https://github.com/denvermullets/mullets-stack)

https://github.com/user-attachments/assets/0b41769b-4c81-4469-b6a0-60db74604bfd


## Tech Stack

- React
- Express
- TanStack Router
- TanStack Query
- Postgres

## Figma

in `ext_res/` you'll find the hastily made Figma file

### things to note:

due to TSQuery, we're caching the server responses and using that vs storing it in state. also, since everything is query param driven, that is also effectively how the components are controlled.

you'll need to create your database and create the .env. there's a sample env provided in the `server` folder.
