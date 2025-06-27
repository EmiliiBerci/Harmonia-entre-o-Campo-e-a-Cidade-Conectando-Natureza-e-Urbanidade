function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent('canvas-container');
  noLoop();
}

function draw() {
  // Fundo dividido
  noStroke();
  fill('#a8d0a5'); // verde claro do campo
  rect(0, 0, width / 2, height);
  fill('#b0c4de'); // azul-cinza da cidade
  rect(width / 2, 0, width / 2, height);

  // Campo
  fill('#6a9e76');
  rect(100, 250, 150, 100); // casa do campo
  fill('#fff');
  rect(130, 270, 30, 30); // janela
  fill('#8b5e3c');
  rect(180, 270, 40, 80); // porta
  fill('#228B22');
  ellipse(80, 230, 80, 80); // árvore

  // Cidade
  fill('#696969');
  rect(550, 180, 60, 170); // prédio
  fill('#808080');
  rect(620, 200, 50, 150); // outro prédio
  fill('#d3d3d3');
  rect(680, 220, 40, 130); // outro prédio

  // Sol
  fill('#FFD700');
  ellipse(100, 80, 80, 80);
}
