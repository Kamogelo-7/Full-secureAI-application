import { Routes, Route } from "react-router-dom";
import { ClerkProviderWithRoutes } from "./auth/ClerkProviderWithRoutes";
import ChallengeGenerator from "./challenges/ChallengeGenerator";
import HistoryPanel from "./history/HistoryPanel";
import AuthenticationPage from "./auth/AuthenticationPage";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up" element={<AuthenticationPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<ChallengeGenerator />} />
          <Route path="/history" element={<HistoryPanel />} />
          {/* other routes */}
        </Route>
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
