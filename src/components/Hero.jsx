import React, { useRef, useState } from 'react';
import { useState } from 'react';

const Hero = () => {

// keeping track of which video is being played
const [currentIndex,setcurrentIndex]=useState(1);
// chek if user has clicked anything
const[hasClicked,setHasClicked]=useState(false);
// Loading state
const [isLoading,setIsLoading]=useState(true);
// loaded videos state
const [loadedVideos,setLoadedVideos]=useState(0);
// binding for total videos
const totalViedos=4;
// reference for videos
const nextVideoRef=useRef(null);
// 
//handling click evenet on video
const handleMiniVideoClick = ()=>{
    setHasClicked(true);

    setcurrentIndex((prevIndex)=>prevInex+1);
};

return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        {/* video */}
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-100">
            <div className=" border mask-clip-path bg-blue-300 z-50 absolute-center size-64 overflow-hidden rounded-lg ">
                <div onClick={handleMiniVideoClick}>
                 <video ref={nextVideoRef}/>
                </div>    
            </div>    
        </div> 
    </div>
  )
};

export default Hero;