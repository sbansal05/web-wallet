import { PublicKey } from "@solana/web3.js";
import { Card, CardContent,  } from "../ui/card";
import { CheckIcon } from "../icons/tabler-check";
import { EyeIcon } from "../icons/tabler-eye";
import { useState } from "react";
import CopyButton from "../CopyButton";
import ViewButton from "../ViewButton";

const SolanaAddress = ({publicKey} : {publicKey : PublicKey}) => {
    const [addressViewed, setAddressViewed] = useState(false)
    const [addressCopied, setAddressCopied] = useState(false)

    return (
        <Card className="w-full max-w-sm">
            <CardContent>
                <div>
                    <span className="font-bold text-2xl">Wallet Address:</span>
                    {addressViewed ? <span className="ml-2">{publicKey.toBase58()}</span> : <span className="ml-2">........................</span>}
                </div>
                <div>
                    {addressCopied ? <CopyButton name={publicKey.toBase58()} label={<CheckIcon />} setState={setAddressCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/> : <CopyButton name={publicKey.toBase58()} label={<EyeIcon />} setState={setAddressCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/>}
                    <ViewButton setState={setAddressViewed} state={addressViewed} />
                </div>
            </CardContent>
        </Card>
    )
}

export default SolanaAddress
