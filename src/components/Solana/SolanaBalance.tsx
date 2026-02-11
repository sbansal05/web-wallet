import axios from "axios";
import { useEffect, useState } from "react";
import { solanaUrl } from "@/conf/config";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const SolanaBalance = ({address}: {address : string}) => {
    const [balance, setBalance] = useState(0)
    const getBalance = async ({address} : {address : string}) => {
        const res = await axios.post(solanaUrl, {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getBalance",
            "params": [address]
        })
        setBalance(res.data.result.value)
    }

    useEffect(() => {
        getBalance({address})
    }, [balance])

    return (
         <div className="flex items-start justify-between gap-4 rounded-md border border-white/10 bg-[#10131d] p-3">
            <div className="min-w-0">
                <p className="text-sm font-semibold text-white/90">Balance</p>
                    <p className="break-all text-sm text-white/80">
                        {balance/LAMPORTS_PER_SOL}
                    </p>
            </div>
        </div>
    )
}

export default SolanaBalance
