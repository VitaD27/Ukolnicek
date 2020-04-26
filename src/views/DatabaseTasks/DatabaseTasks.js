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

import { TextField, Tooltip, IconButton } from '@material-ui/core';

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

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
    width: 1580,
    position: 'relative',
    minHeight: 850,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabBlue: {
    color: theme.palette.common.white,
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[600],
    },
  },
  fabOrange: {
    color: theme.palette.common.white,
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[600],
    },
  },
  fabRed: {
    color: theme.palette.common.white,
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[600],
    },
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

//const useStyles = makeStyles(styles);

export default function DatabaseTasks() {
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

  const fabs = [
    {
      color: 'Blue',
      className: clsx(classes.fab, classes.fabBlue),
      icon: <ListIcon />,
      label: 'List',
    },
    {
      color: 'Orange',
      className: clsx(classes.fab, classes.fabOrange),
      icon: <ListIcon />,
      label: 'List',
    },
    {
      color: 'Red',
      className: clsx(classes.fab, classes.fabRed),
      icon: <ListIcon />,
      label: 'List',
    },
    {
      color: 'Green',
      className: clsx(classes.fab, classes.fabGreen),
      icon: <ListIcon />,
      label: 'List',
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
          <Tab label="Úkoly tento týden" {...a11yProps(0)} />
          <Tab label="Úkoly po termínu" {...a11yProps(1)} />
          <Tab label="Nedokončené úkoly" {...a11yProps(2)} />
          <Tab label="Hotové úkoly" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <br />
          <GridItem md={12}>
            <CardHeader color="info">
              <h8 className={classes.cardTitleWhite}> Úkoly tento týden </h8>
            </CardHeader>
          </GridItem>
          <Table
            tableHeaderColor="info"
            tableHead={[ "", "ID", "Název úkolu", "Datum od", "Datum do", "Čas", "Poznámky", "Stav", "Smazat" ]}
            tableData={[
              [
                <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />, 
                  "1", "Napsat zprávu klientovi", "14.02.2020", "15.02.2020", "18:00", "", "0%",
                <Tooltip title="Delete">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              ], 
              [
                <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />, 
                  "2", "Zprovoznit administraci", "15.02.2020", "21.02.2020", "21:00", "", "0%",
                <Tooltip title="Delete">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              ],
              [
                <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />, 
                  "3", "Naprogramovat web pro učetnictví", "15.02.2020", "30.03.2020", "0:00", "", "0%", 
                <Tooltip title="Delete">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              ],
            ]}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <br />
          <GridItem md={12}>
            <CardHeader color="warning">
              <h8 className={classes.cardTitleWhite}> Úkoly po termínu </h8>
            </CardHeader>
          </GridItem>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <br />
          <GridItem md={12}>
            <CardHeader color="danger">
              <h8 className={classes.cardTitleWhite}> Nedokončené úkoly </h8>
            </CardHeader>
          </GridItem>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <br />
          <GridItem md={12}>
            <CardHeader color="success">
              <h8 className={classes.cardTitleWhite}> Hotové úkoly </h8>
            </CardHeader>
          </GridItem>
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
