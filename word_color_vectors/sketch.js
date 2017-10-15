// https://gist.github.com/aparrish/2f562e3737544cf29aaf1af30362f469

let colorData;
let colorDict = {};

function preload() {
  colorData = loadJSON('xkcd.json');
}

function setup() {
  noCanvas();
  let colors = colorData.colors;
  for (let i = 0; i < colors.length; i++) {
    let key = colors[i].color;
    let p5color = color(colors[i].hex)
    let v = createVector(red(p5color), green(p5color), blue(p5color));
    let value = {
      color: p5color,
      vector: v
    };
    colorDict[key] = value;
  }
}

function meanV(vectors) {
  let sumv = createVector(0, 0, 0);
  for (let i = 0; i < vectors.length; i++) {
    sumv.add(vectors[i]);
  }
  sumv.div(vectors.length);
  return sumv;
}
