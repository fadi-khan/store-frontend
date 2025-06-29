import React from "react";

export  const  PerItemPrice = ({perItemText , className='md:text-[13px] mt-1 font-light'})=>{

    return (
        <div className={`  text-red-800  text-xs  ${className}`}>
            {perItemText}
        </div>
    )
}