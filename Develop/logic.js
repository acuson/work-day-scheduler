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

// Potential for loop for refactoring
// var hour = $(document.querySelector('.hour'));

// for (let i=7; i < hour.length; i++) {
    
// `$(hour${i} .description).val(localStorage.getItem(hour${i}))`
// };

//Changes background color based on if it's past, present, or future
function timeTracker() {
        
    var currentTime = moment().hour();
        $('.time-block').each(function () {
            var timeSlot = parseInt($(this).attr('id').split('hour')[1]);
            console.log( timeSlot, currentTime)
            
            if (timeSlot < currentTime) {
                $(this).addClass('past');
                $(this).removeClass('future');
                $(this).removeClass('present');
            }
            else if (timeSlot === currentTime) {
                $(this).addClass('present');
                $(this).removeClass('future');
                $(this).removeClass('past');
            }
            else {
                $(this).addClass('future');
                $(this).removeClass('past');
                $(this).removeClass('present');
            }
        })
    }
    timeTracker();
