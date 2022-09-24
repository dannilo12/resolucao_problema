var alunos = 10

for ( let cont = 0; cont <= alunos; cont++ ){
    //console.log(cont)

    if(cont == 0){
        console.log("O numero atual é zero!")
    }else if (cont % 2 == 0){
        console.log("O numero " + cont + " é par! ")
    }else{
        console.log("O numero " + cont + " é impar! ")
    }

}