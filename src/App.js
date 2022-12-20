import Navbar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import DarkMode from './components/darkMode';
import "./App.css"
import BlogDetails from './components/BlogDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <DarkMode/>
        <div className="content">
          <Routes>



            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/blogs/:id" element={<BlogDetails />}/>
              
            
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;