import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductusPage from "./pages/products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductuDetailPage from "./pages/ProductPage";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage/>,
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductusPage /> },
      { path: "/products/:id", element: <ProductuDetailPage /> }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
