import { useState, useEffect } from "react";
import "../../../styles/tickMark.css";
import "../../../styles/utils.css";
function TickMark({
  label,
  setAllSelectedValues,
  allSelectedValues,
  colorData,
}) {
  const color = colorData.find((color) => color.name === label) || {};
  const { code = null } = color;

  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState(
    allSelectedValues.includes(code)
  );

  const handleToggleClick = (code) => {
    setIsChecked(!isChecked);
    if (allSelectedValues?.includes(code)) {
      setAllSelectedValues((prevOptions) =>
        prevOptions.filter((option) => option !== code)
      );
    } else {
      setAllSelectedValues((prevOptions) => [...prevOptions, code]);
    }
  };

  useEffect(() => {
    setIsSelected(allSelectedValues.includes(code));
  }, [allSelectedValues, code]);

  return (
    <div
      className="color-input-container"
      onClick={() => handleToggleClick(code)}
    >
      <div
        className={`color-input-circle ${
          isChecked && isSelected ? "checked-selected" : ""
        }`}
        style={{
          backgroundColor: code,
          backgroundImage:
            color.name === "Multicolor" ? `url(${color.code})` : "",
          border: color.name === "White" ? "1px solid black" : "none",
        }}
      >
        {color === "Multicolor" && <img src={code} alt="" />}
        {isChecked && isSelected ? (
          <svg
            width="8"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.146 8C3.99739 8 3.84879 7.94326 3.73549 7.83001L0.170104 4.26458C-0.0567013 4.03777 -0.0567013 3.67005 0.170104 3.44333C0.396817 3.21662 0.76447 3.21662 0.991293 3.44333L4.146 6.59823L10.6591 0.170035C10.8859 -0.0566784 11.2535 -0.0566784 11.4802 0.170035C11.7071 0.396749 11.7071 0.764474 11.4802 0.99128L4.5565 7.83012C4.44314 7.94339 4.29455 8 4.146 8Z"
              fill="black"
            />
          </svg>
        ) : null}
      </div>
    </div>
  );
}

export default TickMark;
