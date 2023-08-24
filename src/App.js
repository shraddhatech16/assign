import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Card from './components/Card';
import Cards from './components/Cards';
import UseEffectAPI from './components/useEffectAPI';
function App() {
  return (
    <>
    <Card/> 
    <Cards/> 
    <UseEffectAPI/>
    </>
  );
}

export default App;
