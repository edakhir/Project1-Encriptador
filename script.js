/* variables de los textos de entrada y salida */

const textArea = document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");

/* arreglos multidimensionales 

Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value);
    /* mostrar texto encriptado */
    mensaje.value=textoEncriptado;
     /* limpiar cuadro de resultado texto encriptado */
     textArea.value = "";
     mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase();
    /* recorrdido for */
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            
        }       
    }
    return stringEncriptado;
}


/* boton para desencriptar */

function btnDesencriptar(){
    const textoEncriptado=desencriptar(textArea.value);
    /* mostrar texto encriptado */
    mensaje.value=textoEncriptado;
     /* limpiar cuadro de resultado texto encriptado */
     textArea.value = "";
   
}



function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase();
    /* recorrdido for */
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            
        }       
    }
    return stringDesencriptado;
}