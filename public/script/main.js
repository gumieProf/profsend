/*
MIT License

Copyright (c) 2020 gumie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

export default function main() {
  $(function () {
    var o = 35,
      prof = document.getElementById("prof"),
      m = prof.getContext("2d");
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

    setTimeout(function () {
      $("#scanFile").hide();
      $(".datas").hide();
      $(".delete1").click(function () {
        $("#name").val("");
        i();
        return false;
      });
      $(".delete2").click(function () {
        $("#id").val("");
        i();
        return false;
      });
      $(".delete3").click(function () {
        $("#coment").val("");
        i();
        return false;
      });

      $("#data1Btn,.subData1").click(function () {
        $(".datas").hide();
        $("#data1").fadeIn();
        $(".dataBtn").hide();
        return false;
      });
      $("#data2Btn,.subData2").click(function () {
        $(".datas").hide();

        $("#data2").fadeIn();
        $(".dataBtn").hide();

        return false;
      });
      $("#data3Btn,.subData3").click(function () {
        $(".datas").hide();

        $("#data3").fadeIn();
        $(".dataBtn").hide();

        return false;
      });
      $("#data4Btn,.subData4").click(function () {
        $(".datas").hide();

        $("#data4").fadeIn();
        $(".dataBtn").hide();

        return false;
      });
      $(".back").click(function () {
        $(".datas").hide();
        $(".dataBtn").show();
        return false;
      });
      $(".envls").click(function () {
        var img = $(this).find("img");
        var imgsrc = img.attr('src');
        pic = imgsrc;
        i();
        return false;
      });

      var prof = document.getElementById("prof");
      var m = prof.getContext("2d");
      new Image().src = "" + pic;
      var e = document.getElementById("file");
      var i = function () {
        prof.style.display = "block"
        setTimeout(function () {
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
          $.cookie("id", id2);
          $.cookie("name", name2);
          $.cookie("age", age2);
          $.cookie("coment", coment2);
          $.cookie("sns", sns2);
          $.cookie("age", age2);
          var comentif = coment == null || typeof coment == "undefined" ||
            coment == "";
          var snsif = sns == null || typeof sns == "undefined" || sns == "";
          var ageif = age == null || typeof age == "undefined" || age == "";

          if (comentif && snsif && ageif) {
            var e = "NAME:\t" + name + "\nID: \t" + id;
          } else if (comentif && snsif) {
            var e = "NAME:\t" + name + "\nID: \t" + id + "\n AGE: \t" + age;
          } else if (ageif && snsif) {
            var e = "NAME:\t" + name + "\nID: \t" + id + "\nCOMMENT: \t" + age;
          } else if (ageif && comentif) {
            var e = "NAME:\t" + name + "\nID: \t" + id + "\nSNS: \t" + sns;
          } else if (ageif) {
            var e = "NAME:\t" +
              name +
              "\nID: \t" +
              id +
              "\nCOMMENT: \t" +
              coment +
              "\nSNS: \t" +
              sns;
          } else if (comentif) {
            var e = "NAME:\t" +
              name +
              "\nID: \t" +
              id +
              "\n AGE: \t" +
              age +
              "\nSNS: \t" +
              sns;
          } else if (snsif) {
            var e = "NAME:\t" +
              name +
              "\nID: \t" +
              id +
              "\n AGE: \t" +
              age +
              "\nCOMMENT: \t" +
              coment;
          } else {
            var e = "NAME:\t" +
              name +
              "\nID: \t" +
              id +
              "\n AGE: \t" +
              age +
              "\nCOMMENT: \t" +
              coment +
              "\nSNS: \t" +
              sns;
          }

          m.clearRect(0, 0, prof.width + 100, prof.height + 100);
          m.beginPath();
          m.fillStyle = "" + color;
          m.fillRect(0, 0, prof.width + 100, prof.height + 100);
          m.fillStyle = "" + text;
          m.rect(15, 15, prof.width - 30, prof.height - 30);
          m.lineWidth = 8;
          m.strokeStyle = text
          m.stroke();
          var fontSize = 24; // フォントサイズ
          var lineHeight = 1.1618; // 行の高さ (フォントサイズに対する倍率)
          var x = 30; // 水平位置
          var y = 30; // 垂直位置
          m.font = "bold " + o + "Noto Sans JP";
          for (var lines = e.split("\n"), i = 0, l = lines.length; l > i; i++) {
            var line = lines[i];
            var addY = fontSize;

            // 2行目以降の水平位置は行数とlineHeightを考慮する
            if (i) addY += fontSize * lineHeight * i;

            m.fillText(line, x + 0, y + addY);
            var a = new Image();
            (a.src = "" + pic), m.drawImage(a, prof.width - 50, prof.height - 50, 30, 30);
          }
          var imgT = document.getElementById("preview");
          imgT.src = prof.toDataURL();
          prof.style.display = "none"
        }, 50);
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
      i();
      $(".profelem").on({
        "keydown": i,
        "chenge": i,
      });
      $(document).on(
        {
          "keydown": i,
          "chenge": i,
        },
        ".profelem",
      );
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
            "<label for=id>ID：</label>" +
            '<input type="text" name="formID" id="id" value="' +
            idvalue +
            '" class="profelem" maxlength="' +
            idtypeVal +
            '"/>' +
            '<a href="#" class="delete2' +
            '><i class="fas fa-times-circle delete"></i' +
            "></a>",
          );
          i();
          $("#idleng").html("<h5>現在の桁数は" + idtypeVal + "です</h5>");
        }),
        $("")
      e.addEventListener("change", function (e) {
        var t = e.target.files[0];
        if (t.type.match("image.*")) {
          var n = new FileReader();
          (n.onload = function () {
            (pic = n.result), i();
          }), n.readAsDataURL(t);
        } else alert("画像を選択してください");
      });
      $("#cookieClear").click(function () {
        $.removeCookie("name");
        $.removeCookie("id");
        $.removeCookie("coment");
        $.removeCookie("sns");
        return false;
      });

    });
  });
}
