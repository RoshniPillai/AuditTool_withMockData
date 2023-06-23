import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Theme, useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DetailPage from "./detail";
import CancelIcon from "@material-ui/icons/Cancel";
import _without from "lodash/without";
import CustomizedHook from "./selectBox";
import CustomizedHook1 from "./selectBox1";
import CustomizedHook2 from "./selectBox2";
// import logo from './spinner.gif'

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
const theme = createTheme();
const useStyles = makeStyles({
  select: {
    "& ul": {
      padding: 0
    },
    "& li": {
      fontSize: 62
    }
  },

  root: {
    height: 30,
    //width: 200,
    paddingTop: 0,
    margin: 0,
    //borderRadius: 8,
    color: "#fff !important",
    // backgroundColor: "#3D4044 !important",
    // fontSize: "23px !important",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",

    "& ul.MuiList-root.MuiList-padding.MuiMenu-list.css-6hp17o-MuiList-root-MuiMenu-list": {},
    "& .css-6hp17o-MuiList-root-MuiMenu-list": {},
    "&:hover": {
      color: "#fff",
      backgroundColor: "#148291 !important"
    },
    "&:selected": {
      color: "#fff"
      // backgroundColor: "red"
    },
    "& .css-w6qulv-MuiInputBase-root .MuiInputBase-input:focus": {}
  },
  root1: {
    backgroundColor: "#3D4044",
    background: "#3D4044",
    borderRadius: "20px",
    //height: "40px",
    width: "209px",
    minWidth: "209px !important",
    paddingLeft: 8,
    fontSize: 16,

    "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd.MuiInputAdornment-outlined.MuiInputAdornment-sizeMedium ": {
      position: "absolute",
      left: 0
    },
    "& .MuiSvgIcon-root": { color: "#ffffff", width: 15 },
    "&:hover": {
      // color: "red",
      // backgroundColor: "blue"
    },
    "& .MuiOutlinedInput-input": {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 19,
      letterSpacing: 0,
      fontStyle: "normal",
      textAlign: "left",
      padding: "10px 20px 10px 40px"
    },
    "&.MuiInputAdornment-positionEnd": {
      color: "#ffffff"
    },
    //MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1laqsz7-MuiInputAdornment-root
    "& .MuiInputLabel-root": {
      // color: "green"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      //  borderColor: "green"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: 'none'
    },
    // " & .MuiFormControl-root.MuiTextField-root.makeStyles-root1-63.css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
    //   width: 209,
    //   maxWidth: 209,
    //   overflowX: "hidden",
    //   overflowY: "hidden",
    //   minWidth: 209
    // },
    // "&  .MuiStack-root.css-nen11g-MuiStack-root .MuiStack-root .MuiFormControl-root.MuiTextField-root.makeStyles-root1-123": {
    //   background: "pink"
    //   //  min-width: 209px;
    //   // max-width: 209px;
    //   // overflow-x: hidden;
    //   // overflow-y: hidden;
    // }
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch"
  }
});
const MenuProps = {
  PaperProps: {
    sx: {
      // bgcolor: "pink",
      "& .css-6hp17o-MuiList-root-MuiMenu-list": {
        padding: 0,
        borderRadius: 20,
        backgroundColor: "#3D4044"
      },
      "& .MuiList-root.MuiList-padding.MuiMenu-list": {
        padding: 0,
        width: "426px",
        /* height: 105px; */
        /* left: 553px; */
        background: "#3D4044",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: '8px',
      }
    }
  }
};

const names = [
  "Nicholas Little", "Travis Quirk ","Dave Smith", "Ryan Stimpson"
];
const eventnames = [
  "Assignments ",
  "Map Editing",
  "Notifications",
  "Asset Health ",
  "Assset Config",
  "User Config"
];
const entitynames = ["AHT180 ", "AHT181", "AHT182", "AHT183","AHT184"];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
    color: "#fff"
  },
  "& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon": {
    color: "#fff"
  },
  "& .MuiInputBase-input": {
    padding: 0,
    // border: '1px solid yellow',
    borderRadius: "20px",
    position: "relative",
    backgroundColor: "#3D4044",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "40px",
    letterSpacing: "0em",
    color: "#fff",
    //padding: "10px 26px 10px 12px",
    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    // fontFamily: [
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    // ].join(','),
    "&:focus": {
      borderRadius: 20
      //  borderColor: "#80bdff",
      //  boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    },
    "&:after": {
      // color: 'red',
    }
  }
}));
export default function LandingPage() {
  const theme = useTheme();
  const classes = useStyles();

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
  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setPersonName(event.target.value as string[]);
  // };

  const handleDelete1 = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    console.log("clicked delete");
    setPersonName((current) => _without(current, value));
  };
  /*for chip */
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  /* start query button */
  const [value, setValue] = React.useState(true);
  return (
    <React.Fragment>
      <CssBaseline />
      {value === true ? (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            //minHeight="80vh"
            sx={{
              color: "#ffffff"
              //margin: "0 auto"
            }}
          >
            <Box
              sx={{
                width: 426,
                // border: "1px solid yellow",
                textAlign: "left",
                marginTop: 8
              }}
            >
              <Stack spacing={2}>
                <Typography className="heading" component="div">
                  New audit query
                </Typography>
                <Typography className="title" component="div">
                  Select a date range
                 </Typography>
                <Stack direction="row" spacing={1} sx={{marginTop: '0 !important'}}>
                  <Stack spacing={0}>
                    <Typography className="subTitle" component="div">
                      From
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        // sx={{ width: 209, fontSize: 8 }}
                        components={["DateTimePicker", "DateTimePicker"]}
                      >
                        <DateTimePicker
                        format="DD/MM/YY HH:MM"
                          ampm={false}
                          className={classes.root1}
                          label=""
                          value={fromDate}
                          onChange={(newValue) => setFromDate(newValue)}
                          components={{
                            OpenPickerIcon: CalendarTodayOutlinedIcon
                          }}
                          
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Stack>
                  <Stack spacing={0}>
                    {/* <Typography className="subTitle" gutterBottom>
                          To
                        </Typography> */}
                    <Typography className="subTitle" component="div">
                      To
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={["DateTimePicker", "DateTimePicker"]}
                      >
                        <DateTimePicker
                         format="DD/MM/YY HH:MM"
                         ampm={false}
                          className={classes.root1}
                          label=""
                          //defaultValue={new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()}
                          //onChange={''}
                          value={ToDate}
                          onChange={(newValue) => setToDate(newValue)}
                          components={{
                            OpenPickerIcon: CalendarTodayOutlinedIcon
                          }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Stack>
                </Stack>
                <FormControl sx={{ m: 1, width: 426 }}>
                  {/* <Typography className="title" gutterBottom>
                        Select type of event or activity
                      </Typography> */}
                  <Typography className="title" component="div" gutterBottom>
                    Select type of event or activity
                  </Typography>
                  {/* <CustomizedHook1 /> */}
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
                        gap: 0.5,
                        padding: '2px',
                      }}
                    >
                      {(selected as string[]).map((value) => (
                        <Chip
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
                              backgroundColor: "#148291",
                              borderRadius: 18,
                              color: "#fff",
                              fontSize: 18,
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "21px",
                              height: 40,
                              "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                fontSize: 18,
                                color: "#fff"
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

                <FormControl sx={{ m: 1, width: 426 }}>
                  <Typography className="title" component="div" gutterBottom>
                    Select Entity or Asset
                  </Typography>
                  {/* <CustomizedHook1 /> */}
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
                        gap: 0.5,
                        padding: '2px',
                      }}
                    >
                      {(selected as string[]).map((value) => (
                        <Chip
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
                              backgroundColor: "#148291",
                              borderRadius: 18,
                              color: "#fff",
                              fontSize: 18,
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "21px",
                              height: 40,
                              "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                fontSize: 18,
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
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 426 }}>
                  <Typography className="title" component="div" gutterBottom>
                    Select Users
                  </Typography>
                  {/* <CustomizedHook />
                  <br/><br/> */}
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
                      //     <Chip
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
                        gap: 0.5,
                        padding: '2px',
                      }}
                    >
                      {(selected as string[]).map((value) => (
                        <Chip
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
                              backgroundColor: "#148291",
                              borderRadius: 18,
                              color: "#fff",
                              fontSize: 18,
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "21px",
                              height: 40,
                              "& .MuiChip-deleteIconColorDefault.MuiChip-deleteIconFilledColorDefault.css-i4bv87-MuiSvgIcon-root": {
                                fontSize: 18,
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
                <Box pt={2} display="flex" justifyContent="flex-end">
                  <Button
                    className="primarybtn"
                    type="submit"
                    //fullWidth
                    variant="contained"
                    sx={{
                      "&:hover": {
                        backgroundColor: "none"
                      }
                    }}
                    onClick={() => setValue(!value)}
                  >
                    START QUERY
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </>
      ) : (
        <DetailPage />
      )}
    </React.Fragment>
  );
}
