import { useState } from "react";
import  useForm  from "../hooks/useForm"
import {Container} from 'react-bootstrap';
import DevuelveGet from "./DevuelveGet";

interface FormData {
  metodo:string
 }

 interface ArgData {
    arg:string
   }
//import HooksPersonalizados from "./HooksPersonalizados";

export default function FormFetch({arg} :ArgData) {
    const [getOk, setGetOK] = useState(false); 
    const { formulario, handleChange } = useForm<FormData>({
        metodo:arg
      })
    
    const { metodo } = formulario
  
    const handleSubmit = (e:any) => {
        e.preventDefault();
        setGetOK(true);
      }
      return (
           <>
          
            <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-group mb-3">
            <input type="text" className="form-control" 
                  placeholder="Metodo" 
                  aria-label="Metodo" 
                  aria-describedby="basic-addon2" 
                  name="metodo"
                  value={metodo}
                  onChange={ handleChange}/>
            </div>      
            <div className="input-group-append">
            <button type="submit" className="btn btn-outline-secondary mb-3" >Ejecutar</button>
          
            </div>
            </form>

            <Container>
            { getOk ? <DevuelveGet arg={formulario.metodo} /> : null }
            </Container>
         
          </>
      )

 
}