import React, { useState } from 'react'
import closeBtn from '/images/close.png'
import menuBtn from '/images/menu.png'

const NavItem = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState("Product")

  return (
    // <!-- header -->
    <header>
        <div className="wrapper-header">
            <div className="logo"><h2 className="logo-h2">Smart<br/>Watch</h2></div>
            <div className={`navItems ${menuOpen ? "show" : ""}`}>
                <img src={closeBtn} id="closeBtn" alt="" onClick={()=>setMenuOpen(!menuOpen)}/>
                <a 
                href="#dI" 
                onClick={()=> setMenuOpen(false) & setActiveLink("Product")}
                className={`navItem ${activeLink === "Product" ? "active" : ""}`}
                >Product</a>
                <a 
                href="#product-features" 
                onClick={()=> setMenuOpen(false) & setActiveLink("Features")}
                className={`navItem ${activeLink === "Features" ? "active" : ""}`}
                >Features</a>
                <a 
                href="#About" 
                onClick={()=> setMenuOpen(false) & setActiveLink("About")}
                className={`navItem ${activeLink === "About" ? "active" : ""}`}
                >About</a>
                <a 
                href="#tC" 
                onClick={()=> setMenuOpen(false) & setActiveLink("Testimonials")}
                className={`navItem ${activeLink === "Testimonials" ? "active" : ""}`}
                >Testimonials</a>
            </div>
            <div id="menuBar" onClick={()=>setMenuOpen(!menuOpen)}>
                <img src={menuBtn} alt="" />
            </div>
        </div>
    </header>
        // {/* <!-- /header --> */}
  )
}

export default NavItem