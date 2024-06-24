import './App.css';
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import Series from './pages/Series/Series'
import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
       <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
          </Routes>
        </Layout>
      </Router>
    </div>
    
   
  );
}

export default App;

