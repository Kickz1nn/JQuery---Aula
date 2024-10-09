$("p").css({
    "border": "3px solid #000",
    "background-color":"green",
    "color" : "#fff",
}).click(function () {
        alert('NÂO');
        $(this).css("background-color", "yellow");
    }
)