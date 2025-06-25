let preco = prompt("Digite o valor do produto:");
let lucro
if (preco <= 0) {
    alert("Valor inválido. Por favor, insira um valor positivo.");
} else if (preco > 0 && preco < 20) {
    lucro = preco * 0.45;
    alert("O lucro será de R$" + lucro.toFixed(2) + ".");
} else if (preco >=20) {
    lucro = preco * 0.30;
    alert("O lucro será de R$" + lucro.toFixed(2) + ".");
}