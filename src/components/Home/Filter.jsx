import ListInput from "../Filter/Text/ListInput";
import PriceInput from "../Filter/Range/PriceInput";
import "../../styles/filter.css";
import "../../styles/utils.css";
function Filter({
  filterSectionData,
  setAllSelectedValues,
  allSelectedValues,
  setFilteredProducts,
  filterdProducts,
  productsData,
}) {
  console.log(filterSectionData);

  return (
    <div>
      <h1 className="filter-heading">Filters</h1>
      <div className="line">
        <hr style={{ color: "#efefef" }} />
      </div>
      <div>
      {filterSectionData.map((data, idx) => {
 switch (data.type) {
  case "range":
    return (
      <div key={`div-${idx}`}>
        <PriceInput
          key={`price-${idx}`}
          price={data}
          setAllSelectedValues={setAllSelectedValues}
          allSelectedValues={allSelectedValues}
          setFilteredProducts={setFilteredProducts}
          productsData={productsData}
          filterdProducts={filterdProducts}
        />
        <div className="line">
          <hr style={{ color: "#efefef" }} />
        </div>
      </div>
    );
  case "text":
  case "color":
  default:
    return (
      <div key={`div-${idx}`}>
        <ListInput
          key={`material-${idx}`}
          material={data}
          setAllSelectedValues={setAllSelectedValues}
          allSelectedValues={allSelectedValues}
        />
        <div className="line">
          <hr style={{ color: "#efefef" }} />
        </div>
      </div>
    );
}

})}

      </div>
    </div>
  );
}

export default Filter;
