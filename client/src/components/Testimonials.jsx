import React, { useContext } from "react";
import { ToggleContext } from "../context/TogglePopUp";

const Testimonials = () => {
  const { openPopUp,setOpenPopUp } = useContext(ToggleContext)

  const testimonialss = [
    {
      img: "/images/user1.png",
      star: "/images/star.png",
      name: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio quos totam enim ducimus dicta explicabo error,  obcaecati, necessitatibus accusantium aut corrupti delectus minus aliquid vel?",
    },
    {
      img: "/images/user2.png",
      star: "/images/star.png",
      name: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio quos totam enim ducimus dicta explicabo error,  obcaecati, necessitatibus accusantium aut corrupti delectus minus aliquid vel?",
    },
    {
      img: "/images/user1.png",
      star: "/images/star.png",
      name: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio quos totam enim ducimus dicta explicabo error,  obcaecati, necessitatibus accusantium aut corrupti delectus minus aliquid vel?",
    },
  ];

  return (
    // <!-- Testimonials -->
    <div id="testimonials">
      <div className="wrapper">
        <h1 className="test-h1">Customer Reviews</h1>
        <div className="test-content">
          <div id="tC" className="test-boxes">
            {
             testimonialss.map((ts,i)=>(
                <div key={i} className="test-box">
                <div className="test-star">
                  <img src={ts.star} alt="" />
                  <img src={ts.star} alt="" />
                  <img src={ts.star} alt="" />
                  <img src={ts.star} alt="" />
                </div>
                <div className="testUser-name">
                  <img src={ts.img} alt="" />
                  <h1 className="test-name">{ts.name}</h1>
                </div>
                <div className="test-disc">
                  {ts.desc}
                </div>
              </div>
             ))
            }
          </div>
          <div className="offerBtn">
              <h1 className="offer-h1">Get 30% Off. Limited Time Offer</h1>
              <button 
              className="bottomOffer"
              onClick={()=>setOpenPopUp(!openPopUp)}
              >Claim Deal Now</button>
            </div>
        </div>
      </div>
    </div>
    //   {/* <!-- /Testimonials --> */}
  );
};

export default Testimonials;
