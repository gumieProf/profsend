/*
MIT License

Copyright (c) 2021 gumieProf

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
  var tesseract = require("tesseract.js");
  var $ = require("jquery");
  $(function () {
    if (
      location.href === "https://profsend.glitch.me/" ||
      location.href === "profsend.net"
    ) {
      location.href = "https://prof.gumieprof.com";
    }
    getStrage();
    $("#prof").hide();
    var prof = document.getElementById("prof");
    var profPrev = document.getElementById("preview");
    var SMTprof = document.getElementById("SMTprof");
    var SMTprev = document.getElementById("SMTpreview");
    var id = $("#id").val();
    var age = $("#age").val();
    var coment = $("#coment").val();
    var sns = $("#snsText").val();
    var name = $("#name").val();
    var pic = "/image/img-1.png";
    var color = "#999";
    var text = "#000000";
    var ifTextInput = false;
    var ifColorInput = false;
    var e;
    function setstrage() {
      for (let i = 1; i <= 5; i++) {
        if (location.pathname === "/" || location.pathname === "/top") {
          if ($(".PSdata" + i).val())
            localStorage.setItem("Gdata" + i, $(".PSdata" + i).val());
        } else if (location.pathname === "/business") {
          if ($(".PSdata" + i).val())
            localStorage.setItem("Bdata" + i, $(".PSdata" + i).val());
        }
      }
    }
    function getStrage() {
      for (let i = 1; i <= 5; i++) {
        if (location.pathname === "/" || location.pathname === "/top") {
          if (localStorage.getItem("Gdata" + i))
            localStorage.getItem("Gdata" + i);
        } else if (location.pathname === "/business") {
          if (localStorage.getItem("Bdata" + i))
            $(".PSdata" + i).val(localStorage.getItem("Bdata" + i));
        }
      }
    }
    function savePic(img) {
      var canvas = document.createElement("canvas");
      canvas.width = pic.width;
      canvas.height = pic.height;
      // Draw Image
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      // To Base64
      localStorage.setItem("image", canvas.toDataURL("image/png"));
      return canvas.toDataURL("image/png");
    }
    setTimeout(function () {
      $("#scanFile").hide();
      $(".datas").hide();
      $("#cropFile1").hide();
      $(".crop1").hide();
      $("#qrValue").hide();
      $("#SMTprof").hide();
      $("#SMTpreview").hide();
      $(".comentDiv2").hide();
      $(".comentDiv3").hide();
      $("#importFile").hide();
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
        var imgsrc = img.attr("src");
        pic = imgsrc;
        i();
        return false;
      });

      var i = function () {
        setTimeout(function () {
          e = "";
          for (let i = 1; i <= 5; i++) {
            if ($(".PSdata" + i).val()) {
              e =
                e +
                $(".PSdata" + i).data("tag") +
                " " +
                $(".PSdata" + i).val() +
                "\n";
            }
          }

          function read(cav, mode) {
            var cavHeight = cav.height;
            var cavWidth = cav.width;
            var cvs = cav.getContext("2d");
            cvs.clearRect(0, 0, cavWidth + 100, cavHeight + 100);
            cvs.beginPath();
            cvs.fillStyle = "" + color;
            cvs.fillRect(0, 0, cavWidth + 100, cavHeight + 100);
            cvs.fillStyle = "" + text;
            cvs.rect(15, 15, cavWidth - 30, cavHeight - 30);
            cvs.lineWidth = 8;
            cvs.strokeStyle = text;
            cvs.stroke();
            if (mode === "default") {
              var o = "50px";
              var fontSize = 100;
              var lineHeight = 0.5; // 行の高さ (フォントサイズに対する倍率)
            } else if (mode === "smt") {
              var o = "25px";
              var fontSize = 100;
              var lineHeight = 0.5; // 行の高さ (フォントサイズに対する倍率)
            }
            var x = 50; // 水平位置
            var y = 50; // 垂直位置
            cvs.font = "bold " + o + " Boku2";
            for (
              var lines = e.split("\n"), i = 0, l = lines.length;
              l > i;
              i++
            ) {
              var line = lines[i];
              var addY = fontSize;

              // 2行目以降の水平位置は行数とlineHeightを考慮する
              if (i) addY += fontSize * lineHeight * i;

              cvs.fillText(line, x + 0, y + addY);
            }
            var a = new Image();
            a.src = pic;
            var imgHeight = a.height;
            var imgWidth = a.width;
            if (pic === "/image/img-1.png") {
              if (mode === "default") {
                cvs.drawImage(
                  a,
                  cavWidth - 250,
                  cavHeight - 250,
                  imgWidth * 1.5,
                  imgHeight * 1.5
                );
              } else if (mode === "smt") {
                cvs.drawImage(
                  a,
                  cavWidth / 3,
                  cavHeight / 1.5,
                  imgWidth * 2,
                  imgHeight * 2
                );
              }
            } else if (pic === "/image/prof.png") {
              if (mode === "default") {
                cvs.drawImage(
                  a,
                  cavWidth - 300,
                  cavHeight - 250,
                  imgWidth,
                  imgHeight
                );
              } else if (mode === "smt") {
                cvs.drawImage(
                  a,
                  cavWidth / 8,
                  cavHeight / 1.5,
                  imgWidth * 1.5,
                  imgHeight * 1.5
                );
              }
            } else {
              if (mode === "default") {
                cvs.drawImage(
                  a,
                  cavWidth - 250,
                  cavHeight - 250,
                  imgWidth / 2,
                  imgHeight / 2
                );
              } else if (mode === "smt") {
                cvs.drawImage(
                  a,
                  cavWidth / 3,
                  cavHeight / 1.5,
                  imgWidth / 1.5,
                  imgHeight / 1.5
                );
              }
            }
          }

          read(prof, "default");
          read(SMTprof, "smt");
          profPrev.src = prof.toDataURL();
          SMTprev.src = SMTprof.toDataURL();
          setstrage();
        }, 100);
      };
      $(".EMBreset").click(function () {
        pic = "/image/img-1.png";
        i();
        return false;
      });
      $(".EMBhide").click(function () {
        pic = "";
        i();
        return false;
      });
      window.i = i;
      $("#name").val(), $("#id").val(), $("#age").val(), $("#coment").val();
      $("#snsText").val();
      i();

      $(document).on(".profelem,#coment", {
        keydown: function (event) {
          if (event.keyCode === 13) {
            i();
          } else {
            i();
          }
        },
        chenge: i,
      });
      $(document).on(
        {
          keydown: i,
          chenge: i,
        },
        ".profelem,#coment"
      );
      $("#colorInput").change(function () {
        color = $(this).val();
        i();
        setstrage();
      });
      $("#textInput").change(function () {
        text = $(this).val();
        i();
        setstrage();
      });
      $(".qrBtn").click(function () {
        var value = $("#qrURL").val();
        $("#qrValue").empty();
        new QRCode("qrValue", {
          text: value,
          width: 300,
          height: 300,
          correctLevel: QRCode.CorrectLevel.H,
        });
        $("#qrValue")
          .find("img")
          .on("load", function () {
            pic = $(this).attr("src");
            i();
          });
        return false;
      });
      var ex = document.getElementById("file");
      ex.addEventListener("change", function (e) {
        var t = ex.target.files[0];
        if (t.type.match("image.*")) {
          var n = new FileReader();
          (n.onload = function () {
            (pic = n.result), i();
          }),
            n.readAsDataURL(t);
        } else alert("画像を選択してください");
      });
      $("#viewList").change(function () {
        if ($(this).val() === "default") {
          $("#SMTpreview").fadeOut(100);
          $("#preview").fadeIn(100);
        } else if ($(this).val() === "smart") {
          $("#SMTpreview").fadeIn(100);
          $("#preview").fadeOut(100);
        }
      });

      $("#cookieClear").click(function () {
        localStorage.setItem("id", "");
        localStorage.setItem("name", "");
        localStorage.setItem("age", "");
        localStorage.setItem("coment", "");
        localStorage.setItem("sns", "");
        return false;
      });
      $("#import").click(function () {
        $("#importFile").click();
        $("#importFile").change(function (e) {
          var reader = new FileReader();
          reader.onload = function (e) {
            tesseract
              .recognize(e.target.result, "jpn", {
                logger: (p) =>
                  $("#importLog").text(
                    p.status + ":" + Math.round(p.progress * 100) + "%"
                  ),
              })
              .then((result) => {
                var ris = result.data.text;
                console.log(ris);
                var listB = ris.match(
                  /[ |名|前|I|D|年|齢|コ|メ|ン|ト|S|N|S]{2,5}.[A-Za-z0-9あ-んア-ン㐀-鿿]{1,30}/gm
                );
                console.log(listB);
                for (let i = 0; i < listB.length; i++) {
                  if (listB[i].match(/ *名 *前 */g)) {
                    var datas = listB[i].substr(listB[i].lastIndexOf("前") + 1);
                    $("#name").val(datas);
                  }
                  if (listB[i].match(/ *I *D */g)) {
                    var datas = listB[i].substr(listB[i].lastIndexOf("D") + 1);
                    $("#id").val(datas);
                  }
                  if (listB[i].match(/ *年 *齢 */g)) {
                    var datas = listB[i].substr(listB[i].lastIndexOf("齢") + 1);
                    $("#age").val(datas);
                  }
                  if (listB[i].match(/ *コ *メ *ン *ト */g)) {
                    var datas = listB[i].substr(listB[i].lastIndexOf("ト") + 1);
                    $("#coment").val(datas);
                  }
                  if (listB[i].match(/ *S * N *S */g)) {
                    var datas = listB[i].substr(listB[i].lastIndexOf("S") + 1);
                    $("#snsText").val(datas);
                  }

                  console.log(datas);
                }
              });
          };
          reader.readAsDataURL(e.target.files[0]);
          i();
          setstrage();
        });
      });
    });
  });
}
