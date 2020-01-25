export default function sub() {
  $(function() {
    $("#snsDataBtn").click(function() {
      var div = $("#snsData");
      var elems =
        '<div class="input-field col s12">' +
        '<input type="text" name="formSNS" id="snsText" class="profelem"  maxlength="25" placeholder="">' +
        '<label for="snsText">SNS情報：</label>' +
        "</div>";
      if (document.getElementById("snsText") != null) {
        div.empty();
      } else {
        div.html(elems);
      }
      $(document).on("keyup", "#snsText", i);
      $(document).on("change", "#snsText", i);
    });
  });
}
