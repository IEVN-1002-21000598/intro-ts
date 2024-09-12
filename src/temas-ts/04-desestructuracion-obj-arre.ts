interface Reproductor{
    volumne:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumne:50,
    segundo:10,
    cancion:"Valiente",
    detalles:{
        autor : "Paty Cantu",
        year:2018

    }
}


/*
console.log(`El volumen actual es: ${reproductor.volumne}`)
console.log(`Los segundos son: ${reproductor.segundo}`)
console.log(`La canción: ${reproductor.cancion}`)
console.log(`El cantante es: ${reproductor.detalles.autor}`)
console.log(`El año es: ${reproductor.detalles.year}`)*/

const {volumne, segundo, cancion, detalles} = reproductor;
const {autor, year} = detalles;

console.log(`El volumen actual es ${volumne}`)
console.log(`Los segundos son: ${segundo}`)
console.log(`La cancion es: ${cancion}`)
console.log(`El cantante es: ${autor}`)
console.log(`El año es: ${year}`)
 

const dbz: string[]=['Goku', 'Majinbu', 'Babidy', 'Freezer'];
console.log(`Persona 1 ${dbz[0]}`)
console.log(`Persona 2 ${dbz[1]}`)
console.log(`Persona 3 ${dbz[2]}`)
console.log(`Persona 4 ${dbz[3]}`)
 
const[a,b,,d] = dbz;
console.log(`Personaje 1 ${a}`)
console.log(`Personaje 2 ${b}`)
console.log(`Personaje 4 ${d}`)


