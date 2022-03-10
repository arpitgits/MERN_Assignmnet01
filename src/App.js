import logo from "./logo.svg";
import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="row row-cols-1 row-cols-md-2">
        <Video id="jURRsAMGuZk" src="media/1.jpg"/>
        <Video id="AhbCYVILusc" src="media/2.jpg"/>
        <Video id="Vv9KJYUnVvA" src="media/3.jpg"/>
    </div>
  );
}

export default App;
