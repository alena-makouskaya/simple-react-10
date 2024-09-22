import { ChangeEvent, useState } from "react";

type DropdownPropsType = {};

export function Dropdown(props: DropdownPropsType) {
  const [value, setValue] = useState("");

  const options = [
    { label: "Red", value: 1 },
    { label: "Green", value: 2 },
    { label: "Yellow", value: 3 },
  ];

  const onChangehandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);
    console.log(e.currentTarget.value)
  };

  return (
    <div>
      <h3>Get Selected Value</h3>

      <select onChange={onChangehandler}>
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
}
