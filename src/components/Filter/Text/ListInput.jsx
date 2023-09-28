import { useState } from "react";
import "../../../styles/materialInput.css";
import "../../../styles/utils.css";
import ExpandLabel from "../ExpandLabel";
import FilterList from "../FilterList";

function MaterialInput({ material, setAllSelectedValues, allSelectedValues }) {
  const { name, type, values } = material;

  const [showMaterialOptions, setShowMaterialOptions] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const sixItemsValueArray = values.slice(0, 6);
  const remainingItemsValueArray = values.slice(6);

  return (
    <div className="material-wrapper">
      <ExpandLabel
        setShowOptions={setShowMaterialOptions}
        showOptions={showMaterialOptions}
        title={name}
      />
      {showMaterialOptions && (
        <FilterList
          sixItemsValueArray={sixItemsValueArray}
          remainingItemsValueArray={remainingItemsValueArray}
          type={type}
          allSelectedValues={allSelectedValues}
          setAllSelectedValues={setAllSelectedValues}
          showMore={showMore}
          setShowMore={setShowMore}
        />
      )}
    </div>
  );
}
export default MaterialInput;
