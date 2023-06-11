import "@ethersproject/shims";
import { ethers, JsonRpcProvider } from "ethers";

export class Wallet {
	chainId: number;
	provider: JsonRpcProvider;
	privateKey: string;
	walletAddress: string;
	tokenABI = [
		// Standard ERC-20 functions
		"function balanceOf(address account) view returns (uint256)",
	];
	walletInstance: ethers.Wallet;

	constructor(
		chainId: number,
		chainRPC: string,
		privateKey: string,
		walletAddress: string
	) {
		this.chainId = chainId;
		this.provider = new ethers.JsonRpcProvider(chainRPC);
		this.privateKey = privateKey;
		this.walletAddress = walletAddress;
		this.walletInstance = new ethers.Wallet(this.privateKey, this.provider);
	}

	async checkEthBalance() {
		const balance = await this.provider.getBalance(this.walletAddress);

		// Convert the balance to Ether
		const etherBalance = ethers.formatEther(balance);

		return etherBalance;
	}
	async checkErc20Balance(contractAddress: string) {
		// Create a new instance of the ERC-20 token contract
		const tokenContract = new ethers.Contract(
			contractAddress,
			this.tokenABI,
			this.provider
		);

		// Call the balanceOf function on the token contract to get the balance
		const balance = await tokenContract.balanceOf(this.walletAddress);
		return balance;
	}
	async checkNftBalance() {}
	async sendNft() {}
	async sendEth(to: string, amount: string) {
		const recipientAddress = to;
		const amountToSend = ethers.parseEther(amount);
		const transaction = {
			to: recipientAddress,
			value: amountToSend,
		};
		const response = await this.walletInstance.sendTransaction(transaction);
		return response;
	}
	async sendErc20Token() {}
}
