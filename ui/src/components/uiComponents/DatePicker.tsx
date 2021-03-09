import React from "react";
import {
  DatePicker,
  DatePickerProps
} from "@material-ui/pickers";
import { withStyles } from "@material-ui/styles";
import { MuiTextField } from "./TextField";

export const MuiDatePicker = withStyles(() => ({}))(
  (props: DatePickerProps) => {
    return (
      <DatePicker
        {...props}
        TextFieldComponent={(inputProps) => <MuiTextField {...inputProps} />}
      />
    );
  }
);
