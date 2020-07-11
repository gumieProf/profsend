import Tesseract from 'tesseract.js'
$(function () {
  $("#scanFile").change(function () {

    var scanImage = $(this)[0].files[0];

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
        var matchrs = ris.match(/[[a-zA-Zあ-ん]:+[0-9a-zA-Z]{9,25}]{2,}/g);
        matchrs.slice(4);
        $("#loading").text("実行完了！");
        console.log(matchrs);
        $("#scanData").text(matchrs).select();
        document.execCommand("copy");
        process.exit()
      })
    return false;
  })
});
