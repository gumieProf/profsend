import Tesseract from 'tesseract.js'
$(function () {
  $("#scanFile").change(function () {

    var scanImage = $(this)[0].files[0];

    Tesseract.recognize(
      scanImage,
      'jpn',
      {
        logger: m => {
          console.log(m);
          $("#loading").text("実行中:" + m)
        }
      }
    ).then(({ data: { idData } }) => {
      $("#loading").text("実行完了！");
      console.log(idData);
      $("#scanData").text(idData).select();
      document.execCommand("copy");

    })
  })
});
