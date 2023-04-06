import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute component={<HomePage />} />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
