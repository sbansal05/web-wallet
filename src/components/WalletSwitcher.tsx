import { Button } from "./ui/button";

const WalletSwitcher = ({setWalletType} : {setWalletType: any}) => {
    const handleClick = (walletType: string) => {
        setWalletType(walletType)
    }

    return (
        <div className="flex overflow-hidden rounded-md border border-white/20 bg-[#1f2333]">
            <Button aria-label="Solana" onClick={() => handleClick('solana')} className="h-11 rounded-none border-r border-white/20 px-8 text-sm font-semibold">Solana</Button>
            <Button aria-label="Ethereum" onClick={() => handleClick('ethereum')} className="h-11 rounded-none border-r border-white/20 px-8 text-sm font-semibold">Ethereum</Button>
        </div>
    )
}

export default WalletSwitcher
