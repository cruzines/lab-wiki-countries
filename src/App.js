import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CountriesList/>
      <Routes>
        <Route path="/:cca3" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
