let jogadorEscolha = 0;
let jogadorPontos =0;
let computadorEscolha = 0;
let computadorPontos = 0;
let ganhador = -1;

function jogar(escolha) {
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) +1;

    // PEDRA =1
    // PAPEL =2
    // TESOURA = 3

    if (jogadorEscolha == 1 && computadorEscolha ==1) {
        ganhador = 0;
    } else if (jogadorEscolha == 1 && computadorEscolha ==2) {
        ganhador = 2;
    } else if (jogadorEscolha == 1 && computadorEscolha ==3 ) {
        ganhador = 1;
    }else if (jogadorEscolha == 2 && computadorEscolha ==1 ) {
        ganhador = 1;
    }else if (jogadorEscolha == 2 && computadorEscolha ==2 ) {
        ganhador = 0;
    }else if (jogadorEscolha == 2 && computadorEscolha ==3 ) {
        ganhador = 2;
    }else if (jogadorEscolha == 3 && computadorEscolha ==1 ) {
        ganhador = 2;
    }else if (jogadorEscolha == 3 && computadorEscolha ==2 ) {
        ganhador = 1;
    }else if (jogadorEscolha == 3 && computadorEscolha ==3 ) {
        ganhador = 0;
    }
    

    document.getElementById('JogadorEscolha1').classList.remove('selecionado');
    document.getElementById('JogadorEscolha2').classList.remove('selecionado');
    document.getElementById('JogadorEscolha3').classList.remove('selecionado');
    document.getElementById('computadorEscolha1').classList.remove('selecionado');
    document.getElementById('computadorEscolha2').classList.remove('selecionado');
    document.getElementById('computadorEscolha3').classList.remove('selecionado');

    document.getElementById('JogadorEscolha'+jogadorEscolha).classList.add('selecionado');
    document.getElementById('computadorEscolha'+computadorEscolha).classList.add('selecionado');


    if (ganhador == 0) {
        document.getElementById('mensagem').innerHTML = "EMPATOU"
    }else if (ganhador == 1) {
        document.getElementById('mensagem').innerHTML = "ISAQUE GANHOU VAMOOO"
        jogadorPontos++;
    }else if (ganhador == 2) {
        document.getElementById('mensagem').innerHTML = "O INIMIGO INFELIZMENTE VENCEU"
        computadorPontos++;
    }

    document.getElementById('jogadorPontos').innerHTML = jogadorPontos;
    document.getElementById('computadorPontos').innerHTML = computadorPontos;
    



}


