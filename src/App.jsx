import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Carrer } from "./pages/Carrer";
import { Achievements } from "./pages/Achievements";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { Portfolio } from "./pages/Portfolio";
import { Services } from "./pages/Services";
import { ErrorPage } from "./pages/ErrorPage";

import { AllServices } from "./pages/ServicePages/AllServices";
import  AnalyticsData  from "./pages/ServicePages/AnalyticsData";
import  GraphicsCreation  from "./pages/ServicePages/GraphicsCreation";
import  VideoMarketing  from "./pages/ServicePages/VideoMarketing";
import  LeadsGenaration  from "./pages/ServicePages/LeadsGenaration";
import  PhotographyVediography     from "./pages/ServicePages/PhotographyVediography";
import  Reporting  from "./pages/ServicePages/Reporting";
import  AdsPaidMarketing  from "./pages/ServicePages/AdsPaidMarketing";
import  SeoContentWritting  from "./pages/ServicePages/SeoContentWritting";
import  SocialMediaHandling  from "./pages/ServicePages/SocialMediaHandling";
import  WebDevelopment  from "./pages/ServicePages/WebDevelopment";


import {  HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children : [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "about",
            element:<About />,
          },
          {
            path: "carrer",
            element:<Carrer />,
          },
          {
            path: "achievements",
            element: <Achievements />,
          },
          {
            path: "contact",
            element:<Contact />,
          },
          {
            path: "gallery",
            element:<Gallery />,
          },
          {
            path: "portfolio",
            element:<Portfolio />,
          },
          {
            path: "services",
            element:<Services />,
          },
          {
            path: "services/all-services",
            element:<AllServices />,
          },
          {
            path: "services/analytics-and-data",
            element:<AnalyticsData />,
          },
          {
            path: "services/graphics-creation",
            element:<GraphicsCreation/>,
          },
          {
            path: "services/video-marketing",
            element:<VideoMarketing/>,
          },
          {
            path: "services/leads-genaration",
            element:<LeadsGenaration />,
          },
          {
            path: "services/photography-vediography",
            element:<PhotographyVediography />,
          },
          {
            path: "services/reporting",
            element:<Reporting />,
          },
          {
            path: "services/seo-content-writting",
            element:<SeoContentWritting />,
          },
          {
            path: "services/social-media-handling",
            element:<SocialMediaHandling />,
          },
          {
            path: "services/ads-paid-marketing",
            element:<AdsPaidMarketing />,
          },
          {
            path: "services/web-development",
            element:<WebDevelopment />,
          },
    ],
  },
]);

const App =  () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  )
}
export default App;