# Brick-Tamland
Find out if it's a "Here Comes The Sun" or "Here Comes The Rain Again" kind of day ahead

## Table of Contents

- [Project Name](#brick-tamland)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Testing](#testing)

## Description

The purpose of the website is to view the current weather and 5-day forecast at any location inserted into the search bar. Previous locations shall be stored for future reference and review so that the user does not have to input the search again.

## Features

This web-based weather app has the following features and functions:

1. Search, retrieve & display results leveraging OpenWeatherMap API [api.openweathermap.org]for a location's weather including:
    - current weather and 5-day forecast 
    - date
    - weather icon
    - temperature
    - wind speed
    - humidity
2. Maintain a search history list that:
    - Adds the searched city to the history when a new search is performed.
    - Allow users to click on a city in the search history to view its current and future conditions.
  
## Usage

The github repository may be found at https://github.com/sfmacdonald/Brick-Tamland

The live URL for the working website is https://sfmacdonald.github.io/Brick-Tamland/

When accessed, the website should reflect the following image:

![Home](<./Screen Shot 2023-11-24 at 7.24.22 PM.png>)

## Testing

1. **Navigate to the Website**
   - Visit https://sfmacdonald.github.io/Brick-Tamland/

2. **Search Location**
    - Insert location name (i.e. Boston, New York, Fairbanks, etc.) and select the "Search" button.
        1. "Today's Forecast" shall present with the following information:
            -  date (formatted MM-DD-YYYY)
            - weather icon (displays icon from http://openweathermap.org/)
            - temperature (formatted in Fahrenheit)
            - humidity (formatted in %)
            - wind speed (formatted in m/s)
        2. "5-Day Forecast" with the same information as "Today's Forecast"
        3. The user shall note that the city input into the search field shall become a button in the list below the search. This is the historical search list that the user may select from in the future based on data in the local storage so that they do not require the need to input the same information over and over. 
    - Example of information above displayed on website: 
    ![New Search](<./Screen Shot 2023-11-24 at 7.25.52 PM.png>)
        
3. **Selecting A Previous Location**
    - Select a city listed in the historical search list by clicking on the name
        1. "Today's Forecast" & "5-Day Forecast" shall present to the user with the same data points as before however updated to the current time/date.
    - Example of information above displayed on website: 
        ![Select Old](<./Screen Shot 2023-11-24 at 7.29.17 PM.png>)