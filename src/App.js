import HomePage from './components/home';
import Playlist from './components/playlist';
import Sidebar from './components/sidebar';
import Signup from './components/signup';
import Signin from './components/signin';
import Player from './components/Player';
import './app.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
      <Routes> 
        <Route path="*" element={<HomePage />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="signin" element={<Signin />}></Route>

      </Routes>
    </div>
  </Router>  
  );
}

export default App;
