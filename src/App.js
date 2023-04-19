import {BrowserRouter  as Router, Routes, Route} from "react-router-dom"
import './App.css';

import Login from "./Views/Login/index"
import Home from "./Views/Home/index"
import Cadastro from "./Views/Cadastro/index"

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
      </Routes>
    </Router>

  )
}
export default App