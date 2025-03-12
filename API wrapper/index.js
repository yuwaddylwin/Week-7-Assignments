const apikey = "74234dc7eccfadfeb6972ed22656d442"; // my openweathermap.org API key
const city_name = "Bangkok"; 

// Function to get the weather
async function getWeather(city_name, apikey, retries = 3) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}`;

  try {
    const response = await fetch(apiURL);

    // Check if the response is not OK (404, 500)
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status} - ${response.statusText}`);
    }

    //JSON data
    const data = await response.json();

    // Checking if the API return an error 
    if (data.cod !== 200) {
      throw new Error(`API Error: ${data.message}`);
    }

    // Return the weather data
    return data;
  } catch (error) {
    // If there are retries left, retry the request
    if (retries > 0) {
      console.log(`Retrying... (${retries} retries left)`);
      return getWeather(city_name, apikey, retries - 1);
    } else {
      console.error("Error fetching the weather data:", error.message);
    }
  }
}


getWeather(city_name, apikey)
  .then((data) => {
    if (data) {
      console.log("Weather Data:", data);
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });
