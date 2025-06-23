export const Stat = ({heading, subHeading}) => {

    return(

        <div className="flex flex-col items-center leading-none">
            {/* make the number shrink-wrap to its text width */}
            <div className="inline-block text-[22px] font-extrabold ">
                {heading}
            </div>
            {/* pull this upwards a hair so it sits snug under the first line */}
            <div className="inline-block text-[14px] font-bold  ">
                {subHeading}
            </div>
        </div>
    )
}