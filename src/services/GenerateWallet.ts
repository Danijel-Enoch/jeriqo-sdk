import "@ethersproject/shims";
import { ethers } from "ethers";
export function GenerateWallet() {
	const entropy = ethers.randomBytes(16);
	const mnemonic = ethers.Mnemonic.entropyToPhrase(entropy);
	return mnemonic;
}
