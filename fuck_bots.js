import {ABI} from "./abi.js";
import {createAlchemyWeb3} from "@alch/alchemy-web3";
import {
    API_URL,
    CONTRACT_ADDRESS,
    GAS_LIMIT,
    GAS_PRICE_nAVAX,
    MINT_PER_TX,
    PRIVATE_KEY,
    PUBLIC_KEY,
    START_LAST_SECONDS,
    TRY_TIMES,
    WAIT_BETWEEN_TRIES_MS
} from "./consts.js";

const web3 = createAlchemyWeb3(API_URL);
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

async function mintNFT(cost, nonce) {
    const tx = {
        'from': PUBLIC_KEY,
        'to': CONTRACT_ADDRESS,
        'nonce': nonce,
        'gas': GAS_LIMIT * 100000,
        'value': MINT_PER_TX * cost,
        'maxPriorityFeePerGas': GAS_PRICE_nAVAX * 1000000000,
        'maxFeePerGas': GAS_PRICE_nAVAX * 1500000000,
        'data': contract.methods.allowlistMint(MINT_PER_TX).encodeABI()
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    console.log('Sending TX', tx);
    web3.eth.sendSignedTransaction(signedTx.rawTransaction).catch((err) => {
        console.log(err)
    });
}

function getCurrentUnixTimestamp() {
    return Math.floor(new Date().getTime() / 1000);
}

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

async function start() {
    let nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');
    const baseCost = await contract.methods.allowlistPrice().call()
    const allowlistStartTime = await contract.methods.allowlistStartTime().call();
    const currentTimestamp = getCurrentUnixTimestamp();
    const remainingSeconds = allowlistStartTime - currentTimestamp;

    console.log('Mint time %s, time %s, nonce %s, remaining seconds %s', allowlistStartTime, currentTimestamp, nonce, remainingSeconds);
    if (remainingSeconds < 0) {
        console.log('Mint is over');
        return;
    }
    if (remainingSeconds > START_LAST_SECONDS) {
        console.log('Waiting to last %s seconds to start bot', START_LAST_SECONDS);
        await snooze((remainingSeconds - START_LAST_SECONDS) * 1000);
    }

    console.log('Starting to mint txs, remaining seconds %s', allowlistStartTime - getCurrentUnixTimestamp());
    for (let i = 0; i < TRY_TIMES; i++) {
        await mintNFT(baseCost, nonce);
        nonce++;
        await snooze(WAIT_BETWEEN_TRIES_MS);
    }
}

start();
