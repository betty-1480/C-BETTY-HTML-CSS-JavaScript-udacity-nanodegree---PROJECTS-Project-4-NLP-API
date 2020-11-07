//Empty object as Endpoint
let sentimentData = {}; 

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

// HtmlWebPackPlugin helps to dynamic reference to dist
app.use(express.static('dist')) //app.use(express.static('src/client'))

console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
    res.sendFile('dist/index.html') // HtmlWebPackPlugin helps to dynamic reference to dist/index.html file
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const fetch = require("node-fetch");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

//Initialize the project to distribution folder
app.use(express.static('dist'))

console.log(__dirname)

//API form MeaningCloud
const textApi = process.env.API_KEY;
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let lang = '&lang=en';

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

app.post('/analyse', async(req, res) => {
    try {

        // API call and store all data that comes form analysis of the test
        //const request=await fetch(finalURL);
        const url=`${baseURL}?key=${textApi}${lang}&txt=${req.body.formText}&model=general`;
        const request =await fetch(url);
        const dataFromApi = await request.json(); 
        sentimentData = {
            agreement : dataFromApi.agreement,
            subjectivity : dataFromApi.subjectivity,
            confidence : dataFromApi.confidence,
            irony : dataFromApi.irony
        }
        res.send(sentimentData);
        //console.log(sentimentData);
    } catch (error) {
        console.log(`Error:${error}`);
    }
});

app.get("/all", (req, res) => {
    console.log(sentimentData);
    res.send(sentimentData);

});

// Define what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
})