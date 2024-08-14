import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const mainMenu = [
  {
    text: "Dashboard",
    icon: React.createElement(HomeOutlinedIcon),
    path: "/",
  },
  {
    text: "Manage Team",
    icon: React.createElement(PeopleOutlinedIcon),
    path: "/team",
  },
  {
    text: "Contacts Information",
    icon: React.createElement(ContactsOutlinedIcon),
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: React.createElement(ReceiptOutlinedIcon),
    path: "/invoices",
  },
];

export const userMenu = [
  {
    text: "Profile Form",
    icon: React.createElement(PersonOutlinedIcon),
    path: "/form",
  },
  {
    text: "Calendar",
    icon: React.createElement(CalendarTodayOutlinedIcon),
    path: "/calendar",
  },
  {
    text: "FAQ Page",
    icon: React.createElement(HelpOutlineOutlinedIcon),
    path: "/faq",
  },
];

export const chartMenu = [
  {
    text: "Bar Chart",
    icon: React.createElement(BarChartOutlinedIcon),
    path: "/bar",
  },
  {
    text: "Pie Chart",
    icon: React.createElement(PieChartOutlineOutlinedIcon),
    path: "/pie",
  },
  {
    text: "Line Chart",
    icon: React.createElement(TimelineOutlinedIcon),
    path: "/line",
  },
  {
    text: "Geography Chart",
    icon: React.createElement(MapOutlinedIcon),
    path: "/geography",
  },
];
