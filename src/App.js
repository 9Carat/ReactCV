import { NavbarMain } from "./NavBar";
import { Home } from "./Home";
import { Experiences } from "./Experiences";
import { Education } from "./Education";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { ModalPopup } from "./modalPopup";
import { SecretButton } from "./SecretButton";
import {HashRouter as HashRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <HashRouter>
    <NavbarMain/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Experiences" element={<Experiences/>} />
        <Route path="/Education" element={<Education/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer />
      <ModalPopup />
      <SecretButton />
  </HashRouter>
  )
}

export default App;