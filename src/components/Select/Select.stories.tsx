import { useState } from "react";
import { Select } from "./Select";

export default {
  component: Select,
  title: "Select",
};

export const BaseExample = () => {

  const [value, setValue] = useState("2")


  return <Select value={value} onChange={setValue} items={[
    { value: "1", title: "Minsk" },
    { value: "2", title: "Moscow" },
    { value: "3", title: "Kiew" },
  ]} />;
};

export const WithoutValue = () => {
  const [value, setValue] = useState(null)

  return <Select value={value} onChange={setValue} items={[
    { value: "1", title: "Minsk" },
    { value: "2", title: "Moscow" },
    { value: "3", title: "Kiew" },
  ]} />;
};
