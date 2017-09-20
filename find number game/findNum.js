$( document ).ready(function() {

window.clicks = 0;

})


function goGame(){
    window.clicks = 0;
    var line = document.getElementById ('lines');
    var colum = document.getElementById ('colums');
    var timer = document.getElementById ('time');

    if (isNaN (line.value)){
        alert ('введите число строк');
        return
        }
    if (isNaN (colum.value)){
        alert ('введите число столбцов');
        return
        }

    if (isNaN (timer.value)){
        alert ('введите число, секунд');
        return
        }

    var fontsize = ["38px", "20px", "28px", "14px"];
    var color = ["red", "green","blue", "grey"];
    var fontW = [700, 400, 900, 100];
    var fontFamily = ['Georgia', 'Times New Roman' ,'Helvetica','Geneva'];


    var table = document.createElement ('table');
    table.id='palayTable';
    var field = document.getElementById ('playGround');

    var numbers = [];

    for (i=0; i< Number (line.value)*Number (colum.value);i++) {

        numbers.push (i);

        }



    function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

        shuffle(numbers);
        var n = 0;

    for (i = 1; i <= line.value ; i++) {

        var tr = document.createElement ('tr');

            for (j=1;j<=colum.value;j++) {

                var td = document.createElement ('td');

                td.innerHTML = numbers[n];
                n++;

                var x = Math.floor(Math.random() * (4 - 1 + 1));
                var y = Math.floor(Math.random() * (4 - 1 + 1));
                var z = Math.floor(Math.random() * (4 - 1 + 1));
                var a = Math.floor(Math.random() * (4 - 1 + 1));

                td.style.color = color[x];
                td.style.fontSize = fontsize[y];
                td.style.fontWeight = fontW[z];
                td.style.fontFamily = fontFamily[a];

                td.style.textAlign='center';
                td.style.verticalAlign='middle';

                td.style.width = '50px';
                td.style.height = '50px';

                td.style.border = '1px solid black';

                tr.appendChild (td);
                }

         table.appendChild (tr);
        }

        field.appendChild (table);


    var ps= document.getElementById ('timerP');
    ps.innerHTML=timer.value ;
     ps.style.width = '100px';
     ps.style.height = '50px';
     ps.style.border = '1px solid black';
     ps.style.fontSize = '40px';
     ps.style.textAlign='center';



    var all = document.getElementById ('start');
    all.style.display = 'none';

    window.gameTimer = window.setInterval (goTimer, 1000);

    var field = document.getElementById ('playGround');
    var contr = document.getElementById ('controls');
        field.style.display = 'block';
        contr.style.display = 'block';
    }



function goTimer (){

    var ps= document.getElementById ('timerP');
    ps.innerHTML = Number (ps.innerHTML) - 1 ;

    var tab = document.getElementById ('palayTable');
    tab.addEventListener ('click', checkWinFlow);

    if (Number (ps.innerHTML)<0) {

        alert ('время истекло - нужно быстрее');
        window.clearInterval(window.gameTimer);

        var field = document.getElementById ('playGround');
        var tabl = document.getElementById ('palayTable');
        var contr = document.getElementById ('controls');
        var all = document.getElementById ('start');

        field.style.display = 'none';
        all.style.display = 'block';
        contr.style.display = 'none';
        field.removeChild (tabl);
        ps.innerHTML = "";


        }

    }





function checkWinFlow(event){


    var arr = [];

    var line = document.getElementById ('lines');
    var colum = document.getElementById ('colums');

      var numbers = [];

    for (i=0; i< Number (line.value) * Number (colum.value);i++) {

        numbers.push (i);

        }

    // есть массив, созданный для заполнения ячеек таблицы, не перемешанный

    // логика
    var td = event.target.closest ('td');

    if (td) {
        /*
        alert (window.clicks);
        alert (td.innerHTML);
        alert ((numbers[window.clicks] == td.innerHTML));
        alert (numbers.length);
        alert ((window.clicks+1 == numbers.length));
        */

        if (numbers[window.clicks] == td.innerHTML) {

                td.style.backgroundColor = "purple";
                    window.clicks++;
            }

    }



        if (window.clicks == numbers.length) {

            alert ('Это ПОБЕДА! Это Успех!');

            window.clearInterval(window.gameTimer);
            var field = document.getElementById ('playGround');
            field.style.display = 'none';

            var all = document.getElementById ('start');
            all.style.display = 'block';

            var contr = document.getElementById ('controls');
            contr.style.display = 'none';

            var tab = document.getElementById ('palayTable');
            field.removeChild (tab);








            // второй раз после выигрыша, не работает лишняя таблица и нет слушателя
            // нет слушателя
        }
}


