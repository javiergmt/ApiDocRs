import { Link } from "react-router-dom";
import { useParams } from "../store/paramStore";
import { shallow } from 'zustand/shallow'
import { useEffect , useState } from "react";
import ExtraeDef from "../Funciones/ExtraeDef";
import  Container from "react-bootstrap/Container";
import { Navbar,Row,Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import FormPostDel from "./FormPostDel";

function metodosHead() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Metodos POST - ApiRest RestoSoft</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link className='p-2 btn btn-success text-light' to="/">Volver</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default function MetodosPost() {
    const [ruta, setRuta] = useState('')
    const [body, setBody] = useState('')

    const manejarClick = (arg:string ,arg2:string) => {
      setRuta(arg)
      setBody(arg2)
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

    const rutasFilt  = rutas.filter((rutas) => rutas.nombre.substring(0,3)=='spP'); 

    return (
        <>
        <Row>
         { metodosHead() }
        </Row>

        <Row className="mt-1">
        <Col sm={3}>
          <Table striped bordered hover size="sm">  
          <tbody>
            {rutasFilt.map((rutas) => {
            return (
               <tr key={rutas.id}>
                <td id="ruta"
                onClick={ () => manejarClick(ExtraeDef(rutas.definicion,'RUT'),
                                             ExtraeDef(rutas.definicion,'PAR')) 
                        }
                >
                {ExtraeDef(rutas.definicion,'RUT')}
                </td>  
                </tr>
            )
            })}
            </tbody>
           </Table>   
        </Col>
        <Col sm={9}>
        {ruta ? <div className="btn btn-success btn-sm text-light mb-1 mt-1"  onClick={ () => limpiarClick() }>Limpiar</div> : null}
        { ruta ? <FormPostDel oper={'POST'} arg={ruta} argb={body} /> : null  }
        </Col>        
        </Row>
        </>
    )
}