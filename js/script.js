function voltar(numAtual,numAnterior){
    let questAtual = document.querySelector('.quest' + numAtual)
    let questAnterior = document.querySelector('.quest'+ numAnterior)

    questAtual.style.display = 'none';
    questAnterior.style.display = 'block';
}
function avancar(numAtual,proxNum){
    let questAtual = document.querySelector('.quest' + numAtual)
    let proxQuest = document.querySelector('.quest'+ proxNum)

    /* document.querySelector para selecionar os elementos HTML das perguntas atual e próxima. 
    Pegamos os elementos com a class quest e adicionando depois o valor para percorrer entre 
    quest01,quest02,quest03...*/

    questAtual.style.display = 'none';
    proxQuest.style.display = 'block';
}


function resposta(){
    let Q1 = document.querySelectorAll('input[name="q1"]:checked')//querySelectorAll para selecionar os 4 inputs com o mesmo name
    let Q2 = document.querySelectorAll('input[name="q2"]:checked')
    let Q3 = document.querySelectorAll('input[name="q3"]:checked')
    let Q4 = document.querySelectorAll('input[name="q4"]:checked')
    let Q5 = document.querySelectorAll('input[name="q5"]:checked')
    let resultado = document.getElementById('resultFinal')

    if(Q1.length ==0 || Q2.length ==0 || Q3.length ==0 || Q4.length ==0 || Q5.length ==0){
        window.alert('Responda Todas as perguntas antes de enviar as respostas!')//se alguma questão não for respondida essa mensagem irá aparecer
        window.location.reload()//recarrega a página
    }else{
    document.getElementById('quiz').style.display = 'none'
    resultado.style.display='flex'
    
    var score = 0
    if(Q1[0].value == 'c'){
        score ++
    }
    if(Q2[0].value == 'b'){
        score++
    }
    if(Q3[0].value == 'd'){
        score++
    }
    if(Q4[0].value == 'a'){
        score++
    }
    if(Q5[0].value == 'c'){
        score++
    }
    //calculando a pontuação

    if(score>3){
    resultado.innerHTML= `Você acertou um total de ${score} Questões, Parabéns!!`
    }else{
        resultado.innerHTML= `Você acertou um total de ${score} Questões, estude mais!`
    }
}
}