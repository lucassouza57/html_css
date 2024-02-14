agora = new Date()
horas = agora.getHours()
console.log(`São ${horas} horas`)
if (horas < 5) {
    console.log('Boa Madrugada')
}
else if (horas < 12 ) {
    console.log('Bom Dia!')
} else if (horas < 18){ 
    console.log('Boa Tarde!')
} else if (horas < 24) {
    console.log('Boa Noite!')
} 