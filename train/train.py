# p5-word2vec
# Code to train word vectors

from gensim.models import Word2Vec
import re
import json

# Path to your text file
path ='midsummer.txt'
text = open(path).read().lower().replace("\n", " ")

# Split into sentences (this could be improved! Using nltk?)
sentences = re.split("[.?!]", text);

# Split each sentence into words! (this could also be improved!)
final_sentences = []
for sentence in sentences:
    words = re.split("\W+", sentence)
    final_sentences.append(words)

# Create the Word2Vec model
model = Word2Vec(final_sentences, size=100, window=5, min_count=5, workers=4)
# Save the vectors to a text file
model.wv.save_word2vec_format('vectors.txt', binary=False)

# Open up that text file and convert to JSON
f = open("vectors.txt")
v = {"vectors": {}}
for line in f:
    w, n = line.split(" ", 1)
    v["vectors"][w] = list(map(float, n.split()))

# Save to a JSON file
with open("vectors.json", "w") as out:
    json.dump(v, out)
