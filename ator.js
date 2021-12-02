
let xAtor = 100;
let yAtor = 366;
let colisao = false;

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
      colidiu();
    }
  }
}

function colidiu() {
  yAtor = 366;
}