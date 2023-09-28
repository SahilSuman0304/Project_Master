import "../../styles/expandLabel.css";
import "../../styles/utils.css";

function ExpandLabel({ setShowOptions, showOptions, title }) {
  return (
    <div className="expand-container">
      <h3 className="expand-title">{title}</h3>
      <p className="" onClick={() => setShowOptions(!showOptions)}>
        {showOptions ? (
          <span className="minus">-</span>
        ) : (
          <span className="plus">+</span>
        )}
      </p>
    </div>
  );
}
export default ExpandLabel;
