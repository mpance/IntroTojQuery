'use strict';

$(document).ready(init);

var number = 3;
var valueTracker = [];

function init(){
    console.log('ready!');
    $('#outerHolder').on('click','.person', clickCup);
    $('#outerHolder').on('click','.holder', clickHolder);
    $('#addItems').click(addItems);
}

function clickHolder(event) {
  $('.selected').appendTo($(this))
  debugger;
  $('.selected').removeClass('selected');
  debugger;

}

function addItems(){

    var number = $('#number').val();
    debugger;
    var $names = [];

    for(var i = 0; i < number; i++){
        debugger;
        var $person = $('<div>').addClass('person');
        // add below code to implement randomColor function
        debugger;
        $person.text(number);
        $names.push($person);
        debugger;
      }
    debugger;
    $('#left').append($names);
}

// clickCup is event handler function
function clickCup(event){

    event.stopPropagation();
    var $this = $(this);
    debugger;
    var wasSelected =$(this).hasClass('selected');
    debugger;
    $('.person').removeClass('selected'); 
    debugger;
    if (!wasSelected) {
    //if it wasn't selected before, select it
    $(this).addClass('selected');
    }

}


function randomColor(){
    var randNm =  Math.floor(Math.random() * parseInt('ffffff', 16))
    // 255
    var hexStr = randNm.toString(16);
    // ff
    return "#" + ('000000' + hexStr). slice(-6);
}




