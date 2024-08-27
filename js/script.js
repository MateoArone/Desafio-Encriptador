/////////////////////////////////////////////////////////////////////////////
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
/////////////////////////////////////////////////////////////////////////////
const textonormal = document.querySelector(".textonormal");
const mensaje = document.querySelector(".mensaje");
const copyButton = document.querySelector(".botoncopiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(textonormal.value)
    mensaje.value = textoEncriptado
    textonormal.value= "";

}


function encriptar(stringEncriptada){
    let matrizcodigo= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizcodigo= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringDesencriptada.includes(matrizcodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
    return stringDesencriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textonormal.value)
    mensaje.value = textoEncriptado
    textonormal.value= "";
 }


function copiarTexto(){
        mensaje.select();
        document.execCommand("copy");
    
        alert("Texto copiado al portapapeles!");
    };

