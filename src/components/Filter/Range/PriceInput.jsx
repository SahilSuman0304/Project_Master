import { useState, useEffect } from "react";
import "../../../styles/priceInput.css";
import "../../../styles/utils.css";
import ExpandLabel from "../ExpandLabel";
import RangeSlider from "./Range-Faceit";

function PriceInput({
  price,
  setFilteredProducts,
  productsData,
  allSelectedValues,
  setAllSelectedValues,
}) {
  const { name, type, values } = price;
  const [showColorOptions, setShowColorOptions] = useState(false);
  const minMaxValueArray = values[0].value.split("_");
  const [min, max] = minMaxValueArray;
  const [minValue, setMinValue] = useState(Number(min));
  const [maxValue, setMaxValue] = useState(Number(max));
  const [priceSelected, setPriceSelected] = useState("");

  useEffect(() => {
    const currentPriceRange = priceSelected;
    if (!allSelectedValues.includes(currentPriceRange)) {
      setMinValue(min);
      setMaxValue(max);
    }
  }, [allSelectedValues]);

  function handleBtnOnClick() {
    const currentPriceSelected = `$${minValue} - $${maxValue}`;

    const filtered = productsData.filter((product) => {
      const productPrice = Number(product.price[0]);
      return productPrice >= minValue && productPrice <= maxValue;
    });
    setFilteredProducts(filtered);

    setAllSelectedValues((prevOptions) => {
      const nonPriceValues = prevOptions.filter(
        (option) => !(option.includes("$") && option.includes("-"))
      );

      return [...nonPriceValues, currentPriceSelected];
    });

    setPriceSelected(currentPriceSelected);
}

  return (
    <div className="price-container">
      <ExpandLabel
        setShowOptions={setShowColorOptions}
        showOptions={showColorOptions}
        title={name}
      />
      {showColorOptions && (
        <div>
          <RangeSlider
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            type={type}
            min={min}
            max={max}
          />
          <div className="range-values-container">
            <div className="range-min-max-container">
              <div className="min-max-value-container">
                <div className="container-value">
                  <span>{`$ ${minValue}`}</span>
                </div>
              </div>
              <div>-</div>
              <div className="min-max-value-container">
                <div className="container-value">
                  <span>{`$ ${maxValue}`}</span>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="btns" onClick={() => window.location.reload()}>
                Reset
              </button>
              <button className="btns" onClick={() => handleBtnOnClick()}>
                GO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default PriceInput;