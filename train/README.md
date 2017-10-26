# Training

## Python Environment

Set up a python environment with [gensim](https://radimrehurek.com/gensim/) installed. Here are some [more detailed instructions](https://github.com/shiffman/A2Z-F17/wiki/Python-Environment-for-LSTM-example) related to a python environment for tensorflow (but you only need gensim for this tutorial).

```
pip install gensim
```

## Run train.py

```
python train.py
```

You'll want to edit the script to point to the correct text file (and certainly you could modify it to work with multiple text files).

```python
# Path to your text file
path ='midsummer.txt'
text = open(path).read().lower().replace("\n", " ")
```

Copy the resulting `vectors.json` file into your p5.js sketch!
