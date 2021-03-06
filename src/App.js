import { useState, useEffect } from "react";
import Autocomplete from "./components/Autocomplete";
import { styled } from "@stitches/react";

const StyledWrapper = styled("div", {
  fontSize: 16,
  fontFamily: "Inter",
});

function App() {
  const [data, setData] = useState(null);

  const getDataSource = (filterValue) => {
    if (filterValue.length > 0) {
      const filterSuggestions = data.filter(
        (suggestion) =>
          suggestion.label.toLowerCase().indexOf(filterValue.toLowerCase()) > -1
      );
      return filterSuggestions;
    }
  };

  const onChange = (e, filterValue) => {
    console.log("Value Change => ", e, filterValue);
  };

  const onFilterValueChange = (e, filterValue) => {
    console.log("Filter Change => ", e, filterValue);
  };

  /** Get inital Data */
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.stg.behavera.com/v1/data_sources/preferences?lang=EN`
      );
      const result = await response.json();
      await setData(result.payload.industries);
    }
    fetchData();
  }, []);

  return (
    <StyledWrapper className="App">
      <Autocomplete
        label="Input Field"
        placeholder="Please input the search query!"
        filterValue="air"
        value={0}
        exactMatch={false}
        getDataSource={getDataSource}
        onChange={onChange}
        onFilterValueChange={onFilterValueChange}
      />
    </StyledWrapper>
  );
}

export default App;
