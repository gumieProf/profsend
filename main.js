$(document).ready(function(){
var fontSize = 35 ;	// フォントサイズ
var lineHeight = 1.0 ;	// 行の高さ (フォントサイズに対する倍率)
var x = 50 ;	// 水平位置
var y = 50 ;	// 垂直位置   //新規画像オブジェクト
var Canvas = document.getElementById("canvas");
var Context = Canvas.getContext("2d");
var img = new Image();
img.src = "" + pic;
var file = document.getElementById('file');

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
  $("#name, #id, #age, #coment").on('change', read);

  $('#colors').change(function() {
   color = $(this).val();
   $('body').css({'border': '10px solid'+color});
   $('.button').css({"background-color": ""+color});
  read();
  });

  function upload(e) {
      // ファイル情報を取得
      var fileData = e.target.files[0];

      // 画像ファイル以外は処理を止める
      if(!fileData.type.match('image.*')) {
          alert('画像を選択してください');
          return;
      }

      // FileReaderオブジェクトを使ってファイル読み込み
      var reader = new FileReader();
      // ファイル読み込みに成功したときの処理
      reader.onload = function() {
          // Canvas上に表示する
          pic = reader.result;

          read();

      }
      // ファイル読み込みを実行
      reader.readAsDataURL(fileData);
  }

  // ファイルが指定された時にloadLocalImage()を実行
  file.addEventListener('change', upload, false);

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

var img = new Image();
img.src = "" + pic;

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
