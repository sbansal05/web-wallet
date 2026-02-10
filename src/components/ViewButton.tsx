import { EyeIcon } from "./icons/tabler-eye"
import { EyeClosedIcon } from "./icons/tabler-eye-closed"

const ViewButton = ({setState, state} : {setState: React.Dispatch<React.SetStateAction<boolean>>, state: boolean}) => {
    const onClick = () => {
        setState(!state)
    }
    return (
        <button className="text-white" onClick={onClick}>
            {state ? <EyeClosedIcon /> : <EyeIcon/>}
        </button>
    )
}

export default ViewButton