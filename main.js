$(document).ready(function(){
var fontSize = 35 ;
var lineHeight = 1.0 ;
var x = 50 ;
var y = 50 ;
var prof = document.getElementById("prof");
var Context = prof.getContext("2d");
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

      var fileData = e.target.files[0];


      if(!fileData.type.match('image.*')) {
          alert('画像を選択してください');
          return;
      }


      var reader = new FileReader();

      reader.onload = function() {
          pic = reader.result;

          read();

      }

      reader.readAsDataURL(fileData);
  }


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

if ( i ) addY += fontSize * lineHeight * i ;
Context.fillText( line, x + 0, y + addY ) ;

var img = new Image();
img.src = "" + pic;

Context.drawImage(img, 250, 50, 200, 200);

 }
}

$('#download').click(function() {
    var prof = document.getElementById("prof");

    var link = document.createElement("a");
    link.href = prof.toDataURL("image/png");
    link.download = "profsend.png";
    link.click();
  });
});
