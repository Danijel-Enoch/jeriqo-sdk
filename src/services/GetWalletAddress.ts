import "@ethersproject/shims";
import { ethers } from "ethers";
export  function GetWalletAddress(phrase:string):ethers.HDNodeWallet {
    const PubKey=ethers.Wallet.fromPhrase(phrase)
    return PubKey
}
