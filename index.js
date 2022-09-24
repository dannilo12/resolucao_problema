
let dataAtual = dataAtual
let dataEvento = "10/10/2020"
let vaga = 101, idade = 19
let nomeEvento="show", palestrante="Dannilo", nomeParticipante="bill"

if (dataEvento < dataAtual){
    console.log("hey!! essa data já passou!")
}else{
    console.log("bora bill! Evento cadastrado com sucesso!! " + dataEvento)
}

if (idade < 18){
    console.log("tu é de menor mané!!")
}else if (idade > 18 && vaga > 100) {
    console.log("Chegou tarde, acabou as vagas!")
}else{
    console.log("Bora bill! Cadastrado com sucesso!")
}

