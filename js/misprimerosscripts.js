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