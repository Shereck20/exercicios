let diaria = Number(prompt("Quantos dias você pretende ficar?"))
let preco
if ( diaria >=1 && diaria >= 5){
(preco = diaria * 100 * 25 / 100 + 150)
alert ("Juca, voce deve pagar R$" + preco)
}else if( diaria >=6 && diaria <= 10){
    alert ("Juca, voce deve pagar R$" + preco)
    (preco = diaria * 90 * 25 / 100 + 150)
    alert ("Juca, voce deve pagar R$" + preco )
}else if( diaria >=11){
    (preco = diaria * 80 * 25 / 100 + 150)
}