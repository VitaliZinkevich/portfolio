$( document ).ready(function() {

    window.columnNumber;
    var arr = [];
    var arr1 = []

    $("tr:first").on ('click', function (event) {

        var selectedColumn = event.target.closest ('th');

            if (event.target.closest ('th')) {

                     $("tr:first").children().each (function (index, elem){

                                    if (selectedColumn.innerHTML == elem.innerHTML) {
                                        window.columnNumber = index;
                                        }

                                                                        })
            }

    $('tr').not (':eq(0)').each (function (){


        var tdVal = $(this).children (':eq('+window.columnNumber+')').text();


        arr.push (tdVal); // значения ЯЧЕЕК сортировки DONE
        arr1.push (tdVal); // создаем 2 массив, для первоначального сравнения состояния ячеек


        })

function compareNumbers(a, b) {
    return a - b;
}



    if (isNaN (arr[0])){    // определение необходимости численной сортировки, определяя сзначения в архиве до сорт

        arr.sort();

        }

        arr.sort(compareNumbers);




    var count = 0;
    for (i=0;i<arr.length;i++) {

            if (arr[i] == arr1[i]){
            count ++;}
        }

        if (count==arr.length){
            arr.reverse();
            }


    for (i=arr.length;i>=0;i--) {

            var childN = window.columnNumber +1;


                   $("td:nth-child("+childN+")").each (function (){

                            if ($(this).text() == arr[i]) {

                             $(this).parent().insertAfter('#firstTr');

                             }
                                        })

    }


         arr = [];
         arr1 = [];

    })

})
