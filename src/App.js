import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Main from "./pages/Main";
import Layout from "./layouts/Layout";
import AnimalList from "./pages/AnimalList";
import AnimalDetail from "./pages/AnimalDetail";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="Animal">
              <Route index element={<AnimalList/>}/>
              <Route path=":SIGUN_CD" element={<AnimalDetail/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
