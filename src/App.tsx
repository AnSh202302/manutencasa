import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { EmailContactProvider } from "./components/EmailContact/EmailContactProvider";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";



function App() {
  const { pathname } = useLocation();

  return (
    <EmailContactProvider key={pathname}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
    </EmailContactProvider>
  );
}

export default App;
