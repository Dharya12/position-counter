import "./App.css";
import SelectBox from "./components/SelectedFruitsContainer";

function App() {
  return (
    <div className="m-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl underline">Position Counter</h1>
      <SelectBox />
    </div>
  );
}

export default App;
