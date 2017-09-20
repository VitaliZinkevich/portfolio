$( document ).ready(function() { // НЕ СТАВВИТЬ ЗНАЧЕНИЯ В УЖЕ ЗАПОЛНЕННЫЕ ЗНАЧЕНИЯ

var table = document.getElementById ('playGround');
table.addEventListener ('click',putSignX);

})



function putSignX (event) {

    var td = event.target.closest('td');

    if (td) {
    if (td.innerHTML == "X" ||  td.innerHTML == "O" ){

        return
    }
    td.innerHTML = 'X';
        }

    var table = document.getElementById ('playGround');
    table.removeEventListener ('click', putSignX);
    table.addEventListener ('click', putSignO);
    checkForWininLines()
    }

function putSignO(event){

    var td = event.target.closest('td');

    if (td) {
    if (td.innerHTML == "X" ||  td.innerHTML == "O" ){

        return
    }

        td.innerHTML = 'O';
        }


    var table = document.getElementById ('playGround');
    table.removeEventListener ('click', putSignO);
    table.addEventListener ('click', putSignX);
    checkForWininLines()

}


var game = 0;

function checkForWininLines(){

        var line = document.getElementsByTagName ('tr');
        var arr = [];

        for (i=0; i<line.length; i++){ // собираем массив значений



            for (j=0;j<line[i].children.length;j++){

                arr.push(line[i].children[j].innerHTML);

                }

            }

            game++;
            // проверка на выигрыш по собранным значениям
            // очень хотелось написать
           if ( arr[0]== 'X' && arr[1]=='X' && arr[2]=='X' ||
                arr[3]== 'X' && arr[4]=='X' && arr[5]=='X' ||
                arr[6]== 'X' && arr[7]=='X' && arr[8]=='X' ||
                arr[0]== 'X' && arr[4]=='X' && arr[8]=='X' ||
                arr[2]== 'X' && arr[4]=='X' && arr[6]=='X' ||
                arr[0]== 'X' && arr[3]=='X' && arr[6]=='X' ||
                arr[1]== 'X' && arr[4]=='X' && arr[7]=='X' ||
                arr[2]== 'X' && arr[5]=='X' && arr[8]=='X'
                ) {

               alert ("победа КРЕСТИКА");

                // очистить поле

              for (i=0; i<line.length; i++){
                        for (j=0;j<line[i].children.length;j++){
                        line[i].children[j].innerHTML = '';
                }
              }


                // внести счет

                var x = document.getElementById ('xWin');
                x.innerHTML = Number (x.innerHTML) + 1;

                // обнулить счетчик кликов game

                game = 0;





               }

            if (arr[0]== 'O' && arr[1]=='O' && arr[2]=='O' ||
                arr[3]== 'O' && arr[4]=='O' && arr[5]=='O' ||
                arr[6]== 'O' && arr[7]=='O' && arr[8]=='O' ||
                arr[0]== 'O' && arr[4]=='O' && arr[8]=='O' ||
                arr[2]== 'O' && arr[4]=='O' && arr[6]=='O' ||
                arr[0]== 'O' && arr[3]=='O' && arr[6]=='O' ||
                arr[1]== 'O' && arr[4]=='O' && arr[7]=='O' ||
                arr[2]== 'O' && arr[5]=='O' && arr[8]=='O'
           ) {

               alert ("победа НОЛИКА");

                for (i=0; i<line.length; i++){
                        for (j=0;j<line[i].children.length;j++){
                        line[i].children[j].innerHTML = '';
                }
              }


                // внести счет

                var o = document.getElementById ('oWin');
                o.innerHTML = Number (o.innerHTML) + 1;

                // обнулить счетчик кликов game

                game = 0;

               }





        if(game == 9){


            alert ('НИЧЬЯ');

            for (i=0; i<line.length; i++){
                        for (j=0;j<line[i].children.length;j++){
                        line[i].children[j].innerHTML = '';
                }
              }


                // внести счет

                var d = document.getElementById ('draw');
                d.innerHTML = Number (d.innerHTML) + 1;

                // обнулить счетчик кликов game

                game = 0;

            }





        }



