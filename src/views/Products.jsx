import {Animation} from "../common/Animation.jsx";
import {Ratings} from "../common/Ratings.jsx";
import {Price} from "../common/Price.jsx";
import {Button} from "../common/Button.jsx";
import {OfferCard} from "../common/OfferCard.jsx";

const Products = () => {
    return (
        <div className={'p-4 w-full flex'}>

           <div className={'flex justify-between gap-x-4 '}>

               <div>

                   <h1 className={'text-sm p-1 mb-1'}>Top / Crew Necks</h1>
                   <div className={'flex '}>
                       <img
                           className={'w-1/2'}
                           src={'https://www.trueclassictees.com/cdn/shop/files/Staple6pack_9fa81ddf-ba5f-4b6a-ac76-abe52ef013b6.jpg?v=1746510356&width=1000'}
                           alt={''}/>

                       <Animation classNames={"w-1/2"} url={'https://www.trueclassictees.com/cdn/shop/videos/c/vp/c757ca860b28487b937d7d136531c3bc/c757ca860b28487b937d7d136531c3bc.HD-1080p-7.2Mbps-49639405.mp4?v=0'}/>
                   </div>
               </div>

               <div className={'flex flex-col w-full mx-3  '}>
                   <h1  className={'font-bold text-lg -mt-1 '}>Classic Crew Neck</h1>

                  <div className={'flex gap-y-2 flex-col'}>
                      <div className={'text-sm flex gap-x-1 mt-1 '}>
                          <Ratings/><Ratings/><Ratings/><Ratings/> <Ratings partial={true}/>
                          <span className={'mx-2'}> 67,320 Reviews</span> </div>
                      <div className={'flex gap-x-2 items-center'}>
                          <Price lineCut={true} text={'38,400.00'}/>
                          <Price lineCut={false} text={'38,400.00'}/>
                          <Button title={'SAVE 33%'} className={'h-5   rounded-full px-2 text-xs bg-red-800 text-white'}/>
                      </div>
                      <OfferCard/>
                      <div className={'flex mt-1'}>
                          <div className={'flex  items-center bg-gray-200 gap-x-2 ps-1 pe-3 py-1 rounded-xl'}>
                              <Button className={'border-none shadow rounded-full font-light py-[2px] px-3 bg-white'} title={'Curated Packs'}/>
                              <label className={'text-sm'}>Build a Pack / Singles</label>
                          </div>
                      </div>
                  </div>

               </div>

           </div>



        </div>
    )
}

export default Products;