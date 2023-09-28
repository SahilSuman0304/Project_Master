import Breadcrum from "./Breadcrum";
import CardList from "./CardList";
import Filter from "./Filter";
import "../../styles/home.css";
import "../../styles/utils.css";

function index({
  productsData,
  filterdProducts,
  setFilteredProducts,
  filterSectionData,
  allSelectedValues,
  setAllSelectedValues,
}) {
  return (
    <>
      <main>
        <div className="main-container">
          <h1 className="search-filer-title">Search Filters</h1>
          <div className="line">
            <hr />
          </div>
          <div className="filter-main-wrapper">
            <div className="filter-outer-div">
              <Filter
                filterSectionData={filterSectionData}
                setAllSelectedValues={setAllSelectedValues}
                allSelectedValues={allSelectedValues}
                setFilteredProducts={setFilteredProducts}
                productsData={productsData}
              />
            </div>
            <div>
              <div className="breadcrumb-wrapper">
                <Breadcrum
                  allSelectedValues={allSelectedValues}
                  setAllSelectedValues={setAllSelectedValues}
                />
              </div>
              <div
                className={`${
                  allSelectedValues ? "" : "mt-4"
                } main-right-container`}
              >
                <CardList
                  filterdProducts={filterdProducts}
                  allSelectedValues={allSelectedValues}
                  setAllSelectedValues={setAllSelectedValues}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default index;
