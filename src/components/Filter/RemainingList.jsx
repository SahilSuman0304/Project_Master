import CustomInput from "./CustomInput";

function RemainingList({
  remainingItemsValueArray,
  type,
  allSelectedValues,
  setAllSelectedValues,
}) {
  return (
    <>
      {remainingItemsValueArray.map((value, idx) => (
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
    </>
  );
}
export default RemainingList;
