# crypto-app

React Crypto App : delivers the latest news and information on cryptocurrencies in an easy to use format

## Description

The crypto app is an information and news aggregator that connects you with the most pertinent news and information on cryptocurrencies. <br> The app offers real-time updates on all major cryptocurrencies, making it the go-to source for everything Crypto. <br> Our easy to use interface provides you with all the latest information on cryptocurrency prices, charts, reviews and more.

## Build and Start Project in Local Machine

Clone the project

```bash
  git clone https://github.com/ahmedsamyop/crypto-app.git
```

To Install all dependencies, run the following command

```bash
  npm install
```

To build, run the following command

```bash
  npm run build
```

To Test, run the following command

```bash
  npm run test
```

To Start developing , run the following command

```bash
  npm start
```

## Build and Start Project in Docker

Clone the project

```bash
  git clone https://github.com/ahmedsamyop/crypto-app.git
```

To Start developing , run the following command

```bash
  docker compose up -d --build
```

To Stop project , run the following command

```bash
  docker compose down
```

## Environment Variables

- Create a file `.env` to add environment variables
- To run this project, you will need to add the following environment variables to your .env file

```bash
REACT_APP_CRYPTO_API_KEY="Your Api"
REACT_APP_CRYPTO_API_HOST="Your Api"
REACT_APP_NEWS_API_KEY="Your Api"
REACT_APP_NEWS_API_HOST="Your Api"
```

## Get Your API

#### RapidAPI

RapidAPI provides developers with a powerful and straightforward API that makes it easy to create applications

- Create Account
- Subscribe Coinranking
- Subscribe Bing News Search

## Deployment

- CI / CD CircleCi Deploying to Netlify [@blog](https://circleci.com/blog/react-netlify-deploy/)

- To deploy this project run

```bash
  npm run deploy
```
