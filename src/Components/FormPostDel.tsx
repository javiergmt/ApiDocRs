import { useState } from "react";
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DevuelvePostDel from "./DevuelvePostDel";

 interface ArgData {
    oper: string,
    arg:string,
    argb:string
   }

export default function FormPostDel({oper,arg,argb} :ArgData) {
    const [getOk, setGetOK] = useState(false); 
 
    const [getMetodo, setGetMetodo] = useState(arg);   
    const [getBody, setGetBody] = useState(argb);  

    const handleChangeTx = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;
        setGetMetodo(val)    
        //console.log(val)
    };

    const handleChangeTa = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;
        setGetBody(val)    
        //console.log(val)
    };
  
    const handleSubmit = (e:any) => {
        e.preventDefault();
        setGetOK(true);
      }
      return (
           <>
            <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" 
                  name="metodo"
                  value={getMetodo}
                  onChange={ handleChangeTx } 
                  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Body</Form.Label>
                <Form.Control as="textarea" rows={4} 
                 name = "body"
                 onChange={ handleChangeTa } 
                 value={getBody}
                 
                />
            </Form.Group>
            <Button className="mb-3" type="submit" variant="outline-secondary">Ejecutar</Button>
            </Form>
         
            <Container>
            { getOk ? <DevuelvePostDel oper={oper} arg={getMetodo} arg2={getBody} /> : null }
            </Container>
         
          </>
      )

 
}