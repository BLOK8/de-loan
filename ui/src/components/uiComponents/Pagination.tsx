import { styled } from "@material-ui/styles";
import React from "react";
import MuiPagination from "@material-ui/lab/Pagination";
import TablePagination from "@material-ui/core/TablePagination";
import { theme } from "../../theme/Theme";

interface PaginationProps {
  page: number;
  rows: number;
  setPage: (e: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (e: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  rows,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  className,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  React.useEffect(() => {
    if (page === 0) {
      setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  React.useEffect(() => {
    setPage(currentPage < 1 ? 0 : currentPage - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
    setPage(0);
  };

  return (
    <ReactPagination className={className}>
      <TablePagination
        component="div"
        count={rows}
        // page={page - 1 <= 0 ? 0 : page - 1}
        page={page}
        labelDisplayedRows={({ from, to, count }) => (
          <>
            {from}-{to} of{" "}
            {count !== -1 ? `${count} entries` : `more than ${to}`}
          </>
        )}
        SelectProps={{
          MenuProps: {
            className: "pagination-dropdown",
          },
        }}
        labelRowsPerPage="per page"
        onChangePage={() => {}}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <ReactMuiPagination
        count={Math.ceil(rows / rowsPerPage)}
        page={currentPage}
        onChange={handleChange}
      />
    </ReactPagination>
  );
};

const ReactPagination = styled("div")(() => ({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "280px 1fr .5fr",
  justifyContent: "space-between",
  color: theme.palette.grey[800],
  "& .MuiTablePagination-root": {
    color: "inherit",
    whiteSpace: "nowrap",
    "& .MuiSelect-icon": {
      color: "inherit",
    },
    "& .MuiTablePagination-toolbar": {
      display: "grid",
      gridTemplateColumns: "repeat(3, auto)",
      fontWeight: 600,
      paddingLeft: 15,
      "& .MuiTablePagination-input": {
        gridRowStart: 1,
        gridColumnStart: 1,
        margin: 0,
        fontWeight: 600,
      },
      "& .MuiTablePagination-caption": {
        marginRight: 10,
        fontWeight: 600,
      },
      "& .MuiTablePagination-input + .MuiTablePagination-caption": {
        color: "#7C7E81",
        fontSize: 12,
        fontWeight: 400,
      },
      "& .MuiSelect-select.MuiSelect-select": {
        paddingBottom: 5,
      },
    },
    "& .MuiTablePagination-actions, & .MuiTablePagination-spacer": {
      display: "none",
    },
  },
}));

const ReactMuiPagination = styled(MuiPagination)(() => ({
  color: "inherit",
  "& .MuiPagination-ul": {
    justifyContent: "center",
    "& li:first-child button:after": {
      content: '"Prev" ',
      marginLeft: "8px",
    },
    "& li:last-child button:before": {
      content: '"Next"',
      marginRight: "8px",
    },
    "& li button": {
      color: "inherit !important",
      "&.Mui-disabled": {
        opacity: 0.38,
      },
    },
    "& li:not(:first-child):not(:last-child) button": {
      borderRadius: 4,
      width: 24,
      height: 24,
      padding: 0,
      "&.Mui-selected": {
        background: `${theme.palette.primary.light}`,
      },
    },
  },
  "& .MuiPaginationItem-root": {
    color: "inherit",
    fontWeight: 600,
  },
}));
