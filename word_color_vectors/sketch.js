// https://gist.github.com/aparrish/2f562e3737544cf29aaf1af30362f469

let colorData;
let colorDict = {};

function preload() {
  colorData = loadJSON('xkcd.json');
}

function setup() {
  noCanvas();
  prepData();

  let d1 = distance(colorDict['red'], colorDict['green']);
  let d2 = distance(colorDict['red'], colorDict['pink']);
  console.log(d1, d2);
  console.log(d1 > d2);

  console.log(closest(colorDict['red']));

  console.log(closest(color(150,60,150)));


}


function closest(color, limit = 10) {

  if (color instanceof p5.Color) {
    color = {
      vector: createVector(red(color), green(color), blue(color)),
      color: color
    }
  }

  let keys = Object.keys(colorDict);
  let closest = [];

  // New ES6 arrow syntax!!!!!
  keys.sort((a, b) => {
    let d1 = distance(color, colorDict[a]);
    let d2 = distance(color, colorDict[b]);
    return d1 - d2;
  });

  for (let i = 0; i < limit; i++) {
    closest.push(keys[i]);
  }
  return closest;
}


function prepData() {
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

function distance(color1, color2) {
  return p5.Vector.dist(color1.vector, color2.vector);
}

function meanV(vectors) {
  let sumv = createVector(0, 0, 0);
  for (let i = 0; i < vectors.length; i++) {
    sumv.add(vectors[i]);
  }
  sumv.div(vectors.length);
  return sumv;
}
