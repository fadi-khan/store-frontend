import {RatingBanner} from "../common/RatingBanner.jsx";
import {Stat} from "../common/Stat.jsx";
import {Categories} from "../common/Categories.jsx";
import {ProductCard} from "../common/ProductCard.jsx";

export const Dashboard =()=>{
    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    return(
        <div className={'overflow-hidden'}>

            <div>
                <video
                    src="/videos/banner_video.mp4"
                    autoPlay
                    controls={false}
                    loop
                    muted
                    onContextMenu={handleContextMenu}  // Disable right-click menu here
                    style={{width: '100%', height: 'auto'}} // optional styling
                />
            </div>


            <img className={'hidden md:block'} src={'promotions/promotional_wide_banner.jpg_v=1750343825&width=3000'}
                 alt={''}/>
            <img className={'block md:hidden'} src={'promotions/promotional_sm_banner.jpg_v=1750343847&width=1500'}
                 alt={''}/>

            <div className={'flex items-center justify-center mt-12 mb-8 gap-x-12  '}>
                <Stat heading={'5 Million+'} subHeading={'Happy Customers'}/>
                <Stat heading={'200K+ '} subHeading={'5-Star Reviews '}/>
                <Stat heading={'100-Day'} subHeading={'Perfect Fit Guarantee'}/>
            </div>

            <Categories/>

            <div className={'bg-[#d8e3cf] md:px-[15vw] px=[5vw]' }>
                <RatingBanner/>
            </div>

            <div className={'flex flex-col w-full justify-center items-center  gap-y-3 pb-4 bg-black'}>

                <img className={'lg:max-w-[480px] mt-4 w-auto h-auto flex'} src={'/images/welcome_bts.png'} alt={'welcome'}/>

                <video

                    className={'md:w-1/2 w-full h-auto'}
                    src="/videos/bts.mp4"
                    preload="auto"
                    poster="https://cdn2.videowise.com/custom-videos/thumbnails/1743723439412_da60d83e-56c6-41a0-80b5-64fdaaf69a87.jpeg"
                    autoPlay={false}
                    controls={true}
                    onContextMenu={handleContextMenu}  // Disable right-click menu here
                />
            </div>

            <h1 className={'staff-condensed text-3xl w-full text-center py-4 '}>Shop Best  Sellers </h1>
            <div className={'grid grid-cols-2 lg:flex justify-center items-center gap-4 m-4'}>

                <ProductCard
                    perItemText={'Only PK Rs.5,466.66 per item'}
                    originalPrice={'65000,600'}
                    discountedPrice={'32,800'}
                    title={"The Staple Classic Crew Neck 6-Pack"} imageSrc={'images/Staple6pack.webp'}/>
                <ProductCard
                    perItemText={'Only PK Rs.7,283.33 per item'}
                    originalPrice={'76,500.00'}
                    discountedPrice={'43,700.00'}
                    title={"Heather Staple Active Crew 6-Pack"}
                    imageSrc={'images/Staple-Active-Crew-6-Pack.webp'}/>
                <ProductCard
                    perItemText={'Only PK Rs.8,500.00 per item'}
                    originalPrice={'38,300.00'}
                    discountedPrice={'25,500.00'}
                    title={"The Standard Classic Polo 3-Pack"}
                    imageSrc={'images/Standard3pack.webp'}/>
                <ProductCard
                    perItemText={'Only PK Rs.9,125.00 per item'}
                    originalPrice={'58,300.00'}
                    discountedPrice={'36,500.00'}
                    title={"Black Pima Crew Neck 4-Pack"}
                    imageSrc={'images/AllBlackClassicPimaCrew4pack.webp'}/>
            </div>

        </div>
    )
}