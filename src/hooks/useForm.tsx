import { ChangeEvent, useState } from "react"

export default function useForm<T>(initState : T) {
    const [formulario, setFormulario] = useState(initState)
       
    const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
      
        setFormulario({
          ...formulario,[name]:value
       })
    }
  
    return {
        formulario,
        handleChange
    }
  
}
