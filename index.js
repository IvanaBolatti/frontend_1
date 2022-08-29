class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }
    getFullName(){   
    console.log(`Nombre: ${this.nombre} Apellido: ${this.apellido}`);

    }
    
    addMascota(mascota){
        this.mascotas.push(mascota)
        console.log(mascotas)
    }

    countMascotas(){
        return (this.mascotas.length)
    }
    addBook(nombreLibro,autorLibro){
    let libro={
            nombreLibro:nombreLibro,
            autorLibro:autorLibro
        }
    this.libros.push(libro)
    }

   getBookNames(){
   let nombresLibros=[]
   for (let i=0;i<this.libros.length ;i++)
   { nombresLibros.push(this.libros[i].nombreLibro) } 
   return nombresLibros 
   }

};
let mascotas=["perro","gato","pez"]
let libros=[]

let usuario1=new Usuario("Juan","Gomez",libros,mascotas)
usuario1.getFullName()
usuario1.addMascota("conejo")
usuario1.addBook("Mascotas 1","Carlos Mendez")

console.log (usuario1.libros)
console.log(usuario1.countMascotas())
console.log(usuario1.getBookNames())
