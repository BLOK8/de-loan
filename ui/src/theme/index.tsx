/* eslint-disable react/destructuring-assignment */
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { theme } from "./Theme";
import { GlobalCss } from "./defaultCss";
import { dashboardColor, color } from "./Color";

interface Props {}
type ThemeType = "dark" | "light";
interface ThemeContextType {
  themeType: ThemeType;
  setTheme: (e: ThemeType) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);
// update theme function
export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProviderContainer: React.FC<Props> = (props) => {
  const [themeType, setThemeType] = React.useState<ThemeType>("dark");

  const setTheme = (e: ThemeType) => {
    setThemeType(e);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeContext.Provider value={{ themeType, setTheme }}>
        <ThemeProvider
          theme={{
            ...theme,
            color: {
              ...theme.color,
              disabledText: themeType === "dark" ? color.black800 : color.gray,
              bodyText: themeType === "dark" ? color.white : color.blue900,
              headingColor: themeType === "dark" ? color.white : color.black800,
            },
            palette: {
              ...theme.palette,
              background: {
                ...theme.palette.background,
                default:
                  themeType === "dark"
                    ? theme.palette.background.default
                    : dashboardColor.bg,
              },
            },
            overrides: {
              ...theme.overrides,
              MuiPaper: {
                root: {
                  backgroundColor: color.white,
                  boxShadow:
                    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  "& .MuiPickersCalendar-weekDayLabel, & .MuiPickersCalendarHeader-root h6": {
                    color: color.black800,
                  },
                  "& .MuiPickersCalendarHeader-yearSelectionSwitcher, & .MuiPickersArrowSwitcher-iconButton": {
                    color: color.black800,
                    "&.Mui-disabled": {
                      opacity: 0.3,
                      pointerEvents: "none",
                    },
                  },
                  "& .MuiPickersYear-yearButton": {
                    color: color.black800,
                    background: theme.palette.primary.light,
                    "&.Mui-selected, &:hover": {
                      background: theme.palette.primary.main,
                    },
                    "&.Mui-disabled": {
                      opacity: 0.3,
                      pointerEvents: "none",
                    },
                  },
                  "& .MuiAutocomplete-loading": {
                    color: color.black800,
                  },
                },
              },
              MuiList: {
                root: {
                  backgroundColor: color.white,
                },
              },
            },
          }}
        >
          <GlobalCss />
          {props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </MuiPickersUtilsProvider>
  );
};
