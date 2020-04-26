import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

import SwipeableViews from 'react-swipeable-views';
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import ListIcon from '@material-ui/icons/List';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green, blue, orange, red } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

import { TextField } from '@material-ui/core';

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 800,
    position: 'relative',
    minHeight: 600,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
  fabBlue: {
    color: theme.palette.common.white,
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[600],
    },
  },
}));

//const useStyles = makeStyles(styles);

export default function AddTask() {
  const classes = useStyles();
  //const preventDefault = event => event.preventDefault();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleChangeIndex = index => {
    setValue(index);
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const preventDefault = event => event.preventDefault();

  const fabs = [
    {
      color: 'Blue',
      className: clsx(classes.fab, classes.fabBlue),
      icon: <NoteAddIcon />,        
      label: 'Add',
    },
  ];

  return (              
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Zadat nový úkol" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TextField id="task-name" label="Název úkolu" variant="outlined" fullWidth />
          <br />
          <br />
          <TextField 
            id="date" 
            label="Datum od" 
            type="date"
            variant="outlined" 
            defaultValue="2020-02-12" 
            className={classes.textField}
            InputLabelProps={{ 
              shrink: true, 
            }} 
          />
          <br />
          <br />
          <TextField 
            id="date" 
            label="Datum do" 
            type="date" 
            variant="outlined"
            defaultValue="2020-02-30" 
            className={classes.textField}
            InputLabelProps={{ 
              shrink: true, 
            }} 
          />
          <br />
          <br />
          <TextField
            id="time"
            label="Čas"
            type="time"
            variant="outlined"
            defaultValue="16:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
           />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Poznámky"
            multiline
            rows="15"
            fullWidth
            defaultValue=""
            variant="outlined"
          />
          <br />
          <br />
          <br />
          <br />
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </div>
  );
}
