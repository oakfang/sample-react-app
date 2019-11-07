import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';
import { Theme } from "../src/providers/Theme";

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /\.stories\.tsx$/);

addDecorator(withInfo); 
addDecorator(story => {
  return <Theme>{story()}</Theme>;
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
