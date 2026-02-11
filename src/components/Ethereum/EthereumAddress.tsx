import { useState } from "react"
import CopyButton from "../CopyButton";
import { CheckIcon } from "../icons/tabler-check";
import ViewButton from "../ViewButton";
import { CopyIcon } from "../icons/lucide-copy";

const EthereumAddress = ({address}: {address: string}) => {
    const [addressCopied, setAddressCopied] = useState(false);
    const [addressViewed, setAddressViewed] = useState(false);
    return (
        <div className="flex items-start justify-between gap-4 rounded-md border border-white/10 bg-[#10131d] p-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white/90">Wallet Address</p>
        <p className="break-all text-sm text-white/80">
          {addressViewed ? address : '************************'}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {addressCopied ? (
          <CopyButton
            name={address}
            label={<CheckIcon />}
            setState={setAddressCopied}
            className="cursor-pointer text-white"
          />
        ) : (
          <CopyButton
            name={address}
            label={<CopyIcon size={20} />}
            setState={setAddressCopied}
            className="cursor-pointer text-white"
          />
        )}
        <ViewButton setState={setAddressViewed} state={addressViewed} />
      </div>
    </div>
  )
}
    

export default EthereumAddress