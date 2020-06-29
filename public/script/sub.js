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

export default function sub() {
  $(function () {
    var div = $("#snsData");
    var elems = '<div class="input-field col s12">' +
      '<input type="text" name="formSNS" id="snsText" class="profelem"  maxlength="25" placeholder="">' +
      '<label for="snsText">SNS情報：</label>' +
      "</div>";
    div.html(elems);
    div.hide();
    $(".profelem").on({
      "keydown": window.i,
      "chenge": window.i,
    });

    $("#snsDataBtn").click(function () {
      if (document.getElementById("snsText")) {
        div.fadeIn;
      } else {
        div.fadeOut;
      }
      i();

      return false;
    });
  });
}
