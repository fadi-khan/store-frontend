import {Animation} from "../common/Animation.jsx";
import {Ratings} from "../common/Ratings.jsx";
import {Price} from "../common/Price.jsx";
import {Button} from "../common/Button.jsx";
import {OfferCard} from "../common/OfferCard.jsx";
import {useState} from "react";
import {itemSizes} from "../utils/index.js";

const Products = () => {

    const [buildPack, setBuildPack] = useState(false)

    const btnClass = "shadow-sm shadow-black rounded-full bg-white"
    
    return (
        <div className={'md:p-4 w-full '}>

           <div className={'flex flex-col md:flex-row justify-between gap-x-4 '}>

               <div >

                   <h1 className={'text-sm md:p-1 py-1 px-2  '}>Top / Crew Necks</h1>
                   <div className={'flex  '}>
                       <img
                           className={'w-1/2'}
                           src={'https://www.trueclassictees.com/cdn/shop/files/Staple6pack_9fa81ddf-ba5f-4b6a-ac76-abe52ef013b6.jpg?v=1746510356&width=1000'}
                           alt={''}/>

                       <Animation classNames={"w-1/2"} url={'https://www.trueclassictees.com/cdn/shop/videos/c/vp/c757ca860b28487b937d7d136531c3bc/c757ca860b28487b937d7d136531c3bc.HD-1080p-7.2Mbps-49639405.mp4?v=0'}/>
                   </div>
               </div>

               <div className={'flex flex-col w-full px-2 md:p-0   '}>
                   <h1  className={'font-bold text-lg   '}>Classic Crew Neck</h1>

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

                      {/*switch button*/}
                      <div className={'flex  mt-1'}>
                          <div className={'flex  items-center bg-[#dddddd] opacity-80  gap-x-1 ps-1 pe-3 py-1 rounded-xl'}>
                              <Button
                                  className={`border-none ${!buildPack ?btnClass:''} font-light py-[1px] px-3 `}
                                  title={'Curated Packs'}
                                  onClick={() => {setBuildPack(!buildPack)}}
                              />

                              <Button
                                  className={`text-sm ${buildPack ?btnClass:''} font-light border-none py-[1px] px-3`}
                                  title={'Build a Pack / Singles'}
                                  onClick={() => {setBuildPack(!buildPack)}}/>
                          </div>
                      </div>

                      {/*switch button*/}


                      <div className="p-1 inline-flex flex-col gap-2 w-max">
                          {/* HEADER ROW */}
                          <div className="flex items-center gap-x-3 md:justify-between">
                              <div>
                                  <span className="font-bold">Size:</span> Choose your size.
                              </div>
                              <div className="flex items-center gap-2">
                                  <a
                                      href="#"
                                      className="underline flex text-sm items-center gap-[2px]"
                                  >
                                      <img src="images/T.svg" alt="" className="size-3" />
                                      What’s My Size?
                                  </a>
                                  <a href="#" className="underline flex text-sm items-center">
                                      Size Chart
                                  </a>
                              </div>
                          </div>

                          {/* BUTTONS ROW */}
                          <div className="flex gap-2">
                              {itemSizes.map((size) => (
                                  <Button
                                      key={size}
                                      className="px-3 md:w-[66px] h-[35px] rounded-lg"
                                      title={size}
                                  />
                              ))}
                          </div>

                          <h1 className={'text-center'} >1.9m and above?
                              <a href={''} className={'underline'}>Try our tall sizes</a></h1>

                          {/*first button set*/}
                          <h1><span  className={'font-bold'}>Fabric: </span> Classic </h1>
                          <div className={'flex gap-2 '}>
                              <Button title={'Classic'} className={'w-1/2 rounded-lg bg-black text-white'}/>
                              <Button title={'Pima '} className={'w-1/2 py-[6px] rounded-lg'} />
                          </div>

                          {/*2nd button set*/}
                          <h1><span  className={'font-bold'}>Hem: </span> Straight </h1>
                          <div className={'flex gap-2 '}>
                              <Button title={'Straight'} className={'w-1/2 py-1 rounded-lg bg-black text-white'}/>
                              <Button title={'Curved '} className={'w-1/2 py-[6px] rounded-lg'} />
                          </div>

                      </div>





                  </div>



               </div>

           </div>



        </div>
    )
}

export default Products;