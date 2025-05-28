let vetor = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]
let numero = prompt("selecione um numero de 1-7, sendo 1 = domingo")
if (numero >= 1 && numero <= 7){
    alert ("Hoje é " + vetor[numero - 1])
}else{
    alert("Numero invalido, digite corretamente")
}