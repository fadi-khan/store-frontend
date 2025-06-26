


export const Button =
    ({ title, className='', disabled = false, onClick = () => {} }) => {
        return (
            <button
                className={`${className }  border-1  border-gray-300 cursor-pointer rounded-md  shrink-0  text-sm capitalize  font-bold    `}
                disabled={disabled}

                type={'button'}
                onClick={onClick}
            >
                {title}
            </button>
        );
    }





