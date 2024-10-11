import React from 'react'
import BigWatch from "/images/big watch.png"
import mediumWatch from "/images/mediam watch.png"
import smallWatch from "/images/small watch.png"
import checkTick from "/images/Checkbox.png"

const About = () => {
  return (
    
    // <!-- About -->
    <div id="About">
        <div className="wrapper">
            <div className="about-content">
                <div className="about-img">
                    <img 
                         
                    srcSet={`${BigWatch} 333w,
                            ${mediumWatch} 254w,
                            ${smallWatch} 206w`}
                    
                    sizes="(min-width: 1200px) 333px
                           (min-width: 768px) 254px,
                           (min-width: 360px) 206px"   
                   
                    src={BigWatch}            
               />
                </div>
                <div className="about-disc">
                    <h1 className="about-h1">About The Product</h1>
                    <p className="abDisc">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Temporibus molestiae dolorem at quos quo? 
                    </p>
                    <div className="checkDisc">
                        <img src={checkTick} alt=""/>
                        <p className="checkText">Model No #240 Blackmart</p>
                    </div>
                    <div className="checkDisc">
                        <img src={checkTick} alt=""/>
                        <p className="checkText">Camera Resulation 24 Mega Pixel</p>
                    </div>
                    <div className="checkDisc">
                        <img src={checkTick} alt=""/>
                        <p className="checkText">Image Processor DIGIC 7</p>
                    </div>
                    <div className="checkDisc">
                        <img src={checkTick} alt=""/>
                        <p className="checkText">Effective Pixels Approx, 24,20 megapixels</p>
                    </div>
                    <div className="checkDisc">
                        <img src={checkTick} alt=""/>
                        <p className="checkText">Aspect Ratio 3:2</p>
                    </div>
                    <div className="checkDisc">
                        <img src={checkTick} alt=""/>
                        <p className="checkText">Lens Mount EF/EF-5</p>
                    </div>
                    <div className="checkDisc">
                        <img src={checkTick} alt=""/>
                        <p className="checkText">Focal Length Equlvalent</p>
                    </div>
                </div>
            </div>
        </div>
    </div>              
                //   {/* <!-- /About --> */}
  )
}

export default About