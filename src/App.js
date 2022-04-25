import Autocomplete from "./components/Autocomplete";
import { autoCompleteData } from "./data/data.js";

function App() {
  return (
    <div className="App">
      <Autocomplete data={autoCompleteData} />
    </div>
  );
}

export default App;