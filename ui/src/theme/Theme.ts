import { createMuiTheme } from "@material-ui/core";
import { color } from "./Color";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    color: {
      disabledColor: React.CSSProperties["color"];
      disabledText: React.CSSProperties["color"];
      bodyText: React.CSSProperties["color"];
      headingColor: React.CSSProperties["color"];
      primary: {
        main: string;
        dark: string;
        dark900: React.CSSProperties["color"];
      };
      blue: {
        skyBlue: React.CSSProperties["color"];
      };
      gray: {
        main: React.CSSProperties["color"];
      };
      green: {
        main: string;
        dark: string;
      };
    };
  }
  interface ThemeOptions {
    color: {
      disabledColor: React.CSSProperties["color"];
      disabledText: React.CSSProperties["color"];
      bodyText: React.CSSProperties["color"];
      headingColor: React.CSSProperties["color"];
      primary: {
        main: string;
        dark: string;
        dark900: React.CSSProperties["color"];
      };
      blue: {
        skyBlue: React.CSSProperties["color"];
      };
      gray: {
        main: React.CSSProperties["color"];
      };
      green: {
        main: string;
        dark: string;
      };
    };
  }
}

export const theme = createMuiTheme({
  color: {
    disabledColor: color.disabledColor,
    disabledText: color.black800,
    bodyText: color.blue900,
    headingColor: color.white,
    primary: {
      main: color.primaryGradient,
      dark: color.primaryInputBorder,
      dark900: color.black800,
    },
    blue: {
      skyBlue: color.skyBlue,
    },
    gray: {
      main: color.gray,
    },
    green: {
      main: color.greenGradient,
      dark: "",
    },
  },
  palette: {
    type: "dark",
    background: {
      default: color.black800,
    },
    common: {
      black: color.black,
    },
    primary: {
      // light: color.primaryLight,
      main: color.primary,
      // dark: color.primaryDark,
    },
    secondary: {
      main: color.secondary,
    },
    grey: {
      300: color.grayLight,
      500: color.gray500,
      800: color.black800,
    },
    warning: {
      main: color.orange,
    },
    info: {
      main: color.info,
    },
    error: {
      main: color.error,
      dark: color.progressBarError,
    },
    divider: color.darkBorder,
  },
  typography: {
    fontSize: 14,
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontWeightBold: 600,
    h1: {
      fontSize: "34px",
      fontWeight: 700,
      marginBottom: "20px",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "30px",
      marginBottom: "20px",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "26px",
      marginBottom: "20px",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "22px",
      marginBottom: "20px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "18px",
      marginBottom: "20px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "16px",
      marginBottom: "20px",
      fontWeight: 600,
    },
    button: {
      fontWeight: 400,
      fontSize: "inherit",
      textTransform: "inherit",
      boxShadow: "none",
      minWidth: "150px",
    },
  },
  shape: {
    borderRadius: 5,
  },
  overrides: {
    MuiDialogTitle: {
      root: {
        "& h2": {
          fontSize: "18px",
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: color.white,
      },
    },
    MuiFormLabel: {
      root: {
        color: color.info,
        "&.Mui-focused, &.Mui-error": {
          color: color.info,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        margin: "8px 0px 0",
        fontSize: 10,
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: color.blue800,
      },
    },
    MuiMenuItem: {
      root: {
        backgroundColor: color.white,
        color: color.black800,
        "&:hover, &:focus, &[data-focus='true']": {
          backgroundColor: color.primaryLight,
        },
        "&.Mui-selected": {
          backgroundColor: `${color.primary} !important`,
        },
      },
    },
    MuiList: {
      root: {
        backgroundColor: color.white,
      },
    },
  },
});
