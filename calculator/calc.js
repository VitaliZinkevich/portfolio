$( document ).ready(function() {

var valueButtons = document.querySelectorAll('.value');
for (i=0; i<valueButtons.length; i++) {
    valueButtons[i].addEventListener ('click', valueToInp);
    }


})


function valueToInp(){

    //alert ('y');
    var inp = document.getElementById ('mailView');

    inp.value = inp.value + this.innerHTML;

    }

function clearInp(){

    var inp = document.getElementById ('mailView');
    inp.value = '';
    }

function goCount(){
    var inp = document.getElementById ('mailView');
    var result = 0;
    var forCount ='';
    forCount = String (inp.value)

    //alert (forCount);


    result = eval (forCount);

    inp.value = result;


    }
