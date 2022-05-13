const prompt = require ("prompt-sync")({sigint:true});

let estudiante ={
    nombre : "Malena",
    apellido : "Murcia",
    camada : 5, 
    esParcial :true};

let condicion;
let notaFinal;

     function futuraNota (nota){
         notaFinal = nota;
if(nota < 4){
     condicion="Desaprobado";
}else if(nota >= 4 && nota <7){
    condicion= "debe rendir examen final";
}else{
     condicion="promocionado";
}
    }
    futuraNota(7)
    console.log('El alumno obtuvo una nota igual a ' + notaFinal + ' por lo tanto su condicion es ' + condicion);




let clase =[];
    clase.push({
        nombre: `Malena`,
        apellido: `Murcia`,
        bimestre: 1,
    });
    clase.push({
        nombre: `Ivan`,
        apellido: `Julia`,
        bimestre: 2,
    });
    clase.push({
        nombre: `Josefina`,
        apellido: `Sabatini`,
        bimestre: 3,
    });
    console.log(clase)

    
    function siguienteCursada(array){
  
        for(let i = 0; i<array.length; i++){
            array[i].bimestre = array[i].bimestre + 1;
        
    }   return array;
    }
    
    console.log(siguienteCursada(clase));
    

    let asistenciaMinima = [23];

    function asistencias (numero,playGround){
        
        let resultado= 0;
       if(numero >= asistenciaMinima && playGround == true){
           resultado = "aprobado";
       }
       else {
           resultado= "desaprobado";
       }
       return resultado;
    }
    
    console.log(asistencias(23,true));

