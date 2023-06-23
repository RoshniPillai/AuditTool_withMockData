// import * as React from "react";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`
//   }
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
// ];

// export default function AuditLogTable() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 }
//           }
//         }}
//         pageSizeOptions={[5, 10]}
//         //checkboxSelection
//       />
//     </div>
//   );
// }
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";

interface auditdata {
    date: string,
    id: number,
    entityType: string,
    entity: string,
    action: string,
    user: string
}

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const originalRows: auditdata[] = [
  { date: "roshni", id: 100, entityType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },
  { date: "31/3/23 14:16", id: 200, entityType: "Asset config", entity: "Delete", action: "AHT183", user: "Carl Luis" },
  { date: "31/3/23 14:16", id: 300, entityType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },
  { date: "31/3/23 14:16", id: 500, entityType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },
  { date: "rose", id: 700, entityType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },
  { date: "31/3/23 14:16", id: 901, entityType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },
  { date: "31/3/23 14:16", id: 410, entityType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },
  { date: "31/3/23 14:16", id: 460, entityType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },

];

export default function NewTable() {
  const [rows, setRows] = useState<auditdata[]>(originalRows);
  const [searched, setSearched] = useState<string>("");
  const classes = useStyles();

  const requestSearch = (searchedVal: string) => {
    const filteredRows = originalRows.filter((row) => {
      return row.id.toString().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              {/* <TableRow>
                <TableCell>Food (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow> */}
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.entityType}</TableCell>
                  <TableCell align="right">{row.entity}</TableCell>
                  <TableCell align="right">{row.action}</TableCell>
                  <TableCell align="right">{row.user}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
