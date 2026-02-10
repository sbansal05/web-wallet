import type { Keypair } from "@solana/web3.js"
import { Card, CardContent } from "../ui/card"
import SolanaAddress from "./SolanaAddress"
import SolanaPrivateKey from "./SolanaPrivateKey"

const SolanaWallet= ({solanaWallets} : {solanaWallets: Keypair[]}) => {
    return (
        <div>
            <div className="flex flex-col w-[90%]">Solana Wallets</div>
            <Card>
                <CardContent>
                    {solanaWallets.map((key, index) => 
                    <div key={index} className="flex flex-col text-white">
                        <SolanaAddress publicKey={key.publicKey}/>
                        <SolanaPrivateKey secretKey={key.secretKey}/>
                        <div className="p-2 border-b-2"></div>
                    </div>
                    )}
                </CardContent>
            </Card>

        </div>
        
    )
}

export default SolanaWallet