import { useState } from "react";
import { OnOff } from "./OnOff";
import {action} from '@storybook/addon-actions';

export default {
  title: "OnOff",
  component: OnOff,
};

const callback = action("on or off clicked")

export const OnMode = () => {
  return <OnOff on={true} onChange={callback} />;
};

export const OffMode = () => {
  return <OnOff on={false} onChange={callback} />;
};

export const ChangeMode = () => {

  let [value, setValue] = useState<boolean>(true);

  return <OnOff on={value} onChange={setValue} />;
};
