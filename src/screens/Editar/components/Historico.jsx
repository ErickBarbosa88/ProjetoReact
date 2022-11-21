import { useCurriculo } from "../../../context/useCurriculo";
import Input from "./Input";

export default function Historico({ item }) {
  const { historicos, setHistoricos } = useCurriculo();
  function remover() {
    const index = historicos.indexOf(item);
    const novalista = historicos;
    novalista.splice(index, 1);
    setHistoricos([...novalista]);
  }
  return (
    <div className="input-qualificacoes-container">
      <Input
        value={item}
        onChange={(text) => {
          const index = historicos.indexOf(item);
          let novalista = [...historicos];
          novalista[index] = text;
          setHistoricos(novalista);
        }}
      />

      <p onClick={() => remover()}>Excluir</p>
    </div>
  );
}
