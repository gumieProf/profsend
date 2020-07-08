import Tesseract from 'tesseract.js'
$(function () {
  $("#scanFile").change(function () {

    var scanImage = $(this)[0].files[0];

    Tesseract.recognize(
      scanImage,
      'eng',
    ).then(({ data: { idData } }) => {
      console.log(idData);
      $("#scanData").text(idData).select();
      document.execCommand("copy");

    })
  })
});
