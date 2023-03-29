/*
PROJECT PISTON SLAP
DEVELOPED WITH OPENAI'S GPT 3.5 TURBO
COPYRIGHT (C) GAVIN R. ISGAR 2023
*/

// Useful libraries

// Define and handle creating our user-interface in Electron
const {BrowserWindow, app, ipcMain} = require("electron");
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800
    });
    win.loadFile("./index.html");
}
app.whenReady().then(() => {
    //createWindow();
})

// Get user input to pass through the sendCall() function; testing purposes only
const linebyline = require("linebyline");
let read = linebyline(process.stdin);
console.log("| INPUT VEHICLE VIN |");
read.on("line", (line, lineCount, byteCount) => {
    //sendChatCall(line);
    sendVINCall(line);
});

// Require the .env file that contains all of our important API keys
require("dotenv").config();

// Using OpenAI's Node.js module to make calls to the API; here we just require it and create a configuration
const {Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({
    apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(configuration);

// Create a ChatCompletion call to the API. Since it's async, we must wait for a response before doing anything else
const sendChatCall = (input) => {
    const request = openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "You help troubleshoot and diagnose vehicle problems."},
            {"role": "user", "content": input}
        ]
    }).then((response) => {
        console.log(`${response.data.choices[0].message.content}\n`);
        //document.getElementById("response").innerText == response.data.choices[0].message.content;
    });
}

const sendVINCall = (vin) => {
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`)
        .then((response) => response.json())
        .then((data) => {
            for(info in data.Results[0]) {
                if (data.Results[0][info] != "") {
                    console.log(data.Results[0][info]);
                }
            }
        });
};

/* *** IMPORTANT NOTES ***

The 'system' role specified in the API call
is used to define the behavior of the AI. The
'user' role is user (or developer) defined 
content to initiate conversation with the AI.
The 'assistant' role is similar to the 'system'
role, so chances are we will not use it. Memory
of prior conversations are actually defined in
calls to the API by adding more content to the
'messages' array, however this utilizes more 
tokens and calls could be declined once it 
reaches a max limit.
*/