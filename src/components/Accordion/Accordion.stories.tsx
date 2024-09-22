import { useState } from "react";
import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
};

export const MenuCollapsedMode = () => {
  return (
    <Accordion
      titleValue="Accordion Collapsed"
      collapsed={true}
      onChange={() => {}}
      onClick={() => {}}
      items={[
        { title: "Alex", value: 1 },
        { title: "Bob", value: 2 },
        { title: "Tom", value: 3 },
      ]}
    />
  );
};

export const UsersExpandedMode = () => {
  return (
    <Accordion
      titleValue="Accordion Expanded"
      collapsed={false}
      onChange={() => {}}
      onClick={() => {}}
      items={[
        { title: "Alex", value: 1 },
        { title: "Bob", value: 2 },
        { title: "Tom", value: 3 },
      ]}
    />
  );
};

export const AccordionMode = () => {
  let [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <Accordion
      titleValue="Accordion Mode"
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
      onClick={() => {}}
      items={[
        { title: "Alex", value: 1 },
        { title: "Bob", value: 2 },
        { title: "Tom", value: 3 },
      ]}
    />
  );
};
