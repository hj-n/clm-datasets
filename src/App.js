import Header from './components/Header';
import Slider from './components/Slider';
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Slider/>
        <Table/>
      </header>
    </div>
  );
}

export default App;
