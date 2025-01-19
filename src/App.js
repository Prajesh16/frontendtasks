import Content from "./components/Content";
import Header from "./components/Header";
import StorieHeader from "./components/StorieHeader";
import Card from "./components/Card";
import "./css/App.css";
import Homepage from "./components/Homepage";
import Career from "./components/Career";

function App() {
  return (
    <div className="App">
      <div className="homePage">
        <Homepage />
      </div>
      <div className="career">
        <Career />
      </div>
      <div className="mainContent">
        <div className="Header">
          <Header />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
      <div className="stories">
        <StorieHeader />
        <div className="cardList">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
