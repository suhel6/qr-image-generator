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
