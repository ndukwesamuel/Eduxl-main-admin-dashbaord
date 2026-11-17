import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./eduxl/LandingPage";
import AdminPage from "./eduxl/AdminDashboard";
import { ADMIN_PATH } from "./eduxl/config";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path={ADMIN_PATH} element={<AdminPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
