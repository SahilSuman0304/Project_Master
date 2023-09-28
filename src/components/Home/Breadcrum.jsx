import "../../styles/breadcrumb.css";
import "../../styles/utils.css";

function Breadcrumb({ allSelectedValues, setAllSelectedValues }) {
  function removeValue(valueToRemove) {
    setAllSelectedValues(
      allSelectedValues.filter((val) => val !== valueToRemove)
    );
  }

  return (
    <div className="breadcrumb-container">
      {allSelectedValues.map((value, idx) => {
        const isColorOrImage = value.includes("#") || value.includes(".jpg");
        return (
          <div key={value + idx} className="breadcrumb-content">
            {isColorOrImage && (
              <div
                className="color-div"
                style={{
                  backgroundColor: value,
                  border: value.includes("#fff") ? "1px solid black" : "none",
                  backgroundImage: value.includes(".jpg") ? `url(${value})` : "",
                }}
              ></div>
            )}
            <span className="breadcrumb-text" onClick={() => removeValue(value)}>
              {!isColorOrImage && value}
              <span style={{ marginLeft: '5px' }}> X</span>
            </span>
            {idx !== allSelectedValues.length - 1 && (
              <span className="slash">/</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
