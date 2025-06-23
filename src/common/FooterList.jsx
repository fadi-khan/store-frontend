export  const FooterList = ({tagList=[], headline}) => {

    return (
        <div className={'w-full'}>

            <h3 className={"tracking-wider text-2xl  staff-condensed text-white   "}>{headline}</h3>
                  <div className={'py-4'}>
                      {
                          tagList.map((tag, index) => (
                              <a style={{color:"#e2dad5"}} className={" flex flex-col font-bold cursor-pointer  "}>{tag}</a>
                          ))
                      }
                  </div>
        </div>
    )


}