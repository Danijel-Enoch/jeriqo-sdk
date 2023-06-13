import "@ethersproject/shims";
import { ethers } from "ethers";
import { Wallet } from "./Wallet";

export const getTokenBalance = async (
	chainId: number,
	chainRPC: string,
	privateKey: string,
	walletAddress: string,
	token: string
) => {
	const wallet = new Wallet(chainId, chainRPC, privateKey, walletAddress);
	const balance = await wallet.checkErc20Balance(token);
	return ethers.formatEther(balance);
};
