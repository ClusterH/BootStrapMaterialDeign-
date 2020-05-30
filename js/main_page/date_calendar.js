$(document).ready(function () {
    let calendar = new VanillaCalendar({
        selector: "#filter_date_calendar"
    })

    calendar.set({datesFilter: false});
});