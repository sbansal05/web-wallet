import { CopyIcon } from "../icons/lucide-copy";
import { PublicKey } from "@solana/web3.js";
import { Card, CardContent,  } from "../ui/card";
import { CheckIcon } from "../icons/tabler-check";
import { EyeIcon } from "../icons/tabler-eye";
import { useState } from "react";
import { EyeClosedIcon } from "../icons/tabler-eye-closed";

const SolanaAddress = ({publicKey} : {publicKey : PublicKey}) => {
    const [addressViewed, setAddressViewed] = useState(false)
    const [addressCopied, setAddressCopied] = useState(false)

    return (
        <Card className="w-full max-w-sm">
            <CardContent>
                
            </CardContent>
        </Card>
    )
}
