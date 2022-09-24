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

let nomePeca = "ar"
if(nomePeca.length > 3){
    console.log("O nome da peça está de acordo para cadastro")
}else if (nomePeca == 0){
    console.log("Nome da peça não pode ser vazio")
}else {
    console.log("O nome deve ter mais de 3 caracteres!")
}