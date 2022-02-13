import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        Open-source{" "}
        <a
          href="https://github.com/gabibble/my-react-weather-app.git"
          target="_blank"
        >
          code
        </a>{" "}
        by Julia Giebultowicz
      </p>{" "}
    </div>
  );
}

export default App;
