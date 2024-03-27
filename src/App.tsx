
import "./App.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home";
import MetodosGet from "./Components/MetodosGet";
import MetodosPost from "./Components/MetodosPost";
import MetodosDelete from "./Components/MetodosDelete";


function App() {
  
  return (
    <>
    <Container className="vh-100">
      <Row>
     
      <div>
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/metodosGet' element={<MetodosGet/>} />
        <Route path = '/metodosPost' element={<MetodosPost/>} />
        <Route path = '/metodosDelete' element={<MetodosDelete/>} />
      </Routes>
      </div> 
      </Row>
    </Container>
    </>
  );
}

export default App;
