import './App.css';
import {Route, Routes} from 'react-router-dom'
import PracticePage from './pages/practicePage';
import HomePage from './pages/homePage';
import ScrollingPage from './pages/scrollingPage';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" exact element={<HomePage/>}/>
      <Route path="/practice" element={<PracticePage/>}/>
      <Route path="/scroll" element={<ScrollingPage/>}/>
    </Routes>
  </div>
  );
}

export default App;
