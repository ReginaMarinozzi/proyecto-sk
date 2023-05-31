
import { Route, Routes } from "react-router-dom";
import  Home from "../components/Home";
import Formulario from "../components/Formulario";
import Ambiente from "../components/servicios/pages/Ambiente";
import Capacitaciones from "../components/servicios/pages/Capacitaciones";
import Gestion from "../components/servicios/pages/Gestion";
import Mediciones from "../components/servicios/pages/Mediciones";
import Prevencion from "../components/servicios/pages/Prevencion";
import Seguridad from "../components/servicios/pages/Seguridad";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <>
    <ResponsiveAppBar />
    <Routes>
        <Route path='/home' element={<Home />} />     
        <Route  path='/ambiente' element={<Ambiente />}/>
        <Route  path='/capacitaciones' element={<Capacitaciones />}/>
        <Route  path='/gestion' element={<Gestion />}/>
        <Route  path='/mediciones' element={<Mediciones />}/>
        <Route  path='/prevencion' element={<Prevencion />}/>
        <Route  path='/seguridad' element={<Seguridad />}/>
        <Route path='/Formulario' element={<Formulario />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/*' element={<Home />} />
      </Routes>
      <Footer />
      </>
  )
}

export default AppRouter