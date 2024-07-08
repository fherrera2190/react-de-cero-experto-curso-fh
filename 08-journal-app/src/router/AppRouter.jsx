import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useSelector } from "react-redux";
import { CheckingAuth } from "../ui";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth,async (user) => {
      console.log(user)
    });

  }, []);

  if (status === "checking") return <CheckingAuth />;

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<JournalRoutes />} />

      <Route />
    </Routes>
  );
};
