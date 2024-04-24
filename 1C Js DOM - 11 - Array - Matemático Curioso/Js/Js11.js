
function mostrarSecuencia() {
    const semilla = document.getElementById('semilla').value;
    const secuencia = laSecuencia(semilla);
    const longitud = Largo(secuencia);
    const maximo = numeroMaximo(secuencia);

   alert('La secuencia: ' + secuencia);
   alert('La Longitud: ' + longitud);
   alert('El numero maximo: ' + maximo);
}

function laSecuencia(semilla){
    let secuencia = new Array(semilla);

    while(semilla != 1){
        if(semilla % 2 == 0){
            semilla = semilla/2;
        }
        else{
            semilla = semilla * 3 + 1;
        }
        secuencia.push(semilla);
    }
    
    return secuencia;
}

function Largo(secuencia){
    return secuencia.length;
}

function numeroMaximo(secuencia) {
return Math.max(...secuencia);
}