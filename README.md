# Historic crypto wallet API

> ## Summary

- [About](#about)
- [Stack](#stack)
- [Requirements - v1](#requirements-v1)
- [Run App](#run-app)

> ## <a name="about"></a> About

- API that shows the historic of transactions by crypto wallet
- That API use [BscScan API](https://docs.bscscan.com) and [CoinGecko API](https://www.coingecko.com/pt/api/documentation) with database

> ## <a name="stack"></a> Stack

- [Axios](https://www.npmjs.com/package/axios) - Axios is a promise-based HTTP Client for node.js and the browser.
- [EditorConfig](https://editorconfig.org) - EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. To use the `EditorConfig`, you need install the **EditorConfig plugin** in your IDE.
- [Express](https://expressjs.com/pt-br/) -  Back-end web application framework for Node.js.
- [Jest](https://www.npmjs.com/package/jest) - Is a delightful JavaScript Testing Framework.
- [Node.js](https://nodejs.org/en/) - Is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Prettier](https://prettier.io) - An opinionated code formatter. Integrates with most editors.
- [TypeScript](https://www.npmjs.com/package/typescript) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

> ## <a name="requirements-v1"></a> Requirements - v1

- [ ] Search the wallet by address and network type. At first version, only Binance (BSC) network is accepted
- [ ] List all transactions from the wallet.
- [ ] Export the list of data to excel file or pdf file

> ## <a name="run-app"></a> Run App

- To run this app, is required to create a `.env` file in the root of the project, following the requirements available in `.env.example` file
- Fill the properties with the correspondents values

### Clone

```
git clone https://github.com/will-cesar/historic-crypto-wallet-api.git
```

### Install packages

```
npm install
```

### Dev environment

```
npm run dev
```

### Prod environment

```
npm run start
```

### Build

```
npm run build
```
