import PropTypes from "prop-types";
import {BiSearch} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";

export const SearchBar = ({toggleSearch}) => {

    return (
        <div className={' p-3 items-center justify-between space-x-8 flex mx-[10vw] m-auto'}>

            <div className={'rounded py-1 px-2  flex justify-center items-center w-full border-gray-400  border border-opacity-60'}>
                <BiSearch size={20}/>
                <input

                    type={'text'}
                    className={'mx-2 p-2 border rounded border-none  w-full outline-none '}
                    placeholder={'SEARCH 100S  OF TEAS , JEANS AND MORE '}
                />
            </div>
            <AiOutlineClose size={24}  onClick={toggleSearch} className={'cursor-pointer'}/>


        </div>
    )
}

SearchBar.propTypes = {
    toggleSearch: PropTypes.func.isRequired
}