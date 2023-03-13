import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Challenges from './component/Challenges';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Challenges />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
