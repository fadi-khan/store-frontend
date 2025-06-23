// import {Button} from "./Button.jsx";
// import {useState} from "react";
// import {CategoryImage} from "./CategoryImage.jsx";
//
//
//
// export  const Categories = () => {
//
//     const [cat, setCat] = useState('')
//     const [imgTitle, setImgTitle] = useState()
//
//
//     // const labels = Object.keys(categoryImages);
//
//     const categoryImages = {
//         Bestsellers: [
//             "/images/bestsellers/active-crews/Short_Sleeve_Active_Crew_Neck_Black_3.webp",
//             "/images/bestsellers/boxer-briefs/boxer_briefs_black_2.webp",
//             "/images/bestsellers/comfort-chino-pants/KHAKI_07_revise.webp",
//             "/images/bestsellers/comfort-chino-pants/KHAKI_07_revise.webp",
//             "/images/bestsellers/crews/Crews.webp",
//             "/images/bestsellers/curved-hem/NAVY_10.webp",
//             "/images/bestsellers/polos/Polo_Navy.webp",
//
//             "/images/bestsellers/prima-crews/BLACK_3.webp",
//             "/images/bestsellers/polos/Polo_Navy.webp",
//             "/images/bestsellers/straight-denims/Straight-Fit-Comfort-Jeans_BLACK.webp",
//         ],
//         "New Arrival": [
//             "/images/new_arrival/1.jpg",
//             "/images/new_arrival/2.jpg",
//         ],
//         Tops: [
//             "/images/tops/1.jpg",
//             "/images/tops/2.jpg",
//             "/images/tops/3.jpg",
//             "/images/tops/4.jpg",
//         ],
//         // …and so on for each category
//     };
//     const labels = [
//         "Bestsellers",
//         "New Arrival",
//         "Tops",
//         "Bottom",
//         "Tall",
//         "Dress Shirts",
//         "Outerwear",
//         "Underwear",
//         "Socks",
//         "Accessories",
//     ];
//
// // in your render:
//
//
//     return(
//
//         <div className={'w-full    mx-2 px-4 pt-4  pb-3 '}>
//
//             <div className={'flex mx-2  w-full lg:justify-center  gap-x-2'}>
//                 {labels.map(cat => (
//                     <Button key={label} title={cat} onClick={() => setCat(cat)}/>
//                 ))}
//             </div>
//
//             {
//                 categoryImages[cat].map((image, index) => (
//                     <CategoryImage />
//                 ))
//             }
//         </div>
//
//     )
// }
//
//
//  const ImagesGroup =(urls=[] , label)=>{
//
//
//     return (
//         <>
//             {
//                 urls.map((src, idx) => (
//                     <CategoryImage label={label} imgUrl={src}/>
//                 ))
//             }
//
//         </>
//     )
// }


import React, {useState} from "react";
import {Button} from "./Button.jsx";
import {CategoryImage} from "./CategoryImage.jsx";
import {categoryImages} from "../utils/imgWithLable.js";

export const Categories = () => {
    const [selectedCat, setSelectedCat] = useState("Bestsellers");

    // Each entry now has both imgUrl and subLabel


    const labels = Object.keys(categoryImages);

    return (
        <div className="w-full  lg:px-4 pt-4 pb-3">
            {/* Category buttons */}
            <div className="flex mx-2 w-full lg:justify-center gap-x-2 overflow-x-auto">
                {labels.map((label) => (
                    <Button
                        key={label}
                        title={label}
                        onClick={() => setSelectedCat(label)}
                        className={`flex-shrink-0 ${selectedCat === label
                            ? "bg-black text-white"    // active state
                            : "bg-white text-black"}   `}

                    />
                ))}
            </div>

            {/* Images for selected category */}
            {selectedCat && categoryImages[selectedCat] && (
                <div className=" py-4 items-center justify-center flex flex-wrap   text-center gap-2">
                    {categoryImages[selectedCat].map(({imgUrl, subLabel}, idx) => (
                        <CategoryImage key={idx} label={subLabel} imgUrl={imgUrl}/>
                    ))}
                </div>
            )}

        </div>
    );
};
