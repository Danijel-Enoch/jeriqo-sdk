import React from 'react'
import "@ethersproject/shims"
import { ethers } from "ethers";
export default function SeedPhraseToPrivateKey(seedPhrase) {
    const mnemonic = seedPhrase.trim();
    const path = "m/44'/60'/0'/0/0"; // Derivation path for Ethereum
    const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic, path);
    const privateKey = wallet.privateKey;
    return privateKey;
}
