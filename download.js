document.getElementById("download").onclick = (event) => {
    let canvas = document.getElementById("prof");

    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "prof.png";
    link.click();
 }
