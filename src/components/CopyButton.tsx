import { toast } from 'react-toastify'
import { CopyIcon } from './icons/lucide-copy'

const CopyButton = ({
  name,
  label,
  setState,
  className,
}: {
  name: string
  label?: React.ReactNode
  setState?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}) => {
  const onCopy = () => {
    if (!name) {
      toast.error('Generate seed phrase!')
      return
    }

    navigator.clipboard.writeText(name)
    if (setState) {
      setState(true)
    }
  }

  if (label) {
    return (
      <button className={className} onClick={onCopy} type="button">
        {label}
      </button>
    )
  }

  return <CopyIcon onClick={onCopy} className={className} />
}

export default CopyButton
