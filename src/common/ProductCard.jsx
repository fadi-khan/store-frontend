import React from "react";
import { FiPlus } from "react-icons/fi";

export const ProductCard = ({
                                badgeLeft = "#1 Most Liked",
                                badgeRight = "50% OFF",
                                imageSrc,
                                title,
                                originalPrice,
                                discountedPrice,
                                perItemText,
                                onAdd = () => {},
                            }) => {
    return (


        <div>
            {/* 1) Make this wrapper relative so its children can absolutely position against it */}
            <div className="relative inline-block  rounded-lg">
                {/* 2) Your image */}
                <img
                    src={imageSrc}
                    className="block rounded-lg max-h-[381px]"
                    alt="ProductCard"
                />

                {/* 3) Badges, absolutely positioned inside the wrapper */}
                <div className="absolute top-3 left-1 bg-black text-white text-xs font-semibold px-2 py-1 rounded z-10">
                    {badgeLeft}
                </div>
                <div className="absolute top-3 right-1 bg-black text-white text-xs font-semibold px-2 py-1 rounded z-10">
                    {badgeRight}
                </div>

                {/* 4) Add button, also absolute inside the wrapper */}
                <button
                    onClick={onAdd}
                    className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition z-10"
                >
                    <FiPlus size={16} />
                </button>


            </div>

                 <div className="p-1">
                     <h3 className="font-bold  ">{title}</h3>
                     <div className={'flex gap-x-2'}>
                         <div className="mt-1 text-gray-500  line-through">
                             PK Rs.{originalPrice?.toLocaleString()}
                         </div>
                         <div className="mt-1  font-semibold">
                             PK Rs.{discountedPrice?.toLocaleString()}
                         </div>
                     </div>

                        <div className="mt-1 font-light text-red-600">
                            {perItemText}
                        </div>

                </div>
        </div>

    );
};
