const Button = ({name, onClick, className}: { name: string , onClick: () => void, className?: string}) => {
    return (
        <button className={`bg-slate-200 rounded-md duration-300 hover:bg-slate-400 text-white font-bold cursor-default ${className}`} onClick={onClick}>{name}</button>
    )
}

export default Button