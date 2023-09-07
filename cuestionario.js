function verificar_respuestas(){

    let total = 20
    let puntos = 0

    let myforma=document.forms["preguntas"]

    let respuestas = ["c","d","d","d","c","d","d","d","c","c","d","d","d","d","d","d","d","d","d","d",]
    let usuario = document.getElementById("usuario").value


    for(let i=1;i<=total;i++){

        if(usuario == null|| usuario == ""){
            alert("Por favor ingrese su nombre y apellido")
            return false
        }else if (myforma["p"+i].value == respuestas[i-1]){
                puntos++
        }
    
        
    }
    let resultado = document.getElementById("resultado").innerHTML="Has obtenido un total de "+puntos+" puntos"

}