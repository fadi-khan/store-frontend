import {FaFacebookF} from "react-icons/fa";

export  const FooterIconList =({icon=<FaFacebookF className={"text-white"}/>,url} , ariaLabel="Facebook")=>{


    return(
        <div>

            <a href="#" aria-label={ariaLabel} className=" hover:text-gray-400">
                {
                    icon
                }
            </a>



        </div>
    )
}