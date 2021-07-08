class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    let e = document.getElementById("CountryList")
    let input = e.value
    let country;

    if (input === "USA") {
        country = usa;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[1];
        document.getElementById("Color2").style.backgroundColor = country.colors[2];
        document.getElementById("Color1").style.backgroundColor = country.colors[3];




        
    }
    else if (input === "Mexico") {
        country = mexico;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[1];
        document.getElementById("Color2").style.backgroundColor = country.colors[2];
        document.getElementById("Color1").style.backgroundColor = country.colors[3];
    }
    else if (input === "Algeria") {
        country = algeria;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[1];
        document.getElementById("Color2").style.backgroundColor = country.colors[2];
        document.getElementById("Color1").style.backgroundColor = country.colors[3];
    }

}
