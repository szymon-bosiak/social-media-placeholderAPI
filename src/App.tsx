import './App.scss';
import { Navigate, Route, Routes  } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Photos from './components/Photos';



function App() {

  return (
    <>
      <Navbar />

      <div className='main_view'>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path='/users' element={<Users />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>

      <div className="footer">
        <p>©Szymon Bosiak 2023</p>
      </div>
      
    </>
    
  );
}

export default App;
