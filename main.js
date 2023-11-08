// main.js

const fs = require('fs');
const message = require('./message');
const dotenv = require('dotenv');
dotenv.config();

const name = process.env.NAME;
const number = process.env.NUMBER;

const result = message.create(name, number);

fs.writeFile('result.txt', result, (err) => {
  if (err) throw err;
  console.log('結果を result.txt に書き出しました。');
});
