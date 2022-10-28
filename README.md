# FeedFood App
'Feed Food' website is a food delivery service that allows users to search all restaurants in Israel that make deliveries and arrange them according to the customer's location.
On the website, restaurants are categorized according to their dishes type  and displayed by category.

## Click [Here](https://feed-food.herokuapp.com/) to order your favorite lunch.👈

## Why did I choose to build Feed Food?
I chose this project because I wanted a challenge in developing a Hebrew site that uses information from the country (this is less accessible and therefore there was no API for restaurants) and there is a real need for it - there are not many platforms that provide all the restaurants that make deliveries and the dishes they serve.
'Wolt' is available, but only in certain locations.
## Technology
### Client side :
The client side is written in React. I found that React is the most comfortable platform to use for state controller in my app.
### Server side :'
The server side is written in TypeScript and compiled into NodeJS through a gulp file and been uploaded to 'Heroku'. 
I Scrape food delivery Websites Using Node.js and Puppeteer 
to store the data in my DB( PostgreSQL ) and used google API to render the restaurants by location.

## The project process
At the onset of the project, I intended for the project to be based in Israel. However, I had never built a website in Hebrew, and that was the greatest challenge -
After I felt that writing the Frontend and Backend was easy for me, I tried to find an API for the restaurants in Israel and an API for dishes by category, I realized there is no such thing in Israel.
I realized that the most essential thing on my website was not found at all and there I wondered if I should change the project completely - then I got to know the package 'Puppeteer', and I learned how to work with it from scratch to write a script that goes through a website that stores all the restaurants that do delivery in Israel and enters information from the website into my DataBase. The script also goes through internal websites and enters the restaurants' dishes into the DataBase.
After this fundamental challenge, I continued to build the whole site but this central challenge showed me that there are diverse ways to solve big problems.
 ## How to run the project 
```bash
 git clone
 npm ci
 in one terminal run :'npm run server'
 in other terminal run : 'npm run start'
```
