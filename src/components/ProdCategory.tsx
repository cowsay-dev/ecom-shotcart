import { useSelector } from "react-redux";

interface PropsInterface {
  checkCat: string;
  checkboxHandler(e: any): void;
}

const ProdCategory = (props: PropsInterface) => {
  const chosenCat = useSelector((state: any) => state.chosenCategory.value);
  return (
    <div className="radio-category">
      <input
        type="checkbox"
        id={`${props.checkCat}`}
        name="prod-category"
        value={`${props.checkCat}`}
        defaultChecked={chosenCat.includes(props.checkCat)}
        onClick={(e: any) => props.checkboxHandler(e)}
      />
      <label htmlFor={`${props.checkCat}`}>
        {props.checkCat.toUpperCase()}
      </label>
    </div>
  );
};

export default ProdCategory;
