

var car = {
    make: "Honda",
    model:"Civic",
    color: "Blue",
    mileage: 100000,
    isWorking: true, 
    honk: function() {
        alert("Hooonk");


    },
    driveToWork: function() {
        alert("Old mileage: " + car.mileage);

        car.mileage = car.mileage + 8;

        alert("New mileage: " + car.mileage);


    },


    driveAroundPlanet: function() {
        alert("Old mileage: " + car.mileage);

        car.mileage = car.mileage + 4000;

        alert("New mileage: " + car.mileage);
        alert("Car needs a tuneup!")

        car.isWorking = false;
    
    },

getTuneUp: function(){

    alert("The car is now working like new");
    car.isWorking = true;
}
}


function writeStats() {
    console.log("Make: " + car.make);
    console.log("Model: " + car.model);
    console.log("Color: " + car.color);
    console.log("Mileage: " + car.mileage);
    console.log("Is working: " + car.isWorking);
    console.log("______________________________________");


}


document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    //what ever USER pressed. Lower Case makes it so it won't care if it's Caps or non-caps. 
   // alert(letter);

    if (letter ==="h") {
        car.honk();
        writeStats();
    }

    if (letter ==="d") {
        car.driveToWork();
        writeStats();

    }

    if (letter ==="w") {
        car.driveAroundPlanet();
        writeStats();

    }

    if (letter === "t") {
        car.getTuneUp();
        writeStats();

    }
}


//writeStats();
//car.getTuneUp();
//car.driveAroundPlanet();
//car.driveToWork();
//car.honk()