var listaDePecas = ["Amortecedor" , "Motor", "Filtro de ar",
"Amortecedor" , "Motor", "Filtro de ar", "Amortecedor" , 
"Motor", "Filtro de ar", "Amortecedor" , "Motor", "Filtro de ar"]

let peso = 50
if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
}else{
    console.log("A peça tem opeso adequado")
}
if (listaDePecas.length < 10 ){
    console.log("Ainda há espaço para cadastro!")
}else{
    console.log("Não há mais espaço para cadastro!")
}