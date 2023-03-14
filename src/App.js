import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Challenges from './component/Challenges';
import Challenge from './component/Challenge';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Challenges />} />
            <Route path=":name" element={<Challenge />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
