import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Login from './pages/Login';
import Signup from './pages/Signup'
import Home from './pages/Home'
import Test from './pages/test'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />    
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
