$(document).ready(function(){
var fontSize = 35 ;	// フォントサイズ
var lineHeight = 1.0 ;	// 行の高さ (フォントサイズに対する倍率)
var x = 50 ;	// 水平位置
var y = 50 ;	// 垂直位置   //新規画像オブジェクト
var Canvas = document.getElementById("canvas");
var Context = Canvas.getContext("2d");
var img = new Image();
img.src = "" + pic;

Context.fillStyle = "" + color;
Context.fillRect(0, 0, 600, 300);

Context.fillStyle = "" + text;
Context.rect( 15, 15, 470, 270 )
Context.lineWidth = 8 ;
Context.stroke() ;

var NameResult = document.edit.name.value;
var IdResult = document.edit.id.value;
var AgeResult = document.edit.age.value;
var ComentResult = document.edit.coment.value;
var Text = "ユーザー名:" + "\t" + NameResult + "\n" + "ID: " + "\t" +IdResult + "\n" + " 年齢: " + "\t" + AgeResult + "\n" + "コメント: " + "\t" + ComentResult ;
read();

  $("#name, #id, #age, #coment").on('keyup', read);

  $('#colors').change(function() {
   color = $(this).val();
  read();
  });

  function read(){

  var NameResult = document.edit.name.value;
  var IdResult = document.edit.id.value;
  var AgeResult = document.edit.age.value;
  var ComentResult = document.edit.coment.value;
  var Text = "ユーザー名:" + "\t" + NameResult + "\n" + "ID: " + "\t" +IdResult + "\n" + " 年齢: " + "\t" + AgeResult + "\n" + "コメント: " + "\t" + ComentResult ;


Context.clearRect(0, 0, 500, 300);
Context.beginPath () ;
Context.fillStyle = "" + color;
Context.fillRect(0, 0, 500, 300);
Context.fillStyle = "" + text;

Context.rect( 15, 15, 470, 270 )
Context.lineWidth = 8 ;
Context.stroke() ;

Context.font = "bold " + fontSize + "Noto Sans JP" ;
for( var lines=Text.split( "\n" ), i=0, l=lines.length; l>i; i++ ) {
var line = lines[i] ;
var addY = fontSize ;
// 2行目以降の水平位置は行数とlineHeightを考慮する
if ( i ) addY += fontSize * lineHeight * i ;
Context.fillText( line, x + 0, y + addY ) ;



Context.drawImage(img, 250, 50, 200, 200);  //400x300に縮小表示

 }
}

document.getElementById("download").onclick = (event) => {
    let canvas = document.getElementById("canvas");

    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "profsend.png";
    link.click();
  }
});
