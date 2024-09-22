import { useState } from "react";

type OnOffPropsType = {
  onChange: (on: boolean) => void
};

export function UncontrolledOnOff(props: OnOffPropsType) {
  let [on, setOn] = useState(false);

  const onHandler = () => {
    setOn(!on);
  };

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    backgroundColor: on ? "green" : "",
  };
  
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "4px",
    backgroundColor: on ? "" : "red",
  };

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "8px",
    backgroundColor: on ? "green" : "red",
  };

  const onClicked = () => {
    setOn(true)
    props.onChange(true)
  }
  const offClicked = () => {
    setOn(false)
    props.onChange(false)
  }

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>
        On
      </div>
      <div style={offStyle} onClick={offClicked}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}
