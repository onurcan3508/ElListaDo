import React from 'react'
import ERROR_IMG from "../İmages/404.svg"

const Error404 = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems :"center", flexDirection : "column" , height:"93vh"}}>
            <img src={ERROR_IMG} />
            <h1>BÖYLE BİR SAYFA YOK :)</h1>
        </div>
    )
}

export default Error404
