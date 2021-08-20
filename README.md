# React Weahter App

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Try On Local Machine](#try-on-local-machine)
  - [Built with](#built-with)
- [Author](#author)

## Overview

This is web app created with React

### The challenge

Users should be able to:

- Search for the city they want to get weather information for
- Get weather information about the city they searched for

### Screenshot

![](./screenshots/search.png)
![](./screenshots/result.png)

### Links

- Live Site URL: [React-weather-app](https://weather-react-v.netlify.app/)

### Try On Local Machine

If the deployed version does not work or you want to test the app on your local machine follow these steps:

- Clone this repo on your computer
- Open the project and run `npm install` in your console.
- If you don't have account in [AccuWeather APIs](https://developer.accuweather.com/) create one.
- When you are done creating your account you should go to the [My apps](https://developer.accuweather.com/user/me/apps) tab and create a new app
- When you are done get the api key from your app and go to /src/weatherApi/index.js and paste it there
  <br>
  example:

```Javascript
export const apiKey = "YourAP1KeyH3R3";
```

- then save the changes and run `npm start`

### Built with

- CSS Flex
- CSS Grid
- AccuWeather Api - RestApi
- Mobile-first workflow
- React - JS library
- Redux - State management library
- GSAP - JS animation library

## Author

- Website - [Ventsislav Borislavov](https://ventsislav-borislavov.netlify.app/)
