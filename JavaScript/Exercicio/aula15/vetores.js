let valores = [9,7,5,3,8,1]


console.log(valores)
/*for(pos=0 ; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem o numero ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o numero ${valores[pos]}`)
}