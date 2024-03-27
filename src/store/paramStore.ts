import { create } from "zustand";

interface ApiRoute {
    id:string,
    nombre: string,
    definicion: string
}

interface Params {
    url: string,
    rutas: ApiRoute[],
    getApi: () => Promise<void>,
    clearStore: () => void,
    
}

const urlbase =  import.meta.env.VITE_URL

export const useParams =  create<Params>( (set) =>
({
    
    url: urlbase,    
    
    rutas: [],
    getApi: async() => {
       const res = await fetch(urlbase+'/st_procs/sp')
       const rutas = await res.json()
       set (state => ({
        ...state,
        rutas
       }))
    } ,
    clearStore:() => {
        set({},true)
    },
   
}) )