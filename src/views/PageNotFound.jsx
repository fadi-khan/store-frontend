
const PageNotFound = ()=>{

    return(
       <div className={'h-80 w-full items-center flex flex-col text-white justify-center bg-black'}>
           <h1 className={' text-white   flex font-bold text-3xl '}> Page Not Found  </h1>
           <a href={'/dashboard'} className={'text-blue-500 underline '}> Go to Home</a>
       </div>
    )
}

export default PageNotFound;