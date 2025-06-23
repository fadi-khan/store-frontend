export const RatingBanner = () => {

    const FlexibleRatings = ()=>{

        return (
            <div className={'text-center md:text-right '}>
                <label className={'text-lg tracking-wide'}>Activewear built to move</label>
                <h1 className={'text-3xl  lg:text-5xl font-bold '}>Performance Meets</h1>
                <h1 className={'text-3xl  md:text-5xl font-bold perfect-nineties '}>Comfort</h1>
                <h4 className={' py-3 text-sm'}>4.8/5 by over 5 Million+ Trusted Customers</h4>
                <h4 className={'  text-sm'}>Feel the difference with Activewear designed for the grind—whether you're lifting, lounging, or living life full throttle.</h4>
                <button className={'cursor-pointer bg-[#0d0d0d] text-lg text-white mb-3 py-3 font-bold px-16 tracking-wider rounded-lg mt-4'}> Shop Activewear</button>

            </div>
        )
    }

    return (
        <div  className={"md:flex  justify-center items-center gap-x-7 "}>


            <div className={'block md:hidden pt-4'}>
                <FlexibleRatings/>

            </div>

            <div className={"pt-8 "}>
                <img
                    className={ 'max-w-lg pb-0 '}
                    alt=""
                    src={"promotions/promotion2.png"}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>
            <div className={'hidden md:block'}>
                <FlexibleRatings/>

            </div>


        </div>
    )
}