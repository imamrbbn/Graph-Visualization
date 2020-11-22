import React from 'react'

function Loading() {
    const loadingStyle = {
        position: "absolute",
        top: "0",
        right:"0",
        left:"0",
        bottom:"0",
        backgroundColor:"rgb(0 0 0 / 60%)",
        zIndex:"3"
    }
    return (
        <div  className="d-flex flex-column justify-content-center align-items-center"
        style={loadingStyle}>

            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_yYOpBn.json"  background="transparent"  speed="0.6"  
            style={{width: "300px", height: "300px"}} loop  autoplay></lottie-player>
            <h1 style={{color:"white"}}>Loading...</h1>
        </div>
    )

}
export default Loading