import {Logo} from "../common/Logo.jsx";
import {TopBarItem} from "../common/TopBarItem.jsx";
import {TopbarIcons} from "../common/TopBarIcons.jsx";
import {IoBagOutline, IoPersonOutline, IoSearch} from "react-icons/io5";
import {topBarItemList} from "../configs/config.js";
import {AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";
import {SearchBar} from "./SearchBar.jsx";

export const Topbar = () => {
    const [showSearchbar, setShowSearchbar] = useState(false);

    const toggleSearch = () => {
        setShowSearchbar(!showSearchbar);
    }


    return (

        <div className={'sticky top-0 z-50'}>

            <div className={" bg-black text-white text-xs text-center py-2 font-bold capitalize"}>Major new color drop. Show now  →</div>

            <div style={{border:"4px"}} className={` bg-white  border-b border-gray-300   border-opacity-50 p-2 w-full  `}>


                <div className={'flex items-center justify-between mx-[3vw] '}>


                    <div className={'flex xl:hidden'}>
                        <TopbarIcons icon={<AiOutlineMenu size={18}/>}/>
                        <TopbarIcons  icon={<IoSearch size={18} onClick={toggleSearch}/>}/>
                    </div>
                    <Logo/>
                    <div className={"hidden xl:flex  gap-x-3 "}>
                        {topBarItemList.map((item, index) => (<TopBarItem key={index} text={item}/>))}
                    </div>
                    <div className={'flex items-center justify-between gap-x-1 p-1 '}>

                        <TopbarIcons customClass={'hidden xl:flex '} icon={ <img    src="/svgs/pk.svg" alt="pk" className="h-5 w-5 rounded-full object-cover" />}/>
                        <TopbarIcons customClass={'hidden xl:flex '} icon={<IoSearch size={18} onClick={()=>toggleSearch()} />}/>
                        <TopbarIcons icon={<IoPersonOutline size={20} />}/>
                        <TopbarIcons icon={<IoBagOutline size={20} />}/>
                    </div>

                </div>

                {showSearchbar && <SearchBar toggleSearch={toggleSearch}/>}


            </div>


        </div>
    )
}