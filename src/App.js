import {BrowserRouter  as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Login from "./Views/Login/index"
import Home from "./Views/Home/index"
import Cadastro from "./Views/Cadastro/index"
import {useContext} from "react"
import { AuthContext } from "./contexts/AuthContext";

function App(){
  const {user, setUser} = useContext(AuthContext)
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