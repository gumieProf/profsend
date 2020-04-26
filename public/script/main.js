export default function main() {
  var Cookie = require("js-cookie");
  $(function () {
    $(".datas").hide();
    var data1hide = 0;
    var data2hide = 0;
    var data3hide = 0;
    $(".delete1").click(function () {
      $("#name").val("");
      i();
    });
    $(".delete1").click(function () {
      $("#id").val("");
      i();
    });
    $(".delete1").click(function () {
      $("#coment").val("");
      i();
    });

    $("#data1Btn").click(function () {
      $(".datas").hide();

      if (data1hide === 1) {
        $("#data1").hide();
        data1hide = 0;
      } else {
        $("#data1").fadeIn();
        data1hide = 1;
      }
    });
    $("#data2Btn").click(function () {
      $(".datas").hide();

      if (data2hide === 1) {
        $("#data2").hide();
        data2hide = 0;
      } else {
        $("#data2").fadeIn();
        data2hide = 1;
      }
    });
    $("#data3Btn").click(function () {
      $(".datas").hide();

      if (data3hide === 1) {
        $("#data3").hide();
        data3hide = 0;
      } else {
        $("#data3").fadeIn();
        data3hide = 1;
      }
    });

    var o = 35,
      c = 1,
      r = 30,
      u = 30,
      x,
      re,
      y;
    var prof = document.getElementById("prof");
    var m = prof.getContext("2d");
    new Image().src = "" + pic;
    var e = document.getElementById("file");
    var i = function () {
      var id = $("#id").val();
      var age = $("#age").val();
      var coment = $("#coment").val();
      var sns = $("#snsText").val();
      var id2 = id;
      var age2 = age;
      var coment2 = coment;
      var sns2 = sns;
      if (
        Cookies.get("id") === null ||
        typeof Cookies.get("id") === undefined
      ) {
        var id = Cookie.get("id");
        Cookies.remove("id");
      }
      Cookie.set("id", id2);

      if (
        Cookies.get("name") === null ||
        typeof Cookies.get("name") === undefined
      ) {
        var id = Cookie.get("name");
        Cookies.remove("name");
      }
      Cookie.set("name", name2);

      if (
        Cookies.get("age") === null ||
        typeof Cookies.get("age") === undefined
      ) {
        var id = Cookie.get("age");
        Cookies.remove("age");
      }
      Cookie.set("age", age2);

      if (
        Cookies.get("coment") === null ||
        typeof Cookies.get("coment") === undefined
      ) {
        var id = Cookie.get("coment");
        Cookies.remove("coment");
      }
      Cookie.set("coment", coment2);
      if (
        Cookies.get("sns") === null ||
        typeof Cookies.get("sns") === undefined
      ) {
        var id = Cookie.get("sns");
        Cookies.remove("sns");
      }
      Cookie.set("sns", sns2);

      var comentif =
        coment == null || typeof coment == "undefined" || coment == "";
      var snsif = sns == null || typeof sns == "undefined" || sns == "";
      var ageif = age == null || typeof age == "undefined" || age == "";

      if (comentif && snsif && ageif) {
        var e = "ユーザー名:\t" + $("#name").val() + "\nID: \t" + id;
      } else if (comentif && snsif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          $("#id").val() +
          "\n 年齢: \t" +
          age;
      } else if (ageif && snsif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          $("#id").val() +
          "\nコメント: \t" +
          $("#coment").val();
      } else if (ageif && comentif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          $("#id").val() +
          "\nSNS: \t" +
          $("#snsText").val();
      } else if (ageif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          $("#id").val() +
          "\nコメント: \t" +
          $("#coment").val() +
          "\nSNS: \t" +
          $("#snsText").val();
      } else if (comentif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          $("#id").val() +
          "\n 年齢: \t" +
          age +
          "\nSNS: \t" +
          $("#snsText").val();
      } else if (snsif) {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          $("#id").val() +
          "\n 年齢: \t" +
          age +
          "\nコメント: \t" +
          $("#coment").val();
      } else {
        var e =
          "ユーザー名:\t" +
          $("#name").val() +
          "\nID: \t" +
          $("#id").val() +
          "\n 年齢: \t" +
          age +
          "\nコメント: \t" +
          $("#coment").val() +
          "\nSNS: \t" +
          $("#snsText").val();
      }

      m.clearRect(0, 0, 500, 300);
      m.beginPath();
      m.fillStyle = "" + color;
      m.fillRect(0, 0, 500, 300);
      m.fillStyle = "" + text;
      m.rect(15, 15, 370, 170);
      m.lineWidth = 8;
      m.stroke();
      var fontSize = 24; // フォントサイズ
      var lineHeight = 1.1618; // 行の高さ (フォントサイズに対する倍率)
      var x = 30; // 水平位置
      var y = 30; // 垂直位置
      m.font = "bold " + o + "YuGothic";
      for (var lines = e.split("\n"), i = 0, l = lines.length; l > i; i++) {
        var line = lines[i];
        var addY = fontSize;

        // 2行目以降の水平位置は行数とlineHeightを考慮する
        if (i) addY += fontSize * lineHeight * i;

        m.fillText(line, x + 0, y + addY);
        var a = new Image();
        (a.src = "" + pic), m.drawImage(a, 320, 130, 50, 50);
      }
    };
    window.i = i;
    (m.fillStyle = "" + color),
      m.fillRect(0, 0, 450, 300),
      (m.fillStyle = "" + text),
      m.rect(15, 15, 370, 170),
      (m.lineWidth = 8),
      m.stroke();
    $("#name").val(), $("#id").val(), $("#age").val(), $("#coment").val();
    $("#snsText").val();
    i(), $(".profelem").keyup(i);
    $(".profelem").change(i);
    $("#colors").change(function () {
      (color = $(this).val()), i();
    }),
      $("#textColor").change(function () {
        (text = $(this).val()), i();
      }),
      $("#idset").click(function () {
        var idtypeVal = $("#idtype").val();
        $("#idtext").html(
          '<span>ID：</span><input type="text" name="formID" id="id" class="wrap" maxlength="' +
            idtypeVal +
            '"></input>'
        );
        re = idtypeVal;
        i();
        $("#idleng").html("<h5>現在の桁数は" + e + "です</h5>");
      }),
      e.addEventListener("change", function (e) {
        var t = e.target.files[0];
        if (t.type.match("image.*")) {
          var n = new FileReader();
          (n.onload = function () {
            (pic = n.result), i();
          }),
            n.readAsDataURL(t);
        } else alert("画像を選択してください");
      });
  });
}
