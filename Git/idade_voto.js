let idade = Number(prompt("Digite sua idade"))
if (idade < 16){
    alert ("Você não pode votar")
}else if (idade >= 16 && idade < 18){
    alert("Seu voto é facultativo")
}else if (idade >= 18 && idade < 65){
    alert("Seu voto é obrigatorio")
}else if(idade >= 65){
    alert("Sru voto é facultativo")
}