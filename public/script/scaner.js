import Tesseract from 'tesseract.js'
$(function () {
  var userAgent = window.navigator.userAgent;
  $("#scanFile").change(function (e) {

    var scanImage = $(this)[0].files[0];
    if (scanImage) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#preview").attr('src', e.target.result);
      }
      reader.readAsDataURL(e.target.files[0]);
      Tesseract.recognize(
        scanImage,
        'jpn',
        {
          logger: p => $("#loading").text(p.status + ":" + Math.round(p.progress * 100) + "%")
        }
      )
        .then(result => {
          var ris = result.data.text;
          console.log(ris);
          var rismatch = ris.match(/[a-zA-Z]{0,}: [a-zA-Z0-9あ-ん]{0,}/g);
          console.log(rismatch);
          if ($.isArray(rismatch)) {
            for (let i = 0; index < rismatch.length; i++) {
              var risnam = rismatch[i].match(/[a-zA-Z]{0,}:/);
              var risval = rismatch[i].match(/[A-Za-z]{0,}/);
              $("#scanData > ul").html("<li><strong>" + risnam + "</strong></li>");
              $("#scanData > ul").html("<li>" + risval + "</li>");
            }
          }
          $("#loading").text("実行完了！");
        })
      return false;
    }
  })
});
