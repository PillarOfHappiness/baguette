const fs = require("fs");
// import fs from "fs";

fs.writeFile("message.txt", "Hello222", (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("message.txt",'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

/**
 * editing json file (under main enter "type": "module")
npm init -y //auto fills the package
npm i //npm install
npm i inquirer 
 */


//npm with node - creating a qr code image to user inputted website.
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs"

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Type in your URL: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    console.log(url);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("./qr_img2.png"));

    fs.writeFile("URL2.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });