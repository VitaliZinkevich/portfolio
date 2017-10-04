$( document ).ready(function() {
m = date.getMonth();
writeMonth();



$('#next').on ('click', nextM);
$('#back').on ('click', backM);

})

var month = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];

var date = new Date(), y = date.getFullYear(), m = date.getMonth(), currentMonth = date.getMonth(), today = date.getDate();



//alert (firstDay); // Fri Sep 01 2017 00:00:00 GMT+0300
//alert (lastDay);  // Sat Sep 30 2017 00:00:00 GMT+0300

    function nextM(){

        m = m+1;

        if (m==12) {

            m=0;
            y=y+1;
        }
        $('table').remove();
        $('#current').text(month[m] + ' год ' + y);
        writeMonth();
    }


    function backM(){

        m = m-1;

        if (m == -1) {

            m=11;
            y=y-1;
        }
        $('table').remove();
        $('#current').text(month[m] + ' год ' + y);
        writeMonth();
    }

function writeMonth(){

    var firstDay = new Date(y, m, 1).getDay().toString();
    var lastDay = new Date(y, m + 1, 0).toString();

    lastDay = lastDay.slice (8, 10);

    var weakDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    $('#forTable').append ('<table></table>').find ('table').attr('id', 'tab'); // создадим таблицу
    $("#tab").append ('<tr></tr>'); // заглавная строка
    //$("#tab").attr ('class', 'table-inverse table-bordered table-sm');


for (i=0;i<weakDays.length; i++) { // заглавная строка заполним

    $("tr").append('<td>'+weakDays[i]+'</td>');

}
// разнесем даты скординируем по дням недели и вставим к таблице

for (i=1;i<7;i++){

    $('#tab').append ('<tr></tr>');

    //alert (today);

    for (j=1;j<8;j++) {

            $("tr:eq("+i+")").append('<td class =\'valuetd \'></td>');

        }
    $('#tab').append ($("tr:eq("+i+")"));
}

// заполняем даты

    var n = 1;


    //alert (firstDay);






    firstDay = firstDay - 1;


    if (firstDay == -1) {

        firstDay = 6;


    }
        //alert (firstDay);
    $('td.valuetd').slice (firstDay).each (function (){ // в выборе 1 го дня весь гемор

        if (n<=lastDay) {
            // подсветить сегодня проверить дату и месяц реализовать смену на активную ячейку
            if (n == today && m == currentMonth) {

                $(this).css ('backgroundColor', 'green');
            }

            $(this).text (n);
        n++;
        }
        else {


            $(this).text ("");

        }


    });
    $('#current').text(month[m] +' год ' + y);
    addActive();
}

function addActive() {

    $('td').on ('click', function (){


    //$('.active').toggleClass ('active');

    $(this).toggleClass ('active');

    var arr = $('.active').toArray();


    if (arr.length >= 1){

    $('.active').toggleClass ('active');
    $(this).toggleClass ('active');
    }



})
}
/*
:gt(no)     $("ul li:gt(3)")    List elements with an index greater than 3
:lt(no)     $("ul li:lt(3)")    List elements with an index less than 3
*/




