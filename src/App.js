import Header from './components/Header';
import Slider from './components/Slider';
import Table from "./components/Table";

import tableData from "./json/data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Slider tableData={tableData}/>
        <Table tableData={tableData}/>
      </header>
    </div>
  );
}

export default App;
