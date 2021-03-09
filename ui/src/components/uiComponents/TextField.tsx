/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import {
  MenuItem,
  styled,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { theme as muiTheme } from "../../theme/Theme";
import { color } from "../../theme/Color";

interface ISelectOptions {
  placeholder?: string;
  options?: {
    label: string;
    value: number | string;
  }[];
  themeType?: "dark" | "light";
  readOnly?: boolean;
}

const MTextField = withStyles(() => ({
  root: {
    marginTop: 0,
    marginBottom: "23px !important",
    width: "100%",
    background: "transparent",
    textAlign: "left",
    outLine: 0,
    "& .input-label": {
      fontSize: "14px",
      transform: "translate(0px, 0px) scale(1) !important",
      display: "block",
      marginBottom: 8,
      fontWeight: 600,
      position: "relative",
      color: (props: ISelectOptions) =>
        props.themeType === "light"
          ? `${muiTheme.color.disabledText} !important`
          : "",
    },
    "&.datepicker .input-wrap": {
      flexDirection: "row-reverse",
      "& > input": {
        padding: 0,
      },
      "& .MuiInputAdornment-positionEnd": {
        marginLeft: 0,
        marginRight: 8,
        "& button": {
          background: (props: ISelectOptions) =>
            props.themeType === "light" ? "#D0D9E2" : "transparent",
          borderRadius: "4px 0px 0 4px",
          padding: "6px 20px",
          color: (props: ISelectOptions) =>
            props.themeType === "light"
              ? "#192243"
              : muiTheme.palette.grey[800],
          marginRight: 0,
          marginLeft: "0px",
          height: "38px",
          borderRight: 0,
        },
      },
      "&.Mui-focused button": {
        background: muiTheme.palette.primary.light,
      },
    },
    "& input:-internal-autofill-selected": {
      backgroundColor: "transparent !important",
    },
    "& input:-webkit-autofill": {
      "-webkit-transition-delay": "9999s",
      "-webkit-transition":
        "color 9999s ease-out, background-color 9999s ease-out",
      background: "transparent",
      " -webkit-text-fill-color": "currentColor",
      "-webkit-box-shadow": "0 0 0 100px transparent inset", // autofill background color
      "&:focus": {},
    },
    "& .input-wrap": {
      "& .clear-icon": {
        color: muiTheme.palette.grey[800],
      },
      "& .search-icon": {
        marginTop: 0,
        "& svg": {
          width: 18,
        },
      },
      "& .search-icon + input": {
        paddingLeft: 0,
        paddingRight: 0,
      },
      border: (props: ISelectOptions) =>
        props.readOnly
          ? "0 !important"
          : props.themeType === "light"
          ? "1px solid"
          : "2px solid",
      borderColor: (props: ISelectOptions) =>
        props.themeType === "light" ? muiTheme.palette.grey[500] : color.white,
      color: muiTheme.palette.grey[800],
      "&.Mui-focused": {
        borderColor: (props: ISelectOptions) =>
          props.themeType === "light"
            ? muiTheme.color.primary.dark
            : muiTheme.palette.primary.main,
      },
      "&.Mui-error": {
        borderColor: `${muiTheme.palette.error.main} !important`,
        borderImage: "none",
      },
      background: `${color.white} !important`,
      fontSize: "12px",
      borderRadius: "4px",
      "& > input": {
        height: (props: ISelectOptions) =>
          props.readOnly ? "40px" : props.themeType === "light" ? 38 : 36,
        padding: "0px 15px 0px",
        boxSizing: "border-box",
        lineHeight: 1.4,
        borderRadius: "4px",
      },
      "& .password-icon svg": {
        width: 18,
        fill: muiTheme.palette.grey[800],
      },
    },
    "& .MuiFormHelperText-root": {
      fontSize: "10px",
      margin: "8px 0px 0",
      "&:empty": {
        display: "none",
      },
    },
    "& .input-select": {
      "& > div": {
        height: (props: ISelectOptions) =>
          props.readOnly ? "40px" : props.themeType === "light" ? 38 : 36,
        padding: "0px 15px 0px",
        boxSizing: "border-box",
        lineHeight: (props: ISelectOptions) =>
          props.readOnly
            ? "40px"
            : props.themeType === "light"
            ? "38px"
            : "36px",
        borderRadius: "4px",
      },
      "& > svg": {
        top: "calc(50% - 12px)",
        width: "24px",
        right: "5px",
        color: muiTheme.palette.grey[800],
      },
    },
  },
}))(({ themeType, options, ...props }: TextFieldProps & ISelectOptions) => {
  const [showPassword, setShowPassword] = React.useState(false);
  if (props.select && options) {
    return (
      <TextField
        defaultValue=""
        {...props}
        variant="filled"
        inputProps={{
          ...props.inputProps,
          displayEmpty: true,
        }}
        InputProps={{
          ...props.InputProps,
          className: "input-wrap input-select",
          disableUnderline: true,
        }}
        SelectProps={{
          MenuProps: {
            className: themeType === "light" ? "light" : "",
          },
        }}
        InputLabelProps={{
          ...props.InputLabelProps,
          className: "input-label",
          shrink: true,
          error: false,
          disableAnimation: true,
        }}
        fullWidth
      >
        <StyledOption
          value=""
          selected
          key="placeholder"
          disabled
          className={themeType === "light" ? "options-light" : ""}
        >
          {props.placeholder ? props.placeholder : "Select"}
        </StyledOption>
        {options.map((option) => (
          <StyledOption
            className={themeType === "light" ? "options-light" : ""}
            key={`${option.label}-${option.value}`}
            value={option.value}
          >
            {option.label}
          </StyledOption>
        ))}
      </TextField>
    );
  }
  return (
    <TextField
      {...props}
      variant="filled"
      inputProps={{
        ...props.inputProps,
        autoComplete: "false",
      }}
      value={props.value || ""}
      type={showPassword ? "text" : props.type}
      InputProps={{
        ...props.InputProps,
        className: "input-wrap",
        disableUnderline: true,
        endAdornment:
          !props.InputProps?.endAdornment && props.type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                size="small"
                edge="end"
                className="password-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ) : (
            props.InputProps?.endAdornment
          ),
      }}
      InputLabelProps={{
        ...props.InputLabelProps,
        className: "input-label",
        shrink: true,
        error: false,
        disableAnimation: true,
      }}
      fullWidth
    />
  );
});

export const MuiTextField = React.memo(MTextField);

export const StyledOption = styled(MenuItem)(() => ({
  padding: "14px 16px",
  fontSize: 12,
  minWidth: 100,
  "& > img": {
    marginRight: 10,
    fontSize: "25px",
    width: 25,
  },
  "&.Mui-disabled, & .hide": {
    display: "none",
  },
}));
