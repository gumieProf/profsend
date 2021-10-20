export default function sub() {
  $(function () {
    $("#snsData").hide();
    $(".profelem").on({
      keydown: window.i,
      chenge: window.i,
    });

    $("#snsDataBtn").click(function () {
      $("#snsData").fadeToggle(100);
      return false;
    });
  });
}
