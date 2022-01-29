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

- [Axios](https://www.npmjs.com/package/axios)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://www.npmjs.com/package/jest)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.npmjs.com/package/typescript)

> ## <a name="requirements-v1"></a> Requirements - v1

- [ ] Search the wallet by address and network type. At first version, only Binance (BSC) network is accepted
- [ ] List all transactions from the wallet.
- [ ] Export the list of data to excel file or pdf file

> ## <a name="run-app"></a> Run App

- To run this app, is required to create a `.env` file in the root of the project, following the requirements available in `.env.local` file
- Fill the properties with the correspondents values

### Clone

```
git clone https://github.com/will-cesar/historic-crypto-wallet-api.git
```

### Install packages

```
npm install
```
