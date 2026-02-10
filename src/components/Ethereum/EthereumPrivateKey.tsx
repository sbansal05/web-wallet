import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import CopyButton from "../CopyButton";
import { CheckIcon } from "../icons/tabler-check";
import { EyeIcon } from "../icons/tabler-eye";
import ViewButton from "../ViewButton";

const EthereumPrivateKey = ({privateKey} : {privateKey: string}) => {
    const [privateKeyCopied, setPrivateKeyCopied] = useState(false);
    const [privateKeyViewed, setPrivateKeyViewed] = useState(false);

    return (
        <Card>
            <CardContent>
                <div>
                    <span className="font-bold text-2xl">Wallet Private Key:</span>
                    {privateKeyViewed ? <span className="ml-2">{privateKey}</span> : <span className="ml-2">........................</span>}
                </div>
                <div>
                    {privateKeyCopied ? <CopyButton name={privateKey} label={<CheckIcon />} setState={setPrivateKeyCopied} className="border-0 px-2 hover:text-gray-500 duration-300" /> : <CopyButton name={privateKey} label={<EyeIcon />} setState={setPrivateKeyCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/>}
                    <ViewButton setState={setPrivateKeyViewed} state = {privateKeyViewed} />
                </div>
            </CardContent>
        </Card>
    )
}

export default EthereumPrivateKey