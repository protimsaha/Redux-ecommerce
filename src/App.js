import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Error from './Pages/Error';
import Navbar from './layouts/Navbar';
import AddGadget from './features/Gadgets/AddGadget';
import GadgetView from './features/Gadgets/GadgetView';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<GadgetView></GadgetView>}></Route>
        <Route path='/show-gadget' element={<Home></Home>}></Route>
        <Route path='/add-gadget' element={<AddGadget></AddGadget>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
