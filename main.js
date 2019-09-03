$(document).ready(function() {
    var o = 35
      , c = 1
      , r = 30
      , u = 30
      , m = document.getElementById("prof").getContext("2d");
    (new Image).src = "" + pic;
    var e = document.getElementById("file");
    m.fillStyle = "" + color,
    m.fillRect(0, 0, 450, 300),
    m.fillStyle = "" + text,
    m.rect(15, 15, 370, 170),
    m.lineWidth = 8,
    m.stroke();
    var t = navigator.userAgent;
    0 < t.indexOf("iPhone") || 0 < t.indexOf("Android") && 0 < t.indexOf("Mobile") ? ($("body").width("360px"),
    $("#dlbutton").html('<a id="dlbutton" class="button" href="#" onclick="dlimg();">画像を変換</a>')) : (0 < t.indexOf("iPad") || 0 < t.indexOf("Android")) && $("body").width("1024px");
    document.edit.name.value,
    document.edit.id.value,
    document.edit.age.value,
    document.edit.coment.value;
    function i() {
        var age = document.edit.age.value;
        var coment = document.edit.coment.value;
        if(age == null || age == undefined || age == "" && coment == null || coment == undefined || coment == ""){
        var e = "ユーザー名:\t" + document.edit.name.value + "\nID: \t" + document.edit.id.value;
        } else if(age == null || age == undefined || age == ""){
        var e = "ユーザー名:\t" + document.edit.name.value + "\nID: \t" + document.edit.id.value + "\nコメント: \t" + document.edit.coment.value;
        } else if(coment == null || coment == undefined || coment == ""){
        var e = "ユーザー名:\t" + document.edit.name.value + "\nID: \t" + document.edit.id.value + "\n 年齢: \t" + document.edit.age.value;
        } else {
        var e = "ユーザー名:\t" + document.edit.name.value + "\nID: \t" + document.edit.id.value + "\n 年齢: \t" + document.edit.age.value + "\nコメント: \t" + document.edit.coment.value;
        }
        
        m.clearRect(0, 0, 500, 300),
        m.beginPath(),
        m.fillStyle = "" + color,
        m.fillRect(0, 0, 500, 300),
        m.fillStyle = "" + text,
        m.rect(15, 15, 370, 170),
        m.lineWidth = 8,
        m.stroke(),
        m.font = "bold " + o + "Noto Sans JP";
        for (var t = e.split("\n"), n = 0, i = t.length; n < i; n++) {
            var l = t[n]
              , d = o;
            if (n && (d += o * c * n),
            m.fillText(l, r + 0, u + d),
            null == pic || null == pic)
                ;
            else {
                var a = new Image;
                a.src = "" + pic,
                m.drawImage(a, 200, 70, 100, 100)
            }
        }
    }
    i(),
    $("#name, #id, #age, #coment").on("keyup", i),
    $("#name, #id, #age, #coment").on("change", i),
    $("#colors").change(function() {
        color = $(this).val(),
        i()
    }),
    $("#idset").click(function() {
        var e = document.getElementById("idtype").value;
        $("#idtext").html('<span>ID：</span><input type="text" name="formID" id="id" class="wrap" maxlength="' + e + '"></input>'),
        i(),
        $("#idleng").html("<p>現在のid桁数は" + e + "です。</p>")
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
    }, !1)
});
