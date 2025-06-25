import {Button} from "./Button.jsx";

export const OfferCard = ({className}) => {

    return (
        <div className={`${className} flex `} >

            <div className={'flex  items-center bg-gray-100 gap-x-2 px-2 py-1 rounded-xl'}>
                <img className={'w-7'} src={'images/dollars.png'} alt="" />
                <label className={'text-sm font-light '}>Sign up for 20% off (₨5120)</label>
                <Button className={'border-dashed border py-1 px-2 bg-white rounded-sm border-green-600'} title={'CLAIM OFFER'}/>
            </div>

        </div>
    )
}