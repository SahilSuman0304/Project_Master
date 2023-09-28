import { useState, useEffect } from "react";
import TickMark from "./Color/Color-Faceit";
import TextInput from "./Text/Text-Faceit";
import axios from "axios";

function CustomInput({
  type,
  name,
  allSelectedValues,
  setAllSelectedValues,
}) {
  const [colorData, setColorData] = useState([]);

  async function getColorsData() {
    try {
      const res = await axios.get(
        "https://findify-assets.s3.amazonaws.com/test-task/test_color_mapping.json"
      );
      setColorData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getColorsData();
  }, []);

  switch (type) {
    case "text":
      return (
        <TextInput
          type={type}
          name={name}
          allSelectedValues={allSelectedValues}
          setAllSelectedValues={setAllSelectedValues}
        />
      );
    case "color":
      return (
        <TickMark
          label={name}
          colorData={colorData}
          allSelectedValues={allSelectedValues}
          setAllSelectedValues={setAllSelectedValues}
        />
      );
    default:
      return null;
  }
}

export default CustomInput;
