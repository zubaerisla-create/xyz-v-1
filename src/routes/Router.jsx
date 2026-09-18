import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../views/Home/Home";
import ProjectsDetails from "../views/ProjectsDetails/ProjectsDetails";
import Gallery from "../views/Gallery/Gallery";
import Articles from "../views/Articles/Articles";
import ArticleDetail from "../views/ArticleDetail/ArticleDetail";
import AboutPage from "../views/AboutPage/AboutPage";
import ExperiencePage from "../views/ExperiencePage/ExperiencePage";
import ProjectsPage from "../views/ProjectsPage/ProjectsPage";
import ContactPage from "../views/ContactPage/ContactPage";
import ServicesPage from "../views/ServicesPage/ServicesPage";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/projects.json"),
        HydrateFallback: LoadingSpinner,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "services",
        Component: ServicesPage,
      },
      {
        path: "experience",
        Component: ExperiencePage,
      },
      {
        path: "projects",
        Component: ProjectsPage,
        loader: () => fetch("/projects.json"),
        HydrateFallback: LoadingSpinner,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "gallery",
        Component: Gallery,
      },
      {
        path: "insights",
        Component: Gallery,
      },
      {
        path: "articles",
        Component: Articles,
      },
      {
        path: "article/:id",
        Component: ArticleDetail,
      },
      {
        path: "articles/:id",
        Component: ArticleDetail,
      }
    ],
  },
  {
    path: "project/:id",
    Component: ProjectsDetails,
    loader: () => fetch("/projects.json"),
    HydrateFallback: LoadingSpinner,
  },
]);
