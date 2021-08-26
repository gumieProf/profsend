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
    var id2 = id;
    var age2 = age;
    var coment2 = coment;
    var sns2 = sns;
    var name2 = name;
    var pic = "/image/img-1.png";
    var color = "#999";
    var text = "#000000";
    var ifTextInput = false;
    var ifColorInput = false;
    var cropper;
    function setstrage() {
      localStorage.setItem("id", $("#id").val());
      localStorage.setItem("name", $("#name").val());
      localStorage.setItem("age", $("#age").val());
      localStorage.setItem("coment", $("#coment").val());
      localStorage.setItem("sns", $("#snsText").val());
    }
    function getStrage() {
      if (localStorage.getItem("id")) {
        var id = localStorage.getItem("id");
        $("#id").val(id);
      }

      if (localStorage.getItem("name")) {
        var name = localStorage.getItem("name");
        $("#name").val(name);
      }

      if (localStorage.getItem("age")) {
        var age = localStorage.getItem("age");
        $("#age").val(age);
      }

      if (localStorage.getItem("coment")) {
        var coment = localStorage.getItem("coment");
        $("#coment").val(coment);
      }
      if (localStorage.getItem("sns")) {
        var sns = localStorage.getItem("sns");
        $("#sns").val(sns);
      }
    }

    setTimeout(function () {
      $("#scanFile").hide();
      $(".datas").hide();
      $("#cropFile1").hide();
      $("#colorInputDiv").hide();
      $("#textInputDiv").hide();
      $(".crop1").hide();
      $("#qrValue").hide();
      $("#SMTprof").hide();
      $("#SMTpreview").hide();
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

      var e = document.getElementById("file");
      function indention(text) {
        if (text.length > 30) {
          var newtextA = text.substr(0, 10) + "\n";
          var newtextB = text.substr(10, 20) + "\n";
          var newtextC = text.substr(20, 30) + "\n";
          var newtextC = text.substr(30, text.length);

          return newtextA + newtextB + newtextC;
        } else if (text.length > 20) {
          var newtextA = text.substr(0, 10) + "\n";
          var newtextB = text.substr(10, 20) + "\n";
          var newtextC = text.substr(20, text.length);
          return newtextA + newtextB + newtextC;
        } else if (text.length >= 10) {
          var newtextA = text.substr(0, 10) + "\n";
          var newtextB = text.substr(10, text.length);
          return newtextA + newtextB;
        } else {
          return text;
        }
      }
      var i = function () {
        setTimeout(function () {
          var id = indention($("#id").val());
          var age = indention($("#age").val());
          var coment = indention($("#coment").val());
          var sns = indention($("#snsText").val());
          var name = indention($("#name").val());
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
              var a = new Image();
              a.src = "" + pic;
              var imgHeight = a.height;
              var imgWidth = a.width;
            }
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
        }, 50);
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
        if ($(this).val() === "input") {
          $("#colorInputDiv").fadeIn(100);
          ifColorInput = true;
        } else if ($(this).val() === "img") {
          $("#cropFile1").click();
        } else {
          if ((ifColorInput = true)) {
            $("#colorInputDiv").fadeIn(100);
            ifColorInput = false;
            $("#colorInput").click();
          }

          color = $(this).val();
        }
        i();
      }),
        $("#textColor").change(function () {
          if ($(this).val() === "input") {
            $("#textInputDiv").fadeIn(100);
            ifTextInput = true;
          } else {
            if ((ifTextInput = true)) {
              ifTextInput = false;
            }
            text = $(this).val();
          }
          i();
        }),
        $("#colorInput").change(function () {
          if (ifColorInput === true) {
            color = $(this).val();
          }
          i();
        });
      $("#textInput").change(function () {
        if (ifTextInput === true) {
          text = $(this).val();
        }
        i();
      });
      $(".qrBtn").click(function () {
        var value = $("#qrURL").val();
        $("#qrValue").empty();
        new QRCode("qrValue", {
          text: value,
          width: 200,
          height: 200,
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
      $("#viewList").change(function () {
        if ($(this).val() === "default") {
          $("#SMTprof").fadeOut(100);
          $("#preview").fadeIn(100);
        } else if ($(this).val() === "smart") {
          $("#SMTprof").fadeIn(100);
          $("#preview").fadeOut(100);
        }
      });
      $("#cropFile1").change(function (e) {
        var this_ = $(this);
        if (this_ !== "") {
          var img_ = this_.prop("files")[0];
          if (
            !/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/.test(img_.name) ||
            !/(jpg|jpeg|png|gif)$/.test(img_.type)
          )
            alert("画像ファイルではありません。再度アップロードしてください。");
          $("#textColor").val(color);
        } else {
          if (window.FileReader) {
            var reader = new FileReader();
            reader.onload = function () {
              $(".crop1").fadeToggle(100);
              var cropimg = document.getElementById("cropImg1");
              cropimg.src = img_;
              cropper = new Cropper(cropimg, {
                viewMode: 3,
                dragMode: none,
                minCropBoxWidth: 100,
                minCropBoxHeight: 100,
              });
            };
            reader.readAsDataURL(img_);
          }
        }
      });
      $(".cropBtn1").click(function () {
        if (cropper != null) {
          img = cropper.getCroppedCanvas().toDataURL();
          $("#image").val("");
        }
        return false;
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
