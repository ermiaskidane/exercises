/////////////////// Open Weather API //////////////////////////
// **** Before we get started **** \\
/*
Until you get comfortable with your code what are the first things you should to make sure everything is working correctly??
*/

// ---- Setting Up API Account ---- \\

// Create an Account: https://home.openweathermap.org/users/sign_up
// !!!!!!!!!! Make sure to go to emails and verify your account !!!!!!!!!!!!

// Where to access the API: https://openweathermap.org/api

// Need to get your API Key

// Get JSON extention for Chrome formatter -- https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en

// Set the data to a variable

// ==== Example ==== \\

// ----------------------------------------------------------------------------------------------
// Step 1 - View JSON in the browser
const keyAPI = `1bc06bea4b37df653709ebfb0aae39fd`
const loc = `London`

let stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`

console.log(stringPassIn)

// Paste the URL in the console into browser and the JSON extension will allow you to see the JSON data
// Example = http://api.openweathermap.org/data/2.5/weather?q=London&appid=8826c10064648be786a4fc5a7a965748
// ----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Step 2 - Print the data into the DOM
let responseData

fetch(stringPassIn)
  .then((res) => res.json())
  .then((data) => (responseData = data))
  .then(() => {
    console.log(responseData)
    document.querySelector('.windSpeed').innerHTML = responseData.wind.speed
    document.querySelector('.place').innerHTML = responseData.name
    document.querySelector('#cloud').innerHTML =
      responseData.weather[0].description
  })
// ----------------------------------------------------------------------------------------------
