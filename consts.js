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
