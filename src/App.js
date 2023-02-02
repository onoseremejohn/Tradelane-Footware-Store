import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Navbar, Sidebar, Footer, Error as LoaderError } from "./components";

import {
  Home,
  Products,
  SingleProduct,
  singleProductLoader,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='cart' element={<Cart />} />
      <Route path='products' element={<Products />} />
      <Route
        path='products/:id'
        element={<SingleProduct />}
        loader={singleProductLoader}
        errorElement={<LoaderError product />}
      />
      <Route
        path='checkout'
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route path='*' element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
}

export default App;
