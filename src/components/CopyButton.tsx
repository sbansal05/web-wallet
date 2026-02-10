import { toast } from "react-toastify"
import { CopyIcon } from "./icons/lucide-copy"

const CopyButton = ({name, label, setState, className} : {name: string, label: React.ReactNode, setState?: React.Dispatch<React.SetStateAction<boolean>>, className?: string}) => {
    const onCopy = () => {
        name === '' ? toast.error('Generate seed phrase!') : navigator.clipboard.writeText(`${name}`)
        setState && setState(true)
    }
    return (
        <CopyIcon onClick={onCopy} className={className}>{label}</CopyIcon>
    )
}

export default CopyButton