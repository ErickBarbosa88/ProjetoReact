import { useState, createContext, useContext } from "react";

const CurriculoContext = createContext();

export const CurriculoProvider = ({ children }) => {
  const [nome, setNome] = useState("Insira seu nome aqui");
  const [resumo, setResumo] = useState(
    "Professor de Inglês como Segunda Língua competente na utilização de métodos de ensino eficazes centrando-se nas necessidades individuais de cada"
  );
  const [qualificacoes, setQualificacoes] = useState([
    "Avalie os alunos para avaliar suas habilidade, pontos fortes e pontos fracos",
    "Trabalhar com alunos individuais para desafiá-los, melhorar suas habilidades e trabalhar em suas fraquezas.",

    "Envolva os alunos na aprendizagem e adapte as lições ás necessidades de cada aluno.",
    "Assistira os alunos a desenvolver novas habilidades e obter uma apreciação pelo conhecimento e aprendizado.",
  ]);
  const [historicos, setHistoricos] = useState([
    "Jun 2016 - Atual, Professora Adjunta, Colaborou com professores e chefes de departamento para cumprir os objetivos educativos trimestrais e anuais",
    "Desevolveu programas sazonais com eênfase no vocabulário, na pronúncia e na compreensão escrita.",

    "Out 2013 - Fev 2016, Professora Adjunta, Coordenou a comunicação entre os alunos e a administração da escola, de forma a criar um ambiente de aprendizagem eficaz.",
    "Auxiliou o chefe do departamento na determinação de programas diários, programas curriculates e atividades de português.",
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
