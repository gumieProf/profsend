window.addEventListener("DOMContentLoaded", () => { //jQueryでいうところのready

  var Canvas1 = document.getElementById("canvas1");
  var Canvas2 = document.getElementById("canvas2");
  var Canvas3 = document.getElementById("canvas3");
  var Resultcanvas = document.getElementById("canvas_result");
  var Ctx1 = Canvas1.getContext("2d");
  var Ctx2 = Canvas2.getContext("2d");
  var Ctx3 = Canvas3.getContext("2d");
  var ResultCtx = Resultcanvas.getContext("2d");
  var NameResult = document.edit.name.value;
  var IdResult = document.edit.id.value;
  var AgeResult = document.edit.age.value;
  var ComentResult = document.edit.coment.value;
  var Text = "ユーザー名" + "\t" + NameResult + "\n" + "ID" + "\t" +IdResult + "\n" + " 年齢 " + "\t" + AgeResult + "\n" + "コメント" + "\t" + ComentResult ;
  var fontSize = 35 ;	// フォントサイズ
  var lineHeight = 1.0 ;	// 行の高さ (フォントサイズに対する倍率)
  var x = 50 ;	// 水平位置
  var y = 50 ;	// 垂直位置
  var img = new Image();    //新規画像オブジェクト

Ctx3.beginPath () ;
Ctx3.font = "bold " + fontSize + "游ゴシック" ;
for( var lines=Text.split( "\n" ), i=0, l=lines.length; l>i; i++ ) {
var line = lines[i] ;
var addY = fontSize ;
// 2行目以降の水平位置は行数とlineHeightを考慮する
  if ( i ) addY += fontSize * lineHeight * i ;
  Ctx3.fillText( line, x + 0, y + addY ) ;
}
  Ctx2.beginPath();
  Ctx2.fillStyle = '#a4a4a4';
  Ctx2.fillRect(20, 20, 550, 400);

  Ctx1.fillStyle = "#ffffff";
  Ctx1.fillRect(0, 0, Canvas1.width, Canvas1.height);


  var Canvas1 = document.getElementById("canvas1");
  var Canvas2 = document.getElementById("canvas2");
  var Canvas3 = document.getElementById("canvas3");
  var Resultcanvas = document.getElementById("canvas_result");
  var Ctx1 = Canvas1.getContext("2d");
  var Ctx2 = Canvas2.getContext("2d");
  var Ctx3 = Canvas3.getContext("2d");
  var ResultCtx = Resultcanvas.getContext("2d");

  const {width, height} = mainCanvas;
  const Imgdata1 = Ctx1.getImageData(0, 0, width, height);
  const Imgdata2 = Ctx2.getImageData(0, 0, width, height);
  const Imgdata3 = Ctx3.getImageData(0, 0, width, height);

  const Data1 = Imgdata1.data;
  const Data2 = Imgdata2.data;
  const Data3 = Imgdata3.data;

  const ResultImgData = ResultCtx.createImageData(width, height);
  const ResultData = ResultImgData.data;

  ResultCtx.putImageData(ResultImgData, 0, 0);


canvas1.hidden = true;
canvas2.hidden = true;
canvas3.hidden = true;
var base64 = canvas_result.toDataURL();
	// 空のimgタグにcanvasで作成した画像を載せる。
	// 以降は通常の画像と同じなので右クリックから保存できるようになる。
	document.getElementById("newImg").src = base64;

  var fileName   = "license.png";
	// base64データをblobに変換
	var blob = Base64toBlob(base64);

  document.getElementById("dlImg").href = window.URL.createObjectURL(blob);
	// ダウンロードファイル名を設定
	document.getElementById("dlImg").download = fileName;

document.getElementById("btnDownload").addEventListener("click", DownloadStart, false);

function DownloadStart(){
	if (canvas_result.getContext) {

		// ダウンロード ファイル名
		var fileName   = "license.png";

		//  ダウンロード開始
		if (window.navigator.msSaveBlob) {
			// IE
			// base64データをblobに変換してダウンロード
			window.navigator.msSaveBlob(Base64toBlob(base64), fileName);
		} else {
			// Chrome, Firefox, Edge
			// aタグをクリックしてダウンロード開始
			document.getElementById("dlImg").click();
		}
	}
}

// --------------------
// Base64データをBlobデータに変換
// --------------------
// https://st40.xyz/one-run/article/133/
function Base64toBlob(base64)
{
	var tmp = base64.split(',');
	var data = atob(tmp[1]);
	var mime = tmp[0].split(':')[1].split(';')[0];
	var buf = new Uint8Array(data.length);
	for (var i = 0; i < data.length; i++) {
		buf[i] = data.charCodeAt(i);
	}
	var blob = new Blob([buf], { type: mime });
	return blob;
 }
