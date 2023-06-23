import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import Pagination from "@mui/material/Pagination";
import SearchBar from "material-ui-search-bar";
import { rows } from "./data";
import SearchIcon from "@mui/icons-material/Search";
import SyncIcon from "@mui/icons-material/Sync";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadIcon from "@mui/icons-material/Download";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DetailPanelView from "./detailPanel";
import LandingPage from "./landing";
import LoadingSpinner from "./spinner";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Tooltip from "@mui/material/Tooltip";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import EnhancedTable from "./sortTable";
import NewTable from "./auditTable";
import _without from "lodash/without";
import CancelIcon from "@material-ui/icons/Cancel";
import UserSelect from "./user-selectBox";
import EventTypeSelect from "./event-selectBox";
import EntitySelect from "./entity-selectBox";
import ActionSelect from "./action-selectBox";
  import TableSortLabel from "@mui/material/TableSortLabel";
  import { visuallyHidden } from "@mui/utils";
  import DateFnsUtils from "@date-io/date-fns";
import {
MuiPickersUtilsProvider,
KeyboardTimePicker,
KeyboardDatePicker
} from "@material-ui/pickers";
const useStyles = makeStyles({
  root: {
    height: 30,
    //width: 200,
    padding: 0,
    margin: 0,
    color: "#fff !important",
    fontSize: "12px !important",
    backgroundColor: "#3D4044 !important",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#148291 !important"
    },
    "&:selected": {
      color: "#fff",
      backgroundColor: "gray"
    }
  },
  root1: {
    backgroundColor: "#3D4044",
    background: "#3D4044",
    borderRadius: "6px",
    //height: "40px",
    // width: "209px",
    minWidth: "100px !important",
    paddingLeft: 8,
    fontSize: 12,
    "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-adornedEnd.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
      padding: 0,
  },
    "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd.MuiInputAdornment-outlined.MuiInputAdornment-sizeMedium ": {
      position: "absolute",
      left: -10
    },
    "& .MuiSvgIcon-root": { color: "#ffffff", width: 15 },
    "& .MuiOutlinedInput-input": {
      color: "#ffffff",
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 19,
      letterSpacing: 0,
      fontStyle: "normal",
      textAlign: "left",
      padding: "5px 0px 5px 30px"
    },
    "&.MuiInputAdornment-positionEnd": {
      color: "#ffffff"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: 'none'
    },
  },

  /* table styling */
  table: {
    minWidth: 700
  },
  tableRow: {
    "&$selected, &$selected:hover": {
      backgroundColor: "#148291 !important"
    }
  },
  tableCell: {
    border: 0,
    borderBottom: "none",
    "$selected &": {
      color: "white"
    }
  },
  hover: {},
  selected: {}
});
const StyledTableCell = styled(TableCell)(({ theme }) => ({
// paddingLeft: '20px',
//border: "2px solid red",
padding: '20px',
margin: '20px',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    paddingLeft: '20px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: 8,
    // paddingTop: 0,
    // paddingBottom: 0,
    border: 0,
    color: theme.palette.common.white
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  padding: "0 20px",
  "&:nth-of-type(odd)": {
    //  backgroundColor: theme.palette.action.hover,
    backgroundColor: "#121212"
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#232425"
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

const MenuProps = {
  PaperProps: {
    sx: {
      // bgcolor: "pink",
      "& .css-6hp17o-MuiList-root-MuiMenu-list": {
        padding: 0,
        borderRadius: 10,
        backgroundColor: "#3D4044"
      },
      "& .MuiList-root.MuiList-padding.MuiMenu-list": {
        padding: 0,
        width: "auto",
        /* height: 105px; */
        /* left: 553px; */
        background: "#3D4044",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: '8px',
      }
    }
  }
};
const eventnames = [
  "Assignments",
  "Map Editing",
  "Notifications",
  "Asset Health ",
  "Assset Config",
  "User Config"
];
const entitynames = ["AHT180 ", "AHT181", "AHT182", "AHT183","AHT184"];
const actionnames = ["Update ", "Delete", "Asset loading"];
const names = ["Nicholas Little", "Travis Quirk ","Dave Smith", "Ryan Stimpson"];


function getStyles(name: string, personName: readonly string[], theme: any) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        //p: 1,
        //m: 1,
        // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.500'),
        color: "#ffffff",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "40px",
        letterSpacing: 0,
        textAlign: "left",
      // border: 0,
        // border: "1px solid red",
        margin: "auto 0",
        padding: 0
        // ...sx
      }}
      {...other}
    />
  );
}
function Item1(props: BoxProps) {
  const { sx, ...other } = props;

  return (
    <Box
      sx={{
        // p: 1,
        m: 1,
        // bgcolor: (theme) =>
        //   theme.palette.mode === "dark" ? "#101010" : "grey.100",
        // color: (theme) =>
        //   theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        color: "#ffffff",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "19px",
        letterSpacing: 0,
        textAlign: "left",
        ...sx
      }}
      {...other}
    />
  );
}
const StackItem = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  background: "transparent",
  padding: theme.spacing(1),
  textAlign: "left",
  fontSize: 12,
  color: "#fff"
}));
const SideItem = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  // padding: theme.spacing(1),
textAlign: 'center',
}));
const StyledSearchBar = styled(SearchBar)`
  margin: 0 auto;
  width: 100px;
  height: 24px;
  background: pink;
`;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  //backgroundColor: alpha(theme.palette.common.white, 0.15),
  background: "#28292B",
  borderRadius: "6px",
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  height: 24,
  [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    //padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: 12
  }
}));
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(0)
  },
  "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
    color: "#fff"
  },
  "& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon": {
    color: "#fff"
  },
  "& .MuiInputBase-input": {
    borderRadius: "6px",
    position: "relative",
    backgroundColor: "#28292B",
    fontFamily: "Roboto",
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    padding: 0,
    color: "#fff",
    "&:focus": {
      borderRadius: "6px"
    }
  }
}));
/*for table*/ 
interface Data {
  date: string,
  id: number,
  eventType: string,
  entity: string,
  action: string,
  user: string
}


// const originalRows: Data[] = [
// { date: "1/3/23 14:16", id: 100, eventType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },
// { date: "2/3/23 10:16", id: 200, eventType: "Dump Truck", entity: "Delete", action: "AHT183", user: "Carl Luis" },
// { date: "3/3/23 13:16", id: 300, eventType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },
// { date: "4/3/23 14:16", id: 500, eventType: "Notification", entity: "Created", action: "AHT183", user: "John Smith" },
// { date: "15/3/23 14:16", id: 700, eventType: "Dump Truck", entity: "Delete", action: "AHT183", user: "John Smith" },
// { date: "31/3/23 14:16", id: 901, eventType: "Asset Update", entity: "Update permissions", action: "AHT183", user: "John Smith" },
// { date: "31/3/23 14:16", id: 800, eventType: "Asset Update", entity: "Delete", action: "AHT183", user: "John Smith" },
// { date: "31/3/23 14:16", id: 460, eventType: "Assignment", entity: "Update permissions", action: "AHT183", user: "John Smith" },

// ];
/*for Sorting */

// interface Data {
//   date: string;
//   ID: number;
//   eventType: string;
//   action: string;
//   entity: string;
//   user: string;
// }

function createData(
date: string,
id: number,
eventType: string,
action: string,
entity: string,
user: string
): Data {
return {
date,
id,
eventType,
action,
entity,
user
};
}
const originalRows: Data[] = [
{ date: "3/5/23 11:11:00", id: 100, eventType: "Asset Update", action: "Update", entity: "AHT182", user:"Travis Quirk "},  
{ date: "1/5/23 01:10:23", id: 200, eventType: "Dump Truck", action: "Delete", entity: "AHT181", user: "Nicholas Little" },
{ date: "2/5/23 11:11:21", id: 300, eventType: "Asset Update", action: "Update", entity: "AHT184", user: "Dave Smith" },
{ date: "5/5/23 10:11:21", id: 500, eventType: "Notification", action: "Created", entity: "AHT183", user: "Travis Quirk " },
{ date: "4/5/23 10:11:21", id: 700, eventType: "Dump Truck", action: "Delete", entity: "AHT185", user: "Ryan Stimpson" },

];
// const records = [
//   createData(
//     "1/5/23 11:11",
//     100,
//     "Asset Update",
//     "Update permissions",
//     "AHT181",
//     "John"
//   ),
//   createData("3/5/23 11:11", 300, "Asset Update", "Delete", "AHT183", " Smith"),
//   createData("1/5/23 01:10", 500, "Dump Truck", "Created", "AHT185", "Johan"),
//   createData("2/5/23 11:11", 400, "Notification", "Created", "AHT186", "Jane"),
//   createData("5/5/23 10:11", 700, "Dump Truck", "Created", "AHT189", "Marry"),
//   createData("9/5/23 07:15", 900, "Notification", "Created", "AHT187", "Luis"),
//   createData("7/5/23 00:15", 800, "Notification", "Created", "AHT182", "Marc"),
//   createData("9/5/23 07:15", 200, "Notification", "Created", "AHT184", "Luis"),
// { date: "31/3/23 14:16", id: 901, eventType: "Asset Update", action: "Update permissions", entity: "AHT186", user: "Ryan Stimpson" },
// { date: "31/3/23 14:16", id: 800, eventType: "Asset Update", action: "Delete", entity: "AHT187", user: "Debarpan Coomar" },
// { date: "31/3/23 14:16", id: 400, eventType: "Assignment", action: "Update permissions", entity: "AHT187", user: "Ryan Stimpson" },

// ];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
if (b[orderBy] < a[orderBy]) {
return -1;
}
if (b[orderBy] > a[orderBy]) {
return 1;
}
return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
order: Order,
orderBy: Key
): (
a: { [key in Key]: number | string },
b: { [key in Key]: number | string }
) => number {
return order === "desc"
? (a, b) => descendingComparator(a, b, orderBy)
: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
array: readonly T[],
comparator: (a: T, b: T) => number
) {
const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
stabilizedThis.sort((a, b) => {
const order = comparator(a[0], b[0]);
if (order !== 0) {
return order;
}
return a[1] - b[1];
});
return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
disablePadding: boolean;
id: keyof Data;
label: string;
numeric: boolean;
}

const headCells: readonly HeadCell[] = [
{
id: "date",
numeric: false,
disablePadding: true,
label: "Date"
},
{
id: "id",
numeric: true,
disablePadding: false,
label: "ID"
},
{
id: "eventType",
numeric: true,
disablePadding: false,
label: "Event Type"
},
{
id: "action",
numeric: true,
disablePadding: false,
label: "Action"
},
{
id: "entity",
numeric: true,
disablePadding: false,
label: "Entity"
},
{
id: "user",
numeric: true,
disablePadding: false,
label: "User"
}
];

interface EnhancedTableProps {
numSelected: number;
onRequestSort: (
event: React.MouseEvent<unknown>,
property: keyof Data
) => void;
onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
order: Order;
orderBy: string;
rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
const {
onSelectAllClick,
order,
orderBy,
numSelected,
rowCount,
onRequestSort
} = props;
const createSortHandler = (property: keyof Data) => (
event: React.MouseEvent<unknown>
) => {
onRequestSort(event, property);
};

return (
<TableHead>
<TableRow>
{headCells.map((headCell) => (
  <TableCell
    key={headCell.id}
    align={headCell.numeric ? "left" : "left"}
  padding={headCell.disablePadding ? "none" : "normal"}
    sortDirection={orderBy === headCell.id ? order : false}
  >
    <TableSortLabel
      active={orderBy === headCell.id}
      direction={orderBy === headCell.id ? order : "asc"}
      onClick={createSortHandler(headCell.id)}
    >
      {headCell.label}
      {orderBy === headCell.id ? (
        <Box component="span" sx={visuallyHidden}>
          {order === "desc" ? "sorted descending" : "sorted ascending"}
        </Box>
      ) : null}
    </TableSortLabel>
  </TableCell>
))}
</TableRow>
</TableHead>
);
}

interface EnhancedTableToolbarProps {
numSelected: number;
}
/*for sorting */
export default function DetailPage() {
  const theme = createTheme();
    /* for calender */

let today = new Date().toISOString()
console.log("33",today)

let date = new Date();

date ; //# => Fri Apr 01 2011 11:14:50 GMT+0200 (CEST)

date.setDate(date.getDate() - 1);
console.log("000", date) 

const [fromDate, setFromDate] = React.useState<Dayjs | null>(
dayjs(date)
);
console.log("new fromdate selected is", fromDate);


const [ToDate, setToDate] = React.useState<Dayjs | null>(
dayjs(today)
);
console.log("new todate selected is", ToDate);

  /* go back to landing page */
  const [value, setValue] = React.useState(true);
  /* sipnner */
  const [isLoading, setIsLoading] = React.useState(false);
  const showSpinner = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);


    // setIsLoading(true);
    // fetch("https://reqres.in/api/users?page=0")
    //   .then((respose) => respose.json())
    //   .then((respose) => {
    //     setUsers(respose.data)
    //  });
  };
  /*on table row click */
  const [selectedID, setSelectedID] = React.useState(0);
  console.log({ selectedID });
  /* for select boxes */
  const [eventName, setEventName] = React.useState<string[]>([]);

  const handleChangeEventName = (
    event: SelectChangeEvent<typeof eventName>
  ) => {
    const {
      target: { value }
    } = event;
    setEventName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleDelete3 = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    console.log("clicked delete");
    setEventName((current) => _without(current, value));
  };
  /* for select boxes */
  const [actionName, setActionName] = React.useState<string[]>([]);

  const handleChangeActionName = (
    event: SelectChangeEvent<typeof actionName>
  ) => {
    const {
      target: { value }
    } = event;
    setActionName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleDelete4 = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    console.log("clicked delete");
    setActionName((current) => _without(current, value));
  };
  /*for chip */
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const [entityName, setEntityName] = React.useState<string[]>([]);

const handleChangeEntityName = (
event: SelectChangeEvent<typeof entityName>
) => {
const {
  target: { value }
} = event;
setEntityName(
  // On autofill we get a stringified value.
  typeof value === "string" ? value.split(",") : value
);
};
const handleDelete2 = (e: React.MouseEvent, value: string) => {
e.preventDefault();
console.log("clicked delete");
setEntityName((current) => _without(current, value));
};
const [personName, setPersonName] = React.useState<string[]>([]);

const handleChange = (event: SelectChangeEvent<typeof personName>) => {
const {
  target: { value }
} = event;
setPersonName(
  // On autofill we get a stringified value.
  typeof value === "string" ? value.split(",") : value
);
};
const handleDelete1 = (e: React.MouseEvent, value: string) => {
e.preventDefault();
console.log("clicked delete");
setPersonName((current) => _without(current, value));
};
/*for search - ID */
const [rows, setRows] = React.useState<Data[]>(originalRows);
const [showserach, setShowSearch] = React.useState(false);
  const [searched, setSearched] = React.useState<string>("");

  const requestSearch = (searchedVal: string) => {
    // const filteredRows = originalRows.filter((row) => {
    //   return row.id.toString().includes(searchedVal.toLowerCase());
    // });
    // setRows(filteredRows);
    setShowSearch(true);
    const filteredRows = originalRows.filter((row) => {
      return row.id.toString().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
    setShowSearch(false);
  };
  /*for sorting */
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("date");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if (event.target.checked) {
    //   const newSelected = records.map((n) => n.name);
    //   setSelected(newSelected);
    //   return;
    // }
    // setSelected([]);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - originalRows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(originalRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );
        /*for sorting */
  const classes = useStyles();
  return (
    <>
      <React.Fragment>
        {value === true ? (
          <>
            {/* detail page start  */}
            <div style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: "16px",
                }}
              >
                <Item1
                  sx={{
                    width: "72%",
                    //width: 1168,
                    background: "#52575D"
                  }}
                >
                  <Box
                    sx={{
                      maxHeight: 939,
                      height: "100%"
                    }}
                  >
                      <div style={{ width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
<Box
sx={{
  display: "flex",
  flexDirection: "row", 
  pl:1             
}}
>
<Item>
<Typography pr={2} className="subHeading" component="div">
                          Audit results
                        </Typography>
                        </Item>
<Item>
<Typography pr={1}
                          component="div"
                          sx={{
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "19px"
                          }}
                        >
                          {rows.length} records found
                        
                          {/* { showserach === true ? ( {rows.length} records found  ) : (   {visibleRows.length} records found )} */}
                        </Typography>
</Item>
<Item>
<div>
                          <Button
                            sx={{ p: 0 }}
                            onClick={showSpinner}
                            disabled={isLoading}
                          >
                            <SyncIcon sx={{ color: "#fff" }} fontSize="small" />
                          </Button>
                        </div>
</Item>
</Box>
<Box
sx={{
  display: "flex",
  flexDirection: "row"
}}
>
<Item>
<Button
                          type="submit"
                          size="small"
                          variant="outlined"
                          className="btn-secondary"
                          onClick={() => setValue(!value)}
                          startIcon={<ArrowBackIcon fontSize="small" />}
                        >
                          <Typography variant="caption">New Query</Typography>
                        </Button>
                        
</Item>
<Item>
  <Tooltip
                          title="Export to Excel"
                          placement="right-start"
                          componentsProps={{
                            tooltip: {
                              sx: {
                                bgcolor: "#232425",
                                color: "white"
                              }
                            }
                          }}
                        >
                          <Button sx={{ p: 0 }}>
                            {/* <DownloadIcon
                              sx={{ color: "#fff" }}
                              fontSize="medium"
                            /> */}
                            <img src={require('./export-icon.png')} width="18px" height="16px" alt="export icon" />
                          </Button>
                        </Tooltip></Item>
</Box>
</Box>
</div>
                    
                    <>
                    <Paper
                            square
                            sx={{
                              width: "100%",
                              overflow: "hidden",
                              borderRadius: 0,
                              backgroundColor: '#3D4044',// "#52575D",
                              minHeight: 400,
                            }}
                          >
                    <TableContainer  component={Paper} >
                      <Table
                        sx={{ minWidth: 700, minHeight: 0 , color: "#fff", background: "#3D4044"}}
                        aria-label="customized table"
                        size={dense ? "small" : "medium"}
                      >
                        <EnhancedTableHead
                          numSelected={selected.length}
                          order={order}
                          orderBy={orderBy}
                          onSelectAllClick={handleSelectAllClick}
                          onRequestSort={handleRequestSort}
                          rowCount={originalRows.length}
                        />
                        <TableHead>
                                                      <TableRow>
                                                        <StyledTableCell>
                                                        <StackItem>
                                              <Stack>
                                                {/* <Typography variant="caption">
                                                  Date{" "}
                                                  <ArrowDownwardIcon
                                                    sx={{ fontSize: 12 }}
                                                    fontSize="small"
                                                  />
                                                </Typography> */}

                                                <Stack
                                                  direction="row"
                                                  spacing={0}
                                                  sx={{
                                                    height: 24,
                                                    bgcolor: "#28292B",
                                                    borderRadius: "6px",
                                                    padding: "0 !important",
                                                    overflow: "hidden"
                                                  }}
                                                >
                                                  <Box display="flex" flex-direction="row">
                                                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                                    <KeyboardTimePicker
                                                      margin="normal"
                                                      id="time-picker"
                                                      label="Time picker"
                                                      value={''}
                                                      //onChange={handleDateChange}
                                                      KeyboardButtonProps={{
                                                        "aria-label": "change time"
                                                      }}
                                                    />
                                                </MuiPickersUtilsProvider> */}
                                                    <LocalizationProvider
                                                      dateAdapter={AdapterDayjs}
                                                    >
                                                      <DemoContainer
                                                        sx={{
                                                          // border: "1px solid yellow",
                                                          height: 24,
                                                          overflow: "hidden",
                                                          padding: 0,
                                                          borderRadius: "6px"
                                                        }}
                                                        components={[
                                                          "DateTimePicker",
                                                          "DateTimePicker"
                                                        ]}
                                                      >
                                                        <DateTimePicker
                                                        format="DD/MM/YY HH:MM"
                                                        ampm={false}
                                                          sx={{ backgroundColor: "#28292B" }}
                                                          className={classes.root1}
                                                          label=""
                                                          value={fromDate}
                                                          onChange={(newValue) =>
                                                            setFromDate(newValue)
                                                          }
                                                          components={{
                                                            OpenPickerIcon: CalendarTodayOutlinedIcon
                                                          }}
                                                        />
                                                      </DemoContainer>
                                                    </LocalizationProvider>
                                                    <LocalizationProvider
                                                      dateAdapter={AdapterDayjs}
                                                    >
                                                      <DemoContainer
                                                        components={[
                                                          "DateTimePicker",
                                                          "DateTimePicker"
                                                        ]}
                                                        sx={{
                                                          // border: "1px solid yellow",
                                                          borderRadius: "6px",
                                                          height: 24,
                                                          overflow: "hidden",
                                                          padding: 0
                                                        }}
                                                      >
                                                        <DateTimePicker
                                                          format="DD/MM/YY HH:MM"
                                                          ampm={false}
                                                          sx={{ backgroundColor: "#28292B" }}
                                                          className={classes.root1}
                                                          label=""
                                                          value={ToDate}
                                                          onChange={(newValue) =>
                                                            setFromDate(newValue)
                                                          }
                                                          components={{
                                                            OpenPickerIcon: CalendarTodayOutlinedIcon
                                                          }}
                                                        />
                                                      </DemoContainer>
                                                    </LocalizationProvider> </Box>      
                                                      </Stack>
                                              </Stack>
                                            </StackItem>
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left">
                                                        <StackItem sx={{position: 'relative'}}>
                                              {/* <Typography variant="caption">ID</Typography> */}
                                              <SearchBar className="custom-search"
                                              placeholder=""
                                            value={searched}
                                            onChange={(searchVal) => requestSearch(searchVal)}
                                            onCancelSearch={() => cancelSearch()}
                                            // closeIcon= {}
                                          />
                                            </StackItem>
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left">
                                                        <StackItem>
                                                          <EventTypeSelect />
                                              {/* <Typography
                                                variant="caption"
                                                id="demo-multiple-chip-label"
                                              >
                                                Event Types </Typography> */}

                                                {/* <div>
                                                  <FormControl sx={{ m: 0, width: 150 }}>
                                                  <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={eventName}
                                    onChange={handleChangeEventName}
                                    input={<BootstrapInput />}
                                    // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                    renderValue={(selected) => (
                                      <Box
                                      sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 0.5
                                      }}
                                    >
                                      {(selected as string[]).map((value) => (
                                        <Chip
                                        size="small"
                                          key={value}
                                          label={value}
                                          clickable
                                          deleteIcon={
                                            <CancelIcon
                                              onMouseDown={(event) => event.stopPropagation()}
                                            />
                                          }
                                          onDelete={(e) => handleDelete3(e, value)}
                                          onClick={() => console.log("clicked chip")}
                                          sx={{
                                            padding: "2px 4px",
                                            backgroundColor: "#148291",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "24px",
                                            height: 20,
                                            color: "#fff !important",
                                            borderRadius: "4px",
                                            fontSize: 12,
                                            "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                              fontSize: 12,
                                              color: "#fff !important",
                                            }
                                          }}
                                        />
                                      ))}
                                    </Box>
                                    
                                    )}
                                    MenuProps={MenuProps}
                                  >
                                    {eventnames.map((name) => (
                                      <MenuItem
                                        className={classes.root}
                                        key={name}
                                        value={name}
                                        style={getStyles(name, eventName, theme)}
                                      >
                                        {name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                                    
                                                  </FormControl>
                                                </div> */}
                                            </StackItem>
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left">
                                                        <StackItem>
                                                          <ActionSelect/>
                                              {/* <Typography variant="caption">Action</Typography> */}
                                              {/* <FormControl sx={{ m: 0, width: 120 }}>
                                              <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={actionName}
                                    onChange={handleChangeActionName}
                                    input={<BootstrapInput />}
                                    // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                    renderValue={(selected) => (
                                      <Box
                                      sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 0.5
                                      }}
                                    >
                                      {(selected as string[]).map((value) => (
                                        <Chip
                                        size="small"
                                          key={value}
                                          label={value}
                                          clickable
                                          deleteIcon={
                                            <CancelIcon
                                              onMouseDown={(event) => event.stopPropagation()}
                                            />
                                          }
                                          onDelete={(e) => handleDelete4(e, value)}
                                          onClick={() => console.log("clicked chip")}
                                          sx={{
                                            padding: "2px 4px",
                                            backgroundColor: "#148291",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "24px",
                                            height: 20,
                                            color: "#fff",
                                            borderRadius: "4px",
                                            fontSize: 12,
                                            "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                              fontSize: 12,
                                              color: "#fff"
                                            }
                                          }}
                                        />
                                      ))}
                                    </Box>
                                    
                                    )}
                                    MenuProps={MenuProps}
                                  >
                                    {actionnames.map((name) => (
                                      <MenuItem
                                        className={classes.root}
                                        key={name}
                                        value={name}
                                        style={getStyles(name, actionName, theme)}
                                      >
                                        {name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                              </FormControl> */}
                                            </StackItem>
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left">
                                                        <StackItem>
                                                          <EntitySelect/>
                                              {/* <Typography variant="caption">Entity</Typography> */}
                                              {/* <FormControl sx={{ m: 0, width: 120 }}>
                                              <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={entityName}
                                    onChange={handleChangeEntityName}
                                    input={<BootstrapInput />}
                                    // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                    renderValue={(selected) => (
                                      <Box
                                      sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 0.5
                                      }}
                                    >
                                      {(selected as string[]).map((value) => (
                                        <Chip
                                        size="small"
                                          key={value}
                                          label={value}
                                          clickable
                                          deleteIcon={
                                            <CancelIcon
                                              onMouseDown={(event) => event.stopPropagation()}
                                            />
                                          }
                                          onDelete={(e) => handleDelete2(e, value)}
                                          onClick={() => console.log("clicked chip")}
                                          sx={{
                                            // background: "#00A3BF",
                                            padding: "2px 4px",
                                            backgroundColor: "#148291",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "24px",
                                            height: 20,
                                            color: "#fff",
                                            borderRadius: "4px",
                                            fontSize: 12,
                                            "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                              fontSize: 12,
                                              color: "#fff"
                                            }
                                          }}
                                        />
                                      ))}
                                    </Box>
                                    )}
                                    MenuProps={MenuProps}
                                  >
                                    {entitynames.map((name) => (
                                      <MenuItem
                                        className={classes.root}
                                        key={name}
                                        value={name}
                                        style={getStyles(name, entityName, theme)}
                                      >
                                        {name}
                                      </MenuItem>
                                    ))}
                                  </Select></FormControl> */}
                                            </StackItem>
                                            
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left">
                                                        <StackItem>
                                              {/* <Typography variant="caption">User</Typography> */}
                                              {/* <FormControl sx={{ m: 0, width: 120 }}>
                                              <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={personName}
                                    input={<BootstrapInput />}
                                    onChange={handleChange}
                                    renderValue={(selected) => (
                                                                <Box
                                      sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 0.5
                                      }}
                                    >
                                      {(selected as string[]).map((value) => (
                                        <Chip
                                        size="small"
                                          key={value}
                                          label={value}
                                          clickable
                                          deleteIcon={
                                            <CancelIcon
                                              onMouseDown={(event) => event.stopPropagation()}
                                            />
                                          }
                                          onDelete={(e) => handleDelete1(e, value)}
                                          onClick={() => console.log("clicked chip")}
                                          sx={{
                                            padding: "2px 4px",
                                            backgroundColor: "#148291",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "24px",
                                            height: 20,
                                            color: "#fff",
                                            borderRadius: "4px",
                                            fontSize: 12,
                                            "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                              fontSize: '10 !important',
                                              color: "#fff"
                                            }
                                          }}
                                        />
                                      ))}
                                    </Box>
                                    )}
                                    MenuProps={MenuProps}
                                  >
                                    {names.map((name) => (
                                      <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                        className={classes.root}
                                      >
                                        {name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                          </FormControl> */}
                                          <UserSelect />
                                        
                                                    </StackItem>
                                                                </StyledTableCell>

                                                      
                                                      </TableRow>
                                                    </TableHead>
                                                    {isLoading ? ( <LoadingSpinner /> ) :
                                                    ( 
                                                    <>
                                                    
                                                      
                                                    { showserach === true ? (
                                                      <TableBody sx={{ maxHeight: 120 ,
                                                      // border: '1px solid green'
                                                      }}>
                                                      {rows.map((row): JSX.Element => (
                                                        <StyledTableRow
                                                          //key={row.date}
                                                          // onClick={() => setSelectedRow(!selectedRow)}
                                                          key={row.id}
                                                          onClick={() => {
                                                            setSelectedID(row.id);
                                                            console.log(
                                                              "selected row is",
                                                              selectedID
                                                            );
                                                          }}
                                                          selected={selectedID === row.id}
                                                          classes={{
                                                            hover: classes.hover,
                                                            selected: classes.selected
                                                          }}
                                                          className={classes.tableRow}
                                                          // classes={{
                                                          //   root: classes.tableRowRoot,
                                                          //   selected: classes.tableRowSelected
                                                          // }}
                                                          sx={{
                                                            "&:last-child td, &:last-child th": {
                                                            // border: 0
                                                            }
                                                          }}
                                                        >
                                                          <StyledTableCell
                                                            component="th"
                                                            scope="row"
                                                            sx={{paddingLeft: '20px'}}
                                                          >
                                                            {row.date}
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.id}
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.eventType}
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.action}
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.entity}
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.user}
                                                          </StyledTableCell>
                                                        
                                                        </StyledTableRow>
                                                      ))}
                                                    </TableBody>
                                                    ) : (<>
                                                    <TableBody sx={{ maxHeight: 120 }}>
                          {visibleRows.map((row, index)  => (
                                                        <StyledTableRow
                                                          //key={row.date}
                                                          // onClick={() => setSelectedRow(!selectedRow)}
                                                          key={row.id}
                                                          onClick={() => {
                                                            setSelectedID(row.id);
                                                            console.log(
                                                              "selected row is",
                                                              selectedID
                                                            );
                                                          }}
                                                          selected={selectedID === row.id}
                                                          classes={{
                                                            hover: classes.hover,
                                                            selected: classes.selected
                                                          }}
                                                          className={classes.tableRow}
                                                          // classes={{
                                                          //   root: classes.tableRowRoot,
                                                          //   selected: classes.tableRowSelected
                                                          // }}
                                                          sx={{
                                                            "&:last-child td, &:last-child th": {
                                                            // border: 0
                                                            }
                                                          }}
                                                        >
                                                          <StyledTableCell
                                                            component="th"
                                                            scope="row"
                                                            sx={{paddingLeft: '20px'}}
                                                          >
                                                            {row.date} 
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.id}
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.eventType}
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.action}
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.entity}
                                                          </StyledTableCell>
                                                          <StyledTableCell align="left">
                                                            {row.user}   
                                                          </StyledTableCell>
                                                        
                                                        </StyledTableRow>
                                                      ))}
                                                    </TableBody></>)}
                                                  
                                                    </>
                                                    )}
                        
                      </Table>
                    </TableContainer>
                  </Paper>
                        <Box>
                          {/* <Paper
                            square
                            sx={{
                              width: "100%",
                              overflow: "hidden",
                              borderRadius: 0,
                              backgroundColor: "#52575D",
                              minHeight: 450,
                            }}
                          >
                            <TableContainer
                              component={Paper}
                              //sx={{ maxHeight: 340 }}
                            >
                              <Table
                                sx={{ minWidth: 700, minHeight: 0 }}
                                aria-label="customized table"
                              > */}
                                {/* <TableHead>
                                  <TableRow>
                                    <StyledTableCell>
                                    <StackItem>
                          <Stack>
                            <Typography variant="caption">
                              Date{" "}
                              <ArrowDownwardIcon
                                sx={{ fontSize: 12 }}
                                fontSize="small"
                              />
                            </Typography>

                            <Stack
                              direction="row"
                              spacing={0}
                              sx={{
                                height: 24,
                                bgcolor: "#28292B",
                                borderRadius: "6px",
                                padding: "0 !important",
                                overflow: "hidden"
                              }}
                            >
                              <Box display="flex" flex-direction="row">
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DemoContainer
                                    sx={{
                                      // border: "1px solid yellow",
                                      height: 24,
                                      overflow: "hidden",
                                      padding: 0,
                                      borderRadius: "6px"
                                    }}
                                    components={[
                                      "DateTimePicker",
                                      "DateTimePicker"
                                    ]}
                                  >
                                    <DateTimePicker
                                    format="DD/MM/YY HH:MM"
                                    ampm={false}
                                      sx={{ backgroundColor: "#28292B" }}
                                      className={classes.root1}
                                      label=""
                                      value={fromDate}
                                      onChange={(newValue) =>
                                        setFromDate(newValue)
                                      }
                                      components={{
                                        OpenPickerIcon: CalendarTodayOutlinedIcon
                                      }}
                                    />
                                  </DemoContainer>
                                </LocalizationProvider>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DemoContainer
                                    components={[
                                      "DateTimePicker",
                                      "DateTimePicker"
                                    ]}
                                    sx={{
                                      // border: "1px solid yellow",
                                      borderRadius: "6px",
                                      height: 24,
                                      overflow: "hidden",
                                      padding: 0
                                    }}
                                  >
                                    <DateTimePicker
                                      format="DD/MM/YY HH:MM"
                                      ampm={false}
                                      sx={{ backgroundColor: "#28292B" }}
                                      className={classes.root1}
                                      label=""
                                      value={ToDate}
                                      onChange={(newValue) =>
                                        setFromDate(newValue)
                                      }
                                      components={{
                                        OpenPickerIcon: CalendarTodayOutlinedIcon
                                      }}
                                    />
                                  </DemoContainer>
                                </LocalizationProvider> </Box>      
                                  </Stack>
                          </Stack>
                        </StackItem>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                    <StackItem sx={{position: 'relative'}}>
                          <Typography variant="caption">ID</Typography>
                          <SearchBar className="custom-search"
                          placeholder=""
                        value={searched}
                        onChange={(searchVal) => requestSearch(searchVal)}
                        onCancelSearch={() => cancelSearch()}
                        // closeIcon= {}
                      />
                        </StackItem>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                    <StackItem>
                          <Typography
                            variant="caption"
                            id="demo-multiple-chip-label"
                          >
                            Event Types
                            <div>
                              <FormControl sx={{ m: 0, width: 120 }}>
                              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={eventName}
                onChange={handleChangeEventName}
                input={<BootstrapInput />}
                // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5
                  }}
                >
                  {(selected as string[]).map((value) => (
                    <Chip
                    size="small"
                      key={value}
                      label={value}
                      clickable
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                      onDelete={(e) => handleDelete3(e, value)}
                      onClick={() => console.log("clicked chip")}
                      sx={{
                        padding: "2px 4px",
                        backgroundColor: "#148291",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        height: 20,
                        color: "#fff !important",
                        borderRadius: "4px",
                        fontSize: 12,
                        "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                          fontSize: 12,
                          color: "#fff !important",
                        }
                      }}
                    />
                  ))}
                </Box>
                
                )}
                MenuProps={MenuProps}
              >
                {eventnames.map((name) => (
                  <MenuItem
                    className={classes.root}
                    key={name}
                    value={name}
                    style={getStyles(name, eventName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
                                
                              </FormControl>
                            </div>
                          </Typography>{" "}
                        </StackItem>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                    <StackItem>
                          <Typography variant="caption">Action</Typography>
                          <FormControl sx={{ m: 0, width: 120 }}>
                          <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={actionName}
                onChange={handleChangeActionName}
                input={<BootstrapInput />}
                // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5
                  }}
                >
                  {(selected as string[]).map((value) => (
                    <Chip
                    size="small"
                      key={value}
                      label={value}
                      clickable
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                      onDelete={(e) => handleDelete4(e, value)}
                      onClick={() => console.log("clicked chip")}
                      sx={{
                        padding: "2px 4px",
                        backgroundColor: "#148291",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        height: 20,
                        color: "#fff",
                        borderRadius: "4px",
                        fontSize: 12,
                        "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                          fontSize: 12,
                          color: "#fff"
                        }
                      }}
                    />
                  ))}
                </Box>
                
                )}
                MenuProps={MenuProps}
              >
                {actionnames.map((name) => (
                  <MenuItem
                    className={classes.root}
                    key={name}
                    value={name}
                    style={getStyles(name, actionName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
                          </FormControl>
                        </StackItem>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                    <StackItem>
                          <Typography variant="caption">Entity</Typography>
                          <FormControl sx={{ m: 0, width: 120 }}>
                          <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={entityName}
                onChange={handleChangeEntityName}
                input={<BootstrapInput />}
                // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5
                  }}
                >
                  {(selected as string[]).map((value) => (
                    <Chip
                    size="small"
                      key={value}
                      label={value}
                      clickable
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                      onDelete={(e) => handleDelete2(e, value)}
                      onClick={() => console.log("clicked chip")}
                      sx={{
                        // background: "#00A3BF",
                        padding: "2px 4px",
                        backgroundColor: "#148291",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        height: 20,
                        color: "#fff",
                        borderRadius: "4px",
                        fontSize: 12,
                        "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                          fontSize: 12,
                          color: "#fff"
                        }
                      }}
                    />
                  ))}
                </Box>
                )}
                MenuProps={MenuProps}
              >
                {entitynames.map((name) => (
                  <MenuItem
                    className={classes.root}
                    key={name}
                    value={name}
                    style={getStyles(name, entityName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select></FormControl>
                        </StackItem>
                        
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                    <StackItem>
                          <Typography variant="caption">User</Typography>
                          <FormControl sx={{ m: 0, width: 120 }}>
                          <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                input={<BootstrapInput />}
                onChange={handleChange}
                renderValue={(selected) => (
                  // <Box
                  //   sx={{
                  //     display: "flex",
                  //     flexWrap: "wrap",
                  //     gap: 0.5
                  //   }}
                  // >
                  //   {selected.map((value) => (
                  //      <Chip
                  //       key={value}
                  //       label={value}
                  //       sx={{
                  //         backgroundColor: "#148291",
                  //         borderRadius: 18,
                  //         color: "#fff",
                  //         fontSize: 18,
                  //         fontStyle: "normal",
                  //         fontWeight: 400,
                  //         lineHeight: "21px",
                  //         height: 40,
                  //         "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                  //           fontSize: 18,
                  //           color: "#fff"
                  //         }
                  //       }}
                  //       onClick={handleClick}
                  //       onDelete={handleDelete}
                  //     />
                  //   ))}
                  // </Box>
                  <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5
                  }}
                >
                  {(selected as string[]).map((value) => (
                    <Chip
                    size="small"
                      key={value}
                      label={value}
                      clickable
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                      onDelete={(e) => handleDelete1(e, value)}
                      onClick={() => console.log("clicked chip")}
                      sx={{
                        padding: "2px 4px",
                        backgroundColor: "#148291",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        height: 20,
                        color: "#fff",
                        borderRadius: "4px",
                        fontSize: 12,
                        "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                          fontSize: '10 !important',
                          color: "#fff"
                        }
                      }}
                    />
                  ))}
                </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                    className={classes.root}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
                      </FormControl>
                                </StackItem>
                                            </StyledTableCell>

                                  
                                  </TableRow>
                                </TableHead> */}
                            
                                {/* <TableBody sx={{ maxHeight: 120 }}>
                                  {rows.map((row): JSX.Element => (
                                    <StyledTableRow
                                      //key={row.date}
                                      // onClick={() => setSelectedRow(!selectedRow)}
                                      key={row.id}
                                      onClick={() => {
                                        setSelectedID(row.id);
                                        console.log(
                                          "selected row is",
                                          selectedID
                                        );
                                      }}
                                      selected={selectedID === row.id}
                                      classes={{
                                        hover: classes.hover,
                                        selected: classes.selected
                                      }}
                                      className={classes.tableRow}
                                      // classes={{
                                      //   root: classes.tableRowRoot,
                                      //   selected: classes.tableRowSelected
                                      // }}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                        // border: 0
                                        }
                                      }}
                                    >
                                      <StyledTableCell
                                        component="th"
                                        scope="row"
                                        sx={{paddingLeft: '20px'}}
                                      >
                                        {row.date}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.id}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.eventType}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.entity}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.action}
                                      </StyledTableCell>
                                      <StyledTableCell align="left">
                                        {row.user}
                                      </StyledTableCell>
                                    
                                    </StyledTableRow>
                                  ))}
                                </TableBody> */}

                              {/* </Table>
                            </TableContainer>
                          </Paper> */}
                        { isLoading === true ? 
                        (<></>)
                        :
                        <Box
                        sx={{
                          backgroundColor:  "#3D4044",//"#52575D",
                          "&  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
                            color: "#ffffff",
                            borderRadius: 1,
                            backgroundColor: 'transparent',
                          }
                        }}
                        p={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {/* <Pagination
                          sx={{ textAlign: "center" }}
                          count={1}
                          showFirstButton
                          showLastButton
                        /> */}
                          <img src={require('./img.png')} width="100px" height="24px" alt="" />
                      </Box>}
                        </Box>
                      </>
                  
                  </Box>
                
                </Item1>
                <Item1
                  sx={{
                    width: "28%",
                    //width: 388,
                    // height: 430,
                    boxSizing: "border-box",
                    // position: absolute;
                    // width: 388px;
                    height: '432px',
                    minHeight: '371px',
                    border: "1px solid #3D4044"
                  // border: "1px solid red"
                  }}
                >
                  <Paper
                    variant="outlined"
                    sx={{
                      backgroundColor: "transparent",
                      // borderColor: "#3d444e",
                      color: "#fff",
                      textAlign: "center"
                    }}
                  >
                    {selectedID === 0 ? (
                      <>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          // height="100%"
                          minHeight="430px" //371px
                          sx={{
                            color: "#ffffff",
                          //  border: "1px solid green"
                          }}
                        >
                          {/* <Stack spacing={2}> */}
                                            {/* <Box
                          component="img"
                          sx={{
                            height: 50,
                            width: 50,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                          }}
                          alt=""
                          src=".\info-square.png"
                        /> */}
                          {/* <img src=".\info-square.png" width = '20px' alt="" /> */}
                          {/* <img src="https://dummyimage.com/20*20/fff/fff" width = '20px' alt="" />
                          <Typography
                            variant="body2"
                            component="div"
                            display="block"
                            sx={{ p: 1 }}
                          >
                            Select a row to see more details
                          </Typography> */}
                          {/* </Stack> */}
                          <Stack spacing={2}>
                            <SideItem>
                            {/* <Box sx={{ width: 30, height: 30, bgcolor: "yellow"}}>
                            <IconButton aria-label="Example">
                              <FontAwesomeIcon icon={faInfo} fontSize="18px" />
                            </IconButton>
                          </Box> */}
                          {/* <img src="https://dummyimage.com/20*20/fff/fff" width = '20px' alt="" /> */}
                        {/* <InfoOutlinedIcon sx={{}} fontSize="large"/> */}
                        <img src={require('./info-square.png')} width="32px" height="36px" alt="info" />
                          <Typography
                            variant="body2"
                            component="div"
                            display="block"
                            sx={{ p: 1, fontSize: 16 }}
                          >
                            Select a row to see more details
                          </Typography>
                            </SideItem>
                            </Stack>
                        </Box>
                        
                      </>
                    ) : (
                      <>
                        {/* <Typography
                          mt={1}
                          variant="body2"
                          component="div"
                          display="block"
                          // sx={{ color: "#148291" }}
                        >
                          Record with ID {selectedID} is selected
                        </Typography> */}
                        <DetailPanelView />
                      </>
                    )}
                  </Paper>
                </Item1>
              </Box>
            </div>
            {/* detail page end  */}
          </>
        ) : (
          <LandingPage />
        )}
      </React.Fragment>
    </>
  );
}
