import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductusPage from "./pages/products";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductusPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
