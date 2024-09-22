import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";
import { Dropdown } from "./components/Dropdown/Dropdown";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapse, setAccordionCollapsed] = useState<boolean>(true);
  let [switchOn, setSwitchOn] = useState<boolean>(true);

  return (
    <div className="App">
      <UncontrolledOnOff onChange={setSwitchOn} />
      <UncontrolledOnOff onChange={setSwitchOn} />

      <Dropdown />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("AppTitle renderAccordioning");
  return <h3>{props.title}</h3>;
}

export default App;
