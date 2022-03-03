import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import { Grid, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import iconBook from "../assets/images/icon/book.svg";
import iconView from "../assets/images/icon/view.svg";
import { Badge } from "react-bootstrap";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, post, tech, num1, num2, color) {
  return { name, post, tech, num1, num2, color };
}

const rows = [
  createData(
    "Css Perfomance",
    "Development",
    "Frontend",
    190,
    174.3213,
    "#fe5000"
  ),
  createData("UI Design", "Design", null, 452.987, 252.213, "#06f"),
  createData("React Hooks", "React", "Javascript", 262.988, 169.0, "#a0d153"),
  createData(
    "Css Perfomance",
    "Development",
    "Frontend",
    190,
    44444,
    3213,
    "#fe9000"
  ),
  createData(
    "UI Design",
    "Development",
    "Frontend",
    22222233.987,
    3333.3333,
    "#06ffff"
  ),
  createData(
    "React Hooks",
    "Development",
    null,
    22111.11,
    3333333.0,
    "#a00000"
  ),
  createData("Css Perfomance", "Development", null, 9900077, 2222, "#fff000"),
  createData("UI Design", "Development", null, 777.88888, 252.213, "#06f"),
  createData("React Hooks", "Development", null, 22222.988, 3333.0, "#a0d153"),
  createData("Css Perfomance", "Development", null, 190, 174, "#aa9000"),
  createData("UI Design", "Development", null, 452.987, 252.213, "#06f"),
  createData("React Hooks", "Development", null, 262.988, 169.0, "#44ff00"),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export const CryptoTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="p-4">
      <Grid item md={12}>
        <Grid
          item
          className="d-flex flex-column flex-md-row justify-content-start"
        >
          <h5>Popular Cryptos</h5>
        </Grid>
        <Grid
          item
          className=" table d-flex flex-column flex-md-row justify-content-end mb-4"
        >
          <button value="Yesterday">Yesterday</button>
        </Grid>

        <Divider />
      </Grid>
      <Divider />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell className="d-flex " component="th" scope="row">
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: row.color }}>
                      {row.name.charAt(0)}
                    </Avatar>
                  </Stack>
                  <div>
                    <h5 style={{ marginLeft: "15px", marginTop: "7px" }}>
                      <b>{row.name}</b>
                    </h5>

                    <small className="m-0 p-0 " style={{ color: "gray" }}>
                      15 October 2022
                    </small>
                  </div>
                </TableCell>

                <TableCell className="table " component="th" scope="row">
                  <div className="d-flex">
                    <Badge bg="danger">
                      <span>{row.post}</span>
                    </Badge>

                    {row.tech && (
                      <Badge bg="info" className="badge-blue">
                        <span>{row.tech}</span>
                      </Badge>
                    )}
                  </div>
                </TableCell>

                <TableCell style={{ width: 160 }} align="right">
                  <img src={iconBook} alt="icon up" />
                  {row.num1}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <img src={iconView} alt="icon up" />
                  {row.num2}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};
