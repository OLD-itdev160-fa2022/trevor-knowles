//Constructed hotel data array
var hotels = [];

//Hotel constructor function
function Hotel (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function () {
        return this.rooms = this.booked;
    };
}

//Page Init function
var init = function () {
        //Construct hotels and add to the data array
        hotels.push(new Hotel('Hilton', 200, 150));
        hotels.push(new Hotel('Plister', 100, 50));
        hotels.push(new Hotel('Days Inn', 100, 40));

        //Write copyright date
        var today = new Date();
        document.getElementById('date').textContent = today.getFullYear();

};

//Hotel list item click handler
var hotelClick  = function (event) {
    //Get name of hotel that was clicked on
    var hotelName = event.target.innerHTML;

    //Find the hotel in the data array
    var hotel = hotels.find(function(hotel) { return hotel.name === hotelName});  
    if ( hotel !== undefined){
        // Get reference to elements and set the text content
        var name = document.getElementById('name');
        name.textContent = hotel.name;

        var rooms = document.getElementById('rooms');
        rooms.textContent = hotel.rooms;


        var booked = document.getElementById('booked');
        booked.textContent = hotel.booked;

        //Example one-List 
        document.getElementById('available').textContent = hotel.checkAvailability();

    }

};

//Wire up the click event for the hotel list
var list = document.getElementById('hotel-list');
list.onclick = hotelClick;






init();