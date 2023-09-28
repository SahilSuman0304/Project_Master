import "../../../styles/rangeSlide.css";

function RangeSlider({
  minValue,
  maxValue,
  setMaxValue,
  setMinValue,
  type,
  min,
  max,
}) {
  return (
    <div>
      <div className="price-range-slider-container">
        <div className="progress-bar-container">
          <div
            className="slider-bar"
            style={{
              left: `${(minValue / max) * 100}%`,
              right: `${100 - (maxValue / max) * 100}%`,
            }}
          ></div>
        </div>
        <div className="range-input">
          <input
            type={type}
            min={min}
            max={max}
            value={minValue}
            onChange={(e) => setMinValue(e.target.value)}
            className="range-min"
          />
          <input
            type={type}
            min={min}
            max={max}
            value={maxValue}
            onChange={(e) => setMaxValue(e.target.value)}
            className="range-max"
          />
        </div>
      </div>
    </div>
  );
}
export default RangeSlider;
