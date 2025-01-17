import Content from "./components/Content";
import Header from "./components/Header";
import StorieHeader from "./components/StorieHeader";
import Card from "./components/Card";
import "./css/App.css";

function App() {
  return (
    <div className="App">
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
