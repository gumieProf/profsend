export default function sub() {
  $(function () {
    var elems =
      '<input type="text" name="formSNS" id="snsText" class="profelem"  maxlength="25" placeholder="">' +
      '<label for="snsText">SNS情報：</label>';
    $("#snsData").html(elems);
    $("#snsData").hide();
    $(".profelem").on({
      "keydown": window.i,
      "chenge": window.i,
    });

    $("#snsDataBtn").click(function () {
        $("#snsData").fadeToggle(100);
      return false;
    });
  });
}
