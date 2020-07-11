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
          var rismat = ris.match(/[A-Zあ-ん:]+[A-Zあ-ん]/g);
          $("#loading").text("実行完了！");
          for (let i = ris.length; i > 0; i = -1) {
            var rismat1 = rismat.slice(rismat.match(/[A-Zあ-ん: ]/));
            var rismat2 = rismat.slice(rismat.match(/[A-Zあ-ん]/));
            $("#scanData>ul").html("<li>" + rismat1[i] + "</li>");
            $("#scanData>ul").html("<li>" + rismat2[i] + "</li>");
          }
        })
      return false;
    }
  })
});
