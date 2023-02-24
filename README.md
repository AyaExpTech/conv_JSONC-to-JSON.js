# conv_JSONC-to-JSON.js

有効なJSONC文字列を有効なJSON文字列に変換するJavaScript

雑実装なので処理速度はお察しです。なんかいい方法あったら教えて下さい。

## 実装メモ

```txt
・変数s(status)を用意し、初期値/コメント外0、文字列内1、単行コメント内2、ブロックコメント内3と定める
・変数o(output)を用意し、初期値を""としておく
・現在見ている文字をNとする
・1文字目から順番に以下の処理を実行する
　・現在s=1なら以下を実行
　　・Nが"ならs=0
　　・o+=Nして次の文字の処理へ
　・現在s=2なら以下を実行
　　・Nが改行ならs=0にしてo+=N
　　・次の文字の処理へ
　・現在s=3なら以下を実行
　　・Nが*かつ次の文字が/ならs=0にして1文字飛ばして次の文字の処理へ
　　・そうでないなら次の文字の処理へ
　・そうでなければ以下を実行
　　・Nが\ならo+=Nしてo+=次の文字して1文字飛ばして次の文字の処理へ
　　・Nが/なら以下を実行
　　　・次の文字が/ならs=2にして1文字飛ばして次の文字の処理へ
　　　・次の文字が*ならs=3にして1文字飛ばして次の文字の処理へ
　　・見ている文字が"ならs=1にしてo+=Nして次の文字の処理へ
　　・そうでなければo+=Nして次の文字の処理へ
・最後まで到達したらreturn
```

## 利用規約

Author : 綾坂こと(Ayasaka-Koto)  
Licensed by "AeTOS for Everyone"
> https://axtech.dev/license/