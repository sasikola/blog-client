import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
