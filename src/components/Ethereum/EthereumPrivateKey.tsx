import { useState } from 'react'
import CopyButton from '../CopyButton'
import { CheckIcon } from '../icons/tabler-check'
import { CopyIcon } from '../icons/lucide-copy'
import ViewButton from '../ViewButton'

const EthereumPrivateKey = ({ privateKey }: { privateKey: string }) => {
  const [privateKeyCopied, setPrivateKeyCopied] = useState(false)
  const [privateKeyViewed, setPrivateKeyViewed] = useState(false)

  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-white/10 bg-[#10131d] p-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white/90">Wallet Private Key</p>
        <p className="break-all text-sm text-white/80">
          {privateKeyViewed ? privateKey : '************************'}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {privateKeyCopied ? (
          <CopyButton
            name={privateKey}
            label={<CheckIcon />}
            setState={setPrivateKeyCopied}
            className="cursor-pointer text-white"
          />
        ) : (
          <CopyButton
            name={privateKey}
            label={<CopyIcon size={20} />}
            setState={setPrivateKeyCopied}
            className="cursor-pointer text-white"
          />
        )}
        <ViewButton setState={setPrivateKeyViewed} state={privateKeyViewed} />
      </div>
    </div>
  )
}

export default EthereumPrivateKey