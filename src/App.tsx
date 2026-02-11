import { useState } from 'react'
import './App.css'
import { generateMnemonic, mnemonicToSeed } from 'bip39'
import { Keypair } from '@solana/web3.js'
import { Wallet, HDNodeWallet } from 'ethers'
import { derivePath } from 'ed25519-hd-key'
import nacl from 'tweetnacl'
import Title from './components/Title'
import WalletSwitcher from './components/WalletSwitcher'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import CopyButton from './components/CopyButton'
import SolanaWallet from './components/Solana/SolanaWallet'
import EthereumWallet from './components/Ethereum/EthereumWallet'
import { ToastContainer } from 'react-toastify'
import { Card, CardContent } from './components/ui/card'

type WalletType = 'solana' | 'ethereum'

function App() {
  const [mnemonic, setMnemonic] = useState('')
  const [wallet, setWallet] = useState<WalletType>('solana')
  const [ethWallet, setEthWallet] = useState<Wallet[]>([])
  const [solWallet, setSolWallet] = useState<Keypair[]>([])
  const [solanaIdx, setSolanaIdx] = useState(0)
  const [ethIdx, setEthIdx] = useState(0)

  const getMnemonic = () => {
    setMnemonic(generateMnemonic())
  }

  const generateSolanaWallet = async (currentMnemonic: string) => {
    if (!currentMnemonic) {
      alert('Please generate mnemonic first')
      return
    }

    const seed = await mnemonicToSeed(currentMnemonic)
    const path = `m/44'/501'/${solanaIdx}'/0'`
    const newSeed = derivePath(path, seed.toString('hex')).key
    const secret = nacl.sign.keyPair.fromSeed(newSeed).secretKey

    setSolanaIdx((prev) => prev + 1)
    setSolWallet((prev) => [...prev, Keypair.fromSecretKey(secret)])
  }

  const generateEthWallet = async (currentMnemonic: string) => {
    if (!currentMnemonic) {
      alert('Please generate mnemonic first')
      return
    }

    const seed = await mnemonicToSeed(currentMnemonic)
    const path = `m/44'/60'/${ethIdx}'/0'`
    const hdNode = HDNodeWallet.fromSeed(seed)
    const child = hdNode.derivePath(path)

    setEthIdx((prev) => prev + 1)
    setEthWallet((prev) => [...prev, new Wallet(child.privateKey)])
  }

  return (
    <div className="dark min-h-screen bg-[#0f111b] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-8 md:px-8">
        <Title />
        <WalletSwitcher setWalletType={setWallet} />

        <Card className="w-full border-white/20 bg-[#171a25] text-white">
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="h-12 w-full border-white/70 bg-transparent text-base font-semibold text-white hover:bg-white/10"
              aria-label="Generate Mnemonic"
              onClick={getMnemonic}
            >
              Generate Mnemonic
            </Button>

            <div className="flex w-full flex-col gap-3 md:flex-row md:items-stretch">
              <div className="flex w-full items-center rounded-md bg-white text-black">
                <Input
                  className="h-14 border-0 bg-white px-4 text-base text-black shadow-none focus-visible:ring-0"
                  value={mnemonic}
                  placeholder="Your generated mnemonic will appear here"
                  readOnly
                />
                <CopyButton
                  className="mr-4 cursor-pointer text-black hover:text-gray-600"
                  name={mnemonic}
                />
              </div>

              <Button
                className="h-14 px-6 text-base font-semibold"
                onClick={() =>
                  wallet === 'solana'
                    ? generateSolanaWallet(mnemonic)
                    : generateEthWallet(mnemonic)
                }
                aria-label="Generate Wallet"
              >
                Generate Wallet
              </Button>
            </div>
          </CardContent>
        </Card>

        {wallet === 'solana' ? (
          <SolanaWallet solanaWallets={solWallet} />
        ) : (
          <EthereumWallet ethereumWallets={ethWallet} />
        )}
      </div>

      <ReactTooltip className="translate-y-5" id="copy-button" />
      <ToastContainer />
    </div>
  )
}

export default App