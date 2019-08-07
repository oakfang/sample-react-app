import React from "react";
import styled from "styled-components";

const SwitchButton = styled.button`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }

  &[aria-checked="true"] {
    .slider {
      background-color: ${props => props.theme.palette.primary};

      &:before {
        transform: translateX(26px);
      }
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.palette.secondary};
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;

interface SwitchProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "value" | "onChange" | "OnClick" | "role" | "children"
  > {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <SwitchButton
      {...props}
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
    >
      <span className="slider" />
    </SwitchButton>
  );
};
