import { useState } from "react";

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //Con el siguiente if evitamos los espacios vacios
    if (inputValue.trim().length <= 1) {return;}
    props.onNewCategory(inputValue.trim());
    setInputValue('')
  };

  return (
    <form action="" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
