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
    $("#prof").hide();
    var o = "50px",
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
    var cropArea;
    var image;
    var file;
    var imageData;
    var picHeight;
    var picWidth;
    function setData() {
      id = $("#id").val();
      age = $("#age").val();
      coment = $("#coment").val();
      sns = $("#snsText").val();
      name = $("#name").val();
      id2 = id;
      age2 = age;
      coment2 = coment;
      sns2 = sns;
      name2 = name;
      if (localStorage.getItem("id") !== id) {
        var id = localStorage.getItem("id");
        $("#id").val(id);
      }
      localStorage.setItem("id", id2);

      if (localStorage.getItem("name") !== name) {
        var id = localStorage.getItem("name");
        $("#name").val(name);
      }
      localStorage.setItem("name", name2);

      if (localStorage.getItem("age") !== age) {
        var id = localStorage.getItem("age");
        $("#age").val(age);
      }
      localStorage.setItem("age", age2);

      if (localStorage.getItem("coment") !== coment) {
        var id = localStorage.getItem("coment");
        $("#coment").val(coment);
      }
      localStorage.setItem("coment", coment2);

      if (localStorage.getItem("sns") !== sns) {
        var id = localStorage.getItem("sns");
        $("#sns").val(sns);
      }
      localStorage.setItem("sns", sns2);
    }
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
        var imgWidth = img.attr("width");
        var imgHeight = img.attr("width");
        var imgsrc = img.attr("src");
        pic = imgsrc;
        picHeight = imgHeight;
        picWidth = imgWidth;
        i();
        return false;
      });

      var prof = document.getElementById("prof");
      var m = prof.getContext("2d");
      new Image().src = "" + pic;
      var e = document.getElementById("file");
      var i = function () {
        setTimeout(function () {
          setData();
          var comentif =
            coment == null || typeof coment == "undefined" || coment == "";
          var snsif = sns == null || typeof sns == "undefined" || sns == "";
          var ageif = age == null || typeof age == "undefined" || age == "";

          if (comentif && snsif && ageif) {
            var e = "NAME:\t" + name + "\nID: \t" + id;
          } else if (comentif && snsif) {
            var e = "NAME:\t" + name + "\nID: \t" + id + "\n AGE: \t" + age;
          } else if (ageif && snsif) {
            var e =
              "NAME:\t" + name + "\nID: \t" + id + "\nCOMMENT: \t" + coment;
          } else if (ageif && comentif) {
            var e = "NAME:\t" + name + "\nID: \t" + id + "\nSNS: \t" + sns;
          } else if (ageif) {
            var e =
              "NAME:\t" +
              name +
              "\nID: \t" +
              id +
              "\nCOMMENT: \t" +
              coment +
              "\nSNS: \t" +
              sns;
          } else if (comentif) {
            var e =
              "NAME:\t" +
              name +
              "\nID: \t" +
              id +
              "\n AGE: \t" +
              age +
              "\nSNS: \t" +
              sns;
          } else if (snsif) {
            var e =
              "NAME:\t" +
              name +
              "\nID: \t" +
              id +
              "\n AGE: \t" +
              age +
              "\nCOMMENT: \t" +
              coment;
          } else {
            var e =
              "NAME:\t" +
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
          m.strokeStyle = text;
          m.stroke();
          var fontSize = 100; // フォントサイズ
          var lineHeight = 0.5; // 行の高さ (フォントサイズに対する倍率)
          var x = 50; // 水平位置
          var y = 50; // 垂直位置
          m.font = "bold " + o + " Noto Sans JP";
          for (var lines = e.split("\n"), i = 0, l = lines.length; l > i; i++) {
            var line = lines[i];
            var addY = fontSize;

            // 2行目以降の水平位置は行数とlineHeightを考慮する
            if (i) addY += fontSize * lineHeight * i;

            m.fillText(line, x + 0, y + addY);
            var a = new Image();
            (a.src = "" + pic),
              m.drawImage(
                a,
                prof.width - 150,
                prof.height - 150,
                picWidth,
                picHeight
              );
          }
          var imgT = document.getElementById("preview");
          imgT.src = prof.toDataURL();
        }, 50);
      };
      window.i = i;
      if ($("#colors").val() === "picture") {
        if (!imageData) {
          m.drawImage(imageData, 0, 0);
          m.fillStyle = "" + text;
          m.fillRect(15, 15, 370, 170);
        } else {
          m.fillStyle = "#999";
          m.fillRect(0, 0, 450, 300);
          m.fillStyle = "#000";
          m.rect(15, 15, 370, 170);
          m.lineWidth = 8;
          m.stroke();
        }
      } else {
        m.fillStyle = "" + color;
        m.fillRect(0, 0, 450, 300);
        m.fillStyle = "" + text;
        m.rect(15, 15, 370, 170);
        m.lineWidth = 8;
        m.stroke();
      }
      $("#name").val(), $("#id").val(), $("#age").val(), $("#coment").val();
      $("#snsText").val();
      i();
      $(".profelem,#coment").on({
        keydown: i,
        chenge: i,
      });
      $(document).on(
        {
          keydown: i,
          chenge: i,
        },
        ".profelem,#coment"
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
              "></a>"
          );
          i();
          $("#idleng").html("<h5>現在の桁数は" + idtypeVal + "です</h5>");
        }),
        $("");
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
        localStorage.setItem("name", null);
        localStorage.setItem("id", null);
        localStorage.setItem("age", null);
        localStorage.setItem("coment", null);
        localStorage.setItem("sns", null);
        return false;
      });
      $(".snsDataBtn").click(function () {
        if ($("sns-div").css("display") == "block") {
          $("sns-div").fadeout();
        } else {
          $("sns-div").fadeIn();
        }
      });
      $("#background-pic").change(function (e) {
        image = e.target.files[0];
        cropArea = $(".croppie");
        file = cropArea.croppie({
          url: image,
          viewport: {
            width: 1920,
            height: 1080,
          },
          boundary: {
            width: 2000,
            height: 2000,
          },
        });
      });
      $(".cropBTN").click(function () {
        file.croppie("result", "base64").then(function (base64) {
          imageData = dase64;
          i();
          return false;
        });
      });
    });
  });
}
