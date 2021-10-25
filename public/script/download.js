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
      let canvas = document.getElementById("prof");
      let link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "prof.png";
      link.click();
      return false;
    });
    $("#windl").click(function () {
      var canv = document.getElementById("prof");
      var dlcanv = document.createElement("canvas");
      dlcanv.width = 1920;
      dlcanv.height = 1080;
      var dlctx = dlcanv.getContext("2d");
      var dlimg = new Image();
      dlimg.src = canv.toDataURL("image/png");
      dlctx.drawImage(dlimg, 0, 0, 960, 540, 0, 0, 1920, 1080);
      setTimeout(() => {
        let link = document.createElement("a");
        link.href = dlcanv.toDataURL("image/png");
        link.download = "prof-window.png";
        link.click();
      }, 50);
      return false;
    });
    $("#smtdl").click(function () {
      var dlcanv = document.getElementById("SMTprof");
      setTimeout(() => {
        let link = document.createElement("a");
        link.href = dlcanv.toDataURL("image/png");
        link.download = "prof-smart.png";
        link.click();
      }, 50);
      return false;
    });
  });
}
