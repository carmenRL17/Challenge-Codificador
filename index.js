
let mensaje = document.querySelector('#mensaje');
let encriptar = document.querySelector('.boton1');
let desencriptar = document.querySelector('.boton2');
let copiar = document.querySelector('.boton3');
let textoencriptado = document.querySelector('#text-incrpt');

function encriptacion(){    

    let nuevoMensaje = mensaje.value.toLowerCase().split('');

    for(let i=0; i<nuevoMensaje.length; i++){
    //La letra "e" es convertida para "enter"
    //La letra "i" es convertida para "imes"
    //La letra "a" es convertida para "ai"
    //La letra "o" es convertida para "ober"
    //La letra "u" es convertida para "ufat"

        if(nuevoMensaje[i]==="e"){
            nuevoMensaje[i]="enter";
        }else if(nuevoMensaje[i]==="i"){
            nuevoMensaje[i]="imes";
        }else if(nuevoMensaje[i]==="a"){
            nuevoMensaje[i]="ai";
        }else if(nuevoMensaje[i]==="o"){
            nuevoMensaje[i]="ober";
        }else if(nuevoMensaje[i]==="u"){
            nuevoMensaje[i]="ufat";
        }
    }
    const mensajeEncriptado = nuevoMensaje.join('');
    textoencriptado.value = mensajeEncriptado;
    
}


function desencriptando(){
    let msjEncritado = mensaje.value.toLowerCase();
    let textoCifrado = msjEncritado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    textoencriptado.value =textoCifrado;
}
function copiarText(){
    let nuevotext = document.createElement("input");;
    nuevotext.setAttribute("value",textoencriptado.value);
    document.body.appendChild(nuevotext);
    nuevotext.select();
    document.execCommand("copy");
    document.body.removeChild(nuevotext);
}
encriptar.onclick = encriptacion;
desencriptar.onclick = desencriptando;
copiar.onclick = copiarText;