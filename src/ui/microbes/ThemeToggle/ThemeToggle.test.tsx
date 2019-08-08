import React from "react";
import { fireEvent } from '@testing-library/react'
import { render } from "test-utils";
import { ThemeToggle } from "ui/microbes/ThemeToggle";

test("renders without a crash", () => {
  render(<ThemeToggle />);
});

test("Has actual value", () => {
  const { queryByTitle } = render(<ThemeToggle />);
  const btn = queryByTitle("microbes.ThemeToggle.title");
  expect(btn).toHaveAttribute("aria-checked", "true");
  fireEvent.click(btn as Exclude<typeof btn, null>, {});
  expect(btn).toHaveAttribute("aria-checked", "false");
});
