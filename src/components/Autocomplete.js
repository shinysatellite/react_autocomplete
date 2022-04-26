import { useState } from "react";
import SearchInput from "./SearchInput";
import Suggestions from "./Suggestions";

const AutoComplete = ({
  label,
  placeholder,
  getDataSource,
  value,
  filterValue,
  exactMatch,
  onChange,
  onFilterValueChange,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(value);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [input, setInput] = useState(filterValue);

  const handleChange = (e) => {
    onFilterValueChange(e, e.target.value);
    setInput(e.target.value);
    const filteredSuggestions = getDataSource(e.target.value);
    setSuggestions(filteredSuggestions);

    if (filteredSuggestions && filteredSuggestions.length > 0) {
      if (exactMatch) {
        const extractFilteredSuggestions = filteredSuggestions.filter(
          (suggestion) => suggestion.label === e.target.value
        );
        setSuggestions(extractFilteredSuggestions);

        if (extractFilteredSuggestions && extractFilteredSuggestions.length > 0)
          setSuggestionsActive(true);
        else setSuggestionsActive(false);
      } else {
        setSuggestions(filteredSuggestions);
        setSuggestionsActive(true);
      }
    } else setSuggestionsActive(false);
  };

  const handleClick = (e, suggestion) => {
    onChange(e, suggestion.value);
    setSuggestionIndex(suggestion.value);
    setSuggestions([]);
    setInput(suggestion.label);
    setSuggestionsActive(false);
  };

  return (
    <div className="autocomplete">
      <SearchInput
        value={input}
        label={label}
        placeholder={placeholder}
        onChange={handleChange}
        suggestionsActive={suggestionsActive}
      />
      {suggestionsActive && (
        <Suggestions
          suggestions={suggestions}
          suggestionIndex={suggestionIndex}
          handleClick={handleClick}
          setSuggestionsActive={setSuggestionsActive}
        />
      )}
    </div>
  );
};

export default AutoComplete;
