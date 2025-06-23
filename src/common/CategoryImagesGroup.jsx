import {CategoryImage} from "./CategoryImage.jsx";

export const ImagesGroup =(urls=[] , label)=>{


    return (
        <>
            {
                urls.map((src, idx) => (
                      <CategoryImage label={label} imgUrl={src}/>
                ))
            }

        </>
    )
}