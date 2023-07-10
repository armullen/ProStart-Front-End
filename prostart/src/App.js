import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// ......components........
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';


// ......pages.......
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Facilities from './pages/Facilities';
import OurStaff from './pages/OurStaff';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Hockey from './pages/Hockey';
import Camps from './pages/Camps';
import Photos from './pages/Photos';


function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

  {/* ............calendar routes................. */}
        <Route path='/calendar'>
          <Route path='' element={<Calendar />} />
        </Route>

  {/* .............facilities routes.............. */}
        <Route path='/facilities'>
          <Route path='' element={<Facilities />} />
        </Route>

  {/* ...............our staff routes............. */}
        <Route path='/ourstaff'>
          <Route path='' element={<OurStaff />} />
        </Route>

  {/* .................contact us routes.......... */}
        <Route path='/contactus'>
          <Route path='' element={<ContactUs />} />
        </Route>
{/* .....................auth routes.............. */}
        <Route path='/login'>
          <Route path='' element={<Login />} />
        </Route>
        <Route path='/signup'>
          <Route path='' element={<SignUp />} />
        </Route>

{/*...................hockey routes.............. */}

        <Route path='/hockey'>
          <Route path='' element={<Hockey />} />
        </Route>

{/* ..................camps routes................ */}

        <Route path='/camps'>
          <Route path='' element={<Camps />} />
        </Route>

{/* .....................photos routes................. */}

        <Route path='/photos'>
          <Route path='' element={<Photos />} />
        </Route>

{/* .................................................. */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
