import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import MuiTable from "@material-ui/core/Table";
import MuiTableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import MuiTableHead from "@material-ui/core/TableHead";
import MuiTablePagination from "@material-ui/core/TablePagination";
import MuiTableRow, { TableRowProps } from "@material-ui/core/TableRow";
import MuiTableSortLabel from "@material-ui/core/TableSortLabel";
import { styled } from "@material-ui/styles";
import { theme } from "../../theme/Theme";
import { color } from "../../theme/Color";

interface TableProps {
  children: React.ReactNode;
}

export const Table = styled(({ children, ...HTMLProps }: TableProps) => (
  <TableContainer {...HTMLProps}>
    <MuiTable size="medium">{children}</MuiTable>
  </TableContainer>
))({});

export const TableBody = styled(MuiTableBody)({});
export const TableCell = styled(MuiTableCell)({
  color: color.blue900,
  borderBottomColor: color.grayLight,
  fontSize: 14,
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  maxWidth: "400px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  padding: "10px 20px",
  "&th": { paddingTop: 0 },
  "&.MuiTableCell-alignRight": {
    flexDirection: "inherit",
  },
  "&:first-child": {
    paddingLeft: 10,
  },
  // "&:last-child": {
  //   paddingRight: 0,
  //   "& .MuiTableSortLabel-icon": {
  //     marginRight: 0,
  //   },
  // },
  "&.MuiTableCell-head": {
    color: color.gray,
    fontSize: 12,
  },
});
export const TableHead = styled(MuiTableHead)({});
export const TablePagination = styled(MuiTablePagination)({});
export const TableRow = styled(MuiTableRow)(() => ({
  "&:hover": {
    background: (props: TableRowProps) =>
      props.onClick ? theme.palette.primary.light : "",
    
    cursor: (props: TableRowProps) => (props.onClick ? "pointer" : ""),
    "& td": {
      color: (props: TableRowProps) =>
      props.onClick ? "#fff" : "",
    }
  },
  "&.child-row": {
    opacity: 0.6,
    "& td": {
      borderBottom: 0,
    },
  },
  "&:last-child td": {
    borderBottom: 0,
  },
}));
export const TableSortLabel = styled(MuiTableSortLabel)({
  color: "inherit !important",
  display: "inline-block",
  "&:not(.MuiTableSortLabel-active) .MuiTableSortLabel-icon path": {
    fill: "#D0D9E2",
  },
  "& .MuiTableSortLabel-icon": {
    opacity: 1,
    marginLeft: 0,
    transition: "none",
    marginRight: -15,
  },
});

export const SortIcon = styled(({ ...HTMLProps }) => (
  <svg {...HTMLProps} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M13.45 7.45C13.5289 7.52824 13.5732 7.63474 13.5732 7.74584C13.5732 7.85694 13.5289 7.96344 13.45 8.04167L13.2833 8.20834C13.2049 8.28972 13.0963 8.33498 12.9833 8.33334H7.01664C6.90366 8.33498 6.79504 8.28972 6.71664 8.20834L6.54998 8.04167C6.4711 7.96344 6.42673 7.85694 6.42673 7.74584C6.42673 7.63474 6.4711 7.52824 6.54998 7.45L9.70831 4.29167C9.78392 4.21111 9.88949 4.16541 9.99998 4.16541C10.1105 4.16541 10.216 4.21111 10.2916 4.29167L13.45 7.45Z"
      fill="#D0D9E2"
    />
    <path
      d="M6.55004 12.5501C6.47116 12.4718 6.42679 12.3653 6.42679 12.2542C6.42679 12.1431 6.47116 12.0366 6.55004 11.9584L6.7167 11.7917C6.7951 11.7103 6.90372 11.6651 7.0167 11.6667H12.9834C13.0964 11.6651 13.205 11.7103 13.2834 11.7917L13.45 11.9584C13.5289 12.0366 13.5733 12.1431 13.5733 12.2542C13.5733 12.3653 13.5289 12.4718 13.45 12.5501L10.2917 15.7084C10.2161 15.789 10.1105 15.8347 10 15.8347C9.88955 15.8347 9.78398 15.789 9.70837 15.7084L6.55004 12.5501Z"
      fill="#3D44F6"
    />
  </svg>
))({});
