$( document ).ready(function() {



  $( function() {
    $( "#accordion" ).accordion({


       classes: {"ui-accordion": "highlight"},
       icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },


        collapsible: true,
        active: false,
        animate: 300,
        heightStyle: "auto"

       //"disabled": true

    });
  } );

//$( "#accordion" ).accordion( "refresh" );
//$( ".accordion" ).accordion( "option", "icons", { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" } );


  $( function() {
    $( "#datepicker" ).datepicker({

        dateFormat: "dd.mm.yy",

        });
  } );

$('#bday').on ('click', function (){


    $( "#datepicker" ).datepicker( "setDate", "03.09.1986" );
    })
$('#showC').on ('click', function (){


    $( "#datepicker" ).datepicker( "show" );
    })
$('#hideC').on ('click', function (){


    $( "#datepicker" ).datepicker( "hide" );
    })




$( function() {
    $( "#tabs" ).tabs({
        event: "click",
        collapsible: true
        }
    );
  });


  $( function() {
    $( "#dialog" ).dialog({
        //"appendTo": "#accordion",
        'autoOpen': false,
        //"dialogClass": "alert"
        "modal": true,

        });
  } );




$( "#dialog2" ).dialog({
  'dialogClass': "no-close",

  position: { my: "center", at: "left top", of:'#but' },
  buttons:{
                        "Кнопка Ok": function(){
                            alert('Вы нажали на кнопку OK - сейчас окно закроется!');
                            $(this).dialog( "close" );
                        },
                        "Кнопка No": function(){
                            alert('Вы нажали на кнопку No!');
                        },
                        "Мне все равно": function(){
                            alert('Вам все равно, удалять эти файлы или нет!');
                        }
                        },
/*
buttons: [

    {
      text: "OK",
      click: function() {
        alert ('закроем окно')
        $( this ).dialog( "close" );

      }

    }
  ],
*/
  'autoOpen': false


});



$('#but'). on ('click', function (){
    $("#dialog2").dialog( 'open');
    //$( "#accordion" ).accordion( "refresh" );
    });

$('#but1'). on ('click', function (){
    //$("#dialog2").dialog( 'open');
    //$( "#accordion" ).accordion( "refresh" );
    alert ('y');
    });
// подсказки не работают
$( function() {
    $( document ).tooltip();
  } );

})



