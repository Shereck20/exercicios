let distancia = prompt("Digite qual a distância do trajeto (em km):");
let velocidade = 300000;
let tempo = distancia / velocidade;
let segundos, minutos, horas, dias, semanas, meses, anos;
alert("A corrida levará aproximadamente, " + tempo + " segundos.");
if (distancia <= 0) {
    alert("Distância inválida. Por favor, insira um valor positivo.");
} else if (distancia > 0) {
    segundos = tempo
    minutos = tempo / 60;
    horas = tempo / 3600;
    dias = tempo / 86400;
    semanas = tempo / 604800;
    meses = tempo / 2592000;
    anos = tempo / 31536000;
    if (tempo < 60) {
        alert("A corrida levará aproximadamente, " + segundos + " segundos.");
    } else if (tempo >= 60 && tempo < 3600) {
        alert("A corrida levará aproximadamente, " + minutos.toFixed(2) + " minutos.");
    } else if (tempo >= 3600 && tempo < 86400) {
        alert("A corrida levará aproximadamente, " + horas.toFixed(2) + " horas.");
    } else if (tempo >= 86400 && tempo < 604800) {
        alert("A corrida levará aproximadamente, " + dias.toFixed(2) + " dias.");
    } else if (tempo >= 604800 && tempo < 2592000) {
        alert("A corrida levará aproximadamente, " + semanasdias.toFixed(2) + " semanas.");
    } else if (tempo >= 2592000 && tempo < 31536000) {
        alert("A corrida levará aproximadamente, " + mesesdias.toFixed(2) + " meses.");
    } else if (tempo >= 31536000) {
        alert("A corrida levará aproximadamente, " + anosdias.toFixed(2) + " anos.");
    }
}