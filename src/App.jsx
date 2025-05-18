import './style.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from './views/HomePage';
import SubPage from './views/SubPage';
import NotFound from './views/NotFound';



const router = createBrowserRouter([
  {
    path: "/naturhistoriskmuseum/",
    element: <Layout />,
    children: [
      {
      index: true,
      element: <HomePage />,
      },
      {
      path: "ritualsofnature",
      element: <SubPage />,
      },
      {
      path: "*",
      element: <NotFound />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
  }
export default App;