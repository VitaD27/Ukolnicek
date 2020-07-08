/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

import HomeIcon from '@material-ui/icons/Home';         // k DashboardPage
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StorageIcon from '@material-ui/icons/Storage';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';

import Calendar from "views/Calendar/Calendar";
import DatabaseTasks from "views/DatabaseTasks/DatabaseTasks";
import AddTask from "views/AddTask/AddTask";
import Profile from "views/Profile";
import MyProfile from "views/MyProfile";
import Setting from "views/Setting";
import Edit from "views/Edit";

import Avatar  from '@material-ui/core/Avatar';

const dashboardRoutes = [
  /*{
    path: "/profile",
    name: "Profile",
    icon: <Avatar className={classes.large}>VD</Avatar>
    component: Profile,
    layout: "/admin"
  },*/
  {
    path: "/dashboard",
    name: "Home",
    //rtlName: "لوحة القيادة",
    icon: HomeIcon,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/addtask",
    name: "Přidat úkol",
    //rtlName: "ملف تعريفي للمستخدم",
    icon: PlaylistAddIcon,
    component: AddTask,
    layout: "/admin"
  },
  {
    path: "/databasetasks",
    name: "Databáze úkolu",
    //rtlName: "طباعة",
    icon: StorageIcon,
    component: DatabaseTasks,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Kalendář",
    //rtlName: "ملف تعريفي للمستخدم",
    icon: CalendarTodayIcon,
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/myprofile",
    name: "Profil",
    //rtlName: "ملف تعريفي للمستخدم",
    icon: PersonIcon,
    component: MyProfile,
    layout: "/admin"
  },
  {
    path: "/edit",
    name: "Edit",
    //rtlName: "ملف تعريفي للمستخدم",
    icon: EditIcon,
    component: Edit,
    layout: "/admin"
  },
  {
    path: "/setting",
    name: "Nastavení",
    //rtlName: "ملف تعريفي للمستخدم",
    icon: SettingsIcon,
    component: Setting,
    layout: "/admin"
  }
  /*,{
    path: "/databasetasks",
    name: "Databáze úkolu",
    //rtlName: "طباعة",
    icon: StorageIcon,
    component: DatabaseTasks,
    layout: "/admin"
  },{
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },*/
 /* {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }*/
];

export default dashboardRoutes;
