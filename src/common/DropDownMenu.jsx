import {Button} from "./Button.jsx";
import {useState} from "react";

export const DropDownMenu = ({dropDown=false,  onCLick ,data=[]}) => {

    const [packCount, setPackCount] = useState(1)

    return(
        <div className={()=>{onCLick()}}>
            <Button  className={'relative  '} title={packCount}/>
            {
                dropDown &&
                <div className={"absolute "}>
                    {
                        data.map((item)=>(
                            <label onClick={()=>setPackCount(parseInt(item))}>{item}</label>
                        ))
                    }

                </div>
            }
        </div>
    )
}