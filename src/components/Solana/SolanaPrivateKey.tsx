import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import CopyButton from "../CopyButton";
import { CheckIcon } from "../icons/tabler-check";
import { EyeIcon } from "../icons/tabler-eye";
import ViewButton from "../ViewButton";

const SolanaPrivateKey = ({secretKey} : {secretKey: Uint8Array}) => {
    const [privateKeyCopied, setPrivateKeyCopied] = useState(false);
    const [privateKeyViewed, setPrivateKeyViewed] = useState(false);

    return (
        <Card>
            <CardContent>
                <div>
                    <span className="font-bold text-2xl">Wallet Private Key:</span>
                    {privateKeyViewed ? <span className="ml-2">{Buffer.from(secretKey).toString('base64')}</span> : <span className="ml-2">........................</span>}
                </div>
                <div>
                    {privateKeyCopied ? <CopyButton name={Buffer.from(secretKey).toString('base64')} label={<CheckIcon />} setState={setPrivateKeyCopied} className="border-0 px-2 hover:text-gray-500 duration-300" /> : <CopyButton name={Buffer.from(secretKey).toString('base64')} label={<EyeIcon />} setState={setPrivateKeyCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/>}
                    <ViewButton setState={setPrivateKeyViewed} state = {privateKeyViewed} />
                </div>
            </CardContent>
        </Card>
    )
}

export default SolanaPrivateKey