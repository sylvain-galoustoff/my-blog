import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebFont from "webfontloader";
import "./styles/index.css";
import App from "./App.tsx";
import Home from "./routes/home/Home.tsx";
import Project from "./routes/projects/projects.tsx";
import Contact from "./routes/contact/Contact.tsx";
import About from "./routes/about/about.tsx";
import NotFound from "./routes/notfound/NotFound.tsx";
import { PageContextProvider } from "./context/PageContext.tsx";

WebFont.load({
  google: {
    families: ["Asap:400,700,900"],
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/accueil",
        element: <Home />,
      },
      {
        path: "projets/:slug",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "a-propos",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageContextProvider>
      <RouterProvider router={router} />
    </PageContextProvider>
  </StrictMode>
);
