
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
  } else if (keyIsDown(DOWN_ARROW)) {
    yAtor += 2.5;
  } else if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 2.5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 2.5;
  }
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      voltaAtorParaPosicaoInicial();
    }
  }
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
  }
}