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
      var name = $("#name").val();
      if (name === null || name === "") {
        alert("名前が抜けています。");
      } else {
        var dlcanv = document.createElement("canvas");
        dlcanv.width = 1920;
        dlcanv.height = 1080;
        setTimeout(() => {
          var o = "100px";
          read(dlcanv);
          let link = document.createElement("a");
          link.href = prof.toDataURL("image/png");
          link.download = "prof-window.png";
          link.click();
        }, 50);
      }
      return false;
    });
    $("#smtdl").click(function () {
      var name = $("#name").val();
      if (name === null || name === "") {
        alert("名前が抜けています。");
      } else {
        var dlcanv = document.getElementById("SMTprof");
        setTimeout(() => {
          let link = document.createElement("a");
          link.href = prof.toDataURL("image/png");
          link.download = "prof-smart.png";
          link.click();
        }, 50);
      }
      return false;
    });
  });
}
