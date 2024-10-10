import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <main>
       {/* Navbar */}
       <Navbar/>
       {/* Hero */}
       <Hero/>
       {/* About */}
       <About/>
       <Footer/>
      </main>
    </>
  )
}

export default App
