import { useCurriculo } from "../../../context/useCurriculo";
import Input from "./Input";

export default function Qualificacao({ item }) {
  const { qualificacoes, setQualificacoes } = useCurriculo();

  function remover() {
    const index = qualificacoes.indexOf(item);
    const novalista = qualificacoes;
    novalista.splice(index, 1);
    setQualificacoes([...novalista]);
  }

  return (
    <div className="input-qualificacoes-container">
      <Input
        value={item}
        onChange={(text) => {
          const index = qualificacoes.indexOf(item);
          let novalista = [...qualificacoes];
          novalista[index] = text;
          setQualificacoes(novalista);
          console.log(novalista);
        }}
      />

      <p onClick={() => remover()}>Excluir</p>
    </div>
  );
}
