import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Switch } from "ui/atoms/Switch";

storiesOf("atoms/Switch", module).add(
  "Basic",
  () => {
    return <Switch value={false} onChange={action("switch")} />;
  },
  { info: { inline: true } }
);
