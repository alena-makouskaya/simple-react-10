
type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[]
  onClick: (value: any) =>void
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");

  return (
    <div>
      <AccordionTitle
        onChange={props.onChange}
        title={props.titleValue}
      />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) =>void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {
        props.items.map(i => {
          return (
            <li onClick={() => props.onClick(i.value)}>{i.title}</li>

          )
        })
      }
    </ul>
  );
}
