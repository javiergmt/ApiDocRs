import { Link } from "react-router-dom";
import { useParams } from "../store/paramStore";
import { shallow } from 'zustand/shallow'
import { useEffect , useState } from "react";
import ExtraeDef from "../Funciones/ExtraeDef";
import FormFetch from "./FormFecth";
import  Container from "react-bootstrap/Container";
import { Navbar,Row,Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

function metodosHead() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Metodos GET - ApiRest RestoSoft</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link className='p-2 btn btn-primary text-light' to="/">Volver</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default function MetodosGet() {
    const [ruta, setRuta] = useState('')

    const manejarClick = (arg:string) => {
      setRuta(arg)
    }

    const limpiarClick = () => {
        setRuta('')
    }

    const {rutas} = useParams( (state) => ({
        rutas: state.rutas
    }),shallow)
      
    const {getApi} = useParams()
    useEffect( () => {
          getApi()
         
    },[] )

    const rutasFilt  = rutas.filter((rutas) => rutas.nombre.substring(0,3)=='spG'); 
    //console.log ( Object.values(rutasFilt) )
    //const arrayRutas = Object.values(rutasFilt)
    return (
        <>
        <Row>
         { metodosHead() }
        </Row>

        <Row>
       
        <Col sm={3} >
          <div className="menucont">
          <Table striped bordered hover size="sm">  
          <tbody>
            {rutasFilt.map((rutas) => {
            return (
              <tr key={rutas.id} >                    
                <td id="ruta"
                onClick={ () => manejarClick(ExtraeDef(rutas.definicion,'RUT')) }
                >
                {ExtraeDef(rutas.definicion,'RUT')}
                </td>
         
              </tr> 
                     
            )
            })}
          </tbody>  
          </Table>  
          </div>
        </Col>
         
        <Col sm={9}>
           {ruta ? <div className="btn btn-primary btn-sm mb-1 mt-1"  onClick={ () => limpiarClick() }>Limpiar</div> : null}
           { ruta ? <FormFetch arg={ruta}/> : null  }
        </Col>
               
        </Row>
        </>
    )
}

