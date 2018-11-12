$(document).ready(function () {
    $('#first').on('click', firstButtonHandler);
    $('#second').on('click', secondButtonHandler);

    function firstButtonHandler() {
        var count = $("#list1 li").length;
        var stroka, stroka1;
        var regexpA = /А/;
        var regexpB = /В/;
        let indx = 0;
        $("#list2 li").eq(0).html(function(indx,oldHtml){
return '<h3>A</h3>'
        }); indx++;
        $("#list2 li").eq(1).html(function(indx,oldHtml){
            return '<h3>B</h3>'
                    });
                    $("#list2 li").eq(2).html(function(indx,oldHtml){
                        return '<h3>C</h3>'
                                });
       // var regexpC = /С/;
        for (let i = 0; i < count; i++) {
            stroka = $("#list1 li").eq(i).text();
            //console.log(stroka.match(regexpA));
            if (stroka.match(regexpA)) {
                stroka1 = "<li>" + stroka + "</li><br>";
                $("#first1").append(stroka1);
            }
            else if (stroka.match(regexpB)) {
                stroka1 = "<li>" + stroka + "</li><br>";
                $("#second1").append(stroka1);
            }
            else {
                stroka1 = "<li>" + stroka + "</li><br>";
                $("#third1").append(stroka1);
            }
        }
        $("#list1").empty();
    }


    function secondButtonHandler() {
$("#second1 li").each(function(i,elem) {
let str = "second: " + $(elem).text();
$(elem).text(str);
});
$("#third1 li").each(function(i,elem) {
    let str = "third: " + $(elem).text();
    $(elem).text(str);
    });
$("#second1 li:odd").css("color", "blue");
$("#first1 li:odd").css("color", "blue");
$("#third1 li:odd").css("color", "blue");
$("#second1 li:odd").css("font-size", "larger");
$("#first1 li:odd").css("font-size", "larger");
$("#third1 li:odd").css("font-size", "larger");
    }
});