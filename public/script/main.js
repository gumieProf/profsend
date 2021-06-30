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
      m = prof.getContext("2d"),
      picHeight,
      picWidth,
      f,
      e;
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
      }
      var newObj = {};
      if (object) {
        var data = JSON.stringify(object);
        var titleName = new Function("data.title" + i)();
        var valueName = new Function("data.value" + i)();
        var newTitleName = new Function("newObj.title" + i)();
        var newValueName = new Function("newObj.value" + i)();
        $(".editList").empty();
        for (let i = 0; i < data.length(); i++) {
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
          for (let i = 0; i <= data.length(); i++) {
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
      f = document.getElementById("file");
      var i = function () {
        setData();
        setTimeout(function () {
          for (let i = 1; i <= $(".editlist li").length(); i++) {
            if (i == 1) {
              if ($("editText" + i)) {
                e = e + $(".title" + i).val() + "\t" + $(".value" + i).val();
              } else if (i === 10) {
                e = e + $(".title" + i).val() + "\t" + $(".value" + i).val();
              } else {
                e =
                  e +
                  "\n" +
                  $(".title" + i).val() +
                  "\t" +
                  $(".value" + i).val();
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
      $("#colors").change(function () {
        (color = $(this).val()), i();
      }),
        $("#textColor").change(function () {
          (text = $(this).val()), i();
        }),
        i();
    }),
      f.addEventListener("change", function (e) {
        var t = f.target.files[0];
        if (t.type.match("image.*")) {
          var n = new FileReader();
          (n.onload = function () {
            (pic = n.result), i();
          }),
            n.readAsDataURL(t);
        } else alert("画像を選択してください");
      });
    $("#cookieClear").click(function () {
      localStorage.setItem("profdata", null);
      return false;
    });
    $(".addBtn").click(function () {
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
    });
  });
}
