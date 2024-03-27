export default function ExtraeDef( cadena:string ,sep:string ):string {
    let result = ''
      let pos = 0
      let cadena2 = ''
      while (  cadena.indexOf(sep+'--') > 0) {
          pos = cadena.indexOf(sep+'--')
          cadena2 = cadena.slice(pos+5,cadena.length)
          cadena = cadena.slice(0, pos)
          //console.log('cadena: ',cadena)
          //console.log('cadena2: ',cadena2)
          pos = cadena.indexOf('--'+sep)
          cadena = cadena.slice(pos+5)
          
          result = result + cadena 
          //console.log('result: ',result)
          cadena = cadena2
          
      }
      return result.trim()
  }