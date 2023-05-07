import logo from './logo.svg';
import './App.css';
import { fetchThunkData } from "./Store/dataSlice"
import { useDispatch, useSelector } from "react-redux"
import MainPage from './Components/MainPage';
import CharacterData from './Components/CharacterData';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from './Pages/Home';
import CharacterDetails from './Pages/CharacterDetails';



function App() {






  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<CharacterDetails />} />


        </Routes>




      </BrowserRouter>
      {/* <button onClick={() => { dispatch(fetchThunkData()) }} >CLICK ME</button> */}
      {/* <MainPage /> */}


    </>
  );
}

export default App;
