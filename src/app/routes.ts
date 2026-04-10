import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { ExperiencePage } from "./components/ExperiencePage";
import { BlogPage } from "./pages/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/experience",
    Component: ExperiencePage,
  },
  {
    path: "/blog",
    Component: BlogPage,
  },
  {
    path: "/privacy",
    Component: PrivacyPolicy,
  },
  {
    path: "/terms",
    Component: TermsConditions,
  },
]);