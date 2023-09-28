import RemainingList from "./RemainingList";
import CustomInput from "./CustomInput";

function FilterList({
  sixItemsValueArray,
  remainingItemsValueArray,
  type,
  allSelectedValues,
  setAllSelectedValues,
  showMore,
  setShowMore,
}) {
  return (
    <>
      <div className="material-content">
        {sixItemsValueArray.map((value, idx) => (
          <div key={idx} className="material-options">
            <div className="material-inputs">
              <CustomInput
                type={type}
                name={value.value}
                allSelectedValues={allSelectedValues}
                setAllSelectedValues={setAllSelectedValues}
              />
              <label htmlFor="material" className="material-label">
                {value.value}
              </label>
            </div>
            <span className="material-counts">{`(${value.count})`}</span>
          </div>
        ))}

        {showMore && remainingItemsValueArray.length >= 1 && (
          <RemainingList
            remainingItemsValueArray={remainingItemsValueArray}
            type={type}
            allSelectedValues={allSelectedValues}
            setAllSelectedValues={setAllSelectedValues}
            setShowMore={setShowMore}
            showMore={showMore}
          />
        )}

        {remainingItemsValueArray.length >= 1 && (
          <p
            className="material-show-container"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <span>
                <span className="more-plus-minus">-</span> Less
              </span>
            ) : (
              <span>
                <span className="more-plus-minus">+</span> More
              </span>
            )}
          </p>
        )}
      </div>
    </>
  );
}
export default FilterList;
