  function funcion() {
    // Obtener Texto del Campo de Texto
    let contenido = document.getElementById("texto").value;
    // Invertir Paréntesis y Mostrar Resultado
    alert(invertirParentesis(contenido));
  }
  
  function invertirParentesis(s) {
    // Variable Temporal para Almacenamiento
    let j = s;
    // ¿Contiene Paréntesis?
    if (s.includes('(')) {
      // Invertir Texto dentro de Paréntesis
      j = invertirParentesis(invertirUnaVez(s));
    }
    // Retornar Texto Invertido
    return j;
  }
  
  function invertirUnaVez(s) {
    // Expresión Regular para Buscar Paréntesis
    let expresionR = /\(([^()]*)\)/i;
    // Extraer Subcadena dentro de Paréntesis
    let cadena = expresionR.exec(s)[1];
    // Invertir Caracteres de la Subcadena
    cadena = cadena.split('').reverse().join('');
    // Reemplazar Subcadena Original con Invertida
    return s.replace(expresionR, cadena);
  }
  