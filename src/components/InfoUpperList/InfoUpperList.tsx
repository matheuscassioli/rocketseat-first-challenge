type Item = {
  item: string;
  id: number;
};

interface InfoProps {
  list: Item[];
  markedItens: number[];  
}

const InfoUpperList = ({ list, markedItens }: InfoProps) => {
  const styleInfoUpper = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 0",
    width: "70%",
  };

  return (
    <span style={styleInfoUpper}>
      <i>Quantidade de itens: {list.length}</i>
      <i>Quantidade de itens selecionados: {markedItens.length} </i>
    </span>
  );
};

export default InfoUpperList;
