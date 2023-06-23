import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      //color: "red",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver ",
  "Wilson",
  "April",
  "Ralph ",
  "Omar",
  "Carlos Abbott",
  "Miriam ",
  "Bradley",
  "Virginia ",
  "Kelly"
];
const eventnames = [
  "Assignments & Circuits ",
  "Map Editing",
  "Notifications",
  "Asset Health ",
  "Assset Config",
  "User Config"
];
const entitynames = ["E1 ", "E2", "E3", "E4"];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
export default function DemoPage() {
  const theme = useTheme();
  /* for calender */
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  console.log("new date selected is", value);

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
  /*for chip */
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
          <DateTimePicker
            //  label="Controlled picker"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          Select type of event or activity
          {/* <InputLabel sx={{ }} id="demo-multiple-chip-label">Select users</InputLabel>  */}
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={eventName}
            onChange={handleChangeEventName}
            // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onClick={handleClick}
                    onDelete={handleDelete}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {eventnames.map((name) => (
              <MenuItem
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
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          Select entity or asset
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={entityName}
            onChange={handleChangeEntityName}
            // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {entitynames.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, entityName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          Select users
          {/* <InputLabel sx={{ }} id="demo-multiple-chip-label">Select users</InputLabel>  */}
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
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
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Clickable Deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Clickable Deletable"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
        />
      </Stack>
    </>
  );
}
