// Daniel Shiffman
// Word2Vec
// Based on: https://github.com/turbomaze/word2vecjson

let wordVecs;

function setup() {
  createCanvas(100, 100);

  let loadHide = select("#loadHide");
  loadHide.hide();

  let wordInput = select('#word');
  let button = select('#submit');
  let results = select('#results');

  let between1 = select("#between1");
  let between2 = select("#between2");
  let button2 = select("#submit2");
  let results2 = select("#results2");

  let isto1 = select("isto1");
  let isto2 = select("isto2");
  let isto3 = select("isto3");
  let button3 = select("#submit3");
  let results3 = select("#results3");

  loadJSON('data/wordvecs10000.json', (data) => {
    wordVecs = data.vectors;
    console.log('loaded');
    loadHide.show();
    noLoop();
    noCanvas();
  });

  button.mousePressed(() => {
    let word = wordInput.value();
    results.html(findNearest(word, 10));
  });

  button2.mousePressed(() => {
    let v1 = wordVecs[between1.value()];
    let v2 = wordVecs[between2.value()];
    if (!v1) {
      results2.html("No word vector for first word");
      return;
    }
    if (!v2) {
      results2.html("No word vector for second word");
      return;
    }
    let middle = Word2Vec.average(v1, v2);
    results2.html(findNearest(middle, 10));
  });
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  translate(width/2,height/2);
  rotate(frameCount * 0.5);
  line(0,0,width/2,0);
}

function findNearest(word, n=10) {
  let nearest = Word2Vec.nearest(word, 10);
  if (!nearest) {
    return 'No word vector found';
  }
  let output = '';
  for (let i = 0; i < nearest.length; i++) {
    output += nearest[i].word + '<br/>';
  }
  return output;
}
