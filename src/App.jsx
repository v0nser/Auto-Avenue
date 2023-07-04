import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Models from "./Pages/Models/Models"
import Brands from "./Pages/Brands/Brands"
import Stores from "./Pages/Stores/Stores"
import Contacts from './Pages/Contacts/Contacts'
import './App.css'

function App() {

  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/models" element={<Models/>} />
        <Route path="/brands" element={<Brands/>} />
        <Route path="/stores" element={<Stores/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>   
    </>
  )
}

export default App
