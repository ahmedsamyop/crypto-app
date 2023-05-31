import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Cryptocurrency from "../pages/cryptocurrency/Cryptocurrency";
import Layout from "./Layout";
import NewsPage from "../pages/news/NewsPage";
import CryptoDetails from "../pages/crypto-details/CryptoDetails";
import ErrorPage from "../components/Errorpage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cryptocurrency",
        element: <Cryptocurrency />,
      },
      {
        path: "cryptocurrency/:coinId",
        element: <CryptoDetails />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
    ],
  },
]);

export default router;
