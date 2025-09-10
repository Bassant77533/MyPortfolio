import { ToastContainer } from "react-toastify"
import { About } from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import { Navbar } from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <ToastContainer/>
     <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
