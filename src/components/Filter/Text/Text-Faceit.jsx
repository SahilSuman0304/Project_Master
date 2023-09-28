import { useEffect, useState } from "react";
import "../../../styles/customInput.css";
import "../../../styles/utils.css";

function CustomInput({ type, name, allSelectedValues, setAllSelectedValues }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (allSelectedValues?.includes(name)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [allSelectedValues, name]);

  const handleInputClick = (selectedValue) => {
    setIsChecked((prev) => !prev);
    if (allSelectedValues?.includes(selectedValue)) {
      setAllSelectedValues((prevOptions) =>
        prevOptions.filter((option) => option !== selectedValue)
      );
    } else {
      setAllSelectedValues((prevOptions) => [...prevOptions, selectedValue]);
    }
  };

  return (
    <div
      className={`material-input-container ${isChecked ? "tick" : "unchecked"}`}
    >
      <input
        type={type}
        name={name}
        onClick={() => handleInputClick(name)}
        className={`material-input`}
      />
    </div>
  );
}

export default CustomInput;
