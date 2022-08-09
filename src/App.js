import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="Header">Weather App</h1>
        <br />
        <WeatherSearch />
      </div>
      <small>
        <br />
        <a href="https://github.com/Teyant25/final-weather-app" target="_blank">
          Open-source code
        </a>
        by Tya Kent
      </small>
    </div>
  );
}

export default App;
