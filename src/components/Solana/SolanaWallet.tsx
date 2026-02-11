import type { Keypair } from "@solana/web3.js"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import SolanaAddress from "./SolanaAddress"
import SolanaPrivateKey from "./SolanaPrivateKey"
import SolanaBalance from "./SolanaBalance"

const SolanaWallet= ({solanaWallets} : {solanaWallets: Keypair[]}) => {
    return (
        <div className="w-full space-y-4">
            <h2 className="text-center text-2xl font-semibold text-white">Solana Wallet List</h2>
            {solanaWallets.length === 0 && (
                <Card className="border-white/20 bg-[#171a25] text-white">
                    <CardContent className="py-4 text-sm text-white/70">
                        No wallets yet. Generate a mnemonic and click Generate Wallet.
                    </CardContent>
                </Card>
            )}

            {solanaWallets.map((key, index) => (
                <Card key={index} className="border-white/20 bg-[#171a25] text-white">
                    <CardHeader className="border-b border-white/10 pb-4">
                        <CardTitle>Wallet #{index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-4">
                        <SolanaAddress publicKey={key.publicKey} />
                        <SolanaPrivateKey secretKey={key.secretKey} />
                        <SolanaBalance address={key.publicKey.toBase58()} />
                    </CardContent>
                </Card>
            ))}
        </div>
        
    )
}

export default SolanaWallet