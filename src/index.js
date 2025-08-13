import prompt from "prompt"
import mainPrompt from "./prompts/prompt.main.js";
import chalk from "chalk";

async function main() {
    prompt.get(mainPrompt, async function(err,choose){
        if(choose.select == 1){
            console.log(chalk.green("Escolheu qrCODE"))
        }

        if(choose.select == 2){
            console.log(chalk.green("Escolheu Password"))
        }
    });

    prompt.start();
}

main();