
let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2.5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMoverParaBaixo()) {
    yAtor += 2.5;
    }
  } 
  if (keyIsDown(LEFT_ARROW)) {
    if (podeSeMoverParaEsquerda()) {
      xAtor -= 2.5;
    }
  } 
  if (keyIsDown(RIGHT_ARROW)) {
    if (podeSeMoverParaDireita()) {
      xAtor += 2.5;  
    }
  }
}

function podeSeMoverParaBaixo() {
  return yAtor < 366;
}

function podeSeMoverParaEsquerda() {
  return xAtor > 0;
}

function podeSeMoverParaDireita() {
  return xAtor < 471;
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos--;
      }
    }
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(23);
  fill(255, 240, 60);
  text("Pontos: " + meusPontos, width / 5, 26);
}

function marcaPonto() {
  if (yAtor < 2) {
    meusPontos++;
    voltaAtorParaPosicaoInicial();
    somDoPonto.play();
  }
}