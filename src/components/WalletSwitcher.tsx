import { Button } from "./ui/button";

const WalletSwitcher = ({setWalletType} : {setWalletType: any}) => {
    const handleClick = (walletType: string) => {
        setWalletType(walletType)
    }

    return (
        <div className="flex p-4">
            <Button aria-label="Solana" onClick={() => handleClick('solana')} className="border-r-3 border-r-black-600 px-6 py-2"/>
            <Button name={"Ethereum"} onClick={() => handleClick('ethereum')} className="border-r-3 border-r-black-600 px-6 py-2"/>
        </div>
    )
}

export default WalletSwitcher