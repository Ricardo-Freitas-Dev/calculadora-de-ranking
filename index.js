function calcularRanking(vitorias, derrotas){ 
  let saldoVitorias = vitorias - derrotas 
  let nivel = "" 
  
  if (saldoVitorias <= 10){ 
    nivel = "Ferro" 
  } else if (saldoVitorias <= 20){ 
    nivel = "Bronze" 
  } else if (saldoVitorias <= 50){ 
    nivel = "Prata" 
  } else if (saldoVitorias <= 80){
    nivel = "Ouro" 
  } else if (saldoVitorias <= 90){ 
    nivel = "Diamante" 
  } else if (saldoVitorias <= 100){ 
    nivel = "Lendário" 
  } else if (saldoVitorias >= 101){ 
    nivel = "Imortal"  
  }
  return {saldoVitorias, nivel}
}
let resultado = calcularRanking(140, 49)
console.log(` O herói tem saldo de ${resultado.saldoVitorias} e está no nível ${resultado.nivel}`)