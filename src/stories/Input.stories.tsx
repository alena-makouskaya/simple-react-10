import { ChangeEvent, useRef, useState } from "react";

export default {
  title: "Input",
};

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
      />{" "}
      - {value}{" "}
    </>
  );
};

export const GetValueOfUncontrolledInputByButton = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input ref={inputRef} /> - <button onClick={save}> save </button> - actual
      value: {value}{" "}
    </>
  );
};

export const ControlledInput = () => {
  let [parentValue, setParentValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setParentValue(e.currentTarget.value);

  return <input value={parentValue} onChange={onChange} />;
};

export const ControlledCheckbox = () => {
  let [parentValue, setParentValue] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setParentValue(e.currentTarget.checked);

  return <input type="checkbox" checked={parentValue} onChange={onChange} />;
};

export const ControlledRadiobutton = () => {
  let [parentValue, setParentValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setParentValue(e.currentTarget.value);

  return (
    <div>
      <input type="radio" name="gender" value={"Male"} onChange={onChange} />{" "}
      Male
      <input
        type="radio"
        name="gender"
        value={"Female"}
        onChange={onChange}
      />{" "}
      Female
    </div>
  );
};

export const ControlledSelect = () => {
  let [parentValue, setParentValue] = useState<string | undefined>(undefined);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
    setParentValue(e.currentTarget.value);
  };

  return (
    <select value={parentValue} onChange={onChange}>
      <option> -- choose -- </option>
      <option value={"1"}> Minsk </option>
      <option value={"2"}> Moscow </option>
      <option value={"3"}> Kiew </option>
    </select>
  );
};

export const СontrolledInputWithFixedValue = () => (
  <input value={"Enter text value"} />
);
