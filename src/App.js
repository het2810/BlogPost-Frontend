import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/HomePage/Homepage';
import Authentication from './components/Authentication/Authentication';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={true?<Homepage/>:<Authentication/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
