import { useState, createContext, useContext } from "react";

const CurriculoContext = createContext();

export const CurriculoProvider = ({ children }) => {
  const [nome, setNome] = useState("Insira seu nome aqui");
  const [resumo, setResumo] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
  const [qualificacoes, setQualificacoes] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ]);
  const [historicos, setHistoricos] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ]);
  return (
    <CurriculoContext.Provider
      value={{
        nome,
        setNome,
        resumo,
        setResumo,
        qualificacoes,
        setQualificacoes,
        historicos,
        setHistoricos,
      }}
    >
      {children}
    </CurriculoContext.Provider>
  );
};

export const useCurriculo = () => {
  return useContext(CurriculoContext);
};
