$(document).ready(function() {
    var o = 35
      , c = 1
      , r = 30
      , u = 30
      , prof = document.getElementById("prof")
      , m = prof.getContext("2d");
    (new Image).src = "" + pic;
    var e = document.getElementById("file");
    m.fillStyle = "" + color,
    m.fillRect(0, 0, 450, 300),
    m.fillStyle = "" + text,
    m.rect(15, 15, 370, 170),
    m.lineWidth = 8,
    m.stroke();
    $("#name").val(),
    $("#id").val(),
    $("#age").val(),
    $("#coment").val();
    function i() {
        var age =    $("#age").val();
        var coment = $("#coment").val();
        if(age == null || age == undefined || age == "" && coment == null || coment == undefined || coment == ""){
        var e = "ユーザー名:\t" + $("#name").val()+ "\nID: \t" + $("#id").val();
        } else if(age == null || age == undefined || age == ""){
        var e = "ユーザー名:\t" + $("#name").val() + "\nID: \t" + $("#id").val() + "\nコメント: \t" + $("#coment").val();
        } else if(coment == null || coment == undefined || coment == ""){
        var e = "ユーザー名:\t" + $("#name").val() + "\nID: \t" + $("#id").val() + "\n 年齢: \t" + $("#age").val();
        } else {
        var e = "ユーザー名:\t" + $("#name").val()+ "\nID: \t" + $("#id").val() + "\n 年齢: \t" + $("#age").val() + "\nコメント: \t" + $("#coment").val();
        }
        
        m.clearRect(0, 0, 500, 300);
        m.beginPath();
        m.fillStyle = "" + color;
        m.fillRect(0, 0, 500, 300);
        m.fillStyle = "" + text;
        m.rect(15, 15, 370, 170);
        m.lineWidth = 8;
        m.stroke();
var fontSize = 24 ;	// フォントサイズ
var lineHeight = 1.1618 ;	// 行の高さ (フォントサイズに対する倍率)
var x = 50 ;	// 水平位置
var y = 50 ;	// 垂直位置
        m.font = "bold " + o + "Noto Sans JP";
for( var lines=e.split( "\n" ), i=0, l=lines.length; l>i; i++ ) {
	var line = lines[i] ;
	var addY = fontSize ;

	// 2行目以降の水平位置は行数とlineHeightを考慮する
	if ( i ) addY += fontSize * lineHeight * i ;

	m.fillText( line, x + 0, y + addY ) 

               ;
                var a = new Image;
                a.src = "" + pic,
                m.drawImage(a, 200, 70, 100, 100)
         }
        }
    i(),
    $("#name, #id, #age, #coment").on("keyup", i);
    $("#name, #id, #age, #coment").on("change", i);
    $("#colors").change(function() {
        color = $(this).val(),
        i()
    }),
    $("#idset").click(function() {
        var e = document.getElementById("idtype").value;
        $("#idtext").html('<span>ID：</span><input type="text" name="formID" id="id" class="wrap" maxlength="' + e + '"></input>'),
        i(),
        $("#idleng").html("<p><%=_("num2")%>" + e + "<%=_("num3")%></p>")
    }),
    e.addEventListener("change", function(e) {
        var t = e.target.files[0];
        if (t.type.match("image.*")) {
            var n = new FileReader;
            n.onload = function() {
                pic = n.result,
                i()
            }
            ,
            n.readAsDataURL(t)
        } else
            alert("画像を選択してください")
    });
});