import { ethers } from "ethers";
import {
  SUSDToken__factory,
  PaperSeed__factory,
  ShrubExchange__factory,
  SeedOrphanage__factory,
} from "@shrub/contracts/types/ethers-v5";
import { Currencies } from "../constants/currencies";
import { OrderCommon, UnsignedOrder } from "../types";
import { useWeb3React } from "@web3-react/core";
import { JsonRpcProvider } from "@ethersproject/providers";

const SHRUB_CONTRACT_ADDRESS = process.env.REACT_APP_SHRUB_ADDRESS || "";
const PAPERSEED_CONTRACT_ADDRESS =
  process.env.REACT_APP_PAPERSEED_ADDRESS || "";
const ORPHANAGE_CONTRACT_ADDRESS =
  process.env.REACT_APP_ORPHANAGE_ADDRESS || "";
const ZERO_ADDRESS = ethers.constants.AddressZero;
const COMMON_TYPEHASH = ethers.utils.id(
  "OrderCommon(address baseAsset, address quoteAsset, uint expiry, uint strike, OptionType optionType)"
);

export function getAddress(provider: JsonRpcProvider) {
  const signer = provider.getSigner();
  return signer.getAddress();
}

export function useGetProvider() {
  const { library: provider, active } = useWeb3React();
  if (!active) {
    return false;
  }
  return provider;
}

export function floorGroupNumber(n: number, amount: number) {
  return Math.floor(n / amount) * amount;
}

export function extractRSV(signature: string) {
  const sig = signature.slice(2);
  const r = "0x" + sig.substr(0, 64);
  const s = "0x" + sig.substr(64, 64);
  const v = parseInt("0x" + sig.substr(128, 2), 16) + 27;
  return { r, s, v };
}

export function toEthDate(date: Date) {
  return Math.round(Number(date) / 1000);
}

export function fromEthDate(ethDate: number) {
  return new Date(ethDate * 1000);
}

export function orderWholeUnitsToBaseUnits(unsignedOrder: UnsignedOrder) {
  const { size, price, fee } = unsignedOrder;
  return {
    ...unsignedOrder,
    size: ethers.utils.parseUnits(size.toString()).toString(),
    price: ethers.utils.parseUnits(price.toString()).toString(),
    fee: ethers.utils.parseUnits(fee.toString()).toString(),
  };
}

export async function getDecimalsFor(token: string, provider: JsonRpcProvider) {
  const decimals = 18;
  if (token === ethers.constants.AddressZero) {
    return decimals;
  }

  const erc20Contract = SUSDToken__factory.connect(token, provider);
  return erc20Contract.decimals();
}

export function getChecksumAddress(address: string) {
  return ethers.utils.getAddress(address);
}

export async function getSymbolFor(token: string, provider: JsonRpcProvider) {
  if (token === ethers.constants.AddressZero) {
    return "MATIC";
  }
  const erc20Contract = SUSDToken__factory.connect(token, provider);
  return erc20Contract.symbol();
}

export async function getBigWalletBalance(
  address: string,
  provider: JsonRpcProvider
) {
  const signer = provider.getSigner();
  let bigBalance;
  let decimals = 18;
  if (address === Currencies.MATIC.address) {
    // Basically it is MATIC
    bigBalance = await provider.getBalance(signer.getAddress());
  } else {
    // ERC-20 token logic
    const erc20Contract = SUSDToken__factory.connect(address, provider);
    const signerAddress = await signer.getAddress();
    bigBalance = await erc20Contract.balanceOf(signerAddress);
    decimals = await erc20Contract.decimals();
  }
  return { bigBalance, decimals };
}

export async function getWalletBalance(
  address: string,
  provider: JsonRpcProvider
) {
  const { bigBalance, decimals } = await getBigWalletBalance(address, provider);
  return ethers.utils.formatUnits(bigBalance, decimals);
}

// export async function claimNFT(
//   index: ethers.BigNumberish,
//   tokenID: ethers.BigNumberish,
//   proof: BytesLike[],
//   provider: JsonRpcProvider
// ) {
//   const signer = provider.getSigner();
//   const paperseedContract = PaperSeed__factory.connect(
//     PAPERSEED_CONTRACT_ADDRESS,
//     signer
//   );
//   const tx = await paperseedContract["claim(uint256,uint256,bytes32[])"](
//     index,
//     tokenID,
//     proof
//   );
//   return tx;
// }

export async function registerForAdoption(provider: JsonRpcProvider) {
  const signer = provider.getSigner();
  const orphanageContract = SeedOrphanage__factory.connect(
    ORPHANAGE_CONTRACT_ADDRESS,
    signer
  );
  return orphanageContract.register();
}

export async function getRegisterForAdoption(provider: JsonRpcProvider) {
  const orphanageContract = SeedOrphanage__factory.connect(
    ORPHANAGE_CONTRACT_ADDRESS,
    provider
  );
  return orphanageContract.getRegister();
}

export async function isRegisteredForAdoption(
  provider: JsonRpcProvider,
  address: string
) {
  const orphanageContract = SeedOrphanage__factory.connect(
    ORPHANAGE_CONTRACT_ADDRESS,
    provider
  );
  return orphanageContract.isRegistered(address);
}

export async function seedBalanceOf(
  provider: JsonRpcProvider,
  address: string
) {
  const paperseedContract = PaperSeed__factory.connect(
    PAPERSEED_CONTRACT_ADDRESS,
    provider
  );
  return paperseedContract.balanceOf(address);
}

export async function getTokenUri(
  tokenID: ethers.BigNumberish,
  provider: JsonRpcProvider
) {
  const signer = provider.getSigner();
  const paperseedContract = PaperSeed__factory.connect(
    PAPERSEED_CONTRACT_ADDRESS,
    signer
  );
  const uri = await paperseedContract.tokenURI(tokenID);
  return uri;
}

export async function getUserNonce(
  address: string,
  common: OrderCommon,
  provider: JsonRpcProvider
) {
  const shrubContract = ShrubExchange__factory.connect(
    SHRUB_CONTRACT_ADDRESS,
    provider
  );
  const bigNonce = await shrubContract.getCurrentNonce(address, common);
  return bigNonce.toNumber();
}

export function addressToLabel(address: string) {
  if (address === ZERO_ADDRESS) {
    return "MATIC";
  }
  if (
    process.env.REACT_APP_SUSD_TOKEN_ADDRESS &&
    address.toLowerCase() ===
      process.env.REACT_APP_SUSD_TOKEN_ADDRESS.toLowerCase()
  ) {
    return "SUSD";
  }
  return "XXX";
}

export function hashOrderCommon(common: OrderCommon) {
  const { baseAsset, quoteAsset, expiry, strike, optionType } = common;
  return ethers.utils.solidityKeccak256(
    ["bytes32", "address", "address", "uint", "uint", "uint8"],
    [COMMON_TYPEHASH, baseAsset, quoteAsset, expiry, strike, optionType]
  );
}

export function formatStrike(strike: ethers.BigNumber) {
  return Number(ethers.utils.formatUnits(strike, 6)).toFixed(2);
}

export function formatDate(date: number | Date) {
  if (date instanceof Date) {
    return date.toLocaleDateString("en-us", { month: "short", day: "numeric" });
  }
  return fromEthDate(date).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
}

export function formatTime(date: number | Date) {
  if (date instanceof Date) {
    return date.toLocaleTimeString("en-us", {
      hour: "numeric",
      minute: "2-digit",
    });
  }
  return fromEthDate(date).toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function getBlockNumber(provider: JsonRpcProvider) {
  return provider.getBlockNumber();
}
