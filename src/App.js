import Header from './components/Header';
import Slider from './components/Slider';
import Table from "./components/Table";
import './index.css';
import tableData from "./json/data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex justify-center mt-7'><Slider className="mx-auto" tableData={tableData} /></div>
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
