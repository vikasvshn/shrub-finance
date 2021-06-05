const { Shrub712 } = require('../utils/EIP712');
const ExchangeJson = require('../build/contracts/ShrubExchange.json');
const Web3 = require('web3');
const util = require('util');
const fetch = require('node-fetch');

const wsUrl = "http://127.0.0.1:8545"
const web3 = new Web3(new Web3.providers.HttpProvider(wsUrl));
const parityAdmin = "0x00a329c0648769A73afAc7F9381E08FB43dBEA72";
const apiPort = Number(process.env.API_PORT) || 8000

const Assets = {
  USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  ETH: '0x0000000000000000000000000000000000000000'
}

const wait = util.promisify(setTimeout);

async function generateRandomOrder(nonce) {
  return {
    nonce,
    size: Math.random() * 5,
    isBuy: Math.random() * 100 > 50,
    price: Math.floor(Math.random() * 4000),
    offerExpire: Math.floor((new Date().getTime() + 5 * 1000 * 60) / 1000),
    fee: Math.floor(Math.random() * 100),
    baseAsset: Assets.USDC,
    quoteAsset: Assets.ETH,
    expiry: Math.floor((new Date().getTime() + 30 * 1000 * 60) / 1000),
    strike: Math.floor(Math.random() * 4000),
    optionType: Math.floor(Math.random() * 2),
  }
}

async function saveOrder(order) {
  await fetch(`http://localhost:${apiPort}/orders`, {
    method: 'post',
    body:    JSON.stringify(order),
    headers: { 'Content-Type': 'application/json' },
  })
}

async function main() {
  const currentNetwork = await web3.eth.net.getId();
  const exchangeAddress = ExchangeJson.networks[currentNetwork.toString()].address;
  console.log("Using ShrubExchange:", {exchangeAddress});
  const shrubInterface = new Shrub712(17, exchangeAddress);
  const exchange = new web3.eth.Contract(ExchangeJson.abi, exchangeAddress);
  const depositAmount = process.env.DEPOSIT_ETH || "1";
  const wei = web3.utils.toWei(depositAmount, "ether");
  console.log("Depositing", depositAmount, "ETH");
  await exchange.methods.deposit(Assets.ETH, wei).send({value: wei, from: parityAdmin});
}
main().catch(console.log);
