import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Personalweb from "./screens/TelaPrincipal/Personalweb";
import Todo from "./screens/Todo/todo";


const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="todo" element={<Todo />} />
        <Route path="TelaPrincipal" element={<Personalweb />} />
    </Routes>
  </BrowserRouter>
);
}
export default App;