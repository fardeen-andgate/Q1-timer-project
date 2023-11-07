#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import figlet from 'figlet';
import welcome from "./design/design.js";
welcome();
const sleep = (timer) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timer);
    });
};
async function drawCircularCountdown(seconds) {
    let timeLeft = seconds;
    const interval = 1000;
    let countdownText = figlet.textSync(timeLeft.toString(), {
        font: 'Small',
    });
    while (timeLeft > 0) {
        console.clear();
        console.log(chalk.greenBright(countdownText));
        await sleep(interval);
        timeLeft--;
        countdownText = figlet.textSync(timeLeft.toString(), {
            font: 'Small',
        });
    }
    console.clear();
    console.log(chalk.red('COUNTDOWN IS COMPLETE'));
}
async function App() {
    let req = await inquirer.prompt([{
            name: 'user',
            type: 'number',
            message: chalk.cyanBright('PLEASE SELECT TIME IN SECONDS'),
        }]);
    const seconds = req.user;
    await drawCircularCountdown(seconds);
    restartApp();
}
App();
async function restartApp() {
    let req = await inquirer.prompt([{
            name: 'user',
            type: 'list',
            message: 'DO YOU WANT TO RESTART COUNTDOWN APP',
            choices: [
                'Yes',
                'No'
            ]
        }]);
    if (req.user === 'Yes') {
        App();
    }
    else if (req.user === 'No') {
        console.log(chalk.greenBright('THANKS FOR USING THE TIMER APP'));
    }
}
