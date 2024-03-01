/*Name: Assignement1
Course Code: SODV1201
Class: Software Development Diploma
Author: Varavpreet Kaur*/

//fuction for converting f to C
function convertToFahrenheit(temperature) 
{
    return (temperature - 32) * 5 / 9;
}

// function to convert C to k
let convertToKelvin = function(temperature) 
{
    return temperature + 273.15;
};

// function performing actual conversion
function Conversion() 
{
    let tempInput = document.getElementById("temperature");
    let fahrenheit = parseFloat(tempInput.value);
    if (!isNaN(fahrenheit))
    {
        let celsius = convertToFahrenheit(fahrenheit);
        let kelvin = convertToKelvin(celsius);
        alert(fahrenheit + '°F = ' + celsius.toFixed(2) + '°C = ' + kelvin.toFixed(2) + 'K');
    } 
    else
    {
        alert("Please enter a valid temperature value.");
    }
}
document.getElementById("convertor").addEventListener("click", Conversion);

//showing current data on footer
var currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
document.getElementById('footer').innerHTML += " | Date: " + formattedDate;