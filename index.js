function calcularRanking(vitorias, derrotas){ 
  let saldoVitorias = vitorias - derrotas 
  let nivel = "" 
  
  if (saldoVitorias < 10){ 
    nivel = "Ferro" 
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20){ 
    nivel = "Bronze" 
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50){ 
    nivel = "Prata" 
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro" 
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90){ 
    nivel = "Diamante" 
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100){ 
    nivel = "Lendário" 
  } else if (saldoVitorias >= 101){ 
    nivel = "Imortal"  
  }
  return {saldoVitorias, nivel}
}
let resultado = calcularRanking(140, 49)
console.log(` O herói tem saldo de ${resultado.saldoVitorias} e está no nível ${resultado.nivel}`)