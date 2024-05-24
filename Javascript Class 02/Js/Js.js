class CAutores {
    constructor() {
        this.Autores = [];
    }

    agregarAutor(nombre, apellido, nacionalidad, libro, añoPubli, edadPubli) {
        this.Autores.push({Nombre: nombre, Apellido: apellido, Nacionalidad: nacionalidad, Obra: libro, 
        AñoPublicacion: añoPubli, EdadPublicacion: edadPubli });
    }

    generarTabla() {
        const tbody = document.querySelector('#autores-table tbody');
        tbody.innerHTML = ''; // Limpiar el contenido existente
    
        this.Autores.forEach(autor => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${autor.Nombre}</td>
            <td>${autor.Apellido}</td>
            <td>${autor.Nacionalidad}</td>
            <td>${autor.Obra}</td>
            <td>${autor.AñoPublicacion}</td>
            <td>${autor.EdadPublicacion}</td>
          `;
          tbody.appendChild(fila);
        });
    }

    listarAutoresArgentinos() {
        
        let argentinos = [];
            for (let i = 0; i < this.Autores.length; i++) {
                if (this.Autores[i].Nacionalidad === 'Argentino') {
                    argentinos.push({Nombre: this.Autores[i].Nombre, Apellido: this.Autores[i].Apellido});
                }
            }

        return argentinos;
    }

    listarAutoresPublicacion1960a1980() {
        let autores1960a1980 = [];
            for (let i = 0; i < this.Autores.length; i++) {
                if (this.Autores[i].AñoPublicacion >= 1960 && this.Autores[i].AñoPublicacion <= 1980) {
                    autores1960a1980.push({Nombre: this.Autores[i].Nombre, Apellido: this.Autores[i].Apellido, añoDePublicacion:this.Autores[i].AñoPublicacion });
                }
            }
        return autores1960a1980;
    }

    promedioEdadPublicacion() {
        let totalEdad = 0;
            for (let i = 0; i < this.Autores.length; i++) {
                totalEdad += this.Autores[i].EdadPublicacion;
            }
        return totalEdad / this.Autores.length;
    }

    listarTodosAutores() {
        return this.Autores;
    }
    
}


let A = new CAutores();


A.agregarAutor('Gabriel', 'García Márquez', 'Colombiano', 'Cien años de soledad', 1967, 40);
A.agregarAutor('Julio', 'Cortázar', 'Argentino', 'Rayuela', 1963, 48);
A.agregarAutor('Isabel', 'Allende', 'Chilena', 'La casa de los espíritus', 1982, 40);
A.agregarAutor('Jorge Luis', 'Borges', 'Argentino', 'Ficciones', 1944, 45);
A.agregarAutor('Clarice', 'Lispector', 'Brasileña', 'La hora de la estrella', 1977, 56);
A.agregarAutor('Juan', 'Rulfo', 'Mexicano', 'Pedro Páramo', 1955, 38);
A.agregarAutor('Carlos', 'Fuentes', 'Mexicano', 'La región más transparente', 1958, 29);
A.agregarAutor('Eduardo', 'Galeano', 'Uruguayo', 'Las venas abiertas de América Latina', 1971, 31);

A.generarTabla();

document.getElementById("resultado1").textContent = "Autores Argentinos: " + JSON.stringify(A.listarAutoresArgentinos());
  
document.getElementById("resultado2").textContent = "Autores que publicaron entre 1960 y 1980: " + JSON.stringify(A.listarAutoresPublicacion1960a1980());
    
document.getElementById("resultado3").textContent = "Promedio de la edad de publicación: " + A.promedioEdadPublicacion();
  
document.getElementById("resultado4").textContent = "Todos los Autores: " + JSON.stringify(A.listarTodosAutores());


