$( document ).ready(function() {

$('#string').on ('blur', reverseString);
$('#fact').on ('blur', factorial);


})

function reverseString(){

    var str = $('#string').val();

    str = str.split("").reverse().join("");

    $('#stringRev').text(str);

        }






function factorial(){

    var num = $('#fact').val();

    var res = 1;

    for (i=1;i<=num;i++) {
        res = res * i;
        }
    $('#res').text(res);

    }





