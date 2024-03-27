import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'
import { shallow } from 'zustand/shallow'
import { useParams } from '../store/paramStore'


export default function Home() {
    const {url} = useParams( (state:any) => ({
        url: state.url        
      }),shallow)
      
    //const url2 = import.meta.env.VITE_URL  
    return (
        <>
        <h2>Api Restosoft - {url}</h2>
        <hr/>
        <Stack gap={3}>
        <Link className='p-2 btn btn-primary' to="/metodosGet">Metodos GET</Link>
        <Link className='p-2 btn btn-success'to="/metodosPost">Metodos POST</Link>
        <Link className='p.2 btn btn-danger'to="/metodosDelete">Metodos DELETE</Link>
        </Stack>
        </>
    )
}