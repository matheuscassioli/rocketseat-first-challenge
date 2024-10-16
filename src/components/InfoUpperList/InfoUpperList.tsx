import styles from "./InfoUpperList.module.css";
import { CgCloseR } from "react-icons/cg";
import { GrTrash } from "react-icons/gr";

type Item = {
  item: string;
  id: number;
};

interface InfoProps {
  list: Item[];
  markedItens: number[];
  setList: (newList: Item[]) => void;
  setCheckedItens: (checkedItems: number[]) => void;
}

const InfoUpperList = ({
  list,
  markedItens,
  setList,
  setCheckedItens,
}: InfoProps) => {
  const clearList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setList([]);
    setCheckedItens([]);
  };

  const desmarkAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCheckedItens([]);
  };

  const isButtonDisabled = markedItens.length < 1;

  const isButtonDisabledDelete = list.length < 1;

  return (
    <div className={styles.infoUpper}>
      <div>
        <button
          title="Desmarcar todos"
          className={`is-small ${isButtonDisabled ? "disabled-button" : ""}`}
          onClick={(e) => desmarkAll(e)}
          {...{}}
        >
          <CgCloseR size={17} />
        </button>
        <i>Quantidade de itens selecionados: {markedItens.length} </i>
      </div>
      <div>
        <button
          title="Deletar todos"
          className={`is-small ${
            isButtonDisabledDelete ? "disabled-button" : ""
          }`}
          onClick={(e) => clearList(e)}
        >
          <GrTrash size={17} />
        </button>
        <i>Quantidade de itens: {list.length}</i>
      </div>
    </div>
  );
};

export default InfoUpperList;
