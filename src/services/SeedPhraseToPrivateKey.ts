import "@ethersproject/shims";
import { ethers } from "ethers";
export function SeedPhraseToPrivateKey(seedPhrase: any) {
	const mnemonic = seedPhrase.trim();
	const path = "m/44'/60'/0'/0/0"; // Derivation path for Ethereum
	const wallet = ethers.Wallet.fromPhrase(mnemonic);
	const privateKey = wallet.privateKey;
	return privateKey;
}
