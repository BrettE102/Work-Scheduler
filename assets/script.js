$(document).ready(function(){
    var hours = [{
        time:"9am"        
    },
    {
        time:"10am"        
    },
    {
        time:"11am"        
    },
    {
        time:"12pm"        
    },
    {
        time:"1pm"        
    },
    {
        time:"2pm"        
    },
    {
        time:"3pm"        
    },
    {
        time:"4pm"        
    },
    {
        time:"5pm"        
    },
]
    
    var calendarItems = [{
        timeSlot: "9am",
        event: "Kids Birthday"
    },
    {
        timeSlot: "1pm",
        event: "Work meeting"
    }]
    localStorage.setItem("calendar_items", JSON.stringify(calendarItems));
   

    //Get calendar items from local storage
    $.each(hours, function(i, hourItem){
        var currentTimeSlotEvent;
       
        $.each(calendarItems, function(i, calendarItem){
            if(calendarItem.timeSlot == hourItem.time){
               
                currentTimeSlotEvent = calendarItem.event;
            }


        });
        var id = "calender-save-" + hourItem.time;

        var textId = "calendar-text-" + hourItem.time;
        var htmlString = "<div class='row calendar-row'>" +
                            "<div class='col-md-1'>" + hourItem.time + "</div>" +
                            "<div class='col-md-10'><textarea id='" + textId + "'>" + currentTimeSlotEvent +"</textarea></div>" +
                            "<div class='col-md-1' id='" + id  +"'></div>" +
                            "</div>";
        $('#calendar-container').append(htmlString);

        $("#" + id).click(function(){
            saveCalendarItem(hourItem.time);
        })
    });
});

function saveCalendarItem(timeSlot){
    var calendarItems =  JSON.parse(localStorage.getItem("calendar_items"));
    console.log($('#calendar-text-' + timeSlot).text());
    calendarItems.push({
        timeSlot: timeSlot,
        event: $('#calendar-text-' + timeSlot).val()
    });

    localStorage.setItem("calendar_items", JSON.stringify(calendarItems));

}
