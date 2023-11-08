const dotenv = require('dotenv');
const fs = require('fs');
const message = require('./modules/message'); 

// .env ファイルから環境変数を読み込む
dotenv.config();

// message モジュールの create メソッドを実行し、結果を取得
const name = process.env.NAME; 
const number = process.env.NUMBER; 
const resultMessage = message.create(name, number);


fs.writeFile('message.txt', resultMessage, (err) => {
  if (err) {
    console.error('ファイルへの書き込み中にエラーが発生しました:', err);
  } else {
    console.log('結果が "message.txt" に書き込まれました。');
  }
});