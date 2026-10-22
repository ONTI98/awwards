import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">Hero
        {/* video */}
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div className="mask-clip-path bg-blue-300 absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
                <div>
                 Mini videop player   
                </div>    
            </div>    
        </div> 
    </div>
  )
};

export default Hero;