// Daniel Shiffman
// Word2Vec
// Based on: https://github.com/turbomaze/word2vecjson

let wordVecs;

function setup() {
  createCanvas(100, 100);

  let wordInput = select('#word');
  let button = select('#submit');
  wordInput.hide();
  button.hide();
  let results = select('#results');

  loadJSON('data/wordvecs10000.json', (data) => {
    wordVecs = data.vectors;
    console.log('loaded');
    wordInput.show();
    button.show();
    noLoop();
    noCanvas();
  });


  button.mousePressed(() => {
    word = wordInput.value();
    let nearest = Word2Vec.nearest(word, 10);
    if (!nearest) {
      results.html('no word vector found');
      return;
    }
    let output = '';
    for (let i = 0; i < nearest.length; i++) {
      output += nearest[i].word + '<br/>';
    }
    results.html(output);
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
