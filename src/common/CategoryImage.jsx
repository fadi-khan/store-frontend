export  const CategoryImage =({imgUrl,label , onCardClick=()=>{}})=>{

    return (
        <div onClick={onCardClick} className={'flex px-2 flex-col rounded-lg text-center hover:underline  '}>
            <img className={'max-w-[226px]  max-h-[290px]  rounded-lg hover:scale-[101%] flex'} src={imgUrl} alt={label}/>
            <label className={'staff-condensed '}>{label}</label>

        </div>
    )
}