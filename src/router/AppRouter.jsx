
import { Route, Routes } from "react-router-dom";
import  Home from "../components/Home";
import Formulario from "../components/Formulario";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/Formulario' element={<Formulario />} />
        <Route path='/Footer' element={<Footer />} />
      </Routes>
  )
}

export default AppRouter