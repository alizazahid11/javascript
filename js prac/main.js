function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
    case "60608" :
    cityName = "Chicago";
    break;
    case "68114" :
    cityName = "Omaha";
    break;
    case "53212" :
    cityName = "Milwaukee";
    }
    var mess1 = document.getElementById("zip").value = zipEntered;
    console.log("Zip code: ",mess1);
    var mess2 = document.getElementById("city").value = cityName;
    console.log("City name: ",mess2);
    }
function fillCountry() {
    var cities = ['Karachi','Quetta','Peshawar'];
    var Country;
    var city_Nmae = document.getElementById("City").value;
    switch (city_Nmae) {
    case "Karachi" :
    Country = "Pakistan";
    break;
    case "Quetta" :
    Country = "Pakistan";
    break;
    case "Peshawar" :
    Country = "Pakistan";
    }
    var mess3 = document.getElementById("City").value = city_Nmae;
    console.log("City name: : ",mess3);
    var mess4 = document.getElementById("country").value = Country;
    console.log("Country : ",mess4);
    }