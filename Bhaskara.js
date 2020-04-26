function Bhaskara (a,b,c) {
 let delta = b**2 - 4*(a*c) // calculando delta
 
 let x1 = - b + (Math.sqrt (delta)) // raiz quadrada de delta
 x1= x1 / (2*a)
 
 let x2 = -b - (Math.sqrt(delta))
 x2 = x2 / (2*a)

 if (delta < 0 ){ // delta negativo retorna mensagem
console.log('O delta e negativo')
 }
 return [delta, x1.toFixed(2), x2.toFixed(2)] 
}

console.log('O resultado de bhaskara e :',Bhaskara(2,-16,-18))
