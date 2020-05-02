export default function main() {
  $(function () {
    $(".canvRead").hide();
    var id = $("#id").val();
    var age = $("#age").val();
    var coment = $("#coment").val();
    var sns = $("#snsText").val();
    var name = $("#name").val();
    var id2 = id;
    var age2 = age;
    var coment2 = coment;
    var sns2 = sns;
    var name2 = name;
    if ($.cookie("id")) {
      var id = $.cookie("id");
      $("#id").val(id);
    }
    $.cookie("id", id2);

    if ($.cookie("name")) {
      var name = $.cookie("name");
      $("#name").val(name);
    }
    $.cookie("name", name2);

    if ($.cookie("age")) {
      var age = $.cookie("age");
      $("#age").val(age);
    }
    $.cookie("age", age2);

    if ($.cookie("coment")) {
      var coment = $.cookie("coment");
      $("#coment").val(coment);
    }
    $.cookie("coment", coment2);
    if ($.cookie("sns")) {
      var sns = $.cookie("sns");
      $("#sns").val(sns);
    }
    $.cookie("sns", sns2);

    if ($.cookie("age")) {
      var age = $.cookie("age");
      $("#age").val(age);
    }
    $.cookie("age", age2);

    $(".datas").hide();
    var data1hide = 0;
    var data2hide = 0;
    var data3hide = 0;
    $(".delete1").click(function () {
      $("#name").val("");
      i();
    });
    $(".delete2").click(function () {
      $("#id").val("");
      i();
    });
    $(".delete3").click(function () {
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

    var prof = document.getElementById("prof");
    var m = prof.getContext("2d");
    new Image().src = "" + pic;
    var e = document.getElementById("file");
    var i = function () {
      var id = $("#id").val();
      var age = $("#age").val();
      var coment = $("#coment").val();
      var sns = $("#snsText").val();
      var name = $("#name").val();
      var textType = $("#textType").val();
      var id2 = id;
      var age2 = age;
      var coment2 = coment;
      var sns2 = sns;
      var name2 = name;
      var age2 = age;
      $.cookie("id", id2);
      $.cookie("name", name2);
      $.cookie("age", age2);
      $.cookie("coment", coment2);
      $.cookie("sns", sns2);
      $.cookie("age", age2);

      var comentif =
        coment == null || typeof coment == "undefined" || coment == "";
      var snsif = sns == null || typeof sns == "undefined" || sns == "";
      var ageif = age == null || typeof age == "undefined" || age == "";

      if (comentif && snsif && ageif) {
        var e = "ユーザー名:\t" + name + "\nID: \t" + id;
      } else if (comentif && snsif) {
        var e = "ユーザー名:\t" + name + "\nID: \t" + id + "\n 年齢: \t" + age;
      } else if (ageif && snsif) {
        var e =
          "ユーザー名:\t" + name + "\nID: \t" + id + "\nコメント: \t" + age;
      } else if (ageif && comentif) {
        var e = "ユーザー名:\t" + name + "\nID: \t" + id + "\nSNS: \t" + sns;
      } else if (ageif) {
        var e =
          "ユーザー名:\t" +
          name +
          "\nID: \t" +
          id +
          "\nコメント: \t" +
          coment +
          "\nSNS: \t" +
          sns;
      } else if (comentif) {
        var e =
          "ユーザー名:\t" +
          name +
          "\nID: \t" +
          id +
          "\n 年齢: \t" +
          age +
          "\nSNS: \t" +
          sns;
      } else if (snsif) {
        var e =
          "ユーザー名:\t" +
          name +
          "\nID: \t" +
          id +
          "\n 年齢: \t" +
          age +
          "\nコメント: \t" +
          coment;
      } else {
        var e =
          "ユーザー名:\t" +
          name +
          "\nID: \t" +
          id +
          "\n 年齢: \t" +
          age +
          "\nコメント: \t" +
          coment +
          "\nSNS: \t" +
          sns;
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
      if (textType === "serif") {
        m.font = "ProfSend-serif";
      } else if (textType === "sans") {
        m.font = "ProfSend-sans";
      }
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
    $("#textType").change(i);
    $("#colors").change(function () {
      (color = $(this).val()), i();
    }),
      $("#textColor").change(function () {
        (text = $(this).val()), i();
      }),
      $("#idset").click(function () {
        var idvalue = $("#id").val();
        var idtypeVal = Number($("#idtype").val());
        $("#idtext").html(
          '<input type="text" name="formID" id="id" value="' +
            idvalue +
            '" class="wrap" maxlength="' +
            idtypeVal +
            '">' +
            "</input><label for=id>ID：</label>"
        );
        i();
        $("#idleng").html("<h5>現在の桁数は" + idtypeVal + "です</h5>");
        $(document).on("keyup", "#id", i());
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
    $("#cookieClear").click(function () {
      $.removeCookie("name");
      $.removeCookie("id");
      $.removeCookie("coment");
      $.removeCookie("sns");
    });
  });
}
