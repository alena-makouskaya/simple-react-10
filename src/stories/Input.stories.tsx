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
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }


  return (
    <>
      <input ref={inputRef}/> - <button onClick={save}> save </button> - actual value:  {value}{" "}
    </>
  );
};

export const СontrolledInputWithFixedValue = () => (
  <input value={"Enter text value"} />
);
