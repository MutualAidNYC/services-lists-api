# Mutual Aid NYC Services List API

A [Node.js](https://nodejs.org/en/) REST API for interacting with NYC health, human and social services lists stored in [Airtable](https://airtable.com) in the [Open Referral](https://openreferral.org) data format.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [Koa](https://koajs.com)
- [@koa/router](https://github.com/koajs/router)
- [Airtable.js](https://github.com/airtable/airtable.js)

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn 1](https://classic.yarnpkg.com/lang/en/)

## Running Locally

- Copy this repo: `git clone https://github.com/MutualAidNYC/services-lists-api.git`
- Install the Yarn package manager (version 1): `npm install --global yarn`
- Install dependencies: `yarn install`
- Copy the `sample.env` file: `cp sample.env .env`
- Add your Airtable API key and the id of the Airtable base containing your data to the `.env` file. You can also change the `PORT` variable to use a different port - the default is `3001`.
- Start a development server: `yarn dev`. The development script uses [nodemon](https://nodemon.io/) instead of node so that the server automatically restarts with changes.
- Call the api with [curl](https://curl.se/): `curl localhost:{PORT}` + one of the following routes:
  - `/services`
  - `/taxonomies`
  - `services-lists`
  - `services/:id`
  - `addresses/:id`
  - `services-lists/:id`

## Linting

[ESLint](https://eslint.org/) is used to automatically check this project's code for programattic errors (AKA linting).

- To run the linter, run `yarn lint` - this will check all files in the project except those specified in the `.eslintignore` file.
- The linter's configuration is specified in the `.eslintrc.json` file.

## Code Formatting

[Prettier](https://prettier.io/) is used to automatically format this project's code according to Prettier's style guide so it will stay consistently formatted across developers.

- To run the formatter, run `yarn format` - this will format all the files in the project except those specified in the `.prettierignore` file.
- The formatter's configuration is specified in the `.prettierrc.json` file.
