import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Dashboard from "./page/dashboard/Dashboard.tsx";
import Team from "./page/team/Team.tsx";
import Contacts from "./page/contacts/Contacts.tsx";
import Invoices from "./page/invoices/Invoices.tsx";
import Form from "./page/form/Form.tsx";
import Calendar from "./page/calendar/Calendar.tsx";
import Faq from "./page/faq/Faq.tsx";
import BarChart from "./page/bar/BarChart.tsx";
import PieChart from "./page/pie/PieChart.tsx";
import LineChart from "./page/line/LineChart.tsx";
import Geography from "./page/geography/Geography.tsx";
import NotFound from "./page/notFound/NotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
