import React, { useState } from "react";
import Select, { MultiValue, ActionMeta } from "react-select";
import "./MultiSelect.css";

interface OptionType {
  value: string;
  label: string;
}

const MultiSelect: React.FC<OptionType> = ({ label, value }) => {
  const options: OptionType[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];

  const [selectedOptions, setSelectedOptions] = useState<
    MultiValue<OptionType>
  >([]);

  const handleSelectChange = (
    selected: MultiValue<OptionType>,
    _actionMeta: ActionMeta<OptionType>
  ) => {
    setSelectedOptions(selected);
  };

  const removeOption = (optionToRemove: OptionType) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter(
        (option) => option.value !== optionToRemove.value
      )
    );
  };

  return (
    <div>
      <label className="my-2">{label}</label>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleSelectChange}
      />
      <div className="multi-select-container">
        {selectedOptions.map((option) => (
          <div key={option.value} className="selected-option">
            <span>{option.label}</span>
            <button
              onClick={() => removeOption(option)}
              className="remove-button"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
