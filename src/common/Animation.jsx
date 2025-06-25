export const Animation =({url, classNames})=>{
    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    return (
        <video
            className={` ${classNames}`}
            src={url}
            autoPlay
            controls={false}
            loop
            muted
            onContextMenu={handleContextMenu}  // Disable right-click menu here
        />

    )
}