import './App.css';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';

import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="Rooms" element={<Rooms />} />
        <Route path="Rooms/:slug" element={<SingleRoom />} />
        {/* <Route path="Rooms/:slug" render={(props) => (<SingleRoom {...props.match.params} />)} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

