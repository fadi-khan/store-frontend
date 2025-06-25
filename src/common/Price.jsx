import React from "react";

export  const Price =({text , lineCut=false})=>{

    return(
        <div className={`${lineCut ? "text-gray-500  line-through" :''} md:text-[16px]  text-xs mt-1 `}>
            PK Rs.{text?.toLocaleString()}
        </div>
    )
}