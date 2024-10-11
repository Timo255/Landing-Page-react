import React, { useContext } from 'react'
import BigWatch from "/images/big watch.png"
import mediumWatch from "/images/mediam watch.png"
import smallWatch from "/images/small watch.png"
import { ToggleContext } from '../context/TogglePopUp'

const Product = () => {
    const {openPopUp,setOpenPopUp} = useContext(ToggleContext)
    // console.log(openPopUp)
  return (
    <>
              {/* <!-- product --> */}
    <div id="product">
        <div className="wrapper">
            <div id="dI" className="Detail-imd"> 
                <div className="productDetails">
                    <h1 className="product-header">Smart Digital Watch With 30% Off</h1>
                    <p className="disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptates rerum autem nesciunt aliquam iure, tempore exercitationem repellendus
                    dolorem error reiciendis ut cum optio illum doloribus culpa.</p>
                    <button className="topOffer" id="topOffer-btn" onClick={(e)=>setOpenPopUp(!openPopUp)}>Claim Deal Now</button>
                </div>
                <div className="product-image">
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
            </div>  
        </div>
    </div>
             {/* <!-- /product --> */}
    </>
  )
}

export default Product