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
    function saveImage(data) {
      var canvas = document.createElement("canvas");
      canvas.width = data.width;
      canvas.height = data.height;
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = data;
      ctx.drawImage(img, 0, 0);
      var base64 = canvas.toDataURL("image/png");
      localStorage.setItem("profImg", base64);
      return base64;
    }
    $("#prof").hide();
    var o = "50px",
      prof = document.getElementById("prof"),
      m = prof.getContext("2d"),
      pic,
      picHeight,
      picWidth,
      color = $(".BGcolor").val(),
      text = $(".TEXTcolor").val(),
      file = document.getElementById("file"),
      left,
      right;
    if (
      localStorage.getItem("autosync") === true ||
      localStorage.getItem("autosync") === null
    ) {
      $(".switch__label").prop("checked", true);
      localStorage.setItem("autosync", true);
    }
    function setData() {
      if (localStorage.getItem("profData")) {
        var object = localStorage.getItem("profData");
      } else {
        $(".defaultEnvl").click();
        color = "#999";
        $(".BGcolor").val(color);
        text = "#000000";
        $(".TEXTcolor").val(text);
      }
      if (localStorage.getItem("profImg")) {
        pic = localStorage.getItem("profImg");
      }

      var newObj = {};
      if (object) {
        var data = JSON.parse(object);
        var titleName = new Function("data.title" + i)();
        var valueName = new Function("data.value" + i)();
        var newTitleName = new Function("newObj.title" + i)();
        var newValueName = new Function("newObj.value" + i)();
        $(".editList").empty();
        for (let i = 1; i <= data.length; i++) {
          $(".editList").append('<li class="editText' + i + '"></li>');
          var title = $(".editText" + i).append(
            '<input type="text" class="title' + i + '"/>'
          );
          $(".editText" + i).append(
            '<a href="#" class="deleteBtn"><i class="far fa-times-circle"></i></a>'
          );
          var value = $(".editText" + i).append(
            '<input type="text" class="value' + i + '"/>'
          );
          title.val(titleName);
          value.val(valueName);
        }
        if ($(".switch__label").prop("checked")) {
          for (let i = 1; i <= data.length; i++) {
            if ($(".editText" + i)) {
              newTitleName = $("title" + i).val();
              newValueName = $("value" + i).val();
            }
          }
          localStorage.setItem("profdata", newObj);
        }
      }
    }
    setTimeout(function () {
      $("#background-pic").hide();
      $("#scanFile").hide();
      $(".datas").hide();

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
      $(".back").click(function () {
        $(".datas").hide();
        $(".dataBtn").show();
        return false;
      });
      $(".envls").click(function () {
        var img = $("img", this);
        var imgWidth = img.attr("width");
        var imgHeight = img.attr("height");
        var imgsrc = img.attr("src");
        pic = saveImage(imgsrc);
        picHeight = imgHeight;
        picWidth = imgWidth;
        i();
        return false;
      });
      new Image().src = "" + pic;
      var i = function () {
        color = $(".BGColor").val();
        text = $(".textColor").val();
        setData();
        setTimeout(function () {
          for (let i = 1; i <= $(".editlist li").length; i++) {
            if ($("editText" + i)) {
              if ($(".editlist li").length > 5) {
                var harf = $(".editlist li").length / 2;
                if (i === 1) {
                  left.concat(
                    $(".title" + i).val() + "\t" + $(".value" + i).val()
                  );
                } else if (i === harf) {
                  left.concat(
                    $(".title" + i).val() + "\t" + $(".value" + i).val()
                  );
                } else if (i <= harf) {
                  if (i === harf) {
                    right.concat(
                      $(".title" + i).val() + "\t" + $(".value" + i).val()
                    );
                  } else {
                    right.concat(
                      "\n" +
                        $(".title" + i).val() +
                        "\t" +
                        $(".value" + i).val()
                    );
                  }
                } else {
                  right.concat(
                    "\n" + $(".title" + i).val() + "\t" + $(".value" + i).val()
                  );
                }
              } else {
                if (i === 1) {
                  left.concat(
                    $(".title" + i).val() + "\t" + $(".value" + i).val()
                  );
                } else if (i === $(".editlist li").length) {
                  left.concat(
                    "\n" + $(".title" + i).val() + "\t" + $(".value" + i).val()
                  );
                } else {
                  left.concat(
                    "\n" + $(".title" + i).val() + "\t" + $(".value" + i).val()
                  );
                }
              }
            }
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
          var leftX = 50; // 水平位置
          var leftY = 50; // 垂直位置
          var rightX = 50; // 水平位置
          var rightY = 50; // 垂直位置

          m.font = "bold " + o + " boku2";
          for (
            var lines = String(left).split("\n"), i = 0, l = lines.length;
            l > i;
            i++
          ) {
            var line = lines[i];
            var addY = fontSize;

            // 2行目以降の水平位置は行数とlineHeightを考慮する
            if (i) addY += fontSize * lineHeight * i;

            m.fillText(line, leftX + 0, leftY + addY);
          }
          for (
            var lines = String(right).split("\n"), i = 0, l = lines.length;
            l > i;
            i++
          ) {
            var line = lines[i];
            var addY = fontSize;

            // 2行目以降の水平位置は行数とlineHeightを考慮する
            if (i) addY += fontSize * lineHeight * i;

            m.fillText(line, rightX + 0, rightY + addY);
          }
          var a = new Image();
          (a.src = "" + pic),
            m.drawImage(
              a,
              prof.width - 150,
              prof.height - 150,
              picWidth,
              picHeight
            );

          var imgT = document.getElementById("preview");
          imgT.src = prof.toDataURL();
        }, 50);
      };
      window.i = i;
      m.fillStyle = "" + color;
      m.fillRect(0, 0, 450, 300);
      m.fillStyle = "" + text;
      m.rect(15, 15, 370, 170);
      m.lineWidth = 8;
      m.stroke();
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
      $(".BGcolorBtn").click(function () {
        $(".BGcolor").val($(this).attr("value"));
        return false;
      });
      $(".TextColorBtn").click(function () {
        $(".textColor").val($(this).attr("value"));
        return false;
      });
      $(".BGcolor").change(function () {
        (color = $(this).val()), i();
      }),
        $(".textColor").change(function () {
          (text = $(this).val()), i();
        }),
        i();
    }),
      file.addEventListener("change", function (e) {
        var t = file.target.files[0];
        if (t.type.match("image.*")) {
          var n = new FileReader();
          (n.onload = function () {
            (pic = saveImage(n.result)), i();
          }),
            n.readAsDataURL(t);
        } else alert("画像を選択してください");
      });
    $("#cookieClear").click(function () {
      localStorage.setItem("profdata", null);
      localStorage.setItem("profImg", null);
      return false;
    });
    $(".addBtn").click(function () {
      if ($(".editlist > li").length === 10) {
        alert("これ以上 行を追加できません");
      } else {
        var nam = $(".editlist > li").length() + 1;
        var elem =
          '<li class="editText' +
          nam +
          '">' +
          '<input type="text" class="title' +
          nam +
          '" value="名前" /><a' +
          'href="#"' +
          'class="deleteBtn"' +
          '><input type="text" class="value' +
          nam +
          '" /><i' +
          'class="far fa-times-circle"' +
          "></i></a></li>";
        $(".editlist").append(elem);
      }
      return false;
    });
    $(".deleteBtn").click(function () {
      if ($(".editlist > li").length === 1) {
        alert("行が無くなるため削除できません");
      } else {
        var thisclass = $("this").attr("class");
        $(this)
          .parent()
          .parent()
          .find("." + thisclass)
          .remove();
        for (let i = 1; i <= $(".editlist > li").length; i++) {
          var oldClass = $(".editlist > li")[i].attr("class");
          $(".editlist li")[i].removeClass(oldClass);
          $(".editlist li")[i].addClass("editText" + i);
        }
        return false;
      }
    });
  });
}
