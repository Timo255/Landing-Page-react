import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToggleContext } from "../context/TogglePopUp";
import { ValidateEmail, ValidateFirstName, ValidateLastName } from "./Validation";
import InlineError from "./InlineError";

const PopUp = () => {
   const { openPopUp,setOpenPopUp } = useContext(ToggleContext)
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [email, setEmail] = useState("")
   const [firstNameError, setFirstNameError] = useState("")
   const [lastNameError, setLastNameError] = useState("")
   const [emailError, setEmailError] = useState("") 
   const [buttonText, setButtonText] = useState("Subscribe")
   const [statusM, setStatusM] = useState({})

   useEffect(()=>{
    // Validation
    ValidateEmail({email, setEmailError});
    ValidateFirstName({firstName, setFirstNameError});
    ValidateLastName({lastName, setLastNameError})
   }, [email, firstName, lastName]);

   const handleSubmit = async (e) => {
    e.preventDefault()
    if(!firstNameError & !lastNameError & !emailError){
      const datas = {firstName, lastName, email};
      setButtonText("Subscribing.....")
      let response = await axios.post(`http://localhost:5000/send`,datas)
      setButtonText("Subscribe");
      setFirstName("");
      setLastName("");
      setEmail("");
      if(response.status == 200){
        setStatusM({success: true, msg: "Thank You For Subscribing Please Check your Email"})
      }else{
        setStatusM({success: false, msg: "something went wrong please try again later"})
      }
    }
   }

  return (
   
      <div className="wrapper">
        <div className={`popup ${openPopUp ? "active" : ""}`}>
          <div className="popup-close-btn" onClick={(e)=>setOpenPopUp(!openPopUp)}>
            <img src="images/close-btn1.png" alt="" />
          </div>
          <h1 className="popH1">Subscribe and check your Email</h1>
          <form onSubmit={handleSubmit} className="formFields">
            {firstNameError && <InlineError error={firstNameError}/>}
            <input 
            type="text" 
            placeholder="Enter First Name *"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            required
            />
            {lastNameError && <InlineError error={lastNameError}/>}
            <input 
            type="text" 
            placeholder="Enter Last Name *"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            required
            />
            {emailError && <InlineError error={emailError}/>}
            <input 
            type="email" 
            placeholder="Enter Your Email *"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
            {statusM.msg ? <p style={{color: `${statusM.success === false ? "red" : "green"}`, marginBottom: "10px"}}>{statusM.msg}</p> : <></>}
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </div>
 
  );
};

export default PopUp;
