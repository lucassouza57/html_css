var idade = 10
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Você não vota')
} else if (idade < 18 || idade >= 60){
    console.log('Voto opicional')
} else {
    console.log('Voto obrigatorio')
}