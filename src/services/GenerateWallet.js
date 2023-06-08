import React from 'react'
import "@ethersproject/shims"
import { ethers } from "ethers";
export default function GenerateWallet() {
    const entropy = ethers.randomBytes(16);
    const mnemonic = ethers.utils.HDNode.entropyToMnemonic(entropy);
    return mnemonic;
}
