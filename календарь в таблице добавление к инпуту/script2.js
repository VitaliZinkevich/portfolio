$( document ).ready(function() {

$('input').on ('focus', function (){

    if ($('#forTable')) {

            //alert ($('#forTable'))


            $('#forTable').remove();
            $('#current').remove();

        }



    writeMonth()});


})

var date = new Date(), y = date.getFullYear(), m = date.getMonth(), currentMonth = date.getMonth(), today = date.getDate();

function nextM(){

        m = m+1;

        if (m==12) {

            m=0;
            y=y+1;
        }


       $('#forTable').remove();
       $('#current').remove();

        writeMonth();
    }


    function backM(){

        m = m-1;

        if (m == -1) {

            m=11;
            y=y-1;
        }
       $('#forTable').remove();
       $('#current').remove();

        writeMonth();
    }


function writeMonth(){

//~ var date = new Date(), y = date.getFullYear(), m = date.getMonth(), currentMonth = date.getMonth(), today = date.getDate();

    var firstDay = new Date(y, m, 1).getDay().toString();
    var lastDay = new Date(y, m + 1, 0).toString();

    lastDay = lastDay.slice (8, 10);

var weakDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    $('#inp').after ('<div id = \'forTable\'></div>');
    $('#forTable').append ('<table></table>').find ('table').attr('id', 'tab'); // создадим таблицу
    $('#forTable').after ('<div id = \'current\'></div>');

    $('#forTable').append ('<button id=\'back\'>Месяц назад</button>')
    $('#forTable').append ('<button id=\'next\'>Месяц вперед</button>')
    $('#forTable').append ('<button id=\'done\'>ГОТОВО</button>').find ('#done').css ('margin-left', '75px');

    $('#next').on ('click', nextM);
    $('#back').on ('click', backM);
    $('#done').on ('click', function (){

       $('#forTable').remove();
       $('#current').remove();

        });


//~ $('#next').on ('click', nextM);
//~ $('#back').on ('click', backM);

    $("#tab").append ('<tr></tr>'); // заглавная строка



var month = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];

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


    if (arr.length >= 3){

    $('.active').toggleClass ('active');
    $(this).toggleClass ('active');
    }



})
}
