# Fuck Bots - Joepegs Launchpad Allowlist BOT

Let's fuck bots with our bot!

## Requirements
- NodeJS v16+

## Start
- Execute `npm install`
- Setup `consts.js` file as described below
- Execute `node fuck_bots.js` for windows `node .\fuck_bots.js` **just before 10 seconds prior mint. Or you can start earlier.**
- Don't start any other transaction since this bot caches your nonce.

## Consts.js
This file contains all the configuration you need, check below

```
export const API_URL = "https://api.avax.network/ext/bc/C/rpc";

// Mint contract address
export const CONTRACT_ADDRESS = "0x84D746c289CFe23B8dEE2ba01263514d60C06f1A";

// Your address 0x...
export const PUBLIC_KEY = "xxxxxxxxxxxxxxxxxxxx";

// Can be exported from metamask, "Account Details" -> "Export Private Key"
export const PRIVATE_KEY = "xxxxxxxxxxxxxxxxxxxxx";

// This value is allowed NFT count per TX, set accordingly.
export const MINT_PER_TX = 3;

// Feel free to increase, means 25 transactions will be sent over "TRY_TIMES*WAIT_BETWEEN_TRIES_MS/1000" seconds (5 seconds with current settings)
export const TRY_TIMES = 25;

// Transactions are being sent async and snoozing below miliseconds before sending another.
export const WAIT_BETWEEN_TRIES_MS = 200;

// "Max Priority Fee Per Gas". Also, "Max Fee Per Gas" is set 1.5x of this.
export const GAS_PRICE_nAVAX = 2000;

// means 8*100.000
export const GAS_LIMIT = 8;

// start bot before 2.25 seconds of mint time in the contract, consider signing a raw message takes some time.
export const START_LAST_SECONDS = 2.25;
```

## Notes

- This bot only works if you have **allowlist**, feel free to improve and submit a PR
- This bot does **NOT** guarantee a mint.
- Tested on fuji only so far with this contract: https://testnet.snowtrace.io/txs?a=0x84D746c289CFe23B8dEE2ba01263514d60C06f1A and current `consts.js`
- Please contribute if you can so we can get the best result. I know this bot is not perfect.
- Twitter thread for more:

## Donate
Only if you find this useful, you can donate here: `0xA5B7922F058b4675DcE7ACfDC6d43E9b8eC68De6`

## License
MIT
**Free Software, Hell Yeah!**

