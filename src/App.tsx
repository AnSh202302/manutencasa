import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { EmailContactProvider } from "./components/EmailContact/EmailContactProvider";
import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";



function App() {
  const { pathname } = useLocation();

  return (
    <EmailContactProvider key={pathname}>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Route >
      </Routes>
    </EmailContactProvider>
  );
}

export default App;
