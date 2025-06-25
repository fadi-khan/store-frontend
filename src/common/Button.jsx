


export const Button =
    ({ title, className='px-[15px] py-[6px] rounded-md    ', disabled = false, onClick = () => {} }) => {
        return (
            <button
                className={`${className }  border-1 border-gray-300 cursor-pointer  shrink-0  text-sm capitalize  font-bold    `}
                disabled={disabled}

                type={'button'}
                onClick={onClick}
            >
                {title}
            </button>
        );
    }





