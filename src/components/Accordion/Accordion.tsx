type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");

  return (
    <div>
      <AccordionTitle
        onChange={props.onChange}
        title={props.titleValue}
      />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={props.onChange}>{props.title}</h3>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
