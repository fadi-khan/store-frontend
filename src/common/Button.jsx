


export const Button =
    ({ title, className='', disabled = false, onClick = () => {} }) => {
        return (
            <button
                className={`${className} px-[15px] py-[4px] shrink-0  text-sm capitalize rounded-md border-1  border-gray-300 font-bold    items-center    `}
                disabled={disabled}

                type={'button'}
                onClick={onClick}
            >
                {title}
            </button>
        );
    }





