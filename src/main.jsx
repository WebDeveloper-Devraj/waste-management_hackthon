import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Home from "../src/components/Home/Home";
import MenuPage from "./components/Menu/MenuPage";
import { Provider } from "react-redux";
import restaurantStore from "./store";
// import AboutUs from "./components/About_Us/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Dashboard from "./components/dashboard/Dashboard";
import CommunityReports from "./components/community reports/CommunityReports";
import GamificationPage from "./components/GamificationPage/GamificationPage";
import EducationPage from "./components/education/EducationPage";
import ContactPage from "./components/contact/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/community-reports",
        element: <CommunityReports />,
      },
      {
        path: "/leaderboard",
        element: <GamificationPage />,
      },
      {
        path: "/education",
        element: <EducationPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={restaurantStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
