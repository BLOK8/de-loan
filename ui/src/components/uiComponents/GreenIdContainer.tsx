import { styled } from "@material-ui/core";
import { dashboardColor, color } from "../../theme/Color";

export const GreenIdContainer = styled("div")(({ theme }) => ({
  maxWidth: 615,
  "& #greenid-container, & #greenid-error-content": {
    font: "inherit",
    background: "transparent",
    color: "inherit",
    lineHeight: "inherit",
    "& #greenid-source-content": {
      border: 0,
    },
    "& .form-group": {
      marginBottom: 23,
      "& .greenid-helpicon": {
        width: "100%",
        outline: 0,
        boxShadow: "none",
        "&:before": {
          position: "absolute",
          right: 0,
          top: -22,
        },
      },
    },
    "& a .glyphicon": {
      color:
        theme.palette.background.default === dashboardColor.bg
          ? theme.color.bodyText
          : color.white,
    },
    "& label": {
      fontSize: "10px",
      marginBottom: 8,
      fontWeight: 600,
      position: "relative",
      color: "inherit !important",
    },
    "& .help-block": {
      fontSize: "10px",
      margin: "8px 0px 0",
      "&:empty": {
        display: "none",
      },
    },
    "& #greenid-source-title": {
      width: "100%",
    },
    "& .greenid-alert": {
      fontSize: 12,
      padding: "16px 10px 15px 60px",
      color: color.white,
      border: 0,
      "& .close": {
        opacity: 1,
        marginTop: "0 !important",
        right: 0,
      },
      "& .greenid-alert-glyphicon": {
        fontSize: 20,
      },
      "&.greenid-alert-danger": {
        border: 0,
        background: theme.palette.error.main,
      },
      "&.greenid-alert-warning": {
        background: theme.palette.warning.main,
      },
      "&.greenid-alert-info": {
        background: theme.palette.info.main,
        color: theme.palette.common.black,
      },
      "&.greenid-alert-success": {
        background: theme.color.green.main,
        color: theme.palette.common.black,
      },
    },
    "& .greenid-has-error .help-block": {
      color: theme.palette.error.main,
    },
    "& .checkbox": {
      "&input[type='checkbox']": {
        marginTop: 0,
      },
      "& label": {
        fontSize: 12,
        fontWeight: 400,
      },
    },
    "& .input-group.date": {
      flexDirection: "row-reverse",
      display: "flex",
      "& .input-group-addon": {
        background: color.white,
        border: 0,
        borderRadius: 0,
        width: "64px",
        color: theme.palette.grey[800],
        lineHeight: "28px",
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
      },
      "& input": {
        borderTopLeftRadius: "0 !important",
        borderBottomLeftRadius: "0 !important",
        borderTopRightRadius: "4px !important",
        borderBottomRightRadius: "4px !important",
      },
    },
    "& .dd-select": {
      background: "transparent !important",
    },
    "& .greenid-u-select-option": {
      background: theme.palette.background.default,
    },
    "& .greenid-u-select-container": {
      background:
        theme.palette.background.default === dashboardColor.bg
          ? color.blue100
          : "rgba(84, 85, 87, 0.5)",
    },
    "& .panel-default, & .well": {
      background:
        theme.palette.background.default === dashboardColor.bg
          ? color.blue100
          : "rgba(84, 85, 87, 0.5)",
      border: 0,
    },
    "& .form-control, & #greenid-option-list-toggle": {
      outline: 0,
      minHeight: "none !important",
      "&:-internal-autofill-selected": {
        backgroundColor: "transparent !important",
      },
      "&:-webkit-autofill": {
        "-webkit-transition-delay": "9999s",
        "-webkit-transition":
          "color 9999s ease-out, background-color 9999s ease-out",
        background: "transparent",
        " -webkit-text-fill-color": "currentColor",
        "-webkit-box-shadow": "0 0 0 100px transparent inset", // autofill background color
        "&:focus": {},
      },
      border:
        theme.palette.background.default === dashboardColor.bg
          ? "1px solid"
          : "2px solid",
      borderColor:
        theme.palette.background.default === dashboardColor.bg
          ? theme.palette.grey[500]
          : color.white,
      color: theme.palette.grey[800],
      boxShadow: "none !important",
      "&:focus, &[aria-expanded='true']": {
        borderColor: theme.palette.primary.main,
      },
      "&[aria-expanded='false']": {
        borderColor:
          theme.palette.background.default === dashboardColor.bg
            ? theme.palette.grey[500]
            : theme.palette.primary.dark,
      },
      "&[aria-invalid='true']": {
        borderColor: `${theme.palette.error.main} !important`,
      },
      background: color.white,
      fontSize: "12px",
      borderRadius: "4px",
      height: "40px",
      padding: "0px 15px 0px",
      boxSizing: "border-box",
      lineHeight: 1,
    },
    "& .form-control:not(select)": {
      padding: "11px 15px",
      textDecoration: "none",
    },
    "& .dd-image-right": {
      height: 31,
      marginTop: "3px",
    },
    "& #greenid_upload_queue .progress": {
      height: "6px !important",
      borderColor: theme.palette.primary.dark,
      "& .progress-bar": {
        height: "100% !important",
        background: `${theme.palette.primary.light} !important`,
      },
    },
    "& .lead": {
      font: "inherit",
    },
    "& h2": {
      ...theme.typography.h2,
      marginTop: 0,
      marginBottom: 54,
      color:
        theme.palette.background.default === dashboardColor.bg
          ? theme.color.headingColor
          : color.white,
    },
    "& .radio label, & .checkbox label": {
      paddingLeft: 30,
      '& input[type="checkbox"], & input[type="radio"]': {
        width: 20,
        height: 20,
        top: -5,
        marginLeft: -30,
      },
    },
    "& .uploadifive-queue-item": {
      background: "transparent",
      border: 0,
      padding: 0,
    },
    "& .btn:not(#greenid-option-list-toggle), .greenid-u-reset": {
      border: 0,
      padding: "15px 46px",
      fontWeight: 600,
      fontSize: 14,
      minWidth: 110,
      outline: 0,
      height: "auto !important",
      width: "auto !important",
      lineHeight: "inherit !important",
    },
    "& .greenid-u-reset": {
      fontSize: 12,
      padding: "7px 23px",
      minWidth: 0,
    },
    "& .btn-default:not(#greenid-option-list-toggle)": {
      border: "1px solid",
      padding: "9px 30px",
      borderColor: theme.color.gray.main,
      color: theme.palette.grey[800],
      background: "transparent",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      "&:hover": {
        borderColor: theme.palette.primary.light,
        background: theme.palette.primary.light,
        color: theme.palette.grey[800],
      },
      "&:disabled": {
        borderColor: "#C4C4C4",
        boxShadow: "none !important",
      },
    },
    "& .btn-primary:not(#greenid-option-list-toggle), .greenid-u-reset": {
      background: theme.color.primary.main,
      color: theme.palette.grey[800],
      boxShadow:
        theme.palette.background.default === dashboardColor.bg
          ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
          : "",
      "&:hover": {
        background: theme.palette.primary.light,
      },
      "&:disabled": {
        boxShadow: "none",
        background:
          theme.palette.background.default === dashboardColor.bg
            ? theme.palette.grey[300]
            : theme.palette.primary.light,
        color:
          theme.palette.background.default === dashboardColor.bg
            ? color.white
            : theme.palette.grey[500],
      },
    },
    "& .greenid-modal .modal-content": {
      color: theme.palette.grey[500],
      fontSize: 12,
      fontFamily: "inherit",
      "& .modal-header": {
        background: theme.palette.grey[800],
        marginBottom: 29,
        border: 0,
        color: color.white,
        padding: "18px 24px",
        "& .modal-title": {
          fontSize: 18,
          margin: "0 !important",
          color: color.white,
        },
      },
      "& .modal-body": {
        padding: "18px 24px",
      },
      "& .modal-footer": {
        border: 0,
        padding: "18px 24px",
        "& .btn:not(#greenid-option-list-toggle)": {
          padding: "10px 30px",
          marginLeft: 10,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
      },
    },
    "& a": {
      color:
        theme.palette.background.default === dashboardColor.bg
          ? theme.color.bodyText
          : color.white,
      outline: 0,
    },
    "& .dd-pointer-down": {
      borderTopColor: color.white,
    },
    "& .dd-pointer-up": {
      borderBottomColor: `${color.white} !important`,
    },
    "& .dd-option, &.dd-options": {
      padding: "5px 10px !important",
      border: 0,
      color: theme.palette.grey[800],
      "& label": {
        marginBottom: 0,
      },
      "&:hover": {
        background: theme.palette.primary.light,
      },
      "&.dd-option-selected": {
        background: theme.palette.primary.main,
      },
    },
    "& .dropdown-menu.has-manual-options, & .dd-options": {
      background: `${color.white} !important`,
      border: "0 !important",
      padding: "20px 8px !important",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.175)",
      color: theme.palette.grey[800],
      "& h2": {
        marginBottom: "8px !important",
        color: theme.palette.grey[800],
      },
      "& .list-group": {
        marginBottom: "20px !important",
        marginLeft: "-18px",
        marginRight: "-18px",
        background: "transparent !important",
        "& li": {
          background: "transparent",
          border: 0,
          color: `${theme.palette.grey[800]} !important`,
          borderRadius: "0 !important",
          "& a": {
            color: "inherit !important",
            fontSize: "12px",
            padding: "15px 20px !important",
            textDecoration: "none",
            "&:hover": {
              background: theme.palette.primary.light,
            },
          },
        },
      },
      "& .pull-left:last-child .list-group": {
        marginBottom: "0 !important",
        borderBottom: 0,
      },
    },
  },
}));
