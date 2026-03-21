import React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchTextField: React.FunctionComponent<Props> = (props) => {
  const { value, onChange } = props;
  return (
    <TextField
      id="filled-search"
      label="Search field"
      type="search"
      variant="filled"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
