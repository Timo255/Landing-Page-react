import './App.css'
import About from './components/About'
import Features from './components/Features'
import NavItem from './components/NavItem'
import PopUp from './components/PopUp'
import Product from './components/Product'
import Testimonials from './components/Testimonials'
import ToggglePopUp from './context/TogglePopUp'

function App() {


  return (
    <ToggglePopUp>
     <NavItem /> 
     <Product />
     <PopUp />
     <Features />
     <About />
     <Testimonials/>
    </ToggglePopUp>
  )
}

export default App
