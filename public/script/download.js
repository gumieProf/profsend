export default function download() {
  $(function () {
    $("#download").click(function () {
      var name = $("#name").val();
      $("#name, #id, #age, #coment").on("keyup", function () {
        var name = $("#name").val();
      });

      if (name == null || name == "") {
        alert("名前が抜けています。");
      } else {
        let canvas = document.getElementById("prof");

        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "prof.png";
        link.click();
      }
      return false;
    });
  });
}
