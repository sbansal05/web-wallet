import { PublicKey } from '@solana/web3.js'
import { useState } from 'react'
import CopyButton from '../CopyButton'
import { CheckIcon } from '../icons/tabler-check'
import { CopyIcon } from '../icons/lucide-copy'
import ViewButton from '../ViewButton'

const SolanaAddress = ({ publicKey }: { publicKey: PublicKey }) => {
  const [addressViewed, setAddressViewed] = useState(false)
  const [addressCopied, setAddressCopied] = useState(false)

  const value = publicKey.toBase58()

  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-white/10 bg-[#10131d] p-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white/90">Wallet Address</p>
        <p className="break-all text-sm text-white/80">
          {addressViewed ? value : '************************'}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {addressCopied ? (
          <CopyButton
            name={value}
            label={<CheckIcon />}
            setState={setAddressCopied}
            className="cursor-pointer text-white"
          />
        ) : (
          <CopyButton
            name={value}
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

export default SolanaAddress