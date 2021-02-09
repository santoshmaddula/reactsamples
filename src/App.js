import React from "react";
import "./style.css";
import Footer from "./component/Footer.js";
import Header from "./component/Header.js";
import MainContent from "./component/MainContent.js";
export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
