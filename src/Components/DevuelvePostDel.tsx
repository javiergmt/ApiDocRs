import { useParams } from "../store/paramStore";
import { shallow } from 'zustand/shallow'
import { useFetchPostDel } from "../hooks/useFetchPostDel";

import Card from 'react-bootstrap/Card';

interface urlData {
    oper:string,
    arg:string,
    arg2:string
}

export default function DevuelvePost( {oper,arg,arg2} :urlData) {
  //console.log(arg)
  //let url1 = "http://localhost:1234/mozos_pass/11";
  const {url} = useParams( (state:any) => ({
    url: state.url        
  }),shallow)
  
  const { data, error } = useFetchPostDel(url+arg,JSON.parse(arg2),oper)
    
    //let { data, error } = useFetchDelete(url+arg,JSON.parse(arg2))

  return (
    <>
    <Card style={{ width: '42rem' }}  className="mb-3">
      <Card.Body>
      <Card.Title>
      { JSON.stringify(error) === "true" ? " - Se produjo un Error" : null}
      </Card.Title>
      <Card.Text>
       <pre>{JSON.stringify(data, null, 2)}</pre>
      </Card.Text>
      </Card.Body>
    </Card>
   
    </>
  );
}
