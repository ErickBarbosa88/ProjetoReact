import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurriculoProvider } from "./context/useCurriculo";
import Editar from "./screens/Editar/Editar";
import Home from "./screens/Home/Home";
import Personalweb from "./screens/TelaPrincipal/Personalweb";
import Todo from "./screens/Todo/Todo";

const App = () => {
  return (
    <CurriculoProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/homeback" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/tela-principal" element={<Personalweb />} />
          <Route path="/editar" element={<Editar />} />
        </Routes>
      </BrowserRouter>
    </CurriculoProvider>
  );
};
export default App;
