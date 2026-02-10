import { Wallet } from "ethers"
import { Card, CardContent } from "../ui/card"
import EthereumAddress from "./EthereumAddress"
import EthereumPrivateKey from "./EthereumPrivateKey"
const EthereumWallet = ({ethereumWallets} : {ethereumWallets: Wallet[]}) => {
    return (
        <div>
            <div className="flex flex-col w-[90%]">Solana Wallets</div>
            <Card>
                <CardContent>
                    {ethereumWallets.map((key, index) => 
                    <div key={index} className="flex flex-col text-white">
                        <EthereumAddress address={key.address}/>
                        <EthereumPrivateKey privateKey={key.privateKey}/>
                        <div className="p-2 border-b-2"></div>
                    </div>
                    )}
                </CardContent>
            </Card>

        </div>

    )
}

export default EthereumWallet