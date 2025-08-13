import prompt from "prompt"
import mainPrompt from "./prompts/prompt.main.js";

async function main() {
    prompt.get(mainPrompt, async function(err,choose){
        if(choose.select == 1){
            console.log("Escolheu qrCODE")
        }

        if(choose.select == 2){
            console.log("Escolheu Password")
        }
    });

    prompt.start();
}

main();