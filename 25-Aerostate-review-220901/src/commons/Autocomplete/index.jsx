import * as React from "react";
import { AutoComplete } from "antd";

const match = (search, options) => {
  // super smart patter matching process
  return options.filter((opt) => {
    return opt.name.toLowerCase().includes(search.toLowerCase());
  });
};

export default function Autocomplete({
  options,
  placeholder,
  onSelect,
  header,
}) {
  const [value, setValue] = React.useState("");
  const [currentOptions, setCurrentOptions] = React.useState([]);

  const onSearch = (searchText) => {
    if (!searchText) onSelect("");
    const matches = match(searchText, options);
    setCurrentOptions(matches.map((opt) => ({ value: opt.name })));
  };

  React.useEffect(() => {
    setCurrentOptions(options);
  }, [options]);

  return (
    <div>
      <p>{header}</p>
      <AutoComplete
        value={value}
        options={currentOptions}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={(data) => setValue(data)}
        placeholder={placeholder}
        allowClear={true}
      />
    </div>
  );
}
