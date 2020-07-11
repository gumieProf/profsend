import Tesseract from 'tesseract.js'
$(function () {
  $("#scanFile").change(function (e) {

    var scanImage = $(this)[0].files[0];
    if (scanImage) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#preview").attr('src', e.target.result);
      }
      reader.readAsDataURL(e.target.files[0]);
      $("#preview").attr('src', scanImage);
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
          $("#loading").text("実行完了！");
          $("#scanData").text(ris);
        })
      return false;
    }
  })
});
