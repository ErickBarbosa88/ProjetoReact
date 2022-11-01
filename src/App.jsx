import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Personalweb from "./screens/TelaPrincipal/Personalweb";
import Todo from "./screens/Todo/Todo";


const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/homeback" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/tela-principal" element={<Personalweb />} />
    </Routes>
  </BrowserRouter>
);
}
export default App;