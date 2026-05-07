import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import OurTeam from "./pages/OurTeam.tsx";
import Events from "./pages/Events.tsx";
import Contact from "./pages/Contact.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseListPage from "./pages/CourseListPage.tsx";
import CourseFormPage from "./pages/CourseFormPage.tsx";
import OnboardingController from "./pages/onboarding/OnboardingController.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/our-team", element: <OurTeam /> },
  { path: "/contact", element: <Contact /> },
  { path: "/courses", element: <CourseListPage /> },
  { path: "/events", element: <Events /> },
  { path: "/forms/:slug", element: <CourseFormPage /> },
  { path: "/discover", element: <OnboardingController /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
