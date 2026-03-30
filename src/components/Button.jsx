function Button({children, onClick, type = "button", className = ""}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                px-4 py-2
                sm:px-6 sm:py-3
                text-sm sm:text-base
                bg-[#3F2A52]
                text-[#E6EFF7]
                rounded-xl
                font-medium
                shadow-lg
                transition
                duration-200
                hover:scale-105
                hover:brightness-110
                active:scale-95
                ${className}
            `}
        >
            {children}
        </button>
    );
}

export default Button;