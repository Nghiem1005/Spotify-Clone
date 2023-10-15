import "./App.scss";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <SideBar />
        <Main />
      </div>
      <div className="musicControls">Music Controls</div>
    </div>
  );
}

export default App;
