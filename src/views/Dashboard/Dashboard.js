import React, { Component } from "react";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
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

import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StorageIcon from '@material-ui/icons/Storage';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import AddTask from "views/AddTask/AddTask";
import DatabaseTasks from "views/DatabaseTasks/DatabaseTasks";
import Calendar from "views/Calendar/Calendar";

import { bugs, website, server } from "variables/general.js";

/*import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js"; */

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <div>
      <h3>Vítejte v programu úkolníček</h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <Link href="/admin/addtask" Component={AddTask} onClick={AddTask}>
              <CardHeader color="success">            
                <br />
                <br />
                <center><PlaylistAddIcon fontSize="large" /></center>
                <h1><center>Přidat úkol</center></h1>
                <br />
                <br />
              </CardHeader>
            </Link>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <Link href="/admin/databasetasks" Component={DatabaseTasks} onClick={DatabaseTasks}>
              <CardHeader color="warning">
                <br />
                <br />
                <center><StorageIcon fontSize="large" /></center>
                <h1><center>Databáze úkolu</center></h1>
                <br />
                <br />
              </CardHeader>
            </Link>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <Link href="/admin/calendar" Component={Calendar} onClick={Calendar}>
              <CardHeader color="danger">
                <br />
                <br />
                <center><CalendarTodayIcon fontSize="large" /></center>
                <h1><center>Kalendář</center></h1>
                <br />
                <br />
              </CardHeader>
            </Link>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}