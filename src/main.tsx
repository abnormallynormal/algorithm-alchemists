import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import OurTeam from "./pages/OurTeam.tsx";
import Events from "./pages/Events.tsx";
import Contact from "./pages/Contact.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/FormPage.tsx";
import CourseListPage from "./pages/CourseListPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/our-team", element: <OurTeam /> },
  { path: "/contact", element: <Contact /> },
  { path: "/courses", element: <CourseListPage /> },
  { path: "/events", element: <Events /> },
  { path: "/forms", element: <SignupPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
