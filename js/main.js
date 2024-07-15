function tocarSom(seletorAudio){ //declaração da função que toca o áudio recebido como parâmetro
    const elemento = document.querySelector(seletorAudio); //função que toca o áudio recebido como parâmetro

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //captura todos os elementos que tem a classe tecla

for (let contador = 0; contador < listaDeTeclas.length; contador++) { //itera enquanto o contador for menor que listaDeTeclas
    const tecla = listaDeTeclas[contador]; //a tecla recebe uma tecla na posição contador
    const instrumento = tecla.classList[1]; //o instrumento recebe a segunda classe da lista de classes do elemento
    const idAudio = `#som_${instrumento}`; //o idAudio recebe uma concatenação de #som_ com o nome da classe
                                           //capturada por instrumento
    
    tecla.onclick = () => { //chamada da função anônima que toca o áudio equivalente ao idAudio informado como parâmetro
        tocarSom(idAudio);
    };

    tecla.onkeydown = (evento) => {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');  
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}
