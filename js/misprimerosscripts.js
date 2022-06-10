function ocultarMostrarImg(){
    //display puede tener none, block
    var valorDisplay = document.getElementById('idImagen').style.display;
    if(valorDisplay == 'none'){
        valorDisplay = 'block';
    }else{
        valorDisplay = 'none';
    }
    document.getElementById('idImagen').style.display = valorDisplay;
}

function enciende(){
    var valorSrc = document.getElementById('idImagenFoco').scr;
    console.log(valorSrc);
    document.getElementById('idImagenFoco').src='../img/apagado.png';
}

function apaga(){
    var valorSrc = document.getElementById('idImagenFoco').scr;
    console.log(valorSrc);
    document.getElementById('idImagenFoco').src='../img/encendido.png';
}

function enciendeApaga(){
    var valActClass = document.getElementById('idImagenFoco').className;
    if(valActClass == "focoEnc"){
        document.getElementById('idImagenFoco').src='../img/apagado.png';
        valActClass = "focoApag";
    }else{
        document.getElementById('idImagenFoco').src='../img/encendido.png';
        valActClass = "focoEnc";
    }
    document.getElementById("idImagenFoco").className = valActClass;
}

function cambiaTextos(){
    const elementos = document.getElementsByClassName("nuevo");
    //elementos[0].innerHTML = "1er texto";
    //elementos[1].innerHTML = "2do texto";
    //elementos[2].innerHTML = "3er texto";
    /* 
    for(let valor in elementos){
        elementos[valor].innerHTML = "A"
        //valor.innerHTML = "A";
    }
*/
    for(valor of elementos){
        valor.innerHTML = "A";
    }    
}

function cambiaTextosElemento(){
    const elementos = document.getElementsByTagName("h1");
    elementos[0].innerHTML = "A";
    elementos[1].innerHTML = "B";
    console.log(elementos[2]);
}

/*
Forma tradicional
function mOver(){
    var elemento = document.getElementById("div1");
    elemento.innerHTML = "Nuevo texto";
    elemento.style.backgroundColor = "red";   
}

function mOut(){
    var elemento = document.getElementById("div1");
    elemento.innerHTML = "Texto para nuevos eventos";
    elemento.style.backgroundColor = "yellow"; 
}
*/

function mOver(elemen){
    elemen.innerHTML = "Nuevo texto";
    elemen.style.backgroundColor = "red";   
}

function mOut(elemen){
    elemen.innerHTML = "Texto para nuevos eventos";
    elemen.style.backgroundColor = "yellow"; 
}

function imprimirPersona(){
    //declaracion de objetos
    const persona = {nombre:"Roberth", apellido:"Troya", edad:99};
    const{nombre,apellido,edad} = persona;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);

    //declaraciones - desestructuracion de arreglos 
    const colores = ['rojo','amarillo','azul'];
    const[c1,c2,c3] = colores;
    console.log(c1);
    console.log(c2);
    console.log(c3);
    /* 
    console.log(colores[0]);
    console.log(colores[1]);
    console.log(colores[2]);
    */
    //forma desestructurada
    const [p1,p2,p3] = ['red','yellow','blue'];
    console.log(p1);
    console.log(p2);
    console.log(p3);

    const animal = {tipo:"Mamifero",tamanio:"pequenio"};
    const{tipo,tamanio} = animal;
    console.log(tipo);
    console.log(tamanio);
    
    //objetos compuestos
    const person2a = {nombre:"Roberth", apellido:"Troya", edad:99, direccion:{calle:"Bolivar",numero:123}};
    console.log(person2a);
}
