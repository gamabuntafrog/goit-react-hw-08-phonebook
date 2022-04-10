import { useDispatch } from "react-redux";
import { filter } from "../../Redux/contactsSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <>
      <div>
        <input type="text" onChange={onChange} placeholder="Фильтр"></input>
      </div>
    </>
  );
};

export default Filter;
