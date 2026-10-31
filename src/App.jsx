import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import ThemeProvider from "./context/ThemeProvider";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Posts from "./pages/Posts";
import ProductDetails from "./components/Cards/ProductDetails";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/posts", element: <Posts /> },
        { path: "/cart", element: <Cart /> },
        { path: "/productDetails/:id", element: <ProductDetails /> },
        { path: "*", element: <NotFound /> },
      ],
      //errorElement: "<h2>Not Found Page</h2>",
    },
  ]);
  return (
    <ThemeProvider>
      {/* <MainLayout /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
