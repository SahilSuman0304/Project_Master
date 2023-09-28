import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [filterdProducts, setFilteredProducts] = useState([]);
  const [filterSectionData, setFilterSectionData] = useState([]);
  const [allSelectedValues, setAllSelectedValues] = useState([]);

  async function getData() {
    try {
      const res = await axios.get(
        "https://findify-assets.s3.amazonaws.com/test-task/test_response.json"
      );
      setProductsData(() => res.data.items);
      setFilterSectionData(() => res.data.facets);
      setFilteredProducts(() => res.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (filterSectionData.length >= 1 && productsData.length >= 1) {
    return (
      <>
        <Home
          productsData={productsData}
          setProductsData={setProductsData}
          filterdProducts={filterdProducts}
          setFilteredProducts={setFilteredProducts}
          filterSectionData={filterSectionData}
          setFilterSectionData={setFilterSectionData}
          allSelectedValues={allSelectedValues}
          setAllSelectedValues={setAllSelectedValues}
        />
      </>
    );
  } else {
    return <h1>Loading..</h1>;
  }
}

export default App;
