import { ethUrl } from "@/conf/config";
import axios from "axios";
import { useEffect, useState } from "react";


const EthereumBalance = ({address} : {address: string}) => {
    const [balance, setBalance] = useState("");
    const [loading, setLoading] = useState(true);

    const getBalance = async ({address} : {address : string}) => {
        const res = await axios.post(ethUrl, {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "eth_getBalance",
            "params": [address, "latest"]
        })
        setBalance(parseInt(res.data.result).toString())
    }

    useEffect(() => {
        getBalance({address})
        setLoading(false)
    }, [balance])

    return (
        <div className="flex items-start justify-between gap-4 rounded-md border border-white/10 bg-[#10131d] p-3">
            <div className="min-w-0">
                <p className="text-sm font-semibold text-white/90">Balance</p>
                    <p className="break-all text-sm text-white/80">
                        {loading ? <div>
                        </div> : parseInt(balance)/10**18}
                    </p>
            </div>
        </div>
    )
}

export default EthereumBalance