const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
const path = require('path');
app.use(cors());


// Question 1:
// Write a function that connects to https://restcountries.eu/ and gets a unique country from a
// specific name given using the Node back end and send it to the front end.
app.get('/api/country', (req, res) => {
  request.get("https://restcountries.eu/rest/v2/name/spain", (error, response, body)=>{
    if(error){
      return console.log(error)
    }
    
    //I know this json(JSON.parse(body) is weird 
    //but otherwhise the body's format 
    //is not received by the FE as an array
    res.json(JSON.parse(body))
  })
});

// Question 2:
// Using the same API ( https://restcountries.eu/ ), and from an array of string, write a function
// that returns a list of countries where their name matches at least a part of one of these string
// use the Node back end and send it to the front end.

app.get('/api/countries-match', (req, res) => {
  
    request.get("https://restcountries.eu/rest/v2/all", (error, response, body)=>{
      if(error){
        return console.log(error)
      }
     
      let arrayCountriesToMatch = ['Spain', 'Malta', 'non existing country']
      let arrayMatchedCountries = []

      JSON.parse(body).forEach(e => {

        arrayCountriesToMatch.forEach(element =>{
          if(e.name === element){
            let obj ={
              name : null
            }
            obj.name = e.name
            arrayMatchedCountries.push(obj)
          }

        })
      });
      console.log(arrayMatchedCountries)
      res.json(arrayMatchedCountries)
    })
});


// Question 3:
// Using the same API ( https://restcountries.eu/ ) in the React front end list all the countries
// and a field to filter the country by name.
app.get('/api/countries', (req, res) => {
  request.get("https://restcountries.eu/rest/v2/all", (error, response, body)=>{
    if(error){
      return console.log(error)
    }
    res.json(JSON.parse(body))
  })
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);