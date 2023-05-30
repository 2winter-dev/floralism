const { useState, useEffect } = require("react");

export default function useBrowserChange(){
    const [height,setHeight]=useState();
    const [width,setWidth]=useState();
//    ////////console.log(window);
    const resizeUpdate=(e)=>{
        // ////////console.log(e.target.innerHeight,e.target.innerWidth);
        setHeight(e.target.innerHeight);
        setWidth(e.target.innerWidth);
    }


    useEffect(()=>{
        window.addEventListener("resize",resizeUpdate);

        return ()=>{
            window.removeEventListener("resize",resizeUpdate);
        }
    },[])

    return [height,width];
} 