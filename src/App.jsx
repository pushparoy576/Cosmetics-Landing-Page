import "./App.css";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
