class CJugadores {
  constructor() {
      this.Jugadores = [];
  }

  agregarJugador(nombre, pos, edad, altura, peso, nacionalidad) {
      this.Jugadores.push({Nombre: nombre, Posicion: pos, Edad: edad, Altura: altura, Peso: peso, 
      Nacionalidad: nacionalidad});
  }

  generarTabla() {
      const tbody = document.querySelector('#jugadores-table tbody');
      tbody.innerHTML = ''; // Limpiar el contenido existente
  
      this.Jugadores.forEach(jugador => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${jugador.Nombre}</td>
          <td>${jugador.Posicion}</td>
          <td>${jugador.Edad}</td>
          <td>${jugador.Altura}</td>
          <td>${jugador.Peso}</td>
          <td>${jugador.Nacionalidad}</td>
        `;
        tbody.appendChild(fila);
      });
  }

  listarJugadoresArgentinos() {
      let argentinos = [];
          for (let i = 0; i < this.Jugadores.length; i++) {
              if (this.Jugadores[i].Nacionalidad === 'Argentina') {
                  argentinos.push(this.Jugadores[i].Nombre);
              }
          }

      return argentinos;
  }

  listarJugadoresPeso() {
      let JugadoresPeso = [];
          for (let i = 0; i < this.Jugadores.length; i++) {
              if (this.Jugadores[i].Peso >= 75 && this.Jugadores[i].Peso <= 80) {
                  JugadoresPeso.push(this.Jugadores[i].Nombre);
              }
          }
      return JugadoresPeso;
  }

  jugadorMasAlto(){
    let Alto=0;
    let nombreAlto = [];
    for (let i = 0; i < this.Jugadores.length; i++) {
    if(this.Jugadores[i].Altura >= Alto){
      Alto = this.Jugadores[i].Altura;
      nombreAlto.push(this.Jugadores[i].Nombre)
    }
    }

    return nombreAlto;
  }
  
}


let J = new CJugadores();


J.agregarJugador('Fábio1', 'G', 43, 1.88, 86, 'Brasil');
J.agregarJugador('Marlon4', 'D', 28, 1.83, 78, 'Brasil');
J.agregarJugador('Marcelo12', 'D', 35, 1.73, 72, 'Brasil');
J.agregarJugador('Nino33', 'D', 26, 1.88, 82, 'Brasil');
J.agregarJugador('John Kennedy9', 'A', 21, 1.73, 71, 'Brasil');
J.agregarJugador('Keno11', 'A', 34, 1.78, 72, 'Brasil');
J.agregarJugador('Germán Cano14', 'A', 35, 1.78, 81, 'Argentina');

J.generarTabla();

document.getElementById("resultado1").textContent = "Jugadores Argentinos: " + J.listarJugadoresArgentinos();

document.getElementById("resultado2").textContent = "Jugadores que tienen peso entre 75 y 80 kg.: " + J.listarJugadoresPeso();
  
document.getElementById("resultado3").textContent = "Jugador mas alto: " + J.jugadorMasAlto();



