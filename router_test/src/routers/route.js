import MainRoot from "../pages/MainRoot";
import About from "../pages/About";
import Home from "../pages/Home";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];
