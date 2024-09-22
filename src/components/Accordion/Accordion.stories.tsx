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
    />
  );
};

export const UsersExpandedMode = () => {
  return (
    <Accordion
      titleValue="Accordion Expanded"
      collapsed={false}
      onChange={() => {}}
    />
  );
};

export const AccordionMode= () => {

  let [collapsed, setCollapsed] = useState<boolean>(true)

  return (
    <Accordion
      titleValue="Accordion Mode"
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
    />
  );
};
