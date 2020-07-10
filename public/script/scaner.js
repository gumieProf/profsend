import Tesseract from 'tesseract.js'
$(function () {
  $("#scanFile").change(function () {

    var scanImage = $(this)[0].files[0];

    Tesseract.recognize(
      scanImage,
      'jpn',
      {
      })
      .progress(function (p) {
        $("#loading").text("実行中:" + Math.round(p.progress * 100) + "%")

      })
      .then(function (result) {
        var ris = String(result.text);
        console.log(ris)
        matchrs = ris.match(/[ID:]+[0-9a-zA-Z]{9,25}/);
        matchrs.slice(4);
        $("#loading").text("実行完了！");
        console.log(matchrs);
        $("#scanData").text(matchrs).select();
        document.execCommand("copy");
        process.exit()
      })
  })
});
