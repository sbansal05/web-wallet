import { useState } from "react"
import { Card, CardContent } from "../ui/card";
import CopyButton from "../CopyButton";
import { CheckIcon } from "../icons/tabler-check";
import ViewButton from "../ViewButton";
import { EyeIcon } from "../icons/tabler-eye";

const EthereumAddress = ({address}: {address: string}) => {
    const [addressCopied, setAddressCopied] = useState(false);
    const [addressViewed, setAddressViewed] = useState(false);
    return (
        <Card className="w-full max-w-sm">
            <CardContent>
                <div>
                    <span className="font-bold text-2xl">Wallet Address:</span>
                    {addressViewed ? <span className="ml-2">{address}</span> : <span className="ml-2">........................</span>}
                </div>
                <div>
                    {addressCopied ? <CopyButton name={address} label={<CheckIcon />} setState={setAddressCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/> : <CopyButton name={address} label={<EyeIcon />} setState={setAddressCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/>}
                    <ViewButton setState={setAddressViewed} state={addressViewed} />
                </div>
            </CardContent>
        </Card>
    )
}
export default EthereumAddress