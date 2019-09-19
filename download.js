document.getElementById("download").onclick = (event) => {
var name = $("#name").val();
var id = $("#id").val();
$("#name, #id, #age, #coment").on("keyup",function(){
var name = $("#name").val();
var id = $("#id").val();
});

if ( name == null || name == "" && id == null || id == ""){
alert ("名前とIDが抜けています。");
} else if (name == null || name == "" || id == null || name == ""){
alert ("名前とIDのいずれかが抜けています。");
} else {
    let canvas = document.getElementById("prof");

    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "prof.png";
    link.click();
  }
 }
