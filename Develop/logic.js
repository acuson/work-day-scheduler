// Displays current date
var currentDay = moment().format('MMMM Do, YYYY');
$('#currentDay').text(currentDay);

//On click of saveBtn, will save to local storage
$('.saveBtn').on('click', function() {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');    
    
    localStorage.setItem(time, text);
})

//Getting item from each hour to be saved in local storage
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
$("#hour19 .description").val(localStorage.getItem("hour19"));
$("#hour20 .description").val(localStorage.getItem("hour20"));
$("#hour21 .description").val(localStorage.getItem("hour21"));
$("#hour22 .description").val(localStorage.getItem("hour22"));

//Changes background color based on if it's past, present, or future
function timeTracker () {

    var currentTime = moment().hour();

    $('.time-block').each(function () {
        var blockTime = parseInt($(this).attr('id').split('hour')[1]);
        console.log( blockTime, currentTime)
    });

    if (currentTime === blockTime) {
        $('.description').addClass('present');
        $('.description').removeClass('past');
        $('.description').removeClass('future');
    } else if (currentTime < blockTime) {
        $('.description').addClass('past');
        $('.description').removeClass('present');
        $('.description').removeClass('future');
    } else {
        $('.description').addClass('future');
        $('.description').removeClass('past');
        $('.description').removeClass('present');
    }
}

timeTracker ();