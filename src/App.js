import React from "react";
import "./style.css";
import Footer from "./component/Footer.js";
import Header from "./component/Header.js";
import MainContent from "./component/MainContent.js";
import ToDo from "./component/ToDo";
import CatContactList from "./component/CatContactList";
import ContactList from "./component/ContactList";
import JokeList from "./component/JokeList";
import Jokes from "./component/Jokes";
import Products from "./component/Products";

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ToDo />
      <CatContactList />
      <ContactList />
      <JokeList />
      <Jokes />
      <Products />
      <Footer />
    </div>
  );
}
