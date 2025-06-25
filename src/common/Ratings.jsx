export const Ratings = ({partial=false})=>{


 return (
     <div className={'flex '}>
         <img alt={''} className={'h-[16px] w-[9px]'} src={"images/star-left-filled-svg-75.svg"}/>
         <img alt={''} className={'h-[16px] w-[9px]'} src={`images/${partial?'start_right_unfiiled.svg':'start_right_filled.svg'}`}/>
     </div>
 )
}

