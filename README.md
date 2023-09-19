![Swap](<swap.png>)


![Tokens](<tokens.png>)



react-dex

![License](https://img.shields.io/badge/license-MIT-blue.svg)

The react-dex is a decentralized exchange built using React and NodeJS. It allows users to connect their digital wallet and exchange digital tokens. It also presents the available tokens for swapping in the Tokens page.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [NodeJS](https://nodejs.org/en/download)
- [Metamask](https://metamask.io/) or another Ethereum wallet for interacting with your contracts

## Installation

1. Clone the project repository:

```bash
git clone https://github.com/hadesbaker/nextjs-dex.git
cd nextjs-dex
```

2. Install the required frontend dependencies:

```bash
cd dex
npm install
# or
yarn install
```

And then install the required backend dependencies:

```bash
cd ..
cd dexBack
npm install
# or
yarn install
```

## Usage

In the dexBack folder, create a file called .env. Within the .env file, add a MORALIS_KEY variable with the moralis api key you can get from [here](https://admin.moralis.io/login).

i.e. MORALIS_KEY=dwindwdiwndiwniwndiwdinwdinwdidindiwn

In a seperate terminal window, run the backend node server:

Run the backend server:

```bash
cd dexBack
node index.js
```

In another terminal window, run the development server::

```bash
cd ..
cd dex
npm run start
# or
yarn start
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.