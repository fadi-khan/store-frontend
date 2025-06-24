import { FaChevronDown} from "react-icons/fa";
import {useState} from "react";

export  const FooterList = ({tagList=[], headline}) => {

    const [downClick, setDownClick] = useState(false);
    return (
        <div className={'w-full'}>

            <div className={"relative md:hidden justify-between items-center flex w-full mx-1 border-b "}>
                <h3 className={"tracking-wider text-2xl  staff-condensed text-white   "}>{headline}</h3>
                <FaChevronDown onClick={() => setDownClick(!downClick)}/>
            </div>

            <h3 className={"tracking-wider text-2xl hidden md:block  staff-condensed text-white   "}>{headline}</h3>
                  <div className={`py-4  grid grid-cols-2 md:block  ${downClick?'block':'hidden'}`}>
                      {
                          tagList.map((tag, index) => (
                              <a style={{color:"#e2dad5"}} className={"md:flex md:flex-col max-h-40 font-bold cursor-pointer  "}>{tag}</a>
                          ))
                      }
                  </div>
        </div>
    )

    // flex flex-col
}