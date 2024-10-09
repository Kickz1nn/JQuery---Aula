window.onload = function () {
    //
    let h = document.getElementsByTagName("h1");
    h[0].style.color = "#fff";
    h[0].style.backgroundColor= "#008080";
    h[0].style.fontSize = "4em";

    //h[1].style.color = "#008080";
}

$(document).ready(function () {

    //referencia
    $("#jx").css("color", "red");
    //$("p:first").css({
        $("p").eq(1).css({
        "background-color": "black",
        "color": "white",
        "font-size": "1.5em"
    })
})  