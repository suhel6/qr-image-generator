/*import inquirer from "inquirer";
inquirer
    .prompt("get the qr image of any url, try here: ")
    .then((answer) => {
        console.log("kolamoto olive");
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }

    });




import inquirer from 'inquirer';

inquirer
    .prompt([
        name: "hello",
        message : "Type ur URL:",
        
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });*/


import fs from "fs"
import inquirer from "inquirer"
import qr from "qr-image"


inquirer.prompt(
    [{
        message: 'Please provide us with the URL: ',
        name: 'URL',
        type: 'input'

    }])
    .then(function (answer) {
        var i = Math.floor(Math.random() * 1000);
        const text = answer.URL;
        const qr_png = qr.image(text, { type: "png", ec_level: 'H' });
        qr_png.pipe(fs.createWriteStream("a" + i + ".png"))
    }); 