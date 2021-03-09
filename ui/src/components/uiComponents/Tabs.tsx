import { styled } from "@material-ui/core";
import MuiTabs from "@material-ui/core/Tabs";

export const Tabs = styled(MuiTabs)(({ theme }) => ({
  minHeight: 0,
  "& .MuiTabs-scroller": {
    marginBottom: "1px !important",
  },
  "& .MuiTab-root": {
    minWidth: 0,
    marginRight: 24,
    letterSpacing: "0.16px",
    padding: 0,
    color: theme.color.gray.main,
    minHeight: 0,
    marginBottom: 12,
    "&.Mui-selected": {
      color: theme.palette.grey[800],
      fontWeight: 600,
    },
  },
  "& .MuiTabs-indicator": {
    background: theme.palette.grey[800],
  },
  "& .MuiTabScrollButton-root": {
    width: 14,
    height: 26,
    "& .Mui-disabled": {
      display: "none",
    },
  },
}));
