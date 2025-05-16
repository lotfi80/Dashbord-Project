import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDom from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashbord from "./page/dashbord/Dashbord";
import Team from "./page/team/Team";
import Contacts from "./page/contacts/Contacts";
import Invoices from "./page/invoices/Invoices";
import Form from "./page/form/Form";
import Calender from "./page/calender/Calender";
import Faq from "./page/faq/Faq";
import BarChart from "./page/barChart/BarChart";
import LineChart from "./page/lineChart/LineChart";
import Geography from "./page/geography/Geography";
import PieChart from "./page/pieChart/PieChart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="Calendar" element={<Calender />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="pie" element={<PieChart />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// import "./index.css";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import App from "./App";
// // import Dashboard from "./Dashboard"; // Wenn Sie diese Komponente benötigen

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       {/* <Route path="dashboard" element={<Dashboard />} /> */}
//       {/* ... etc. */}
//     </Route>
//   )
// );

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
