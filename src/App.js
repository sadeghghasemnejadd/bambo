import { Route, Routes, Navigate } from "react-router-dom";
import * as ROUTES from "./routes";
import Home from "./pages/home";
import Course from "./pages/course";
import Courses from "./pages/courses";
import NotFound from "./pages/404";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ShoppingCartPage from "./pages/shop";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME_ROUTE} element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path={ROUTES.COURSES_ROUTE} element={<Courses />} />
      <Route path={`${ROUTES.COURSE_ROUTE}/:id`} element={<Course />} />
      <Route path={ROUTES.LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER_ROUTE} element={<RegisterPage />} />
      <Route
        path={ROUTES.SHOP_ROUTE}
        element={
          <PrivateRoute>
            <ShoppingCartPage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
