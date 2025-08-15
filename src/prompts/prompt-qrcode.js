import chalk from "chalk"


const promptQrcode = [
   {
     name:"link",
    description: chalk.yellow("Digite o link para gerar o QR CODE")
   },
   {
    name:"type",
    description: chalk.yellow("Escolha entre o tipo (1- Normal ou 92- Terminal"),
    pattern:/^[1-2]+$/,
    message: chalk.red("Escolha entre 1 ou 2")
   }
]

export default promptQrcode