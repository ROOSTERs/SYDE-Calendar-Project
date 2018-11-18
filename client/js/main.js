$('#calendar').fullCalendar({
  defaultView: undefined,
  eventClick: (event, jsEvent, view) => {
    // Make clicking on events not redirect to google calendar page
    //jsEvent.preventDefault();
    return false;
  },
  googleCalendarApiKey: 'AIzaSyDwhCYaO9_tm994dE7JsN231-4V7P0agyQ',
  events: {
    googleCalendarId: 'secretprojectsyde@gmail.com'
  },
});
