import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import { NavBar } from "./NavBar";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <h1>MainApp</h1>
        <NavBar />

        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="/*" element={<LoginPage/>} /> */}
          <Route path="/*" element={<Navigate to="/about" />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};
