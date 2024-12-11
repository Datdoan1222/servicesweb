import "./App.css";
import "../src/assets/css/style.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/font-awesome.min.css";
import "../src/assets/css/magnific-popup.css";
import "../src/assets/css/nice-select.css";
import "../src/assets/css/normalize.css";
import "../src/assets/css/owl-carousel.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/slicknav.min.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/datepicker.css";
import "../src/assets/css/icofont.css";
import "../src/assets/css/styleDisplay.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import AboutPage from "./page/about/AboutPage";
import ServicesPage from "./page/services/ServicesPage";
import OperationPage from "./page/operation/OperationPage";
import BlogPage from "./page/blog/BlogPage";
import ContactPage from "./page/contact/ContactPage";
import Header from "./nav/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/operation" element={<OperationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
