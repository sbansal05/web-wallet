import { Wallet } from "ethers"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import EthereumAddress from "./EthereumAddress"
import EthereumPrivateKey from "./EthereumPrivateKey"

const EthereumWallet = ({ ethereumWallets }: { ethereumWallets: Wallet[] }) => {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-center text-2xl font-semibold text-white">Ethereum Wallet List</h2>

      {ethereumWallets.length === 0 && (
        <Card className="border-white/20 bg-[#171a25] text-white">
          <CardContent className="py-4 text-sm text-white/70">
            No wallets yet. Generate a mnemonic and click Generate Wallet.
          </CardContent>
        </Card>
      )}

      {ethereumWallets.map((key, index) => (
        <Card key={index} className="border-white/20 bg-[#171a25] text-white">
          <CardHeader className="border-b border-white/10 pb-4">
            <CardTitle>Wallet #{index + 1}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <EthereumAddress address={key.address} />
            <EthereumPrivateKey privateKey={key.privateKey} />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default EthereumWallet