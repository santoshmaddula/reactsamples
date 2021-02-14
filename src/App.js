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

// function App() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <ToDo />
//       <CatContactList />
//       <ContactList />
//       <JokeList />
//       <Jokes />
//       <Products />
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  yourMethodHere() {}

  constructor() {
    super();
    this.state = {
      answer: "Yes"
    };
  }

  render() {
    return (
      // <div>
      //   <h1>{this.props.whatever}</h1>
      // </div>

      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
        <ToDo />
      </div>
    );
  }
}

export default App;
