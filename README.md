# Brick-Tamland
Find out if it's a "Here Comes The Sun" or "Here Comes The Rain Again" kind of day ahead

## Table of Contents

- [Project Name](#project-name)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Testing](#testing)

## Description

The purpose of the website is to view the current weather and 5-day forecast at any location insert into the search bar. Previous locations shall be stored for future reference and review so that the user does not have to input the search again.

## Features

This web-based weather app has the following features and functions:

1. Search, retrieve & display results leveraging OpenWeatherMap API [api.openweathermap.org]for a location's weather including:
    - current weather and 5-day forecast 
    - date
    - weather icon
    - temperature
    - wind speed
    - humidity.
2. Maintain a search history list that
    - Adds the searched city to the history when a new search is performed.
    - Allow users to click on a city in the search history to view its current and future conditions.
  
## Usage

The github repository may be found at https://github.com/sfmacdonald/Brick-Tamland

The live URL for the working website is [insert URL]

When accessed, the website should reflect the following image:

![alt text](<insert png>)

## Testing

1. **W**
   - Visit [insert URL]

2. **X**
    - 
        1. 
        2. 
    - 

3. **Z**
    - 
        1. 
        2. 
        3. 
    - 
        1. 
            - 
        2. 
        3. 
            - 


User Story:
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

Acceptance Criteria:
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

API key: 2f5fee7f8b7747f31078b723051d688b
- Please, use the endpoint api.openweathermap.org for your API calls
- Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2f5fee7f8b7747f31078b723051d688b