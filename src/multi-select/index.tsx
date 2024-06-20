import React from "react";

import "../style.css";

import Dropdown from "./dropdown";
import { MultiSelectProvider } from "../hooks/use-multi-select";
import { SelectProps } from "../lib/interfaces";

const MultiSelect = (props: SelectProps) => (
  <MultiSelectProvider props={props}>
    <div className={`rmsc ${props.className || "multi-select"}`}>
      <Dropdown />
    </div>
  </MultiSelectProvider>
);

export default MultiSelect;
