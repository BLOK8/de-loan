import { withStyles } from "@material-ui/core";
import { color, dashboardColor } from "./Color";

export const GlobalCss = withStyles(({ ...theme }) => ({
  // @global is handled by jss-plugin-global.
  "@global": {
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    html: {
      "-webkit-text-size-adjust": "100%",
      "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
      "-webkit-font-smoothing": "antialiased",
    },
    "article, aside, figcaption, figure, footer, header, hgroup, main, nav, section": {
      display: "block",
    },
    body: {
      margin: 0,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 1.5,
      color: theme.color.bodyText,
      backgroundColor: theme.palette.background.default,
    },
    "[tabindex='-1']:focus:not(:focus-visible)": {
      outline: " 0 !important",
    },
    hr: {
      boxSizing: "content-box",
      height: 0,
      overflow: "visible",
      marginTop: "1rem",
      marginBottom: "1rem",
      border: 0,
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    "h1, h2, h3, h4, h5, h6": {
      marginTop: 0,
      marginBottom: "0.5rem",
      color: theme.color.headingColor,
    },
    p: {
      marginTop: 0,
      marginBottom: "1rem",
    },
    "abbr[title], abbr[data-original-title]": {
      textDecoration: "underline",
      "-webkit-text-decoration": "underline dotted",
      "text-decoration": "underline dotted",
      cursor: "help",
      borderBottom: 0,
      "-webkit-text-decoration-skip-ink": "none",
      textDecorationSkipInk: "none",
    },
    address: {
      marginBottom: "1rem",
      fontStyle: "normal",
      lineHeight: "inherit",
    },
    "ol, ul, dl": {
      marginTop: 0,
      marginBottom: "1rem",
      paddingLeft: "15px",
    },
    "ol ol, ul ul, ol ul, ul ol": {
      marginBottom: 0,
    },
    dt: {
      fontWeight: 600,
    },
    dd: {
      marginBottom: "0.5rem",
      marginLeft: 0,
    },
    blockquote: {
      margin: "0 0 1rem",
    },
    "b, strong": {
      fontWeight: theme.typography.fontWeightBold,
    },
    small: {
      fontSize: "80%",
    },
    "sub, sup": {
      position: "relative",
      fontSize: "75%",
      lineHeight: 0,
      verticalAlign: "baseline",
    },
    sup: {
      top: "-0.5em",
    },
    a: {
      color:
        theme.palette.background.default === dashboardColor.bg
          ? color.primaryInputBorder
          : theme.palette.primary.main,
      textDecoration: "none",
    },
    "a:hover": {
      color:
        theme.palette.background.default === dashboardColor.bg
          ? theme.palette.primary.main
          : theme.palette.primary.light,
      textDecoration: "underline",
    },
    "a:not([href])": {
      color: "inherit",
      textDecoration: "none",
    },
    "a:not([href]):hover": {
      color: "inherit",
      textDecoration: "none",
    },
    "pre, code, kbd, samp": {
      fontFamily: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
        "Courier New", monospace`,
      fontSize: "1em",
    },
    pre: {
      marginTop: 0,
      marginBottom: "1rem",
      overflow: "auto",
      display: "block",
      fontSize: "87.5%",
      color: theme.palette.primary,
    },
    figure: {
      margin: "0 0 1rem",
    },
    img: {
      verticalAlign: "middle",
      borderStyle: "none",
      maxWidth: "100%",
      height: "auto",
    },
    svg: {
      overflow: "hidden",
      verticalAlign: "middle",
    },
    fieldset: {
      minWidth: 0,
      padding: 0,
      margin: 0,
      border: 0,
    },
    legend: {
      display: "block",
      width: "100%",
      maxWidth: "100%",
      padding: 0,
      marginBottom: "0.5rem",
      fontSize: "1.5rem",
      lineHeight: "inherit",
      color: "inherit",
      whiteSpace: "normal",
    },
    progress: {
      verticalAlign: "baseline",
    },
    output: {
      display: "inline-block",
    },
    summary: {
      display: "list-item",
      cursor: "pointer",
    },
    template: {
      display: "none",
    },
    "[hidden]": {
      display: "none !important",
    },
    "h1,h2,h3,h4,h5,h6": {
      marginBottom: "0.5rem",
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: 1.2,
    },
    h1: {
      ...theme.typography.h1,
    },
    h2: {
      ...theme.typography.h2,
    },
    h3: {
      ...theme.typography.h3,
    },
    h4: {
      ...theme.typography.h4,
    },
    h5: {
      ...theme.typography.h5,
    },
    h6: {
      ...theme.typography.h6,
    },
    "small, .small": {
      fontSize: "80%",
      fontWeight: 400,
    },
    "mark, .mark": {
      padding: "0.2em",
      backgroundColor: "#fcf8e3",
    },
    code: {
      fontSize: "87.5%",
      color: theme.palette.grey[300],
      wordWrap: "break-word",
    },
    "a > code": {
      color: "inherit",
    },
    kbd: {
      padding: "0.2rem 0.4rem",
      fontSize: "87.5%",
      color: color.white,
      backgroundColor: theme.palette.primary,
      borderRadius: "0.2rem",
    },
    "kbd kbd": {
      padding: 0,
      fontSize: "100%",
      fontWeight: theme.typography.fontWeightBold,
    },
    "pre code": {
      fontSize: "inherit",
      color: "inherit",
      wordBreak: "normal",
    },
    ".auto-complete-light, .MuiAutocomplete-noOptions": {
      color: `${color.black800} !important`,
      "& .MuiAutocomplete-listbox": {
        padding: 0,
        "& ul": {
          padding: 0,
          margin: 0,
        },
      },
    },
    ".light .MuiMenu-paper, .light .MuiMenu-list": {
      background: color.white,
      borderRadius: "4px",
      padding: 0,
    },
    ".options-light, .pagination-dropdown .MuiListItem-root": {
      color: color.black800,
    },
    ".options-light:hover, .pagination-dropdown .MuiListItem-root:hover": {
      background: theme.palette.primary.light,
    },
    ".options-light.Mui-selected, .pagination-dropdown .MuiListItem-root.Mui-selected": {
      background: `${theme.palette.primary.main} !important`,
    },
    ".MuiPickersBasePicker-root .MuiPickersDay-root, .MuiPickersBasePicker-root .MuiPickersArrowSwitcher-iconButton": {
      backgroundColor: theme.palette.primary.light,
      color: color.black800,
    },
    ".MuiPickersBasePicker-root .MuiPickersDay-root.Mui-selected, .MuiPickersBasePicker-root .MuiPickersDay-root:hover": {
      backgroundColor: theme.palette.primary.main,
      color: color.black800,
    },
    ".MuiPickersBasePicker-root .MuiPickersDay-root.Mui-disabled": {
      opacity: 0.3,
    },
    // green id style
    ".greenid-datepicker-container.dropdown-menu": {
      background: color.white,
      color: theme.palette.grey[800],
    },
    ".greenid-datepicker-container.dropdown-menu td": {
      padding: "5px 10px",
    },
    ".greenid-datepicker-container.datepicker table tr td.old, .greenid-datepicker-container.datepicker table tr td.new": {
      color: theme.palette.grey[800],
    },
    ".greenid-datepicker-container.datepicker table tr td.day:hover, .greenid-datepicker-container.datepicker table tr td.day.focused, .greenid-datepicker-container.datepicker table tr td span:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.grey[800],
    },
    ".greenid-datepicker-container.datepicker table tr td.active:hover, .greenid-datepicker-container.datepicker table tr td.active:hover:hover, .greenid-datepicker-container.datepicker table tr td.active.disabled:hover, .greenid-datepicker-container.datepicker table tr td.active.disabled:hover:hover, .greenid-datepicker-container.datepicker table tr td.active:focus, .greenid-datepicker-container.datepicker table tr td.active:hover:focus, .greenid-datepicker-container.datepicker table tr td.active.disabled:focus, .greenid-datepicker-container.datepicker table tr td.active.disabled:hover:focus, .greenid-datepicker-container.datepicker table tr td.active:active, .greenid-datepicker-container.datepicker table tr td.active:hover:active, .greenid-datepicker-container.datepicker table tr td.active.disabled:active, .greenid-datepicker-container.datepicker table tr td.active.disabled:hover:active, .greenid-datepicker-container.datepicker table tr td.active.active, .greenid-datepicker-container.datepicker table tr td.active:hover.active, .greenid-datepicker-container.datepicker table tr td.active.disabled.active, .greenid-datepicker-container.datepicker table tr td.active.disabled:hover.active, .greenid-datepicker-container.datepicker table tr td span.active:hover, .greenid-datepicker-container.datepicker table tr td span.active:hover:hover, .greenid-datepicker-container.datepicker table tr td span.active.disabled:hover, .greenid-datepicker-container.datepicker table tr td span.active.disabled:hover:hover, .greenid-datepicker-container.datepicker table tr td span.active:focus, .greenid-datepicker-container.datepicker table tr td span.active:hover:focus, .greenid-datepicker-container.datepicker table tr td span.active.disabled:focus, .greenid-datepicker-container.datepicker table tr td span.active.disabled:hover:focus, .greenid-datepicker-container.datepicker table tr td span.active:active, .greenid-datepicker-container.datepicker table tr td span.active:hover:active, .greenid-datepicker-container.datepicker table tr td span.active.disabled:active, .greenid-datepicker-container.datepicker table tr td span.active.disabled:hover:active, .greenid-datepicker-container.datepicker table tr td span.active.active, .greenid-datepicker-container.datepicker table tr td span.active:hover.active, .greenid-datepicker-container.datepicker table tr td span.active.disabled.active, .greenid-datepicker-container.datepicker table tr td span.active.disabled:hover.active": {
      background: theme.palette.primary.main,
      color: theme.palette.grey[800],
      border: 0,
    },
    ".greenid-datepicker-container.datepicker-dropdown:after, .greenid-datepicker-container.datepicker-dropdown:before": {
      display: "none",
    },
    ".greenid-datepicker-container.datepicker thead tr:first-child th, .greenid-datepicker-container.datepicker tfoot tr th": {
      background: "transparent !important",
      color: theme.palette.grey[800],
    },
    ".greenid-datepicker-container.datepicker table tr td span": {
      height: "43px",
      lineHeight: "43px",
      color: theme.palette.grey[800],
    },
    "@keyframes tickAnim": {
      "0%": {
        opacity: 0,
        strokeDashoffset: "190px",
      },
      "20%": {
        opacity: 1,
        strokeDashoffset: "190px",
      },
      "100%": {
        opacity: 1,
        strokeDashoffset: "271px",
      },
    },
  },
}))(() => null);
