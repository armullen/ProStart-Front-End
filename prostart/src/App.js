import './index.css';
import { Route, Routes } from 'react-router-dom';

// ......components........
import Header from './components/Header';
import Footer from './components/Footer';


// ......pages.......
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Facilities from './pages/Facilities';
import OurStaff from './pages/OurStaff';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

  {/* ............calendar routes................. */}
        <Route path='/calendar'>
          <Route path= '' element={<Calendar />} />
        </Route>

  {/* .............facilities routes.............. */}
        <Route path='/facilities'>
          <Route path= '' element={<Facilities />} />
        </Route>

  {/* ...............our staff routes............. */}
        <Route path='/ourstaff'>
          <Route path= '' element={<OurStaff />} />
        </Route>

  {/* .................contact us routes.......... */}
        <Route path='/contactus'>
          <Route path='' element={<ContactUs />} />
        </Route>

{/* .................................................. */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
