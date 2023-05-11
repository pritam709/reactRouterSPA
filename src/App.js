import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductusPage from "./pages/products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage/>,
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductusPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
