  import * as React from "react";
  import styled from "@mui/system/styled";
  import Grid from "@mui/system/Unstable_Grid";
  import Box from "@mui/system/Box";
  import Card from "@mui/material/Card";
  import CardActions from "@mui/material/CardActions";
  import CardContent from "@mui/material/CardContent";
  import Button from "@mui/material/Button";
  import Typography from "@mui/material/Typography";
  import Paper from "@mui/material/Paper";
  import Divider from '@mui/material/Divider';
  import Stack from "@mui/material/Stack";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
  import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
  import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
  import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
  import Accordion from "@mui/material/Accordion";
  import AccordionSummary from "@mui/material/AccordionSummary";
  import AccordionDetails from "@mui/material/AccordionDetails";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

  const ItemStack = styled("div")(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    backgroundColor: "none",
    padding: theme.spacing(1),
    textAlign: "left",
    color: "#fff",
    fontFamily: "Roboto",
    // fontSize: 16,
    // fontWeight: 500,
    lineHeight: "21px",
    letterSpacing: 0,
    boxShadow: 'none',
  }));

  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "",
    //border: '1px solid',
    //borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(0.5),
    borderRadius: "4px",
    textAlign: "left",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "19px",
    letterSpacing: 0,
    fontStyle: 'normal',
    boxShadow: 'none',
  }));

  export default function DetailsTab() {
    return (
      <>
      <Box sx={{ width: "100%" }} p={1}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 2, }}>
          <Grid xs={12}>
            <Stack direction="row" spacing={1}>
              <ItemStack>
              <Box  sx={{
                      //mr: 1,
                      width: 59,
                      height: 59,
                      bgcolor: "#FFAB00",
                      borderRadius: 20,
                      background: "#3D4044",
                      border: "2px solid #9EA5AD"
                    }}>
                      <LocationOnOutlinedIcon sx={{mt: '10px', ml:'10px'}} fontSize="large"/>
                    </Box>
              </ItemStack>
              <ItemStack sx={{paddingTop: '20px'}}>
                <Typography  sx={{fontWeight: '400', fontSize: '14px'}} component="div">
                  Assignment Event
                </Typography>
                <Typography  sx={{fontWeight: '500', fontSize: '18px'}} component="div">
                  Asset loaded from EX123
                </Typography>
              </ItemStack>
            </Stack>
          </Grid>
          <Grid xs={12}><Divider sx={{ mt: '4px', mb: 1, border: '1px solid #3D4044' }}/></Grid>
          <Grid xs={6}>
            <Item >Executed by</Item>
          </Grid>
          <Grid xs={6}>
            <Item>System</Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{textTransform: "uppercase"}}>Circuit created</Item>
          </Grid>
          <Grid xs={6}>
            <Item>John Smith <br/> 30/01/23 23:58 <br/> ID 010092</Item>
          </Grid>
          <Grid xs={12}>
            <Item></Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{textTransform: "uppercase"}}>Material</Item>
          </Grid>
          <Grid xs={6}>
            <Item>HG</Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{textTransform: "uppercase"}}>Payload</Item>
          </Grid>
          <Grid xs={6}>
            <Item>2,423T</Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{textTransform: "uppercase"}}>Source</Item>
          </Grid>
          <Grid xs={6}>
            <Item>ABC</Item>
          </Grid>
          <Grid xs={12} mt={2}>
            
          </Grid>
        </Grid>
      </Box>
      <div style={{ 
        backgroundColor: "#3D4044", //"#52575D", 
        padding: 8, }}>
              <Typography variant="body2" gutterBottom sx={{ fontSize: 16, textAlign: "left" , pl:2}}>
              USER ACTIVITY (at similar time)
              </Typography>
              <Accordion
                style={{
                  backgroundColor: "#3D4044",  // "#52575D",
                  color: "#fff",
                  textAlign: "left",
                  boxShadow: 'none',
                  margin:0
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ArrowDropDownIcon fontSize="small" htmlColor="#fff" />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{fontWeight: '400', fontSize: '16px'}} component="div">John Smith</Typography>
                  
                </AccordionSummary>
                <AccordionDetails sx={{paddingTop: 0}}>
                  <Grid container pl={2} spacing={0}>
                    <Grid xs={12}> <Divider sx={{ mb:1, border: '1px solid #52575D' }}/></Grid>
                  <Grid xs={6}>
            <Item ><Box sx={{ textTransform: 'uppercase'}}>Previous action</Box> 
            <Box mt={1} sx={{width: 140, bgcolor: "#232425", borderRadius: '3px'}}> Dump destination</Box>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{textAlign: 'right'}}>10:13:28 <br/>1min earlier</Item>
          </Grid>
          {/* <Grid xs={6}>
            <Item></Item>
          </Grid> */}
          {/* <Grid xs={6}>
            <Item sx={{textAlign: 'right'}}></Item>
          </Grid> */}
          <Grid xs={9}>
            <Item>Reset dump destination <br/> (Stockpile 23A)</Item>
          </Grid>
          <Grid xs={3}>
            <Item></Item>
          </Grid>
          {/* <Grid xs={6}>
            <Item>(Stockpile 23A)</Item>
          </Grid> */}
          <Grid xs={12}>
          <Divider sx={{ mt: 1, border: '1px solid #52575D' }}/> 
          </Grid>
                  </Grid>
                  {/* <Grid container pl={2}>
                    <Grid xs={12}> <Divider sx={{ bgcolor: "#fff" }}/></Grid>
                  <Grid xs={6}>
            <Item sx={{ textTransform: 'uppercase'}}>subsequent action</Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{textAlign: 'right'}}>10:13:28</Item>
          </Grid>
          <Grid xs={6}>
            <Item><Box sx={{bgcolor: "#232425", borderRadius: '3px'}}>Dump destination</Box></Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{textAlign: 'right'}}>1min earlier</Item>
          </Grid>
          <Grid xs={9}>
            <Item>Reset dump destination</Item>
          </Grid>
          <Grid xs={3}>
            <Item></Item>
          </Grid>
          <Grid xs={6}>
            <Item>(Stockpile 23A)</Item>
          </Grid>
                  </Grid> */}
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{
                  backgroundColor: "#3D4044",//"#52575D",
                  color: "#fff",
                  textAlign: "left",
                  boxShadow: 'none',
                  margin: 0
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ArrowDropDownIcon fontSize="small" htmlColor="#fff" />
                  }
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography  sx={{fontWeight: '400', fontSize: '16px'}} component="div">Jane Lastname</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{paddingTop: 0}}>
                  {/* <Grid container>
                  <Grid xs={12}> <Divider sx={{ bgcolor: "#fff" }}/></Grid>
                  <Grid xs={6}>
            <Item>Previous action</Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{textAlign: 'right'}}>10:13:28</Item>
          </Grid>
          <Grid xs={6}>
            <Item><Box sx={{bgcolor: "#232425", borderRadius: '3px'}}>Dump destination</Box></Item>
          </Grid>
          <Grid xs={4}>
            <Item sx={{textAlign: 'right'}}>1min earlier</Item>
          </Grid>
          <Grid xs={9}>
            <Item>Reset dump destination</Item>
          </Grid>
          <Grid xs={3}>
            <Item></Item>
          </Grid>
          <Grid xs={6}>
            <Item>(Stockpile 23A)</Item>
          </Grid>
                  </Grid> */}
                </AccordionDetails>
              </Accordion>
            </div>
      </>
    );
  }
