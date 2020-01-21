$(function() {
  $("#snsDataBtn").click(function() {
    var div = $("#snsdata");
    var elems =
      '<div class="input-field col s12">' +
      "<br />" +
      '<input type="text" id="id-leng" readonly></input>' +
      '<label for="genzainomojisuB">現在の文字数</label>' +
      "</div>" +
      "</div>";
    div.html(elems);
  });
});
