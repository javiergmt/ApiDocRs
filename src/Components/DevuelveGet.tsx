import { useParams } from "../store/paramStore";
import { shallow } from 'zustand/shallow'
import { useFetch } from "../hooks/useFetch";

import Card from 'react-bootstrap/Card';

interface urlData {
    arg:string,
}

export default function DevuelveGet( {arg} :urlData) {
  //console.log(arg)
  //let url1 = "http://localhost:1234/mozos_pass/11";
  
  const {url} = useParams( (state:any) => ({
    url: state.url        
  }),shallow)

  let { data, isPending, error } = useFetch(url+arg);

  return (
    <>
    <Card style={{ width: '42rem' }} className="mb-3">
      <Card.Body>
      <Card.Title>
      {JSON.stringify(isPending) ? "Datos Cargados  ": "Cargando.. "}
      { JSON.stringify(error) === "true" ? " - Se produjo un Error" : null}
      </Card.Title>
      <Card.Text>
         <pre>{JSON.stringify(data, null, 2)}</pre>
      </Card.Text>
      </Card.Body>
    </Card>


     {/*
     <pre style={{ whiteSpace: "pre-wrap" }}>
        <code style={{ wordBreak: "break-word" }}>{JSON.stringify(data)}</code>
      </pre>
  */}
    
    </>
  );
}
