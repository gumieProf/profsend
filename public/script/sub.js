$(function() {
  $("#snsDataBtn").click(function() {
    var div = $("#snsData");
    var elems =
      '<div class="input-field col s12">' +
      '<input type="text" name="formSNS" id="sns" class="wrap"  maxlength="25" onkeyup="document.getElementById("sns-leng").value=this.value.length" placeholder="">' +
      '<label for="sns">SNS情報：</label>' +
      "</div>" +
      '<div class="input-field col s12">' +
      "<br />" +
      '<input type="text" id="sns-leng" readonly></input>' +
      '<label for="genzainomojisuB">現在の文字数</label>' +
      "</div>" +
      "</div>";
    if ($("#sns")[0]) {
      div.empty();
    } else {
      div.html(elems);
    }
  });
});
