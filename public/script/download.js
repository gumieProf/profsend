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

export default function download() {
  $(function () {
    $("#download").click(function () {
      var name = $("#name").val();
      $("#name, #id, #age, #coment").on("keyup", function () {
        var name = $("#name").val();
      });

      if (name == null || name == "") {
        alert("名前が抜けています。");
      } else {
        let canvas = document.getElementById("prof");

        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "prof.png";
        link.click();
      }
      return false;
    });
    $("#windl").click(function () {
      var dlcanv = document.createElement("canvas");
      dlcanv.width = 1920;
      dlcanv.height = 1080;
      setTimeout(() => {
        var o = 100;
        var id = $("#id").val();
        var age = $("#age").val();
        var coment = $("#coment").val();
        var sns = $("#snsText").val();
        var name = $("#name").val();
        var prof = dlcanv;
        var m = prof.getContext("2d");
        var e = document.getElementById("file");
        var color = $("#colors").val();

        var text = $("#textColor").val();

        var comentif = coment == null || typeof coment == "undefined" ||
          coment == "";
        var snsif = sns == null || typeof sns == "undefined" || sns == "";
        var ageif = age == null || typeof age == "undefined" || age == "";

        if (comentif && snsif && ageif) {
          var e = "ユーザー名:\t" + name + "\nID: \t" + id;
        } else if (comentif && snsif) {
          var e = "ユーザー名:\t" + name + "\nID: \t" + id + "\n 年齢: \t" + age;
        } else if (ageif && snsif) {
          var e = "ユーザー名:\t" + name + "\nID: \t" + id + "\nコメント: \t" + age;
        } else if (ageif && comentif) {
          var e = "ユーザー名:\t" + name + "\nID: \t" + id + "\nSNS: \t" + sns;
        } else if (ageif) {
          var e = "ユーザー名:\t" +
            name +
            "\nID: \t" +
            id +
            "\nコメント: \t" +
            coment +
            "\nSNS: \t" +
            sns;
        } else if (comentif) {
          var e = "ユーザー名:\t" +
            name +
            "\nID: \t" +
            id +
            "\n 年齢: \t" +
            age +
            "\nSNS: \t" +
            sns;
        } else if (snsif) {
          var e = "ユーザー名:\t" +
            name +
            "\nID: \t" +
            id +
            "\n 年齢: \t" +
            age +
            "\nコメント: \t" +
            coment;
        } else {
          var e = "ユーザー名:\t" +
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

        m.clearRect(0, 0, prof.width + 100, prof.height + 100);
        m.beginPath();
        m.fillStyle = "" + color;
        m.fillRect(0, 0, prof.width + 100, prof.height + 100);
        m.fillStyle = "" + text;
        m.rect(15, 15, prof.width - 30, prof.height - 30);
        m.lineWidth = 8;
        m.stroke();
        var fontSize = 10; // フォントサイズ
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
          (a.src = "" + pic), m.drawImage(a, 320 * 5, 130 * 5, 50 * 5, 50 * 5);
        }
        let link = document.createElement("a");
        link.href = prof.toDataURL("image/png");
        link.download = "prof-window.png";
        link.click();
      }, 50);
      return false;
    });
  });
}
