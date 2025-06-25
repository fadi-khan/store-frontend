import {FooterList} from "../common/FooterList.jsx";
import {customerSupport, moreInfo, shopByList} from "../configs/config.js";
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok} from "react-icons/fa";
import {useState} from "react";


export const Footer = () => {
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const togglePrivacy = () => {
        setPrivacyAccepted(!privacyAccepted);
    };

    const Choice =({text , onClick=()=>{}})=>{
        return(
            <a href={onClick} className="hover:underline tracking-wider text-white font-light text-[10px] md:text-[14px]">{text}</a>

        )

    }

    return (
        <footer className="footer bg-black text-white px-8 py-12 w-full justify-center  ">
            <div
                className="md:flex  md:w-full  md:justify-end   grid grid-cols-1 md:grid-cols-4 gap-2 md:ms-8  ">
                {/* Stay in the Know */}
                <div className={'flex flex-col items-center md:items-start'}>
                    <h1 className=" text-left tracking-wider lg:text-3xl text-[22px] staff-condensed mb-4 uppercase">
                        Stay in the Know
                    </h1>
                    <p className="mb-6 text-sm  ">
                        Exclusive deals, early access, and first look at new products, right to your inbox.
                    </p>
                    <form className="flex mb-6 sk-modernist-mono items-center ">
                        <input
                            type="email"
                            placeholder="ENTER EMAIL ADDRESS"
                            className="flex py-4 p-2 rounded-l bg-white text-black placeholder-black font-mono  "
                        />
                        <button
                            type="submit"
                            className="bg-white flex text-black px-4 py-5 rounded-r font-bold text-xs  "
                            aria-label="Subscribe"
                        >
                            →
                        </button>
                    </form>

                    {/*<FooterList/>*/}
                    <div className="flex space-x-4 text-white text-xl mb-1 md:mb-0">
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF className={'fIcons'} /></a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter className={'fIcons '} /></a>
                        <a href="#" aria-label="Instagram" >
                            <FaInstagram className={'fIcons'}/></a>
                        <a href="#" aria-label="YouTube">
                            <FaYoutube className={'fIcons'} /></a>
                        <a href="#" aria-label="TikTok" >
                            <FaTiktok className={'fIcons'} /></a>

                    </div>
                </div>

                {/* Shop */}

                <div className={'md:flex md:flex-row gap-y-2 flex-col flex justify-between w-full max-w-7xl'}>

                    <FooterList headline="SHOP" tagList={shopByList} />

                    {/* More Info */}
                    <FooterList headline="MORE INFO" tagList={moreInfo} />

                    {/* Support */}
                    <FooterList headline="SUPPORT" tagList={customerSupport} />
                </div>

            </div>

            {/* Bottom row */}
            <div className="  mt-12 border-b border-white  py-8 grid grid-cols-2 md:flex  place-items-center md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-xs">
                <Choice text={"Privacy Policy"}/>
                <Choice text={"Terms & Conditions"}/>
                <Choice text={"Accessibility Statement"}/>
                <div className="flex items-center space-x-2 ">
                    <button
                        onClick={togglePrivacy}
                        aria-pressed={privacyAccepted}
                        className={`w-6 h-6 rounded-full border border-white flex items-center justify-center cursor-pointer transition-colors ${
                            privacyAccepted ? 'bg-white text-black' : 'bg-transparent text-white'
                        }`}
                        aria-label="Toggle Privacy Choices"
                    >
                        {privacyAccepted ? '✓' : '✕'}
                    </button>
                    <Choice text={"Your Privacy Choices"}/>
                </div>
            </div>


            <div className={'flex  md:flex-row flex-col w-full justify-center items-center   md:justify-between md:items-end py-8'}>

                <div></div>
                <div className={'flex'}>

                    <span className={"text-xs"}><a className={"cursor-pointer"}>© True Classic Tees LLC. </a> All Rights Reserved 2025.</span>


                </div>
                <div className={'flex py-4 md:py-0 gap-x-4 text-white '}>
                    <img alt={''} width={"120px"} height={"150px"} src={'svgs/appstore.svg'}></img>
                    <img alt={''} width={"120px"} height={"150px"}   src={'svgs/playstore.svg'}></img>
                </div>


            </div>

        </footer>
    );
};